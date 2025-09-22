# Projectstructuur: Modulaire Layers in Main Branch

Dit project gebruikt een modulaire directorystructuur binnen één `main` branch. Elke layer is een zelfstandige eenheid met eigen changelog, styling, scripts en documentatie.

---

## 🧱 Structuur

nextglamping/ 
├── index.html 
├── layers/ 
│ ├── menu-layer/ 
│ │ ├── menu.css 
│ │ ├── menu.js 
│ │ ├── README-menu-layer.md 
│ │ └── CHANGELOG-menu-layer.md 
│ ├── base-layer/ 
│ ├── blogger-layer/ 
│ ├── variables-layer/ 
│ └── ...


Elke layer:
- Heeft eigen verantwoordelijkheid (menu, typografie, blog, etc.)
- Is rollbackbaar via changelog en commit history
- Is testbaar via GitHub Pages zonder branches

---

## ✅ Waarom directories in `main`?

- **Sneller werken**: geen branch-switching, geen merge-conflicten
- **Rollbackbaar**: commits per folder, changelog per layer
- **GitHub Pages-compatibel**: één branch = één live site
- **Modulair**: layers zijn losstaand, maar samenwerken via `index.html`
- **Forensisch**: elke wijziging is traceerbaar per folder

---

## 🔁 Rollbackstrategie

- Elke layer heeft een eigen `CHANGELOG-layername.md`
- Elke commit bevat:
  - Datum
  - Wat is aangepast
  - Waarom (cascade-impact, UI-state, accessibility)
- Rollback gebeurt via GitHub commit history of tooling zoals Sublime Merge

---

## 🧪 Teststrategie

- Test nieuwe features in aparte folders binnen `main`, bijvoorbeeld:

/test-menu-layer/

- Verwijs in HTML naar testversies van CSS/JS
- Verwijder testfolder na merge of stabilisatie

---

## 🧠 Specifiek voordeel

- ✅ Geen plugin-gedoe, geen branches nodig
- ✅ Volledige controle over cascade en changelog per layer
- ✅ Werkt clean met Git Portable, Sublime Merge en Notepad++ workflows
- ✅ Geen overhead, geen scripts, geen tooling die zichzelf niet respecteert

---

