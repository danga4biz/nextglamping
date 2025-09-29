/*** BEGIN *** SCRIPT Dynamically Add URL for SOCIAL MEDIA BUTTONS **************************************************/
/*																													*/
/* 03-9-2025 Nieuwe versie voor sharing van bijdrages via social media												*/
/*																													*/
/* 		Dynamisch toevoegen van de URL voor de pagina aan de media buttons											*/
/*																													*/
/*		1. DOMContentLoaded zodat het pas draait als de DOM klaar is												*/
/*																													*/
/*		DOMContentLoaded zorgt ervoor dat je script pas wordt uitgevoerd zodra de hele HTML-structuur geladen 		*/
/*	 	is, inclusief jouw div id="stickyShareBarBottom".     														*/
/*																													*/
/*		2. Fallback voor ontbrekende data-base																		*/
/*																													*/
/*		Voegt een check toe zodat je script niet crasht als een link per ongeluk geen data-base heeft.				*/
/*																													*/
/*		3. UTM-tags voor tracking (optioneel)																		*/
/*																													*/
/*		UTM-tags zijn stukjes tekst die je aan een URL toevoegt om te meten waar je bezoekers vandaan komen.		*/
/*																													*/
/*	18-08-2025 script voor het automatisch vullen van de social media buttons met de juiste URL						*/
/*																													*/
/*		share-link: gebruikt voor het vinden van de class met de social media button								*/
/*		const base: krijgt de URL toegewezen die in data-base staat													*/
/*		link.href: wordt samengesteld uit base + de URL van de post													*/
/*																													*/
/*** END *** SCRIPT Dynamically Add URL for SOCIAL MEDIA BUTTONS ****************************************************/
  
	document.addEventListener("DOMContentLoaded", function () 
	{
		const currentURL = window.location.href;
		const utm = "?utm_source=social&utm_medium=sharebar&utm_campaign=post";
		const fullURL = currentURL + utm;

		document.querySelectorAll('.share-link').forEach(link => 
		{
			const base = link.getAttribute('data-base');
			if (!base) return; // fallback: sla over als geen data-base

			link.href = base + encodeURIComponent(fullURL);
		});
	});

/*** END *** SCRIPT Dynamically Add URL for SOCIAL MEDIA BUTTONS ****************************************************/
