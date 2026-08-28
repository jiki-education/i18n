---
title: "La tête du renard"
description: "Construis une tête de renard géométrique à partir de triangles colorés."
en_md5: ace60854184185ffc1ec1e82e45af4bf
---

Cet exercice te présente la fonction `triangle`. Tu l'utilises avec 7 entrées. Les 6 premières entrées sont des paires de coordonnées pour les trois coins. La dernière entrée est la `color` :

- `x1` (coordonnée x du premier coin), `y1` (coordonnée y du premier coin) : le premier point de coin
- `x2` (coordonnée x du deuxième coin), `y2` (coordonnée y du deuxième coin) : le deuxième point de coin
- `x3` (coordonnée x du troisième coin), `y3` (coordonnée y du troisième coin) : le troisième point de coin
- `color` (couleur) : la couleur du triangle (par exemple `"orange"`)

<img src="/static/images/exercise-assets/foxy-face/intro-triangle.webp" alt="Schéma de la fonction triangle" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### Dessine une tête de renard

Ta mission : utiliser des triangles pour construire une tête de renard géométrique :

<img src="/static/images/exercise-assets/foxy-face/example.svg" alt="Tête de renard" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

La tête est symétrique horizontalement (la partie gauche est identique à la partie droite), et elle se compose de 8 triangles au total :

- Deux joues `"white"`
- Deux oreilles `"brown"`
- Deux moitiés de tête `"orange"`
- Un museau `"charcoal"` (deux triangles)

(Veille à utiliser ces couleurs quand tu dessines les triangles, et n'oublie pas de bien vérifier que tu les écris sous forme de _strings_ (chaînes de caractères) !)

### Trouve les bonnes coordonnées

On a tracé les contours de certaines parties pour t'aider à démarrer. Si tu **suis l'ordre indiqué dans les commentaires**, tu verras que ça te facilite un peu la vie.

Comme dans les exercices précédents, tu peux **survoler la zone de dessin** pour trouver les coordonnées, et **tous les nombres utilisés sont divisibles par 5** (par exemple `5`, `10`, `15`, etc. sont valides).

Bonne chance !
