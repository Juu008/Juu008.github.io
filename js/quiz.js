/* Wissens-Check. Fragen stehen in der Liste Q: q = Frage, o = Antworten, a = Index der richtigen Antwort, e = Erklärung.
   Reihenfolge der Fragen und Antworten wird bei jedem Start zufällig gemischt; richtig/falsch erscheint erst am Ende. */
var Q=[
{q:"Welches Merkmal gehört NICHT zu einem Geschäftsprozess?",o:["Genau definierter Beginn, ausgelöst durch ein Ereignis","Ein messbares Ende","Einmalige Tätigkeiten ohne feste Abfolge","Tätigkeiten verschiedener Mitarbeiter in verschiedenen Abteilungen"],a:2,e:"Geschäftsprozesse bestehen aus standardisierten, immer wiederkehrenden Tätigkeiten."},
{q:"Was ist das wesentliche Ziel von Geschäftsprozessen?",o:["Möglichst viele Abteilungen zu bilden","Die Kundenzufriedenheit zu erhöhen und damit den wirtschaftlichen Erfolg zu steigern","Die Zahl der Mitarbeiter zu verringern","Alle Tätigkeiten an externe Firmen zu vergeben"],a:1,e:"Weitere Ziele wie Mitarbeiterzufriedenheit, Umweltschutz oder Kosteneinsparungen kommen ebenfalls der Kundenzufriedenheit zugute."},
{q:"Was regelt die Ablauforganisation?",o:["Die Bildung von Stellen und Abteilungen","Verantwortlichkeiten und Kompetenzen","Die sich regelmäßig wiederholenden Arbeitsabläufe","Den Aufbau des Betriebs"],a:2,e:"Stellen, Abteilungen, Verantwortlichkeiten und Kompetenzen gehören zur Aufbauorganisation."},
{q:"Was beschreibt die Durchlaufzeit?",o:["Die tägliche Arbeitszeit eines Mitarbeiters","Die Zeitspanne für die Bearbeitung von Aufträgen bzw. den Verlauf von Prozessen","Die Lieferzeit eines Lieferanten","Die Dauer einer Kundenbefragung"],a:1,e:"Sie soll im Arbeitsablauf möglichst minimal sein (Zeit- und Kostenersparnis, Termineinhaltung)."},
{q:"Welche Gestaltungsdimension der Ablauforganisation fragt danach, wie Transportwege und Entfernungen minimiert werden können?",o:["Arbeitsinhalt","Arbeitszeit","Arbeitsort","Arbeitszuordnung"],a:2,e:"Der Arbeitsort betrifft Transportwege und einen möglichst geradlinigen Arbeitsablauf."},
{q:"Wann entsteht eine Schnittstelle?",o:["Wenn Arbeitsteilung zu Koordinationsbedarf zwischen zwei Stellen führt","Wenn ein Mitarbeiter alle Aufgaben allein erledigt","Wenn ein Prozess ein messbares Ende hat","Wenn eine Software aktualisiert wird"],a:0,e:"Der Koordinationsbedarf zeigt sich durch Kommunikation, Abstimmung und/oder Bereitstellung von Informationen."},
{q:"Eine Anfrage kommt per Post, wird in die Software eingegeben, das Angebot ausgedruckt und per Post versandt. Welche Schwachstelle liegt vor?",o:["Organisationsbruch","Medienbruch","Liegezeit","Externe Auslagerung"],a:1,e:"Es werden verschiedene Medien genutzt, Informationen müssen dabei übertragen werden."},
{q:"In der Verwaltung wird SAP genutzt, in der Produktion ein eigenes System, in dem alle Aufträge noch einmal erfasst werden müssen. Was liegt vor?",o:["Organisationsbruch","Medienbruch","Systembruch mit Doppelarbeit","Prüfung durch Vorgesetzte"],a:2,e:"Verschiedene Systeme führen zu Systembrüchen und oft zu Doppelarbeiten."},
{q:"Die Prüfung der Kundendaten inklusive Bonität erledigt nicht die Kundenbetreuung, sondern eine andere Abteilung. Was ist das?",o:["Systembruch","Liegezeit","Doppelarbeit","Organisationsbruch"],a:3,e:"Organisationsbrüche erhöhen Transportzeiten und sind eine Fehlerquelle."},
{q:"Alle ausgehenden Angebote müssen vom Abteilungsleiter geprüft werden. Welche Folge ist typisch?",o:["Erhöhte Liegezeiten","Ein Systembruch","Ein Medienbruch","Eine externe Auslagerung"],a:0,e:"Vorgänge bleiben liegen, bis der Vorgesetzte Zeit hat. Die Bearbeitungszeit verlängert sich um die Liegezeit."},
{q:"Kundendaten prüfen (Kundenbetreuung) und Bonität prüfen (Rechnungswesen) laufen gleichzeitig. Welche Maßnahme ist das?",o:["Aufgabe zusammenfassen","Prozessschritte parallelisieren","Weitere Prozessschritte einfügen","Erweiterung von Kompetenzen"],a:1,e:"Parallelisieren bedeutet die zeitgleiche Bearbeitung verschiedener Prozessschritte."},
{q:"Weil die Produktion oft überlastet ist, wird zuerst die Machbarkeit in der Produktion geprüft und danach der Lagerbestand. Welche Maßnahme ist das?",o:["Veränderung der Prozessreihenfolge","Erweiterung von Kompetenzen","Aufgabe zusammenfassen","Prozessschritte parallelisieren"],a:0,e:"So scheitern Aufträge nicht erst spät an der Überlastung der Produktion."},
{q:"Welches Verfahren ermittelt die Häufigkeit von Ereignissen durch stichprobenartige Kurzzeitbeobachtungen, ohne die Mitarbeiter zu unterbrechen?",o:["Laufzettelverfahren","Selbstaufschreibung","Workshop","Multimomentaufnahme"],a:3,e:"Die beteiligten Mitarbeiter werden dabei weder unterbrochen noch aktiv einbezogen."},
{q:"Was kann passieren, wenn Optimierungsvorschläge bei den Mitarbeitern keine Akzeptanz finden?",o:["Die Durchlaufzeit sinkt automatisch","Die Kundenzufriedenheit steigt","Es kann zu weiteren, eventuell gravierenderen Schwachstellen kommen","Die Prozessdarstellung wird überflüssig"],a:2,e:"Deshalb muss sorgfältig geprüft werden, ob und wie die Vorschläge umgesetzt werden."},
{q:"Wo sollten Veränderungen und alte Versionen der Prozesse dokumentiert werden?",o:["In einem Qualitätsmanagementsystem","In der Aufbauorganisation","Im Materiallager","In der Kundenbefragung"],a:0,e:"Nach der Umsetzung und Evaluation werden Änderungen in die Prozessdarstellung übernommen und dokumentiert."}
];
(function(){
var stage=document.getElementById("stage"),box=document.getElementById("qbox"),prog=document.getElementById("progress"),fill=document.getElementById("fill"),prev=document.getElementById("prev"),next=document.getElementById("next"),res=document.getElementById("result");
var order,ans,pos,reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
function start(){
order=shuffle(Q).map(function(q){return{q:q.q,e:q.e,o:shuffle(q.o.map(function(t,i){return{t:t,ok:i===q.a}}))}});
ans=order.map(function(){return null});pos=0;res.hidden=true;stage.hidden=false;show()}
function show(){
var it=order[pos],n=order.length,lg=document.createElement("legend"),labels=[];
prog.textContent="Frage "+(pos+1)+" von "+n;fill.style.width=((pos+1)/n*100)+"%";
box.innerHTML="";lg.textContent=it.q;box.appendChild(lg);
it.o.forEach(function(o,j){
var l=document.createElement("label"),r=document.createElement("input"),s=document.createElement("span");
l.className="opt"+(ans[pos]===j?" sel":"");r.type="radio";r.name="antwort";r.checked=ans[pos]===j;s.textContent=o.t;l.appendChild(r);l.appendChild(s);labels.push(l);
r.addEventListener("change",function(){ans[pos]=j;labels.forEach(function(x,k){x.classList.toggle("sel",k===j)});next.disabled=false});
box.appendChild(l)});
prev.disabled=pos===0;next.disabled=ans[pos]===null;next.textContent=pos===n-1?"Auswerten":"Weiter \u203A"}
function finish(){
var n=order.length,right=0,h="";
order.forEach(function(it,i){
var c=it.o[ans[i]],ok=c.ok,good=it.o.filter(function(o){return o.ok})[0];
if(ok)right++;
h+='<div class="rv '+(ok?"right":"wrong")+'"><p class="rq">'+(i+1)+". "+it.q+"</p><p>Deine Antwort: <b>"+c.t+"</b> "+(ok?"\u2713":"\u2715")+"</p>"+(ok?"":"<p>Richtig wäre: <b>"+good.t+"</b></p>")+'<p class="fb">'+it.e+"</p></div>"});
stage.hidden=true;
res.innerHTML='<div class="card"><h3>Dein Ergebnis</h3><p class="big"><b>'+right+" richtig</b> und <b>"+(n-right)+" falsch</b> von "+n+" Fragen ("+Math.round(right/n*100)+' %).</p><button class="tab" id="restart" type="button">Quiz neu starten</button></div><h3>Auswertung der Fragen</h3>'+h;
res.hidden=false;
document.getElementById("restart").addEventListener("click",function(){start();window.scrollTo({top:0,behavior:reduce?"auto":"smooth"})});
window.scrollTo({top:0,behavior:reduce?"auto":"smooth"})}
next.addEventListener("click",function(){if(ans[pos]===null)return;if(pos<order.length-1){pos++;show()}else finish()});
prev.addEventListener("click",function(){if(pos>0){pos--;show()}});
start();
})();
