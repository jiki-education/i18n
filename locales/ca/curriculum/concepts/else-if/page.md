---
title: Encadenar condicions amb `else if`
description: Encadenar clàusules `else if` per comprovar diverses condicions en ordre i executar només el primer bloc amb una condició certa.
en_md5: 64274945347d47d67baf3378cf219c9b
---

Ja has vist com `if` i `else` et donen dues vies: fer una cosa quan una condició és certa i fer-ne una altra quan és falsa. Però i si tens més de dues possibilitats?

Imagina que el nostre porter està venent entrades. Si tens menys de tretze anys, tens una entrada infantil. Entre tretze i vint, una entrada per a adolescents. A partir de vint, una entrada d'adult. Així que ara tens tres resultats diferents. Per a això, podem afegir una altra sentència `if` després del `else`. Podem dir: «Si passa això, fes això. Si no, si passa això altre, fes allò. Si no, fes aquesta altra cosa.» Així que, en aquest exemple, el Jiki veurà el `if` i comprovarà la primera condició. Setze és menys que tretze? No. Aleshores passa a l'`else if`. Setze és menys que vint? Sí, és cert. Així que executa aquell bloc i dona una entrada per a adolescents. Però ja ha acabat. No comprova res més. No mira gens aquell `else` final. Quan el Jiki troba una condició que és certa, executa aquell bloc i es salta tot el que hi ha a sota.

```javascript
if (age < 13) {
  childTicket()
} else if (age < 20) {
  teenTicket()
} else {
  adultTicket()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/else-if/tickets.webp"
  alt="Tres entrades amb les etiquetes CHILD, TEEN i ADULT, una per a cada resultat de la comprovació de l'edat"
  width="500"
  height="142"
/>

Això és la clau que has d'entendre. Només s'executa un bloc, sempre. El Jiki va baixant per aquesta seqüència, troba la primera condició que és certa, executa aquell bloc i segueix endavant.

Ara hi ha una cosa que has d'entendre de veritat, perquè és un punt on molta gent ensopega. Hi ha una diferència subtil però molt important entre escriure dues sentències `if` separades i fer servir `else if`. Imagina que estem creant un programa que dona un premi bàsic o un premi extra segons la puntuació d'algú. Mira aquestes dues possibilitats. Una fa servir `else if` i l'altra fa servir dues sentències `if` separades. Què passarà de diferent?

```javascript
if (score > 100) {
  bonusPrize()
} else if (score > 50) {
  basicPrize()
}
```

```javascript
if (score > 100) {
  bonusPrize()
}
if (score > 50) {
  basicPrize()
}
```

Així que, en el primer cas, amb l'`else if`, comprovem si la puntuació és alta i donem el premi extra, i després ja no executem l'`else if`. Per tant, la persona, si té una puntuació de més de cent, només s'emporta el premi extra.

Però en el segon exemple, els dos `if` són totalment independents. Tots dos s'executaran i tots dos seran certs. Així que aquí la persona s'emporta dos premis. En el primer cas, un premi. En el segon, dos premis. Dedica un moment a assegurar-te que ho entens de veritat.

També és interessant notar que qualsevol de les dues pot ser correcta segons com estigui dissenyat el joc. Potser el concursant rep un premi normal i un d'extra, o potser simplement li canvien el premi normal pel premi extra. Cap dels dos codis no és correcte ni incorrecte. Només són útils en situacions diferents. Però has de saber quin vols fer servir.
