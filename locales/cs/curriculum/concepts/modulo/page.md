---
title: "Používání operátoru `%` pro zbytek po dělení"
description: "Používání operátoru `%` ke zjištění toho, co zbyde po dělení, což se často používá ke kontrole, jestli je číslo sudé, nebo liché."
en_md5: 4955abecb626b8eff02ee7484e2065dd
---

Zatím jsme používali sčítání, odčítání, násobení a dělení, když jsme počítali. Teď si představíme ještě jeden, operátor zbytku (anglicky _remainder_).

Operátor zbytku má na starosti přesně to, co říká jeho název: zbytek po dělení dvou čísel. Zapisujeme ho znakem procenta. Takže když napíšeme:

```javascript
10 % 4 // 2
```

ptáme se: „Co zbyde, když vydělíme 10 čtyřmi?“ A odpověď je dva. Představ si, že máš 10 bonbonů nebo oříšků a chceš se o ně rozdělit rovným dílem mezi čtyři lidi. Každý dostane dva a nakonec zbudou dva. A ten kousek, co zbyl, to je zbytek. Přesně ten ti znak procenta dá.

<img
  class="concept-image"
  src="/static/images/concept-assets/modulo/sharing-candies.webp"
  alt="Řada deseti bonbonů, které se rovným dílem dělí mezi čtyři lidi, a dva zbydou jako zbytek"
  width="500"
  height="22"
/>

Jeden z důvodů, proč tohle v kódu používáme docela často, je to, že díky tomu poznáme, jestli se něco dělí beze zbytku, nebo ne. A nejčastější vzorec, na který narazíš, je zjišťování, jestli je číslo sudé, nebo liché. Sudá čísla se, jak víš, dělí dvěma beze zbytku. U lichých čísel po dělení dvěma vždycky zbyde jedna.

Takže když vezmeš čtyři, šest nebo osm a vydělíš je dvěma, nic nezbude. Kdežto u pěti, sedmi a devíti, když je vydělíš dvěma, na konci vždy zbyde jedna. Když tedy napíšeme `if something % 2 === 0`, ptáme se: „Je tohle něco sudé číslo?“ A to se hodí na spoustu věcí. Představ si, že tvoříš pruhy různých barev, nebo že rozděluješ frontu na polovinu a každého člověka posíláš jedním ze dvou směrů, jak k tobě přichází.

Jedna poznámka: možná uslyšíš, že lidé tomuhle operátoru zbytku říkají operátor modulo. Modulo a zbytek je v podstatě totéž. Jsou tam drobné rozdíly, kterými se asi nikdy nebudeš muset zabývat, takže o něm prozatím budeme mluvit jako o operátoru zbytku, protože je to prostě mnohem jednodušší.
