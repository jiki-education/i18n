---
title: "Funcions que retornen coses"
description: "Atrapar un valor que surt del conducte de sortida d'una funció i fer-lo servir al teu codi."
en_md5: 830f19fb6aaf184c1f32ade792b60a12
---

Fins ara hem vist funcions que fan alguna cosa al món. Així, la funció `circle` (cercle) dibuixa un cercle. La funció `move` (mou) desplaça el teu personatge. Però algunes funcions funcionen d'una altra manera. En lloc de fer alguna cosa a fora, et tornen alguna cosa que pots fer servir dins del teu codi. Quan una funció dona alguna cosa al Jiki perquè la faci servir al codi, diem que aquesta funció retorna alguna cosa. Retorna alguna cosa al Jiki. Pots imaginar aquestes màquines amb un conducte de sortida. Ja tenim les ranures d'entrada on hi posem coses, però també podem tenir una sola ranura de sortida, o un conducte per on pot tornar a sortir alguna cosa. Quan el Jiki prem el botó de la màquina, la màquina es posa en marxa amb un brunzit i, al final, alguna cosa en surt disparada per aquell conducte. Pot ser un nombre. Pot ser una corda. És una cosa que el Jiki pot atrapar i pot fer servir.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/machine-with-return-chute.webp"
  alt="Una màquina amb un conducte de sortida al costat, a punt per enviar un valor de tornada al Jiki"
  width="500"
  height="317"
/>

La majoria de funcions, probablement el 95%, retornen alguna cosa. Poden fer-te uns quants càlculs i retornar-te el valor, o poden enganxar unes quantes cordes i donar-te la corda resultant. O potser et donen l'hora actual cada vegada que engegues aquella màquina. Mirem aquest últim cas. Diguem que tenim una funció anomenada `getCurrentTime` (obté l'hora actual). Cada vegada que el Jiki engega la màquina, un tros de paper rellisca pel conducte de sortida amb l'hora escrita a sobre, potser les 14:35.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/paper-out-of-chute.webp"
  alt="La màquina getCurrentTime amb un tros de paper que diu 14:35 relliscant pel seu conducte de sortida"
  width="500"
  height="312"
/>

I després podem posar aquest valor retornat en una capsa amb `let`:

```javascript
let time = getCurrentTime()
```

El Jiki engegarà la màquina, agafarà l'hora actual del conducte i la desarà en una capsa anomenada `time`.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/jiki-boxing-time.webp"
  alt="El Jiki posa el paper de les 14:35 que surt del conducte en una capsa amb l'etiqueta time"
  width="372"
  height="400"
/>

Ara bé, és important entendre que el tros de paper que el Jiki posa a la capsa queda fixat en aquell moment. Encara que l'hora real canviï mentre el teu programa s'executa, la capsa continua tenint aquell tros de paper amb 14:35 escrit a sobre. Un cop una cosa és dins de la capsa, allà dins és una cosa fixa. No canvia per art de màgia. Si en el futur volem tornar a posar l'hora actual a la capsa, cal que tornem a fer servir la funció `getCurrentTime` per aconseguir-la.

La majoria de funcions que retornen coses també tenen entrades. Per exemple, podem tenir una funció `join` (uneix) que pren dues cordes com a entrades i les retorna unides amb un espai. Així, si fem servir una màquina `join` amb `"Hello"` i `"World"` com a entrades, pel conducte sortirà una única corda amb `"Hello World"` escrit a sobre.

```javascript
join("Hello", "World"); // "Hello World"
```
