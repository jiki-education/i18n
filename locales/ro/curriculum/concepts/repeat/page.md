---
title: "Bucla `repeat`"
description: "Folosirea cuvântului-cheie `repeat` pentru a-i spune lui Jiki să ruleze codul dintre acolade de un anumit număr de ori."
en_md5: f37a63911f75934656cbf04a38ff2b60
---

Până acum, am scris totul într-un mod liniar, în care Jiki urmează fiecare instrucțiune în ordine, de sus în jos.

Acum hai să vedem cum poate Jiki să iasă din acest flux strict de sus în jos și, mai precis, cum îi putem spune lui Jiki să ruleze aceeași secțiune de cod de multe ori la rând.

De exemplu, imaginează-ți că ești în labirint și vrei să înaintezi 10 pași. Există o funcție `walk` care te ajută cu asta, dar ce faci dacă nu ar exista? Ce faci dacă ai avea doar funcția `move` (mișcă-te înainte)?

În loc să scriem `move` de 10 ori la rând, ceea ce devine foarte repetitiv, avem nevoie să putem spune: „Hei, Jiki, fă de 10 ori următorul lucru pe care ți-l spun.”

`Move`.

Ca să facem asta în cod, trebuie să folosim primul nostru cuvânt-cheie (engl. _keyword_), iar cuvintele-cheie sunt instrucțiuni pe care Jiki le înțelege. Seamănă puțin cu niște mașini, dar nu sunt. Când Jiki vede un cuvânt-cheie, nu caută o mașină pe raft, ci pur și simplu știe să facă ceva. E înscris în creierul lui. Și sunt cam 20 de cuvinte-cheie diferite pe care le vom învăța pe parcursul cursului, iar primul dintre ele este cuvântul-cheie `repeat`.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/jiki-keywords-2.webp"
  alt="Jiki înconjurat de cuvinte-cheie precum repeat, if, else, and, or, cu mențiunea că cuvintele-cheie sunt instrucțiuni pe care Jiki le înțelege"
  width="358"
  height="400"
/>

Cuvântul-cheie `repeat` face exact ce am spus mai sus. Îi spune lui Jiki: „Repetă de atâtea ori orice îți spun eu în continuare.” Hai să ne uităm la codul de mai jos. Mai întâi, folosim cuvântul-cheie `repeat` ca să-i spunem lui Jiki că va face ceva de mai multe ori. Apoi punem între paranteze rotunde (`()`) de câte ori vrei ca Jiki să repete lucrul respectiv, iar apoi avem acoladele astea (`{}`), iar înăuntrul acoladelor sunt lucrurile pe care vrem ca Jiki să le repete. Acest tipar este incredibil de des întâlnit în programare. Precizăm un cuvânt-cheie, de obicei împreună cu o informație, cum ar fi de câte ori să se facă ceva în cazul nostru, și apoi un bloc de cod (engl. _code block_) între acolade. Așa că, întorcându-ne în lumea labirintului, în loc să scriem `move`, `move`, `move`, `move`, putem scrie „repetă de patru ori `move`”.

```javascript
repeat(4) {
  move()
}
```

Jiki va vedea codul acela și va folosi mașina `move` de patru ori la rând.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/jiki-running-loop.webp"
  alt="Jiki folosind mașina move de patru ori la rând, una după alta"
  width="421"
  height="400"
/>

Și nu suntem limitați la un singur lucru între acele acolade. Jiki poate face mai multe lucruri în mod repetat. Îi putem spune lui Jiki să facă `move`, apoi `turnLeft`, și să repete totul de patru ori. Dacă Jiki vede asta, va folosi mașina `move`, apoi mașina `turnLeft`, apoi mașina `move`, apoi mașina `turnLeft`, apoi mașina `move` și tot așa, până când le face pe amândouă de patru ori.

```javascript
repeat(4) {
  move()
  turnLeft()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/if-else-code.webp"
  alt="Jiki folosind mașina move, apoi mașina turnLeft, repetând perechea de acțiuni de patru ori"
  width="500"
  height="390"
/>

Pe aceste instrucțiuni care se repetă le numim bucle (engl. _loops_), și există o mulțime de bucle diferite pe care le putem folosi, fiecare funcționând puțin altfel.

Mai e un lucru de știut: păstrarea codului curat și ordonat devine esențială când lucrezi cu bucle. Când ai o structură vizuală bună în cod, îți este foarte ușor să vezi ce se întâmplă. Dar dacă nu, dacă uiți să indentezi frumos sau îți încurci indentarea, lucrurile devin confuze foarte repede. Așa că în cursul acesta avem mereu o regulă. Pune întotdeauna acolada de început pe aceeași linie cu instrucțiunea `repeat` (engl. _statement_). Pune întotdeauna acolada de final pe o linie separată, după instrucțiune, și indentează întotdeauna codul dintre ele cu două spații. Astfel, totul rămâne foarte ordonat, iar dacă uiți sau încerci să urmezi un alt tipar, vei primi o eroare.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/multiple-things-in-loop.webp"
  alt="Jiki arătând spre indentare și spre linia nouă care țin blocul de cod al unei bucle ordonat"
  width="500"
  height="398"
/>
