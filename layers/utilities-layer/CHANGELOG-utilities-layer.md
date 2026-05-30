# Changelog - utilities-layer

Alle wijzigingen worden hier vastgelegd. Elke entry bevat datum, tijd, reden en impact.

---

## [30-05-2026] v0.1.2 — .scrolling-content correctie
- [white-space] semicolon vervangen door colon 

---

## [30-09-2025] v0.1.1 — correcties doorgevoerd op keyframes scroll-left en .scrolling-content

### Changed
- 🔁 Scrollafstand gewijzigd van `padding-left + translateX(-100%)` naar `translateX(100vw → -100%)`
- 🕒 Scrollsnelheid aangepast van `20s` naar `12s` voor optimale leesbaarheid

### Fixed
- 🐛 Visuele snelheidsverschil tussen Blogger en lokaal rendering geëlimineerd
- 📐 Scrollafstand onafhankelijk gemaakt van tekstbreedte

### Verified
- ✅ DevTools: `animation-duration`, `transform`, `width` consistent
- ✅ Responsief gedrag op verschillende schermgroottes


---

## [29-10-2025] v0.1.0 — CHANGELOG-utilities-layer.md aangemaakt

### Layer aangemaakt: `utilities-layer`

- 📁 Toegevoegd: `utilities.css`
- 📁 Toegevoegd: `utilities.js`
- 🧾 Toegevoegd: `README-utilities-layer.md`
- 📜 Toegevoegd: `CHANGELOG-utilities-layer.md`

### [audit-layer]
- ✅ CSS getest op parser-acceptatie
- ✅ JS-functies DevTools-verifieerbaar
- ✅ Geen Theme Designer afhankelijkheden
  
### [rollback]
- 🔙 Layer is volledig verwijderbaar zonder impact op andere delen van de repository
- 🔙 Subtree-pad: `layers/utilities-layer`
- 🔙 Rollback via `git rm -r layers/utilities-layer` + changelog-update
