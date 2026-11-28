---
title: "L'operador `&&` (i)"
description: "Combinar dues condicions amb `&&` perquè la condició completa només sigui certa quan les dues parts són certes."
en_md5: cef8d76c4235e85573c3eeede294ab72
---

Si et demanés que obrissis la porta només si algú té més de 20 anys, segurament sabries què fer. Però i si haguessis de comprovar que algú té més de 20 anys _i_ que porta la roba adequada? Aleshores has de comprovar dues condicions diferents alhora. Com ho faries?

Potser podries fer servir una sentència if imbricada (_nested_ en anglès), una mica com els bucles imbricats que teníem abans. Podries dir: si `age` és més gran que `20`, aleshores entrem en aquest bloc de codi, i després un altre if que comprova si `outfit` és igual a `"disco"`, i una altra clau i un bloc de codi nou. Funcionaria, però queda força desordenat, sobretot quan vols tenir molts condicionals.

Per sort, hi ha una manera més fàcil: tenir condicions amb diverses parts. En lloc de comprovar només una cosa dins la condició, en podem comprovar dues, tres o més. I per fer-ho, hem de fer servir la paraula clau `and`. Doncs bé, malauradament, a JavaScript la paraula clau and no és de fet la paraula and, com sí que passa en alguns llenguatges. En lloc d'això, has de posar dos ampersands l'un al costat de l'altre. T'ho hauràs de recordar i punt. És empipador, però és el que hi ha, i t'hi acostumaràs.

Així que ho podem fer servir per crear una condició més complexa. Podem dir que si `age` és més gran que `20` i `outfit` és `"disco"`, aleshores continuem. Si `age` és més petit que `20` o `outfit` no és `"disco"`, aleshores tota l'afirmació, tota la condició, és falsa. Si mai has estudiat lògica, potser has muntat algun circuit electrònic o has fet matemàtiques més avançades, això et semblarà molt natural. Si no, ho aprendràs de seguida.

```javascript
if (age > 20 && outfit === "disco") {
  openDoor()
}
```

Hi ha una cosa que fa ensopegar molta gent, tant amb l'and com amb l'or, i és que cada costat d'un and o d'un or ha de ser una comparació completa. Així que, fins i tot si compares la mateixa variable als dos costats, l'has de repetir. No pots escriure `if age is greater than 13 and less than 20`. Has d'escriure `if age is greater than 13 and age is less than 20`. Necessites que els dos costats siguin comparacions completes.

```javascript
if (age > 13 && age < 20)
```
