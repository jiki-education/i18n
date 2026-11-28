---
title: "Dodavanje povratne vrijednosti funkcijama"
description: "Kako pomoću ključne riječi `return` svojim funkcijama dati izlazni otvor koji vraća vrijednost onome koji ih poziva."
en_md5: 51d31f709a7051c29b499a31ad68555e
---

Sada znaš kako stvarati funkcije s ulazima i bez njih. Ostala je još samo jedna stvar za naučiti, a onda ćeš biti stručnjak za stvaranje funkcija. Ta stvar je kako svojim funkcijama dati izlazni otvor.

Brojne funkcije koje vraćaju vrijednosti već su ti poznate. `isAlienAbove` (je li izvanzemaljac iznad) daje ti natrag točno ili netočno. `Math.randomInt(1, 10)` (Math znači matematika, a randomInt slučajni cijeli broj) daje ti natrag slučajni broj.

Kad Jiki koristi te funkcije, nešto iskoči iz izlaznog otvora, a on to onda može uzeti i upotrijebiti.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/output-chute.webp"
  alt="Jiki hvata vrijednost koja iskače iz izlaznog otvora stroja"
  width="500"
  height="312"
/>

Za to nam treba još jedna nova ključna riječ, a to je ključna riječ `return`.

Ključna riječ `return` govori malom Jikiju da gurne nešto kroz izlazni otvor.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/return-keyword-push.webp"
  alt="Mali Jiki unutar stroja gura vrijednost 42 kroz izlazni otvor"
  width="500"
  height="335"
/>

Napravimo funkciju i nazovimo je `meaningOfLife` (smisao života). Njezin je posao uvijek samo vratiti broj `42`. Nema nikakvih ulaza. Pišemo je ovako:

```javascript
function meaningOfLife() {
  return 42
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/meaning-of-life-42.webp"
  alt="Stroj meaningOfLife šalje broj 42 iz svog izlaznog otvora"
  width="500"
  height="323"
/>

Gdje god u kôdu upotrijebimo `meaningOfLife()`, dobivamo natrag broj `42` i možemo ga koristiti kao i svaku drugu vrijednost. Možemo ga staviti u kutiju pomoću `let`, možemo ga predati kao ulaz drugoj funkciji, možemo ga usporediti u naredbi `if`.

Funkcije s povratnom vrijednošću mogu primati i ulaze. Možda napišeš funkciju `ageBracket(age)` (dobna skupina) koja vraća `"Sorry, too young"` kad je `age` manji od 18, a inače `"Welcome"`. Onaj koji je pozove dobiva natrag onaj string koji je funkcija vratila.

```javascript
function ageBracket(age) {
  if (age >= 18) {
    return "Welcome"
  }
  return "Sorry, too young"
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/age-input.webp"
  alt="Vrijednost dobi ubacuje se u prorez stroja kako bi on mogao odlučiti što će vratiti"
  width="487"
  height="400"
/>

Tako programiranje funkcionira u svojoj srži. Stvaramo mnogo takvih malih kockica i zatim ih slažemo u programe.
