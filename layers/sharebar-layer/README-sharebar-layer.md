# README: sharebar-layer

Bestand: `README-sharebar-layer.md`

## Doel

Deze layer bevat CSS- en JavaScript-bestanden voor een sticky social media sharebar onderaan de pagina.  
De component is visueel, interactief en merk-specifiek. Hij genereert dynamische tracking-URL's met UTM-tags en gebruikt Font Awesome iconen.  
Niet engine-agnostisch, dus uitgesloten van `utilities-layer`.


## Bestanden

| Bestand                       | Functie                                               |
|-------------------------------|-------------------------------------------------------|
| `sharebar.css`                | Styling van iconen, layout, hover-effecten            |
| `sharebar.js`                 | Dynamische URL-generatie met tracking                 |
|                               |                                                       |
| `CHANGELOG-sharebar-layer.md` | Versiegeschiedenis per subcomponent                   |
| `AUDIT-sharebar-layer.md`     | Enginegedrag, parserfiltering, mapping                |
| `README-sharebar-layer.md`    | Introductie, integratiehandleiding, rollbackstrategie |

---

## Documentatie
- Changelog → Versiehistorie per subcomponent (style, script, tracking, csp)

- Audit → Enginegedrag, parserfiltering, DOM-verificatie, mappingstructuur


## Inhoud

### `sharebar.css`
- Styling voor sticky balk onderaan de pagina
- Ronde iconen via `border-radius`
- Hover-effecten en merk-kleuren
- Mobiele optimalisatie via `@media (max-width: 600px)`

### `sharebar.js`
- Dynamische URL-aanpassing via UTM-parameters op basis van de huidige pagina-URL.

- Injecteert dynamische `href`-attributen op basis van `data-base` en `window.location.href`
- Voegt UTM-tags toe: ?utm_source=social&utm_medium=sharebar&utm_campaign=post
- Fallback ingebouwd voor ontbrekende `data-base` attributen
- Script uitgevoerd via `DOMContentLoaded`

## Scope

- UI-component met visuele gedrag
- Merk-specifieke kleurcodering en iconen
- DOM-manipulatie en event-handling
- Niet herbruikbaar buiten deze context
- Geen Theme Designer afhankelijkheden

## Enginegedrag

- CSS getest op parser-acceptatie in layout editor en live site
- JS werkt via `DOMContentLoaded` en gebruikt alleen standaard DOM API’s, zonder externe afhankelijkheden
- Font Awesome iconen gerenderd via `::before`
- Geen CSP-blokkades bij correcte configuratie

## ⚙️ Integratie-instructies

1. Voeg de volgende HTML toe aan je template:

	<div id="stickyShareBarBottom">
		<!-- sharebar wordt hier geïnjecteerd -->
	</div> 
 
2. Verwijder de standaard Blogger-includables: Zie `AUDIT-sharebar-layer.md` voor uitleg.
 
3. Zorg dat je CSP de volgende domeinen toestaat:
	script-src: 'unsafe-inline', https://danga4biz.github.io

	style-src: 'unsafe-inline', https://cdnjs.cloudflare.com

	font-src: https://fonts.gstatic.com 
 
4. Laad Font Awesome stylesheet via CDNJS:
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet"> 

## Rollbackstrategie
Deze layer is volledig verwijderbaar zonder impact op andere delen van de repository. 
Zie `CHANGELOG-sharebar-layer.md` voor het exacte subtree-pad en rollbackcommando.

---

## 🔧 Operationeel protocol

> 📄 Zie `docs/layer-protocol.md` voor changelog- en auditworkflow binnen deze layer  
> Documenteert de generieke testaanpak, changelogstructuur, auditregels en rollbackstrategie voor alle layers.  
> Geldt voor CSS-, JS- en documentatiecomponenten. Testcommits zijn gemarkeerd met `[TESTFASE]`, correcties met `[CORRECTIE]`, en productiecommits met `✅`.


