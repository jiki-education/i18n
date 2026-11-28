---
title: "Template-uri de string"
description: "Folosirea backtick-urilor și a substituenților `${...}` ca să pui valori direct într-un string, în loc să lipești bucăți cu `+`."
en_md5: 7fd0e09ac3b32db5f159f8e772872104
---

Putem folosi ceva numit _template literals_ (literaluri șablon) ca să introducem stringuri în alte stringuri.

Așadar, în loc să adunăm stringuri, putem avea un string sau un template care are locuri libere pentru alte stringuri în interiorul lui.

Pentru asta folosim backtick-uri (semnul `` ` ``) în loc de ghilimele.

Backtick-urile sunt liniuțe scrise invers, după cum îi spune și numele, dar e foarte posibil să nu le fi folosit niciodată până acum, așa că trebuie să găsești tasta potrivită pe tastatură.

Le folosim ca să creăm un template care poate conține alte stringuri. Iar apoi, ca să introducem un string în template, folosim o altă sintaxă ciudată, cu semn de dolar și acolade. De exemplu, ca să obținem același lucru ca `"hello " + name`, pe care tocmai l-am văzut la concatenare, am putea scrie:

```javascript
`hello ${name}` // "hello Jeremy" sau "hello Jiki"
```

<img
  class="concept-image"
  src="/static/images/concept-assets/string-templates/jiki-name-box.webp"
  alt="Jiki ținând o cutie cu eticheta name, valoarea care este introdusă în template"
  width="207"
  height="400"
/>

Și face exact același lucru ca adunarea stringurilor.

Dar când ai mai multe stringuri care trebuie puse toate la un loc, metoda asta poate fi mult mai eficientă.

O să îți ia puțin timp să te obișnuiești cu exact această sintaxă, dar nu e nimic chiar atât de complicat în ea.
