---
title: "La fascinante historia del editor de texto"
excerpt: "De perforar agujeros en cartón a editores que escriben código por ti. La historia del modesto editor de texto y la rivalidad entre Vi y Emacs, que es más antigua que la mayoría de las personas vivas hoy en día."
tags: ["history", "text-editors", "vim", "emacs", "coding"]
seo:
  description: "La historia del editor de texto, desde las tarjetas perforadas y los editores de línea hasta Vi, Emacs, VS Code y la era de la IA. Cómo se fue acortando la brecha entre una idea y el código en ejecución."
  keywords: ["historia de los editores de texto", "vi vs emacs", "historia del editor de texto", "historia de los editores de código"]
en_md5: 1746a724d6fb171afc5dc961c3519e37
---

## Introducción

Desde que empecé a programar hace 30 años, he usado un editor de texto casi todos los días. He probado muchos diferentes y de vez en cuando me he vuelto un poco religioso sobre cuál es el mejor.

Durante todo ese tiempo, uno de los primeros ritos de iniciación de un nuevo desarrollador es instalar y aprender a usar un editor de texto. Pero a medida que la programación con agentes cambia lo que significa ser desarrollador, la era del dominio del editor de texto tal vez esté llegando a su fin.

Así que pensé que sería interesante repasar la historia del editor de texto. De perforar agujeros en cartón y esperar horas, a editar una línea a la vez en una impresora, a una rivalidad entre Vi y Emacs que es más antigua que la mayoría de las personas vivas hoy en día.

Esta es la historia del modesto editor de texto.

## Antes del editor: agujeros en cartón (años 50 y 60)

Es difícil imaginar programar sin una pantalla donde ver tu código, pero así empezó esto.

En los años 50 y 60, la pantalla aún no se había inventado y, en su lugar, los programas se perforaban físicamente en tarjetas de cartón (o cinta de papel), una línea de código por tarjeta. «Editar» significaba volver a perforar una tarjeta, o intercambiar tarjetas físicamente en la baraja.

Si mi código tarda más de unos segundos en ejecutarse, me frustro mucho con el ciclo de retroalimentación lento, pero en esa época, la retroalimentación se medía en horas. Entregabas tu baraja a un operador, quien luego la colocaba en una cola de tareas para ejecutar. Recibías una impresión de vuelta horas, o tal vez días, después. ¡Me imagino que un «error tipográfico» realmente no era algo entonces…!

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/keypunch-operator.webp" alt="Una operadora de keypunch en los años 50, perforando datos en tarjetas." />
  <figcaption>Una operadora de keypunch en los años 50. Foto por la Oficina del Censo de EE.UU. vía <a href="https://commons.wikimedia.org/wiki/File:Keypunch_operator_1950_census_IBM_016.jpg">Wikimedia Commons</a>, dominio público.</figcaption>
</figure>

## El ordenador empieza a responder (años 60)

Dos invenciones arrastraron a la edición fuera de ese lento mundo por lotes y la llevaron a algo interactivo.

La primera fue el **teletipo**. El teletipo reemplazó el concepto de lotes de tarjetas preperforadas. En su lugar, escribías en un teclado. Las pulsaciones de teclas se enviaban a la máquina en tiempo real, y esta imprimía sus respuestas directamente en un rollo de papel. Todavía no había pantalla, pero por primera vez tenías un canal vivo, de ida y vuelta, con el ordenador en lugar de una pila de cartón.

La segunda fue el **tiempo compartido**. Sin el tiempo compartido, un ordenador seguiría estando conectado a una persona a la vez, limitado a la velocidad a la que esta podía escribir y procesar respuestas. Esto generaba una enorme cantidad de tiempo desperdiciado esperando a que el operador humano actuara. El tiempo compartido resolvió eso al permitir que la máquina alternara entre diferentes personas a la vez. Varias personas podían estar conectadas a una misma máquina, y esta cambiaba tan rápido que cada una tenía la ilusión de tener todo el ordenador para sí.

Junta esas dos y tienes una conversación de verdad con la máquina. Y una vez que puedes tener una conversación, puedes empezar a editar tu código mientras estás ahí sentado, línea por línea, en lugar de volver a perforar tarjetas y rezar. Que es exactamente lo que los primeros editores reales te permitían hacer.

<figure class="post-figure" style="max-width:300px">
  <img src="/images/blog/the-history-of-the-text-editor/teletype-asr33.webp" alt="Un terminal Teletype Model 33 ASR, que imprimía la salida en papel en lugar de una pantalla."/>
  <figcaption>Teletype Model 33 ASR. Foto por ComputerGeek7066 vía <a href="https://commons.wikimedia.org/wiki/File:Teletype_model_33_ASR.jpg">Wikimedia Commons</a>, CC BY-SA 4.0.</figcaption>
</figure>

## Los editores de línea: ed, QED y TECO (1962-1971)

Los años 60 trajeron otro cambio de paradigma enorme. Tu programa dejó de ser un objeto físico que llevabas (una baraja de tarjetas en una caja) y se convirtió en un archivo con nombre que vivía en el disco del ordenador. En lugar de imprimir una nueva tarjeta para cambiar tu programa, ahora podías realmente editar tu programa.

Sin embargo, todavía no teníamos pantallas. En su lugar, todo lo que ejecutabas y todo lo que se copiaba se imprimía en una hoja de papel. Esa impresión es lo que se conoce como una «copia impresa», un registro permanente de las instrucciones que le dabas al ordenador.

Esta fue la primera vez que tuvimos algo parecido a los editores modernos, pero todavía eran bastante extraños porque estaban **orientados a líneas**. Trabajabas una línea a la vez, y estaban basados en comandos. Emitías comandos (algunos de los cuales resultan muy reconocibles para quienes hemos usado Vim), y esos comandos hacían cambios. Por ejemplo, editar un poema para corregir un error tipográfico podría verse así:

```
input         output            what it does
------------  ----------------  ----------------------------------------
ed poem       45                open the file "poem"; ed prints its size
1,$p                            print all lines - ed then replies:
              Roses are red
              Violets are blu   the typo!
              Sugar is sweet
2             Violets are blu   jump to line 2; ed prints it
s/blu/blue/                     on this line, change blu to blue
p             Violets are blue  print the current line (now fixed)
w             46                write/save; ed prints the new size
q                               quit
```

Las pocas personas que programaban en esa época probablemente te hablarían de tres editores notables de este período:

- **TECO**, creado en 1962 por Dan Murphy en el MIT, fue originalmente para editar cinta de papel perforada. Era famosamente críptico y también funcionaba como un lenguaje de programación (esto importa más adelante).
- **QED**, creado en 1965/66 por Butler Lampson y L. Peter Deutsch en Berkeley, fue uno de los primeros editores de línea. Dos años después, Ken Thompson lo reescribió y le añadió **expresiones regulares** (un tipo de lenguaje de programación usado para buscar patrones en texto), la primera vez que aparecían en un editor.
- **ed**, lanzado a principios de los años 70 por Ken Thompson en Bell Labs, redujo las ideas de QED a un editor mínimo que se distribuía con el primer Unix. `ed` todavía está instalado en cada Mac y máquina Linux hoy en día, y su lenguaje de comandos es el ancestro directo de `grep`, `sed` y los comandos `:` de Vi (¡todos los cuales tienen [tracks en Exercism](http://exercism.org/tracks) si quieres aprenderlos!).

TECO también alberga lo que se considera ampliamente el primer easter egg de software conocido (una función oculta que se encuentra en muchos juegos hoy en día). En una versión posterior de TECO, escribir `make love` te daba la respuesta atrevida `not war?`. Se coló alrededor de 1967 en el Stanford AI Lab, aproximadamente una década antes de que los easter eggs se volvieran algo común en los videojuegos. ¡Puedes [instalar TECO](https://github.com/blakemcbride/TECOC) y probarlo!

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/teco-easter-egg.webp" alt="Un terminal verde sobre negro mostrando el comando make love respondido por TECO con Not war?" />
  <figcaption>El easter egg de TECO con <code>make love</code> / <code>not war?</code>, reproducido en una compilación moderna de TECO.</figcaption>
</figure>

## Ver la página completa: Bravo y WYSIWYG (1974)

Mientras tanto, en **Xerox PARC**, empezaba una rama diferente de la historia.

En 1974, Butler Lampson y Charles Simonyi lanzaron **Bravo**, el primer editor **WYSIWYG** («lo que ves es lo que obtienes»). Mostraba texto con formato, con fuentes reales en una pantalla de mapa de bits, y usaba el **ratón** para seleccionar texto (la patente del ratón es en realidad mucho más antigua, ¡pero esa es una historia para otro momento!).

Un poco como Vim, tenía dos modos: un «Modo comando» donde pulsar las teclas _hacía_ cosas, y un «Modo inserción», donde pulsar teclas escribía en la pantalla.

Este es en realidad un punto clave en nuestra historia. Por un lado, Simonyi llevó estas ideas a Microsoft, donde construyó Word y nos dio los procesadores de texto. Y por otro lado, la pantalla, el ratón y la edición modal alimentaron directamente los editores de código que vinieron después.

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/xerox-alto.webp" alt="Un ordenador Xerox Alto, que ejecutaba Bravo, el primer editor WYSIWYG." />
  <figcaption>Xerox Alto. Foto vía <a href="https://commons.wikimedia.org/wiki/File:Xerox_Alto.jpg">Wikimedia Commons</a>, CC BY-SA 2.5.</figcaption>
</figure>

## La gran rivalidad: Vi y Emacs (1976 en adelante)

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/emacs.webp" alt="Una captura de pantalla de GNU Emacs editando código." />
  <figcaption>GNU Emacs. Captura de pantalla por tecosaur vía <a href="https://commons.wikimedia.org/wiki/File:Writing_and_compiling_C%2B%2B_in_Emacs.png">Wikimedia Commons</a>, CC BY-SA 4.0.</figcaption>
</figure>

- El corazón de la historia: en **1976**, en costas opuestas, nacieron los dos editores que aún dominan la programación seria, a partir de filosofías opuestas.
- **Emacs** (MIT: Richard Stallman, con David Moon y Guy Steele): comenzó como un conjunto de **macros para TECO** («Editor MACroS»).
- La gran idea de Emacs: un editor debe ser infinitamente **programable y extensible** por su usuario. Es menos un editor de texto que un entorno Lisp en el que da la casualidad que editas texto.
- Stallman lo reconstruyó como **GNU Emacs** en 1984, y se convirtió en un buque insignia del movimiento del software libre.
- **Vi** (Berkeley: Bill Joy, entonces estudiante de posgrado, más tarde cofundador de Sun): un modo **visual** de pantalla completa construido sobre el núcleo de edición de líneas de ed.

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/vim.webp" alt="Una captura de pantalla de Vim editando código." />
  <figcaption>Vim, el descendiente moderno más popular de Vi. Captura de pantalla por Carolinedmoreschi vía <a href="https://commons.wikimedia.org/wiki/File:Dracula_Theme_being_used_on_Vim.png">Wikimedia Commons</a>, CC BY-SA 4.0.</figcaption>
</figure>

- Vi fue diseñado bajo restricciones brutales: tenía que ser utilizable a través de un **módem de 300 baudios**, donde cada carácter enviado a la pantalla contaba.
- Esa escasez produjo la genialidad de Vi: la **edición modal**, donde las pulsaciones de teclas son un lenguaje de comandos compacto para mover y transformar texto.
- **Vim** («Vi IMproved», 1991) añadió deshacer multinivel, resaltado de sintaxis y plugins. **Neovim** lo modernizó aún más posteriormente.
- La **«guerra de editores»** entre los dos bandos es la rivalidad más antigua del software, y realmente es una división filosófica: Emacs (máximo, programable, entorno para hacer de todo) versus Vi (mínimo, modal, implacablemente eficiente).
- Ambos siguen en uso diario casi 50 años después, algo asombroso para cualquier software.

## Editores para el resto de nosotros: BBEdit, TextMate, Sublime (1992-2008)

- A medida que los sistemas operativos gráficos maduraban, apareció una nueva clase de editores para desarrolladores que querían una GUI nativa, no una terminal.
- **BBEdit** (1992, Mac): el editor longevo que «no apesta».
- **TextMate** (2004, Mac): enormemente influyente durante el auge de **Ruby on Rails**. Su sistema de «bundles» y snippets, y su formato de gramática para resaltado de sintaxis, se convirtió en un estándar de facto que VS Code todavía usa hoy.
- **Sublime Text** (2008): rápido, multiplataforma, minimalista. Introdujo cosas que todos copiaron, como el minimapa, los cursores múltiples y una paleta de comandos difusa.
- Sublime demostró que había un enorme mercado entre el «editor de terminal» y el «IDE pesado».

## La era de la tecnología web: Atom y VS Code (2014-2015)

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/vscode.webp" alt="Una captura de pantalla de VSCodium, la compilación de código abierto de VS Code." />
  <figcaption>VSCodium, la compilación completamente de código abierto de VS Code (visualmente idéntica al lanzamiento de Microsoft, pero con licencia MIT por lo que se puede mostrar aquí). Captura de pantalla vía <a href="https://commons.wikimedia.org/wiki/File:VSCodium_official_screenshot.png">Wikimedia Commons</a>, MIT.</figcaption>
</figure>

- **Atom** (GitHub, 2014): «un editor de texto hackeable para el siglo XXI», construido con tecnologías web (HTML, JS, Node) a través de lo que se convirtió en **Electron**. Hackeable como Emacs, pero lento. GitHub lo retiró en diciembre de 2022.
- **VS Code** (Microsoft, 2015): también basado en Electron, pero más rápido y con todo incluido (autocompletado, depuración, Git integrado). Ganó de manera decisiva y ahora domina.
- La idea estructural más importante de VS Code fue el **Protocolo de Servidor de Lenguaje (LSP)**.
- Antes de LSP, cada editor tenía que reimplementar desde cero el «entendimiento» de cada lenguaje (autocompletado, ir a definición, verificación de errores).
- Con LSP, un lenguaje envía un «servidor» con el que cualquier editor puede comunicarse. Desacopló la inteligencia del lenguaje del editor, y ahora es un estándar de la industria.

## La era de la IA: editores que escriben contigo (2021 en adelante)

- El capítulo más reciente transforma el editor de una herramienta con la que manipulas texto a un **colaborador**.
- **GitHub Copilot** (2021): autocompletado de IA en línea, posteriormente expuesto a través de su propio servidor de lenguaje para que cualquier editor pueda conectarse.
- **Cursor** y **Windsurf**: bifurcaciones de VS Code que reconstruyen el ciclo de edición en torno a la IA (ediciones en múltiples archivos, chat, agentes) manteniendo las extensiones de VS Code.
- **Zed** (Rust, código abierto 2024): un editor desde cero, acelerado por GPU, construido para velocidad, colaboración e IA.
- **Herramientas agentivas** (como Claude Code): donde el «editor» se conduce cada vez más a sí mismo, y el humano revisa y dirige en lugar de escribir.
- Curiosamente, LSP se está reutilizando de nuevo, esta vez para dar a los agentes de IA inteligencia de código precisa en lugar de conjeturas basadas en búsqueda de texto.

## ¿El fin de una era? (hoy)

- Cada era de esta historia comprimió la brecha entre tener una idea y verla en ejecución: tarjetas por lotes (horas), a editores de línea (una línea a la vez), a editores de pantalla completa (todo el archivo), a la inteligencia de IDE (el editor entiende tu código), a la IA (el editor escribe contigo).
- Y sin embargo, los dos editores de 1976, Vi y Emacs, siguen aquí. Las ideas fundamentales (eficiencia modal, extensibilidad programable) sobrevivieron a cada ola de hardware.
- Durante 50 años, aprender tu editor fue un rito de iniciación. Eso podría estar cambiando.
- [Conexión con Jiki / pensamiento final aquí]
- Gracias por leer
