# neurOS MVP Landingpage

Statische Single-Page-Landingpage fuer neurOS in Vanilla HTML, CSS und JavaScript. Die Seite ist fuer GitHub Pages gedacht und enthaelt:

- Hero, Produkt-Teaser, interaktiven Fokus-Check, Founder-Bereich, Waitlist und Footer
- Zweisprachigkeit: Deutsch als Default, Englisch per Toggle
- Responsive Dark-Mode-Design ohne Frameworks oder Build-Tool

## Dateien

- `index.html` strukturiert die komplette Seite
- `style.css` enthaelt Layout, Dark Theme, Animationen und Responsive Styles
- `script.js` steuert Sprache, Fokus-Check, Scroll-Reveals und das Waitlist-Formular
- `social-preview.svg` ist das OG-/Twitter-Vorschaubild fuer Social Sharing

## Lokal testen

Einfach `index.html` im Browser oeffnen. Fuer ein lokales Static-Server-Setup geht z. B.:

```bash
python3 -m http.server
```

Dann im Browser `http://localhost:8000` aufrufen.

## Waitlist aktivieren

Die Seite ist auf Formspree vorbereitet, damit das bestehende Formular ohne Designaenderung echte Eintraege versenden kann.

1. Auf [Formspree](https://formspree.io/) ein Formular anlegen.
2. Die Endpunkt-URL kopieren, z. B. `https://formspree.io/f/abcxyz`.
3. In [index.html](/Users/maximilianarmborst/Documents/New%20project%205/index.html) im `form`-Tag `action` und `data-formspree-endpoint` von `https://formspree.io/f/your-form-id` auf deine echte URL setzen.

Danach werden `email` und `persona` als JSON an Formspree geschickt.

## Social Sharing

Open-Graph- und Twitter-Tags sind eingebaut. Vor dem finalen Deploy lohnt sich noch ein kurzer Check:

1. Falls du eine finale Domain oder GitHub-Pages-URL hast, `og:url` in [index.html](/Users/maximilianarmborst/Documents/New%20project%205/index.html) darauf setzen.
2. `social-preview.svg` bei Bedarf durch ein finales Share-Bild ersetzen.

## Deployment auf GitHub Pages

1. Dateien in ein GitHub-Repository pushen.
2. In GitHub zu `Settings` → `Pages` gehen.
3. Unter `Build and deployment` als Source `Deploy from a branch` waehlen.
4. Den Branch und `/ (root)` auswaehlen.
5. Speichern. GitHub Pages veroeffentlicht danach die Seite als statische Website.
