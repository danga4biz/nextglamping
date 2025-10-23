# Variables Layer

Deze layer bevat centrale CSS-variabelen die gebruikt worden voor componentgedrag, kleursturing, layoutcontrole en pseudo-class fallbackmechanismen.  
De inhoud is modulair, rollbackbaar en DevTools-verifieerbaar.

## Inhoud

- `variables.css`  
Bevat `:root`-gebaseerde custom properties voor:

  - Component-specifieke kleur- en layoutvariabelen  
  - Pseudo-class variabelen (hover, focus, active)  
  - Fallbackstructuren via `var(--..., currentColor)`  

## Scope

- Alleen bedoeld voor gebruik binnen component- en pseudo-class layers  
- Geen cross-layer afhankelijkheden  
- Geen Theme Designer variabelen of legacy UI-hooks  
- Volledig DevTools-verifieerbaar via Computed → Variables

## Enginegedrag

- Variabelen zijn getest op acceptatie door Blogger’s parser  
- Cascadegedrag is voorspelbaar en fallback-compatibel  
- Geen globale namespace-vervuiling  
- Variabelen zijn semantisch gestructureerd per component en state

## Rollbackstrategie

- Layer is volledig verwijderbaar zonder impact op andere delen van de repository  
- Subtree-pad: `layers/variables-layer`  
- Rollback via `git rm -r layers/variables-layer` + changelog-update

## Changelog

Zie `CHANGELOG-variables-layer.md` voor versiehistorie, audit-layer tagging en DevTools-verificatie.
