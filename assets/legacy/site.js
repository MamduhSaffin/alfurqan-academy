(() => {
 const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#main-nav');
 const close=()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');};
 toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));});
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){close();toggle.focus();}});
 document.addEventListener('click',e=>{if(!e.target.closest('.nav-shell'))close();});
 window.matchMedia('(min-width:701px)').addEventListener('change',close);
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

 // Place the authentic Surau Tok Guru Pulau Ubi photograph only on the three landing pages.
 const page=(location.pathname.split('/').pop()||'index.html').toLowerCase();
 const isLegacyHome=['index.html','en.html','ar.html'].includes(page);
 const hero=isLegacyHome?document.querySelector('.hero'):null,heroInner=hero?.querySelector('.hero-inner');
 if(heroInner&&!heroInner.querySelector('.surau-feature')){
   const style=document.createElement('link');
   style.rel='stylesheet';style.href='assets/legacy/surau-feature.css';
   document.head.appendChild(style);
   const lang=(document.documentElement.lang||'ms').toLowerCase();
   const copy=lang.startsWith('ar')?{
     name:'سوراو توك غورو بولاو أوبي',
     place:'كامبونغ تلاڬا لاناس · ڤڠكلن كوبور · تومڤت، كلنتن',
     link:'عرض أنشطة المصلى',
     alt:'مصلى توك غورو بولاو أوبي في كامبونغ تلاڬا لاناس، ڤڠكلن كوبور، تومڤت، كلنتن.'
   }:lang.startsWith('en')?{
     name:'Surau Tok Guru Pulau Ubi',
     place:'Kg Telaga Lanas · Pengkalan Kubor · Tumpat, Kelantan',
     link:'View surau activities',
     alt:'Surau Tok Guru Pulau Ubi in Kampung Telaga Lanas, Pengkalan Kubor, Tumpat, Kelantan.'
   }:{
     name:'Surau Tok Guru Pulau Ubi',
     place:'Kg Telaga Lanas · Pengkalan Kubor · Tumpat, Kelantan',
     link:'Lihat aktiviti surau',
     alt:'Surau Tok Guru Pulau Ubi di Kampung Telaga Lanas, Pengkalan Kubor, Tumpat, Kelantan.'
   };
   const figure=document.createElement('figure');figure.className='surau-feature';
   const image=document.createElement('img');
   image.src='assets/legacy/surau-tok-guru-pulau-ubi.jpg';image.width=235;image.height=300;image.alt=copy.alt;image.loading='eager';image.decoding='async';
   const caption=document.createElement('figcaption');
   const strong=document.createElement('strong');strong.textContent=copy.name;
   const placeText=document.createElement('span');placeText.textContent=copy.place;
   const link=document.createElement('a');link.href='https://omiw.com.my/Web/senarai-aktiviti/';link.target='_blank';link.rel='noopener';link.textContent=copy.link;
   caption.append(strong,placeText,link);figure.append(image,caption);
   const side=hero.querySelector('.hero-side');if(side)side.hidden=true;
   heroInner.appendChild(figure);
 }

 // Keep bookmarks and existing learning-hub links to class details working.
 const routeHash=()=>{if(['#register','#pricing','#faq','#international','#ssm'].includes(location.hash))location.replace(document.body.dataset.classes+location.hash);};
 routeHash();window.addEventListener('hashchange',routeHash);
})();
