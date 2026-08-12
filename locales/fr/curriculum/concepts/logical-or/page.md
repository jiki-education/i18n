---
title: "L'opérateur `||` (OU)"
description: "Combiner deux conditions avec `||` pour que la condition entière soit vraie dès qu'au moins une des deux parties est vraie."
en_md5: e7bc3f103a37719cdf3a77920d09e24e
---

On peut aussi utiliser `or` (ou), et là encore, hélas, il n'existe pas de joli mot-clé « or » en JavaScript. À la place, on doit écrire ces deux barres verticales (_bars_ en anglais) côte à côte, comme ceci : « || », pour signifier « ou ». Ça a l'air bizarre, mais pas tant que ça en réalité. Tu vas t'y habituer.

On peut donc dire que si une personne a plus de 20 ans ou qu'elle est en tenue disco, alors elle peut entrer. On aura ainsi une fête sympa, avec des enfants déguisés en disco et des adultes mal habillés, ce qui semble raisonnable.

```javascript
if (age > 20 || outfit === "disco") {
  openDoor()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-or/party-door.webp"
  alt="Jiki accueillant à la porte d'une fête un mélange d'enfants en tenue disco et d'adultes habillés de façon décontractée"
  width="327"
  height="400"
/>

Il y a une chose qui piège souvent les gens, avec le « et » comme avec le « ou » : chaque côté du et/ou doit être une comparaison complète. Ainsi, même si tu compares la même variable des deux côtés, tu dois la répéter. Tu ne peux pas écrire `if age is less than 13 or greater than 20`. Tu dois écrire `if age is less than 13 or age is greater than 20`. Il faut que les deux côtés soient des comparaisons complètes.

```javascript
if (age < 13 || age > 20)
```

Il faut donc réfléchir aux cas où les deux conditions comptent et à ceux où une seule d'entre elles doit être vraie.
