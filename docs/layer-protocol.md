> 📘 Protocol voor changelog- en auditbeheer binnen alle layers — testbaar, rollbackbaar, DevTools-verifieerbaar

# Layer Protocol — changelog, testaanpak en auditstructuur

Dit document beschrijft de generieke workflow voor changelogbeheer, testcommits, auditlogging en rollbackstrategie binnen alle layers van het project.

---

## 🔧 Bestandsstructuur per layer

Elke layer bevat:

- `README-[layer].md` → functionele uitleg en integratie
- `CHANGELOG-[layer].md` → changelog voor productie én testcommits
- `AUDIT-[layer].md` → enginegedrag, injectiepunten, parserreacties
- `[layer].css` en `[layer].js` → visuele en functionele implementatie

---

## 🧪 Testaanpak

- Alle wijzigingen worden eerst visueel, functioneel en engine-technisch getest
- Testcommits worden direct toegevoegd aan `CHANGELOG-[layer].md` en `AUDIT-[layer].md`
- Testregels zijn gemarkeerd met `[TESTFASE]` in de titel
- Ze worden visueel gescheiden van productiecommits via een `🧪 Testcommits` sectie
- Na validatie worden ze omgezet naar productiecommits (`✅`) en verplaatst binnen het bestand

---

## 📜 Changelogstructuur

### Secties

- `✅ Productiecommits` — volledig gevalideerde wijzigingen
- `🧪 Testcommits` — voorlopige wijzigingen in testfase
- `[CORRECTIE]` — herzieningen van eerdere commits

### Opbouw per commit

- Datum en statuslabel
- Context en probleemomschrijving
- Fixdetails (CSS/JS/HTML)
- Resultaat en DevTools-verifieerbaarheid

---

## 📜 Auditstructuur

### Secties

- `✅ Productie-auditregels` — enginegedrag van actieve commits
- `🧪 Test-auditregels` — observaties van testcommits
- `[CORRECTIE]` — engine-reactie op herzieningen

### Opbouw per auditregel

- Injectiepunt en DOM-locatie
- Engine-reactie (parser, layout, conflict)
- CSS- en JS-reactie
- DevTools-verificatie
- Status en vervolgonderzoek

---

## 🔁 Correcties

- Correcties worden altijd dubbel vastgelegd:
  - Als `[CORRECTIE]` in changelog en auditlog
  - Als herziening van de oorspronkelijke commit
- Rollbacks zijn volledig traceerbaar via changelogregels en auditvermeldingen
- Elke layer is verwijderbaar via `git rm -r layers/[layer]` zonder externe afhankelijkheden

---

## 📌 Richtlijnen

- Geen aparte testbestanden: alles gebeurt binnen de bestaande changelog- en auditlogbestanden
- Testregels worden niet automatisch gepromoveerd — validatie vereist expliciete goedkeuring
- Correctieblokken zijn commit-ready en DevTools-verifieerbaar
