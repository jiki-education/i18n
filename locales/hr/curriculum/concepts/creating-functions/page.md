---
title: "Pisanje vlastitih funkcija"
description: "Korištenje ključne riječi function za izgradnju vlastitih strojeva koje Jiki može staviti na police i ponovno koristiti."
en_md5: 93286a30a373b5604b60b3c109ad00a3
---

Do sada koristiš funkcije koje su već napravljene za tebe, funkcije poput `circle`, `rectangle`, `moveRight`, `shoot`. Sve su to funkcije koje je netko napravio i stavio na Jikijeve police.

Ali sada je vrijeme da počneš izrađivati vlastite funkcije.

Da ti pokažemo kako se to radi, pogledat ćemo kako napraviti novu funkciju za labirint koja se zove `walk5` (prošeći pet koraka).

Ta će funkcija uvijek pomaknuti lik pet koraka naprijed. Doduše, to nije najkorisnija funkcija na svijetu, ali je lijepa i jednostavna za početak.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/walk-grid.webp"
  alt="Lik na mreži labirinta, spreman prošeći pet koraka naprijed"
  width="500"
  height="314"
/>

Ako te zamolim da napišeš kôd koji pomiče lik pet koraka naprijed, imaš dvije mogućnosti: napisati `move` (pomakni se) pet puta ili upotrijebiti petlju `repeat`. U ovom ćemo primjeru, da sve bude jednostavno, upotrijebiti pristup s `move` pet puta zaredom.

```javascript
move()
move()
move()
move()
move()
```

To je dakle ono što želimo imati unutar naše funkcije.

Sada ispod toga dodaj liniju koja Jikiju kaže da upotrijebi tu funkciju. To smo već mnogo puta vidjeli.

A onda je naš posao svih ovih prvih pet linija zamotati u funkciju, tako da kad Jiki upotrijebi `walk5`, izvrše se upravo tih prvih pet linija kôda.

Da bismo ovih pet linija pretvorili u funkciju, ovih pet poteza u funkciju, moramo upotrijebiti novu ključnu riječ, a to je ključna riječ `function`.

Kad upotrijebimo ključnu riječ `function`, moramo učiniti dvije stvari. Prvo, navesti naziv funkcije. U ovom je slučaju to `walk5`. I drugo, upotrijebiti vitičaste zagrade kojima obuhvatimo kôd koji kaže: „Ovo trebaš učiniti unutar funkcije." Tako to možemo dodati u svoj kôd i time Jikiju kažemo da stvori funkciju koja se zove `walk5`, a onda, kad se `walk5` upotrijebi, on izvršava ovih pet linija kôda.

```javascript
function walk5() {
  move()
  move()
  move()
  move()
  move()
}
```

Kad Jiki vidi tu ključnu riječ `function`, otići će i izgraditi novu funkciju, zapisati te upute na ploču unutar nje i zatim staviti naljepnicu `walk5` na stroj. Potom će tu funkciju staviti na policu uz sve ostale koje se ondje nalaze.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/jiki-machine-whiteboard.webp"
  alt="Jiki stoji pokraj novog stroja s pločom unutra na koju se zapisuju upute funkcije"
  width="500"
  height="396"
/>

Ova funkcija koju smo upravo napravili nije ni po čemu posebna u odnosu na ugrađene funkcije (_built-in_ na engleskom). Sve one samo stoje jedna uz drugu na njegovim policama.

A kad upotrijebiš funkciju, kad napišeš `walk5()`, Jiki će samo uzeti stroj s police i upotrijebiti ga posve jednako kao i svaku drugu funkciju. Možeš zamisliti da u svakom stroju živi mali Jiki. Mali Jiki uvijek nosi tu cool kapu. I taj mali Jiki radi posve jednako kao obični Jiki vani, slijedeći upute na isti način.

Jedna je važna stvar koju treba razumjeti: kad Jiki stvara funkciju, on zapravo ne izvršava kôd. On samo zapisuje taj kôd da bi ga kasnije upotrijebio.

Kad napišeš ključnu riječ `function`, lik se u tom trenutku u labirintu ne pomiče.

Jiki je izgradio stroj i stavio ga na policu. Tek kad mu kažeš da upotrijebi stroj tako što napišeš `walk5()`, to se doista i dogodi.
