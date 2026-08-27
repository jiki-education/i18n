---
title: "Preparación de comidas"
description: "Calcula qué ingredientes necesitas comprar para tu receta."
en_md5: 2326187734cf4b307264fef2b0dea2fd
---

Eres de esas personas a las que les gusta pasarse por la tienda cada día para comprar los ingredientes que necesitas para la cena. Es una buena excusa para estirar las piernas y charlar con el tendero del barrio.

Cada día eliges una receta, miras lo que hay en la nevera y apuntas lo que tienes que comprar.

Ahora has decidido hacerte la vida un poco más fácil escribiendo un programa que haga el trabajo duro por ti. Comprueba lo que hay en tu lista, lo compara con lo que hay en la nevera y te muestra la diferencia.

Tu tarea es escribir una función llamada `shoppingList(fridgeContents, recipeItems)` (lista de la compra). Recibe dos entradas: el contenido de tu nevera como un array de strings y los ingredientes de la receta, también como un array de strings. Debe devolver las cosas que necesitas comprar, como un array de strings.

Por ejemplo:

```javascript
let fridgeContents = ["tomatoes", "leaves", "milk"]
let recipeItems = ["beef", "tomatoes", "peppers"]

shoppingList(fridgeContents, recipeItems)
// ["beef", "peppers"]
```

### El método push

Para resolver el ejercicio tienes que ir construyendo tu array con el método `.push(element)`. Solo puedes crear un array nuevo en tu código. Si no tienes claro qué hacer, vuelve a ver el vídeo anterior.

También puedes usar el método `includes` (más abajo tienes un recordatorio).

¡Diviértete!
