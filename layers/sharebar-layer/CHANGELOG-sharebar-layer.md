# CHANGELOG: sharebar-layer

Bestand: `CHANGELOG-sharebar-layer.md`

---

# Testcommits

> ⚠️ Testlog — bevat voorlopige wijzigingen die pas worden toegevoegd aan `CHANGELOG-sharebar-layer.md` na volledige validatie

## 01-10-2025 - [TESTFASE] responsieve afmetingen met clamp() EN aspect-ratio: 1 / 1 voor de buttons 

In #stickyShareBarBottom a en #stickyShareBarLeft a
- Gebruik clamp(min, preferred, max) voor width en font-size
- Daardoor schalen de knoppen elegant mee met het schermformaat, zonder media queries
- Gebruik van aspect-ratio: 1 / 1 om de hoogte te schalen met de breedte

## 01-10-2025 - [TESTFASE] mobiel gedrag via @media (max-width: 600px) voor #stickyShareBarLeft
- laat de sticky bar netjes onderaan het scherm "floaten" via position: fixed, én je maakt hem horizontaal (row).


## 01-10-2025 - - [TESTFASE] text-align: center in #stickyShareBarLeft en #stickyShareBarBottom
- helpt bij centrering van elementen in sommige browsers

## 01-10-2025 - [TESTFASE] stickyShareBarLeft

- Context: stickyShareBarLeft in centerBarLeft blijft niet plakken aan de bovenkant

- centerBarWrapper: `align-items: flex-start` vervangen door `align-items: stretch`

- `align-items: stretch` zorgt dat alle kolommen even hoog worden als centerBarMiddle
- stickyBarLeft: `position: fixed` vervangen door `position: sticky`
- `top: 50%` vervangen door `top;  12px` 
- `transform: translateY(-50%)` verwijdert
- `left: 12px` verwijdert

- centerBarLeft: `position: relative` toegevoegd

- voeg font awesome toe met de social media buttons
<link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css' rel='stylesheet'/>

- buttons verkleinen voor mobiel voor stickyShareBarLeft en stickyShareBarBottom 

## 30-09-2025 — [TESTFASE] stickyShareBarLeft visueel gematcht aan oude onderbalk

- Context: Overgang van `#stickyShareBarBottom` naar `#stickyShareBarLeft` voor desktopgebruik
- Visuele styling (ronde iconen, achtergrondkleur, icon-grootte) overgenomen
- CSS herschreven en gescoped op `#stickyShareBarLeft a`, inclusief:
  - `width: 42px; height: 42px`
  - `border-radius: 50%`
  - `background-color: #f0f0f0`
  - `font-size: 22px`
  - `display: flex; align-items: center; justify-content: center`
- Hover-effecten en merk-kleuren behouden zoals in onderbalk
- Media query geactiveerd voor mobiel gedrag: horizontale layout, kleinere iconen
- Resultaat: stickyShareBarLeft rendert visueel identiek aan eerdere onderbalk, DevTools-tracebaar en rollbackbaar

🔍 Status: testfase — visueel gedrag, hover-tinten en mobile responsiveness worden nog uitgebreid getest


# Productiecommits

## ✅ Versie 1 – 2025-09-29

### Layer aangemaakt: `sharebar-layer`

- 📁 Toegevoegd: `sharebar.css`
- 📁 Toegevoegd: `sharebar.js`
- 🧾 Toegevoegd: `README-sharebar-layer.md`
- 📜 Toegevoegd: `CHANGELOG-sharebar-layer.md`

### Doel
Sticky social media sharebar onderaan de pagina met visuele styling en dynamische URL-aanpassing. Merk-specifiek en UI-gericht. Niet geschikt voor `utilities-layer`.

### 🔧 Subcomponent Mapping: sharebar-layer v1A

| Subcomponent       | Versie     | Laatste wijziging | Changelog-sectie         |
|--------------------|------------|-------------------|--------------------------|
| `sharebar-style`   | v1A        | 1 Sep 2025        | [sharebar-style v1A]     |
| `sharebar-script`  | v1A        | 1 Sep 2025        | [sharebar-script v1A]    |
| `sharebar-tracking`| v1A        | 1 Sep 2025        | [sharebar-tracking v1A]  |
| `sharebar-csp`     | v1A        | 1 Sep 2025        | [sharebar-csp v1A]       |

---
## [sharebar-style v1A] - 1 Sep 2025
- CSS-layer geïmplementeerd voor sticky sharebar onderaan pagina
- Styling van `.share-icon` elementen met ronde hoeken, hover-effecten en merk-kleuren
- Mobiele optimalisatie via `@media (max-width: 600px)`
- `position: sticky` en `z-index: 9999` bevestigd in moderne browsers
- 🔍 Zie audit-sharebar-layer.md sectie “CSS-interactiepunten” en “Enginegedrag”

## [sharebar-script v1A] - 1 Sep 2025
- JavaScript-module `sharebar-layer.js` toegevoegd
- Dynamische `href`-injectie op basis van `data-base` en `window.location.href`
- Fallback ingebouwd voor ontbrekende `data-base` attributen
- Script uitgevoerd via `DOMContentLoaded` voor robuuste DOM-integratie
- 🔍 Zie audit-sharebar-layer.md sectie “Scriptinteractie” en “DOM-verificatie”

## [sharebar-tracking v1A] - 1 Sep 2025
- UTM-tags toegevoegd aan gegenereerde links voor tracking in Google Analytics
- UTM-string: `?utm_source=social&utm_medium=sharebar&utm_campaign=post`
- Parameters dynamisch gegenereerd per `.share-link`
- 🔍 Zie audit-sharebar-layer.md sectie “Trackingparameters (UTM)” en “DevTools-verifieerbare gedrag”

## [sharebar-csp v1A] - 1 Sep 2025
- CSP geverifieerd voor correcte werking van sharebar-layer
- `script-src` bevat `'unsafe-inline'` en `https://danga4biz.github.io` voor scriptinjectie
- `style-src` uitgebreid met `https://cdnjs.cloudflare.com` voor Font Awesome stylesheet via CDNJS
- `font-src` bevat `https://fonts.gstatic.com` voor `.woff2` fontbestanden
- 🔍 Zie audit-sharebar-layer.md sectie “CSP-interactie”

---

### [audit-layer]
- CSS getest op parser-acceptatie
- JS werkt via `DOMContentLoaded` zonder externe afhankelijkheden
- Hover-effecten en media queries DevTools-verifieerbaar

### [rollback]
- Layer is volledig verwijderbaar via `git rm -r layers/sharebar-layer`
- Geen afhankelijkheden buiten deze layer
- Subtree-pad: `layers/sharebar-layer`
- Rollback vereist changelog-update
