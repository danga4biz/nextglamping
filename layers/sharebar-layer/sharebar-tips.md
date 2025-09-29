## Tips
Je hebt nu een eigen sticky share bar, dus kun je de hele standaard Blogger sharing-structuur uit je template halen. 

De onderstaande Blogger-includables (standaard share buttons) mogen worden verwijderd omdat je een eigen sticky share bar gebruikt. Ze zijn niet 
meer nodig en zorgen alleen voor extra code en mogelijke conflicten. Dat ruimt op én voorkomt dat er ongewenste knoppen of scripts blijven hangen.

### Blogger Includables
Deze Blogger-includables (standaard share buttons) kunnen worden verwijderd omdat je een eigen sticky share bar gebruikt. Ze zijn niet meer nodig en zorgen alleen voor extra code en mogelijke conflicten. Dat ruimt op én voorkomt dat er ongewenste knoppen of scripts blijven hangen.

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

## Specifiek over platformShare
De includable platformShare genereert de daadwerkelijke a-link voor het delen op een platform. 
Hij wordt gebruikt door:
- facebookShare
- blogThisShare
- linkShare
- otherSharingButton

En indirect via:
- sharingButton → die gebruikt sharingPlatformIcon → die gebruikt platform.key → die kan weer platformShare aanroepen

Omdat jij een eigen sticky share bar hebt gebouwd en deze Blogger-knoppen niet meer gebruikt, is platformShare overbodig. 
Maar: als je ergens nog <b:include name='platformShare'/> hebt staan buiten de standaard structuur, dan moet je die eerst 
verwijderen voordat je de includable zelf weghaalt.

# Let op

## Wat moet je nog checken vóór verwijderen?
1. Zoek in je template naar <b:include name='postShareButtons'/> 
→ Verwijder die aanroep, anders krijg je een foutmelding als de includable ontbreekt.

2. Check of je ergens data:this.sharing.platforms gebruikt 
→ Als dat nog ergens staat, haal het weg of vervang het door je eigen logica.

3. Verwijder bijbehorende CSS 
→ Alles wat begint met .sharing, .share-buttons, .sharing-button, etc. mag weg als je het niet meer gebruikt.

## Wat blijft staan?
Je eigen sticky bar (#stickyShareBarBottom) en de HTML die je daarvoor hebt gemaakt. 
Die kun je blijven stylen en uitbreiden zoals jij wilt.


