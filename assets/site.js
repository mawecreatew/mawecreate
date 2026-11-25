/* MaweCreate: menu do celular e aviso de cookies (usado em todas as páginas) */
{
const top=document.getElementById('top'),menu=document.getElementById('menu'),nav=document.getElementById('nav');
if(menu&&top&&nav){
 menu.addEventListener('click',()=>{const o=top.classList.toggle('open');menu.setAttribute('aria-expanded',o)});
 nav.addEventListener('click',e=>{if(e.target.tagName==='A'){top.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
}

/* Menu de serviços */
const dd=document.getElementById('dd'),ddb=document.getElementById('ddb');
if(dd&&ddb){
 const setDD=o=>{dd.classList.toggle('open',o);ddb.setAttribute('aria-expanded',o)};
 const desk=()=>matchMedia('(hover:hover) and (min-width:901px)').matches;
 ddb.addEventListener('click',e=>{e.stopPropagation();setDD(desk()?true:!dd.classList.contains('open'))});
 dd.addEventListener('mouseenter',()=>{if(desk())setDD(true)});
 dd.addEventListener('mouseleave',()=>{if(desk())setDD(false)});
 document.addEventListener('click',e=>{if(!dd.contains(e.target))setDD(false)});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){setDD(false);ddb.focus()}});
}
/* Cookies: a escolha fica salva no navegador do visitante.
   O Microsoft Clarity só é carregado se o visitante aceitar. */
const KEY='mawe-cookies';
const get=()=>{try{return localStorage.getItem(KEY)}catch(e){return null}};
const set=v=>{try{localStorage.setItem(KEY,v)}catch(e){}};
const CLARITY='zicl33ctrn';
let loaded=false;
const loadAnalytics=()=>{
 if(loaded)return;loaded=true;
 (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script",CLARITY);
 window.clarity('consent');
};
const box=document.getElementById('cookie');
if(box){
 const choice=get();
 if(choice==='aceito')loadAnalytics();
 if(!choice)box.hidden=false;
 box.addEventListener('click',e=>{
  const b=e.target.closest('[data-c]');if(!b)return;
  set(b.dataset.c);box.hidden=true;
  if(b.dataset.c==='aceito')loadAnalytics();
 });
}
}
