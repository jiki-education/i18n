---
title: "Nadovezivanje stringova"
description: "Dodavanje stringova pomoću `+` kojim se fiksni tekst i varijable lijepe u jedan dulji string."
en_md5: 0e6c7a941a1fb1161445da27a4d7e818
---

Već znaš što su stringovi. To su papirići na kojima piše tekst.

Do sada svaki string koji koristiš upisuješ izravno. Što se dogodi ako želiš sastaviti string na temelju varijabli ili uvjeta? Kako to postižemo?

Postoje dva načina.

Prvi se zove nadovezivanje stringova (_string concatenation_ na engleskom), što je otmjen i pomalo zbunjujuć način da se kaže da se dva stringa nadovežu jedan na drugi.

Zamisli da imaš dvije riječi, `"hello"` (zdravo) i `"world"` (svijet), i da želiš stvoriti string koji sadrži `"hello world"`.

Možeš jednostavno napisati `"hello world"` kao jedan string, ali možeš napisati i `"hello " + "world"`, i to će ti dati isti string.

Naravno, u ovom scenariju to i nije baš korisno. Ali što ako imamo varijablu s nečijim imenom i želimo tu osobu pozdraviti?

Zamisli da imamo varijablu koja se zove `name` (ime), a u njoj je ponekad `"Jeremy"` (ime Jeremyja), a ponekad `"Jiki"` (ime Jikija). Pomoću te varijable želimo reći `"hello Jeremy"` ili `"hello Jiki"`.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-concatenation/jiki-name-box.webp"
  alt="Jiki drži kutiju s naljepnicom name, u kojoj mogu biti različite vrijednosti"
  width="207"
  height="400"
/>

Pa, to možemo postići pomoću nadovezivanja:

```javascript
"hello " + name // "hello Jeremy" ili "hello Jiki"
```

To će nam dati `"hello Jeremy"` ili `"hello Jiki"`, ili pozdrav bilo kome drugome, ovisno o tome što je u kutiji `name`.
