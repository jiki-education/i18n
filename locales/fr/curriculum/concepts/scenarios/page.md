---
title: "Les scénarios"
description: "Les différentes conditions de départ dans lesquelles un exercice exécute ton unique morceau de code, pour t'obliger à le faire fonctionner dans chacune d'elles."
en_md5: d5c4ee54eed8083e13f18bb7d256b86d
---

Chaque exercice s'accompagne de plusieurs scénarios, autrement dit de différentes situations que ton code doit gérer.

Tu les verras sous la forme de petits boutons juste au-dessus de la sortie de chaque exercice. Chaque bouton correspond à un scénario différent. Ton travail consiste à écrire du code qui fonctionne pour tous les scénarios, pas seulement pour le premier. Répétons-le : tu écris ton code une seule fois, mais ce même code s'exécute pour chaque scénario. La différence, c'est que chaque scénario peut être configuré un peu différemment, ou que les fonctions à ta disposition peuvent renvoyer des valeurs légèrement différentes selon le scénario dans lequel tu te trouves.

<img
  class="concept-image"
  src="/static/images/concept-assets/scenarios/scenario-buttons.webp"
  alt="La rangée de boutons de scénarios juste au-dessus de la sortie d'un exercice, entourée pour la mettre en évidence"
  width="500"
  height="318"
/>

Prenons l'exemple d'un jeu de golf. Tu pourrais avoir à faire varier la distance sur laquelle une balle roule en fonction de la valeur de retour (_return value_ en anglais) d'une fonction appelée `getShotLength` (longueur du coup), qui t'indique la puissance du coup du golfeur. Imagine que le joueur ait dû balayer l'écran de son téléphone pour indiquer la longueur de son coup.

<img
  class="concept-image"
  src="/static/images/concept-assets/scenarios/golf-game.webp"
  alt="Une scène de jeu de golf avec un golfeur, une balle et un drapeau planté dans le trou, à droite"
  width="412"
  height="400"
/>

C'est par cette fonction que le résultat te parvient. Ainsi, dans un scénario, tu peux utiliser la fonction `getShotLength`, et elle renverra `23`, un petit balayage. Dans un autre, elle renvoie `70`, un grand balayage. Dans un autre encore, elle renvoie `45`. Ton code doit faire rouler la balle sur la bonne distance dans chaque scénario, avec un seul programme, un seul et même code. Tu devras utiliser la fonction `getShotLength` pour connaître la longueur du coup, puis faire rouler la balle jusqu'à cet endroit.

```javascript
let distance = getShotLength()
```

Les scénarios garantissent que ton code fonctionne vraiment correctement. Écrire du code qui fonctionne dans une situation précise, c'est assez facile. Écrire du code qui fonctionne dans de nombreuses situations différentes, c'est bien plus difficile, et bien plus précieux. Quand tu résous un exercice, commence par le premier scénario et fais-le fonctionner, puis passe au suivant et fais-le fonctionner à son tour. Quand ton code casse dans un nouveau scénario, demande-toi ce qui change et comment ton code doit s'adapter.
