---
title: "La réponse du LLM"
description: "Analyse et formate la réponse d'un chatbot IA."
en_md5: 85c1827a73310a9d2285972cc0b1cb33
---

Crée une fonction appelée `askLlm` (demander au LLM) qui prend une entrée : la question à poser.

Utilise la fonction `fetch(url, parameters)` (récupérer) pour interroger l'API à l'adresse "https://myllm.com/api/v2/qanda". Pour les paramètres, utilise un dictionnaire avec une seule paire clé/valeur pour "question".

Explore les données que tu reçois, puis transforme-les au format suivant :

"The answer to 'Who won the 1966 Football Men's World Cup?' is 'England' (100% certainty in 0.5s)."

Enfin, renvoie cette string.

Quelques remarques :

- Tu recevras plusieurs réponses possibles. Choisis celle pour laquelle le LLM affiche la plus grande certitude.
- 0.78 en nombre décimal équivaut à 78 % en pourcentage.
- 123ms équivaut à 0.123s (il y a 1000 millisecondes dans une seconde).
