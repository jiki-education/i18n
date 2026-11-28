---
title: "Parcurgerea stringurilor cu `for ... of`"
description: "Folosirea unei bucle `for of` pentru a trece prin fiecare literă a unui string, făcând pe rând câte ceva cu fiecare."
en_md5: 09f399cc3f52b89380d3ed23fc6be513
---

Poți accesa o singură literă dintr-un string folosind paranteze pătrate (`[]`). Acum hai să vedem cum să parcurgem un string cu o buclă, scoțând fiecare literă pe rând.

Iar pentru asta ne trebuie un tip nou de buclă. Până acum am folosit bucla repeat, iar acum o să folosim ceva numit buclă `for of` (parcurge pe rând fiecare element al unei colecții). Sunt două cuvinte-cheie noi: `for` și `of`.

Cuvântul-cheie `for` este unul pe care o să îl vedem în destul de multe locuri de acum înainte. Poate sta singur sau poate fi însoțit de `in` sau de `of`. Deocamdată ne concentrăm pe ultimul, `of`.

Așa că hai să ne uităm la niște cod.

Începem prin a crea o variabilă numită `name` (nume), care conține stringul `"Jeremy"` (numele Jeremy). Nimic nou până aici.

Apoi avem linia buclei, și acolo se întâmplă o mulțime de lucruri, așa că hai să o luăm încet, pas cu pas.

```javascript
let name = "Jeremy"
for (let letter of name) {
  // ...
}
```

Mai întâi avem cuvântul-cheie `for`. El îi spune lui Jiki că vrem să facem o buclă. Așa că se uită înainte, vede `of` și știe că vrem o buclă „for of”.

Iar asta înseamnă că, în loc să folosim o buclă repeat în care spunem „Hai să repetăm de 10 ori”, spunem „Hai să trecem prin toate literele din string”. Asta înseamnă „for of”.

Apoi avem partea asta cu `let letter` (creează o variabilă numită `letter`). Este exact la fel ca `let name` de mai sus. Pur și simplu creăm o variabilă numită `letter`.

Diferența este că, în loc să spunem noi explicit ce anume intră în ea, îi cerem lui Jiki să pună pe rând fiecare literă din string în variabilă.

Deci Jiki vede `for`, verifică dacă există `of` și apoi se apucă de treabă. Se uită la prima literă din string, în cazul acesta `"J"`, și o pune într-o cutie nouă numită `letter`. Apropo, i-am fi putut spune oricum. Nu trebuie să fie neapărat `letter`. Aici am hotărât pur și simplu să o numim `letter`.

Apoi rulează codul din interiorul acoladelor, iar acolo poți face orice ai face oriunde altundeva în cod. Singura diferență este că blocul acesta de cod se va rula o dată pentru fiecare literă din string și va avea la dispoziție variabila asta.

De fiecare dată când Jiki ajunge la acolada de închidere, aruncă cutia `letter` și creează una nouă, cu următoarea literă în ea. Așa că prima dată aruncă `"J"` și pune în cutie un `"e"`. Apoi face la fel pentru `"r"`, apoi `"e"`, apoi `"m"`, apoi `"y"`. Șase litere, șase treceri prin buclă. O să îți trebuiască puțin timp să te obișnuiești cu sintaxa, dar nu e o noțiune chiar atât de grea.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-iteration/jiki-letter-box-loop.webp"
  alt="Jiki aruncă vechea cutie cu literă și lasă următoarea literă să cadă într-o cutie nouă, etichetată letter, repetând pentru fiecare literă din string"
  width="500"
  height="168"
/>
