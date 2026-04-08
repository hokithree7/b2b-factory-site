import os, requests, re, json, time
from urllib.parse import urlparse

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

for url in urls:
    parsed = urlparse(url)
    path = parsed.path
    target = "index.html" if not path or path == "/" else path.strip("/") + "/index.html"
    os.makedirs(os.path.dirname(target) if os.path.dirname(target) else ".", exist_ok=True)
    
    print(f"Fetching {url}...")
    try:
        r = requests.get(url, headers=headers, timeout=30)
        html = r.text
        
        # 1. 清除旧弹窗
        html = re.sub(r"<link[^>]*lang_selector2_[^>]*>", "", html)
        html = re.sub(r"<div[^>]*lang-selector[^>]*>.*?</div>", "", html, flags=re.DOTALL)
        
        # 2. 注入 Formspree 接口并强制设为 POST
        html = html.replace('action="javaScript:void(0)"', 'action="https://formspree.io/f/mjvndzoy" method="POST"')
        html = re.sub(r'<form([^>]*)action="[^"]*"', r'<form \1 action="https://formspree.io/f/mjvndzoy" method="POST"', html)
        
        # 3. 强制注入 name 属性（确保邮件不为空）
        html = html.replace('id="fileInput"', 'name="attachment" id="fileInput"')
        html = html.replace('id="inquiry_email"', 'name="email" id="inquiry_email"')
        html = html.replace('id="inquiry_name"', 'name="name" id="inquiry_name"')
        html = html.replace('id="inquiry_company"', 'name="company" id="inquiry_company"')
        html = html.replace('id="inquiry_mobile"', 'name="whatsapp" id="inquiry_mobile"')
        html = html.replace('id="inquiry_message"', 'name="message" id="inquiry_message"')
        
        # 4. 修复 YouTube 双协议头
        html = html.replace('https://https://', 'https://')
        html = html.replace('www.youtube.com/@HLKTape', 'https://www.youtube.com/@HLKTape')
        
        # 5. 注入“劫持清除器”脚本
        fix_script = """
        <script>
        document.addEventListener("DOMContentLoaded", function() {
            setTimeout(function() {
                document.querySelectorAll("form").forEach(function(form) {
                    var newForm = form.cloneNode(true);
                    form.parentNode.replaceChild(newForm, form);
                });
            }, 2000);
        });
        </script>
        """
        html = html.replace('</body>', fix_script + '</body>')
        
        with open(target, "w", encoding="utf-8") as f:
            f.write(html)
        time.sleep(0.5)
    except Exception as e:
        print(f"Error processing {url}: {e}")
