---
title: "Construir llistes"
description: "Començar amb una llista buida i fer servir `push` per afegir-hi elements d'un en un mentre recorres les dades."
en_md5: c3358ca032f965cf058bb72df37ffbd4
---

Fins ara has treballat amb llistes en què el valor s'estableix al principi i es queda fix. I si vols anar afegint coses a una llista amb el temps? Doncs per a això, les llistes tenen un mètode que es diu `push` (afegeix al final).

`push` té una entrada: allò que vols enganxar al final de la llista. Així que, en aquest cas, volem afegir la paraula `"Isaac"` al final d'una llista que ja conté `"DJ"` i `"Bethany"`.

Per fer-ho, el Jiki treu la llista de la capsa, enganxa `"Isaac"` al final de la filera i després torna a posar-ho tot dins la capsa. Fixa't que, a diferència d'abans amb les cordes, quan el Jiki creava una corda nova cada vegada, aquí el que fa de debò és canviar la llista.

Un patró que veuràs molt sovint quan programes és començar amb una llista buida i anar-la construint. Imagina't que tenim una llista llarga de noms i que els volem recórrer tots. Cada vegada que en trobem un que sigui mentor, l'afegim a la nostra llista.

Aquest patró de fer bucles i anar afegint és una cosa que faràs servir molt.
