---
title: "Varför är den här funktionen inte implementerad?"
excerpt: "Lär dig varför vissa språkfunktioner inte finns i Jiki och hur det hjälper dig att lära dig mer effektivt."
tags: ["exercises"]
seo:
  description: "Förstå varför Jiki utesluter vissa funktioner i JavaScript och Python för att hjälpa nybörjare att lära sig"
  keywords: ["jiki", "javascript", "python", "uteslutna funktioner", "foot-guns", "lärande"]
en_md5: 54efd50d3331fa1e315aed1728a6f859
---

Försökte du köra din kod och fick ett meddelande om att något inte är tillgängligt i den här versionen av språket? Läs vidare så förklarar vi!

Om du fick ett meddelande om "Denna funktion är inte tillgänglig för dig än" är det en annan situation – läs **[När låses den här funktionen upp?](/articles/when-will-this-feature-unlock)** istället.

## Introduktion

Du har använt ett nyckelord eller ett begrepp som vår version av språket inte stöder. Oroa dig inte – det är inte en bugg!

De versioner av JavaScript och Python som du använder i Jiki har **speciellt utformats av oss** för att hjälpa dig att lära dig. Vi har medvetet tagit bort vissa funktioner för att hindra dig från att råka springa in i komplexa eller förvirrande delar av språket innan du är redo för dem.

## Varför utesluts vissa funktioner?

Programmeringsspråk är utformade för **professionella**. De innehåller avancerade funktioner som hjälper erfarna utvecklare att arbeta snabbare, plus historisk börda – funktioner som antagligen borde ha tagits bort för flera år sedan men som hänger kvar för att gamla system ska fortsätta fungera.

När du lär dig skapar dessa funktioner förvirring. Genom att ta bort dem låter Jiki dig fokusera på det som är viktigt: **att lära dig att tänka som en programmerare**.

### Foot-guns

Vi kallar vissa funktioner för **"foot-guns"** – saker som du av misstag kan skjuta dig själv i foten med. Det är:

- **Verkligt problematiska** och bäst att undvika även för professionella
- **Förvirrande specialfall** som distraherar från de grundläggande begreppen
- **Historisk börda** som bara finns kvar av bakåtkompatibilitetsskäl

Dessa är permanent uteslutna från Jiki eftersom de helt enkelt inte är värda den förvirring de orsakar.

### Avancerade funktioner

Andra funktioner utesluts eftersom de är **för avancerade** för var du befinner dig i din inlärningsresa. Det är inte dåliga funktioner – de är bara inte användbara när du håller på att lära dig grunderna.

Ju längre du kommer i Jiki kommer en del av dessa funktioner att låsas upp. Men just nu ska du fokusera på att bemästra grunderna.

## Detaljerna

Du behöver inte läsa detta såvida du inte är aktivt intresserad av vad som händer under huven och de beslut vi har fattat.

### JavaScript

| Funktion                                                     | Varför den är utesluten                                                                                                 |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `var`                                                        | Använd `let` eller `const` istället. `var` har förvirrande räckviddsregler som orsakar buggar även för erfarna utvecklare. |
| `with`                                                       | Utfasat och förvirrande. Skapar tvetydig kod som är svår att resonera kring.                                            |
| `debugger`                                                   | Utvecklingsverktyg, behövs inte för inlärning.                                                                          |
| `void`                                                       | Sällan användbart och förvirrande för nybörjare.                                                                        |
| `yield`                                                      | Avancerad generatorfunktion. Du kommer att lära dig om generatorer senare i din resa.                                   |
| `delete`                                                     | Kan orsaka förvirrande beteende med arrayer och objekt.                                                                 |
| `import` / `export`                                          | Modulsystemfunktioner. Jiki hanterar moduler annorlunda för att hålla saker enkla.                                      |
| Bitvisa operatorer (`&`, `\|`, `^`, `~`, `<<`, `>>`, `>>>`) | Mycket sällan nödvändiga och förvirrande när du lär dig. De används för lågnivåmanipulation av bitar.                  |

### Python

| Funktion   | Varför den är utesluten                                                                                                     |
| ---------- | --------------------------------------------------------------------------------------------------------------------------- |
| `global`   | Att modifiera globala variabler inifrån funktioner leder till förvirrande kod. Lär dig att skicka värden som parametrar istället. |
| `nonlocal` | Avancerad räckviddsfunktion för nästlade funktioner. Behövs inte när du lär dig grunderna.                                  |
| `assert`   | Felsökningsverktyg som kan inaktiveras i produktion. Lär dig korrekt felhantering istället.                                 |

## Vad gör jag om jag behöver en funktion?

Varje övning i Jiki har utformats för att lösas med de funktioner du har lärt dig fram till dess. Om du stöter på en begränsning finns det oftast ett bättre sätt att lösa problemet med de funktioner som är tillgängliga. Det är en del av lärandet – att lista ut hur du arbetar inom ramarna.

Om du på allvar tycker att en funktion borde vara tillgänglig på din nivå, hör av dig! Vi finslipar alltid vad som ingår baserat på feedback.
