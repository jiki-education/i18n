---
title: "Folosirea lanțurilor de `else if`"
description: "Înlănțuirea clauzelor `else if` pentru a verifica mai multe condiții în ordine, rulând doar primul bloc a cărui condiție este adevărată."
en_md5: 64274945347d47d67baf3378cf219c9b
---

Ai văzut cum `if` și `else` îți dau două căi: faci un lucru când o condiție este adevărată și altul când este falsă. Dar ce faci dacă ai mai mult de două posibilități?

Imaginează-ți că portarul nostru vinde bilete. Sub treisprezece ani, primești un bilet de copil. Între treisprezece și douăzeci, primești un bilet de adolescent. Douăzeci sau peste, e bilet de adult. Deci acum ai trei rezultate diferite. Pentru asta, putem adăuga încă o condiție `if` după `else`. Așa că putem spune: „Dacă asta, atunci fă asta. `else if` asta, atunci fă asta. `else`, fă asta.” În exemplul acesta, Jiki ajunge la `if` și verifică prima condiție. E șaisprezece mai mic decât treisprezece? Nu. Așa că trece mai departe la `else if`. E șaisprezece mai mic decât douăzeci? Da, e adevărat. Așa că rulează blocul acela și dă un bilet de adolescent. Dar apoi s-a terminat. Nu mai verifică nimic altceva. Nu se uită deloc la ultimul `else`. Odată ce Jiki găsește o condiție adevărată, rulează blocul acela și sare peste tot ce e dedesubt.

```javascript
if (age < 13) {
  childTicket()
} else if (age < 20) {
  teenTicket()
} else {
  adultTicket()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/else-if/tickets.webp"
  alt="Trei bilete cu etichetele COPIL, ADOLESCENT și ADULT, câte unul pentru fiecare rezultat al verificării vârstei"
  width="500"
  height="142"
/>

Ăsta e lucrul esențial de înțeles. Nu rulează niciodată mai mult de un singur bloc. Jiki parcurge lanțul în jos, găsește prima condiție adevărată, rulează blocul acela și trece mai departe.

Acum, mai e un lucru pe care trebuie să-l înțelegi bine, pentru că aici multă lume se încurcă. E o diferență subtilă, dar foarte importantă, între a scrie două condiții `if` separate și a folosi `else if`. Imaginează-ți că facem un program care dă un premiu de bază sau un premiu bonus, în funcție de punctajul cuiva. Uită-te la cele două variante de mai jos. Una folosește `else if`, cealaltă folosește două condiții `if` separate. Ce se va întâmpla diferit?

```javascript
if (score > 100) {
  bonusPrize()
} else if (score > 50) {
  basicPrize()
}
```

```javascript
if (score > 100) {
  bonusPrize()
}
if (score > 50) {
  basicPrize()
}
```

Deci în primul caz, cu `else if`, verificăm dacă punctajul e mare și dăm premiul bonus, iar apoi nu mai rulăm `else if`. Așa că persoana care are peste o sută de puncte primește doar premiul bonus.

Dar în al doilea exemplu, cele două condiții `if` sunt complet independente. Ambele rulează și ambele sunt adevărate. Așa că persoana primește două premii. În primul caz, un premiu. În al doilea, două premii. Oprește-te o clipă ca să te asiguri că ai înțeles bine.

De asemenea, e interesant de observat că oricare dintre variante poate fi corectă, în funcție de cum e gândit jocul. Poate concurentul primește un premiu normal plus unul bonus, sau poate trece direct la premiul bonus. Niciuna dintre cele două bucăți de cod nu e corectă sau greșită. Sunt doar utile în situații diferite. Dar trebuie să știi pe care vrei să o folosești.
