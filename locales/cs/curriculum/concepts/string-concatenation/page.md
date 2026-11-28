---
title: "Spojování řetězců"
description: "Spojování řetězců pomocí `+`, které slepí pevný text a proměnné do jednoho delšího řetězce."
en_md5: 0e6c7a941a1fb1161445da27a4d7e818
---

Už víš, co jsou řetězce. Jsou to papírky s textem.

Dosud šlo vždy o řetězec napsaný přímo v kódu. Co se ale stane, když chceš sestavit řetězec z proměnných nebo na základě nějaké podmínky? Jak na to?

Jsou na to dva způsoby.

Prvnímu z nich se říká spojování řetězců (anglicky _string concatenation_). Je to učeně znějící a trochu matoucí název pro to, když k sobě přidáš dva řetězce.

Představ si, že máš dvě slova, `"hello"` a `"world"`, a chceš vytvořit řetězec, který obsahuje `"hello world"`.

Můžeš prostě napsat `"hello world"` jako jeden řetězec. Ale stejně tak můžeš napsat `"hello " + "world"` a dostaneš ten samý řetězec.

V tomhle případě to samozřejmě moc užitečné není. Ale co kdybychom měli proměnnou se jménem nějakého člověka a chtěli ho pozdravit?

Představ si tedy, že máme proměnnou `name` (jméno), která někdy obsahuje `"Jeremy"` (jméno Jeremy) a jindy `"Jiki"` (jméno Jiki). Chceme pomocí té proměnné říct `"hello Jeremy"`, nebo `"hello Jiki"`.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-concatenation/jiki-name-box.webp"
  alt="Jiki drží krabici se štítkem name, která v sobě může mít různé hodnoty"
  width="207"
  height="400"
/>

No a tohle zvládneme právě pomocí spojování řetězců:

```javascript
"hello " + name // "hello Jeremy" nebo "hello Jiki"
```

Dostaneme buď `"hello Jeremy"`, nebo `"hello Jiki"`, nebo pozdrav pro kohokoli dalšího, podle toho, co je v krabici `name`.
