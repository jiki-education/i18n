---
title: "Cuvântul-cheie `else`"
description: "Adăugarea unei clauze `else` după un `if`, ca un alt bloc de cod să ruleze atunci când condiția se dovedește falsă."
en_md5: a3d7b0672bd9c022675831044c5610ed
---

Condițiile `if` îți permit să verifici anumite lucruri și să rulezi cod doar atunci când ceva este adevărat. Acum hai să îl cunoaștem pe complicele lui `if`: `else`.

Cu o condiție (engl. _if statement_), Jiki rulează blocul de cod atunci când condiția este adevărată și sare peste acel bloc când este falsă. Dar dacă vrei ca Jiki să facă un lucru atunci când condiția este adevărată și altceva când este falsă? Pentru asta există `else`. Putem pune o clauză `else` (engl. _else clause_) după acolada de închidere a lui `if`, iar Jiki o va rula dacă condiția din `if` este falsă. Așa că, revenind la exemplul cu portarul de la club, avem acum opțiunea să deschidem ușa sau să întoarcem pe cineva din drum, ceea ce e probabil mai bine decât să îl ignorăm complet, cum făceam înainte. Gândește-te la asta ca la o bifurcație de drum. Jiki ajunge la bifurcație, verifică condiția, iar apoi poate merge într-o parte dacă e adevărată sau în cealaltă parte dacă e falsă. Dar nu merge niciodată în ambele.

```javascript
if (age >= 21) {
  openDoor()
} else {
  turnAway()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/else/fork-in-the-road.webp"
  alt="O bifurcație de drum la ușa clubului: deschide ușa când condiția este adevărată, întoarce persoana din drum când este falsă"
  width="500"
  height="332"
/>

Dar dacă ai mai mult de două posibilități? Imaginează-ți că portarul nostru vinde bilete. Sub treisprezece ani, primești un bilet de copil. Între treisprezece și douăzeci de ani, primești un bilet de adolescent. Douăzeci de ani sau peste, e bilet de adult. Așa că ai acum trei rezultate diferite. Pentru asta, putem adăuga o altă condiție `if` după `else`. Deci putem spune: „Dacă asta, atunci fă asta. Iar dacă asta, fă asta. Altfel, fă asta.” Așa că, în acest exemplu, Jiki va vedea `if`-ul și va verifica prima condiție. Este șaisprezece mai mic decât treisprezece? Nu. Așa că trece mai departe la `else if`. Este șaisprezece mai mic decât douăzeci? Da, este adevărat. Așa că rulează acel bloc și dă un bilet de adolescent. Dar apoi a terminat. Nu verifică nimic altceva. Nu se uită deloc la `else`-ul de la final. Odată ce Jiki găsește o condiție adevărată, rulează acel bloc și sare peste tot restul de dedesubt.

```javascript
if (age < 13) {
  childTicket()
} else if (age < 20) {
  teenTicket()
} else {
  adultTicket()
}
```

Ăsta e lucrul esențial de înțeles. Doar un singur bloc rulează vreodată. Jiki parcurge acest lanț de sus în jos, găsește prima condiție adevărată, rulează acel bloc și trece mai departe.

Acum, e un lucru pe care trebuie să îl înțelegi cu adevărat, pentru că aici multă lume se încurcă. Există o diferență subtilă, dar foarte importantă, între a scrie două condiții `if` separate și a folosi `else if`. Așa că imaginează-ți că facem un program care oferă fie un premiu de bază, fie un premiu bonus, în funcție de scorul cuiva. Uită-te la aceste două variante. Una folosește `else if`, cealaltă folosește două condiții `if` separate. Ce se va întâmpla diferit?

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

Deci în primul caz, cu `else if`, verificăm dacă scorul e mare și dăm premiul, iar apoi nu mai rulăm `else if`-ul. Așa că persoana cu un scor peste o sută primește doar premiul bonus.

Dar în al doilea exemplu, cele două `if`-uri sunt complet independente. Ambele vor rula și ambele vor fi adevărate. Așa că persoana de aici primește două premii. În primul caz, un premiu. În al doilea, două premii. Stai o clipă și asigură-te că ai înțeles bine asta.

De asemenea, e interesant de observat că oricare dintre variante poate fi corectă, în funcție de felul în care e gândit jocul. Poate concurentul primește un premiu normal și unul bonus, sau poate e pur și simplu promovat la premiul bonus. Niciuna dintre cele două bucăți de cod nu e corectă sau greșită. Sunt doar utile în situații diferite. Dar trebuie să știi pe care vrei să o folosești.
