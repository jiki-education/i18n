---
title: "Animacija"
description: "Kako prevariti oko da vidi kretanje: prebojimo pozadinu i svaki put iznova nacrtamo sličicu na malo drugom mjestu."
en_md5: 536994294072afea52dab51d3bb7cab8
---

Do sada, kad smo koristili petlju `repeat` (ponovi) za crtanje, svaka nova stvar koju smo nacrtali dodala je nešto na sliku. Ako smo nacrtali novu ciglu u zidu, ona je popunila prazninu. Ako smo nacrtali 10 krugova, na ekranu vidimo 10 krugova. To je kao slika na zidu. Kad jednom staviš boju na zid, ona ne nestane kad pokraj nje naslikaš nešto novo. Ostane tamo. Ali što ako želimo da nešto izgleda kao da se kreće?

Znaš li one male knjižice koje listaš palcem? Bile su jako popularne u moje vrijeme, a danas su rjeđe. To je mala knjižica u kojoj svaka stranica ima malo drugačiji crtež. Kad brzo listaš stranice, oči vide da se crteži mijenjaju, a mozak pomisli da se nešto kreće. A ono se zapravo ne kreće. To je samo mnoštvo malo različitih crteža, jedan za drugim. I upravo tako radi animacija u kôdu. Trik je isti. Prije nego nacrtamo novu scenu, prebojimo cijelo platno bojom pozadine, slično kao kad u knjižici s listanjem krenemo od čiste stranice, a zatim malo promijenimo scenu da izgleda kao da se kreće.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/flip-book-pages.webp"
  alt="Knjižica s listanjem u kojoj se vidi lik nacrtan od štapića kako trči, svaka je stranica malo drugačija pa se čini da se lik kreće"
  width="500"
  height="274"
/>

Zato uzmimo poznati blok kôda u kojem crtamo krugove po ekranu: postavimo varijablu `position` (položaj) i imamo blok `repeat` u kojem nacrtamo krug, a zatim pomaknemo `position` za jedan udesno. Ako taj blok `repeat` izvršimo 100 puta, vidjet ćemo 100 krugova po ekranu.

```javascript
let position = 0
repeat(100) {
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circles-trail.webp"
  alt="Trag od 100 plavih krugova nacrtanih slijeva nadesno po ekranu"
  width="500"
  height="197"
/>

A sad pogledaj što se dogodi ako prije svakog crtanja kruga dodamo jedan obični pravokutnik.

```javascript
let position = 0
repeat(100) {
  rectangle(0, 0, 100, 100, "white")
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

Umjesto traga krugova, oči su nam sada prevarene pa vide jedan krug koji kao da klizi po ekranu.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circle-glide-frames.webp"
  alt="Niz sličica, svaka je čisto bijelo platno s jednim plavim krugom korak dalje udesno"
  width="500"
  height="187"
/>

Svaki put kad prođemo kroz petlju, naslikamo cijelu novu pozadinu, prekrijemo sve što je prije bilo tu i zatim nacrtamo krug na novom mjestu.

Svaki prolaz kroz petlju je kao nova stranica u knjižici s listanjem.

I najvažnije je shvatiti ovo: mi ne pomičemo krug. Krug nije objekt koji klizi po ekranu. To je samo crtež. Svaki put kad prođemo kroz petlju, prebojimo stari crtež i napravimo potpuno novi, malo udesno. Oko sve to spoji i vidi kretanje, ali u stvarnosti je to samo mnoštvo odvojenih crteža, jedan za drugim.

Tu ideju možeš iskoristiti za zalazak sunca. Pomakni sunce, promijeni mu veličinu, promijeni boju. Tehnika je uvijek ista. Postavi varijable, naslikaj svježu pozadinu i nacrtaj sve. Zatim promijeni vrijednosti varijabli i ponovi sve.
