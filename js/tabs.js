/* Tabs auf der Seite "Maßnahmen" (Mausklick und Pfeiltasten). */
(function(){
var tabs=[].slice.call(document.querySelectorAll('[role="tab"]'));
function select(i,focus){tabs.forEach(function(t,j){var on=i===j;t.setAttribute("aria-selected",String(on));t.tabIndex=on?0:-1;document.getElementById(t.getAttribute("aria-controls")).hidden=!on});if(focus)tabs[i].focus()}
tabs.forEach(function(t,i){
t.addEventListener("click",function(){select(i)});
t.addEventListener("keydown",function(e){var n=null;
if(e.key==="ArrowRight")n=(i+1)%tabs.length;else if(e.key==="ArrowLeft")n=(i-1+tabs.length)%tabs.length;else if(e.key==="Home")n=0;else if(e.key==="End")n=tabs.length-1;
if(n!==null){e.preventDefault();select(n,true)}})});
})();
