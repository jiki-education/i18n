---
title: "Domeniul de vizibilitate"
description: "Să înțelegem cum acoladele își creează propriul set de rafturi, așa că variabilele trăiesc doar atât cât trăiește blocul lor."
en_md5: 4d5fc2d1d304725660102e9aaceea4c3
---

Imaginează-ți un cod care desenează un cerc într-un loc diferit de fiecare dată când rulează, iar noi vrem să desenăm 10 cercuri în locuri diferite. Am putea combina asta cu o buclă. Dar, dacă ești atent, poate ai observat ceva ciudat aici.

```javascript
repeat(10) {
  let left = Math.randomInt(0, 100)
  let top = Math.randomInt(0, 100)
  circle(left, top, 5, "blue")
}
```

La început am spus că există o regulă: cutiile de pe rafturile lui Jiki trebuie să aibă nume unice.

Iar cuvântul-cheie `let` creează o cutie nouă de fiecare dată când îl folosești.

Dar, pentru că `let` se află într-o buclă, Jiki va crea o cutie nouă de fiecare dată când bucla rulează.

Deci codul este greșit sau se întâmplă altceva ciudat aici?

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/thinking-jiki.webp"
  alt="Jiki cu o față nedumerită, întrebându-se dacă codul este greșit"
  width="384"
  height="400"
/>

Ei bine, se dovedește că codul este în regulă. Este JavaScript perfect valid și funcționează datorită unui concept numit domeniu de vizabilitate (engl. _scope_).

Domeniul de vizabilitate este ceva care la început probabil ți se va părea destul de simplu, dar îți garantez că o să îți facă probleme tot restul carierei. Chiar și cei mai experimentați programatori se lovesc de probleme legate de domeniul de vizabilitate, iar JavaScript este unul dintre cele mai complicate limbaje din acest punct de vedere. Îți spun asta ca să nu te simți prost când dai de probleme cu domeniul de vizabilitate. Dar, în același timp, fii foarte atent la partea asta, pentru că este importantă.

Când vezi o acoladă în cod, ea creează ceea ce se numește un domeniu de vizabilitate nou. Ce înseamnă asta? Ei bine, gândește-te că Jiki creează un set nou și mic de rafturi în atelierul lui de fiecare dată când vede o acoladă. Iar toate cutiile pe care le creează în timp ce lucrează, rulând cod în interiorul acelor acolade, acele cutii noi ajung pe setul mic și nou de rafturi, nu pe cele principale.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves.webp"
  alt="Setul principal de rafturi al lui Jiki, alături de un set nou și mai mic de rafturi creat de o acoladă"
  width="500"
  height="205"
/>

Iar când Jiki ajunge la acolada de închidere corespunzătoare, aruncă toate cutiile de pe acest set secundar de rafturi.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves-loop-end.webp"
  alt="Jiki aruncând cutiile de pe setul secundar de rafturi într-un coș, când ajunge la acolada de închidere"
  width="500"
  height="237"
/>

Așadar, de fiecare dată când avem o buclă ca aceasta, putem crea cutii care durează doar cât o singură trecere prin buclă. Cutiile `left` (stânga) și `top` (sus) pe care le vezi aici durează doar până ajungem la acolada de închidere, apoi sunt aruncate. Iar Jiki ajunge la acolada de închidere de fiecare dată când bucla rulează. Adică de 10 ori în programul acesta. Așa că de 10 ori va crea o cutie numită `left` și o va arunca din nou.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/left-top-boxes-color.webp"
  alt="Două cutii etichetate left și top, care durează doar o singură iterație a buclei"
  width="500"
  height="187"
/>

Așadar, când creezi o variabilă, trebuie să decizi cât timp vrei să rămână în viață. Dacă vrei să trăiască mult timp, trebuie să o pui în afara oricăror acolade. Dacă vrei să dureze doar o iterație, o singură trecere prin buclă, atunci o poți pune în interiorul acoladelor. Vezi cum toate astea pot deveni puțin confuze? Așa că o regulă bună, care să simplifice lucrurile la început, este să îți ții toate variabilele aproape de începutul codului, în afara acoladelor, și apoi doar să le actualizezi în interiorul acoladelor. De exemplu, am putea scrie codul de mai sus cu o singură cutie `left` și una `top`, setate pe zero la început și actualizate apoi la fiecare trecere prin buclă. Și asta este perfect valid. Niciuna dintre variante nu este corectă sau greșită. Există bune practici, dar despre ele vom învăța mai târziu. Deocamdată, experimentează, distrează-te, vezi ce ți se pare cel mai confortabil și încearcă să nu îți faci prea multe griji în privința asta.
