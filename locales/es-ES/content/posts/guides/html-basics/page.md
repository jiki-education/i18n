---
title: "Fundamentos de HTML"
excerpt: "Qué es realmente una página web, cómo está construida y las etiquetas que usarás para estructurar todo lo que crees en la web."
tags: ["front-end-basics"]
seo:
  description: "Una guía para principiantes sobre HTML. Aprende qué es HTML, cómo se estructura una página web con head y body, y las etiquetas más importantes que debes conocer."
  keywords: ["html", "fundamentos de html", "aprender html", "etiquetas html", "estructura de página web", "principiantes"]
en_md5: a3a8af4d009d64ef8339dc7e2661ef82
---

## Introducción

En esta guía quiero hablar un poco sobre qué es realmente una página web y cómo funciona. Vamos a ceñirnos a lo más básico. Si ya tienes algo de experiencia con HTML, probablemente esto te parezca muy elemental. Si no, esta guía debería ser una buena base para todo lo que viene después.

## Qué es realmente una página web

Una página web es simplemente un archivo de texto. Cuando visitas un sitio web, el navegador recibe un archivo HTML, lo lee y lo dibuja para crear la página que ves.

Puedes comprobarlo ahora mismo. Ve a cualquier sitio web, haz clic derecho en cualquier parte de la página y elige **Ver código fuente de la página**. Eso es el HTML. En un sitio grande te parecerá abrumador, un montón de cosas, pero todo está construido con los mismos pocos bloques que vamos a ver a continuación.

HTML significa **HyperText Markup Language** («lenguaje de marcado de hipertexto»). «Marcado» simplemente quiere decir que tomamos un texto y lo marcamos con información adicional sobre qué es cada parte. El navegador, ya sea Chrome u otro, lee esas marcas y las usa para decidir cómo colocar todo en la pantalla.

## Etiquetas

HTML es famoso por tener **etiquetas**, que empiezan con `<` y terminan con `>`. Entre esos paréntesis angulares ponemos aquello de lo que trata la etiqueta. Luego viene algo de contenido y después una etiqueta de cierre, que es igual a la de apertura pero con una barra diagonal.

Veamos un ejemplo:

```html
<p>Hello there.</p>
```

La `p` significa «párrafo». Al escribir esto, le estamos diciendo al navegador que queremos que muestre un párrafo en pantalla y que el texto de ese párrafo es «Hello there.».

Las etiquetas también pueden llevar información adicional llamada **atributos**, que se colocan dentro de la etiqueta de apertura. Un enlace es un buen ejemplo:

```html
<a href="https://jiki.io">Visit Jiki</a>
```

Para crear un enlace usamos la etiqueta `a` (que significa «ancla», por [razones históricas un poco peculiares](https://thehistoryoftheweb.com/brief-history-hypertext/)). Un enlace normalmente tiene un atributo `href`, que indica a dónde lleva el enlace, y el texto entre las etiquetas es lo que se puede pinchar.

Algunas etiquetas no envuelven ningún contenido, por lo que no tienen etiqueta de cierre. El ejemplo clásico es la imagen:

```html
<img src="photo.jpg" alt="A photo of me on a mountain" />
```

`img` significa «image» (imagen). El atributo `src` apunta al archivo de la imagen y el atributo `alt` describe la imagen para las personas que usan lectores de pantalla. También es lo que se muestra si la imagen no se carga.

## La anatomía de una página

Todas las páginas web comparten el mismo esqueleto. Aquí tienes la página **válida** más mínima que puedes crear (puedes hacer páginas no válidas con menos HTML, que el navegador igualmente mostrará, pero empecemos como queremos seguir, ¡portándonos como desarrolladores responsables!):

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Jeremy Walker</title>
  </head>
  <body>
    <h1>Jeremy Walker</h1>
    <p>I build things on the web.</p>
  </body>
</html>
```

Leámosla de arriba abajo.

La línea `<!doctype html>` le dice al navegador que este es un documento HTML moderno. Es un fragmento de código repetitivo obligatorio. Escríbelo una vez al principio y olvídate de él.

La etiqueta `html` es el elemento raíz que envuelve todo el documento. El atributo `lang="en"` indica a los navegadores y motores de búsqueda que la página está escrita en inglés.

Dentro de ella tenemos dos partes: el **head** y el **body**.

### El head

El head es todo lo que **no** aparece en la pantalla. Son metadatos, y metadatos simplemente significa información sobre la página, no contenido que veas. En nuestro ejemplo hay dos cosas dentro de él:

- `<meta charset="UTF-8" />` dice qué conjunto de caracteres usa la página. UTF-8 es el conjunto de caracteres estándar y cubre prácticamente todo: letras latinas, caracteres acentuados, otros alfabetos e incluso emojis. Si pegas un emoji en tu HTML, esta línea es la que hace que se muestre correctamente. Inclúyela siempre.
- `<title>` establece el texto que aparece en la parte superior de la pestaña del navegador. También es lo que los motores de búsqueda usan como titular de tu página. Algo en lo que te encontrarás pensando mucho mientras programas es qué quieres que aparezca ahí cuando alguien tenga veinte pestañas abiertas.

A menudo verás una línea más en el head que vale la pena reconocer:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Esto le dice a los teléfonos que muestren la página a un tamaño razonable en lugar de completamente alejada. Por ahora no tenemos que preocuparnos más por esto. Inclúyela y sigue adelante.

### El body

El body es todo lo que realmente ves, todo lo que está en el gran espacio cuadrado debajo de las pestañas y la barra de direcciones. Cada título, párrafo, imagen y enlace vive dentro del body. El resto de esta guía habla de las etiquetas que van ahí.

## index.html

Antes de pasar a las etiquetas, hay algo más que conviene saber. Existe una convención muy antigua que dice que un archivo llamado `index.html` es la primera página de un sitio web. Si entras en un dominio sin añadir nada más, el sitio web comprueba si existe un archivo llamado `index.html` y, si lo hay, simplemente te muestra su contenido. El archivo en sí no tiene nada de mágico. Solo es un estándar que casi todos los sitios web siguen, de modo que tu página principal debería estar en un archivo con ese nombre.

## Las etiquetas que usarás primero

Puedes construir una página realmente útil con menos de diez etiquetas. Echémosles un vistazo, más o menos en el orden en que las necesitarás.

### Encabezados

Los encabezados vienen en seis niveles, de `h1` a `h6`:

```html
<h1>Jeremy Walker</h1>
<h2>About me</h2>
<h3>My photography</h3>
```

El `h1` es el encabezado principal de la página y normalmente solo debería haber uno. Usa `h2` para los encabezados de sección, `h3` para las subsecciones dentro de esas, y así sucesivamente. Como `h1` es un encabezado de nivel uno, el navegador sabe que debe hacerlo un poco más grande y un poco más negrita.

Elige los niveles de encabezado por su significado, no por el tamaño. Le dan a tu página un esquema, parecido a los capítulos y secciones de un libro.

### Párrafos

La etiqueta `p` marca un párrafo de texto, y casi todas las palabras de cualquier página viven dentro de una:

```html
<p>I have been building things on the web for thirty years.</p>
<p>These days I spend most of my time working on Jiki.</p>
```

Cada párrafo va en su propia etiqueta y el navegador añade espacio entre ellos automáticamente.

### Listas

Hay dos tipos de listas. Una **lista sin orden** (`ul`) te da viñetas, y una **lista ordenada** (`ol`) te da números. Dentro de cualquiera de ellas, cada entrada es un **elemento de lista** (`li`):

```html
<ul>
  <li>Photography</li>
  <li>Podcasting</li>
  <li>Teaching people to code</li>
</ul>
```

Cambia el `ul` por un `ol` y las viñetas se convierten en 1, 2, 3.

### Enlaces

Los enlaces son lo que hacen de la web una web. La etiqueta `a` convierte cualquier cosa en algo pinchable:

```html
<p>You can find my code on <a href="https://github.com/ihid">GitHub</a>.</p>
```

Los enlaces pueden apuntar a otros sitios web o a otras páginas de tu propio sitio. Si tienes un `resume.html` al lado de tu `index.html`, puedes enlazarlo con `<a href="resume.html">Mi currículum</a>`.

### Imágenes

La etiqueta `img` coloca una imagen en la página:

```html
<img src="images/me.jpg" alt="Jeremy standing on a hill in the Lake District" />
```

El `src` puede ser un archivo de tu propio sitio o una dirección web completa. Siempre rellena el texto de `alt` con una descripción real de la imagen.

### Énfasis

Dos pequeñas etiquetas te permiten enfatizar palabras dentro de tu texto. `strong` marca algo como importante y los navegadores lo muestran en negrita. `em` marca énfasis y los navegadores lo muestran en cursiva:

```html
<p>The struggle is where the <strong>learning</strong> happens, so <em>write your own solutions</em>.</p>
```

## Dándole estructura a tu página

Las etiquetas que hemos visto hasta ahora describen piezas individuales de contenido. Hay una segunda familia de etiquetas que describen las regiones de una página. A menudo se las llama **etiquetas semánticas**, porque dan significado a cada área en lugar de cambiar su apariencia:

- `header` envuelve la zona superior de la página, normalmente el nombre de tu sitio y el logo.
- `nav` envuelve la navegación, el conjunto de enlaces a las demás páginas de tu sitio.
- `main` envuelve el contenido principal de la página. Solo debería haber uno.
- `section` agrupa un bloque diferenciado de contenido, normalmente con su propio encabezado.
- `article` envuelve una pieza independiente, como una entrada de blog o una noticia.
- `footer` envuelve la zona inferior, normalmente con información de copyright y enlaces de contacto.

Una página principal personal que use estas etiquetas podría tener esta forma:

```html
<body>
  <header>
    <h1>Jeremy Walker</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="resume.html">Resume</a>
      <a href="portfolio.html">Portfolio</a>
    </nav>
  </header>
  <main>
    <section>
      <h2>About me</h2>
      <p>...</p>
    </section>
    <section>
      <h2>My projects</h2>
      <p>...</p>
    </section>
  </main>
  <footer>
    <p>Get in touch at jeremy@example.com.</p>
  </footer>
</body>
```

Por sí solas, estas etiquetas no cambian mucho la apariencia de la página. Entonces, ¿por qué molestarse? Porque una estructura con significado ayuda a todo lo que lee tu página y no es un humano mirando una pantalla. Los lectores de pantalla usan estas etiquetas para permitir que las personas ciegas salten directamente a la navegación o al contenido principal. Los motores de búsqueda las usan para entender de qué trata tu página. Y cuando más adelante quieras darle estilo, tenerla bien organizada te facilita mucho todo.

Si una parte de la página no encaja en ninguno de esos significados, existen dos contenedores genéricos: `div` para un bloque de contenido y `span` para unas cuantas palabras dentro de un texto. No significan nada en absoluto, y precisamente por eso deberías usar primero las etiquetas con significado.

## Más etiquetas que reconocer

No necesitas memorizarlas, pero te las encontrarás al ver las páginas de otras personas, así que vale la pena saber que existen:

- `blockquote` para una cita de otra fuente.
- `code` para un fragmento de código dentro del texto, y `pre` para un bloque de texto preformateado.
- `table`, con `tr` para cada fila y `td` para cada celda, para datos genuinamente tabulares.
- `form`, `input`, `label` y `button` para recoger información de los visitantes.
- `video` y `audio` para incrustar medios.
- `br` para un salto de línea dentro del texto. Úsala muy poco. Si quieres un párrafo nuevo, usa un nuevo `p`.

En total hay más de cien etiquetas, pero las de esta guía cubren la gran mayoría de lo que verás y escribirás. Cuando te encuentres con una que no reconozcas, búscala en [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), que es la referencia que usan los profesionales.

## Hacia dónde ir ahora

La mejor manera de fijar todo esto es construir algo. Crea un `index.html`, dale el esqueleto de esta guía y estructura una página sobre ti con encabezados, párrafos, listas y enlaces. Luego ábrela en tu navegador y mira lo que has creado.

Cuando te sientas cómodo, acostúmbrate a ver el código fuente de los sitios web que visites. Empezarás a reconocer las etiquetas por todas partes y verás que incluso los sitios más sofisticados están construidos exactamente con las mismas piezas que acabas de aprender.

De momento tu página se verá muy sencilla, y está bien. El HTML le da estructura a una página. Hacer que se vea bien es tarea del CSS, que es hacia donde nos dirigimos ahora.
