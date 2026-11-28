---
title: "Operátor `!` (negace)"
description: "Jak pomocí `!` překlopit Boolean: pravda se změní na nepravdu a nepravda na pravdu. Hodí se na přepínání stavů nebo obracení podmínek."
en_md5: 5d752c7a85e6e17d914c73c83429de80
---

Dosud jsme při porovnávání používali tři rovnítka, abychom zjistili, jestli se věci rovnají. Někdy ale chceme zjistit, jestli se věci nerovnají, a na to se používá vykřičník a za ním dvě rovnítka. A obecně platí, že v programování vykřičník, anglicky _bang_ (tak mu myslím říkají naši američtí přátelé), znamená negaci. Představ si, že pracuješ v obchodě a vedení se rozhodlo, že dovnitř nesmí nikdo v diskotékovém oblečení.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/shop-bouncer.webp"
  alt="Vyhazovač ve dveřích obchodu kontroluje oblečení lidí ve frontě"
  width="451"
  height="400"
/>

Můžeme říct: „Když oblečení není disco, otevři dveře.“ Příkaz if funguje úplně stejně.

```javascript
if (outfit !== "disco") {
  openDoor()
}
```

Jde jen o to, že podmínka vrátí pravdu, když se věci liší, a nepravdu, když jsou stejné. To samé bychom mohli napsat i takto: „Když je oblečení disco, nedělej nic. Jinak otevři dveře.“ Ale obecně je jednodušší a přehlednější použít operátor `not` a vyjádřit tak přímo, co máš na mysli.

Ještě jedna věc, která s tím souvisí. Někdy máš proměnnou, která je pravda, a chceš ji překlopit na nepravdu. Jindy máš něco, co je nepravda, a chceš to překlopit na pravdu. Přesně takhle se dá udržovat přehled o nějakém stavu. Představ si, že máme něco, co poskakuje zleva doprava, a proměnnou `movingRight` (pohyb doprava), která je pravda ve chvíli, kdy se máme pohnout doprava. Ale když narazíš na pravý okraj, budeš ji chtít přepnout (anglicky _toggle_) na nepravdu.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/pong-court.webp"
  alt="Hřiště ve stylu Pongu s pálkami a míčkem poskakujícím ze strany na stranu, ilustruje přepínání proměnné movingRight"
  width="500"
  height="352"
/>

Mohli bychom to udělat takhle: „Když se `movingRight` rovná pravdě, `movingRight` se rovná nepravdě. Jinak se `movingRight` rovná pravdě.“ To je jeden způsob, jak proměnnou přepnout. Jiki se tedy podívá na `movingRight`, zjistí, jestli je pravda, nebo nepravda, pak vymyslí opak a tu hodnotu vrátí zpátky do krabice.

```javascript
if (movingRight === true) {
  movingRight = false
} else {
  movingRight = true
}
```

Ale je tu úhlednější způsob, a to použít stejný vykřičník neboli bang:

```javascript
movingRight = !movingRight
```

A tím se to překlopí. `!movingRight` znamená opak toho, co tam bylo předtím.

Takže když `movingRight` byla pravda, teď je to nepravda. Když to byla nepravda, teď je to pravda. Jiki vezme, co je právě teď v krabici, a ten vykřičník mu řekne, ať najde opak. Opak pravdy je nepravda. Opak nepravdy je pravda. A pak to zase vrátí do krabice. Je to úplně to samé jako ten delší příkaz if/else, jen se to píše mnohem úhledněji a stručněji.
