# Utilities Layer

Deze layer bevat CSS- en JavaScript-bestanden die engine-compatibele hulpfuncties en utility-klassen definiëren. 
De inhoud is modulair, rollbackbaar en DevTools-verifieerbaar.

## Inhoud

- `utilities.css`
Bevat utility-klassen voor: 

- `utilities.js`  
Bevat JavaScript-functies voor: 

## Scope

- Alleen bedoeld voor gebruik binnen deze layer zelf  
- Geen cross-layer afhankelijkheden  
- Geen Theme Designer variabelen of legacy UI-hooks  
- Volledig DevTools-verifieerbaar

## Enginegedrag

- CSS-klassen zijn getest op acceptatie door Blogger’s parser  
- JS-functies zijn conditioneel inzetbaar op basis van inputtype en device-capabilities  
- Geen globale namespace-vervuiling

## Rollbackstrategie

- Layer is volledig verwijderbaar zonder impact op andere delen van de repository  
- Subtree-pad: `layers/utilities-layer`  
- Rollback via `git rm -r layers/utilities-layer` + changelog-update

## Changelog

Zie `CHANGELOG-utilities-layer.md` voor versiehistorie, audit-layer tagging en DevTools-verificatie.


# Scrolling banner
Deze layer bevat een horizontaal scrollende banner met consistente snelheid en afstand, ongeacht schermgrootte of tekstlengte.

- Scrollsnelheid: `12s` via `animation-duration`
- Scrollafstand: van `translateX(100vw)` naar `translateX(-100%)`
- Geen afhankelijkheid van tekstbreedte of containerinjectie
- DevTools-verifieerbaar via `animation-*` en `transform` properties

