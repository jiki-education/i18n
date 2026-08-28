---
title: "Palabras del letrero"
description: "Divide el nombre de un negocio en las palabras sueltas que hay que imprimir."
en_md5: 2f780499eb5dd8f51479d4142bc16acc
---

Hace un tiempo creaste un programa para ayudar a un cliente con su negocio de letreros. Ahora ha vuelto con un requisito nuevo. Fabrica letreros más grandes: imprime cada palabra por separado y luego monta las palabras en los escaparates del negocio allí mismo.

Necesita que hagas el primer paso del programa: tomar el nombre del negocio y dividirlo en palabras que pueda imprimir.

Escribe una función llamada `signWords(businessName)` (es decir, «palabras del letrero» y «nombre del negocio») que reciba el nombre del negocio y devuelva un array con las palabras que contiene. Por ejemplo, `signWords("Frank's Hotdogs")` debería devolver `["Frank's", "Hotdogs"]`.

Las palabras son los elementos que están separados por espacios. Pero ten en cuenta una cosa: a veces los clientes envían el nombre de su negocio con varios espacios seguidos por accidente. Si eso ocurre, tienes que ignorarlos, de modo que <code>"Frank's&nbsp;&nbsp;&nbsp;Hotdogs"</code> debería devolver igualmente `["Frank's", "Hotdogs"]`.

### Push y split

La clave de este ejercicio es usar el método `push` para construir el array. También puedes usar el método `split`, pero puede que te resulte más fácil dividir las palabras por tu cuenta. Ninguna de las dos opciones es correcta o incorrecta. Si necesitas recordar cómo funcionan los métodos, consulta lo que hay más abajo.

¡Diviértete!
