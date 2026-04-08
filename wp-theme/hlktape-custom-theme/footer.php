<footer class="arshine2-foot">
  <div class="container">
    <div class="foot-contact wow fadeInLeft">
      <h5>CONTACT</h5>
      <p>Add: No.299 Xingxian Road, Licheng District, Quanzhou City</p>
      <p>
        Tel:
        <a href="tel:+86-19805957675">+86-19805957675</a>
      </p>
      <p>
        E-mail:
        <a href="/cdn-cgi/l/email-protection#a8dbc9c4cddbc5c9c6c9cfcddae8c0c4c3dcc9d8cd86cbc7c5"><span class="__cf_email__" data-cfemail="b2c1d3ded7c1dfd3dcd3d5d7c0f2daded9c6d3c2d79cd1dddf">[email&#160;protected]</span></a>
      </p>
      <p>
        WhatsApp: <a href="https://api.whatsapp.com/send?phone=8619805957675" rel="nofollow">+86-19805957675</a>
      </p>
      <p>Copyright © 2026 Quanzhou Honglinkai New Material Co., Ltd. All Rights Reserved.</p>

      <div class="share">
          <a href="https://www.facebook.com/profile.php?id=61578181470633" aria-label="facebook" rel="nofollow">
            <i class="iconfont iconfont-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/company/106728396/admin/dashboard/" aria-label="linkedin" rel="nofollow">
            <i class="iconfont iconfont-linkedin"></i>
          </a>
          <a href="www.youtube.com/@HLKTape" aria-label="youtube" rel="nofollow">
            <i class="iconfont iconfont-youtube"></i>
          </a>
          <a href="https://www.tiktok.com/@hlk0595?_t=ZT-8u4NoPZw9qo&amp;_r=1" aria-label="tiktok" rel="nofollow">
            <i class="iconfont iconfont-tiktok"></i>
          </a>
          <a href="https://www.instagram.com/hlkgeorge?igsh=a2Npc291bTg2M3ow&amp;utm_source=qr" aria-label="instagram" rel="nofollow">
            <i class="iconfont iconfont-instagram"></i>
          </a>
          <a href="skype:972550269@qq.com?chat" aria-label="skype" rel="nofollow">
            <i class="iconfont iconfont-skype"></i>
          </a>
      </div>

      
    </div>

    <div class="foot-nav wow fadeInLeft">
      <h5>QUICK LINK</h5>
      <ul>
          <li>
            <a href="/nasal-strips">Nasal Strips</a>
          </li>
          <li>
            <a href="/mouth-tape">Mouth Tape</a>
          </li>
          <li>
            <a href="/custom">Custom</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
          <li>
            <a href="/newsblog">News</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
        <li>
          <a href="/privacy" target="_blank" rel="nofollow">Privacy Policy</a>
        </li>
      </ul>
    </div>

    <div class="foot-form wow fadeInRight">
      <h5>INFORMATION</h5>
      <p>Sign up to receive our weekly newsletter</p>
      <form method="post" action="javaScript:void(0)" id="contact" name="contact" class="inquirbox invite-form">
        <div class="input-box">
          <input type="text" id="name" name="email" maxlength="20" class="c_name" placeholder="Email Address">
        </div>
        <div class="input-box">
          <button type="submit" class="submit create-form-submit">
            SUBMIT
            <i class="qico qico-right2"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</footer>

<div id="arshine2-gotop">
  <i class="qico qico-up"></i>
</div>





          <!-- sectionEnd: arshine2_foot -->
        

<link rel="stylesheet" type="text/css" href="/assets/css/2f0ba96f9a55da9cf9277665bb57c6e0.css">

<input type="hidden" id="apiPath" value="https://cms.xiaoman.cn">
<input type="hidden" id="siteId" value="GQdqE2mDZ8p8nX5egIhRaw%3D%3D">
<input type="hidden" id="clientId" value="drfMA%2BLizXWhj%2BQLycxZ0A%3D%3D">
<input type="hidden" value="" id="pagetitle" name="pagetitle">

<!-- stayreal -->


  
      
    <script data-cfasync="false" src="<?php echo get_template_directory_uri(); ?>/assets/js/7349037d273bace142a65a1c77c3a47e.js"></script><script src="<?php echo get_template_directory_uri(); ?>/assets/js/cd57cdbdc7361835547c4ff1dbeb151c.js" defer></script>
    <script>
      window.addEventListener("DOMContentLoaded", function () {
        const userAgent = navigator.userAgent.toLowerCase();

        const isMobile = /iphone|ipod|android|ios|ipad|windows phone|mobile/i.test(userAgent);

        const deviceType = isMobile ? 'mobile' : 'pc';
        const host = window.location.host;
        const pathname = window.location.pathname;

        if (window.Sentry) {
          console.log('Sen init success');
          Sentry.init({
            dsn: 'https://ca254c5714ff4a723a1db3821caa9673@sen.xiaoman.cn/44',
            integrations: [Sentry.browserTracingIntegration()],
            environment: 'production',
            sampleRate: 0.1,
            tracesSampleRate: 0.1,
            beforeSendTransaction(event) {
              event.transaction = host;
              return event;
            },
            beforeSend(event) {
              event.transaction = host;
              if (host.includes('okkishop.site') || host === 'cms.xiaoman.cn'){
                return null;
              }
              return event;
            }
          });

          Sentry.setTag('site_id', 2912);
          Sentry.setTag('client_id', 67765);
          Sentry.setTag('device_type', deviceType);
          Sentry.setTag("user_agent", navigator.userAgent);
          Sentry.setTag("host", host);
          Sentry.setTag("pathname", pathname);
        } else {
          console.log('Sen init fail');
        }
      });
    </script>
  
      
        <script>
          window.addEventListener("load", function () {
            
      function lazyLoad() {
    const lazySrcs = Array.from(document.querySelectorAll('img[data-src], iframe[data-src]'));
    const lazyBgs = Array.from(document.querySelectorAll('[data-bg]'));
    if (!('IntersectionObserver' in window))
        return;
    function loadSrc(el) {
        const src = el.getAttribute('data-src');
        if (!src)
            return;
        el.setAttribute('src', src);
        el.removeAttribute('data-src');
    }
    function loadBg(el) {
        const bgUrl = el.getAttribute('data-bg');
        if (!bgUrl)
            return;
        const style = el.getAttribute('style') || '';
        const restored = /background(?:-image)?\s*:/i.test(style)
            ? style.replace(/(background(?:-image)?\s*:[^;]*?)(;|$)/i, `$1 url(${bgUrl})$2`)
            : `${style ? style + ';' : ''}background-image:url(${bgUrl})`;
        el.setAttribute('style', restored);
        el.removeAttribute('data-bg');
    }
    const observerOptions = { rootMargin: '400px 0px', threshold: [0] };
    if (lazySrcs.length > 0) {
        let remaining = lazySrcs.length;
        const srcObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function ({ target, isIntersecting }) {
                if (!isIntersecting)
                    return;
                loadSrc(target);
                srcObserver.unobserve(target);
                if (--remaining === 0)
                    srcObserver.disconnect();
            });
        }, observerOptions);
        lazySrcs.forEach(function (el) { srcObserver.observe(el); });
    }
    if (lazyBgs.length > 0) {
        let remaining = lazyBgs.length;
        const bgObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function ({ target, isIntersecting }) {
                if (!isIntersecting)
                    return;
                loadBg(target);
                bgObserver.unobserve(target);
                if (--remaining === 0)
                    bgObserver.disconnect();
            });
        }, observerOptions);
        lazyBgs.forEach(function (el) { bgObserver.observe(el); });
    }
}
      lazyLoad();
      // 处理js生成的dom
      setTimeout(function() {
        lazyLoad()
      }, 1000)
    
            
    setTimeout(() => {
      const fragment = document.createDocumentFragment();
      ['https://shopcdnpro.grainajz.com/tpl-common/common/js/cookie-policy.js','//tfile.xiaoman.cn/okki/analyze.js?id=67765-19787-476869547'].forEach((u) => {
        
      if (u.includes('//tfile.xiaoman.cn/okki/analyze.js')) {
        window.okkiConfigs = window.okkiConfigs || [];
        window.__OKKI_SHOPS_CHAT_ENV__ = 'CMS-SHOPS';
        function okkiAdd() { okkiConfigs.push(arguments); };
        okkiAdd("analytics", { siteId: "67765-19787", gId: "476869547" });
      }
    
        const script = document.createElement('script');
        script.src = u;
        script.defer = true;
        fragment.appendChild(script);
      });

      document.body.appendChild(fragment);
    }, 2000);
  
          });
        </script>
      
  <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/js/b3b800b15383c80b873ad374d63ded86.js" defer></script><script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/js/7863a9385a2602b594297de812856345.js" defer></script><script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/js/f15a2ff00d7f337edca8322082b12bb0.js" defer></script><script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/js/bda8dcd81457f4ff09949614ac7f1b8b.js" defer></script><script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/js/bf75f29969329b9c023ad55bc15c9cb4.js" defer></script><script src="<?php echo get_template_directory_uri(); ?>/assets/js/c22e9b84b62508b3be34b02f01706729.js" defer></script><script defer type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/js/34a8c43a398731122b8b76b62d473a13.js"></script><script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/js/dc938a8b195663c591bd238b3ab0ceca.js" defer></script><script defer type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/js/23de3222ee5ce55264dff68ffc1f4f1e.js"></script><script defer type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/js/81006480cee3353919b46ef183f47a6d.js"></script><script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/js/bed4f76768a8fae628cba253972aaa55.js" defer></script><script defer type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/js/cfaac83fb1f36b75352601b10e49066c.js"></script><script defer type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/js/71d001d6c823a16d35db6c5c24d6fb37.js"></script><div id="shops-kit-container" style="width: 0; height: 0; left: -2px;"></div>
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/d132806b2a3f16c05af7bc241b75d20b.js" defer></script>

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
    </body>
</html>

<?php wp_footer(); ?>