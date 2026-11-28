---
title: "Animație"
description: "Cum păcălim ochiul să vadă mișcare, revopsind fundalul și redesenând fiecare cadru într-o poziție ușor diferită."
en_md5: 536994294072afea52dab51d3bb7cab8
---

Până acum, când am folosit bucla `repeat` ca să desenăm lucruri, fiecare lucru nou desenat a adăugat ceva la imagine. Dacă am desenat o cărămidă nouă într-un zid, am umplut un gol. Dacă am desenat 10 cercuri, vedem 10 cercuri pe ecran. E ca o pictură. Odată ce pui vopsea pe perete, ea nu dispare când pictezi ceva nou alături. Rămâne acolo. Dar ce facem dacă vrem ca un lucru să pară că se mișcă?

Ai văzut vreodată un flip book? Erau foarte populare când eram mic, acum mai puțin. Un flip book e o cărticică în care fiecare pagină are un desen ușor diferit. Pe măsură ce răsfoiești paginile repede, ochii tăi văd desenele cum se schimbă, iar creierul crede că ceva se mișcă. De fapt nu se mișcă nimic. Sunt doar multe imagini ușor diferite, una după alta. Și exact așa funcționează animația în cod. Trucul e același. Înainte să desenăm o scenă nouă, acoperim toată pânza cu o culoare de fundal, cam ca atunci când începem o pagină nouă în flip book, iar apoi facem o mică schimbare în scenă, ca să pară mișcare.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/flip-book-pages.webp"
  alt="Un flip book care arată un omuleț din bețișoare alergând, fiecare pagină ușor diferită, astfel încât omulețul pare să se miște"
  width="500"
  height="274"
/>

Deci, dacă luăm un bloc de cod cunoscut, în care desenăm cercuri pe ecran, setăm o variabilă `position` și avem un bloc `repeat` în care desenăm un cerc și apoi mutăm `position` cu unu la dreapta. Dacă rulăm acel bloc `repeat` de 100 de ori, o să vedem 100 de cercuri pe ecran.

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
  alt="O urmă de 100 de cercuri albastre desenate de la stânga la dreapta pe ecran"
  width="500"
  height="197"
/>

Acum uită-te ce se întâmplă dacă adăugăm doar un dreptunghi simplu înainte să desenăm cercul de fiecare dată.

```javascript
let position = 0
repeat(100) {
  rectangle(0, 0, 100, 100, "white")
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

În loc de o urmă de cercuri, ochii noștri sunt acum păcăliți să vadă un singur cerc care pare să alunece pe ecran.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circle-glide-frames.webp"
  alt="O succesiune de cadre, fiecare cu o pânză albă nouă și un singur cerc albastru cu un pas mai la dreapta"
  width="500"
  height="187"
/>

De fiecare dată când trecem prin buclă, pictăm un fundal complet nou, acoperim tot ce era acolo înainte și apoi desenăm cercul în noua lui poziție.

Fiecare trecere prin buclă e ca o pagină nouă din flip book.

Și lucrul esențial de înțeles aici este că nu mutăm cercul. Cercul nu e un obiect care alunecă pe ecran. E doar un desen. De fiecare dată când trecem prin buclă, pictăm peste desenul vechi și facem unul complet nou, puțin mai la dreapta. Ochii tăi le pun pe toate la un loc și văd mișcare, dar, de fapt, sunt doar multe desene separate, unul după altul.

Poți folosi ideea asta ca să creezi un apus de soare. Faci soarele să se miște, îi schimbi mărimea, îi schimbi culoarea. E aceeași tehnică. Setezi câteva variabile, pictezi un fundal nou și desenezi totul. Actualizezi variabilele, apoi repeți.
