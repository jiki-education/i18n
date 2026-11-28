---
title: "Crear i utilitzar variables"
description: "Capses als prestatges del Jiki que guarden un valor amb una etiqueta perquè el puguis recuperar més endavant al teu codi."
en_md5: dd0834017a8d42c22cca25966c1fdd91
---

Les variables són el que ens permet guardar informació. Quan programem, sovint necessitem guardar un número o una corda per fer-los servir més endavant, i les variables són com ho fem. Així que allarguem la vista una mica dins del magatzem del Jiki i veuràs que té un altre conjunt de prestatges. Ja coneixem el primer conjunt de prestatges, on hi ha les funcions, aquestes màquines petites com `move` i `rectangle`. Però en aquest segon conjunt de prestatges, en lloc de màquines, hi veuràs un munt de capses, i aquestes capses són el que anomenem variables. Pots dir al Jiki que hi guardi qualsevol cosa i, més endavant, demanar-li que ho torni a treure. Cada capsa té un nom, exactament igual que les funcions tenen un nom, i cada capsa conté només una cosa. De moment, o bé un número o bé una corda. Però més endavant, al llarg del curs, veurem com guardar-hi coses més complexes.

<img
  class="concept-image"
  src="/static/images/concept-assets/variables/two-shelves.webp"
  alt="Dos conjunts de prestatges al magatzem del Jiki: un etiquetat com a funcions que conté màquines, i un altre etiquetat com a variables que conté capses"
  width="500"
  height="173"
/>

I com li diem al Jiki que faci una capsa i hi posi alguna cosa? Doncs fem servir la paraula clau `let` (crea una capsa). La paraula clau `let` li diu al Jiki que ha de fer una capsa nova. Et pots imaginar que desembolcalla una capsa de cartró, la munta, i després mira què ve després de la paraula `let`: això és l'etiqueta que posa a la capsa, en aquest cas, `name` (nom). Així que treu el bolígraf i escriu `name` a l'etiqueta. Després mira què ve després del signe igual. En aquest cas, és el meu nom, `"Jeremy"`, i com que `"Jeremy"` és una corda, agafa un tros de paper i hi escriu `"Jeremy"`. És només una corda, exactament igual que els colors amb què has estat treballant, i després posa aquest tros de paper dins de la capsa.

```javascript
let name = "Jeremy"
```

<img
  class="concept-image"
  src="/static/images/concept-assets/variables/jeremy-paper.webp"
  alt="El Jiki té un tros de paper amb la corda Jeremy escrita, a punt per posar-lo dins de la capsa"
  width="373"
  height="400"
/>

Ja li hem dit que faci una capsa, que hi posi una etiqueta i que hi posi alguna cosa, i ara ell va i col·loca la capsa al prestatge. I en qualsevol altre moment del teu programa, el Jiki pot agafar aquella capsa del prestatge i mirar què hi ha a dins. Comença a construir aquest model mental. Fa una eternitat que programo i, quan escric codi, encara m'imagino que hi poso una cosa dins d'una capsa i que més endavant la trauré. Quan vegis la paraula clau `let`, pensa de veritat: «Molt bé, això vol dir que estic fent una capsa nova.»

Unes paraules sobre els noms de les variables, les etiquetes d'aquestes capses. Tenim unes quantes regles al respecte. Primer, els noms de les variables no poden tenir espais. Si vols fer servir diverses paraules per a l'etiqueta d'una capsa, posem les paraules enganxades les unes amb les altres i canviem la primera lletra de cada paraula per una majúscula. Això s'anomena camel case. Imagina't les gepes d'un camell empenyent cap amunt la primera lletra de cada paraula nova per convertir-la en majúscula. Així que si vols una etiqueta que sigui el meu nom, en lloc d'escriure dues paraules amb un espai, ho escrivim com una sola paraula amb la N en majúscula: `myName`.

A més, cada nom de variable ha de ser únic. No pots tenir dues capses amb la mateixa etiqueta, i les variables tampoc poden tenir el mateix nom que les funcions. Si te n'oblides, el Jiki es farà un embolic i et donarà un missatge d'error.

<img
  class="concept-image"
  src="/static/images/concept-assets/variables/duplicate-names-confused.webp"
  alt="El Jiki mirant amb cara de confusió dues capses que tenen totes dues l'etiqueta name"
  width="485"
  height="400"
/>

Doncs vegem on ens pot interessar fer servir una variable. Diguem que estem dibuixant un sol al cel. Sabem que podem fer servir la funció `circle` (cercle) i donar-li quatre entrades. Concretament, `left` (esquerra), `top` (dalt), `radius` i `color`. Però quan dibuixem un munt de coses i tenim tots aquests números escampats pel codi, pot ser molt difícil de seguir i de llegir. Així que, en lloc d'això, podem crear variables per a l'esquerra, el dalt, el `radius` i el `color`, i després fer referència a aquestes variables. L'objectiu final és poder fer servir la funció `circle` i indicar-hi noms de capses bonics i llegibles, i quan el Jiki vegi aquests noms, sabrà que ha d'agafar les capses dels prestatges i fer servir el que hi hagi a dins.

Doncs creem algunes variables per a això. Comencem per la posició esquerra del sol. Fem servir la paraula clau `let` per dir al Jiki que creï una capsa nova anomenada `leftPosition` (posició esquerra). Fixa't en el camel case, amb la P majúscula. I li diem al Jiki quin número va dins de la capsa. Ell ho posa als prestatges i després passa a fer el mateix per a `topPosition` (posició de dalt), `radius` i `color`.

```javascript
let leftPosition = 10
let topPosition = 20
let radius = 5
let color = "yellow"

circle(leftPosition, topPosition, radius, color)
```

<img
  class="concept-image"
  src="/static/images/concept-assets/variables/name-on-shelf.webp"
  alt="Capses etiquetades als prestatges de les variables, cadascuna guarda un valor que el Jiki recollirà més endavant"
  width="500"
  height="378"
/>

En qualsevol moment del codi podem tornar a fer referència a aquestes variables, i el Jiki en traurà els valors i els posarà dins d'una màquina. L'altra gran cosa de les variables és que, sempre que vulguem dibuixar alguna cosa a la mateixa posició que el sol, podem reutilitzar aquestes mateixes variables `leftPosition` i `topPosition`. Posem un altre exemple. Imagina't que estàs construint una paret de 30 maons i vols que tots els maons tinguin la mateixa amplada i la mateixa altura. És molt millor crear variables per a l'amplada i l'altura al començament del codi i després fer-hi referència al llarg de la resta del codi. Perquè si després vols canviar l'amplada o l'altura, només ho has de canviar en un lloc i tota la resta s'actualitzarà.
