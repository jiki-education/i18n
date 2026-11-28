---
title: "Numere aleatorii"
description: "Folosirea lui `Math.randomInt` cu un minim și un maxim pentru a obține un număr diferit de fiecare dată când rulează funcția."
en_md5: 5f41de1ca5327be4a86a69d801f1b6f9
---

Deseori în programare vrem să folosim o funcție și să primim înapoi un număr aleatoriu (engl. _random number_) diferit de fiecare dată.

Lucrul acesta e util în fel de fel de situații, dar mai ales în criptografie, unde facem multe lucruri precum crearea de coduri pe care le partajăm între calculatoare, iar acele coduri trebuie să fie aleatorii ca să nu poată fi sparte.

Ca să te ajute, ai la dispoziție o funcție numită `Math.randomInt` (Math înseamnă matematică, iar randomInt înseamnă număr întreg aleatoriu). Poate ai observat că are un punct la mijloc. Pe măsură ce ai acces la tot mai multe funcții, le putem organiza în grupuri diferite ca să ținem lucrurile ordonate, iar partea `Math` (Math este prescurtarea de la matematică) este numele unui grup din care face parte funcția asta. Îi spune lui Jiki în ce secțiune a rafturilor să se uite, în cazul acesta secțiunea `Math`. Punctul înseamnă doar atât: du-te în secțiunea asta și găsește funcția. Nu-ți face griji prea mult pentru asta deocamdată. Instrucțiunile exercițiului îți vor spune mereu ce funcții ai la dispoziție și cum să le folosești. Important e să înțelegi că, atunci când Jiki folosește funcția asta, va primi un număr diferit de fiecare dată când o rulează, cu o singură condiție. Funcția are două intrări. Prima este cel mai mic număr pe care mașina are voie să îl returneze, iar a doua este cel mai mare număr pe care mașina are voie să îl returneze. Deci dacă folosești funcția `Math.randomInt` cu `10` și `13`, vei primi mereu înapoi `10`, `11`, `12` sau `13`. Dar de fiecare dată vei primi altul.

<img
  class="concept-image"
  src="/static/images/concept-assets/random/jiki-shelves-math.webp"
  alt="Jiki urcând pe o scară până la secțiunea Math a rafturilor din depozitul lui"
  width="440"
  height="400"
/>

```javascript
Math.randomInt
```

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-two-inputs.webp"
  alt="Mașina Math.randomInt cu două pâlnii de intrare deasupra"
  width="500"
  height="378"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-10-13.webp"
  alt="Mașina Math.randomInt cu 10 și 13 în pâlniile de intrare, care produce 10, 11, 12 sau 13"
  width="488"
  height="400"
/>

Hai să ne imaginăm că vrei să desenezi un cerc într-o poziție aleatorie pe pânză. Poți folosi `Math.randomInt` ca să obții de fiecare dată valori diferite pentru `left` și `top`, dar cu limite de, să zicem, `10` și `90`, ca să nu se suprapună și să iasă în afara pânzei. De fiecare dată când rulezi codul acesta, cercul va fi desenat într-un loc puțin diferit.
