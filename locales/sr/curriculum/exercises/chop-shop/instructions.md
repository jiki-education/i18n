---
title: "Šišaona"
description: "Proveri da li frizer ima vremena za još jednog klijenta."
en_md5: c68a8a4856c5249baa901c170035ea78
---

Vodiš mali frizerski salon kome je brzina važnija od kvaliteta. Ljudi možda odu malo nedoterani, ali ne moraju da provedu previše vremena u stolici.

Nudiš nekoliko različitih usluga, od stilizovanja do kompletnog šišanja, a svaka traje različito. Salon radi po principu „ko prvi dođe, prvi dobija uslugu“. Nema zakazivanja.

Pred kraj dana, potreban ti je način da znaš da li imaš vremena za nove ljude koji uđu u salon.

Napiši funkciju koja se zove `canFitIn` (da li može da se uklopi), a prima tri ulaza:

- Prvi je niz stringova sa frizurama koje već imaš u redu.
- Drugi je frizura koju nova osoba želi (string).
- Treći je broj minuta koji su preostali u danu (broj).

Vrati boolean vrednost koja pokazuje da li možeš da uklopiš tu osobu.

Stilovi koje nudiš su:

- Mohawk: 20 minuta
- Slicked-Back Pixie: 15 minuta
- Bob: 25 minuta
- Shave and Polish: 15 minuta
- Afro Trim: 45 minuta
- Up-do: 30 minuta

### Ugnežđeni nizovi

Ovo je prva vežba u kojoj imaš posla sa nizom koji sadrži druge nizove kao elemente. Takve nizove zovemo „ugnežđeni nizovi“. Ugnežđeni nizovi su isti kao i svaki drugi niz, ali umesto da sadrže stringove ili brojeve, oni sadrže druge nizove.

Pogledaj niz `cuts` (frizure). On sadrži druge nizove, po jedan za svaku frizuru, a svaki od tih nizova ima dva elementa: ime i trajanje.

Najlakše je ovde da zamisliš unutrašnje nizove, parove imena i trajanja, a zatim da ih zamisliš sve zajedno grupisane u drugom nizu.

Indeksiranje radi isto kao i svuda drugde, ali možeš da povežeš indekse jedan za drugim ovako...

```javascript
let cuts = [
  ["Mohawk", 20],
  ["Slicked-Back Pixie", 15],
  ["Bob", 25],
  //...
]

cuts[0] // ["Mohawk", 20]
cuts[0][0] // "Mohawk"
cuts[0][1] // 20
cuts[2][0] // "Bob"
```
