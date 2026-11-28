---
title: "Crearea și folosirea variabilelor"
description: "Cutii pe rafturile lui Jiki, care păstrează o valoare sub o etichetă, ca să o poți scoate mai târziu în codul tău."
en_md5: dd0834017a8d42c22cca25966c1fdd91
---

Variabilele (engl. _variables_) sunt cele care ne permit să stocăm informații. Când programăm, avem des nevoie să stocăm un număr sau un string ca să le folosim mai târziu, iar variabilele sunt felul în care facem asta. Hai să facem un pas în spate și să privim tot depozitul lui Jiki: o să vezi că are un alt set de rafturi. Primul set de rafturi, pe care stau funcțiile, ne este deja familiar, cu mașinile acelea mici ca `move` și `rectangle`. Dar pe al doilea set de rafturi, în loc de mașini, vezi o mulțime de cutii, iar cutiile acestea sunt ceea ce numim variabile. Poți să îi spui lui Jiki să pună orice în cutiile astea și, mai târziu, să ți-l dea înapoi. Fiecare cutie are un nume, exact ca funcțiile, și fiecare cutie conține un singur lucru. Deocamdată, fie un număr, fie un string. Dar vom vedea mai departe în curs cum să punem în ele lucruri mai complexe.

<img
  class="concept-image"
  src="/static/images/concept-assets/variables/two-shelves.webp"
  alt="Două seturi de rafturi în depozitul lui Jiki: unul etichetat funcții, pe care stau mașini, și unul etichetat variabile, pe care stau cutii"
  width="500"
  height="173"
/>

Deci cum îi spunem lui Jiki să facă o cutie și să pună ceva în ea? Folosim cuvântul-cheie `let`. Cuvântul-cheie `let` îi spune lui Jiki că trebuie să facă o cutie nouă. Ți-l poți imagina desfăcând o cutie de carton din ambalaj, asamblând-o, apoi uitându-se la ce urmează după cuvântul `let`: acela este numele pe care îl pune pe cutie, în cazul nostru `name` (nume). Așa că își scoate pixul și scrie `name` pe etichetă. Apoi se uită la ce urmează după semnul egal (engl. _equal sign_). În cazul acesta, este numele meu, `"Jeremy"`, și, fiindcă `"Jeremy"` este un string, ia o foaie de hârtie și scrie `"Jeremy"` pe ea. Este doar un string, exact ca culorile cu care ai lucrat, iar apoi pune foaia aceea de hârtie în cutie.

```javascript
let name = "Jeremy"
```

<img
  class="concept-image"
  src="/static/images/concept-assets/variables/jeremy-paper.webp"
  alt="Jiki ținând o foaie de hârtie pe care scrie stringul Jeremy, gata să o pună în cutie"
  width="373"
  height="400"
/>

I-am spus deci să facă o cutie, să pună o etichetă pe ea și să pună ceva în ea, iar acum o duce și o așază pe raft. Iar în orice alt moment din programul tău, Jiki poate să ia cutia de pe raft și să se uite ce este în ea. Începe să îți construiești acest model mental. Eu programez de o veșnicie și încă îmi imaginez, când scriu cod, că pun ceva într-o cutie și că o să scot acel ceva mai târziu. Când vezi cuvântul-cheie `let`, gândește-te serios: „Bine, asta înseamnă că fac o cutie nouă.”

Câteva vorbe despre numele variabilelor, adică etichetele de pe aceste cutii. Avem câteva reguli în privința lor. În primul rând, numele variabilelor nu pot conține spații. Dacă vrei să folosești mai multe cuvinte pentru eticheta unei cutii, lipim cuvintele unul de altul și transformăm prima literă a fiecărui cuvânt în majusculă. Asta se numește camel case. Imaginează-ți cocoașele unei cămile care împing în sus prima literă a fiecărui cuvânt nou, ca să devină majusculă. Așa că, dacă vrei o etichetă care să însemne numele meu, în loc să scriem două cuvinte cu spațiu între ele, o scriem ca pe un singur cuvânt, cu N majuscul: `myName`.

De asemenea, fiecare nume de variabilă trebuie să fie unic. Nu poți avea două cutii cu aceeași etichetă și nici variabile cu același nume ca funcțiile. Dacă uiți, Jiki se încurcă și îți dă un mesaj de eroare.

<img
  class="concept-image"
  src="/static/images/concept-assets/variables/duplicate-names-confused.webp"
  alt="Jiki se uită încurcat la două cutii care au amândouă eticheta name"
  width="485"
  height="400"
/>

Hai să vedem unde am putea vrea să folosim o variabilă. Să zicem că desenăm un soare pe cer. Știm că putem folosi funcția `circle` (cerc) și să îi dăm patru intrări. Adică `left` (stânga), `top` (sus), `radius` (rază) și `color` (culoare). Dar, pe măsură ce desenăm o mulțime de lucruri și avem toate numerele astea împrăștiate prin cod, poate fi foarte greu să le ții evidența și să citești codul. Așa că, în schimb, putem crea variabile pentru fiecare dintre `left`, `top`, `radius` și `color`, iar apoi să ne referim la ele mai târziu. Deci scopul final aici este să putem folosi funcția `circle` și să îi dăm nume de cutii frumoase și lesne de citit; când Jiki vede acele nume, știe să ia cutiile de pe rafturi și să folosească ce este în ele.

Hai să creăm niște variabile pentru toate acestea. Începem cu poziția din stânga a soarelui. Folosim cuvântul-cheie `let` ca să îi spunem lui Jiki să creeze o cutie nouă numită `leftPosition` (poziția din stânga). Observă camel case-ul de acolo, cu P majuscul. Și îi spunem lui Jiki ce număr intră în cutie. El o pune pe rafturi, apoi trece mai departe și face la fel pentru `topPosition` (poziția de sus), `radius` și `color`.

```javascript
let leftPosition = 10
let topPosition = 20
let radius = 5
let color = "yellow"

circle(leftPosition, topPosition, radius, color)
```

<img
  class="concept-image"
  src="/static/images/concept-assets/variables/name-on-shelf.webp"
  alt="Cutii etichetate pe rafturile de variabile, fiecare păstrând o singură valoare pe care Jiki o va lua mai târziu"
  width="500"
  height="378"
/>

În orice moment al codului putem reveni la aceste variabile, iar Jiki va scoate valorile (engl. _values_) și le va pune într-o mașină. Celălalt lucru grozav la variabile este că, oricând vrem să desenăm ceva în aceeași poziție ca soarele, putem refolosi aceleași variabile `leftPosition` și `topPosition`. Să luăm un alt exemplu. Imaginează-ți că ridici un zid cu 30 de cărămizi și vrei ca toate cărămizile să aibă aceeași lățime și aceeași înălțime. Este mult mai bine să creezi variabile pentru lățime și înălțime la începutul codului și apoi să te raportezi la ele în restul codului. Pentru că, dacă vrei să schimbi apoi lățimea sau înălțimea, o schimbi într-un singur loc și tot restul se actualizează.
