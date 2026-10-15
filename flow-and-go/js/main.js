/* Dark-Mode-Schalter und sanfte Seitenübergänge. */
(function(){
var root=document.documentElement,btn=document.getElementById("theme");
function apply(v){root.setAttribute("data-theme",v);btn.setAttribute("aria-checked",String(v==="dark"));try{localStorage.setItem("theme",v)}catch(e){}}
btn.setAttribute("aria-checked",String(root.getAttribute("data-theme")==="dark"));
btn.addEventListener("click",function(){apply(root.getAttribute("data-theme")==="dark"?"light":"dark")});
var leaving=false,reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
document.addEventListener("click",function(e){
var a=e.target.closest&&e.target.closest("a[href]");
if(!a||leaving||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||a.target||a.hasAttribute("download"))return;
var u=new URL(a.href,location.href);
if(u.protocol!==location.protocol||u.host!==location.host||u.pathname===location.pathname)return;
e.preventDefault();leaving=true;document.body.classList.add("leaving");
setTimeout(function(){location.href=a.href},reduce?0:220)});
window.addEventListener("pageshow",function(){leaving=false;document.body.classList.remove("leaving")});
})();
