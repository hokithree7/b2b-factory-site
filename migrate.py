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
asset_dir = "assets"
os.makedirs(asset_dir, exist_ok=True)

# Map to track downloaded assets to avoid duplicates
asset_map = {}

def download_asset(url, subfolder):
    if not url or url.startswith('data:') or url.startswith('javascript:'): return url
    if url in asset_map: return asset_map[url]
    
    try:
        parsed = urlparse(url)
        ext = os.path.splitext(parsed.path)[1]
        if not ext: ext = ".bin"
        filename = hashlib.md5(url.encode()).hexdigest() + ext
        
        folder_path = os.path.join(asset_dir, subfolder)
        os.makedirs(folder_path, exist_ok=True)
        local_path = os.path.join(folder_path, filename)
        
        print(f"  Downloading asset: {url}")
        r = requests.get(url, headers=headers, timeout=20)
        if r.status_code == 200:
            with open(local_path, 'wb') as f:
                f.write(r.content)
            # Return relative path for HTML
            rel_path = f"/assets/{subfolder}/{filename}"
            asset_map[url] = rel_path
            return rel_path
    except Exception as e:
        print(f"  Failed to download {url}: {e}")
    return url

for url in urls:
    parsed = urlparse(url)
    path = parsed.path
    target = "index.html" if not path or path == "/" else path.strip("/") + "/index.html"
    os.makedirs(os.path.dirname(target) if os.path.dirname(target) else ".", exist_ok=True)
    
    print(f"Fetching {url}...")
    try:
        r = requests.get(url, headers=headers, timeout=30)
        html = r.text
        
        # 1. 修复头部布局与隐藏冗余
        fix_css = '<style>.lang-selector, .header-lang, .lang-box, #CountrySelect, .skiptranslate { display: none !important; visibility: hidden !important; height: 0 !important; overflow: hidden !important; }</style>'
        html = html.replace('</head>', fix_css + '</head>')
        
        # 2. 本地化资源 (CSS, JS, Images, Videos)
        # Localize Images
        images = re.findall(r'src="([^"]*\.(?:png|jpg|jpeg|gif|svg|webp)[^"]*)"', html, re.I)
        for img_url in images:
            full_url = urljoin(url, img_url)
            local_img = download_asset(full_url, "images")
            html = html.replace(f'src="{img_url}"', f'src="{local_img}"')
        
        # Localize Stylesheets
        css_files = re.findall(r'<link[^>]*href="([^"]*\.css[^"]*)"', html, re.I)
        for css_url in css_files:
            full_url = urljoin(url, css_url)
            local_css = download_asset(full_url, "css")
            html = html.replace(f'href="{css_url}"', f'href="{local_css}"')
            
        # Localize Scripts
        js_files = re.findall(r'<script[^>]*src="([^"]*\.js[^"]*)"', html, re.I)
        for js_url in js_files:
            full_url = urljoin(url, js_url)
            local_js = download_asset(full_url, "js")
            html = html.replace(f'src="{js_url}"', f'src="{local_js}"')

        # Localize Videos
        videos = re.findall(r'<source[^>]*src="([^"]*\.(?:mp4|webm|ogg)[^"]*)"', html, re.I)
        for vid_url in videos:
            full_url = urljoin(url, vid_url)
            local_vid = download_asset(full_url, "videos")
            html = html.replace(f'src="{vid_url}"', f'src="{local_vid}"')

        # 3. Formspree 接口对接 maqlkzwa
        html = html.replace('action="javaScript:void(0)"', 'action="https://formspree.io/f/maqlkzwa" method="POST"')
        html = re.sub(r'<form([^>]*)action="[^"]*"', r'<form \1 action="https://formspree.io/f/maqlkzwa" method="POST"', html)
        
        # 4. 字段补全与链接清理
        html = html.replace('id="fileInput"', 'name="attachment" id="fileInput"')
        html = html.replace('id="inquiry_email"', 'name="email" id="inquiry_email"')
        html = html.replace('id="inquiry_name"', 'name="name" id="inquiry_name"')
        html = html.replace('id="inquiry_company"', 'name="company" id="inquiry_company"')
        html = html.replace('id="inquiry_mobile"', 'name="whatsapp" id="inquiry_mobile"')
        html = html.replace('id="inquiry_message"', 'name="message" id="inquiry_message"')
        html = html.replace('https://www.hlktape.com/', '/')
        
        # 5. 注入防劫持脚本
        fix_script = """
        <script>
        document.addEventListener("DOMContentLoaded", function() {
            setTimeout(function() {
                document.querySelectorAll("form").forEach(function(form) {
                    form.action = "https://formspree.io/f/maqlkzwa";
                    form.method = "POST";
                    var newForm = form.cloneNode(true);
                    form.parentNode.replaceChild(newForm, form);
                });
            }, 1200);
        });
        </script>
        """
        html = html.replace('</body>', fix_script + '</body>')
        
        with open(target, "w", encoding="utf-8") as f:
            f.write(html)
        time.sleep(0.2)
    except Exception as e:
        print(f"Error: {e}")
