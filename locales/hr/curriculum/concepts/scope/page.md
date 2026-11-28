---
title: "Doseg"
description: "Kako vitičaste zagrade stvaraju vlastiti niz polica, pa varijable žive samo dok traje njihov blok."
en_md5: 4d5fc2d1d304725660102e9aaceea4c3
---

Zamisli kôd koji pri svakom izvršavanju nacrta krug na drugom mjestu, a želimo nacrtati 10 krugova na različitim mjestima. To bismo mogli spojiti s petljom. Ali ako dobro paziš, možda primjećuješ nešto čudno.

```javascript
repeat(10) {
  let left = Math.randomInt(0, 100)
  let top = Math.randomInt(0, 100)
  circle(left, top, 5, "blue")
}
```

Na početku smo rekli da postoji pravilo: kutije na Jikijevim policama moraju imati jedinstvena imena. A ključna riječ `let` stvara novu kutiju svaki put kad je upotrijebiš.

Ali budući da je `let` unutar petlje, Jiki će stvoriti novu kutiju svaki put kad se petlja izvrši.

Pa je li kôd pogrešan ili se ovdje događa nešto drugo čudno?

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/thinking-jiki.webp"
  alt="Jiki zbunjeno gleda i pita se je li kôd pogrešan"
  width="384"
  height="400"
/>

Pa, ispada da je kôd ispravan. To je posve valjan JavaScript i radi zahvaljujući pojmu koji se zove doseg (_scope_ na engleskom), odnosno određivanju dosega.

Doseg će ti se na početku vjerojatno činiti sasvim jednostavnim, ali mogu ti zajamčiti da će ti stvarati probleme do kraja karijere. Čak i najiskusniji programeri nailaze na probleme s dosegom, a JavaScript je jedan od najkompliciranijih jezika po tom pitanju. Govorim ti to da se ne osjećaš loše kad naletiš na probleme s dosegom. Ali dobro pazi i na ovaj dio jer je važan.

Kad u kôdu vidiš vitičastu zagradu, ona stvara ono što se zove novi doseg. Što to znači? Možeš zamisliti da Jiki, kad god vidi vitičastu zagradu, u svojoj radionici stvori novi mali niz polica. I sve kutije koje stvori dok radi, dok izvršava kôd unutar tih vitičastih zagrada, te kutije, te nove kutije idu na novi mali niz polica, a ne na glavni.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves.webp"
  alt="Jikijev glavni niz polica uz novi manji niz polica koji je stvorila vitičasta zagrada"
  width="500"
  height="205"
/>

I kad Jiki dođe do odgovarajuće završne vitičaste zagrade, baci sve kutije koje su na tom pomoćnom nizu polica.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves-loop-end.webp"
  alt="Jiki baca kutije s pomoćnog niza polica u smeće kad dođe do završne vitičaste zagrade"
  width="500"
  height="237"
/>

Tako u svakoj ovakvoj petlji možemo stvoriti kutije koje traju samo onoliko koliko traje jedno izvršavanje petlje. Kutije `left` (lijevo) i `top` (gore) koje ovdje vidiš traju samo do završne vitičaste zagrade, a onda ih Jiki baci. I Jiki dođe do te završne vitičaste zagrade svaki put kad se petlja izvrši. Dakle, 10 puta u ovom programu. Znači, 10 puta će stvoriti kutiju koja se zove `left` i opet je baciti.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/left-top-boxes-color.webp"
  alt="Dvije kutije s naljepnicama left i top koje traju samo jednu iteraciju petlje"
  width="500"
  height="187"
/>

Kad stvaraš varijablu, moraš odlučiti koliko dugo želiš da postoji. Ako želiš da živi dugo, mora stajati izvan svih vitičastih zagrada. Ako želiš da traje samo jednu iteraciju, jedno izvršavanje petlje, stavi je unutar vitičastih zagrada. Vidiš kako sve to može malo zbuniti? Zato je za početak lijepo pravilo držati sve varijable pri vrhu kôda, izvan vitičastih zagrada, a unutar zagrada ih samo ažurirati. Na primjer, gornji bismo kôd mogli napisati samo s jednom kutijom `left` i jednom `top`, postavljenima na nulu na početku, pa ih u petlji svaki put ažurirati. I to je posve valjano. Nijedan pristup nije ni ispravan ni pogrešan. Postoje najbolje prakse, ali o njima ćemo učiti kasnije. Za sada eksperimentiraj, zabavi se, vidi što ti najbolje odgovara i ne brini previše zbog toga.
