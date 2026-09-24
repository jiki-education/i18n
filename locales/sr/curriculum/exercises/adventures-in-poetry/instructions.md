---
title: "Avanture u poeziji"
description: "Prošetaj putem, skupljaj reči pesme i ignoriši sve što nije reč."
en_md5: 90609a1f81b1b70871df0d2ed130e9e2
---

Praviš igru poezije sa robotom koja se zove „Avanture u poeziji“. Kao prvi korak, treba da programiraš robota tako da dok hoda skuplja reči, a na kraju izrecituje pesmu.

Svako polje sadrži jednu od četiri stvari:

1. Ništa (`""`)
2. **Reč** iz pesme.
3. Dekoracija poput lista ili leptira (emoji).
4. Kockasta zastavica (`🏁`) koja kaže robotu da stane.

Da bi ti pomogle, imaš nekoliko funkcija. Prvo, imaš funkciju `move()`, koja kaže robotu pesniku da se pomeri napred na sledeće polje i vraća ono što je na njemu bilo. Imaš funkciju `isEmoji(thing)`, koja vraća logičku vrednost koja ti kaže da li je string koji joj proslediš emoji. I na kraju, imaš funkciju `recite(poem)`, koju treba da iskoristiš sa gotovom pesmom.

Tvoj zadatak je da prođeš putem, sastaviš pesmu i na kraju je izrecituješ.

## Pravila

- **Reči** idu u pesmu, sa **razmakom između svake**.
- **Dekoracija** nije deo pesme i treba da je ignorišeš.
- **Apostrof** stoji na svom polju i spaja reči sa obe strane. `heart`, zatim `'`, zatim `s` postaje `heart's`.
- **Zarez** takođe stoji na svom polju. Lepi se za reč ispred sebe, ali posle njega i dalje ide razmak.
- Pesnik prestaje da hoda kada stigne do **kockaste zastavice**, ili čim sakupi **sedam reči**. Šta god da se desi prvo.
- Kad god pesnik stane, i kako god da je stao, izrecituje ono što je sakupio. Funkciju `recite()` smeš da pozoveš samo **jednom**.

## Ograničenja

Postoji mnogo načina da se reši ova vežba, ali želimo da iskoristiš ključne reči `continue` i `break` iz nedavne lekcije, pa zato važi nekoliko pravila:

1. Tvoje rešenje mora da koristi i `continue` i `break`.
2. U rešenju ne smeš da koristiš `&&` ni `!`.
3. Ne smeš da pišeš nikakve pomoćne funkcije.
4. Dozvoljena su ti samo dva nivoa uvlačenja:

```javascript

// Dozvoljeno: 2 nivoa uvlačenja
repeat() {
  if(...) {
    //...
  }
}

// Nije dozvoljeno: 3 nivoa uvlačenja
repeat() {
  if(...) {
    if(...) {
    }
  }
}
```

To znači da će rešenje koje smisliš biti prilično „ravno“.

Srećno i lepo se zabavi!
