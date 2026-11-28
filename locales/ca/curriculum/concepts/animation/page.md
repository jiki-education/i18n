---
title: "Animació"
description: "Enganyar l'ull perquè hi vegi moviment repintant el fons i tornant a dibuixar cada fotograma en una posició una mica diferent."
en_md5: 536994294072afea52dab51d3bb7cab8
---

Fins ara, quan hem fet servir el bucle `repeat` per dibuixar coses, cada cosa nova que dibuixàvem afegia alguna cosa a la imatge. Si dibuixàvem un maó nou en una paret, omplia un forat. Si dibuixàvem 10 cercles, veiem 10 cercles a la pantalla. És com una pintura. Un cop has posat pintura a la paret, no desapareix quan pintes una altra cosa al costat. Es queda allà. Però i si volem fer que alguna cosa sembli que es mou?

Has vist mai un llibre de passar pàgines? Eren molt populars quan jo era petit, ara no tant. Un llibre de passar pàgines és un llibret on cada pàgina té un dibuix una mica diferent. A mesura que passes les pàgines de pressa, els teus ulls veuen com canvien els dibuixos i el teu cervell pensa que alguna cosa es mou. En realitat no es mou. Només són un munt d'imatges una mica diferents, una rere l'altra. I així és exactament com funciona l'animació al codi. El truc és el mateix. Abans de dibuixar una escena nova, pintem tot el llenç amb un color de fons, una mica com començar una pàgina nova al nostre llibre de passar pàgines, i després fem un petit canvi a l'escena perquè sembli moviment.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/flip-book-pages.webp"
  alt="Un llibre de passar pàgines que mostra un ninot de pals corrent, amb cada pàgina una mica diferent perquè el ninot sembli que es mou"
  width="500"
  height="274"
/>

Així que, si agafem un bloc de codi que ja coneixem, on dibuixem cercles per tota la pantalla, establim una variable `position` (posició) i tenim un bloc `repeat` on dibuixem un cercle i després movem la `position` una unitat cap a la dreta. Si executem aquest bloc `repeat` 100 vegades, veurem 100 cercles per tota la pantalla.

```javascript
let position = 0
repeat(100) {
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circles-trail.webp"
  alt="Un rastre de 100 cercles blaus dibuixats d'esquerra a dreta per tota la pantalla"
  width="500"
  height="197"
/>

Ara mira què passa si afegim un simple rectangle abans de dibuixar el cercle cada vegada.

```javascript
let position = 0
repeat(100) {
  rectangle(0, 0, 100, 100, "white")
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

En lloc d'un rastre de cercles, ara els nostres ulls s'enganyen i veuen un sol cercle que sembla lliscar per la pantalla.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circle-glide-frames.webp"
  alt="Una seqüència de fotogrames, cadascun un llenç blanc nou amb un sol cercle blau un pas més a la dreta"
  width="500"
  height="187"
/>

Cada vegada que passem pel bucle, pintem un fons completament nou, tapem tot el que hi havia abans i després dibuixem el cercle a la seva nova posició.

Cada volta del bucle és com una pàgina nova del llibre de passar pàgines.

I la clau per entendre-ho és que no estem movent el cercle. El cercle no és un objecte que llisqui per la pantalla. És només un dibuix. Cada vegada que passem pel bucle, pintem a sobre del dibuix vell i en fem un de nou, una mica més a la dreta. El teu ull ho ajunta tot i veu moviment, però en realitat només són un munt de dibuixos separats, un rere l'altre.

Pots fer servir aquesta idea per crear una posta de sol. Fas que el sol es mogui, li canvies la mida, li canvies el color. És tota la mateixa tècnica. Defineixes unes quantes variables, pintes un fons nou i ho dibuixes tot. Actualitzes les variables i ho tornes a fer.
