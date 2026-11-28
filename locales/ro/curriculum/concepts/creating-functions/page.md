---
title: "Cum să-ți scrii propriile funcții"
description: "Cum folosești cuvântul-cheie function ca să-ți construiești propriile mașini, pe care Jiki le poate pune pe rafturile lui și le poate refolosi."
en_md5: 93286a30a373b5604b60b3c109ad00a3
---

Până acum ai folosit funcții care au fost construite pentru tine, funcții precum `circle`, `rectangle`, `moveRight`, `shoot`. Toate acestea sunt funcții care au fost făcute și puse pe rafturile lui Jiki.

Dar acum a venit momentul să începi să-ți construiești propriile funcții.

Ca să-ți arăt cum se face asta, hai să ne uităm la construirea unei funcții noi pentru labirint, numită `walk5` (mergi cinci pași).

Această funcție va muta mereu personajul cinci pași înainte. Recunosc, nu e cea mai utilă funcție din lume, dar e una simplă și simpatică pentru început.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/walk-grid.webp"
  alt="Personajul pe grila labirintului, gata să meargă cinci pași înainte"
  width="500"
  height="314"
/>

Deci, dacă ți-aș cere să scrii niște cod care mută personajul cinci pași înainte, ai putea fie să scrii `move` (mergi un pas) de cinci ori, fie să folosești o buclă repeat. În acest exemplu, ca să rămână totul simplu, vom merge pe varianta cu `move` de cinci ori la rând.

```javascript
move()
move()
move()
move()
move()
```

Deci asta e ce vrem să fie în interiorul funcției noastre.

Acum adaugă dedesubt o linie care îi spune lui Jiki să folosească această funcție. Ai văzut asta de multe ori.

Iar acum treaba noastră este să înfășurăm toate aceste prime cinci linii într-o funcție, astfel încât, atunci când Jiki folosește `walk5`, să ruleze exact acele prime cinci linii de cod.

Ca să transformăm aceste cinci linii într-o funcție, aceste cinci mișcări într-o funcție, trebuie să folosim un cuvânt-cheie nou, cuvântul-cheie `function`.

Când folosim cuvântul-cheie `function`, trebuie să facem două lucruri. Unu, să precizăm numele funcției. În acest caz, este `walk5`. Și doi, să folosim acolade ca să înfășurăm niște cod care spune: „Iată ce trebuie să faci în interiorul funcției.” Deci putem adăuga asta în codul nostru, și acum îi spunem lui Jiki să creeze o funcție numită `walk5`, iar apoi, când se folosește `walk5`, să ruleze aceste cinci linii de cod.

```javascript
function walk5() {
  move()
  move()
  move()
  move()
  move()
}
```

Când Jiki vede cuvântul-cheie `function`, se duce și construiește o funcție nouă, pune instrucțiunile acelea pe o tablă în interiorul ei și apoi pune pe mașină o etichetă cu `walk5`. Iar apoi pune funcția aceea pe rafturi, lângă toate celelalte care sunt acolo.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/jiki-machine-whiteboard.webp"
  alt="Jiki stând lângă o mașină nouă, cu o tablă în interiorul ei pe care se notează instrucțiunile funcției"
  width="500"
  height="396"
/>

Acum, funcția pe care ai făcut-o nu are nimic special față de cele predefinite (engl. _built-in_). Toate stau pur și simplu una lângă alta pe rafturile lui.

Iar când folosești funcția, când scrii `walk5()`, Jiki se duce pur și simplu și ia mașina de pe rafturi și o folosește exact la fel cum a făcut cu orice altă funcție. Îți poți imagina că în fiecare mașină locuiește un mini-Jiki. Mini-Jiki are mereu pălăria asta tare. Și acel mini-Jiki lucrează exact la fel ca Jiki cel normal de afară, urmărind instrucțiunile în același fel.

Un lucru esențial de înțeles aici este că, atunci când Jiki creează funcția, el nu rulează de fapt codul. Doar notează codul acela ca să îl folosească mai târziu.

Personajul din labirint nu se mișcă în acest moment, când scrii cuvântul-cheie `function`.

Jiki a construit mașina și a pus-o pe rafturi. Abia când îi spui să folosească mașina, scriind `walk5()`, se întâmplă de fapt asta.
