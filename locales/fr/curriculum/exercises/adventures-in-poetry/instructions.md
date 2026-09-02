---
title: "Aventures en poésie"
description: "Parcours un chemin en récoltant les mots d'un poème, en ignorant tout ce qui n'en est pas un."
en_md5: 9163e96662902baf726f464c9b58785f
---

Tu crées un jeu de poésie robotique appelé « Aventures en poésie ». Pour commencer, tu dois programmer le robot pour qu'il collecte des mots tout en marchant, puis, à la fin, qu'il récite le poème.

Chaque case contient l'une de ces quatre choses :

1. Rien (`""`)
2. Un **mot** du poème.
3. Un élément de décor comme une feuille ou un papillon (un emoji).
4. Un drapeau à damier (`🏁`), qui indique au robot de s'arrêter.

Pour t'aider, tu disposes de quelques fonctions. D'abord, la fonction `move()`, qui dit au robot poétique d'avancer sur la case suivante et renvoie ce qui s'y trouvait. Ensuite, la fonction `isEmoji(thing)`, qui renvoie un booléen indiquant si la _string_ que tu lui passes est un emoji. Et enfin, la fonction `recite(poem)`, que tu dois utiliser avec le poème final.

Ta mission consiste à parcourir le chemin, à construire le poème petit à petit, puis à le réciter.

## Les règles

- Les **mots**, séparés par un **espace**, forment le poème.
- Le **décor** ne fait pas partie du poème et doit être ignoré.
- Une **apostrophe** occupe sa propre case, et elle relie les mots situés de part et d'autre. `heart` puis `'` puis `s` devient `heart's`.
- Une **virgule** occupe elle aussi sa propre case. Elle se colle au mot qui la précède, mais reste suivie d'un espace.
- Le poète n'avance plus quand il atteint le **drapeau à damier**, ou dès qu'il a récolté **sept mots**, selon ce qui arrive en premier.
- Quand le poète s'arrête, quelle qu'en soit la raison, il récite ce qu'il a récolté. Tu ne peux appeler `recite()` qu'**une seule fois**.

## Restrictions

Il existe de nombreuses façons de résoudre cet exercice, mais on veut que tu utilises les mots-clés `continue` et `break` que tu viens d'apprendre, alors voici quelques règles :

1. Ta solution doit utiliser à la fois `continue` et `break`.
2. Tu ne peux utiliser ni `&&` ni `!` dans ta solution.
3. Tu ne peux pas écrire de fonctions auxiliaires.
4. Tu n'as droit qu'à deux niveaux d'indentation :

```javascript

// Autorisé : 2 niveaux d'indentation
repeat() {
  if(...) {
    //...
  }
}

// Interdit : 3 niveaux d'indentation
repeat() {
  if(...) {
    if(...) {
    }
  }
}
```

Cela signifie que la solution que tu vas trouver sera assez « plate ».

Bonne chance et amuse-toi bien !
