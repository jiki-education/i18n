---
title: "Operator `!` (not)"
description: "Kako pomoću `!` preokrenuti Boolean: točno postaje netočno, a netočno postaje točno, što je korisno za preklapanje ili invertiranje provjera."
en_md5: 5d752c7a85e6e17d914c73c83429de80
---

Do sada smo, kad smo uspoređivali stvari da vidimo jesu li jednake, koristili tri znaka jednakosti. Ponekad pak želimo provjeriti jesu li stvari različite, i za to koristimo uskličnik iza kojeg slijede dva znaka jednakosti. I općenito, u programiranju, uskličnik ili bang, kako ga, čini mi se, zovu naši američki prijatelji, znači negaciju. Zamisli da radiš u trgovini i da je uprava odlučila da disco odjeća nije dopuštena.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/shop-bouncer.webp"
  alt="Izbacivač na vratima trgovine provjerava odjeću ljudi u redu"
  width="451"
  height="400"
/>

Možemo reći: „Ako odjeća nije disco, otvori vrata." Naredba `if` radi posve jednako.

```javascript
if (outfit !== "disco") {
  openDoor()
}
```

Samo što uvjet vraća točno ako su stvari različite, a netočno ako su iste. Isto bismo mogli zapisati i ovako: „Ako je odjeća disco, ne radi ništa. Inače otvori vrata." No općenito je lakše i čišće upotrijebiti operator `not`, pa da zaista znaš i kažeš ono što misliš.

Još jedna stvar u vezi s tim. Ponekad ćeš imati varijablu koja je točna i htjeti je preokrenuti u netočno, ili ćeš imati nešto što je netočno i htjeti to preokrenuti u točno, a to nam može poslužiti da nešto pratimo. Zamisli da imamo nešto što poskakuje slijeva nadesno i varijablu koja se zove `movingRight` (kreće se udesno), a koja je točna kad se trebaš pomaknuti udesno. Ali kad je želiš preklopiti (_toggle_ na engleskom) na netočno, kad udariš u desni rub.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/pong-court.webp"
  alt="Teren u stilu Ponga s reketima i lopticom koja poskakuje s jedne strane na drugu i prikazuje preklapanje varijable movingRight"
  width="500"
  height="352"
/>

To možemo napraviti ovako: „Ako je `movingRight` točno, `movingRight` postaje netočno. Inače `movingRight` postaje točno." To je jedan način preklapanja varijable. Jiki će pogledati `movingRight`, vidjeti je li točno ili netočno, izračunati suprotno i vratiti tu vrijednost u kutiju.

```javascript
if (movingRight === true) {
  movingRight = false
} else {
  movingRight = true
}
```

No postoji uredniji način, a to je da upotrijebiš isti uskličnik ili bang:

```javascript
movingRight = !movingRight
```

I to ga preokrene. `!movingRight` znači suprotno od onoga što je prije bilo.

Dakle, ako je `movingRight` prije bilo točno, sad je netočno. Ako je bilo netočno, sad je točno. Jiki uzme ono što je trenutačno u kutiji, a taj mu uskličnik kaže da nađe suprotno. Suprotno od točnog je netočno. Suprotno od netočnog je točno, i onda to vrati u kutiju. To je posve isto kao ona dulja naredba `if`/`else`, samo je mnogo urednije i sažetije za napisati.
