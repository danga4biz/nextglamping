

<!--																												-->
<!-- defer zorgt ervoor dat het script pas wordt uitgevoerd nadat de volledige DOM is geladen						-->
<!--	als volgt 																									-->
<!--	<script src="https://danga4biz.github.io/nextglamping/layers/menu-layer/menu.js" defer></script>			-->
<!--																												-->

	
	<!-- ****** SCRIPT om nav-openZ in de body te zetten ************************************************************** -->

	<!-- 17-09-2025 VERWIJDERT STAAT IN SCRIPT voor drop-down MENU myHamburgFunction3()									-->
	<!-- 16-09-025 																										-->
	
	<!--	Er zijn twee scripts die hetzelfde element aanspreken, maar met verschillende intenties.					-->
	<!--		document.body.classList.toggle('nav-openZ')																-->
	<!--																												-->
	<!--	1. 	Bindt een klik op #menu-toggle-3 met .addEventListener('click', function()								-->
	<!--		Zet alleen nav-openZ op body																			-->
	<!--																												-->
	<!--	2. 	Bindt een klik op dezelfde knop (id='menu-toggle-3) 													-->
	<!--		Zet nav-openZ op body, én .open op #myHamburg-3															-->
	<!-- 																												-->
	<!-- 	Je hebt twee event listeners op dezelfde knop:																-->
	<!-- 		Eén die alleen nav-openZ togglet																		-->
	<!-- 		Eén die nav-openZ, .open, en aria-expanded togglet														-->
	<!-- 		Beide worden uitgevoerd bij klikken, tenzij ze elkaar overschrijven of conflicteren.					-->
	<!--																												-->

	<!-- 	1. Verwijder script (optie 1 hieronder) dat aleen nav-openZ op de body zet via klik op de hamburger knop	-->
	<!-- 	(id='menu-toggle-3') via document.getElementById('menu-toggle-3').addEventListener('click', function(), 	-->
	<!--	want de regel document.body.classList.toggle('nav-openZ') zit ook al in de functie myHamburgFunction3 (). 	-->
	<!--																												-->
	<!--	Door deze dubbele toggle op nav-openZ krijg je toggles die elkaar acties ongedaan maken of elkaars gedrag	-->
	<!--	verstoren.																									-->
	<!--		>>>> SCRIPT om nav-openZ in de body te zetten VERWIJDERT <<<<											-->
	
	<!--	2. Zorg dat myHamburgFunction3() wordt geactiveerd wanneer op de hamburger knop wordt geklikt				-->
	<!--																												-->
	<!-- 	Voeg een script toe waarin myHamburgFunction3() wordt gebonden aan een click event op de hamburger knop		-->
	<!--	(id='menu-toggle-3') zodat de functie wordt aangeroepen als op de knop wordt geklikt.						-->
	<!--																												-->
	<!--	In de oude situatie werd de functie myHamburgFunction3() die de open-klasse op #myHamburg-3 zet niet 		-->
	<!-- 	aangeroepen wanneer een gebruiker op de hamburger knop klikt ((id='menu-toggle-3') waardoor de hamburger	-->
	<!--	knop niet veranderde van horizontale bars naar kruis.														-->
	<!--																												-->
	<!--		>>>> ZIE SCRIPT om de myHamburgFunction3() te activeren <<<<											-->
	<!-- *** END *** SCRIPT om nav-openZ in de body te zetten ********************************************************* -->
	
	
	<!-- 16-09-2025																										-->

	<!-- *** BEGIN *** SCRIPT om de myHamburgFunction3() te activeren ************************************************* -->

	<!-- Voeg script toe dat de myHamburgFunction3() activeert die de open-klasse op #myHamburg-3 zet 					-->
	<!-- Voeg myHamburgFunction3() toe aan het click event in een script												-->
	<!--																												-->
	<!--	'window.addEventListener("DOMContentLoaded", ...)' zorgt dat de code pas wordt uitgevoerd als de hele 		-->
	<!-- 	pagina is geladen 																							-->
	<!-- 																												-->
	<!--	'const toggleBtn = document.getElementById('menu-toggle-3')' zoekt naar een HTML-element met ID				-->
	<!--	menu-toggle-3 en slaat dit op in de variabele toggleBtn.													-->
	<!--																												-->
	<!--	'toggleBtn.addEventListener('click', myHamburgFunction3)' voegt een klik-eventlistener toe aan dat element. -->
	<!-- 	Als je erop klikt, wordt de functie myHamburgFunction3 uitgevoerd.											-->
	<!-- 																												-->
	<!-- REMARKT: Zodra de pagina geladen is, zorgt dit script ervoor dat als je op het element met ID menu-toggle-3 	-->
	<!-- 	klikt, de functie myHamburgFunction3 wordt aangeroepen.														-->
	<!--																												-->
	function initHamburgerToggle() {
		const toggleBtn = document.getElementById('menu-toggle-3');
		if (toggleBtn) {		
			toggleBtn.addEventListener('click', myHamburgFunction3);
		}
	}
	<!-- *** END *** SCRIPT om de myHamburgFunction3() te activeren *************************************************** -->



	<!-- *** BEGIN *** SCRIPT voor drop-down MENU myHamburgFunction3() ************************************************ -->
	<!--		met menu-toggle-3, myHamburg-3, nav-openZ *************************************************************	-->
	
	<!-- ✔️ Togglet nav-openZ 																							-->
	<!-- ✔️ Togglet .open op menu 																						-->
	<!-- ✔️ Past aria-expanded aan 																						-->
	<!-- ❌ Wordt alleen uitgevoerd als je hem expliciet aanroept (bijv. via onclick="myHamburgFunction3()")				-->
	<!-- 16-09-2025																										-->
	<!-- 		of via SCRIPT om de myHamburgFunction3() te activeren													-->

	<!-- x.style.display-logica is niet meer nodig vervangen door semantisch en modulair gedrag							-->
	<!--	via CSS en class switches.																					-->
	
	<!-- Wat doet het?																									-->
	<!-- 	Zet .nav-openZ op <body> (hamburgeranimatie)																-->
	<!-- 	Zet .open op #myHamburg-3 (menu openen/sluiten)																-->
	<!-- 	CSS maakt de hamburgerknop zichtbaar																		-->
	<!-- 	Past aria-expanded aan op de knop = aria-expanded wordt op true gezet voor screenreaders					-->

	<!-- 	'const nav = document.getElementById('myHamburg-3')'haalt het element met ID 'myHamburg-3', het 			-->
	<!--	navigatiemenu, op.																							-->
	<!--																												-->
	<!--	'const toggleBtn = document.getElementById('menu-toggle-3') 'haalt de knop op waarmee je het menu 			-->
	<!-- 	opent/sluit.																								-->
	<!--																												-->
	<!--	'const isOpen = nav.classList.toggle('open')' wisselt de CSS-klasse 'open' aan/uit op het menu-element;		-->
	<!--	als het er was, wordt het verwijderd, anders toegevoegd. 'isOpen' is true als 'open' nu actief is.			-->
	<!--																												-->
	<!--	'document.body.classList.toggle('nav-openZ')' Wisselt ook de class nav-openZ op de body						-->
	<!--																												-->
	<!--	'toggleBtn.classList.toggle('open')' wisselt de klasse 'open' op de knop zelf , hamburger wordt kruis.		-->
	<!--																												-->
	<!--	'toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false')' zet toegankelijkheidsattribuut (ARIA) 	-->
	<!--	op de knop zodat schermlezers weten of menu open is.														-->
	<!--																												-->

	<!--																												-->
	<!-- REMARK: Open en sluiten Drop Down menu alsook veranderen van de hamburger knop naar kruis en verticale bars	-->
	<!--																												-->

	<!-- *** BEGIN *** SCRIPT voor drop-down MENU myHamburgFunction3() ************************************************ -->
	<!--		met menu-toggle-3, myHamburg-3, nav-openZ *************************************************************	-->
	function myHamburgFunction3() {
		const nav = document.getElementById('myHamburg-3');
		const toggleBtn = document.getElementById('menu-toggle-3');
		const isOpen = nav.classList.toggle('open');

		document.body.classList.toggle('nav-openZ');
		toggleBtn.classList.toggle('open');  // 👈 voeg dit toe nodig voor visuele transformatie
		toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
	}
	<!-- *** END *** SCRIPT voor drop-down MENU myHamburgFunction3() ************************************************** -->
	<!--		met menu-toggle-3, myHamburg-3, nav-openZ *************************************************************	-->


		
	<!-- *** BEGIN *** SCRIPT voor openen van submenus **************************************************************** -->
	
	<!-- 18-09-2025 geen JS nodig om submenu's te openen en te sluiten via hover op desktop								-->
	<!--	wordt geregeld via .d-flyout > ul > li:hover > ul {display: block;}											-->
	<!--	er hoeft geen .open class meer te worden toegevoegd via een script											-->
	<!--																												-->
	<!--	LET OP desktop is opschonen dan nog nodig met extra script													-->
	
	
	<!-- SAMENVATTTING:																									-->
	<!--																												-->
	<!-- Gedrag				Desktop (>800px)					Mobiel (≤800px)											-->
	<!--																												-->
	<!-- Submenu openen		Via :hover (CSS)					Via klik op <a> in li.has-submenu (JavaScript)			-->
	<!-- Submenu sluiten	Automatisch bij mouseout (CSS)		Bij klik op ander submenu, buiten menu, of Escape		-->
	<!-- .open class		Niet gebruikt						Wordt gezet op <nav> en <li.has-submenu>				-->
	<!-- Event listeners	Niet actief (JS checkt viewport)	Actief: klik, buitenklik & Escape						-->

	<!-- Hamburger openen	Niet zichtbaar	 			Klik op #menu-toggle-3 => opent nav#myHamburg-3 (class .open)	-->
	<!-- Hamburger sluiten	Niet zichtbaar				Bij klik buiten menu of Escape => sluit nav + reset knop		-->
	<!-- Hamburger toggle	Niet zichtbaar				class .open wordt op knop gezet voor visuele transformatie		-->


	
	<!--	const link = el.querySelector("a") 																			-->
	<!--		- zoekt binnen elke li.has-submenu het eerste a-element													-->
	<!--		- zet daar een klik-event op a-element																	-->
	<!--		- bij een klik: toggle .open op het <li>-element (de parent)											-->
	
	<!--	event.preventDefault(); voorkomt dat de link gevolgd wordt													-->
	<!--																												-->
	<!-- 	CSS laat het submenu (de <ul>) zien als de .open-class aanwezig is via:										-->
	<!-- 		.m-flyout > ul > li.open > ul {display: flex; flex-direction: column;}									-->

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
	<!-- *** END *** SCRIPT voor openen van submenus ******************************************************************	-->

	<!-- *** BEGIN *** SCRIPT om aria-expanded op desktop op true en false te zetten **********************************	-->
	
	<!-- 18-09-2025								 																		-->
	<!--																												-->
	<!--	LET OP desktop aria-expanded wordt niet meer gezet omdat we dit nu zuiver met CSS doen via hover			-->
	<!--	Dit script zorgt dat het alsnog gebeurt.																	-->
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
	<!-- *** END *** SCRIPT om aria-expanded op desktop op true en false te zetten ************************************	-->

	<!-- *** BEGIN *** SCRIPT voor verbeterde mobiele toegankelijkheid ************************************************ -->
	
	<!--																												-->
	<!-- 17-09-2025																										-->
	<!--	Code aangepast / vereenvoudigt																				-->
	<!--	Gezorgd dat de klasse open die op de toggle-button wordt gezet om deze te openen (open-toestand) weer wordt	-->
	<!--	verwijderd wanneer de gebruiker klikt buiten het menu of escape.											-->
	<!--																												-->

	<!--																												-->
	<!-- 14-09-2025																										-->
	<!-- 	📱 Dit zorgt ervoor dat gebruikers het mobiele menu kunnen sluiten door:										-->
	<!-- 		op ESC te drukken																						-->
	<!--		buiten het menu te tikken																				-->
	
	<!-- REMARK: Verbeter mobiele menu toegankelijkheid met ESC en buiten-klik sluiten									-->
	
	<!-- Wat doet het?																									-->
	<!-- 	Sluit menu bij klik buiten of op Escape																		-->
	<!-- 	Verwijdert .open van #myHamburg-3																			-->
	<!-- 	Verwijdert .nav-openZ van <body>																			-->
	
	<!-- *** BEGIN *** SCRIPT voor verbeterde mobiele toegankelijkheid ************************************************ -->
	function initMenuCloseHandlers() {	
	
		<!-- klik buiten menu -->	
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
	
		<!-- escape -->
		document.addEventListener('keydown', function (event) {
			if (event.key === 'Escape') {
				const menu = document.getElementById('myHamburg-3');
				const toggleBtn = document.getElementById('menu-toggle-3');
			
				if (!menu || !toggleBtn) return;

				menu.classList.remove('open');
				document.body.classList.remove('nav-openZ');
				toggleBtn.classList.remove('open');
				toggleBtn.setAttribute('aria-expanded', 'false');
			}
		});			
	}
	<!-- *** END *** SCRIPT voor verbeterde mobiele toegankelijkheid ************************************************** -->

	// Init alles na DOM load
	document.addEventListener("DOMContentLoaded", () => {
		initHamburgerToggle();
		initMobileMenuDropdowns();
		initDesktopAriaExpanded();
		initMenuCloseHandlers();
	});		
