## ✅ Versie 1 – 2025-09-29

### Layer aangemaakt: `sharebar-layer`

- 📁 Toegevoegd: `sharebar.css`
- 📁 Toegevoegd: `sharebar.js`
- 🧾 Toegevoegd: `README-sharebar-layer.md`
- 📜 Toegevoegd: `CHANGELOG-sharebar-layer.md`

### Doel
Sticky social media sharebar onderaan de pagina met visuele styling en dynamische URL-aanpassing. Merk-specifiek en UI-gericht. Niet geschikt voor `utilities-layer`.

### 🔧 Subcomponent Mapping: sharebar-layer v1A

| Subcomponent       | Versie     | Laatste wijziging | Changelog-sectie        |
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
- ✅ CSS getest op parser-acceptatie
- ✅ JS werkt via `DOMContentLoaded` zonder externe afhankelijkheden
- ✅ Hover-effecten en media queries DevTools-verifieerbaar

### [rollback]
- 🔙 Layer is volledig verwijderbaar zonder impact op andere delen van de repository
- 🔙 Subtree-pad: `layers/sharebar-layer`
- 🔙 Rollback via `git rm -r layers/sharebar-layer` + changelog-update
