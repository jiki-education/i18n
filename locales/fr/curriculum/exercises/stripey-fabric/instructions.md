---
title: "Tissu à rayures"
description: "Tisse un motif à rayures en choisissant correctement la couleur de chaque rayure."
en_md5: ba93b39f1883d50139d243a16e3c204f
---

Tu conçois un algorithme pour créer un rouleau de tissu à rayures, qui doit ressembler à ceci :

<svg viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label="Vingt rayures verticales : violettes à chaque extrémité, avec des rayures vertes, bleues et jaunes entre les deux" style="width: 200px; height: 200px; display: block; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;padding:4px;margin-top:-8px">
  <rect x="0" y="0" width="5" height="100" fill="#A020F0" />
  <rect x="5" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="10" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="15" y="0" width="5" height="100" fill="#008000" />
  <rect x="20" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="25" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="30" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="35" y="0" width="5" height="100" fill="#008000" />
  <rect x="40" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="45" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="50" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="55" y="0" width="5" height="100" fill="#008000" />
  <rect x="60" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="65" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="70" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="75" y="0" width="5" height="100" fill="#008000" />
  <rect x="80" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="85" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="90" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="95" y="0" width="5" height="100" fill="#A020F0" />
</svg>

Le motif est une séquence qui se répète : `"yellow"` (jaune), `"blue"` (bleu), `"yellow"`, `"green"` (vert). La première et la dernière rayure sont `"purple"` (violet).

Le canvas sur lequel tu travailles fait `100` de large et `100` de haut. Tu dois dessiner `20` rayures, chacune ayant `5` de large.

### Règles de l'exercice

Tu ne peux pas résoudre cet exercice en écrivant simplement `20` instructions rectangle. Ton code doit s'adapter à n'importe quelle taille de tissu. D'ailleurs, tu ne peux utiliser la fonction `rectangle(...)` qu'une seule fois dans ton code !

À la place, tu dois utiliser une boucle et l'opérateur modulo (_remainder_ en anglais) que l'on a vu dans la dernière leçon vidéo. Réfléchis bien à l'ordre des instructions : c'est la clé pour réussir cet exercice.

Prends ton temps et amuse-toi bien !
