---
title: "Le chiffre de César"
description: "Chiffre un message secret avec une méthode de chiffrement de la Rome antique."
en_md5: 029bbd7050127405f5e67a3a20353139
---

Le chiffre de César est l'une des techniques de chiffrement les plus anciennes et les plus simples. Jules César l'utilisait pour envoyer des messages secrets à ses généraux.

Le principe consiste à décaler chaque lettre du message d'un nombre fixe de positions dans l'alphabet. Par exemple, avec un décalage de 3, « a » devient « d », « b » devient « e », et ainsi de suite. Si le décalage dépasse « z », on repart au début de l'alphabet.

Les espaces restent des espaces (ils ne sont pas décalés).

Crée une fonction appelée `encode(message, shift)` (encode = encoder, shift = décalage) qui prend un message en minuscules et un décalage, et renvoie le message encodé.

Par exemple :

- `encode("abc", 1)` renvoie `"bcd"`
- `encode("xyz", 3)` renvoie `"abc"` (on repart au début de l'alphabet)
- `encode("hello world", 5)` renvoie `"mjqqt btwqi"`

Astuce : tu auras tout intérêt à découper ce problème en petites fonctions auxiliaires !

### Anecdote

Un jour, j'animais une conférence tech à Braga, au Portugal. Cinq minutes avant mon entrée en scène, les organisateurs sont venus me voir et m'ont demandé, un peu gênés, si cela me dérangerait de me déguiser en Jules César pour la première partie de la journée, afin de célébrer le passé romain de Braga. Alors, convaincant... ?

<img
  src="/static/images/exercise-assets/caesar-cipher/jeremy-as-caesar.webp"
  alt="Jeremy déguisé en César"
  style="width: 100%; max-width: 300px; border: 5px solid var(--color-purple-500); padding: 4px; border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;"
/>
