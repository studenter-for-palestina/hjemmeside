# Oversikt
Denne nettsiden er skrevet med react, tailwindcss og nodejs. Den er skrevet slik at det skal være lett for en annnen by å erstatte enkelte variabler for å gjøre den sin egen. Før man gjør endringer anbefaler vi at man går raskt gjennom nettsiden for å gjøre seg kjent med siden.

# Bruk av programmet
Start med å laste ned [nodejs](https://nodejs.org/en), dette lar en bruke js på backenden.
Skriv følgende i terminalen for å kjøre nettsida lokalt. 

```bash
npm i (installere)                      /* Installere nødvendige pakker */
npm run dev                             /* Kjører websiden lokalt */
```

# Oppdatering av nettside
```bash
git add .
git commit -m "hva som var oppdatert og hvorfor"
git push
# i tillegg til at endringene må sendes til github må man også deploye
npm run deploy
```

