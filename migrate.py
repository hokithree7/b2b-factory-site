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
    if not url or any(x in url for x in ['data:', 'javascript:', 'base64']): return url
    # Clean URL for mapping
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
        
        print(f"  Asset: {url}")
        r = requests.get(url, headers=headers, timeout=20)
        if r.status_code == 200:
            with open(local_path, 'wb') as f: f.write(r.content)
            # Return absolute path from root
            rel_path = f"/assets/{subfolder}/{filename}"
            asset_map[clean_url] = rel_path
            return rel_path
    except: pass
    return url

def process_css(css_content, base_url):
    # Find all url() in CSS and localize them
    urls_in_css = re.findall(r'url\s*\(\s*[\'"]?([^\'"\)]+)[\'"]?\s*\)', css_content)
    for u in urls_in_css:
        full_u = urljoin(base_url, u)
        sub = "fonts" if any(x in u for x in ['.woff', '.ttf', '.eot', '.svg']) else "images"
        local_u = download_asset(full_u, sub)
        css_content = css_content.replace(u, local_u)
    return css_content

for url in urls:
    parsed = urlparse(url)
    path = parsed.path
    target = "index.html" if not path or path == "/" else path.strip("/") + "/index.html"
    os.makedirs(os.path.dirname(target) if os.path.dirname(target) else ".", exist_ok=True)
    
    print(f"Processing Page: {url}")
    r = requests.get(url, headers=headers, timeout=30)
    html = r.text
    
    # 1. Localize Images
    for img in re.findall(r'src="([^"]*?\.(?:png|jpg|jpeg|gif|svg|webp)[^"]*?)"', html, re.I):
        html = html.replace(f'src="{img}"', f'src="{download_asset(urljoin(url, img), "images")}"')
    
    # 2. Localize & Process CSS
    for css_url in re.findall(r'href="([^"]*?\.css[^"]*?)"', html, re.I):
        full_css_url = urljoin(url, css_url)
        # Special handling for CSS content
        try:
            css_r = requests.get(full_css_url, headers=headers, timeout=20)
            if css_r.status_code == 200:
                processed_css = process_css(css_r.text, full_css_url)
                # Save processed CSS locally
                ext = ".css"
                filename = hashlib.md5(full_css_url.encode()).hexdigest() + ext
                css_local_path = os.path.join("assets/css", filename)
                os.makedirs("assets/css", exist_ok=True)
                with open(css_local_path, 'w', encoding='utf-8') as f: f.write(processed_css)
                html = html.replace(f'href="{css_url}"', f'href="/assets/css/{filename}"')
        except: pass

    # 3. Localize Scripts
    for js in re.findall(r'src="([^"]*?\.js[^"]*?)"', html, re.I):
        html = html.replace(f'src="{js}"', f'src="{download_asset(urljoin(url, js), "js")}"')

    # 4. Final Form & UI Fixes
    ui_fix = '<style>.search-song.search-box-only, .search-box-only, .song-search-form { display: none !important; } .header-lang .lang-selector:hover .lang-box { display: block !important; opacity: 1 !important; visibility: visible !important; } .lang-selector img { width: 24px !important; height: auto !important; }</style>'
    html = html.replace('</head>', ui_fix + '</head>')
    
    # Formspree AJAX Injection
    ajax_script = """
    <script src="https://unpkg.com/@formspree/ajax@1" defer></script>
    <script>
    window.formspree = window.formspree || function () { (formspree.q = formspree.q || []).push(arguments); };
    document.addEventListener("DOMContentLoaded", function() {
        setTimeout(function() {
            document.querySelectorAll("form").forEach(function(form, i) {
                form.id = "fs-form-" + i;
                var nf = form.cloneNode(true); form.parentNode.replaceChild(nf, form);
                formspree('initForm', { formElement: '#' + nf.id, formId: 'maqlkzwa' });
            });
        }, 1500);
    });
    </script>
    """
    html = html.replace('</body>', ajax_script + '</body>')
    html = html.replace('https://www.hlktape.com/', '/')
    
    with open(target, "w", encoding="utf-8") as f: f.write(html)
