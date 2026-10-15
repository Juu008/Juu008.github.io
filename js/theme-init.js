/* Wird im <head> geladen: setzt das Theme vor dem ersten Zeichnen (kein Aufblitzen). */
(function(){var t=null;try{t=localStorage.getItem("theme")}catch(e){}
if(t!=="dark"&&t!=="light")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";
document.documentElement.setAttribute("data-theme",t)})();
