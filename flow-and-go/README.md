# Flow&Go – Lernseite Geschäftsprozessoptimierung

Das Tab-Icon ist direkt in jede HTML-Datei eingebettet (`<link rel="icon">` im `<head>`).

Öffne `index.html` per Doppelklick im Browser. Kein Server und keine Internetverbindung nötig.

## Struktur
- `index.html` – Startseite mit allen Kapiteln
- `pages/` – ein Kapitel pro HTML-Datei
- `css/tokens.css` – Farben (hell/dunkel) und Grundwerte
- `css/base.css` – Typografie und Grundelemente
- `css/layout.css` – Kopfleiste, Startseite, Navigation, Fußzeile
- `css/components.css` – Karten, Tabs, Tabellen, Aufklapper u. a.
- `css/quiz.css` – nur für das Quiz
- `css/motion.css` – Animationen und Übergänge
- `js/theme-init.js` – setzt Dark/Light vor dem Laden der Seite
- `js/main.js` – Dark-Mode-Schalter und Seitenübergänge
- `js/tabs.js` – Tabs auf der Maßnahmen-Seite
- `js/quiz.js` – Quiz mit 15 Fragen (Liste `Q` oben in der Datei: q = Frage, o = Antworten, a = Index der richtigen Antwort, e = Erklärung). Ergebnis erst nach "Auswerten".

## Neue Seite hinzufügen
Eine bestehende Seite aus `pages/` kopieren, Inhalt ändern, Link auf der Startseite und in den Kapitel-Buttons ergänzen.
