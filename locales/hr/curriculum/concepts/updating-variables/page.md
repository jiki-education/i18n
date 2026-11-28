---
title: "Ažuriranje varijabli"
description: "Mijenjanje onoga što je u varijabli tijekom rada programa, za praćenje pozicija, brojanja, rezultata i drugih vrijednosti koje se mijenjaju."
en_md5: f9b2fbb6bfd82a620b093e88951ff841
---

Do sada smo, kad smo stvarali varijable, stavljali vrijednosti u kutije i poslije ih vadili. To nam je bilo jako korisno jer je kôd jasniji i jer smo manje računali u glavi. Ali prava korist od varijabli je mogućnost da tijekom programa mijenjamo ono što je u kutiji, ono što je u varijabli. Pa iako možemo izvršiti isti dio kôda više puta, ono što radi može se promijeniti ovisno o tome što je u kutijama.

Recimo da želimo posaditi cvijet u vrtu. Imamo zgodnu funkciju `plant` (posadi) koja ima jedan ulaz: poziciju na koju želimo staviti cvijet. Pa ako želimo staviti cvijet 10 od ruba, napišemo to ovako:

```javascript
plant(10)
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/flowers-same-spot.webp"
  alt="Cvijet posađen u vrtu pokraj Jikijeve ploče"
  width="406"
  height="400"
/>

Što ako želimo posaditi osam cvjetova? Pa, mogli bismo napisati `plant(10)`, `plant(20)`, `plant(30)` itd., ali to je prilično naporno.

A već smo učili o nečemu što nam pomaže zamijeniti ovakav naporan kôd. Upotrijebi petlju! Upotrijebi blok `repeat`! Postavimo zato poziciju na 10, a zatim napravimo blok `repeat` u kojem osam puta pozivamo `plant`, odnosno koristimo funkciju `plant`.

```javascript
let position = 10
repeat(8) {
  plant(position)
}
```

Što misliš da će se dogoditi?

Pa, posadit će osam cvjetova, ali svaki put na isto mjesto, što baš i nije ono što želimo. Zastanimo na trenutak i razmislimo što Jiki ovdje radi. Izrađuje kutiju s naljepnicom position. U nju stavlja 10. Zatim osam puta pokrene stroj `plant`. Svaki put izvadi vrijednost iz kutije position. Ona je uvijek 10 i svaki put ubaci isti broj 10.

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-loop-walkthrough.webp"
  alt="Jiki uzima kutiju position s police i ubacuje njezinu vrijednost 10 u stroj plant"
  width="400"
  height="400"
/>

Dakle, trebamo način da se svaki put malo pomaknemo. Nakon što posadimo cvijet, želimo reći Jikiju da poziciju pomakne za 10 i tako bude spreman posaditi sljedeći cvijet.

Zaboravimo na trenutak kôd: kako to izgleda logički? Ako ti kažem: „Posadi prvi cvijet na 10, sljedeći na 20, pa sljedeći na 30", kako tvoj mozak zna da sljedeći treba posaditi na 40, a onaj nakon njega na 50?

Tvoj mozak prati trenutni broj, dodaje mu 10 i onda taj broj ažurira u tvojoj glavi.

I u kôdu možemo napraviti potpuno istu stvar. Da to napravimo, kažemo: „Ažuriraj (_update_ na engleskom) kutiju position tako da u njoj bude trenutna vrijednost pozicije plus 10."

Kad Jiki to vidi, izvadit će trenutni broj iz kutije position, dodati mu 10, obaviti to računanje i zatim rezultat vratiti u kutiju za sljedeći put.

```javascript
position = position + 10
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-updating-box.webp"
  alt="Jiki vadi 10 iz kutije position, dodaje 10 i dobiva 20 te vraća 20 u kutiju"
  width="427"
  height="400"
/>

Pa ako to dodamo u svoj program, tako da sada kažemo: „Postavi početnu vrijednost pozicije na 10", zatim osam puta posadi cvijet na tu poziciju i onda promijeni poziciju tako da bude 10 veća nego prije, naš kôd radi i dobivamo osam cvjetova na razmaku.

Primijeti da nema `let` (stvori novu kutiju) kad ažuriramo varijablu. To je jako važno. Kad Jiki vidi `let`, on stvara novu kutiju. Ali ovdje ne želimo stvoriti novu kutiju. Želimo promijeniti ono što je u kutiji koju već imamo.

Također primijeti da kutiju stvaramo samo jednom, izvan petlje. To je važno zapamtiti. Stvori kutiju jednom na početku, a zatim je ažuriraj svaki put kad se petlja izvrši.

Možemo ažurirati ono što je u kutijama i tu moć iskoristiti za praćenje nečega što se mijenja tijekom vremena. Taj ćeš obrazac koristiti stalno: praćenje pozicije, brojanje koliko se puta nešto dogodilo, vođenje rezultata. Kad god trebaš zapamtiti nešto što se mijenja dok program radi, ovako to radiš.
