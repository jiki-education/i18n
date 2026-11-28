---
title: "Petlja `repeat`"
description: "Kako ključnom riječi `repeat` reći Jikiju da izvrši kôd unutar vitičastih zagrada određeni broj puta."
en_md5: f37a63911f75934656cbf04a38ff2b60
---

Do sada je sve bilo napisano linearno: Jiki slijedi svaku uputu po redu, od vrha prema dnu.

Sada ćemo pogledati kako Jiki može prekinuti taj strogi slijed odozgo prema dolje. Posebno ćemo vidjeti kako mu reći da isti dio kôda izvrši mnogo puta uzastopce.

Zamisli, na primjer, da si u labirintu i želiš se pomaknuti 10 koraka naprijed. Postoji funkcija `walk` koja ti pomaže u tome, ali što ako ona ne postoji? Što ako imaš samo funkciju `move` (pomakni se)?

Umjesto da 10 puta uzastopce napišemo `move`, što je krajnje zamorno, trebamo moći reći: „Hej, Jiki, ponovi 10 puta ono što ću sad reći.

`Move`."

Da bismo to napravili u kôdu, trebamo upotrijebiti prvu ključnu riječ (_keyword_ na engleskom). Ključne riječi su upute koje Jiki razumije. Izgledaju pomalo kao strojevi, ali nisu. Kad Jiki vidi ključnu riječ, ne traži stroj na polici, nego jednostavno zna što treba napraviti. To mu je ugrađeno u glavu. A tijekom tečaja naučit ćemo dvadesetak različitih ključnih riječi, i prva od njih je ključna riječ `repeat`.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/jiki-keywords-2.webp"
  alt="Jiki okružen ključnim riječima poput repeat, if, else, and, or, uz napomenu da su ključne riječi upute koje Jiki razumije"
  width="358"
  height="400"
/>

Ključna riječ `repeat` radi upravo ono što smo gore opisali. Kaže Jikiju: „Ponovi ovoliko puta sve što sad slijedi." Pogledaj ovaj kôd. Najprije ključnom riječi `repeat` kažemo Jikiju da će nešto raditi više puta. Zatim u oblim zagradama napišemo koliko puta želimo da Jiki to ponovi, a onda dolaze vitičaste zagrade, i sve što je unutar njih Jiki ponavlja. Taj je obrazac u programiranju nevjerojatno čest. Navedemo ključnu riječ, obično s nekom informacijom, kao što je ovdje broj ponavljanja, a zatim blok naredbi (_code block_ na engleskom) u vitičastim zagradama. Vratimo se u svijet labirinta: umjesto da napišemo `move`, `move`, `move`, `move`, možemo napisati da se `move` ponovi četiri puta.

```javascript
repeat(4) {
  move()
}
```

Jiki će vidjeti taj kôd i četiri puta uzastopce upotrijebiti stroj `move`.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/jiki-running-loop.webp"
  alt="Jiki četiri puta uzastopce koristi stroj move, jedno nakon drugoga"
  width="421"
  height="400"
/>

I nismo ograničeni na samo jednu stvar u vitičastim zagradama. Jiki može ponavljati više različitih stvari. Možemo Jikiju reći da napravi `move`, zatim `turnLeft`, i da cijeli taj slijed ponovi četiri puta. Kad Jiki to vidi, upotrijebit će stroj `move`, pa stroj `turnLeft`, pa opet stroj `move`, pa stroj `turnLeft`, pa stroj `move` i tako dalje, sve dok oboje ne napravi četiri puta.

```javascript
repeat(4) {
  move()
  turnLeft()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/if-else-code.webp"
  alt="Jiki koristi stroj move, a zatim stroj turnLeft, i ponavlja taj par radnji četiri puta"
  width="500"
  height="390"
/>

Takve upute za ponavljanje zovemo petlje (_loops_ na engleskom), a postoji mnogo različitih petlji i svaka radi malo drugačije.

Ostaje još jedna stvar: kad radiš s petljama, uredan kôd postaje prijeko potreban. Kad kôd ima dobru vizualnu strukturu, lako je vidjeti što se događa. Ali ako je neuredan, ako zaboraviš lijepo uvući retke ili pomiješaš uvlake, stvari se vrlo brzo zamrse. Zato u ovom tečaju uvijek vrijedi isto pravilo. Početnu vitičastu zagradu uvijek staviš u isti redak kao naredbu `repeat` (_statement_ na engleskom). Završnu vitičastu zagradu uvijek staviš u vlastiti redak, nakon naredbe, a kôd između njih uvijek uvučeš za dva razmaka. Tako sve ostaje zaista uredno, a ako zaboraviš ili pokušaš slijediti drugačiji obrazac, dobit ćeš pogrešku.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/multiple-things-in-loop.webp"
  alt="Jiki pokazuje na uvlaku i novi redak koji čuvaju urednost bloka naredbi u petlji"
  width="500"
  height="398"
/>
