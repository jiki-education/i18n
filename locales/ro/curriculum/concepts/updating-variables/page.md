---
title: "Actualizarea variabilelor"
description: "Schimbarea conținutului unei variabile în timp ce rulează programul, ca să poți ține evidența pozițiilor, a numărărilor, a scorurilor și a altor valori care se schimbă."
en_md5: f9b2fbb6bfd82a620b093e88951ff841
---

Până acum, când am creat variabile, am pus valori în cutii și apoi le-am scos mai târziu. Asta a fost foarte util ca să ne facem codul mai clar și ca să reducem din calculele mintale pe care altfel ar fi trebuit să le facem. Dar adevărata putere a variabilelor vine din faptul că poți schimba ce e într-o cutie, ce e în variabilă, de-a lungul unui program. Așa că, deși putem rula aceeași bucată de cod de mai multe ori, ce face ea poate să difere în funcție de ce e în cutii.

Să zicem că vrem să plantăm o floare într-o grădină. Avem la îndemână o funcție `plant` (plantează) care are o singură intrare: poziția în care vrem să punem floarea. Așa că, dacă vrem să punem o floare la 10 de margine, scriem așa:

```javascript
plant(10)
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/flowers-same-spot.webp"
  alt="O floare plantată într-o grădină, lângă tabla lui Jiki"
  width="406"
  height="400"
/>

Și dacă vrem să plantăm opt flori? Păi, am putea scrie `plant(10)`, `plant(20)`, `plant(30)` și așa mai departe, dar e cam obositor.

Și am învățat deja despre ceva care ne ajută să înlocuim genul ăsta de cod obositor. Folosește o buclă! Folosește un bloc repeat! Hai să punem poziția la 10 și apoi să avem un bloc repeat în care apelăm `plant`, adică folosim funcția `plant`, de opt ori.

```javascript
let position = 10
repeat(8) {
  plant(position)
}
```

Ce crezi că se va întâmpla?

Păi, o să planteze opt flori, dar le va planta de fiecare dată în același loc, ceea ce nu e chiar ce vrem. Hai să ne oprim o clipă și să ne gândim la ce face Jiki aici. Face o cutie cu eticheta position. Pune 10 în ea. Apoi rulează mașina `plant` de opt ori. De fiecare dată, scoate valoarea din cutia position. E mereu 10, și de fiecare dată pune același 10.

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-loop-walkthrough.webp"
  alt="Jiki ia cutia position de pe raft și îi dă mașinii plant valoarea ei, 10"
  width="400"
  height="400"
/>

Așa că avem nevoie de o modalitate de a înainta puțin la fiecare pas. După ce am plantat o floare, vrem să îi spunem lui Jiki să mute poziția cu 10 mai încolo, ca să fie gata pentru floarea următoare.

Așa că, lăsând codul deoparte pentru o clipă, cum ar arăta logic lucrul ăsta? Dacă îți spun: „Plantează prima floare la 10, apoi pe următoarea la 20, apoi pe următoarea la 30", cum știe creierul tău că următoarea trebuie plantată la 40 și cea de după ea la 50?

Creierul tău ține evidența numărului actual, adaugă 10 la el și apoi actualizează numărul respectiv în minte.

Și putem face exact același lucru în cod. Ca să facem asta, spunem: „Actualizează (engl. _update_) cutia position ca să aibă valoarea actuală a poziției plus 10."

Când Jiki vede asta, scoate numărul actual din cutia position, adaugă 10 la el, face socoteala, le adună, și apoi pune rezultatul înapoi în cutie pentru data viitoare.

```javascript
position = position + 10
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-updating-box.webp"
  alt="Jiki scoate 10 din cutia position, adaugă 10 și obține 20, apoi pune 20 înapoi în cutie"
  width="427"
  height="400"
/>

Așa că, dacă adăugăm asta în programul nostru, adică spunem „Pune valoarea inițială a poziției la 10", apoi de opt ori plantăm o floare la poziția respectivă, iar apoi schimbăm poziția ca să fie cu 10 mai mare decât înainte, codul nostru funcționează și obținem opt flori distanțate.

Observă că nu apare niciun `let` (declară o variabilă) când actualizăm variabila. Asta e foarte important. Când Jiki vede `let`, creează o cutie nouă. Dar aici nu vrem să creăm o cutie nouă. Vrem să schimbăm ce e în cutia pe care o avem deja.

De asemenea, observă că creăm cutia o singură dată, în afara buclei. E important să ții minte asta. Creezi cutia o dată, la început, și apoi o actualizezi de fiecare dată când rulează bucla.

Putem actualiza ce e în cutii și putem folosi puterea asta ca să ținem evidența a ceva ce se schimbă în timp. O să folosești tiparul ăsta încontinuu: să ții evidența unei poziții, să numeri de câte ori s-a întâmplat ceva, să ții scorul. Ori de câte ori trebuie să ții minte ceva ce se schimbă în timp ce rulează programul, așa faci.
