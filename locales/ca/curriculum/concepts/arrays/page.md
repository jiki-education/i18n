---
title: "Llistes"
description: "Una filera ordenada d'elements (cordes, nombres, booleans o qualsevol altra cosa) unida com un sol valor que el Jiki pot fer anar d'una banda a l'altra."
en_md5: d26ccb9e04fbc77129f3199d63a95017
---

Has estat fent servir nombres, cordes i booleans (la paraula fina per dir «cert» i «fals»), i tot això ho anomenem tipus de dades. Ara, però, hi afegim el nostre primer tipus de dades compost.

És un tipus de dades que pot contenir diverses coses, no només una de sola, i aquest tipus de dades es diu llista (_array_ en anglès).

Quan sentis la paraula «array», vull que pensis en una filera física que subjecta moltes coses juntes.

Allò que subjecta pot ser qualsevol cosa: cordes, nombres, booleans, fins i tot altres llistes, fins i tot coses que encara no has après, però això no ens ha de preocupar ara.

Tot el que hi ha en aquesta filera està ordenat, en l'ordre en què s'ha enfilat.

Així que una llista conté moltes coses, però és un sol element sòlid, una sola cosa sòlida, una sola llista amb molts elements a dins.

El Jiki pot agafar aquesta llista, aquesta filera, i ficar-la en una capsa, igual que pot ficar una corda en una capsa o un nombre en una capsa.

La pot posar a la ranura d'entrada d'una màquina. La pot treure pel conducte de sortida. Aquesta llista és una sola cosa, i el Jiki hi treballa exactament de la mateixa manera com treballa amb cordes, nombres i tota la resta que has vist fins ara.

Ara bé, en codi, una llista també s'assembla una mica a una filera. Té un claudàtor a cada extrem i després molts elements enfilats, separats per comes.

Per exemple, si volguéssim crear una llista amb els noms d'alguns dels nostres mentors, podríem muntar una capsa anomenada `mentors` i ficar-hi aquesta filera a dins.

Escriuríem `let mentors =`, exactament igual que amb qualsevol altra capsa, i després tindríem un claudàtor d'obertura, molts elements, els seus noms separats per comes, i finalment un claudàtor de tancament. Quan el Jiki ho veu, va a buscar quatre papers, un per a cada nom, després agafa una filera nova i els enfila tots, i finalment posa aquesta filera a la capsa `mentors`.

Pots posar qualsevol cosa en una llista: cordes, nombres, booleans, fins i tot una barreja de coses.

Aquests són exemples ben diferents de llistes del tot vàlides.

També pots crear una llista buida. És només una filera sense elements. Continua sent una cosa real. Encara té tots dos extrems. Continua sent una filera. Només passa que no té cap element a dins. Però tot i així pots ficar aquesta llista buida en una capsa, treure-la quan vulguis i fer-la servir més endavant.

Així que podem crear una llista amb la sintaxi dels claudàtors, però com les fem servir de debò? Com mirem què tenen a dins i com en traiem coses? Doncs exactament igual que quan volíem treure lletres d'una corda. Podem fer servir la sintaxi dels claudàtors amb nombres a dins.

Tornem, doncs, a la nostra llista de mentors. Si en volem treure el primer, escrivim `mentors[0]`. Recorda que en JavaScript comptem a partir de zero.

I també podem recórrer una llista exactament de la mateixa manera com recorríem les cordes abans, fent servir `for-of`.

Les llistes funcionen exactament igual. L'única diferència és que aquesta vegada, en lloc de treure una lletra, traiem el que sigui que hi hagi a la llista. En aquest exemple, el nom del mentor.

Així, el primer cop que donem les gràcies a algú, les donem a `"DJ"`. El segon cop, les donem a `"Becky"`, etcètera.

També podem fer servir la propietat `length` amb les llistes, tal com vam aprendre amb les cordes. Si tenim una llista amb quatre cordes a la capsa `mentors` i escrivim `mentors.length`, retornarà quatre.

I també podem fer servir `includes` exactament igual amb les llistes. Podem escriure `mentors.includes("DJ")` i retornarà `true`. Però si escrivim `mentors.includes("Frank")`, retornarà `false`.

Tot funciona exactament igual que amb les cordes. L'única cosa és que ara treballem amb els elements d'una llista, no amb les lletres d'una corda.
