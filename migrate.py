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
core_fonts = ["https://shopcdnpro.grainajz.com/tpl-common/common/css/fonts/iconfont/iconfont.woff2", "https://shopcdnpro.grainajz.com/tpl-common/common/css/fonts/iconfont/iconfont.woff", "https://shopcdnpro.grainajz.com/tpl-common/common/css/fonts/iconfont/iconfont.ttf", "https://shopcdnpro.grainajz.com/tpl-common/common/css/fonts/iconfont/iconfont-new.woff2", "https://shopcdnpro.grainajz.com/tpl-common/common/css/fonts/iconfont/iconfont-new.woff", "https://shopcdnpro.grainajz.com/tpl-common/common/css/fonts/iconfont/iconfont-new.ttf"]
local_fonts = [download_asset(f, "fonts") for f in core_fonts]

for url in urls:
    parsed = urlparse(url)
    path = parsed.path
    target = "index.html" if not path or path == "/" else path.strip("/") + "/index.html"
    os.makedirs(os.path.dirname(target) if os.path.dirname(target) else ".", exist_ok=True)
    print(f"Syncing: {url}")
    r = requests.get(url, headers=headers, timeout=30)
    html = r.text
    
    # 1. UI Patch: Hide Search + Fix Flags Dropdown + Font-Face
    ui_patch = f'''
    <style>
    .search-song.search-box-only {{ display: none !important; }}
    .header-lang .lang-selector i {{ background-image: url("{flag_sprite}") !important; background-size: 240px auto !important; }}
    .header-lang .lang-selector:hover .lang-box {{ display: block !important; opacity: 1 !important; visibility: visible !important; }}
    .lang-selector .current-lang {{ cursor: pointer !important; padding: 10px !important; }}
    @font-face {{ font-family: "qico"; src: url("{local_fonts[0]}") format("woff2"), url("{local_fonts[1]}") format("woff"), url("{local_fonts[2]}") format("truetype"); }}
    @font-face {{ font-family: "iconfont"; src: url("{local_fonts[3]}") format("woff2"), url("{local_fonts[4]}") format("woff"), url("{local_fonts[5]}") format("truetype"); }}
    .skiptranslate, .goog-te-banner-frame {{ display: none !important; }}
    </style>
    '''
    html = html.replace('</head>', ui_patch + '</head>')
    
    # 2. Localize Assets
    for img in re.findall(r'src="([^"]*?\.(?:png|jpg|jpeg|gif|svg|webp)[^"]*?)"', html, re.I):
        html = html.replace(f'src="{img}"', f'src="{download_asset(urljoin(url, img), "images")}"')
    for css in re.findall(r'href="([^"]*?\.css[^"]*?)"', html, re.I):
        html = html.replace(f'href="{css}"', f'href="{download_asset(urljoin(url, css), "css")}"')
    for js in re.findall(r'src="([^"]*?\.js[^"]*?)"', html, re.I):
        html = html.replace(f'src="{js}"', f'src="{download_asset(urljoin(url, js), "js")}"')

    # 3. Form & Dropdown Overhaul
    html = html.replace('<select id="inquiry_code"', '<select name="country_code" id="inquiry_code"')
    html = html.replace('<option class="bs-title-option" value=""></option>', '<option value="" disabled selected>Code</option>')
    for old, new in [('id="inquiry_email"', 'name="email" id="inquiry_email"'), ('id="inquiry_name"', 'name="name" id="inquiry_name"'), ('id="inquiry_mobile"', 'name="phone" id="inquiry_mobile"'), ('id="inquiry_message"', 'name="message" id="inquiry_message"'), ('id="fileInput"', 'name="attachment" id="fileInput"')]:
        html = html.replace(old, new)
    html = re.sub(r'<form([^>]*)action="[^"]*"', r'<form \1 action="https://formspree.io/f/maqlkzwa" method="POST"', html)
    html = html.replace('action="javaScript:void(0)"', 'action="https://formspree.io/f/maqlkzwa" method="POST"')

    # 4. Global Link/Domain Clean
    html = html.replace('https://www.hlktape.com/', '/')
    
    # 5. The "Aggressive Form Cleaner" Script
    fix_js = """
    <script>
    (function() {
        var cleanForms = function() {
            document.querySelectorAll("form").forEach(function(form) {
                if (form.getAttribute('data-cleaned') === 'true') return;
                form.action = "https://formspree.io/f/maqlkzwa";
                form.method = "POST";
                form.onsubmit = null;
                var newForm = form.cloneNode(true);
                newForm.setAttribute('data-cleaned', 'true');
                form.parentNode.replaceChild(newForm, form);
            });
        };
        // Run multiple times to beat late-loading scripts
        cleanForms(); 
        setTimeout(cleanForms, 500); 
        setTimeout(cleanForms, 2000);
        setTimeout(cleanForms, 5000);
    })();
    </script>
    """
    html = html.replace('</body>', fix_js + '</body>')
    with open(target, "w", encoding="utf-8") as f: f.write(html)
