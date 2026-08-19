---
title: "Concatenazione di stringhe"
description: "Concatenare stringhe con l'operatore `+` per unire testo fisso e variabili in un'unica stringa più lunga."
en_md5: 0e6c7a941a1fb1161445da27a4d7e818
---

Sai già cosa sono le stringhe: piccoli pezzi di carta con del testo sopra.

Finora hai sempre digitato le tue stringhe direttamente. Ma cosa succede se vuoi costruirne una usando variabili o condizioni? Come si fa?

Ci sono due modi.

Il primo si chiama concatenazione di stringhe, un termine un po' tecnico e leggermente confuso che significa semplicemente unire due stringhe tra loro.

Immagina di avere due parole, `"hello"` (ciao) e `"world"` (mondo), e di voler creare una stringa che contenga `"hello world"`.

Potresti semplicemente scrivere `"hello world"` come un'unica stringa, ma potresti anche scrivere `"hello " + "world"`, ottenendo esattamente la stessa cosa.

Certo, in questo caso non è molto utile. Ma se avessimo una variabile con il nome di qualcuno e volessimo salutarlo?

Immaginiamo di avere una variabile chiamata `name` (nome), che contiene `"Jeremy"` (il nome Jeremy) a volte e `"Jiki"` (il nome Jiki) altre volte. Vogliamo dire `"hello Jeremy"` o `"hello Jiki"` usando quella variabile.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-concatenation/jiki-name-box.webp"
  alt="Jiki che regge una scatola etichettata 'name', che può contenere valori diversi"
  width="207"
  height="400"
/>

Bene, possiamo ottenere questo risultato usando il concetto di concatenazione:

```javascript
"hello " + name // "hello Jeremy" or "hello Jiki"
```

Questo ci darà `"hello Jeremy"` o `"hello Jiki"`, oppure un saluto a chiunque altro, a seconda di cosa c'è dentro la scatola `name`.
