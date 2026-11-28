---
title: "Operátor `&&` (and)"
description: "Spojení dvou podmínek pomocí `&&`: celá podmínka platí jen tehdy, když platí obě její části."
en_md5: cef8d76c4235e85573c3eeede294ab72
---

Kdyby ti někdo řekl, ať otevřeš dveře jen tehdy, když je dotyčnému víc než dvacet, nejspíš budeš vědět, co udělat. Ale co když potřebuješ zkontrolovat, jestli je dotyčnému víc než dvacet _a_ zároveň má na sobě správné oblečení? Najednou musíš ověřit dvě různé podmínky současně. Jak to uděláš?

Možná by šlo napsat vnořený příkaz `if` (anglicky _nested if statement_), podobně jako dřív u vnořených cyklů. Takže můžeš říct: když je `age` větší než `20`, vstoupíme do tohohle bloku kódu, pak další `if`, když se `outfit` rovná `"disco"`, a další složená závorka a nový blok kódu. Fungovalo by to, ale je to dost nepřehledné, hlavně když chceš mít podmínek hodně.

Naštěstí existuje snazší cesta: podmínky, které mají víc částí. Místo jedné věci jich v podmínce můžeme ověřovat dvě, tři nebo víc. A k tomu potřebujeme klíčové slovo `and`. Jenže ono to klíčové slovo `and` v JavaScriptu vlastně není slovo and, i když v některých jazycích ano. Místo toho musíš vedle sebe napsat dva ampersandy (`&`). Prostě si to budeš muset zapamatovat. Je to otravné, ale nedá se nic dělat a časem si zvykneš.

Takže to můžeme použít na složitější podmínku. Můžeme říct: když je `age` větší než `20` a `outfit` je `"disco"`, pokračujeme dál. Když je `age` menší než `20` nebo `outfit` není `"disco"`, je celý příkaz, celá podmínka nepravda. Jestli už máš nějaké základy logiky, třeba z elektroniky nebo z pokročilejší matematiky, bude ti to připadat úplně přirozené. A jestli ne, rychle to pochopíš.

```javascript
if (age > 20 && outfit === "disco") {
  openDoor()
}
```

U `and` i u `or` je jedna věc, na které se lidé zaseknou: každá strana `and`/`or` musí být úplné porovnání. Takže i když na obou stranách porovnáváš stejnou proměnnou, musíš ji zopakovat. Nemůžeš napsat `if age is greater than 13 and less than 20`. Musíš napsat `if age is greater than 13 and age is less than 20`. Obě strany musí být úplná porovnání.

```javascript
if (age > 13 && age < 20)
```
