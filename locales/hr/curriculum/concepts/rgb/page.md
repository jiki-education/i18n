---
title: "RGB boje"
description: "Miješanjem crvenog, zelenog i plavog svjetla, od 0 do 255, na zaslonu nastaje bilo koja boja koju želiš."
en_md5: 8ed038f6d17072b6fb6eaae6bef15c2c
---

RGB nam omogućuje da o bojama razmišljamo kao o mješavini crvene, zelene i plave. To je ono što RGB znači: crvena (_red (R)_ na engleskom), zelena (_green (G)_ na engleskom) i plava (_blue (B)_ na engleskom). Ako se sjećaš miješanja boja u školi, ideja je slična, samo što ovdje ne miješamo boju, nego svjetlo.

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-mixing-circles.webp"
  alt="Tri kruga koja se preklapaju: crveno, zeleno i plavo svjetlo miješa se u žuto, magenta, cijan i bijelo"
  width="500"
  height="390"
/>

U mnogim vježbama imat ćeš funkciju koja se zove `rgb(red, green, blue)`. Ona će kao ulaz primati tri broja, jedan za crvenu, jedan za zelenu i jedan za plavu, a vratit će boju.

Brojevi koje možeš upotrijebiti kao ulaz kreću se od nule do `255`. Nula znači da te boje ne želimo nimalo, a `255` znači da je pomiješamo što je više moguće. Ako, dakle, funkciji `rgb` kao ulaz damo `255`, nulu i nulu, time kažemo da želimo svu crvenu. Sjeti se da je `255` najveći broj koji možeš upisati. Ali ne želimo nimalo zelene ni plave, pa su oba ta broja nula. Tako dobijemo crvenu, možemo je spremiti u varijablu i onda upotrijebiti u funkciji `circle`, baš kao što smo dosad radili s imenovanim stringovima. A što ako funkciji `rgb` damo nulu, `255` i nulu? Sad kažemo: nimalo crvene, sve zelene, nimalo plave. I dobijemo zeleni krug. Što ako želimo žutu? Žuta je mješavina crvene i zelene. Zato možemo reći: daj mi svu crvenu, svu zelenu i nimalo plave, i to će nam dati žutu. Možemo koristiti i manje brojeve. Ako želimo malo crvene, nimalo zelene i puno plave, dobit ćemo ljubičastu. A puno crvene, malo zelene i malo više plave daje nam ružičastu. To je, dakle, RGB. Miješamo crvenu, zelenu i plavu i dobivamo različite kombinacije.

```javascript
rgb(255, 0, 0) // crvena
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-red.webp"
  alt="Crveni krug koji daje rgb(255, 0, 0): sve crveno, nimalo zelene ni plave"
  width="436"
  height="400"
/>

```javascript
rgb(255, 255, 0) // žuta
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-yellow.webp"
  alt="Žuti krug koji daje rgb(255, 255, 0): sve crvene i sve zelene, nimalo plave"
  width="436"
  height="400"
/>

```javascript
rgb(230, 50, 170) // ružičasta
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-pink.webp"
  alt="Ružičasti krug koji daje rgb(230, 50, 170): puno crvene, malo zelene i nešto plave"
  width="436"
  height="400"
/>

RGB je odličan kad želiš prilagoditi jednu konkretnu komponentu: koliko crvene, koliko zelene, koliko plave.
