---
title: "Intrările funcțiilor"
description: "Punem valori în fantele de intrare ale unei funcții ca să schimbăm ce face de fiecare dată când rulează."
en_md5: 0bd82377f2407de5fe030511752d5503
---

Unul dintre cele mai puternice lucruri la mașini, la funcții, este că multe dintre ele îți permit să pui niște informații în ele, iar asta schimbă ce fac atunci când le rulezi.

Până acum, am văzut mașini care seamănă puțin cu niște cutii, ca cea pentru `move` (deplasează cu un pas).

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/move-machine.webp"
  alt="Mașina move, o cutie simplă, fără fante de intrare"
  width="322"
  height="400"
/>

Dar unele mașini au fante, ca mașina `walk` (deplasează cu mai mulți pași) de aici. Mașina `walk` este exact ca mașina `move`. Deplasează personajul (engl. _character_) înainte, doar că Jiki poate folosi fanta ca să precizeze câți pași să facă personajul tău înainte. Așa că, în loc să folosești funcția `move` de trei ori la rând, `move`, `move`, `move`, poți folosi acum doar funcția `walk` și să-i spui lui Jiki să pună numărul trei în mașină.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/walk-machine-slot.webp"
  alt="Mașina walk, cu o fantă de intrare deasupra, pentru numărul de pași"
  width="481"
  height="400"
/>

Ca să facem asta în cod, scriem tot numele funcției, în cazul acesta `walk`, și punem tot paranteza de deschidere. Dar apoi, înainte de paranteza de închidere, spunem ce vrem să fie intrarea (engl. _input_). Așa că, în cazul acesta, vrem ca intrarea să fie trei, adică `walk` trei pași înainte:

```javascript
walk(3)
```

Când Jiki vede asta, ia numărul trei, iar tu te poți gândi la acel număr ca la o monedă mică, și îl pune în fanta de intrare a mașinii înainte să tragă de manivelă ca s-o pornească.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/jiki-coin-into-slot.webp"
  alt="Jiki lasă numărul 3 ca pe o monedă în fanta mașinii walk, apoi trage de manivelă"
  width="421"
  height="400"
/>

Pentru funcțiile care desenează dreptunghiuri și cercuri, trebuie să-i spui lui Jiki să introducă mai multe numere diferite, care precizează lucruri precum cât de departe de marginea din stânga să fie, cât de departe de marginea de sus să fie, lățimea unui dreptunghi, înălțimea unui dreptunghi.

În lumea lui Jiki, acestea sunt doar fante diferite, una pentru fiecare dintre acele numere.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/two-machines-inputs.webp"
  alt="Mașina de dreptunghiuri, cu fante pentru left, top, width și height, și mașina de cercuri, cu fante pentru cx, cy și radius"
  width="396"
  height="400"
/>

Așa că în codul nostru scriem pur și simplu fiecare număr și punem o virgulă între ele. Numele funcției, o paranteză, câte un număr pentru fiecare intrare, toate separate prin virgule, iar apoi închidem parantezele:

```javascript
rectangle(10, 20, 30, 40)
```

Dacă încerci să folosești o funcție cu un număr greșit de intrări, o să primești o eroare. De exemplu, dacă încerci să pui o singură intrare într-o mașină care nu are fantă, Jiki o să-ți spună că nu se poate. Iar dacă încerci să folosești o mașină care are o fantă de intrare, dar nu-i spui lui Jiki ce să pună în ea, o să se oprească și o să se plângă. Încearcă, dacă te simți puțin rebel, și vezi ce se întâmplă. O să faci multe greșeli de genul ăsta pe măsură ce lucrurile se complică. Încearcă să nu te stresezi și să nu te superi din cauza asta. Cu toții învățăm din greșeli. Este literalmente cel mai rapid mod prin care creierul nostru internalizează cu adevărat lucrurile. Și toată lumea face aceste greșeli. Cu toții am pornit de la zero, așa că nu te stresa.

Încă un lucru care merită menționat: uneori, în exerciții, o să vezi linii care încep cu două bare oblice, `//`. Acestea se numesc comentarii (engl. _comments_). Sunt notițe private, doar pentru tine, pe care Jiki le ignoră complet. Așa că, dacă Jiki vede o linie care începe cu aceste două bare, trece pur și simplu peste ea și merge mai departe la linia următoare. Comentariile îți dau un mod de a-ți scrie propriile notițe. Sunt foarte utile ca să-ți amintești cum funcționează lucrurile. Adesea, comentariile sunt scrise chiar pentru tine, așa că, atunci când începi un exercițiu, s-ar putea să-ți sugereze unde trebuie să scrii cod sau cum să rezolvi ceva. Dar simte-te liber să adaugi și propriile comentarii.

La finalul instrucțiunilor unui exercițiu, o să vezi informații despre funcțiile pe care le poți folosi și exact care sunt intrările pe care trebuie să le pui.
