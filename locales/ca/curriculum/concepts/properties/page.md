---
title: "Propietats"
description: "Fets estàtics sobre un valor, als quals s'accedeix amb notació de punt i sense parèntesis, com `.length` per saber quantes lletres té una corda."
en_md5: 0634cd72388bef118e9dd22131a3c1cd
---

Fins ara, quan hem pensat en cordes o en números, els hem considerat coses bastant estàtiques.

I, tot i que ho són, també porten molta funcionalitat incorporada que el Jiki pot fer servir.

Ara veurem dos tipus de capacitats: les propietats i els mètodes.

Les propietats són fets que podem demanar al Jiki que ens expliqui sobre les coses. Per exemple, les cordes tenen una propietat anomenada `length` (longitud) que el Jiki pot fer servir per dir-nos com de llarga és una corda.

Així, en lloc d'haver de recórrer totes les lletres amb un bucle per esbrinar com de llarga és una corda, simplement podem demanar-ho al Jiki.

I per fer-ho, fem servir una forma de sintaxi nova: un punt.

Per exemple, si tenim la corda `"Jeremy"` i en volem saber la longitud, podem escriure:

```javascript
"Jeremy".length // 6
```

Quan el Jiki crea una corda, compta les lletres i bàsicament escriu un número a la cantonada amb quantes n'hi ha.

<img
  class="concept-image"
  src="/static/images/concept-assets/properties/jiki-counting-letters.webp"
  alt="El Jiki comptant les lletres de la corda Jeremy i escrivint el número a la cantonada"
  width="359"
  height="400"
/>

I després, quan fem servir la propietat `length`, el Jiki hi va i comprova quin era aquell número. Així, en el nostre exemple de `"Jeremy".length`, quan el Jiki crea la corda `"Jeremy"`, compta les lletres, escriu el número sis a la cantonada i, després, quan escrivim `"Jeremy".length`, hi va i ho comprova. Així que pots pensar en les propietats com si fossin fets sobre aquella cosa.
