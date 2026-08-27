---
title: "Palabras del letrero"
description: "Separa el nombre de un negocio en las palabras individuales que se van a imprimir."
en_md5: b2d0a5c31cfbb7036c1a860f59498ff8
---

Hace un tiempo creaste un programa para ayudar a un cliente con su negocio de letreros. Ahora volvió con un nuevo requisito. Está haciendo letreros más grandes: imprime cada palabra por adelantado y después arma las palabras en las ventanas del negocio directamente en el lugar.

Necesita que hagas el primer paso del programa: tomar el nombre del negocio y separarlo en palabras que se puedan imprimir.

Escribe una función llamada `signWords(businessName)` (`signWords` significa «palabras del letrero»; `businessName` significa «nombre del negocio») que recibe el nombre del negocio y devuelve un array de las palabras que contiene. Por ejemplo, `signWords("Frank's Hotdogs")` debe devolver `["Frank's", "Hotdogs"]`.

Las palabras son elementos separados por espacios. Pero ten en cuenta un detalle: a veces los clientes envían el nombre de su negocio con varios espacios seguidos por accidente. Si eso pasa, debes ignorarlos, de modo que `"Frank's   Hotdogs"` debe seguir devolviendo `["Frank's", "Hotdogs"]`.

### Push y split

La clave de este ejercicio es usar el método `push` para construir el array. También puedes usar el método `split`, pero quizá te resulte más fácil hacer la separación manualmente. No hay una opción correcta y otra incorrecta. Si necesitas repasar cómo funcionan los métodos, revisa más abajo.

¡Diviértete!
