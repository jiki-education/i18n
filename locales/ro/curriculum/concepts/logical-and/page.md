---
title: "Operatorul `&&` (și)"
description: "Combinarea a două condiții cu `&&`, astfel încât întreaga condiție să fie adevărată doar când ambele părți sunt adevărate."
en_md5: cef8d76c4235e85573c3eeede294ab72
---

Dacă ți-aș cere să deschizi ușa doar dacă cineva are peste 20 de ani, probabil ai ști ce să faci. Dar dacă ar trebui să verifici dacă cineva are peste 20 de ani _și_ poartă ținuta potrivită? Adică trebuie să verifici două condiții diferite deodată. Cum ai face asta?

Poate ai putea folosi un `if` imbricat (engl. _nested if statement_), cam ca buclele imbricate de mai devreme. Ai putea spune așa: dacă `age` este mai mare decât `20`, intrăm în acest bloc de cod, apoi încă un `if` care verifică dacă `outfit` este egal cu `"disco"`, apoi încă o acoladă și un bloc de cod nou. Ar funcționa, dar devine destul de încâlcit, mai ales când ai multe condiții de verificat.

Din fericire, există o cale mai simplă: să putem avea condiții formate din mai multe părți. În loc să verificăm un singur lucru în condiție, putem verifica două, trei sau mai multe. Și ca să facem asta, trebuie să folosim cuvântul-cheie `and`. Din păcate, în JavaScript cuvântul-cheie and nu este chiar cuvântul and, cum se întâmplă în alte limbaje. În schimb, trebuie să scrii două ampersanduri unul lângă altul. Va trebui pur și simplu să ții minte asta. E enervant, dar asta e, și te vei obișnui.

Așa că putem folosi lucrul acesta ca să construim o condiție mai complexă. Putem spune: dacă `age` este mai mare decât `20` și `outfit` este `"disco"`, atunci mergem mai departe. Dacă `age` este mai mic decât `20` sau `outfit` nu este `"disco"`, atunci întreaga instrucțiune, întreaga condiție este falsă. Dacă ai studiat logică, poate ai construit circuite electronice sau ai făcut matematică mai avansată, lucrurile astea ți se vor părea foarte naturale. Dacă nu, le vei prinde repede.

```javascript
if (age > 20 && outfit === "disco") {
  openDoor()
}
```

E un lucru care îi încurcă pe mulți, atât la and, cât și la or: fiecare parte a lui and/or (și/sau) trebuie să fie o comparație completă. Așa că, chiar dacă compari aceeași variabilă pe ambele părți, trebuie să o repeți. Nu poți scrie `if age is greater than 13 and less than 20`. Trebuie să scrii `if age is greater than 13 and age is less than 20`. Ai nevoie de comparații complete pe ambele părți.

```javascript
if (age > 13 && age < 20)
```
