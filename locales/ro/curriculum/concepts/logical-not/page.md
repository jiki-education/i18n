---
title: "Operatorul `!` (not)"
description: "Cum folosești `!` pentru a inversa un Boolean: adevărat devine fals și fals devine adevărat, util pentru a comuta sau a inversa verificări."
en_md5: 5d752c7a85e6e17d914c73c83429de80
---

Până acum, când am comparat lucruri ca să vedem dacă sunt egale, am folosit trei semne de egalitate. Uneori însă vrem să verificăm dacă lucrurile nu sunt egale, iar pentru asta folosim un semn de exclamare urmat de două semne de egalitate. Și, în general, în programare, un semn de exclamare, sau _bang_ (semnul exclamării), cum cred că îi spun prietenii noștri americani, înseamnă „not”. Așa că imaginează-ți că lucrezi într-un magazin, iar conducerea a decis că ținutele disco nu sunt permise.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/shop-bouncer.webp"
  alt="Un bodyguard la ușa unui magazin care verifică ținutele oamenilor dintr-o coadă"
  width="451"
  height="400"
/>

Putem spune: „Dacă ținuta nu este disco, deschide ușa.” Condiția `if` funcționează exact la fel.

```javascript
if (outfit !== "disco") {
  openDoor()
}
```

Doar că această condiție returnează adevărat dacă lucrurile sunt diferite și fals dacă sunt la fel. Așadar, am putea scrie același lucru așa: „Dacă ținuta este disco, nu face nimic. Altfel, deschide ușa.” Dar, în general, este mai simplu și mai curat să folosești operatorul `not` ca să înțelegi și să spui exact ce ai în minte.

Încă un lucru legat de asta. Uneori ai o variabilă care este adevărată și vrei să o faci falsă, sau ai ceva care este fals și vrei să îl faci adevărat, iar asta ne poate ajuta să ținem evidența unui lucru. Așa că imaginează-ți că avem ceva care sare de la stânga la dreapta și că avem o variabilă numită `movingRight` (se mișcă spre dreapta), care este adevărată atunci când trebuie să te miști spre dreapta. Dar când vrei să o comuți (engl. _toggle_), adică să o faci falsă, în momentul în care ajungi la marginea din dreapta.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/pong-court.webp"
  alt="Un teren în stil Pong, cu palete și o minge care sare dintr-o parte în alta, ilustrând comutarea unei variabile movingRight"
  width="500"
  height="352"
/>

Așadar, am putea face asta spunând: „Dacă `movingRight` este egal cu adevărat, atunci `movingRight` devine fals. Altfel, `movingRight` devine adevărat.” Aceasta este o modalitate de a comuta variabila. Deci Jiki se uită la `movingRight` ca să vadă dacă este adevărată sau falsă, apoi calculează opusul și pune valoarea respectivă înapoi în cutie.

```javascript
if (movingRight === true) {
  movingRight = false
} else {
  movingRight = true
}
```

Dar există o cale mai elegantă de a face asta, și anume să folosim același semn de exclamare, bang:

```javascript
movingRight = !movingRight
```

Și asta o inversează. `!movingRight` înseamnă opusul a ceea ce era înainte.

Deci dacă `movingRight` era adevărată, acum este falsă. Dacă era falsă, acum este adevărată. Jiki ia ce se află acum în cutie, iar bang-ul îi spune să găsească opusul. Opusul lui adevărat este fals. Opusul lui fals este adevărat, iar apoi pune valoarea înapoi în cutie. Este exact la fel ca acea condiție `if`/`else` mai lungă, doar că se scrie mult mai curat și mai concis.
