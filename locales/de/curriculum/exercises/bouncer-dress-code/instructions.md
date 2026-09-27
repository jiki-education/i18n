---
title: "Türsteher: Dresscode"
description: "Kombiniere das Outfit, das Alter und den Gästelisten-Status der Person, um zu entscheiden, wer hineinkommt."
en_md5: 3e9f98d0b80d6bf0865cd0439005807b
---

Du bist wieder in deinem Nebenjob als Türsteher, und heute Abend arbeitest du in einer Location mit strengem Dresscode.

Deine Aufgabe ist es, zu prüfen, was die Person trägt, dazu ihr Alter anzusehen und dann zu entscheiden, was zu tun ist. Diesmal musst du dich an ein paar „interessantere“ Regeln halten.

### Die Regeln

- **Jede Person** in **formeller** oder **schicker** Kleidung wird hineingelassen (egal, ob sie auf der Gästeliste steht) und bekommt Canapés angeboten.
- **Erwachsene** (ab 18) in **formeller** Kleidung bekommen **zusätzlich** Champagner angeboten.
- **Kinder** (unter 18) in anderer Kleidung dürfen **nur dann** hinein, **wenn** sie auf der Gästeliste stehen.
- Alle anderen werden abgewiesen.

Die Kategorien des Dresscodes:

- **Formell** heißt `"ballgown"` oder `"tuxedo"`
- **Schick** heißt `"suit"` oder `"dress"`

### Deine Fähigkeiten

Du hast drei Funktionen, um Daten zu bekommen:

- `getOutfit()` (Outfit abfragen) gibt den Namen des Outfits zurück, das die Person trägt (z. B. `"ballgown"`, `"suit"`, `"denim"`)
- `getAge()` (Alter abfragen) gibt ihr Alter zurück.
- `onGuestList()` (auf der Gästeliste nachsehen) gibt zurück, ob die Person auf der Gästeliste steht.

Du darfst jede der Funktionen zum „Daten holen“ in deiner Lösung nur einmal verwenden (sonst werden die Leute genervt, wenn du sie immer wieder nach ihrem Namen fragst und so weiter!).

Dann hast du noch ein paar Aktionen, die du ausführen kannst:

- `offerChampagne()` (Champagner anbieten) bietet der Person ein Glas Champagner an
- `offerCanapes()` (Canapés anbieten) bietet der Person Canapés (Lachs-Tatar) an
- `letIn()` (hineinlassen) lässt die Person in die Location hinein
- `turnAway()` (abweisen) weist die Person ab

### Effizient programmieren

Es gibt viele mögliche Wege, das zu lösen. Dein Ziel ist es, all diese Regeln so zusammenzusetzen, dass der Code **klar lesbar** ist. Vermeide Doppelungen, wo es geht.

Viel Spaß und viel Glück!
