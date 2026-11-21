---
title: "Digitalklocka"
description: "Visa rätt tid på en digitalklocka med 12-timmarsformat."
en_md5: e3decc089d371b7113f2657f7571c001
---

I den här övningen ska du använda två nya funktioner för att hämta tiden:

- `currentTimeHour()` (aktuell timme): Returnerar den aktuella timmen i 24-timmarsformat (till exempel skulle 15 minuter före midnatt returnera `23`) som ett tal.
- `currentTimeMinute()` (aktuell minut): Returnerar den aktuella minuten som ett tal.

Din uppgift är att uppdatera en digitalklocka utifrån vilka tal de där funktionerna returnerar.

Digitalklockan förväntar sig att talen är i 12-timmarsformat med `am` eller `pm` (det som kallas ”meridiem”).

Till exempel:

- `7:45` -> `7:45am`
- `19:45` -> `7:45pm`

För att visa tiden på klockan använder du funktionen `displayTime(hour, minutes, meridiem)` (visa tid).

I varje scenario ändras den aktuella tiden. Din uppgift är att skriva kod som får alla scenarier att fungera. I det sista scenariot använder vi den verkliga tiden, så scenariot ändras varje gång den riktiga tiden går framåt en minut!
