# 📜 README – menu-layer

Deze layer bevat alle navigatiecomponenten van de website, inclusief hamburgerknop, submenu's en toggling-mechanismen. De CSS is modulair opgebouwd en gekoppeld via `@layer menu` voor cascadecontrole.

---

## 🔗 Bestanden

- `navigation-menu.css`
- `CHANGELOG-menu-layer.md`
- `README-menu-layer.md`

---

## 🧠 Cascade-impact

- Beïnvloedt alleen `.nav-openZ`, `.submenu`, `.dropdown`
- Geen impact op `theme-layer`, `layout-layer`, of externe stylesheets
- Gekoppeld via `@layer menu` in de globale CSS-opbouw

---

## 🧪 Teststrategie

- DevTools gebruikt voor cascade-verificatie
- Mobile UX getest via touch-simulatie
- Rollbacks vastgelegd in changelog per versie
