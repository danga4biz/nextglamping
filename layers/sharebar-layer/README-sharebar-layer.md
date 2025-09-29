# Sharebar Layer

Deze layer bevat CSS- en JavaScript-bestanden voor een sticky social media sharebar onderaan de pagina. 
De component is visueel, interactief en merk-specifiek. Niet engine-agnostisch, dus uitgesloten van `utilities-layer`.

## Inhoud

- `sharebar.css`  
  Styling voor sticky balk, iconen, hover-effecten, merk-kleuren en mobiele optimalisatie.

- `sharebar.js`  
  Dynamische URL-aanpassing via UTM-parameters op basis van de huidige pagina-URL.

## Scope

- UI-component met visuele gedrag
- Merk-specifieke kleurcodering
- DOM-manipulatie en event-handling
- Niet herbruikbaar buiten deze context

## Enginegedrag

- CSS getest op parser-acceptatie in layout editor en live site
- JS werkt via `DOMContentLoaded` en gebruikt alleen standaard DOM API’s
- Geen Theme Designer afhankelijkheden

## Rollbackstrategie

- Layer is volledig verwijderbaar zonder impact op andere layers
- Subtree-pad: `layers/sharebar-layer`
- Rollback via `git rm -r layers/sharebar-layer` + changelog-update

## Changelog

Zie `CHANGELOG-sharebar-layer.md` voor versiehistorie en audit-layer tagging.
