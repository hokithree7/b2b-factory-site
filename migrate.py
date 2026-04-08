import os, requests, re, json, time, hashlib
from urllib.parse import urlparse, urljoin

urls = [
  'https://www.hlktape.com/', 'https://www.hlktape.com/about-us', 'https://www.hlktape.com/custom', 
  'https://www.hlktape.com/products', 'https://www.hlktape.com/nasal-strips', 'https://www.hlktape.com/mouth-tape', 
  'https://www.hlktape.com/newsblog', 'https://www.hlktape.com/contact-us', 'https://www.hlktape.com/privacy',
  'https://www.hlktape.com/application/sleep-mouthtape', 'https://www.hlktape.com/application/tira-nasal', 
  'https://www.hlktape.com/application/tiras-nasales', 'https://www.hlktape.com/application/custom-nasal-strip-supplier', 
  'https://www.hlktape.com/application/mouth-tape-oem', 'https://www.hlktape.com/application/custom-size-mouth-tape', 
  'https://www.hlktape.com/application/nasal-strip-manufacturer', 'https://www.hlktape.com/ar/', 
  'https://www.hlktape.com/nl/', 'https://www.hlktape.com/fr/', 'https://www.hlktape.com/de/', 
  'https://www.hlktape.com/it/', 'https://www.hlktape.com/ru/', 'https://www.hlktape.com/es/', 
  'https://www.hlktape.com/mouth-tape1', 'https://www.hlktape.com/nasal-strips1'
]

headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"}
asset_map = {}

def download_asset(url, subfolder):
    if not url or url.startswith('data:') or url.startswith('javascript:'): return url
    clean_url = url.split('?')[0].split('#')[0]
    if clean_url in asset_map: return asset_map[clean_url]
    
    try:
        parsed = urlparse(url)
        ext = os.path.splitext(parsed.path)[1]
        if not ext: ext = ".bin"
        filename = hashlib.md5(url.encode()).hexdigest() + ext
        local_dir = os.path.join("assets", subfolder)
        os.makedirs(local_dir, exist_ok=True)
        local_path = os.path.join(local_dir, filename)
        
        print(f"  Fetching: {url}")
        r = requests.get(url, headers=headers, timeout=30)
        if r.status_code == 200:
            with open(local_path, 'wb') as f: f.write(r.content)
            rel_path = f"/assets/{subfolder}/{filename}"
            asset_map[clean_url] = rel_path
            return rel_path
    except: pass
    return url

for url in urls:
    parsed = urlparse(url)
    path = parsed.path
    target = "index.html" if not path or path == "/" else path.strip("/") + "/index.html"
    os.makedirs(os.path.dirname(target) if os.path.dirname(target) else ".", exist_ok=True)
    
    print(f"Syncing: {url}")
    r = requests.get(url, headers=headers, timeout=30)
    html = r.text
    
    # 1. 修复头部 UI：恢复语言选择器，限制国旗大小
    ui_fix = '<style>.lang-selector.header-lang{display:inline-block !important;opacity:1 !important;pointer-events:auto !important;}.lang-selector img{width:24px !important;height:auto !important;object-fit:contain !important;}.lang-box, #CountrySelect, .skiptranslate, .goog-te-banner-frame { display: none !important; opacity: 0 !important; }</style>'
    html = html.replace('</head>', ui_fix + '</head>')
    
    # 2. 深度本地化资产 (图片, 字体, CSS, JS)
    # Images
    for img in re.findall(r'src="([^"]*?\.(?:png|jpg|jpeg|gif|svg|webp)[^"]*?)"', html, re.I):
        html = html.replace(f'src="{img}"', f'src="{download_asset(urljoin(url, img), "images")}"')
    # Fonts & Backgrounds in CSS (Rough scan)
    for css in re.findall(r'href="([^"]*?\.css[^"]*?)"', html, re.I):
        html = html.replace(f'href="{css}"', f'href="{download_asset(urljoin(url, css), "css")}"')
    # Scripts
    for js in re.findall(r'src="([^"]*?\.js[^"]*?)"', html, re.I):
        html = html.replace(f'src="{js}"', f'src="{download_asset(urljoin(url, js), "js")}"')
    
    # 3. 强制修复 Iconfont 字体 (从原站 CSS 中提取常见字体路径并强制本地化)
    fonts = ['iconfont.woff2', 'iconfont.woff', 'iconfont.ttf']
    for f in fonts:
        font_url = f"https://shopcdnpro.grainajz.com/inst/Ain/2912/67765/common/fonts/iconfont/{f}"
        download_asset(font_url, "fonts")

    # 4. Formspree 接口 maqlkzwa + 提交后提示
    html = html.replace('action="javaScript:void(0)"', 'action="https://formspree.io/f/maqlkzwa" method="POST"')
    html = re.sub(r'<form([^>]*)action="[^"]*"', r'<form \1 action="https://formspree.io/f/maqlkzwa" method="POST"', html)
    for old, new in [('id="inquiry_email"', 'name="email" id="inquiry_email"'), ('id="inquiry_name"', 'name="name" id="inquiry_name"'), ('id="fileInput"', 'name="attachment" id="fileInput"')]:
        html = html.replace(old, new)

    # 5. 注入“成功提交”拦截器
    success_js = """
    <script>
    document.addEventListener("DOMContentLoaded", function() {
        setTimeout(function() {
            document.querySelectorAll("form").forEach(function(form) {
                form.action = "https://formspree.io/f/maqlkzwa";
                form.method = "POST";
                var newForm = form.cloneNode(true);
                form.parentNode.replaceChild(newForm, form);
            });
        }, 1500);
    });
    </script>
    """
    html = html.replace('</body>', success_js + '</body>')
    html = html.replace('https://www.hlktape.com/', '/')
    
    with open(target, "w", encoding="utf-8") as f: f.write(html)
