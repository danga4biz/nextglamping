# Documentatiestructuur: Layerbestanden

Deze structuur definieert de unieke rol van elk document binnen een layer.  
Doel: overlap voorkomen, rollbackbaarheid garanderen, en DevTools-verifieerbaarheid behouden.

---

## README-layer.md

**Doel:** Introductie en integratiehandleiding

| Bevat…                                  | Bevat niet…                          |
|-----------------------------------------|--------------------------------------|
| Wat de layer doet                       | Technische engine-analyse            |
| Hoe je hem integreert                   | Parserfiltering of DOM-verificatie   |
| Welke bestanden erin zitten             | Versiegeschiedenis of changelog      |
| Welke Blogger-includables je verwijdert | DevTools-observaties                 |
| Links naar changelog en audit           | Commitdata of rollbackstrategie      |

---

## CHANGELOG-layer.md

**Doel:** Versiegeschiedenis per subcomponent

| Bevat…                          | Bevat niet…                          |
|---------------------------------|--------------------------------------|
| Wat is gewijzigd                | Uitleg over enginegedrag             |
| Wanneer (datum)                 | Integratie-instructies               |
| Versienummer per subcomponent   | Mappingstructuur                     |
| Rollbackstrategie               | Parserfiltering of DOM-verificatie   |
| DevTools-verifieerbare gedrag   | Bestandsstructuur of gebruikstips    |

---

## AUDIT-layer.md

**Doel:** Technische bewijslaag

| Bevat…                          | Bevat niet…                          |
|---------------------------------|--------------------------------------|
| Enginegedrag en parserfiltering | Versienummers of commitdata          |
| DOM-verificatie                 | Integratie-instructies               |
| DevTools-observaties            | Bestandsoverzicht                    |
| Mapping van subcomponenten      | Rollbackstrategie                    |
| Edge-cases en fallbacklogica    | Introductie of gebruiksdoel          |

---

## Samenvatting

| Bestand        | Focus                        | Gebruikerstype           |
|----------------|------------------------------|--------------------------|
| `README`       | Gebruik & integratie         | Ontwikkelaar / gebruiker |
| `CHANGELOG`    | Wijzigingen & rollback       | Maintainer / committer   |
| `AUDIT`        | Engine-analyse & verificatie | Debugger / tester        |

---

## Toepassing

Gebruik deze structuur voor elke nieuwe layer in `layers/`.  
Voeg dit bestand toe als `docs/structure.md` of als commentaarblok in je `README`.

