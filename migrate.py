import os, requests, re, json
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
  'https://www.hlktape.com/mouth-tape1', 'https://www.hlktape.com/nasal-strips1', 
  'https://www.hlktape.com/transparent-breathe-right-nasal-strips-nose-tape-for-better-sleep-anti-snoring-goede-nachtrust-hlk',
  'https://www.hlktape.com/sweatproof-nasal-strips-adhesive-nose-tape-for-athletic-performance-sports-gym-ce-transparent-for-breathing-and-sleep-hlk',
  'https://www.hlktape.com/sleep-nose-strips-waterproof-breathing-anti-snoring-breathe-right-nasal-strips-new-arrival-hlk-manufacturer',
  'https://www.hlktape.com/scented-nasal-strips-lavender-mint-camomile-eucalypt-transparent-nose-tape-breathe-patches-hlk',
  'https://www.hlktape.com/premium-nonwoven-nasal-strips-for-better-breathing-sleep-waterproof-anti-snoring-custom-colorful-package-2025',
  'https://www.hlktape.com/personalized-anti-snoring-nasal-strips-for-sleep-and-athletic-use-custom-breathable-nose-tapes-for-comfortable-nighttime-use-hlk',
  'https://www.hlktape.com/nose-tape-for-better-breathing-and-sleeping-hypoallergenic-soft-safe-immediate-relief-customized-cute-colorful-pattern-hlk',
  'https://www.hlktape.com/nasal-strips-for-better-breathing-sleep-transparent-clear-pe-custom-package-hlk',
  'https://www.hlktape.com/medical-grade-nasal-strips-latex-free-scented-extra-strength-nose-tapes-for-better-breathing-and-snoring-hlk',
  'https://www.hlktape.com/hypoallergenic-ventilated-nasal-strips--sensitive-skin-friendly-relieves-nasal-congestion--improves-breathing-hlk',
  'https://www.hlktape.com/hlk-extra-strength-waterproof-nasal-strips-ceapproved-better-breath-6619-sports-nasal-stripes-oem/odm-hlktape',
  'https://www.hlktape.com/gentle-nasal-strips-for-sports-and-nighttime-sleep-personalized-anti-snoring-nose-patches-hlk-2025',
  'https://www.hlktape.com/extra-strength-waterproof-nasal-strips-by-hlk--ce-certified-6619-mm-sport--sleep-breathing-tape-oem/odm',
  'https://www.hlktape.com/customized-nose-strips-non-woven-breathe-right-nose-patch-for-better-breathing-nose-plaster-hlk',
  'https://www.hlktape.com/comfort-fit-nasal-strips-for-congestion--snoring--hypoallergenic-latex-free-sweatproof-extra-strength-hlk',
  'https://www.hlktape.com/bulk-sport-black-nasal-strips-breathe-right-nose-tape-patch-anti-snoring-ventilation-for-breathing-hlk',
  'https://www.hlktape.com/breathing-and-snoring-nasal-strips-customized-breathe-right-nose-plaster-bulk-better-breath-hlk-2025',
  'https://www.hlktape.com/breathe-right-nasal-strips-for-better-sleeping-stop-snoring-latex-free-sports-nose-patch-tape-breathing-hlk-2025',
  'https://www.hlktape.com/better-breath-nasal-strips-anti-snoring-6619-sports-nasal-stripes-oem/odm-hlktape',
  'https://www.hlktape.com/anti-snoring-nose-strips-for-better-breathing-sports-nasal-strips-for-athletes-custom-hlk',
  'https://www.hlktape.com/product-hlk-premium-material-beauty-precut-anti-wrinkle-private-label-kinesiology-double-chin-lifting-lift-face-tape-for-wrinkles-face',
  'https://www.hlktape.com/hlk-6-in-1-nourishing-silicone-mouth-tape---vitamin-aloe-coq10--collagen-infused',
  'https://www.hlktape.com/product-hlk-customized-lip-shape-hypoallergenic-hydrogel-mouth-sleep-tape-soft-adhesive-breathing-stop-snoring-moisturizing-patches',
  'https://www.hlktape.com/product-hlk-magnetic-nose-strip-breathe-boost-oxygen-reduce-snoring-improve-sleep-quality-sweat-resistant-magnetic-nasal-strips',
  'https://www.hlktape.com/can-pre-sales-power-growth-for-facial-tape-brands',
  'https://www.hlktape.com/oem-nose-strip-procurement-risk-control-guide-',
  'https://www.hlktape.com/why-strategic-material-combination-in-facial-patches-matters',
  'https://www.hlktape.com/how-to-choose-the-right-mouth-tape-supplier-for-your-business420',
  'https://www.hlktape.com/stamped-nose-strips-how-small-prints-become-social-currency-for-youthful-brands',
  'https://www.hlktape.com/are-nasal-strips-suitable-for-the-cross-border-e-commerce-market',
  'https://www.hlktape.com/inventory-planning-for-standard-and-premium-nasal-strips',
  'https://www.hlktape.com/nasal-strip-material-guide-non-woven-fabric-pe--satin',
  'https://www.hlktape.com/common-challenges-in-face-tape-applications-a-technical-and-after-sales-perspective',
  'https://www.hlktape.com/the-engineering-behind-nasal-strip-manufacturing-from-material-science-to-high-speed-production',
  'https://www.hlktape.com/scented-nasal-strips-combining-better-breathing-with-aromatherapy-for-stress-relief',
  'https://www.hlktape.com/mouth-tape-a-growing-innovation-in-sleep-and-personal-care'
]

headers = {'User-Agent': 'Mozilla/5.0'}

for url in urls:
    parsed = urlparse(url)
    path = parsed.path
    if not path or path == '/':
        target = 'index.html'
    else:
        target = path.strip('/') + '/index.html'
    
    os.makedirs(os.path.dirname(target) if os.path.dirname(target) else '.', exist_ok=True)
    
    print(f'Fetching {url}...')
    try:
        r = requests.get(url, headers=headers, timeout=30)
        html = r.text
        
        # 1. Neutralize Xiaoman popup and hijackers
        html = re.sub(r'<link[^>]*lang_selector2_[^>]*>', '', html)
        html = re.sub(r'<div[^>]*lang-selector[^>]*>.*?</div>', '', html, flags=re.DOTALL)
        
        # 2. Redirect all forms to Formspree + Inject name attributes
        html = re.sub(r'<form\\s+([^>]*)action=\\"[^\\"]*\\"', r'<form \\1 action=\\"https://formspree.io/f/mjvndzoy\\" method=\\"POST\\"', html)
        html = html.replace('action=\\"javaScript:void(0)\\"', 'action=\\"https://formspree.io/f/mjvndzoy\\" method=\\"POST\\"')
        
        # Fix File Input name
        html = html.replace('id=\\"fileInput\\"', 'id=\\"fileInput\\" name=\\"attachment\\"')
        
        # 3. Fix Social Links (YouTube)
        html = html.replace('www.youtube.com/@HLKTape', 'https://www.youtube.com/@HLKTape')
        
        # 4. Clean up internal absolute links
        html = html.replace('https://www.hlktape.com/', '/')
        
        # 5. Inject JS Hijack Fixer
        fix_script = """
        <script>
        document.addEventListener("DOMContentLoaded", function() {
            setTimeout(function() {
                document.querySelectorAll("form").forEach(function(form) {
                    var newForm = form.cloneNode(true);
                    form.parentNode.replaceChild(newForm, form);
                });
            }, 1500);
        });
        </script>
        """
        html = html.replace('</body>', fix_script + '</body>')
        
        with open(target, 'w', encoding='utf-8') as f:
            f.write(html)
    except Exception as e:
        print(f'Error processing {url}: {e}')
