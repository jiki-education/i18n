---
title: "Cuvântul-cheie `break`"
description: "Folosirea cuvântului-cheie `break` în corpul unei bucle, ca să ieși imediat din buclă și să treci la codul care vine după ea."
en_md5: bd746b6c93016dcb2789bd26e38ab33a
---

Cuvântul-cheie `break` poate fi folosit oriunde în corpul oricărei bucle.

Bucata dintre acolade, aceea e corpul buclei. Iar când Jiki vede asta, iese imediat din buclă și trece la orice cod vine după buclă.

Deci, dacă avem o constrângere care spune să rulăm bucla asta de 50 de ori, dar vrem să ne oprim dacă utilizatorul trage de cinci ori, putem avea o buclă `for` la început, care numără până la 50.

Dar apoi putem avea o condiție la mijlocul buclei, care verifică dacă utilizatorul a tras de cinci ori, iar dacă a tras, folosim break ca să oprim bucla.

```javascript
for (let i = 0; i < 50; i++) {
  if (numShots >= 5) {
    break; // ieși din buclă
  }
}
```
