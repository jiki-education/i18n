---
title: "Scenariji"
description: "Različiti početni uvjeti pod kojima vježba pokreće tvoj jedan jedini kôd, pa on mora raditi za sve njih."
en_md5: d5c4ee54eed8083e13f18bb7d256b86d
---

Svaka vježba dolazi s različitim scenarijima, različitim situacijama s kojima se kôd mora nositi.

Vidjet ćeš ih kao male gumbe odmah iznad izlaza svake vježbe. Svaki se gumb odnosi na jedan od scenarija. Tvoj je zadatak napisati kôd koji radi za sve njih, ne samo za prvi. Ponovit ću to još jednom. Kôd pišeš jednom, ali se isti taj kôd izvršava za svaki scenarij. Razlika je u tome što je svaki scenarij možda malo drugačije postavljen ili funkcije koje dobiješ vraćaju malo drugačije stvari, ovisno o tome u kojem se scenariju nalaziš.

<img
  class="concept-image"
  src="/static/images/concept-assets/scenarios/scenario-buttons.webp"
  alt="Red gumba za scenarije odmah iznad izlaza vježbe, zaokruženih da se istaknu"
  width="500"
  height="318"
/>

Uzmimo primjer igre golfa. Možda ćeš morati mijenjati koliko daleko se loptica otkotrlja na temelju povratne vrijednosti (_return value_ na engleskom) funkcije koja se zove `getShotLength` (duljina udarca), a koja ti kaže koliko daleko je golfaš udario lopticu. Zamisli da je igrač morao povući prstom po telefonu kako bi rekao koliko daleko je udario.

<img
  class="concept-image"
  src="/static/images/concept-assets/scenarios/golf-game.webp"
  alt="Prizor iz igre golfa s golfašem, lopticom i zastavicom u rupi desno"
  width="412"
  height="400"
/>

Rezultat koji dobiješ natrag dolazi preko te funkcije. Tako u jednom scenariju možeš upotrijebiti funkciju `getShotLength` i ona će vratiti `23`, kratki potez prstom. U drugom vraća `70`, dugi potez prstom. U trećem vraća `45`. Kôd mora otkotrljati lopticu na pravu udaljenost za svaki scenarij sa samo jednim programom, jednim kompletom kôda. Trebat ćeš upotrijebiti funkciju `getShotLength` i vidjeti koliko je udarac otišao, a zatim otkotrljati lopticu do te točke.

```javascript
let distance = getShotLength()
```

Scenariji osiguravaju da kôd doista ispravno radi. Prilično je lako napisati kôd koji radi u jednoj konkretnoj situaciji. Mnogo je teže, ali i mnogo vrijednije, napisati kôd koji radi u puno različitih situacija. Kad rješavaš vježbe, kreni od prvog scenarija. Neka prvo on radi. Zatim prijeđi na sljedeći scenarij i neka radi i on. Kad kôd pukne na nekom drugom scenariju, razmisli što je drukčije i kako se kôd treba prilagoditi.
