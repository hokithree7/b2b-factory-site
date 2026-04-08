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
        ext = os.path.splitext(parsed.path)[1]
        if not ext: ext = ".bin"
        filename = hashlib.md5(url.encode()).hexdigest() + ext
        local_dir = os.path.join("assets", subfolder)
        os.makedirs(local_dir, exist_ok=True)
        local_path = os.path.join(local_dir, filename)
        
        print(f"  Downloading: {url}")
        r = requests.get(url, headers=headers, timeout=30)
        if r.status_code == 200:
            with open(local_path, 'wb') as f: f.write(r.content)
            rel_path = f"/assets/{subfolder}/{filename}"
            asset_map[clean_url] = rel_path
            return rel_path
    except: pass
    return url

# Pre-download core assets
flag_sprite = download_asset("https://shopcdnpro.grainajz.com/tpl-common/common/images/flags.png", "images")
core_fonts = [
    "https://shopcdnpro.grainajz.com/tpl-common/common/css/fonts/iconfont/iconfont.woff2",
    "https://shopcdnpro.grainajz.com/tpl-common/common/css/fonts/iconfont/iconfont.woff",
    "https://shopcdnpro.grainajz.com/tpl-common/common/css/fonts/iconfont/iconfont.ttf",
    "https://shopcdnpro.grainajz.com/tpl-common/common/css/fonts/iconfont/iconfont-new.woff2",
    "https://shopcdnpro.grainajz.com/tpl-common/common/css/fonts/iconfont/iconfont-new.woff",
    "https://shopcdnpro.grainajz.com/tpl-common/common/css/fonts/iconfont/iconfont-new.ttf"
]
local_fonts = [download_asset(f, "fonts") for f in core_fonts]

for url in urls:
    parsed = urlparse(url)
    path = parsed.path
    target = "index.html" if not path or path == "/" else path.strip("/") + "/index.html"
    os.makedirs(os.path.dirname(target) if os.path.dirname(target) else ".", exist_ok=True)
    
    print(f"Syncing: {url}")
    r = requests.get(url, headers=headers, timeout=30)
    html = r.text
    
    # 1. UI Fixes: CSS for Flags and Font-Face
    ui_patch = f'''
    <style>
    .header-lang .lang-selector i {{ background-image: url("{flag_sprite}") !important; background-size: 240px auto !important; }}
    @font-face {{ font-family: "qico"; src: url("{local_fonts[0]}") format("woff2"), url("{local_fonts[1]}") format("woff"), url("{local_fonts[2]}") format("truetype"); }}
    @font-face {{ font-family: "iconfont"; src: url("{local_fonts[3]}") format("woff2"), url("{local_fonts[4]}") format("woff"), url("{local_fonts[5]}") format("truetype"); }}
    .lang-box, #CountrySelect, .skiptranslate, .goog-te-banner-frame {{ display: none !important; }}
    .header-lang {{ display: block !important; opacity: 1 !important; }}
    </style>
    '''
    html = html.replace('</head>', ui_patch + '</head>')
    
    # 2. Localize Assets
    for img in re.findall(r'src="([^"]*?\\.(?:png|jpg|jpeg|gif|svg|webp)[^"]*?)"', html, re.I):
        html = html.replace(f'src="{img}"', f'src="{download_asset(urljoin(url, img), "images")}"')
    for css in re.findall(r'href="([^"]*?\\.css[^"]*?)"', html, re.I):
        html = html.replace(f'href="{css}"', f'href="{download_asset(urljoin(url, css), "css")}"')
    for js in re.findall(r'src="([^"]*?\\.js[^"]*?)"', html, re.I):
        html = html.replace(f'src="{js}"', f'src="{download_asset(urljoin(url, js), "js")}"')

    # 3. Form Fix: Country Code Placeholder + Names
    html = html.replace('<option class="bs-title-option" value=""></option>', '<option value="" disabled selected>Select Code</option>')
    html = html.replace('id="inquiry_email"', 'name="email" id="inquiry_email"')
    html = html.replace('id="inquiry_name"', 'name="name" id="inquiry_name"')
    html = html.replace('id="inquiry_mobile"', 'name="phone" id="inquiry_mobile"')
    html = html.replace('id="inquiry_code"', 'name="country_code" id="inquiry_code"')
    html = html.replace('id="inquiry_message"', 'name="message" id="inquiry_message"')
    html = html.replace('id="fileInput"', 'name="attachment" id="fileInput"')

    # 4. Final Form Redirection
    html = re.sub(r'<form([^>]*)action="[^"]*"', r'<form \1 action="https://formspree.io/f/maqlkzwa" method="POST"', html)
    html = html.replace('action="javaScript:void(0)"', 'action="https://formspree.io/f/maqlkzwa" method="POST"')
    
    # 5. Domain and Hijack Fix
    html = html.replace('https://www.hlktape.com/', '/')
    fix_js = '<script>document.addEventListener("DOMContentLoaded",function(){setTimeout(function(){document.querySelectorAll("form").forEach(function(f){if(f.action.indexOf("formspree")===-1){f.action="https://formspree.io/f/maqlkzwa";f.method="POST";var n=f.cloneNode(true);f.parentNode.replaceChild(n,f);}});},1500);});</script>'
    html = html.replace('</body>', fix_js + '</body>')
    
    with open(target, "w", encoding="utf-8") as f: f.write(html)
