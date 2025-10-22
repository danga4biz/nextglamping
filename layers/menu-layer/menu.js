

	/* **************************************************************************************************************** */
	/* Script wordt extern geladen via defer-attribuut voor correcte DOM-initialisatie									*/
	/* 	Voorbeeld: menu-layer/menu.js wordt pas uitgevoerd nadat de volledige DOM is geladen							*/
	/* 	Zie GitHub: https://danga4biz.github.io/nextglamping/layers/menu-layer/menu.js									*/
	/* **************************************************************************************************************** */

	
	/* ****************************************************************************************************************	*/
	/* - myHamburgFunction3() → togglet menu en knop 																	*/
	/* - initHamburgerToggle() → voegt click-event toe																	*/
	/* - initMobileMenuDropdowns() → submenu gedrag op mobiel															*/
	/* - initDesktopAriaExpanded() → accessibility op desktop 															*/
	/* - initMenuCloseHandlers() → sluit menu bij klik buiten of Escape 												*/
	/* ****************************************************************************************************************	*/
	
	/* ****************************************************************************************************************	*/
	/* *** BEGIN *** SCRIPT voor drop-down MENU myHamburgFunction3() **************************************************	*/
	/* 			met menu-toggle-3, myHamburg-3, nav-openZ *************************************************************	*/
	
	/* Laatste update: 22-09-2025																						*/
	/*		Commentaarstijl aangepast en commentaar binnen script geplaatst	in HTML-versie								*/
	/*																													*/
	/* Historie																											*/
	/* 	16-09-2025																										*/
	/*																													*/
	/*		Script definieert toggle-functie voor het hamburger menu en voor visuele transformatie hamburger knop		*/
	/*																													*/
	/* 		Wat doet het?																								*/
	/* 			Zet .nav-openZ op de <body> (hamburgeranimatie)															*/
	/* 			Zet .open op #myHamburg-3 (menu openen/sluiten)															*/
	/* 			CSS maakt de hamburgerknop zichtbaar																	*/
	/* 			Zet aria-expanded op true gezet voor screenreaders														*/
	/*																													*/
	/*	13-09-2025  																									*/
	/*																													*/
	/*		x.style.display-logica is niet meer nodig vervangen door semantisch en modulair gedrag						*/
	/*		via CSS en class switches.																					*/
	/*																													*/
	/* Toelichting:																										*/
	/* 		'const nav = document.getElementById('myHamburg-3')'haalt het element met ID 'myHamburg-3', het 			*/
	/*		navigatiemenu, op.																							*/
	/*																													*/
	/*		'const toggleBtn = document.getElementById('menu-toggle-3') 'haalt de knop op waarmee je het menu 			*/
	/* 		opent/sluit.																								*/
	/*																													*/
	/*		'const isOpen = nav.classList.toggle('open')' wisselt de CSS-klasse 'open' aan/uit op het menu-element;		*/
	/*		als het er was, wordt het verwijderd, anders toegevoegd. 'isOpen' is true als 'open' nu actief is.			*/
	/*																													*/
	/*		'document.body.classList.toggle('nav-openZ')' Wisselt ook de class nav-openZ op de body						*/
	/*																													*/
	/*		'toggleBtn.classList.toggle('open')' wisselt de klasse 'open' op de knop zelf , hamburger wordt kruis.		*/
	/*																													*/
	/*		'toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false')' zet toegankelijkheidsattribuut (ARIA) 	*/
	/*		op de knop zodat schermlezers weten of menu open is.														*/
	
	/* 																													*/
	/* DOEL: Functie myHamburgFunction3 opent en sluit Drop Down menu en transformeert de hamburger knop				*/
	/*																													*/
	
	function myHamburgFunction3() {
		const nav = document.getElementById('myHamburg-3');
		const toggleBtn = document.getElementById('menu-toggle-3');
		
		if (!nav || !toggleBtn) return;
		
		const isOpen = nav.classList.toggle('open');

		document.body.classList.toggle('nav-openZ');
		toggleBtn.classList.toggle('open');
		toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
	}
	
	/* *** END *** SCRIPT voor drop-down MENU myHamburgFunction3() ****************************************************	*/
	/*			met menu-toggle-3, myHamburg-3, nav-openZ *************************************************************	*/
	/* ****************************************************************************************************************	*/


	/* ****************************************************************************************************************	*/
	/* *** BEGIN *** SCRIPT om de myHamburgFunction3() te activeren *************************************************** */

	/* Laatste update: 22-09-2025																						*/
	/*		Functienaam initHamburgerToggle toegevoegd aan script														*/
	/*		DOMContentLoaded event toegevoegd via document.addEventListener (ipv window.addEventListener) 				*/
	/*		Controle toegevoegd om te checken of element #menu-toggle-3 bestaat alvorens event toe te voegen 			*/
	/*		Commentaarstijl aangepast en commentaar binnen script geplaatst	in HTML-versie								*/
	/*																													*/
	/* Historie																											*/
	/* 	16-09-2025																										*/
	/*																													*/
	/* 		Script activeert myHamburgFunction3() die de 'open' klasse toggle't op #myHamburg-3 						*/
	/*		Voeg click-eventlistener toe op element met id 'menu-toggle-3' 												*/
	/*																													*/
	/* Toelichting:																										*/
	/* 		'const toggleBtn = document.getElementById('menu-toggle-3')' zoekt naar een HTML-element met ID				*/
	/*		menu-toggle-3 en slaat dit op in de variabele toggleBtn.													*/
	/*																													*/
	/*		'toggleBtn.addEventListener('click', myHamburgFunction3)' voegt een click-eventlistener toe aan element en 	*/
	/* 		zorgt bij klik dat de functie myHamburgFunction3 wordt uitgevoerd.											*/
	/*																													*/
	/*		'document.addEventListener("DOMContentLoaded", ...)' zorgt dat de code pas loopt wanneer de DOM volledig 	*/
	/* 		geladen is																									*/
	/* 																													*/
	/* 																													*/
	/* DOEL: Script roept functie myHamburgFunction3 bij klik op het element met ID menu-toggle-3 						*/
	/*																													*/
	
	function initHamburgerToggle() {
		const toggleBtn = document.getElementById('menu-toggle-3');
		
		if (toggleBtn) {
			toggleBtn.addEventListener('click', myHamburgFunction3);
		}
	}		
	
	//document.addEventListener("DOMContentLoaded", initHamburgerToggle); staat centraal
	
	/* *** END *** SCRIPT om de myHamburgFunction3() te activeren ***************************************************** */
	/* ****************************************************************************************************************	*/


	/* ****************************************************************************************************************	*/
	/* *** BEGIN *** SCRIPT voor openen van submenus ******************************************************************	*/
	
	/* Laatste update: 22-09-2025																						*/
	/*		Commentaarstijl aangepast en commentaar binnen script geplaatst	in HTML-versie								*/
	
	/* Historie																											*/
	/* 	18-09-2025 																										*/
	/*																													*/
	/*		geen JS meer nodig om submenu's te openen en te sluiten voor hover op desktop								*/
	/*		wordt geregeld via .d-flyout > ul > li:hover > ul {display: block;}											*/
	/*		er hoeft geen .open class meer te worden toegevoegd via een script											*/
	/*																													*/
	/*		CSS laat het submenu (de <ul>) zien als de .open-class aanwezig is via:										*/
	/*			.m-flyout > ul > li.open > ul {display: flex; flex-direction: column;}									*/
	/*																													*/
	/* Toelichting:																										*/
	/*																													*/
	/* 	Gedrag				Desktop (>800px)					Mobiel (≤800px)											*/
	/*																													*/
	/* 	Submenu openen		Via :hover (CSS)					Via klik op <a> in li.has-submenu (JavaScript)			*/
	/* 	Submenu sluiten		Automatisch bij mouseout (CSS)		Bij klik op ander submenu, buiten menu, of Escape		*/
	/* 	.open class			Niet gebruikt						Wordt gezet op <nav> en <li.has-submenu>				*/
	/* 	Event listeners		Niet actief (JS checkt viewport)	Actief: klik, buitenklik & Escape						*/

	/* 	Hamburger openen	Niet zichtbaar	 			Klik op #menu-toggle-3 => opent nav#myHamburg-3 (class .open)	*/
	/* 	Hamburger sluiten	Niet zichtbaar				Bij klik buiten menu of Escape => sluit nav + reset knop		*/
	/* 	Hamburger toggle	Niet zichtbaar				class .open wordt op knop gezet voor visuele transformatie		*/
	/*																													*/

	/* 																													*/
	/* DOEL: SCRIPT voor openen van submenus 																			*/
	/*																													*/

	function initMobileMenuDropdowns() {
	
		const menuItems = document.querySelectorAll("li.has-submenu");

		menuItems.forEach((el) => {
		
			// zoekt binnen elke li.has-submenu naar het eerste a-element
			const link = el.querySelector("a");

			// zet een klik-event op het a-element
			link.addEventListener("click", function (event) {
				const isMobile = window.matchMedia("(max-width: 800px)").matches;
				if (!isMobile) return; // Alleen op mobiel actief

				event.preventDefault(); // Voorkom dat de link volgt

				const isOpen = el.classList.contains("open");

				// Sluit alle submenu's eerst
				menuItems.forEach((item) => {
					item.classList.remove("open");
					const itemLink = item.querySelector("a");
					if (itemLink) {
						itemLink.setAttribute("aria-expanded", "false");
					}
				});

				// Open het aangeklikte submenu als het nog niet open was
				if (!isOpen) {
					el.classList.add("open");
					link.setAttribute("aria-expanded", "true");
				}
			});
		});
		
		// sluit submenu's als viewport van mobiel naar desktop gaat **
		window.addEventListener("resize", () => {
			const isDesktop = window.matchMedia("(min-width: 801px)").matches;
			
			if (isDesktop) {
				menuItems.forEach((submenu) => {
					if (submenu.classList.contains("open")) {
						submenu.classList.remove("open");
						const link = submenu.querySelector("a");
						
						if (link) {
							link.setAttribute("aria-expanded", "false");
						}
					}
				});
			}
		});
		
	}

	//document.addEventListener("DOMContentLoaded", initMobileMenuDropdowns); staat centraal

	/* *** END *** SCRIPT voor openen van submenus ******************************************************************** */
	/* ****************************************************************************************************************	*/


	/* ****************************************************************************************************************	*/
	/* *** BEGIN *** SCRIPT om aria-expanded op desktop op true en false te zetten ************************************	*/
	
	/* Laatste update: 22-09-2025																						*/
	/*		Commentaarstijl aangepast en commentaar binnen script geplaatst	in HTML-versie								*/
	
	/* Historie																											*/
	/* 	18-09-2025																										*/
	/*																													*/
	/*		Script toegevoegd om aria-expanded in desktop mode goed te zetten.											*/
	/*																													*/
	/* Toelichting:																										*/
	/*																													*/
	/*		LET OP: desktop aria-expanded werd niet meer gezet omdat we het afhandelen via CSS voor destkop. 			*/
	/*		Dit script ervoor dat aria-expanded alsnog wordt gezet in desktop mode.										*/
	/*																													*/
	/* DOEL: Script zorgt dat aria-expanded in desktop mode goed gezet wordt bij open en sluiten 						*/
	/*																													*/

	function initDesktopAriaExpanded() {
		const menuItems = document.querySelectorAll("li.has-submenu");

		function isDesktop() {
			return window.matchMedia("(min-width: 801px)").matches;
		}

		menuItems.forEach((el) => {
			const link = el.querySelector("a");

			el.addEventListener("mouseenter", function handleMouseEnter() {
				if (isDesktop()) {
					link.setAttribute("aria-expanded", "true");
				}
			});

			el.addEventListener("mouseleave", function handleMouseLeave() {
				if (isDesktop()) {
					link.setAttribute("aria-expanded", "false");
				}
			});
		});
	}
	
	//document.addEventListener("DOMContentLoaded", initDesktopAriaExpanded); staat centraal
	
	/* *** END *** SCRIPT om aria-expanded op desktop op true en false te zetten **************************************	*/
	/* ****************************************************************************************************************	*/

	
	/* ****************************************************************************************************************	*/
	/* *** BEGIN *** SCRIPT voor verbeterde mobiele toegankelijkheid **************************************************	*/
	
	/* Laatste update: 22-09-2025																						*/
	/*		Commentaarstijl aangepast en commentaar binnen script geplaatst	in HTML-versie								*/
	
	/* Historie																											*/
	/*																													*/
	/*	17-09-2025																										*/
	/*		Code aangepast / vereenvoudigt																				*/
	/* 		Gezorgd dat de klasse open die op de toggle-button wordt gezet om deze te openen (open-toestand) weer wordt	*/
	/*		verwijderd wanneer de gebruiker klikt buiten het menu of escape.											*/
	/*																													*/
	/* 		Dit zorgt ervoor dat gebruikers het mobiele menu kunnen sluiten door:										*/
	/*			op ESC te drukken																						*/
	/*			buiten het menu te tikken																				*/
	/*																													*/
	/*																													*/
	/* Toelichting:																										*/
	/*																													*/
	/* 		Wat doet het?																								*/
	/* 		Sluit menu bij klik buiten of op Escape																		*/
	/*		Verwijdert .open van #myHamburg-3																			*/
	/* 		Verwijdert .nav-openZ van <body>																			*/
	/*																													*/
	/* DOEL: Script verbetert mobiele menu toegankelijkheid met ESC en buiten-klik sluiten								*/
	/*																													*/
	
	function initMenuCloseHandlers() {	

		/* klik buiten menu */
		document.addEventListener('click', function handleOutsideClick(event) {
			const menu = document.getElementById('myHamburg-3');
			const toggleBtn = document.getElementById('menu-toggle-3');

			const isClickInsideMenu = menu.contains(event.target);
			const isToggleButton = toggleBtn.contains(event.target);

			if (!isClickInsideMenu && !isToggleButton) {
			
				// Sluit het menu en alle open submenu's als buiten het menu wordt geklikt		
				menu.classList.remove('open');
				document.body.classList.remove('nav-openZ');
				toggleBtn.classList.remove('open');
				toggleBtn.setAttribute('aria-expanded', 'false');

				// Sluit ook de open submenu's
				document.querySelectorAll('.has-submenu').forEach(submenu => {
					submenu.classList.remove('open');
					const link = submenu.querySelector('a');
					if (link) {
						link.setAttribute('aria-expanded', 'false');
					}					
				});								
			}
		});
	
		/* escape */
		document.addEventListener('keydown', function (event) {
			if (event.key === 'Escape') {
				const menu = document.getElementById('myHamburg-3');
				const toggleBtn = document.getElementById('menu-toggle-3');
			
				if (!menu || !toggleBtn) return; //als element met id menu-toggle-3 niet bestaat stop uitvoering functie

				menu.classList.remove('open');
				document.body.classList.remove('nav-openZ');
				toggleBtn.classList.remove('open');
				toggleBtn.setAttribute('aria-expanded', 'false');
			}
		});			
	}	
	
	//document.addEventListener("DOMContentLoaded", initMenuCloseHandlers); staat centraal
	
	document.addEventListener("DOMContentLoaded", () => {
		initHamburgerToggle();
		initMobileMenuDropdowns();
		initDesktopAriaExpanded();
		initMenuCloseHandlers();
	});

	/* *** END *** SCRIPT voor verbeterde mobiele toegankelijkheid ****************************************************	*/	
