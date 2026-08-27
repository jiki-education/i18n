---
title: "Preparación de comidas"
description: "Calcula qué ingredientes necesitas comprar para tu receta."
en_md5: 2326187734cf4b307264fef2b0dea2fd
---

Eres de esas personas a las que les gusta pasarse por la tienda cada día para comprar los ingredientes que necesitas para la cena. Es una buena excusa para estirar las piernas y charlar con el tendero del barrio.

Cada día eliges una receta, revisas lo que hay en el refrigerador y anotas lo que necesitas comprar.

Ahora decidiste hacerte la vida un poco más fácil: escribir un programa que hace el trabajo pesado por ti. El programa revisa lo que está en tu lista, lo compara con lo que hay en el refrigerador y te muestra la diferencia.

Tu tarea es escribir una función llamada `shoppingList(fridgeContents, recipeItems)` (lista de compras). Recibe dos argumentos: el contenido de tu refrigerador como un array de strings y los ingredientes de la receta, también como un array de strings. Debe devolver lo que necesitas comprar, como un array de strings.

Por ejemplo:

```javascript
let fridgeContents = ["tomatoes", "leaves", "milk"]
let recipeItems = ["beef", "tomatoes", "peppers"]

shoppingList(fridgeContents, recipeItems)
// ["beef", "peppers"]
```

### El método push

Para resolver el ejercicio, necesitas armar tu array usando el método `.push(element)`. Solo puedes crear un array nuevo en tu código. Si no estás seguro de qué hacer, vuelve a ver el video anterior.

Quizás también quieras usar el método `includes` (más abajo hay un recordatorio).

¡Diviértete!
