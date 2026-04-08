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

headers = {"User-Agent": "Mozilla/5.0"}
asset_map = {}

def download_asset(url, subfolder):
    if not url or url.startswith('data:') or url.startswith('javascript:') or url.startswith('/assets/'): return url
    clean_url = url.split('?')[0].split('#')[0]
    if clean_url in asset_map: return asset_map[clean_url]
    try:
        parsed = urlparse(url)
        ext = os.path.splitext(parsed.path)[1].split('?')[0]
        if not ext: ext = ".bin"
        filename = hashlib.md5(url.encode()).hexdigest() + ext
        local_dir = os.path.join("assets", subfolder)
        os.makedirs(local_dir, exist_ok=True)
        local_path = os.path.join(local_dir, filename)
        r = requests.get(url, headers=headers, timeout=30)
        if r.status_code == 200:
            with open(local_path, 'wb') as f: f.write(r.content)
            rel_path = f"/assets/{subfolder}/{filename}"
            asset_map[clean_url] = rel_path
            return rel_path
    except: pass
    return url

flag_sprite = download_asset("https://shopcdnpro.grainajz.com/tpl-common/common/images/flags.png", "images")
core_fonts = ["https://shopcdnpro.grainajz.com/tpl-common/common/css/fonts/iconfont/iconfont.woff2", "https://shopcdnpro.grainajz.com/tpl-common/common/css/fonts/iconfont/iconfont.woff", "https://shopcdnpro.grainajz.com/tpl-common/common/css/fonts/iconfont/iconfont.ttf"]
local_fonts = [download_asset(f, "fonts") for f in core_fonts]

for url in urls:
    parsed = urlparse(url)
    path = parsed.path
    target = "index.html" if not path or path == "/" else path.strip("/") + "/index.html"
    os.makedirs(os.path.dirname(target) if os.path.dirname(target) else ".", exist_ok=True)
    
    print(f"Syncing: {url}")
    r = requests.get(url, headers=headers, timeout=30)
    html = r.text
    
    # 1. UI 修正：移除 Search，修复国旗下拉，强制显示
    ui_patch = f'''
    <style>
    .search-song.search-box-only, .search-box-only, .song-search-form {{ display: none !important; }}
    .header-lang .lang-selector i {{ background-image: url("{flag_sprite}") !important; background-size: 240px auto !important; display: inline-block !important; width: 24px !important; height: 16px !important; }}
    .header-lang .lang-selector:hover .lang-box {{ display: block !important; opacity: 1 !important; visibility: visible !important; }}
    .lang-selector .current-lang {{ cursor: pointer !important; }}
    @font-face {{ font-family: "iconfont"; src: url("{local_fonts[0]}") format("woff2"), url("{local_fonts[1]}") format("woff"), url("{local_fonts[2]}") format("truetype"); }}
    .skiptranslate, .goog-te-banner-frame {{ display: none !important; }}
    </style>
    '''
    html = html.replace('</head>', ui_patch + '</head>')
    
    # 2. 字段名补全 (Formspree 必需)
    for old, new in [('id="inquiry_email"', 'name="email" id="inquiry_email"'), 
                     ('id="inquiry_name"', 'name="name" id="inquiry_name"'), 
                     ('id="inquiry_message"', 'name="message" id="inquiry_message"'),
                     ('id="inquiry_mobile"', 'name="phone" id="inquiry_mobile"'),
                     ('id="inquiry_code"', 'name="country_code" id="inquiry_code"'),
                     ('id="fileInput"', 'name="attachment" id="fileInput"')]:
        html = html.replace(old, new)
    
    # 3. 本地化资源
    for img in re.findall(r'src="([^"]*?\.(?:png|jpg|jpeg|gif|svg|webp)[^"]*?)"', html, re.I):
        html = html.replace(f'src="{img}"', f'src="{download_asset(urljoin(url, img), "images")}"')
    for css in re.findall(r'href="([^"]*?\.css[^"]*?)"', html, re.I):
        html = html.replace(f'href="{css}"', f'href="{download_asset(urljoin(url, css), "css")}"')
    for js in re.findall(r'src="([^"]*?\.js[^"]*?)"', html, re.I):
        html = html.replace(f'src="{js}"', f'src="{download_asset(urljoin(url, js), "js")}"')

    # 4. 接入 Formspree AJAX SDK (根据您的文档指南)
    ajax_fix = """
    <script src="https://unpkg.com/@formspree/ajax@1" defer></script>
    <script>
    window.formspree = window.formspree || function () { (formspree.q = formspree.q || []).push(arguments); };
    document.addEventListener("DOMContentLoaded", function() {
        setTimeout(function() {
            document.querySelectorAll("form").forEach(function(form, index) {
                form.id = "inquiry-form-" + index;
                form.action = "https://formspree.io/f/maqlkzwa";
                form.method = "POST";
                // 强制解除所有旧脚本的绑定
                var newForm = form.cloneNode(true);
                form.parentNode.replaceChild(newForm, form);
                // 使用 Formspree AJAX 初始化
                formspree('initForm', { formElement: '#' + newForm.id, formId: 'maqlkzwa' });
            });
        }, 2000);
    });
    </script>
    """
    html = html.replace('</body>', ajax_fix + '</body>')
    html = html.replace('https://www.hlktape.com/', '/')
    
    with open(target, "w", encoding="utf-8") as f: f.write(html)
