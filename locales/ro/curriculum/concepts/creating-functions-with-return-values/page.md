---
title: "Adăugarea returnărilor la funcții"
description: "Folosirea cuvântului-cheie `return` ca să-ți dotezi funcțiile cu un tobogan de ieșire care dă o valoare înapoi celui care le apelează."
en_md5: 51d31f709a7051c29b499a31ad68555e
---

Acum știi să creezi funcții cu și fără intrări. Mai rămâne un singur lucru de învățat, iar după aceea vei fi un expert în făcut funcții. Acel lucru este cum să-ți dotezi funcțiile cu un tobogan de ieșire.

Ai folosit deja multe funcții care returnează lucruri. `isAlienAbove` (există un extraterestru deasupra) îți dă înapoi adevărat sau fals. `Math.randomInt(1, 10)` (Math înseamnă matematică, iar randomInt înseamnă număr întreg aleatoriu) îți dă înapoi un număr aleatoriu.

Când Jiki folosește acele funcții, ceva sare din toboganul de ieșire, iar apoi el poate să meargă și să folosească acel ceva.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/output-chute.webp"
  alt="Jiki ridică o valoare în timp ce ea sare din toboganul de ieșire al unei mașini"
  width="500"
  height="312"
/>

Așadar, ca să facem asta, ne trebuie un alt cuvânt-cheie nou, și anume cuvântul-cheie `return`.

Cuvântul-cheie `return` îi spune lui mini-Jiki să împingă ceva pe toboganul de ieșire.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/return-keyword-push.webp"
  alt="mini-Jiki în interiorul mașinii, împingând valoarea 42 prin toboganul de ieșire"
  width="500"
  height="335"
/>

Hai să facem o funcție, să-i spunem `meaningOfLife` (sensul vieții), iar treaba acestei funcții este mereu doar să returneze numărul `42`. Nu are nicio intrare. O scriem așa:

```javascript
function meaningOfLife() {
  return 42
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/meaning-of-life-42.webp"
  alt="Mașina meaningOfLife trimițând numărul 42 pe toboganul ei de ieșire"
  width="500"
  height="323"
/>

Acum, oriunde folosim `meaningOfLife()` în cod, primim înapoi numărul `42`, pe care îl putem folosi ca orice altă valoare. Îl putem pune într-o cutie cu `let`, îl putem da ca intrare altei funcții, îl putem compara într-o condiție `if`.

Funcțiile cu returnări pot primi și intrări. Ai putea scrie o funcție `ageBracket(age)` (interval de vârstă) care returnează `"Sorry, too young"` când `age` este sub 18 și `"Welcome"` în rest. Oricine o apelează primește înapoi stringul pe care funcția l-a returnat.

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
  alt="O valoare de vârstă lăsată să cadă în fanta de intrare a mașinii, ca mașina să poată decide ce returnează"
  width="487"
  height="400"
/>

Așa funcționează programarea în esența ei. Creăm o mulțime de piese mici de construcție și apoi le îmbinăm în programe.
