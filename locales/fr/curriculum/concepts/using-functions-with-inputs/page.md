---
title: "Les entrées des fonctions"
description: "Mettre des valeurs dans les entonnoirs d'une fonction pour changer ce qu'elle fait à chaque exécution."
en_md5: 0bd82377f2407de5fe030511752d5503
---

L'une des choses les plus puissantes avec les machines, et donc avec les fonctions, c'est que beaucoup d'entre elles te laissent y mettre des informations qui changeront ce qu'elles font une fois lancées.

Jusqu'ici, on a vu des machines qui ressemblent un peu à des boîtes, comme la machine `move` (avancer).

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/move-machine.webp"
  alt="La machine move, une simple boîte sans entonnoir"
  width="322"
  height="400"
/>

Mais certaines machines ont des entonnoirs, comme cette machine `walk` (marcher). La machine `walk` fonctionne exactement comme la machine `move` : elle fait avancer le personnage (_character_ en anglais). Sauf que Jiki peut utiliser l'entonnoir pour préciser de combien de pas ton personnage doit avancer. Ainsi, au lieu d'utiliser trois fois de suite la fonction `move`, `move`, `move`, `move`, tu peux maintenant utiliser la fonction `walk` et demander à Jiki de mettre le nombre « trois » dans la machine.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/walk-machine-slot.webp"
  alt="La machine walk, avec un entonnoir sur le dessus pour le nombre de pas"
  width="481"
  height="400"
/>

Pour faire ça dans le code, on écrit toujours le nom de la fonction, ici `walk`, et on ouvre toujours la parenthèse. Mais avant de fermer la parenthèse, on indique ce qu'on veut donner comme entrée (_input_ en anglais). Ici, on veut que l'entrée soit trois, pour dire à Jiki d'avancer de trois pas avec `walk` :

```javascript
walk(3)
```

Quand Jiki voit ça, il prend le nombre trois, que tu peux imaginer comme une petite pièce de monnaie, et il le glisse dans l'entonnoir de la machine avant de tourner la manivelle pour la mettre en marche.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/jiki-coin-into-slot.webp"
  alt="Jiki glisse le nombre 3 comme une pièce dans l'entonnoir de la machine walk, puis tourne la manivelle"
  width="421"
  height="400"
/>

Pour les fonctions qui dessinent des rectangles et des cercles, tu dois demander à Jiki d'insérer plusieurs nombres différents, qui précisent par exemple à quelle distance du haut la forme doit se trouver, à quelle distance de la gauche, ou encore la largeur et la hauteur d'un rectangle.

Dans le monde de Jiki, ce sont simplement des entonnoirs différents, un pour chacun de ces nombres.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/two-machines-inputs.webp"
  alt="La machine rectangle avec des entonnoirs pour left, top, width et height, et la machine cercle avec des entonnoirs pour cx, cy et radius"
  width="396"
  height="400"
/>

Donc, dans notre code, on écrit chaque nombre en mettant une virgule entre eux. Le nom de la fonction, une parenthèse, un nombre pour chaque entrée, le tout séparé par des virgules, et on ferme la parenthèse :

```javascript
rectangle(10, 20, 30, 40)
```

Si tu essaies d'utiliser une fonction avec le mauvais nombre d'entrées, tu vas obtenir une erreur. Par exemple, si tu essaies de mettre une entrée dans une machine qui n'a pas d'entonnoir, Jiki te dira que ce n'est pas possible. Et si tu utilises une machine qui a un entonnoir mais que tu ne dis pas à Jiki quoi y mettre, il s'arrêtera aussi pour se plaindre. Essaie, si tu te sens l'âme rebelle, et regarde ce qui se passe. Tu vas faire beaucoup d'erreurs de ce genre à mesure que les choses se compliquent. Essaie de ne pas stresser ni de te décourager : on apprend tous en faisant des erreurs. C'est littéralement le moyen le plus rapide pour que notre cerveau assimile vraiment les choses. Et tout le monde fait ces erreurs. On est tous partis de zéro, alors pas de panique.

Une autre chose qui mérite d'être mentionnée : dans les exercices, tu vas parfois voir des lignes qui commencent par deux barres obliques, `//`. On les appelle des commentaires (_comments_ en anglais). Ce sont des notes privées, juste pour toi, que Jiki ignore complètement. Si Jiki voit une ligne qui commence par ces deux barres obliques, il la saute et passe directement à la ligne suivante. Ces commentaires te donnent un moyen d'écrire tes propres notes pour toi-même. Ils sont très utiles pour te rappeler comment les choses fonctionnent. Souvent, des commentaires sont aussi écrits pour toi : quand tu commences un exercice, ils peuvent te suggérer où écrire ton code ou comment résoudre quelque chose. Mais n'hésite pas à ajouter aussi tes propres commentaires.

En bas des instructions d'un exercice, tu trouveras des informations sur les fonctions que tu peux utiliser, avec exactement les entrées que tu dois y mettre.
