---
title: "Folosirea operatorului `%` pentru restul împărțirii"
description: "Folosirea operatorului `%` ca să afli ce rămâne după o împărțire, lucru folosit adesea ca să verifici dacă un număr este par sau impar."
en_md5: 4955abecb626b8eff02ee7484e2065dd
---

Până acum am folosit adunarea, scăderea, înmulțirea și împărțirea când am făcut calcule. Acum hai să mai introducem unul: operatorul de rest (engl. _remainder_).

Operatorul de rest are rolul de a-ți da restul, logic, atunci când împarți două numere, și îl scriem cu semnul procent. Deci dacă scriem:

```javascript
10 % 4 // 2
```

spunem sau întrebăm: „Ce rămâne când împărțim 10 la 4?” Și răspunsul este doi. Imaginează-ți că ai 10 bomboane sau alune și vrei să le împarți în mod egal la patru persoane. Fiecare persoană primește două, iar la final rămân două. Și partea aceea rămasă este restul. Asta îți dă semnul procent.

<img
  class="concept-image"
  src="/static/images/concept-assets/modulo/sharing-candies.webp"
  alt="Un rând de zece bomboane împărțite în mod egal la patru persoane, cu două rămase ca rest"
  width="500"
  height="22"
/>

Unul dintre motivele pentru care îl folosim destul de des în cod este că putem afla dacă ceva se împarte exact sau nu, iar tiparul cel mai des întâlnit aici este să stabilim dacă avem un număr par sau unul impar. Numerele pare, după cum știi, se împart toate exact la doi. Numerele impare lasă toate un rest de unu când le împarți la doi.

Așa că dacă iei patru, șase sau opt, când îi împarți la doi nu rămâne nimic, pe când cinci, șapte și nouă, când îi împarți la doi, lasă toate un rest de unu la final. Deci scriind `if something % 2 === 0`, spunem: „Oare acest ceva este un număr par?” Și asta poate fi util pentru o grămadă de lucruri. Imaginează-ți că faci dungi de culori diferite sau că împarți o coadă în două, trimițând fiecare persoană pe una dintre cele două direcții pe măsură ce se apropie de tine.

Un lucru de reținut: s-ar putea să auzi oameni care numesc acest cuvânt-cheie pentru rest „operatorul modulo”. Modulo și restul sunt practic identice. Există și câteva diferențe mărunte de care, foarte probabil, nu va trebui să te preocupi niciodată, așa că deocamdată să-l privim ca operatorul de rest, pentru că așa e mult mai simplu.
