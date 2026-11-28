---
title: "Adăugarea de intrări la funcții"
description: "Adaugă fante de intrare la funcțiile tale, ca să poată face lucruri diferite în funcție de valorile primite."
en_md5: f70d737888fcbda3306196ff069eb2f1
---

Funcțiile pe care le-ai creat până acum fac mereu exact același lucru, de fiecare dată. `turnAround` (întoarce-te în jur) întoarce mereu la stânga de două ori. `shootIfAlienAbove` (trage dacă e un extraterestru deasupra) verifică mereu și trage.

Dar gândește-te la funcțiile pe care le-ai folosit de-a lungul cursului, cum fac lucruri diferite în funcție de intrări. Rectangle primește ca intrări o poziție din stânga, una de sus, o lățime și o înălțime, apoi desenează un dreptunghi diferit în funcție de ce îi spui.

Acum hai să adăugăm fante de intrare și la funcțiile tale.

Ca să faci asta, trebuie să știi două lucruri. Primul este cum arată de fapt, ce trebuie să scrii, iar al doilea este ce se întâmplă cu adevărat.

Prima parte e destul de simplă. Adaugi doar niște paranteze obișnuite, iar apoi numele intrărilor pe care le vrei.

Deci imaginează-ți că vrem să creăm o funcție care să tragă de mai multe ori. Hai să-i zicem `shootMany` (trage de mai multe ori).

Am scrie-o așa:

```javascript
function shootMany(numShots) {
  // ...
}
```

Când vrei să folosești funcția asta, o apelezi cu numărul de trageri pe care îl vrei:

```javascript
shootMany(5)
shootMany(2)
```

Acum, aici e partea esențială. Când rulează codul, orice pui în intrarea aceea, `5` sau `2`, mini-Jiki, cel cu pălăria din interiorul funcției, ia intrarea respectivă și o pune într-o cutie numită `numShots` (numărul de trageri), apoi pune cutia pe rafturile din interiorul funcției, ca să o folosești în codul funcției.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-box.webp"
  alt="Mini-Jiki în interiorul mașinii shootMany, punând intrarea într-o cutie cu eticheta numShots"
  width="500"
  height="376"
/>

Mai spun o dată.

Când scriem `shootMany(5)` ca să folosim funcția, Jiki de afară merge și ia un `5` și îl pune în fanta de intrare a lui `shootMany`. În interiorul mașinii, mini-Jiki scoate acel `5` și îl pune într-o cutie numită `numShots`, pentru că ăsta e numele pe care l-ai dat fantei de intrare, apoi pune cutia pe rafturile din interiorul funcției, în mașină.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-on-shelf.webp"
  alt="Mini-Jiki punând cutia numShots pe rafturile din interiorul mașinii shootMany"
  width="500"
  height="302"
/>

Și apoi, în cadrul funcției, poți folosi cutia `numShots` exact ca orice altă cutie. Numele `numShots` nu are nimic magic. Am fi putut să-i zicem cum voiam. Nu este nimic altceva decât o instrucțiune pentru mini-Jiki: să creeze mereu, în interiorul funcției, o cutie cu eticheta aceea, și să pună în ea orice se trimite prin fanta respectivă.

Și după ce ai o valoare în cutia aceea, poți face orice faci de obicei cu cutiile. Poți folosi cutia `numShots` într-o buclă `repeat` ca să tragi de numărul corect de ori. Și poți avea mai mult de o intrare. Doar separă-le cu virgule. Deci dacă avem o funcție numită `drawStar` (desenează o stea) care desenează o stea pe baza poziției din colțul stânga-sus, ai scrie-o așa:

```javascript
function drawStar(left, top) {
  // ...
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-two-slots.webp"
  alt="Mașina drawStar cu două fante de intrare, primind două valori separate"
  width="453"
  height="400"
/>

Iar apoi, când se apelează funcția, mini-Jiki pune pur și simplu valorile primite prin intrări în niște cutii numite `left` (stânga) și `top` (sus), apoi le pune pe rafturile din interiorul funcției.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-boxes-shelf.webp"
  alt="Mini-Jiki punând cele două intrări în cutii cu etichetele left și top, pe rafturile din interiorul mașinii drawStar"
  width="431"
  height="400"
/>
