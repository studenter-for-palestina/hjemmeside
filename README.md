# Oversikt
Denne nettsiden er skrevet med react, tailwindcss og nodejs. Den er skrevet slik at det skal være lett for en annnen by å erstatte enkelte variabler for å gjøre den sin egen. Før man gjør endringer anbefaler vi at man går raskt gjennom nettsiden for å gjøre seg kjent med siden.

# Bruk av programmet
Start med å laste ned [nodejs](https://nodejs.org/en), dette lar en bruke js på backenden. 
Skriv følgende i terminalen for å kjøre nettsida lokalt. 

```js
npm i (installere)                      /* Installere nødvendige pakker */
npm run dev                             /* Kjører websiden lokalt */
```

Outputtet man får fra dette er en url som sender en til den lokale nettsida.

Nå kan man gjøre endringer og nettisden oppdaterer seg fortløpende. Hvis man bare skal lage en nettside ment for sin egen by anberfaler vi å kun gjøre erndringer i App.jsx der det er skrevet kommentarer. 

Når man man er fornøyd med endringene gjør man følgende i terminalen

```bash
git add .
git commit -m "passende kommentar om hva som er blitt endra"
git push
```

husk å sende endringene opp mot serveren. 

```js
npm run deploy                          /* Sender endringene til nettet */
```

Til slutt gå inn på [settings](https://github.com/studenter-for-palestina/hjemmeside/settings) for å endre dommenet navnet til 

```bash
studenterforpalestina.no
```