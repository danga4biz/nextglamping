## ✅ Versie 1 – 2025-09-29

### Layer aangemaakt: `sharebar-layer`

- 📁 Toegevoegd: `sharebar.css`
- 📁 Toegevoegd: `sharebar.js`
- 🧾 Toegevoegd: `README-sharebar-layer.md`
- 📜 Toegevoegd: `CHANGELOG-sharebar-layer.md`

### Doel
Sticky social media sharebar onderaan de pagina met visuele styling en dynamische URL-aanpassing. Merk-specifiek en UI-gericht. Niet geschikt voor `utilities-layer`.

### [audit-layer]
- ✅ CSS getest op parser-acceptatie
- ✅ JS werkt via `DOMContentLoaded` zonder externe afhankelijkheden
- ✅ Hover-effecten en media queries DevTools-verifieerbaar

### [rollback]
- 🔙 Layer is volledig verwijderbaar zonder impact op andere delen van de repository
- 🔙 Subtree-pad: `layers/sharebar-layer`
- 🔙 Rollback via `git rm -r layers/sharebar-layer` + changelog-update
