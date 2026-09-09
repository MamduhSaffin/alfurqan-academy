(() => {
 const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#main-nav');
 const close=()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');};
 toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));});
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){close();toggle.focus();}});
 document.addEventListener('click',e=>{if(!e.target.closest('.nav-shell'))close();});
 window.matchMedia('(min-width:701px)').addEventListener('change',close);
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
 // Keep bookmarks and existing learning-hub links to class details working.
 const routeHash=()=>{if(['#register','#pricing','#faq','#international','#ssm'].includes(location.hash))location.replace(document.body.dataset.classes+location.hash);};
 routeHash();window.addEventListener('hashchange',routeHash);
})();
