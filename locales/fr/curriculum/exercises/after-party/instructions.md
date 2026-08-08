---
title: "L'after"
description: "Retrouve combien d'invités une célébrité peut faire entrer, à l'aide de deux listes alignées."
en_md5: c31c0988af324530b986262f47d9a745
---

On reprend notre rôle de videur. Mais cette fois, on a affaire à des stars de premier plan, à l'after.

Quand ces gens se présentent à ta soirée, ils s'attendent à ce que tu les reconnaisses rien qu'à leur prénom. Brad Pitt ne va pas perdre son temps à te donner son nom de famille : il dira juste « Brad », puis te regardera comme si c'était toi qui étais bizarre.

Ce soir, il y a deux listes sur ton porte-bloc. La première, `names`, contient les noms complets de toutes les personnes invitées. La seconde, `plusOnes`, indique combien de personnes supplémentaires chacun de ces invités a le droit de faire entrer avec lui (ses « +1 », _plus-ones_ en anglais). Les deux listes ont été écrites ensemble, entrée par entrée, dans le même ordre : elles sont donc alignées. Par exemple, la troisième entrée de la liste des noms correspond à la même personne que la troisième entrée de la liste plusOnes.

Écris une fonction appelée `plusOnesFor` (« les +1 de »). La fonction a trois entrées : la liste `names`, la liste `plusOnes`, et le **prénom** de la personne qui se tient devant toi en ce moment. Tu dois renvoyer le nombre d'invités supplémentaires que cette personne a le droit de faire entrer.

Attention, cependant. Une file d'attente se forme, et ces gens-là n'attendent pas en silence. « Brad » veut dire Brad Pitt, pas Bradley Cooper. Et une ou deux de ces stars sont assez connues pour avoir carrément laissé tomber leur nom de famille.

Certains invités figurent sur la liste mais n'ont le droit de faire entrer personne : `0` est donc une réponse tout à fait valable pour un nom qui est sur la liste. Une personne qui n'est pas du tout sur la liste, c'est une autre histoire : pour elle, tu dois renvoyer la string `"Not on the list!"`, exactement comme elle est écrite.

### Méthodes et propriétés des tableaux

Tout comme les strings, les tableaux ont aussi des méthodes et des propriétés. Dans cet exercice, tu peux utiliser la propriété `.length`. Elle fonctionne exactement comme pour les strings, sauf qu'ici elle t'indique combien d'éléments contient le tableau, plutôt que combien de lettres contient la string. Par exemple :

```js
["Jeremy", "Erik", "Aron"].length
// 3
```

Amuse-toi bien !
