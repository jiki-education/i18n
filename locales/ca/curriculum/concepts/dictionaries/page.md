---
title: "Diccionaris"
description: "Una pàgina d'una llibreta d'espiral on cada entrada té una clau a l'esquerra i el seu valor a la dreta, cosa que et dona dades etiquetades en lloc d'una llista."
en_md5: b8a26ad63301df1d00ce08e1e429cf05
---

Les llistes són la nostra primera opció quan tenim una llista de qualsevol cosa: una llista de mentors, una llista de puntuacions, una llista d'ingredients, qualsevol llista.

Però hi ha una altra estructura de dades (_data structure_ en anglès) que també és molt habitual quan vols una cosa una mica més complexa que una llista.

Imagina't que volem guardar una mica d'informació sobre mi: el meu nom, la meva edat i on vaig néixer. Podries fer servir una llista, però no queda gaire clar què està passant.

Anglaterra és on vaig néixer o on visc? El 42 és la meva edat o una altra cosa?

I si ho vull fer servir, he de recordar que la primera posició és per al nom, la segona és per a l'edat i la tercera és per al lloc de naixement. Tot plegat és una mica desordenat, i és desordenat perquè això no és ben bé una llista de coses. És més complex que tot això. I aquí és on entren els diccionaris. Un diccionari és un tipus nou d'estructura de dades. És el cinquè que veus. Tens les cordes, els nombres, els booleans, les llistes i ara els diccionaris.

Vull que t'imaginis un diccionari com un full d'una llibreta d'espiral.

A l'esquerra tens els encapçalaments, les paraules `"name"`, `"age"` i `"birthplace"`, i a aquests els anomenem claus (_keys_ en anglès).

I a la dreta, al costat de cada encapçalament, tens les dades de veritat: `"Jeremy"`, `42` i `"England"`. Aquestes dades són el que anomenem valors.

Igual que les llistes, un diccionari és una sola cosa. És una pàgina d'una llibreta. I igual que les llistes, el Jiki el pot posar en una variable, en una capsa o com a entrada d'una funció, o pot treure un diccionari pel conducte de sortida. I així és com es veu un diccionari en codi. Fem servir claus arrissades per marcar on comença i on acaba, i a dins hi ha parelles: una clau a l'esquerra, dos punts i el valor a la dreta. I entre cada parella hi ha una coma. Així que el Jiki ho veu i treu la seva llibreta d'espiral. Hi escriu `name`, `"Jeremy"`, `age`, `42`, i així amb cada parella.

I quan ha acabat, arrenca el full i el fica en una capsa amb l'etiqueta `person` (persona).

Hi ha unes quantes regles que cal conèixer. Les claus sempre són cordes. Han de portar cometes al voltant, i cada clau ha de ser única. No pots tenir dues claus que es diguin `name` dins del mateix diccionari.

Els valors poden ser iguals si vols, però les claus han de ser diferents.

I els valors poden ser qualsevol cosa. Poden ser cordes, nombres, booleans, llistes o fins i tot altres diccionaris.

També pots tenir un diccionari buit, igual que teníem una llista buida, i podem començar amb ell i anar-lo ampliant més endavant.

Ja tens un diccionari, però com hi treus alguna cosa de dins?

Fem servir la mateixa sintaxi de claudàtors que amb les llistes i les cordes, però en lloc d'un número de posició hi posem una clau. Així, si volem treure el nom d'algú d'un diccionari, escrivim:

```javascript
person["name"] // "Jeremy"
```

I això li diu al Jiki que busqui en el diccionari `person`, que trobi la clau `"name"` i que en tregui el valor. El Jiki va a la capsa `person`, en treu la pàgina de la llibreta, repassa totes les claus fins que troba `"name"` i llavors llegeix el valor, `"Jeremy"`, i el posa en una capsa nova que es diu `name`.

Els claudàtors sempre volen dir el mateix: fiques la mà dins d'alguna cosa i en treus una altra. Amb les llistes i les cordes, fas servir un número per dir de quina posició vols treure alguna cosa. Amb els diccionaris, fas servir una corda com a clau.

És la mateixa idea, només que amb una sintaxi una mica diferent.
