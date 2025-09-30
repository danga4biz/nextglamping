# Scrolling banner
## 🔍 Scrollafstand-normalisatie: Blogger vs. lokaal rendering

### Probleem
Op Blogger werd `.scrolling-content` breder geïnjecteerd (4647px) dan lokaal (1475px), waardoor de banner visueel sneller liep ondanks gelijke `animation-duration`.

### Oplossing
Scrollafstand is genormaliseerd via `translateX(100vw)` → `translateX(-100%)`, zodat de animatie consistent is per viewport.

### Verifieerbaarheid
- `animation-duration: 12s` zichtbaar in “Computed”
- `transform: translateX(...)` live zichtbaar tijdens animatie
- Breedte van `.scrolling-content` irrelevant voor scrollafstand
