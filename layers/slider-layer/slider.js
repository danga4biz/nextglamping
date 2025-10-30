		/* === CONFIGURATIE & STATE =============================================================================(begin)===	*/
		/*																													*/
		/* Versie 4.1 (28-10-2025)																							*/
		/*																													*/
		/*	Losse variabelen vervangen door de objecten config en state die globaal beschikbaar zijn.						*/
		/*																													*/
		/*	- config: bevat instelbare parameters zoals snelheid, pauzes, en limieten. Maakt het gedrag van de carousel		*/
		/*		centraal beheersbaar.																						*/
		/*																													*/
		/*	- state: houdt de tijdelijke status bij van timers en swipe-startpositie. Dit voorkomt globale variabelen en 	*/
		/*		maakt debugging eenvoudiger.																				*/
		/*																													*/
		/*	Je moet overal in je code verwijzen met config.scrollSpeed of state.startX.										*/
		/*																													*/
		const config = {
			scrollSpeed: 10,           // pixels per scrollstap
			scrollInterval: 20,        // interval tussen scrollstappen (ms)
			autoScrollDelay: 500,      // pauze na interactie (ms)
			maxItems: 10             // max aantal feed-items dat wordt weergegeven (instelbaar)
		};
		
		const state = {
			autoScrollInterval: null,    // referentie naar scroll-timer (setInterval)
			restartTimeout: null,        // referentie naar timeout voor herstart scroll (setTimeout)
			startX: 0                   // touch-startpositie (voor swipe)
		};

		/* === CONFIGURATIE & STATE BLOK ========================================================================(end)=====	*/	
	

		/* === INITIALISATIE (DOMContentLoaded) =================================================================(begin)===	*/
		
		/* Versie 5 (30-10-2025) data-attributen toegevoegd 																*/
		/*																													*/
		/*	Wat is verandert:																								*/
		/*	- De id blijft feedSlider, dus je hoeft niets in je HTML te wijzigen behalve de data-attributen.				*/
		/*	- Nieuwe functie getSliderConfig(slider) haalt alles uit de HTML, maar valt terug op globale config als er 		*/
		/*	niks staat.																										*/
		/*	- De rest van je JS (initFeedSlider, fetchFeed, loopFeedItems, etc.) blijft onaangeroerd.						*/
		/*	
		
		/*	Het script wacht tot de hele DOM is geladen voordat het iets uitvoert.											*/
		/*																													*/
		/*	DOM ELEMENTEN																									*/
		/*	• #feedSlider: container voor feed-items 																		*/
		/*	• data-feed-url: bepaalt de JSONP-feedbron																		*/

		document.addEventListener('DOMContentLoaded', () => {
		
			// slider is de hoofdcontainer waar de feed-items worden toegevoegd
			// slider is een variabele die verwijst naar dit element in de DOM
			const slider = document.getElementById('feedSlider');
			if (!slider) return;

			// feedURL krijgt de waarde van het data-feed-url attribuut
			const feedURL = slider.dataset.feedUrl;
			if (!feedURL) return;

// 30-10-2025			initFeedSlider(slider, feedURL, config, state);
			
			// 30-10-2025 
			// Gebruik de data-attributen voor deze slider
			initFeedSlider(slider, feedURL, getSliderConfig(slider), state);
		
		});
		/* === INITIALISATIE BLOK ===============================================================================(end)=====	*/


		/* === data-attributen inlezen (getSliderConfig) ========================================================(begin)===	*/
		/*																													*/
		/* Versie 5 (30-10-2025) data-attributen toegevoegd 																*/
		/*																													*/
		/*	Wat doet deze functie:																							*/
		/*	- Nieuwe functie: getSliderConfig(slider) leest de data-attributen en geeft deze terug als config-object.		*/
		/*																													*/
		/*	Wat is verandert:																								*/
		/*	- Initialisatieblok roept initFeedSlider(slider, feedURL, getSliderConfig(slider), state) aan in plaats van het */
		/*	globale config.																									*/
		/*																													*/

		// Helper: lees data-attributen van slider
		function getSliderConfig(slider) {
			return {
				scrollSpeed: parseInt(slider.dataset.scrollSpeed) || config.scrollSpeed,
				scrollInterval: parseInt(slider.dataset.scrollInterval) || config.scrollInterval,
				autoScrollDelay: parseInt(slider.dataset.autoScrollDelay) || config.autoScrollDelay,
				maxItems: parseInt(slider.dataset.maxItems) || config.maxItems
			};
		}

		/* === INITFEEDSLIDER ===================================================================================(begin)===	*/
		/*																													*/
		/* Versie 5 (30-10-2025) Event delegation																			*/
		/*																													*/
		/* - Hier hang je één set listeners aan de container (#feedSlider) in plaats van aan elk .feed-link.				*/
		/* - Voordelen: werkt voor alle huidige en toekomstige (gekloonde) items, geen dubbele bindings, efficiënter.		*/
		/*																													*/
		/*	Let op: 																										*/
		/*		- Verwijder de call naar addInteractionListeners uit loopFeedItems.											*/
		/*		- Hover/touch werkt ook voor clones.																		*/
		/*																													*/
		/* Versie 4.1 (28-10-2025)																							*/
		/*																													*/
		/* - fetchFeed: haalt de feed op en rendert de items.																*/
		/* - setupSwipe: activeert swipe-interactie op het slider-element.													*/
		/* - startAutoScroll: start automatische horizontale scroll.														*/
		/*																													*/
		
		/*	• Doel: initialiseert feedslider																				*/
		/*	• Locatie: buiten DOMContentLoaded																				*/
		/*	• Aangeroepen door: document.addEventListener																	*/
		/*	• Parameters: slider, feedURL, config, state																	*/
	
		function initFeedSlider(slider, feedURL, config, state) {
			fetchFeed(slider, feedURL, config, state);
			setupSwipe(slider, config, state);
			startAutoScroll(slider, config, state);

			// 30-10-2025 ChatGPT: Event delegation: één set listeners op de container
			addInteractionListeners(slider, config, state);
		}		
		
		
		/* === INITFEEDSLIDER ===================================================================================(end)=====	*/


		/* === MODULES ==========================================================================================(begin)===	*/

		/* === FEED OPHALEN VIA JSONP (fetchFeed) ===============================================================(begin)===	*/
		/*																													*/
		/* Versie 5 (30-10-2025) Event delegation voor hover/touch interactie												*/
		/*																													*/
		
		/*																													*/
		/* Versie 4.1 (28-10-2025)																							*/
		/*																													*/
		
		/*	FUNCTIES																										*/
		/*	• fetchFeed(): voegt <script> toe met JSONP-call																*/
		/*	• window.mbtlist(json): verwerkt feeddata en bouwt items														*/
		/*	• config.maxItems: limiet op aantal weergegeven posts															*/

		/*	• Doel: haalt feed op via JSONP																					*/
		/*	• Locatie: buiten DOMContentLoaded																				*/
		/*	• Aangeroepen door: initFeedSlider(...)																			*/
		/*	• Parameters: slider, feedURL, config, state																	*/
		
		function fetchFeed(slider, feedURL, config, state) {
			window.mbtlist = function (json) {
				const posts = json.feed.entry;
				const maxItems = config.maxItems; // hier halen we de waarde van maxItems op en het object config
				let count = 0;

				posts.forEach(post => {
					if (count >= maxItems) return;

					// Titel en URL ophalen
					let postTitle = '';
					let postURL = '';
					let thumbURL = '';

					// 🔍 Versie 2A: titel en URL ophalen met fallback
					post.link.forEach(link => {
						if (link.rel === "alternate") {
							postURL = link.href;
							postTitle = link.title || post.title?.$t || "Geen titel";
						}
					});

					// 📷 Versie 2A: thumbnail ophalen en opschonen
					thumbURL = post.media$thumbnail?.url?.replace("s72-c", "") || "";

					// 🧱 Versie 2H: feed-item bouwen – hele blok is <a>
					const item = document.createElement('a');
					item.className = 'feed-link';
					item.href = postURL;
					item.target = '_blank';

					// Snippet genereren
					const rawContent = post.content?.$t || "";
					const cleanText = stripHTML(rawContent);
					const snippet = cleanText.length > 200 ? cleanText.substring(0, 197) + "..." : cleanText;

					// 26-09-2025 ⛔ VERVANGEN: innerHTML (kwetsbare manier)
					/*
					item.innerHTML = `
						${thumbURL
							? `<img src="${thumbURL}" alt="${postTitle}">`
							: `<div class="no-thumb"><div class="no-thumb-text">${snippet}</div></div>`}
						<div class="feed-text">
							<strong>${postTitle}</strong>
						</div>
					`;
					*/

					// 26-09-2025 ✅ NIEUW: Robuuste DOM-opbouw met createElement
					if (thumbURL) 
					{
						const img = document.createElement('img');
						img.src = thumbURL;
						img.alt = postTitle;
						item.appendChild(img);
					} 
					else 
					{
						const noThumbDiv = document.createElement('div');
						noThumbDiv.className = 'no-thumb';

						const noThumbTextDiv = document.createElement('div');
						noThumbTextDiv.className = 'no-thumb-text';
						noThumbTextDiv.textContent = snippet;

						noThumbDiv.appendChild(noThumbTextDiv);
						item.appendChild(noThumbDiv);
					}

					const textDiv = document.createElement('div');
					textDiv.className = 'feed-text';

					const titleEl = document.createElement('strong');
					titleEl.textContent = postTitle;

					textDiv.appendChild(titleEl);
					item.appendChild(textDiv);

					// 24-09-2025 einde nieuwe HTML-opbouw
					
					/* === voegt feeds toe aan de scrollbare feedcontainer ============================================================	*/
					/*																													*/
					/*	appendChild voegt het element item toe aan de slider															*/
					slider.appendChild(item);
					count++;
				});

				loopFeedItems(slider, config, state);
//30-10-2025				addInteractionListeners(slider, config, state); // na DOM-opbouw events toevoegen
			};

			// 📡 Versie 2A: Blogger-feed ophalen via JSONP
			const script = document.createElement('script');
			script.src = `${feedURL}&callback=mbtlist`;
			document.body.appendChild(script);
		}

		/* === FEED OPHALEN VIA JSONP ===========================================================================(end)=====	*/

		
		/* === VERWIJDER HTML-tags voor veilige snippet (stripHTML) =============================================(begin)===	*/
		/*																													*/
		/* Versie 2H.2: snippet wordt alleen getoond als er geen thumbnail is												*/
		/*																													*/

		/*	• Doel: verwijdert HTML-tags voor veilige snippet																*/
		/*	• Locatie: buiten DOMContentLoaded																				*/
		/*	• Parameters: html																								*/
		/*	• Aangeroepen door: fetchFeed(...)																				*/ 
		
		function stripHTML(html) {
			const div = document.createElement("div");
			div.innerHTML = html;
			return div.textContent || div.innerText || "";
		}

		/* === VERWIJDER HTML-tags voor veilige snippet (stripHTML) =============================================(end)=====	*/
		
		
		/* === loop en interactie (loopFeedItems) ===============================================================(begin)===	*/
		/*																													*/
				
		/* Versie 5 (30-10-2025) Event delegation																			*/
		/*																													*/
		/* - Verwijder de call naar addInteractionListeners uit loopFeedItems.												*/
		/* - Clones volgen automatisch de event delegation listeners, geen nieuwe binding nodig
		/*																													*/

		/*																													*/
		/* Versie 4.1 (28-10-2025)																							*/
		/*																													*/

		/*	Feed-items dupliceren bij einde scroll																			*/
		/*	Simuleert oneindige scroll zonder extra data-ophaal																*/
		/*																													*/

		/* 	FUNCTIES																										*/
		/*	• loopFeedItems(): dupliceert .feed-link elementen																*/
		/*	• cloneNode(true): kopieert alles inclusief tekst en afbeelding													*/
			
		/*	• Doel: maakt feed oneindig scrollbaar																			*/
		/*	• Locatie: buiten DOMContentLoaded																				*/
		/*	• Aangeroepen door: fetchFeed(...)																				*/
		/*	• Parameters: slider, config, state																				*/
			
		function loopFeedItems(slider, config, state) {
			const currentItems = slider.querySelectorAll('.feed-link');
			currentItems.forEach(item => {
				const clone = item.cloneNode(true);
				slider.appendChild(clone);
			});
		}
			
		/* === loop en interactie (loopFeedItems) ===============================================================(end)=====	*/
			
			
		/* === SWIPE ONDERSTEUNING VOOR MOBIEL (setupSwipe) =====================================================(begin)===	*/
		/*																													*/
		/* Versie 5 (30-10-2025) Event delegation																			*/
		/*																													*/
		/* 	- isTouchMoving voorkomt dat touchend of touchmove ongewenst auto-scroll aanpast wanneer de gebruiker niet 		*/
		/*	swipet.																											*/
		/*	- Swipe blijft smooth, autoscroll pauzeert en herstart correct.													*/
		/*	- Event delegation zorgt dat het werkt voor alle items, ook clones.												*/
		/*																													*/
		/*																													*/
		/*	Maak het touch-gedrag op mobiel robuust, zodat het smooth swipen blijft doen zonder dat de event delegation 	*/
		/*	de automatische scroll blokkeert. 																				*/
		/*																													*/
		/* Versie 2F: swipe-ondersteuning voor mobiel																		*/
		/*																													*/
		/*	• Maakt horizontaal swipen mogelijk op mobiele apparaten														*/
		/*	• Verbetert mobiele bruikbaarheid zonder externe libraries														*/
		/*	• Swipegedrag is los van scroll- en feedlogica																	*/
		
		/* Swipe-beweging op mobiel:																						*/
		/*	• touchstart: onthoudt beginpositie 																			*/
		/*	• touchmove: scrollt mee met vinger 																			*/
		/*	• touchend: herstart scroll																						*/
		/*																													*/

		/*	• Doel: activeert swipegedrag op mobiel																			*/
		/*	• Locatie: buiten DOMContentLoaded																				*/
		/*	• Aangeroepen door: initFeedSlider(...)																			*/
		/*	• Parameters: slider, config, state																				*/

		function setupSwipe(slider, config, state) {
		
			let isTouchMoving = false; // check of gebruiker aan het swipen is

			slider.addEventListener('touchstart', (e) => {
				state.startX = e.touches[0].clientX;
				isTouchMoving = true;
				stopAutoScroll(slider, state);
			}, { passive: true });

			slider.addEventListener('touchmove', (e) => {
				if (!isTouchMoving) return;
				const currentX = e.touches[0].clientX;
				const deltaX = state.startX - currentX;
				slider.scrollLeft += deltaX;
				state.startX = currentX;
			}, { passive: true });

			slider.addEventListener('touchend', () => {
				if (!isTouchMoving) return;
				isTouchMoving = false;
				restartAutoScroll(slider, config, state);
			}, { passive: true })
		}


		/* === SWIPE ONDERSTEUNING ==============================================================================(end)=====	*/


		/* === SCROLL-MODULES ===================================================================================(begin)===	*/
		
		/* 	• Start, pauzeert en herstart automatisch scrollen																*/
		/*	• Houdt de feed in beweging, maar respecteert gebruikersinteractie												*/
		/*	• Scrollgedrag is losgekoppeld van feed-opbouw																	*/
		/*																													*/

		/*	MODULES																											*/
		/*	• startAutoScroll() activeert horizontaal scrollen met vaste snelheid.											*/
		/*	• stopAutoScroll() pauzeert het scrollen bij hover of swipe of touch. 											*/
		/*	• restartAutoScroll() herstart scrollen na een korte pauze zoals na een interactie.								*/
		/*																													*/
		/*	Deze functies gebruiken setInterval en setTimeout, opgeslagen in state, zodat je ze altijd kunt annuleren of	*/
		/*	herstarten.																										*/
		

		/* === start automatisch scrollen (startAutoScroll) ===============================================================	*/
		/*																													*/
		/*	Versie 2B: automatisch scrollen starten																			*/
		/*																													*/
		/*	• Doel: activeert horizontaal scrollen met vaste snelheid.														*/
		/*	• Locatie: buiten DOMContentLoaded																				*/	
		/*	• Aangeroepen door: initFeedSlider(...), en restartAutoScroll(...)												*/
		/*	• Parameters: slider, config, state																				*/
				
		function startAutoScroll(slider, config, state) {
			if (!slider) return;
			stopAutoScroll(slider, state);

			state.autoScrollInterval = setInterval(() => {
				slider.scrollBy({ left: config.scrollSpeed, behavior: 'smooth' });

				// 🔁 Versie 2C: oneindig scrollen via duplicatie
				const maxScroll = slider.scrollWidth - slider.clientWidth;
				if (slider.scrollLeft >= maxScroll - 10) {
					loopFeedItems(slider, config, state);
				}
			}, config.scrollInterval);
		}
		
		/* === pauzeren van scrollen bij interactie (stopAutoScroll) ======================================================	*/
		/*																													*/
		/*	Versie 2B: scroll pauzeren																						*/
		/*																													*/
		/*	• Doel: pauzeert het scrollen bij hover of swipe of touch, door het interval te stoppen.						*/
		/*	• Locatie: buiten DOMContentLoaded																				*/
		/*	• Aangeroepen door: setupSwipe(...), startAutoScroll(...), en addInteractionListeners(...)						*/
		/*	• Parameters: slider, state																						*/
		
		function stopAutoScroll(slider, state) {
			clearInterval(state.autoScrollInterval);
			state.autoScrollInterval = null;
		}

		/* === opnieuw starten van scrollen na interactie (restartAutoScroll) =============================================	*/
		/*																													*/
		/*	Versie 2B: scrollen opnieuw starten na hover of touch interactie												*/
		/*																													*/
		/*	• Doel: start de scroll opnieuw na interactie																	*/
		/*	• Locatie: buiten DOMContentLoaded																				*/			
		/*	• Aangeroepen door: setupSwipe(..) en addInteractionListeners(...)												*/
		/*	• Parameters: slider, config, state																				*/
		/*																													*/
		
		function restartAutoScroll(slider, config, state) {
			clearTimeout(state.restartTimeout);
			state.restartTimeout = setTimeout(() => {
				startAutoScroll(slider, config, state);
			}, config.autoScrollDelay);
		}

		/* === SCROLL-MODULES ===================================================================================(end)=====	*/


		/* === INTERACTIEGEDRAG (addInteractionListeners) =======================================================(begin)===	*/
		/*																													*/
		/* Versie 5 (30-10-2025) Event delegation																			*/
		/*																													*/
		/* - hangt één set listeners aan de container (#feedSlider) in plaats van aan elk .feed-link.						*/
		/* - voordelen: werkt voor alle huidige en toekomstige (gekloonde) items, geen dubbele bindings, efficiënter.		*/
		/*																													*/

		/*																													*/
		/* Versie 4.1 (28-10-2025)																							*/
		/*																													*/
		
		/*	GEDRAG ELEMENTEN																								*/
		/*	• mouseenter / touchstart: scroll pauzeert																		*/
		/*	• mouseleave / touchend: scroll herstart																		*/
		/*																													*/

		/*	• Doel: voegt mouseenter/mouseleave listeners toe																*/
		/*	• Locatie: buiten DOMContentLoaded																				*/
		/*	• Aangeroepen door: startAutoScroll(...)																		*/
		/*	• Parameters: slider, config, state																				*/
			
		// 🖱️Versie 2E: hover/touch pauze Interactiegedrag toevoegen

		function addInteractionListeners(slider, config, state) {
		
			// Event delegation: één set listeners op de container #feedSlider
			// werkt voor alle .feed-link items, inclusief clones, voorkomt dubbele bindings

			// Hover / mouseenter
			slider.addEventListener('mouseenter', (e) => {
				if (e.target.closest('.feed-link')) {
					stopAutoScroll(slider, state);
				}
			}, true); // capture zodat hover op kinderen werkt

			// Mouseleave
			slider.addEventListener('mouseleave', (e) => {
				if (e.target.closest('.feed-link')) {
					restartAutoScroll(slider, config, state);
				}
			}, true);

			// Touch start
			slider.addEventListener('touchstart', (e) => {
				if (e.target.closest('.feed-link')) {
					stopAutoScroll(slider, state);
				}
			}, { passive: true });

			// Touch end
			slider.addEventListener('touchend', (e) => {
				if (e.target.closest('.feed-link')) {
					restartAutoScroll(slider, config, state);
				}
			}, { passive: true });
		}
		

		/* === INTERACTIEGEDRAG =================================================================================(end)=====	*/
