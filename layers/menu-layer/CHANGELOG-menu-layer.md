# Changelog – menu-layer

Alle wijzigingen aan de navigatie en hamburgerstructuur worden hier vastgelegd. Elke entry bevat datum, tijd, reden en impact.

---

# 22-10-2025 — FIX layout shift bij hover op top-level menu-items

## Components
`.d-flyout > ul > li`
`.d-flyout > ul > li:hover`

## Oorzaak
- Border was fysiek aanwezig via `border-top/bottom: X solid transparent`, maar:
  - Style en width werden **opnieuw geïnjecteerd bij hover** (`border-style`, `border-width`)
  - Dit leidde tot **layout recalculatie** en `offsetHeight` shift (`85 → 87`)
- Dubbele declaratie: zowel shorthand (`border-top/bottom`) als longhand (`border-top-color`, `-style`, `-width`) in normale toestand én bij hover

## Oplossing
- Verwijder longhand-definities van `border-style` en `border-width` bij hover
- Definieer `border-top` en `border-bottom` volledig in normale toestand
- Beperk hover-effect tot alleen `border-color: initial`
- Vermijd dubbele definities: gebruik uitsluitend shorthand in normale toestand

## Resultaat
- Border is fysiek aanwezig vóór hover
- Bij hover verandert alleen de kleur
- Geen layout shift, `offsetHeight` blijft stabiel

## Verifieerbaarheid
```js
setInterval(() => {
  console.log(document.getElementById('topMenuBar').offsetHeight);
}, 500);

---


## [2025-10-22 16:15] docs – README-menu-layer uitgebreid met scriptstructuur

- Toegevoegd: overzicht van functies in menu.js (hamburger, submenu, aria, sluitgedrag)
- Toelichting: DOMContentLoaded, viewportgedrag, aria-expanded per device
- Impact: verhoogt inzicht en traceerbaarheid van JS-layer voor toekomstige uitbreidingen

---


## [2025-10-22 15:55] v0.1.1 – HTML-commentaar vervangen in menu.js

- Gewijzigd: HTML-commentaar (`<!-- ... -->`) verwijderd uit `menu.js`
- Toegevoegd: equivalent JavaScript-commentaarblok (`/* ... */`) met uitleg over defer-attribuut
- Impact: parserveiligheid in JS-omgeving gegarandeerd, geen functionele impact

---

## [2025-09-19 16:35] v0.1.0 – navigation-menu.css geïmporteerd

- Toegevoegd: `.nav-openZ`, flex layout, transition
- Impact: visuele basis voor hamburger
- Git commit: (optioneel)
