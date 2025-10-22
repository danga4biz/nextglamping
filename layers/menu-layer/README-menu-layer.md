# 📜 README – menu-layer

Deze layer bevat alle navigatiecomponenten van de website, inclusief hamburgerknop, submenu's en toggling-mechanismen. De CSS is modulair opgebouwd en gekoppeld via `@layer menu` voor cascadecontrole.

---

## 🔗 Bestanden

- 'menu.css'
- 'menu.js'
- 'CHANGELOG-menu-layer.md'
- 'README-menu-layer.md'

---

## 🧠 Cascade-impact

- Beïnvloedt alleen .nav-openZ, .submenu, .dropdown
- Geen impact op theme-layer, layout-layer, of externe stylesheets
- Gekoppeld via '@layer menu' in de globale CSS-opbouw

---

## 🧪 Teststrategie

- DevTools gebruikt voor cascade-verificatie
- Mobile UX getest via touch-simulatie
- Rollbacks vastgelegd in changelog per versie

---

## 🧩 JavaScript-structuur
Het script is modulair opgebouwd en bevat:
- `myHamburgFunction3()` → togglet menu en knop
- `initHamburgerToggle()` → activeert hamburgerknop
- `initMobileMenuDropdowns()` → regelt submenugedrag op mobiel
- `initDesktopAriaExpanded()` → zet aria-expanded op desktop
- `initMenuCloseHandlers()` → sluit menu bij klik buiten of Escape

Alle functies zijn semantisch geïsoleerd en worden pas geactiveerd na DOM-load via `DOMContentLoaded`. Toegankelijkheidsattributen (`aria-expanded`) worden dynamisch gezet op basis van viewport en interactie. Submenu’s worden automatisch gesloten bij viewport-switch van mobiel naar desktop.
