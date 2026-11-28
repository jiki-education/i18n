---
title: "Cum folosești `repeat` fără să dai un număr"
description: "Cum să lași goale parantezele buclei `repeat`, ca Jiki să meargă înainte până când altceva îi spune să se oprească."
en_md5: f1f98b46bedb1b5abc72aa1b856ee8ae
---

Până acum, când ai folosit bucla `repeat`, ai specificat mereu un număr care spune de câte ori să se repete. Repetă de cinci ori, de 10 ori, de 40 de ori. Uneori ai folosit și o variabilă pentru asta. Dar i-ai spus mereu lui Jiki exact de câte ori să repete bucla. Totuși, uneori nu știm dinainte de câte ori trebuie repetat. Gândește-te la labirint. La începutul acestui curs, ai rezolvat labirintul scriind mișcări concrete. Puteai să vezi labirintul, să numeri pașii și să scrii numărul corect de mișcări.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-known-path.webp"
  alt="Un labirint în care personajul poate vedea drumul, poate număra pașii și poate scrie exact mișcările corecte"
  width="418"
  height="400"
/>

```javascript
move()
move()
turnLeft()
move()
move()
```

Dar dacă ți-aș spune: «Scrie-mi un cod care să poată rezolva orice labirint pe care ți-l dau»? Labirintul acela ar putea cere 10 pași, sau 50, sau 200. Nu ai de unde să știi dinainte.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-example.webp"
  alt="Mai multe labirinte de forme și dimensiuni diferite, iar Jiki se întreabă cum să le rezolve pe toate"
  width="402"
  height="400"
/>

Așa că ai nevoie de o modalitate de a-i spune lui Jiki să meargă pur și simplu înainte. Să verifice mereu încotro poate merge, să ia mereu decizii, să înainteze, iar și iar, până când termini.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill.webp"
  alt="Jiki alergând pe o bandă de alergare, mergând mereu înainte, iar și iar"
  width="428"
  height="400"
/>

Și modalitatea de a face asta e foarte simplă. Pur și simplu nu-i da cuvântului-cheie `repeat` un număr. Lasă acele paranteze goale. Dacă faci asta, Jiki va merge pur și simplu înainte până când altceva îi spune să se oprească. Mai târziu o să vedem ce anume sunt acele lucruri care îi spun să se oprească. Dar deocamdată va merge înainte până când se termină exercițiul, sau până când decide că merge de foarte mult timp, că vrea o pauză și că i-a ajuns.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill-exhausted.webp"
  alt="Jiki prăbușit de oboseală peste banda de alergare, după ce a mers foarte mult timp, gata să renunțe și să ia o pauză"
  width="500"
  height="378"
/>
