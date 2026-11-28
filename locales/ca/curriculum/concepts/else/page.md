---
title: "La paraula clau `else`"
description: "Afegir una clàusula `else` després d'un `if` perquè s'executi un bloc de codi diferent quan la condició resulta ser falsa."
en_md5: a3d7b0672bd9c022675831044c5610ed
---

Les sentències `if` et permeten comprovar condicions i executar codi només quan alguna cosa és certa. Ara et presentem el company de fatigues del `if`: el `else`.

Amb una sentència `if` (_if statement_ en anglès), el Jiki executa el bloc de codi quan la condició és certa, i es salta aquell bloc de codi quan és falsa. I si vols que el Jiki faci una cosa quan la condició és certa i una altra de diferent quan és falsa? Doncs per a això serveix el `else`. Podem posar una clàusula `else` després de la clau de tancament del `if`, i el Jiki l'executarà si la condició del `if` és falsa. Així que, tornant a l'exemple del porter de la discoteca, ara tenim l'opció d'obrir la porta o de no deixar entrar algú, cosa que probablement és millor que ignorar-lo del tot com fèiem abans. Pensa-ho com una bifurcació a la carretera. El Jiki arriba a aquesta bifurcació, comprova la condició i, aleshores, pot anar per una banda si és certa, o per l'altra si és falsa. Però mai no va per les dues bandes alhora.

```javascript
if (age >= 21) {
  openDoor()
} else {
  turnAway()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/else/fork-in-the-road.webp"
  alt="Una bifurcació a la carretera, davant la porta de la discoteca: obre la porta quan la condició és certa i no deixis entrar la persona quan és falsa"
  width="500"
  height="332"
/>

I si tens més de dues possibilitats? Imagina't que el nostre porter ven entrades. Si tens menys de tretze anys, tens una entrada infantil. Entre tretze i vint, tens una entrada per a adolescents. A partir de vint, una entrada d'adult. Així que ara tens tres resultats diferents. Per a això, podem afegir una altra sentència `if` després del `else`. Així podem dir: «Si passa això, fes això. Si no, si passa això altre, fes allò. Si no, fes aquesta altra cosa». Així, en aquest exemple, el Jiki veurà el `if` i comprovarà la primera condició. Setze és menys que tretze? No. Aleshores passa al `else if`. Setze és menys que vint? Sí, és cert. Així que executa aquell bloc i dona una entrada per a adolescents. Però ja ha acabat. No comprova res més. No mira gens aquell `else` final. Un cop el Jiki troba una condició que és certa, executa aquell bloc i es salta tot el que hi ha a sota.

```javascript
if (age < 13) {
  childTicket()
} else if (age < 20) {
  teenTicket()
} else {
  adultTicket()
}
```

Aquesta és la idea clau que cal entendre. Només s'executa mai un bloc. El Jiki va baixant per aquesta cadena, troba la primera condició que és certa, executa aquell bloc i continua.

Ara bé, hi ha una cosa que has d'entendre de debò, perquè és on tothom ensopega. Hi ha una diferència subtil però molt important entre escriure dues sentències `if` separades i fer servir `else if`. Així que imagina que estem creant un programa que dona un premi bàsic o un premi extra segons la puntuació d'algú. Mira aquestes dues possibilitats. Una fa servir `else if` i l'altra fa servir dues sentències `if` separades. Què passarà de diferent?

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

En el primer cas, amb el `else if`, comprovem si la puntuació és alta i donem el premi, i llavors no executem el `else if`. Així que la persona, si té una puntuació de més de cent, només rep el premi extra.

Però en el segon exemple, els dos `if` són totalment independents. Tots dos s'executaran i tots dos seran certs. Així que aquí la persona rep dos premis. En el primer cas, un premi. En el segon, dos premis. Pren-te un moment per assegurar-te que ho entens de debò.

També és interessant fixar-se que qualsevol de les dues pot ser correcta segons com estigui dissenyat el joc. Potser el concursant rep un premi normal i un d'extra, o potser simplement se'l puja al premi extra. Cap dels dos fragments de codi no és correcte ni incorrecte. Simplement són útils en situacions diferents. Però has de saber quin vols fer servir.
