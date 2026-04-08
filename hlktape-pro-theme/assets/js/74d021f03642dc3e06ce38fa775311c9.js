
$(function() {
  const flagPosition ="af:0 0,am:-42 0,ar:-84 0,az:-126 0,be:-168 0,bg:-210 0,bn:-252 0,bs:-294 0,ca:-336 0,ceb:-378 0,cn:-420 0,co:-42 -32,cs:-84 -32,cy:-126 -32,da:-168 -32,de:-210 -32,xh:-252 -32,el:-294 -32,en:-378 -32,eo:-420 -32,es:0 -64,zu:-42 -64,et:-84 -64,eu:-168 -64,fa:-210 -64,fi:-252 -64,fr:-294 -64,yo:-336 -64,fy:-378 -64,ga:-420 -64,gd:0 -96,gl:-42 -96,gu:-84 -96,ha:-126 -96,haw:-168 -96,hi:-210 -96,hmn:-252 -96,hr:-294 -96,ht:-336 -96,hu:-378 -96,hy:-420 -96,id:0 -128,ig:-42 -128,is:-84 -128,it:-126 -128,iw:-168 -128,ja:-210 -128,jw:-252 -128,ka:-294 -128,kk:-336 -128,km:-378 -128,kn:-420 -128,ko:0 -160,ku:-42 -160,ky:-84 -160,la:-126 -160,lb:-168 -160,lo:-210 -160,lt:-252 -160,lv:-294 -160,mg:-336 -160,mi:-378 -160,mk:-420 -160,ml:0 -192,mn:-42 -192,mr:-84 -192,ms:-126 -192,mt:-168 -192,mx:-210 -192,my:-252 -192,ne:-294 -192,nl:-336 -192,no:-378 -192,ny:-420 -192,pa:0 -224,pl:-42 -224,ps:-84 -224,pt:-126 -224,yi:-168 -224,ro:-210 -224,ru:-252 -224,sd:-336 -224,si:-378 -224,sk:-420 -224,sl:0 -256,sm:-42 -256,sn:-84 -256,so:-126 -256,sq:-168 -256,sr:-210 -256,st:-252 -256,su:-294 -256,sv:-336 -256,sw:-378 -256,ta:-420 -256,te:0 -288,tg:-42 -288,th:-84 -288,tl:-126 -288,tr:-168 -288,vi:-210 -288,uk:-252 -288,ur:-294 -288,uz:-336 -288";
  var pathArr = location.pathname.split('/') || [];
  var lang = pathArr[1] || 'en';
  var langList = [];

  $('.lang-selector .lang-list a').each(function(){
    const dataLang = $(this).data('lang');
    if (dataLang.includes('##')) {
      const dataLangArr = dataLang.split('##') || [];
      langList.push(dataLangArr[1]);
      if (dataLangArr[0]?.includes(location.host)) {
        lang = dataLangArr[1];
      }
    } else {
      langList.push(dataLang);
    }
  });
  
  if (langList.includes(lang)) {
    const position = flagPosition.split(',').find(function(flag) {
      const l= flag.split(':')[0];
      if (l === lang) {
        return true;
      }
    })
    if (position) {
      const [left, top] = position.split(':')[1].split(' ').map(function(v) {
        return Number(v);
      });
      console.log($('.lang-selector .current-lang img'), left, top);
      $('.lang-selector .current-lang img').css("object-position",`${left - 6}px ${top - 6}px`);
      $('.lang-selector .current-lang em').text(lang.toUpperCase());
    }
  }
})
