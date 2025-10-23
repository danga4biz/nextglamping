# Changelog – variables-layer

Alle wijzigingen aan globale CSS-variabelen worden hier vastgelegd. Elke entry bevat datum, tijd, reden en impact.

---

## [23-10-2025] v0.1.0 — Toevoeging van `--menu-items-BORDER-color` voor hoverkleur menu-items

### Components  
- `:root`  
- `--menu-items-BORDER-color`

### Oorzaak  
- Borderkleur van menu-items werd impliciet bepaald via `currentColor`  
- Geen centrale controle of overschrijfbare structuur voor hoverkleur  
- Geen fallbackketen of DevTools-traceerbaarheid van kleurbron

### Oplossing  
- Nieuwe variabele toegevoegd aan `:root`:  
  `--menu-items-BORDER-color: white;`  
- Biedt centrale sturing van borderkleur bij hover  
- Maakt fallback mogelijk via `var(--menu-items-BORDER-color, currentColor)`  
- Ondersteunt uitbreidbaarheid naar andere pseudo-classes of componenten

### Resultaat  
- Hoverkleur van borders is nu centraal instelbaar en overschrijfbaar  
- Fallback op `currentColor` blijft behouden  
- Volledig DevTools-verifieerbaar en auditlog-waardig

### Verifieerbaarheid (css)
```css
:root {
  --menu-items-BORDER-color: white;
}
