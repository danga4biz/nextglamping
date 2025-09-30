# Audit: sharebar-layer

Bestand: `AUDIT-sharebar-layer.md`

Technische documentatie van enginegedrag, parserfiltering, DOM-verificatie en edge-cases voor `sharebar-layer`.  
Alle observaties zijn DevTools-verifieerbaar en rollbackbaar.

# Test-auditregels

## 30-09-2025 — [TESTFASE] stickyShareBarLeft injectie en enginegedrag

- Injectiepunt: correct geplaatst binnen `#centerBarLeft` van `#centerBarWrapper`
- Engine-reactie:
  - Geen parserfiltering
  - Geen layout-conflict met `flex-basis` of `overflow`
- CSS-reactie:
  - `position: fixed` buiten flow, geen invloed op `centerBarLeft`
  - `top: 50%` + `transform: translateY(-50%)` → verticale centrering
  - `left: 0` → bar plakt tegen schermrand
- JS-reactie:
  - `data-base` correct geïnterpreteerd
  - `window.location.href` + UTM werkt zoals bedoeld
- DevTools-verificatie:
  - Bar zichtbaar in DOM
  - Iconen renderen correct via FontAwesome
  - Links actief en correct opgebouwd
  - Hover-effecten en kleurtransities werken zoals bedoeld

🔍 Status: testfase — overlapgedrag bij scroll, z-index-conflict met modals, en mobile fallback worden nog onderzocht.

---

# ✅ Productie-auditregels

## Component Mapping: sharebar-layer v1A  

**Versie:** 1A  
**Datum:** 1 Sep 2025  
**Module:** `sharebar-layer`  
**Locatie:** Sticky bar onderaan pagina (`#stickyShareBarBottom`)  
**Doel:** Dynamisch genereren van social media links met tracking


Overzicht van alle subcomponenten van de sharebar-layer, inclusief hun functie en verificatiepunten.

| Subcomponent            | Type       | Functie                                               | Verifieerbaar via |
|-------------------------|------------|-------------------------------------------------------|-------------------|
| `#stickyShareBarBottom` | HTML `div` | Container voor iconen, sticky onderaan pagina         | DOM-verificatie   |
| `.share-link`           | HTML `a`   | Social media knop met `data-base` attribuut           | DOM-verificatie   |
| `sharebar-layer.js`     | JS-script  | Injecteert dynamisch tracking-URL's met UTM-tags      | DevTools Console  |
| `data-base` attribuut   | HTML attr  | Basis-URL voor social media sharing                   | DOM-verificatie   |
| `utm_source`            | tracking   | Verkeerbron: social                                   | JS-uitvoer        |
| `utm_medium`            | tracking   | Kanaal: sharebar                                      | JS-uitvoer        |
| `utm_campaign`          | tracking   | Context: post                                         | JS-uitvoer        |
| `.share-icon i`         | CSS + FA   | Icon via Font Awesome `::before`                      | CSS-rendering     |
| `position: sticky`      | CSS        | Verankering onderaan viewport                         | Enginegedrag      |
| `border-radius`         | CSS        | Ronde iconen                                          | CSS-verificatie   |
| `transition`            | CSS        | Hover-effecten                                        | Parserfiltering   |
| `@media` query          | CSS        | Mobiele optimalisatie                                 | Parserfiltering   |
| `script-src` CSP        | Meta tag   | Toestemming voor inline en GitHub-hosted scripts      | CSP-verificatie   |
| `style-src` CSP         | Meta tag   | Toestemming voor Font Awesome stylesheet via CDNJS    | CSP-verificatie   |
| `font-src` CSP          | Meta tag   | Toestemming voor `.woff2` fontbestanden               | CSP-verificatie   |


---

## 1. DOM-elementen

| Selector                  | Type        | Functie                                                  |
|---------------------------|-------------|----------------------------------------------------------|
| `#stickyShareBarBottom`   | `div`       | Container voor social media iconen                       |
| `.share-link`             | `a`         | Individuele social media knoppen                         |
| `.share-icon`             | `a`         | Stylingklasse voor ronde iconen                          |
| `.share-icon i`           | `i`         | Font Awesome icon via pseudo-element `::before`          |

- Elementen correct geïnjecteerd via script
- `data-base` attributen correct gelezen
- `link.href` correct samengesteld via `encodeURIComponent`

---

## 2. CSS-interactiepunten
Verificatie van CSS- en HTML-eigenschappen zoals `position: sticky`, `z-index`, `border-radius`, enz.

| Eigenschap                  | Doel                                                                 |
|-----------------------------|----------------------------------------------------------------------|
| `position: sticky`          | Verankert de bar onderaan de viewport                                |
| `border-radius: 50%`        | Maakt iconen rond                                                    |
| `font-size`                 | Bepaalt icongrootte                                                  |
| `::before`                  | Injecteert Font Awesome glyph via CSS                                |
| `hover`-states              | Verandert kleur bij interactie                                       |
| `@media (max-width: 600px)` | Optimaliseert layout voor mobiel                                     |
| `z-index: 9999`             | 
| `box-shadow`                | 

- CSS getest op parser-acceptatie in layout editor en live site
- Hover-effecten en sticky gedrag zichtbaar in DevTools
- Font Awesome iconen correct gerenderd via CDNJS stylesheet

---

## 3. Scriptinteractie

| Event                    | Actie                                                                        |
|--------------------------|------------------------------------------------------------------------------|
| `DOMContentLoaded`       | Wacht tot DOM klaar is voor manipulatie                                      |
| `window.location.href`   | Bepaalt huidige pagina-URL                                                   |
| `data-base` attribuut    | Basis-URL voor social media sharing (bijv. `https://twitter.com/share?url=`) |
| `link.href`              | Wordt samengesteld uit `data-base + encodeURIComponent(fullURL)`             |

- Script werkt zonder externe afhankelijkheden
- Geen Theme Designer afhankelijkheden
- DevTools: script zichtbaar onder “Sources” → `sharebar.js` , geen console-errors
- Dynamische `href`-injectie op basis van `data-base` en `window.location.href`
- Fallback ingebouwd: `if (!base) return;`  

---

## 4. Trackingparameters (UTM)
Uitleg van de trackingstrategie via UTM-parameters en hoe deze worden gegenereerd in het script.

| Parameter         | Waarde        | Doel                                                                 |
|-------------------|---------------|----------------------------------------------------------------------|
| `utm_source`      | `social`      | Verkeer komt van social media                                        |
| `utm_medium`      | `sharebar`    | Kanaal is de sticky sharebar                                         |
| `utm_campaign`    | `post`        | Campagne is individuele blogpost                                     |


- Dynamisch toegevoegd aan elke `.share-link` via het script
- DevTools: zichtbaar in DOM en meetbaar via Google Analytics

---

## 5. CSP-interactie

| Directive     | Vereiste domeinen                                 | Reden                                                                 |
|---------------|---------------------------------------------------|-----------------------------------------------------------------------|
| `script-src`  | `'unsafe-inline'`, `https://danga4biz.github.io`  | Voor inline script of GitHub-hosted versie van `sharebar-layer`       |
| `style-src`   | `'unsafe-inline'`, `https://cdnjs.cloudflare.com` | Voor Font Awesome stylesheet via CDNJS                                |
| `font-src`    | `https://fonts.gstatic.com`                       | Voor `.woff2` fontbestanden van Font Awesome                          |

- Geen CSP-blokkades bij correcte configuratie
- Font Awesome stylesheet en fonts laden correct

---

## 6. Fallbacklogica

- Als `data-base` ontbreekt in een `.share-link`, wordt die link overgeslagen
- Script crasht niet — robuuste fallback via `if (!base) return;`

---

## 7. DevTools-verifieerbare gedrag
Wat je in DevTools kunt zien om de werking van de sharebar te bevestigen: scripts, DOM, CSS, tracking.

- Injectie van `href`-attributen met correcte UTM-tags zichtbaar in DOM
- Font Awesome iconen gerenderd via `::before` in “Elements”
- Sticky positioning, hover-effecten en `box-shadow` zichtbaar in layout
- Script zichtbaar onder “Sources” → `sharebar.js`
- JS-uitvoering zichtbaar in “Console” → geen errors
- Geen CSP-blokkades bij correcte domeinconfiguratie

---

## 8. Legacy Blogger-verwijdering

Je hebt nu een eigen sticky sharebar, dus de standaard Blogger sharing-includables zijn overbodig.  
Deze sectie documenteert welke onderdelen veilig verwijderd kunnen worden.

### Te verwijderen includables
Deze Blogger-includables (standaard share buttons) kunnen worden verwijderd omdat je een eigen sticky share bar gebruikt. 
Ze zijn niet meer nodig en zorgen alleen voor extra code en mogelijke conflicten. 

ID                    | Functie
----------------------|-----------------------------------------------------
postShareButtons      | Hoofdcontainer voor Blogger’s share buttons
sharingButtons        | Popup-knoppenstructuur
sharingButtonsMenu    | Menu met alle platformknoppen
sharingButton         | Individuele knop voor delen (zoals Facebook, Twitter)
sharingButtonContent  | Visuele inhoud van de knop
sharingPlatformIcon   | Laadt het icoon voor elk platform
platformShare         | Genereert de link en onclick voor delen
blogThisShare         | Specifieke knop voor “Blog This”
facebookShare         | Facebook-specifieke knop
googlePlusShare       | Verouderd, mag sowieso weg
linkShare             | “Kopieer link”-knop
otherSharingButton    | Knop voor “Andere apps”

### Verwijderstrategie
1. Zoek in je template naar `<b:include name='postShareButtons'/>` 
→ Verwijder die aanroep, anders krijg je een foutmelding als de includable ontbreekt.

2. Check of je ergens `data:this.sharing.platforms` gebruikt 
→ Als dat nog ergens staat, haal het weg of vervang het door je eigen logica.

3. Verwijder bijbehorende CSS 
→ Alles wat begint met `.sharing`, `.share-buttons`, `.sharing-button`, etc. mag weg als je het niet meer gebruikt.

---

### Specifiek over platformShare
De includable platformShare genereert de daadwerkelijke a-link voor het delen op een platform. 

Hij wordt gebruikt door:
- facebookShare
- blogThisShare
- linkShare
- otherSharingButton

En indirect via:
- sharingButton → die gebruikt sharingPlatformIcon → die gebruikt platform.key → die kan weer platformShare aanroepen

Omdat jij een eigen sticky share bar hebt gebouwd en deze Blogger-knoppen niet meer gebruikt, is platformShare overbodig. 

Maar: als je ergens nog `<b:include name='platformShare'/>` hebt staan buiten de standaard structuur, dan moet je die eerst 
verwijderen voordat je de includable zelf weghaalt.


## 9. Blogger script-tagged behavior
Verificatie van Blogger’s afwijkende HTML-parsergedrag bij `<script>` tags:

- Blogger accepteert `<script src="..."/>` als self-closing tag
- ❌ Verwijdert expliciete `</script>` zelfs als correct geschreven, is niet conform HTML5-specificatie  
- Script correct geladen en uitgevoerd via `defer`
- 🔍 DevTools: script zichtbaar onder “Sources”, geen parse errors

---






