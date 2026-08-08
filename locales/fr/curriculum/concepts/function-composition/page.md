---
title: "Utiliser plusieurs fonctions ensemble"
description: "Découper un problème en petites fonctions à responsabilité unique qui s'appellent les unes les autres, pour que chaque partie reste simple et réutilisable."
en_md5: 7df3110b30c0f279d7f04d3b4e331a99
---

Jusqu'ici, quand tu as écrit des fonctions, chacune se suffisait plus ou moins à elle-même et contenait toute la logique dont elle avait besoin pour fonctionner.

Maintenant, on va voir comment découper les fonctions, pour avoir de petites fonctions qui travaillent ensemble plutôt que de grosses fonctions qui font beaucoup de choses à la fois.

En règle générale, en programmation, chaque fonction doit en faire le moins possible. On dit alors qu'une fonction a une responsabilité unique (_single responsibility_ en anglais). Chaque fonction devrait faire une seule chose, et utiliser d'autres fonctions pour les différentes sous-parties de cette chose.

Voyons un exemple.

Imagine qu'on ait une fonction dont le travail est de renvoyer une string qui décrit un nom.

Une version simple ressemblerait à ceci : une boucle de comptage, quelque chose que tu as déjà écrit, puis un template literal qui assemble le résultat.

```javascript
function describeName(name) {
  let length = 0
  for (const letter in name) {
    length += 1
  }
  return `This name is ${length} letters long`
}
```

Ça fonctionne très bien, mais cette fonction fait deux choses : une chose plutôt générique, compter, et une autre très spécifique, construire cette string dans un format particulier.

Ce serait bien plus élégant de découper tout ça en deux fonctions, une responsable du comptage et une responsable de la description d'un nom dans ce format particulier.

```javascript
// Compte simplement les lettres
function countLetters(str) {
  let count = 0
  for (const letter in str) {
    count += 1
  }
  return count
}

// Met simplement le texte en forme
function describeName(name) {
  const count = countLetters(name)
  return `The name has ${count} letters`
}
```

On peut ensuite réutiliser cette fonction de comptage générique dans cette mise en forme de texte, mais aussi partout ailleurs où on en a besoin. Dès qu'on doit compter les lettres d'une string, c'est totalement détaché de tout ce qui touche à l'affichage.

Tu peux lire chacune des deux fonctions isolément et comprendre immédiatement ce qu'elle fait.

À mesure que tes fonctions deviennent plus complexes et plus nombreuses, cette technique fait toute la différence entre un code propre et lisible et une confusion totale.

Il y a une chose qui mérite d'être rappelée ici : tout ce que tu crées à l'intérieur d'une fonction est inaccessible aux autres fonctions, à moins que tu ne le renvoies délibérément.

Donc si tu essaies d'accéder à la variable `count` (compte) depuis l'intérieur de `describeName` (décrire le nom), tu ne peux pas : elle appartient à l'autre fonction.

<img
  class="concept-image"
  src="/static/images/concept-assets/function-composition/jiki-thinking.webp"
  alt="Jiki réfléchit, une ampoule au-dessus de la tête, à la façon dont les variables restent privées à chaque fonction"
  width="361"
  height="353"
/>

En JavaScript, on peut créer des variables tout en haut, au-dessus de tout le reste, qui sont partagées entre les fonctions, mais je te recommande vraiment de ne pas le faire, sauf très bonne raison.

Plus tu gardes chaque fonction indépendante, et le mot technique pour ça est « pure », des fonctions pures, plus ton code sera propre et moins tu créeras de bugs.
