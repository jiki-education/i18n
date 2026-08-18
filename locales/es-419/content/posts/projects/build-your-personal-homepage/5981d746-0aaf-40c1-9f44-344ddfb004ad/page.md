---
title: "Episodio 1: Programación con agentes 101"
excerpt: "Arrancamos este proyecto con una inmersión profunda en la programación con agentes. Qué son los LLM y los agentes, cómo funcionan los modelos y el esfuerzo, cómo prepararte gratis con OpenCode y cómo construir tu primera página web."
summary:
  from: "Damos por hecho que no sabes nada sobre la web ni sobre la programación con agentes."
  to: "Entiendes el ciclo de la programación con agentes y escribes tu primera página de inicio básica en el navegador."
  keyConcepts: ["Programación con agentes", "Modelos y esfuerzo", "Tokens y contexto", "Fundamentos de HTML"]
seo:
  description: "Aprende qué es la programación con agentes, cómo funcionan los LLM, los modelos y los tokens, y construye tu primera página web con OpenCode."
  keywords: ["programación con agentes", "llm", "html", "principiantes"]
en_md5: 179b6fdc5bf4a07aac6f6fb60589af30
---

## Introducción

Bienvenido al primero de esta nueva serie sobre cómo usar agentes y cómo usar LLM para construir cosas en esta época moderna en la que programar cambió tantísimo. Hicimos muchas sesiones como esta a lo largo de los años para Exercism, pero esta es la primera sesión en vivo oficial de Learn to Build para Jiki.

Déjame explicarte qué va a ser esta serie, qué vamos a ver hoy en concreto, qué vamos a cubrir a lo largo de la serie y para quién es. Voy a empezar por esa última pregunta.

## Para quién es esto

Esto es realmente para dos grupos de personas. Por un lado, quienes son totalmente nuevos en la programación, nuevos en todo este mundo, que solo quieren empezar y averiguar cómo pueden ponerse a aprender. Pero también es para gente con mucha más experiencia, incluso desarrolladores senior, que todavía no se metieron de lleno en los cambios que está trayendo la programación con agentes y quieren entender qué está pasando, ver algunas cosas en acción, conversar sobre ellas y construir una comprensión real de todo esto. Así que puedes estar en cualquier punto de ese espectro, desde tu primer día programando (quizá decidiste programar esta mañana, encontraste Jiki y aquí estás) hasta alguien con muchísima experiencia.

En esta serie en particular (va a haber varias series) voy a dar por hecho que no sabes nada. Así que si eres desarrollador senior, va a haber un montón de cosas que diga que te sabes de memoria, y eso quizá te resulte un poco aburrido. Si este es tu primer día, no debería haber nada que yo dé por sabido. Puede que haya cosas que se te escapen, pero estoy tratando esta sesión como si fuera para ti. Y si nunca hiciste este nuevo tipo de programación y tienes más experiencia, esto igual te va a servir.

Te voy a mostrar un poco qué significa programar de esta forma. Te voy a mostrar un par de ejemplos de cosas que necesito resolver ahora mismo en Jiki, y las voy a arreglar, a modo de preámbulo. Después vamos a hablar de algunos de los términos que usamos y de cómo encajan estas cosas entre sí. Y luego vamos a ir a construir algo de verdad. Vamos a hacer una nueva página de inicio.

Esto es algo que quiero que todos hagan. Constrúyete un sitio web nuevo. Puede ser tu página de inicio. Puede ser otra cosa. Quizá simplemente arma tu currículum en código, lo que sea. Después de esta sesión, pon en práctica lo que viste aquí y prueba cosas.

Yo voy a usar Claude y algunas cosas más avanzadas, pero también te voy a mostrar cómo puedes hacer esto si no tienes dinero para gastar. Si quieres trabajar con agentes gratis, eso también lo vamos a ver.

### ¿Qué deberías tener preparado de antemano?

Absolutamente nada. Solo aparece. Yo te voy a explicar las cosas, y después voy a publicar una serie de guías que acompañan esto. Guías sobre cómo instalar OpenCode, que es lo que vamos a ver, guías sobre los distintos términos de los LLM y cómo funcionan, y una guía sobre cómo usar GitHub, de lo que también vamos a hablar. Vas a poder pasar un par de días poniéndote al día y trabajando con esas guías.

Si tienes una pregunta que no respondo en este episodio, siempre puedes entrar al foro en [forum.jiki.io](https://forum.jiki.io) y preguntarla ahí. Yo estoy ahí. También hay otros desarrolladores senior y otras personas que están mirando, y también pueden responder preguntas.

## Detectar los errores que cometen los LLM

Voy a saltar al foro de Jiki, a algo que noté hace un rato. Estos son distintos temas relacionados con la traducción, y vas a notar que la mayoría tiene una bandera junto al país. Una bandera holandesa, una bandera alemana. Junto al turco tenemos un pavo, porque en inglés el país (Turkey) y el ave (turkey) se escriben igual. Probablemente un poco racista. Seguramente vamos a tener que ocuparnos de eso en un momento. Pero el que vi fue el de indonesio. Toda esta elección de emojis la hizo Claude. Y aquí claramente se inventó un emoji, o consiguió un emoji que no funciona.

![El foro de Jiki mostrando los temas de traducción. El turco tiene un emoji de pavo en lugar de una bandera, y el indonesio muestra un emoji :garuda: roto.](/images/projects/build-your-personal-homepage/setting-up-the-project/forum-language-flags.webp)

Aquí es donde quiero que empecemos, porque esto es real. Lo vi dos minutos antes de salir en vivo. Este es el tipo de cosa que vas a ver mucho mientras trabajas con estos LLM y estos agentes. Se inventan cosas. Creen que aquí hay un emoji, pero no funciona en este sitio web. Se supone que tienen que poner una bandera de Turquía, pero en su lugar ponen un pavo literal.

Estos son los errores que a nosotros como humanos nos resultan obvios. Los vemos al instante. Saltan a la vista. Nos reímos un poco. Lo preocupante son esas mismas decisiones que el LLM está tomando aquí. Y este es el modelo más potente. Este es Fable. Este es el modelo tan inteligente y peligroso que el gobierno de Estados Unidos lo prohibió. Y aun así pone un pavo en lugar de la bandera de Turquía, y no necesariamente sabe que eso puede molestar a alguien. Claro que también podría tener un gran sentido del humor. No estoy seguro.

Estas son las cosas visibles, las obvias. Imagina cuántos otros errorcitos, o mejor dicho malas decisiones, están tomando estos LLM por debajo. A medida que avancemos el próximo año, o muchos años, haciendo estas transmisiones, los LLM van a mejorar. Pero lo que quiero que sepas desde ya, y que de verdad internalices, es que estos no son una especie de dioses de la programación a los que les puedes dar cualquier cosa y lo van a hacer todo bien. Cometen errores constantemente. Algunos son obvios y graciosos, y otros no. Si quieres ser un desarrollador de software moderno, buena parte de tu trabajo es buscar esos errores. Y con eso no me refiero a buscar cuándo ponen un pavo en lugar de la bandera turca. Me refiero a buscar los errores conceptuales que cometen, las ideas, las cosas que se les ocurren que simplemente no terminan de sentirse bien y no terminan de tener sentido.

### ¿Qué significa i18n?

Significa internacionalización. 18 es la cantidad de letras que van entre la i y la n. Es un atajo.

## La programación con agentes en pocas palabras

Veamos cómo se ve programar un poco con agentes. Tomemos ese glosario de indonesio con el emoji roto. Voy a sacarle una captura de pantalla, ir a mi terminal y entrar a Claude Code. En un ratito vamos a hablar de cómo configurar todo esto. Quizá ahora se ve un poco intimidante, todo negro y verde, pero ya vamos a llegar a eso.

Lo que quiero mostrarte es esto. Puedo arrastrar la imagen y puedo decir «arregla el emoji incorrecto». Y esto se va a ir, va a pensar y va a hacer un montón de cosas. Podemos ver algunas de las cosas que hace. Está ejecutando comandos. Está tratando de averiguar qué pasa. ¿Por qué está mal esta bandera? ¿Qué significa esta bandera? ¿Cómo llegó a esto? Ahora empieza a leer algunos scripts. Este es el script que crea la categoría de idioma en el foro, el script que ejecutó cuando creó esa categoría. Ahora está revisando el historial de todo lo que hizo, y trata de averiguar cuándo salió mal esto, cómo salió mal, por qué salió mal. Está leyendo varios archivos. Está ejecutando varios comandos. Puedes ver cómo aumenta, ya va por su cuarto comando, y así.

![Claude Code en la terminal trabajando en «Fix the incorrect emoji», buscando patrones, leyendo archivos y ejecutando comandos de shell.](/images/projects/build-your-personal-homepage/setting-up-the-project/claude-code-fixing-emoji.webp)

Y entonces dice que lo encontró. El emoji correcto debería ser la bandera de Indonesia, no `:garuda:`. Se va, ejecuta algo que actualiza la categoría. Y si ahora vamos al foro y abrimos esto, puedes ver que lo arregló. Ahora tenemos una bandera de Indonesia.

![El tema Glosario para indonesio en el foro, ahora con la bandera correcta de Indonesia.](/images/projects/build-your-personal-homepage/setting-up-the-project/indonesian-flag-fixed.webp)

Así que esto es la programación con agentes en pocas palabras. Dijimos «haz esta cosa». Se fue. Ejecutó estos comandos distintos. Leyó algunos documentos. Está haciendo todo este trabajo muy complicado de fondo, algo de bash con pinta complicada que sería muy doloroso de escribir. A menos que seas mantenedor de Exercism, en cuyo caso es facilísimo. Pero para los simples mortales, quizá es un poco complicado de escribir. Fue revisando, tratando de averiguar cuándo salió mal esto. Leyó el historial de los archivos. Encontró la entrada de indonesio y algunos registros. Leyó las reglas que le di, encontró unas variables que le permiten ir a actualizar el foro, averiguó qué estaba mal, lo conversó brevemente conmigo y fue a actualizar esa cosa.

Así es como construí Jiki. Así es como trabajan muchos desarrolladores de software modernos, diría que probablemente la mayoría de los que trabajan hoy. Encontramos un problema como ese. Lo detectamos. Quizá nos llega en un ticket de otra persona. Y después se lo pasamos a algo como Claude, o a uno de los muchos otros modelos que hay, y ya vamos a llegar a todo eso en un rato. Ellos recorren este proceso complejo de varios pasos y después arreglan el bug.

Ahora bien, este bug es obviamente muy fácil. Es una página. Tiene un emoji incorrecto. Debería tener este emoji y tiene otro distinto. Así que lo puede arreglar bastante rápido. Pero donde todo este flujo funciona realmente bien es cuando no estamos solo tratando de arreglar una cosita. Estamos construyendo una funcionalidad nueva, o depurando algo muy complicado. Eso implica leer cientos de archivos y después necesitar escribir en algunos.

## Ser inteligente con el costo

Antes de pasar a otro ejemplo, déjame mostrarte una cosa. Aquí puedo escribir `usage`, y usage nos muestra lo que pasa por debajo. Puedes ver que eso le tomó a Claude 52 segundos de principio a fin, y que costó 37 centavos. Ahora bien, yo tengo Claude Max, lo que significa que tengo una cuota muy grande de los distintos modelos. Así que a mí no me cobran 37 centavos por eso. Va incluido en mi suscripción mensual.

![La pantalla de uso de Claude Code mostrando un costo total de 0,38 dólares y 52 segundos de tiempo de API para el arreglo del emoji.](/images/projects/build-your-personal-homepage/setting-up-the-project/claude-code-usage.webp)

Pero esto es algo de lo que quiero que estés consciente desde ya, ahora que empezamos a hablar del tema. Ese proceso de averiguar todo eso y resolverlo costó 37 centavos. Si hubiera querido, podría haber entrado al foro y editado el tema yo mismo. Podría haber seleccionado el emoji, escrito Indonesia y hecho clic en la bandera. Eso no me habría costado 37 centavos. Si imaginas cada una de las cosas que hago como desarrollador, con las horas que programamos por día, probablemente convenga ser algo inteligentes sobre para qué usamos esta inteligencia súper potente y qué podemos hacer nosotros a mano.

Esto vale especialmente para quienes no pagan una suscripción a Claude Max y no tienen mucho dinero. Te voy a mostrar cómo puedes hacer todo esto gratis. Pero cuando estás en planes gratuitos, vas a tener una cantidad limitada de uso. Es una cantidad bastante grande de uso limitado. Es todo lo que necesitas. Pero quiero que adoptes la mentalidad de no desperdiciar ese uso en cosas que puedes hacer a mano. Es mucho mejor para ti investigar por tu cuenta, averiguar qué pasa, aprender un poco en el proceso y después arreglar esa cosa. Esa es la mejor forma de aprender. Si empiezas a tirarle esto a todo, vamos a estar en problemas.

Déjame mostrarte otra cosa. Esto te muestra cuál es tu uso mensual. Este es mi último mes. Como decía, tengo este plan Claude Max, así que pago una tarifa fija de 200 dólares al mes. Pero si no tuviera Claude Max, si estuviera pagando esto directamente, me habría costado 35 mil dólares este mes. Son tres mil millones de tokens que usé este mes. En un momento vamos a hablar de qué son los tokens. Pero puedes acumular cuentas grandes muy rápido.

![Una tabla en la terminal con el uso diario de tokens desglosado por modelo, con miles de millones de tokens usados entre Fable, Opus, Sonnet y Haiku.](/images/projects/build-your-personal-homepage/setting-up-the-project/monthly-token-usage.webp)

### ¿Y Ollama y otros modelos locales?

Funcionan. Si tienes una computadora lo bastante potente como para correr modelos locales, una buena MacBook o una buena máquina con Windows con una buena GPU, puedes ejecutar modelos en tu computadora en lugar de mandar datos a Claude y que Claude te los devuelva. Sin embargo, va a ser muchísimo más lento. Eso que acabamos de ver, que tomó 52 segundos, va a tomar 5 minutos, o media hora. Incluso en una máquina de última generación, hablamos de 10, 20 o 30 veces más lento que usar Claude u otra cosa.

### ¿No sale a veces más barato contratar a un desarrollador junior que pagar por un LLM?

Como tengo una suscripción a Claude Max, que son 200 dólares al mes, mi costo total por usar todo esto es de 200 dólares al mes. Un desarrollador junior va a costar 10 veces eso. Pero además, suelo tener quizá seis o siete Claudes corriendo a la vez. Así que si este Claude es tan bueno como un desarrollador junior, tengo seis o siete de esos juniors corriendo en pestañas distintas al mismo tiempo, haciendo cosas distintas. Ya no existe una economía en la que tenga sentido que alguien escriba este código a mano.

Pero donde sí puedes sacar provecho, donde tú como junior puedes volverte valioso, es en que si tú como junior pudieras estar manejando seis o siete Claudes a la vez, y pudieras hacer con ellos tareas más directas y más básicas, entonces le vas a estar aportando muchísimo valor a una empresa. Mi capacidad total como desarrollador es de unos cinco o seis a la vez, y aun así paso mucho tiempo pensando y leyendo. Todos van a llegar a ese tope si lo hacen bien, si están pensando en lo que pasa. Así que si quieres entrar al sector tech hoy, donde vas a aportar valor es aprendiendo a controlar estos Claudes, estos otros modelos, estos LLM, estos agentes, y aprendiendo a darles instrucciones, a potenciarlos y a revisar su trabajo de una forma sensata y potente.

## Preparar un idioma nuevo

Ese es nuestro punto de partida. Ahora ya sabes un poco cómo funcionan estas cosas. Voy a lanzar otra de estas mientras conversamos. Una de las cosas que construí es un comando para preparar un idioma desde cero, para traducir Jiki a distintos idiomas. Ya tengo el portugués de Brasil preparado en el foro, pero quiero preparar el portugués de Portugal. Voy a darle clic a ejecutar y después le echamos un vistazo.

Lo que hace esto es ir a crear información, una guía, un glosario y otras cosas para que traduzcamos el sitio web al portugués. Puedes ver el de turco en el foro. Ese es el glosario que se generó y se creó, con todos los términos que traducimos al turco.

Este agente ahora se va y va a hacer un montón de trabajo para lograrlo bien. Va a lanzar otros agentes. Tenemos un agente principal que está a cargo de esto. Va a mandar otros agentes a investigar los términos correctos para el portugués. Los va a hacer ir a mirar la documentación de Mozilla y la de Microsoft para encontrar qué términos se usan. Probablemente va a mirar Duolingo y algunos otros sitios web. Y después va a volver a reportarme un montón de información sobre lo que encontró, y me va a hacer algunas preguntas.

Mientras hace eso, quiero mirar un poco el comando que acabo de ejecutar, Bootstrap Language. Esto es lo que Claude está haciendo. Estas son las instrucciones que Claude está siguiendo. Tenemos un poco de cosas arriba que son solo información para Claude sobre cómo ejecutar esto. Y después todo lo demás es información que tú o yo podríamos leer y que explica qué pasa.

Le decimos a Claude que prepare un idioma nuevo. Le decimos que tiene que investigar cómo se escribe el idioma, acordar decisiones que solo yo puedo tomar, mirar estas guías y usar el húngaro como base, simplemente porque fue el primero que trabajamos. Aron, que es desarrollador front end aquí, es húngaro. Y después tenemos un montón de fases por las que pasa. Algunas comprobaciones que hace. Puedes ver que, en primer lugar, le decimos que revise si este idioma ya existe. Si existe, que se detenga y reporte. Y ves que lo primero que hace es decir «voy a empezar revisando si el idioma existe». Pasa, no existe, sigue adelante.

Después tiene algunos archivos que va a leer. Lee este archivo de reglas, este archivo de voz, algo más de información, y carga todo eso en su memoria, por así decirlo. En un rato vamos a hablar de qué significa eso realmente. Así que ahora tiene toda esta información ahí, todos estos documentos largos que escribí con reglas, y con cómo hablar con la voz correcta, y todas estas cosas.

Y después va y hace esta investigación. Tiene varias reglas que le di. Evitar la contaminación de contenido generado por LLM. No quiero que vaya a leer un montón de contenido que otros LLM ya escribieron. Quiero que mire solamente cosas anteriores a 2022, verificando las fechas de ese contenido antes de usarlo. Verifica en varias fuentes. Le digo que sea desconfiado, que se sienta cómodo con la incertidumbre, y después que busque varias cosas. ¿Qué metáforas usa la gente? ¿Cuál es el nivel de formalidad y de registro? Y después va a juntar todo eso en cierta estructura y va a conversarlo y detenerse conmigo. Me va a explicar lo que encontró, hacerme algunas preguntas, proponerme algunos términos clave. Y una vez que los acuerdo, una vez que los conversamos, va a ir a escribir un glosario y una guía, los va a armar y después va a crear el post del foro. Tiene la capacidad de entrar al foro de Jiki y crear ese post, y después también va a crear el post del glosario. Son dos posts separados.

Así que este es el comando que construí, que después puede seguir. Y lo podemos ver de fondo trabajando sin parar. Aquí está, ya está reportando sus hallazgos de investigación. Esta es la forma en que debería dirigirse a quienes aprenden: deberíamos usar el «tu» informal, que es la forma cálida y común de dirigirse a ellos, y no el otro tono, el formal. Y después me pide algunas decisiones. ¿Me parece bien esto? ¿Debería usar las mismas convenciones que Brasil? Me da algunos términos que eligió. Y en este punto puedo revisar y decir bueno, estoy contento con todas estas decisiones, estoy contento con tus valores por defecto. Y entonces va a continuar.

![Claude reportando su informe de investigación para el portugués de Portugal, con las fuentes y la decisión de usar el «tu» informal.](/images/projects/build-your-personal-homepage/setting-up-the-project/portuguese-research-findings.webp)

### ¿Los comandos y las skills son lo mismo?

Sí, son lo mismo. Todas las empresas de LLM tienen nombres distintos para todas estas cosas.

## Agentes y modelos

Quiero que nos detengamos un segundo a pensar en lo que pasó aquí, porque esta es una clave real para entender la diferencia entre abrir la app de Claude o ChatGPT y hablar con ella, y usar programación con agentes como esta.

Cuando hablas con Claude en una interfaz, estás haciendo una pregunta, y en la práctica tienes un agente con el que hablas, que quizá se va, revisa algo, vuelve y sigue escribiendo. Es muy claramente una conversación entre tú y una persona, un agente. Cuando trabajas con este modelo de programación con agentes, lo que pasa por debajo es que lanzamos muchos agentes para hacer cosas distintas. Vamos a tener agentes que investigan, agentes que planifican, agentes que construyen. Y podemos construir nuestros propios agentes. Agentes que prueben cosas de cierta forma, agentes que revisen que las cosas cumplan ciertos estándares. Y muchas veces el agente con el que hablamos es el que gestiona a todos los demás.

Esos agentes pueden usar modelos distintos. Así que este es un buen momento para hablar de los modelos. Seguro escuchaste mucho este término. Probablemente tengas una buena idea de qué son los modelos, pero lo explico rápido.

Distintas empresas, como OpenAI o Anthropic, tienen distintos modelos, y los modelos son el mecanismo subyacente con el que funciona un LLM. Es algo que fue entrenado con cierta cantidad de datos para operar a cierta velocidad. Los modelos frontera, como se los llama, son los mejores modelos. En el caso de Anthropic, ahora mismo es algo llamado Fable, o Mythos. Esos son más lentos, son caros, pero son muy potentes. Del otro lado del todo está Haiku, que es un modelo mucho más rápido. Es como 50 veces más barato de ejecutar, mucho más rápido, pero no razona tan bien. Y después tienes Sonnet y tienes Opus. Así que tienes estos cuatro modelos, y todos los proveedores tienen estos modelos distintos. Algunos de los de gama muy alta son súper inteligentes. Otros son mucho menos inteligentes pero mucho más rápidos.

Para una tarea básica, digamos la tarea que acabamos de ver, como por qué está mal esta bandera, no va a haber ninguna diferencia de rendimiento entre Haiku y Fable. Pero si usas Fable para hacerlo, vas a gastar 50 veces más dinero. Así que una de las cosas de las que siempre queremos estar conscientes es cuál modelo es el correcto para la tarea. Eso mantiene todo muy rápido, mantiene las cosas en el nivel de calidad que realmente necesitamos, y mantiene bajo el costo, que también es importante.

Cuando ejecutas un agente que después ejecuta varios agentes más, ellos también toman esa decisión constantemente. Si lanzan agentes para hacer cosas simples, van a usar modelos de gama baja. Si lanzan agentes para hacer cosas muy complejas, van a lanzar Fable.

## Esfuerzo

También tenemos el concepto de esfuerzo. El esfuerzo es cuánto esfuerzo está dispuesto a hacer un modelo. ¿Y qué significa esfuerzo? La forma en que funcionan estos modelos es que hablan consigo mismos. Tienen una conversación larga y continua. Lo habrás visto si usas Claude o ChatGPT, donde puedes ver las opciones de «mostrar el razonamiento» y puedes ver al modelo respondiéndose a sí mismo. Lo que hacen es razonar, escribiendo lo que creen que puede estar pasando y después construyendo sobre eso.

Cuando hablamos de esfuerzo en el mundo de Claude, y también en otras herramientas, estamos diciendo cuánto tiempo deberías pasar hablando contigo mismo antes de volver con una respuesta. Esfuerzo bajo significa no hables mucho contigo mismo, danos lo primero que se te ocurra. Esfuerzo alto significa habla mucho contigo mismo. Y lo bueno del esfuerzo alto es que Claude, en la práctica, va a decir lo primero que se le viene a la mente (es una mala analogía, pero lo primero que se le ocurre), y después también va a razonar de nuevo sobre eso para ver si es sensato o no. Después va a agregar una tercera capa, y después va a razonar sobre todo eso y ver si es sensato o no. Y después va a agregar una cuarta cosa. Va a seguir razonando sobre lo que dice hasta llegar a un punto con el que esté contento, o del que esté convencido. Mientras que con esfuerzo bajo, te va a responder al instante. Y eso puede estar mal o puede no estar mal. No tuvo ninguna verificación sobre su propio razonamiento.

Así que tenemos estos dos ejes. Tenemos la calidad del modelo: Fable, Opus, Sonnet, Haiku. Y tenemos la cantidad de esfuerzo que ese modelo va a hacer: bajo, medio, alto, extra alto. Y puedes seguir subiendo. Muchas veces los proveedores cobran más a medida que avanzas.

En Claude Code podemos cambiar de modelo simplemente escribiendo `/model`, y después podemos elegir entre Opus, Fable, Sonnet o Haiku. Y podemos elegir el esfuerzo: bajo, medio, alto o máximo, con unas cositas brillantes en el máximo, y ultracode, donde tenemos unas animaciones preciosas en las que la gente puso muchísimo esfuerzo.

Yo suelo quedarme con Opus en medio como mi modelo estándar para la mayoría de las cosas. En casi todo lo que hago, quiero algo como Opus que pueda razonarlo, y me parece que el esfuerzo medio es el equilibrio justo. Pero estoy muy consciente de eso, y cuando empiezo tareas pienso qué modelo quiero. ¿Esto es simple o es difícil? ¿Cuánto esfuerzo hace falta poner en todo este proceso?

### ¿Cómo sabemos qué modelo es mejor para cada tarea?

Lo vas a ir aprendiendo con el tiempo. Una regla práctica fácil es preguntarte qué tan difícil es para ti. ¿Es facilísimo? ¿Es como cambiar una bandera en un post del foro? Eso es facilísimo. Haiku puede hacerlo con esfuerzo bajo. ¿Le estás pidiendo algo que a ti te parece increíblemente complejo? Recurre a un modelo mejor o a más esfuerzo.

Fable es increíble para tareas largas. Para darte un ejemplo, ayer tuve una sesión abierta donde tomé todos los videos que tenemos (en algún momento voy a hablar de cómo creé los videos) y extraje todo el inglés de los videos. Todo el inglés que está escrito en pantalla, lo extraje de los videos y lo puse como una capa superpuesta, para poder cambiarlo a otro idioma y volver a exportar los videos con otro idioma en pantalla.

Le hice hacer eso a Fable. Lo lancé a la tarea. Le hice lanzar un agente Fable por cada video, así que tenía 32 Fables corriendo. Cada uno recorrió cada parte del video buscando texto. Sacaron capturas de pantalla y después actualizaron las imágenes, quitando el texto de las imágenes. Después averiguaron cuál era la tipografía en la que estaba escrito el texto, cuál era el tamaño, el grosor, el espaciado entre letras, el interlineado, el kerning, todo ese tipo de cosas para tipografías variables. Después escribieron ese texto en pantalla en el lugar correcto, y luego sacaron capturas repetidamente y las compararon hasta que las dos capturas quedaron perfectas al píxel. Tenía un Fable que planificó todo, lo investigó, lo miró, escribió algo de documentación, y después tenía un Sonnet orquestando que iba lanzando más Fables para hacer todos esos trabajos. Tomó unas tres horas. Costó unos 400 dólares. Otra vez, entraba en mi suscripción Max, pero si no habría costado unos 400 dólares. Y básicamente dejó todos los videos listos para usar.

En ese tipo de situación, yo sabía que era una tarea bastante compleja. Ya lo había intentado antes con Opus y Opus no pudo. Era demasiado complejo para Opus, así que sabía que necesitaba Fable.

### ¿Los modelos frontera son como los celulares tope de gama?

Sí, exacto. Son más inteligentes, son mejores, pero también son más caros y en general son más lentos. Y tienes que recordar que el modelo frontera de hoy es el modelo barato de dentro de un año. Eso ya es cierto. Haiku equivale al modelo frontera del año pasado. Así que Haiku ya es lo bastante bueno para hacer mucha programación, aunque sea el modelo barato del otro extremo. Solo necesitas ese modelo caro si de verdad estás haciendo algo que era imposible con el modelo anterior, como Opus. Realmente solo quieres recurrir a ese modelo frontera en situaciones específicas.

### Para alguien con mucha experiencia, ¿no es frustrante pagar por programar en lugar de hacerlo tú mismo?

Estoy pagando 200 dólares al mes. Si bien es una cantidad significativa de dinero, es poco para la cantidad de productividad extra que genera. Creo que estoy llegando a un punto en el que soy por lo menos una vez y media más productivo. Mi producción es una vez y media lo que era. No sé cuál sería mi sueldo en el mercado, porque nunca tuve un empleo, pero imagino que me está ahorrando una fortuna si esa es la métrica. Así que 200 dólares es barato. Si tuviera que pagar 2 mil dólares al mes por esto, probablemente no me valdría la pena.

¿Es súper frustrante muchas veces? Sí. Pero lo que me di cuenta es que simplemente me sube un nivel de abstracción. Antes había mucha programación que habría tenido que hacer y que para mí era aburridísima. Puede ser muy interesante para alguien junior o de nivel medio, pero para mí era súper aburrida. Ahora no tengo que hacerla, y tampoco tengo que tener a alguien junior o de nivel medio a quien dirigir. Puedo hacer que eso se haga muy fácil sin tener que tener otras personas a cargo, lo que significa que sigo libre para ser productivo de otras formas. Así que para mí el beneficio neto vale la pena.

Pero creo que para muchos desarrolladores es mucho menos divertido, mucho menos disfrutable que antes. También es simplemente la realidad del mundo. No tenemos alternativa. Quizá algunas personas tengan el lujo, en sus trabajos, de no hacer esto. Si avanzas 10 años, no creo que mucha gente tenga ese lujo. Así que si quieres prepararte para el futuro, o quieres tomar ventaja en la industria, volverte bueno en esto es, creo, el secreto.

## Permisos y modo automático

Volviendo a la tarea de traducción, ya terminó. Ya tenemos algunos archivos con su commit hecho. Si volvemos al foro, vamos a ver si hay un post nuevo. Ah, qué interesante. Publicar en el foro público quedó bloqueado, porque lo dejé en modo automático.

Esto funciona así: intenta hacer cosas, y después otro LLM monitorea lo que hace y revisa si esas cosas se parecen a cosas que yo dije explícitamente. En cuanto publica datos en otros sitios web, o hace algo por el estilo, necesita que yo diga explícitamente que estoy de acuerdo. Y como lo había dejado en modo automático, trabajando sin parar, no me preguntó si estaba de acuerdo. Así que lo bloqueó. Pregunta: «¿quieres que siga adelante y cree ese post del foro?», yo digo que sí, y ahora sí lo va a hacer. Esta es una de las cosas que pasaron en los últimos dos o tres meses. Ahora tenemos casi un LLM supervisor que permite que más cosas pasen automáticamente, pero que trata de bloquear las cosas riesgosas o peligrosas.

Así que ahora, si actualizo, aquí está. Ahora tenemos el glosario. Estos son todos los términos que encontró y leyó. Esto es todo lo que armó. Y ahora tenemos un post.

![El post terminado del Glosario para portugués de Portugal en el foro de Jiki, con las traducciones término por término y sus notas.](/images/projects/build-your-personal-homepage/setting-up-the-project/portuguese-glossary.webp) Si hablas portugués, la versión europea, puedes entrar aquí y empezar a contarme todo lo que está mal, y así podemos empezar a mejorar el glosario y a trabajarlo. Para quienes hablan otros idiomas, tenemos glosarios en otras versiones, italiano, turco, y así. Ahora ya sabes cómo se hicieron. Puedes ir a hacer esto.

## Claude Code, Codex y OpenCode

Ese es mi panorama general de cómo funciona esto. Ahora lo que quiero mostrarte es cómo puedes configurarlo tú.

Hay muchos agentes y herramientas distintas que puedes usar. Así que seamos muy claros con el vocabulario. Claude Code, que es la ventana en la que me viste trabajar, es una herramienta de programación con agentes, quizá una plataforma de programación con agentes. Corre en tu computadora. Normalmente corre en la terminal, que es como yo lo tengo configurado. También lo podemos correr en un editor de código, que es lo que vamos a ver en un momento. Y es el portal entre tú y los modelos. Te mostré que puedo cambiar entre Opus, Sonnet y Haiku, y que puedo cambiar entre niveles de esfuerzo.

Todo eso pasa en tu computadora local. Estás hablando en tu computadora local. Ella manda datos a Anthropic, a uno de sus modelos. Lo que devuelven no es solo un poco de texto que aparece en pantalla. Devuelven un montón de instrucciones que Claude Code puede interpretar para hacer cosas. Están diciendo ve y ejecuta este script en la computadora de la persona. Ve y mira en este directorio de la computadora de la persona. Ve a este sitio web y haz cosas. Todas esas instrucciones vienen de vuelta desde Claude.

Así que no estamos teniendo una conversación con Opus, ni con Sonnet, ni con Haiku. Estamos poniendo texto. Ese texto se empaqueta con un montón de otras cosas. Se empaqueta con código de nuestro repositorio, código que escribimos nosotros o que alguien puso ahí. Se empaqueta con todo el historial de la conversación, con los objetivos que queremos lograr, con nuestras preferencias sobre cómo nos gusta trabajar. Todo eso se empaqueta y después todo eso se manda a Anthropic. Sus modelos leen todo eso y después traen de vuelta instrucciones y algo de texto. Todo eso se procesa, y entonces ocurre este ciclo, este ciclo con agentes, donde hace algo, vuelve a Claude, Claude vuelve y dice bueno, ahora haz esto. Todo esto pasa lejos de nosotros. Y al final nos dice: bueno, ya terminamos. No pudimos mandar el post del foro por esto. ¿Quieres continuar? Hay todo un ciclo enorme pasando detrás de escena.

Así que tenemos dos decisiones. Una decisión es qué modelos queremos usar. ¿Queremos usar Anthropic, OpenAI u otros modelos de fondo? Y la segunda decisión es con qué herramienta queremos interactuar. Si uso Claude Code, siempre estoy interactuando con uno de los modelos de Anthropic. Si uso Codex, que es la versión de OpenAI, siempre estoy interactuando con uno de los modelos de OpenAI, uno de los modelos GPT.

Lo que te voy a recomendar usar es otra cosa, que se llama OpenCode. OpenCode es una versión de código abierto, digamos, de Claude Code, una versión de código abierto de Codex. Es el armazón, la herramienta que vive en tu computadora, que hace todo ese ciclo, que gestiona todo. Pero puede hablar con cualquier modelo. Puede hablar con Anthropic, con Opus o con Sonnet. Puede hablar con GPT-5 y esas otras cosas. Pero también puede hablar con un montón de modelos gratuitos. OpenCode en sí es gratis, y tiene una serie de modelos gratuitos que también puedes usar.

Llegamos a OpenCode simplemente estando en una terminal y escribiendo `opencode`, una vez que lo instalamos. Y podemos elegir entre muchos modelos. Podemos elegir Gemini, que es el de Google. Podemos elegir Opus, del que acabamos de hablar, o Fable. Podemos elegir Grok, si quieres apoyar a Elon Musk. Los GPT. DeepSeek, un modelo famoso que salió de China. Qwen, muy bueno para programar. Y todas estas opciones de arriba, que son las gratuitas. Así que si no tienes mucho dinero, o si solo quieres probar esto, o si tu trabajo no te paga una suscripción, puedes conseguir OpenCode gratis y después elegir uno de estos modelos gratuitos.

Tengo una guía que voy a publicar y que explica cómo instalar OpenCode, cómo prepararte gratis y cuáles de estos modelos puedes usar. Por ahora recomiendo DeepSeek V4 Flash (free), pero no los probé mucho, así que puedes probarlos tú y ver qué te funciona.

Una advertencia: estos gratuitos no son modelos frontera. Aunque Big Pickle es un modelo secreto, así que quizá sea un modelo frontera, no sabemos. Pero los demás no son modelos frontera. No son los mejores, los de más arriba. Van a parecerse más a Haiku o a Sonnet, modelos de nivel más bajo. Pero para el punto en el que estás, creo que eso es algo muy bueno. Porque los pasos que quieres dar son pasitos pequeños, donde no quieres una súper inteligencia haciéndolo todo por ti. Quieres alguien con quien puedas trabajar y conversar, donde puedas ir dando pasito a pasito, preguntando cómo funcionan las cosas y aprendiendo.

## Tokens y contexto

Déjame mostrarte OpenCode en el repositorio del traductor. Este no sabe nada de mi repositorio. Pero puedo decirle algo como «¿cuántos idiomas tenemos hasta ahora?» y esto se va a poner en marcha. Así se ve OpenCode. Tenemos una parte que habla a la izquierda. Tenemos la parte donde escribimos abajo a la izquierda. Cuando está corriendo, tenemos una parte a la derecha. Podemos apretar Ctrl+P para ver varios comandos y cosas con las que puedes jugar. Puedes ver que esto es muy rápido. Pensó unos milisegundos, leyó algunas cosas, lo averiguó y volvió con 14 idiomas. Si resaltas algo, lo copia al portapapeles, que está bueno.

![OpenCode en la terminal respondiendo «How many languages do we have so far?», con un panel de contexto a la derecha que muestra 10.054 tokens usados.](/images/projects/build-your-personal-homepage/setting-up-the-project/opencode-ui.webp)

Puedes ver que es gratis, así que no gastamos nada. Pero quiero que le prestes un poco de atención a los números de la derecha. No voy a explicar en profundidad cómo funcionan los LLM, porque es una madriguera en la que no vale la pena meternos. Pero la unidad fundamental de un LLM es el token. Puedes pensar en un token como una sílaba. «How» probablemente sea un token. «Language» probablemente sean tres tokens: lang-u-age, algo así. «DeepSeek» probablemente dos tokens. «V4» probablemente dos tokens.

Cada vez que escribes algo, toma lo que escribiste, toma lo que necesite para averiguar la respuesta y manda todo eso al modelo. El modelo lo lee, lo devuelve, probablemente hace una pregunta para aclarar, y va y viene un poco. Usa tokens. Preguntamos «¿cuántos idiomas tenemos hasta ahora?». Eso son quizá 11 tokens, quizá con los espacios sean 15 tokens. Para cuando terminó de leer, de conseguir todo lo que necesitaba, de mandarlo y de hacer un par de saltos, usó 10 mil tokens. Así que esto mandó, en la práctica, un ensayo de 3 mil palabras a un modelo y devolvió un poquito.

Si hacemos una pregunta más grande, como «¿cuál es el proceso para agregar un idioma nuevo?», se va y lee más archivos, y puedes ver los tokens subiendo mientras lee. Eso agregó otros 6 mil tokens para responder la pregunta, y ya usó el 10% de nuestro contexto. El contexto de este modelo, la cantidad máxima de tokens que puede tener en una conversación, es de unos 170 mil tokens.

Cuando trabajas en esto, tienes que tenerle un poco el ojo puesto a eso. A medida que usas más y más tokens, toda la conversación se va poniendo más lenta, porque todo ese contexto se le pasa al modelo cada vez. Si pregunto una cosa más, toda esa información se manda de nuevo al modelo. Toda la conversación anterior, todas las respuestas anteriores. Todo se manda en cada paso de la conversación.

Otra de las desventajas de usar modelos gratuitos es que suelen tener un volumen de conversación más chico. Opus tiene 1 millón de tokens por conversación. Esto va a estar más cerca de 150 mil o 170 mil. Así que conviene estar empezando conversaciones nuevas constantemente. Si escribes `/new`, eso te da una conversación nueva. Eso reinicia tus tokens, pero tu modelo tampoco sabe nada de lo que acaba de pasar. Así que conviene agarrar el hábito de tener conversaciones cortitas sobre cosas distintas.

### ¿Aron y Nicole también trabajan así en Jiki?

Sí. Aron usa esto casi para todo el trabajo de front end que hace. Nicole hace lo mismo para la edición de video. Todos nuestros videos están escritos en código. No hacemos los videos en un editor de video. Los hacemos en código, y después ella trabaja con Claude para construir todos los videos en código a partir de eso.

### ¿Los modelos gratuitos están en la nube?

Sí, los modelos gratuitos están todos en la nube. Serían lentísimos en sus máquinas.

### ¿Recomendarías Mistral?

La verdad es que no sé nada de modelos fuera de Anthropic. Personalmente trabajo solo con Claude, día a día. Nunca lo usé, así que no sé. Yo personalmente usaría Claude, pero probablemente solo usaría Claude con una suscripción donde no pago por token.

## Construir tu primera página web

Esa primera mitad fue una inmersión profunda en qué son los LLM, qué es la programación con agentes, el ciclo moderno que usamos los desarrolladores. Eso es realmente lo que espero que, en los próximos meses y en el próximo año, te vuelvas cómodo. Lo bastante cómodo como para hacer cualquier cosa. Pero quiero enfatizar mucho, antes de seguir, esta idea de que lo importante es que entiendas qué pasa por debajo.

Estoy consciente de que te di muchísima información en esa primera mitad. Así que en la segunda mitad vamos a ver cómo hacerte una página de inicio. Hoy pensaba que íbamos a llegar a otras cosas, pero creo que las vamos a dejar para la próxima sesión. En la próxima sesión creo que vamos a ver cómo publicar todo esto, y vamos a ver cómo subirlo a GitHub. También tengo una oferta exclusiva para todos los que están haciendo Jiki, con la que consigues un dominio .tech gratis, y pronto vas a poder conseguir un dominio .online o .space gratis también. Así puedes crearte un sitio web con ese dominio. Voy a hablar más de eso en la próxima sesión. Pero hoy vamos a seguir viendo cómo construir tu primera página web, y a pensar un poco en qué implica eso.

## VS Code

Hablamos un poco de que la programación con agentes está en una terminal, y de escribirle tus instrucciones a Claude o a los modelos y herramientas que uses. La forma clásica de hacer todo esto era trabajar dentro de un editor de código, un editor de texto. Hubo muchos editores de texto a lo largo de la historia, pero el que la mayoría terminamos usando hoy es uno llamado VS Code. Si nunca usaste un editor de texto, un editor de código, te recomiendo instalar VS Code. En las guías que voy a publicar junto con esto, hay una guía para instalar VS Code y usar VS Code.

Lo que viste antes cuando me viste revisando archivos, eso era VS Code. Es solo un marco, una especie de lienzo, donde puedes editar archivos de texto, y tiene una especie de estante al costado que lista todos tus archivos.

Así que lo que vamos a hacer es construir una página de inicio. Primero voy a crear un directorio. Voy a Archivo, Abrir carpeta, y creamos un directorio. Lo voy a poner en mi escritorio: «mi nueva página de inicio». Te voy a animar a que te sientes en VS Code como tu espacio principal. Así que créate un directorio. Si estás mirando esto ahora, puedes hacerlo. Si no tienes VS Code instalado, puedes pausar, ir a leer la guía de cómo instalar VS Code y después volver.

Podemos abrir ese directorio, y vemos que nos pregunta si confiamos en los autores. Como los autores somos nosotros, podemos confiar en nosotros mismos. Y puedes ver que tenemos algo de espacio, y aquí es donde van a aparecer los archivos al costado. Tienes una terminal abajo, y de hecho podemos abrir OpenCode en esa terminal. Así que podemos usar OpenCode abajo y ver los archivos arriba. Como quiero tener la pantalla grande, por ahora los voy a dejar separados, con OpenCode de un lado y todos los archivos del otro, solo para que veamos qué pasa.

Entremos al directorio nuevo que acabamos de crear y abramos OpenCode ahí. Alguien sugirió probar otro modelo, Big Pickle. Nunca usé Big Pickle. Probémoslo y veamos qué pasa. Aquí no estamos haciendo nada complejo.

## Qué es una página web

Aquí quiero hablar un poco de qué es una página web y de cómo funciona. Durante el tiempo que venga, vamos a hacer mucho JavaScript, CSS, cosas complicadas. Hoy estamos haciendo lo más básico. Si sabes algo de sitios web, esto probablemente te va a parecer muy básico. Si no sabes nada, ojalá sea una buena introducción a lo que viene.

Hablemos un poco de qué es una página web estándar, simple. Para esto podemos usar mi propio sitio web personal. Es bastante directo. Es solo texto en una página. Puedes ir a cualquier sitio web, hacer clic derecho e ir a Ver código fuente de la página, y vas a ver algo así, que es un montón de cosas. Esto es HTML.

![El código fuente HTML del sitio web personal de Jeremy, con el doctype, las etiquetas del head, las metaetiquetas y el título.](/images/projects/build-your-personal-homepage/setting-up-the-project/ihid-page-source.webp)

El HTML es famoso por tener este signo de menor al principio y este signo de mayor al final de las distintas cosas. A esto le decimos la etiqueta head. Después tenemos algo de CSS. El CSS tiene que ver con los estilos. De eso hablamos en un momento. Y después tenemos todo el contenido de la página. Este es el encabezado. Puedes ver el encabezado aquí, en morado. Tiene una imagen adentro. `img` viene de image, imagen, con un enlace a una imagen. Tiene algo de texto, una biografía mía, y después más texto dividido en párrafos. `p` viene de paragraph, párrafo. Un poco más de información, algunos encabezados. Este es un encabezado de nivel dos, este es uno de nivel uno. Y esto de aquí abajo es JavaScript, que se ve un poco familiar si hiciste Coding Fundamentals.

Cuando hicimos el bootcamp el año pasado y vimos los fundamentos del desarrollo web, pasamos mucho tiempo mirando este HTML en gran profundidad, y el CSS en gran profundidad. Asegurándonos de que entendieras todas las etiquetas distintas y cómo funcionan. Y también entendiendo el CSS y cómo podemos usarlo para dar estilo a las cosas.

Este es un ejemplo de cómo creo que las cosas se dieron vuelta. Ahora creo que lo que queremos hacer es simplemente construir cosas, y después mirar lo que hicimos y entender cómo se ve. Así que en lugar de lo que habría recomendado antes, y que de hecho antes habrías tenido que hacer, que era ponerte a escribir todo esto, lo que ahora recomiendo es que hagamos que nuestro LLM nos arme una estructura muy, muy básica que podamos usar.

## index.html

La otra cosa que hay que saber es que existe esta convención de larga data de que un archivo llamado `index.html` es la primera página de un sitio web. Si vas a ihid.info/index.html, esto es en la práctica lo que ves, la portada. La regla es que si no pones nada después del dominio, busca si hay un archivo llamado index.html, y si lo hay, muestra su contenido. Este index.html es un archivo muy especial. En realidad no hace nada mágico. Es solo un estándar. Pero muchos sitios web tradicionalmente lo tienen como forma de hacer algo.

Así que si tienes OpenCode abierto, puedes decir:

> Crea un index.html con la estructura más básica posible para una página, con un encabezado con mi nombre, Jeremy Walker, y una línea de biografía con esto.

Aquí tenemos un punto de inflexión. Podríamos, si quisiéramos, decir «créame un sitio web entero», y lo haría. Pero pasarían dos cosas. Una, no sería un sitio web que queremos. A medida que avancemos, vamos a pensar qué son esos sitios web, y de hecho te voy a desafiar a que vayas a pensar en un sitio web. De eso hablamos en un momento. Pero además, te daría tantísimas cosas que no aprenderías de ellas. En cambio, al dar estos pasitos pequeños, así es como vas a aprender cómo funcionan las cosas.

Así que mandamos esto, y eso es lo que escribió. Ahora podemos mirar en VS Code y abrirlo. Este es mi flujo de trabajo cuando hago esto. Tengo todo mi sitio web aquí, quizá miles de archivos distintos, y hago que mi agente trabaje sobre los archivos. Y después, si necesito revisar algo, ver qué está haciendo, editar cosas, simplemente lo abro por aquí y le echo un vistazo.

Y la otra cosa que podemos hacer ahora que tenemos este archivo es abrirlo en Chrome. Si haces clic derecho en el archivo y eliges Abrir con Chrome, ahora puedes ver que tenemos una página que acabamos de hacer. Así que felicidades. Construiste tu propia página de inicio. No es una página de inicio muy emocionante ni muy buena, pero es una página de inicio.

![La página de inicio básica abierta en Chrome. Un encabezado que dice Jeremy Walker y una línea de biografía, sin estilos.](/images/projects/build-your-personal-homepage/setting-up-the-project/first-barebones-homepage.webp)

## Entender lo que hizo

Quiero que nos tomemos un minuto, y esta es la mentalidad en la que siempre quiero que estés, de tomarte un minuto para mirar qué está pasando aquí. La forma en que quiero animarte a hacerlo, ahora que hiciste eso, es decir:

> Explícame qué hace cada parte.

Puedes usar este ciclo no solo para que haga cosas, sino también para entender, para construir conocimiento sobre cómo funcionan las cosas. No debería ser una pregunta tan compleja para él, ya que a) lo acaba de escribir y b) es muy simple. Y lo explica. Aquí vamos.

La primera línea, la etiqueta doctype, le dice al navegador que este es un documento HTML5. ¿Y qué está pasando aquí realmente? ¿Qué es este HTML? Bueno, este navegador es Chrome (hay otros navegadores disponibles). Sabe cómo leer un archivo HTML y cómo ponerlo en pantalla de una forma que puedas ver. El HTML es una especificación. Significa hypertext markup language, lenguaje de marcado de hipertexto. Se ve así, con un montón de etiquetas y trozos de información, y Chrome, o cualquier otro navegador, puede leer estas etiquetas y ponerlas en pantalla.

Olvídate por un momento de la parte de arriba. Mira solamente el body. Está poniendo un encabezado y está poniendo texto de párrafo. Este `h1` significa encabezado de nivel uno. Y puedes ver que, como es un encabezado de nivel uno, Chrome sabe que tiene que hacerlo un poco más grande y un poco más grueso. Mientras que este `p` es un párrafo. Chrome sabe que tiene que hacerlo un poco más chico.

Podríamos, si quisiéramos, poner otras etiquetas aquí. Esta es una lista no ordenada, `ul`, y adentro tendríamos elementos de lista, `li`. Una de las cosas que pasaron desde que empecé a usar Claude es que ya no puedo escribir muy bien. Así que podemos juntar distintas etiquetas, y esto nos va a dar unas viñetas.

Así que esta es la anatomía, los huesos, de una página web. Cada página web es igual. Si vamos a jiki.io y vemos el código fuente de la página, puedes ver que es exactamente lo mismo. Son muchísimas de estas etiquetas. Podemos ver que es lo mismo. Acabamos de usar una lista no ordenada, un elemento de lista, un enlace con texto y un ícono al lado. Esto es el HTML. Cada vez que hagas un sitio web, desde ahora hasta el fin de la historia, siempre vas a estar generando HTML para un navegador.

Terminemos de leer lo que tan amablemente nos armó. ¿Qué tenemos después? Tenemos el doctype, que dice que este es un documento HTML. Después decimos bueno, este es el comienzo de nuestro documento HTML, y el idioma de este documento es el inglés.

Después tenemos dos partes. Tenemos el head y tenemos el body.

Lo primero en el head es qué caracteres usamos, y usamos este conjunto de caracteres llamado UTF-8. Cada uno de estos es un carácter. Estamos diciendo que podemos usar cualquier carácter latino o romano, como estos, o también podríamos usar emojis aquí. Si agarramos un emoji, lo podemos poner en este documento directamente, después actualizar, y ya tenemos un emoji en la página. Eso es lo que significa. Está diciendo que estos son todos los caracteres que usas habitualmente. Este es nuestro conjunto de caracteres estándar.

También tenemos un viewport. Por ahora no nos tenemos que preocupar por eso.

Y tenemos un título. El título es Jeremy Walker. Este título es el que aparece arriba en la pestaña. Una de las cosas en las que vas a pensar mucho mientras programas es qué títulos quieres que aparezcan ahí, para que cuando la gente tenga distintas pestañas abiertas vea algo que quiera arriba. También podemos cambiar cosas como el favicon. Puedes ver que eso todavía no lo hicimos, así que no tenemos un ícono ahí.

Esta sección head es todo lo que no aparece en pantalla. Todo lo que podrían mirar los buscadores, y cosas así, vive en el head. Y después el body es todo lo que está en el espacio de abajo. Y esto es, literalmente, un encabezado, un párrafo y una lista.

Así que esto es lo que nos dice la explicación. La etiqueta `html` es el elemento raíz. El head son metadatos. Metadatos significa simplemente datos sobre la página, no cosas que ves. El charset es la codificación de caracteres que hace que se muestren tus emojis y los caracteres de algunos otros idiomas. Del viewport no nos queremos preocupar. Y después el body es lo demás que ya miramos.

Para quienes llevan años escribiendo HTML, perdón por lo básico que es esto, pero ustedes también lo aprendieron desde cero alguna vez.

## Agregar contenido real

Ahora puedes usar tu agente para agregar algo de HTML. Tomemos un poco más de texto. Si tienes un perfil de LinkedIn, quizá quieras ir a tomar algo de texto de ahí. De hecho, hagamos eso. Vamos a mi LinkedIn y tomemos algo de información de ahí. Y se lo podemos dar a nuestro LLM. Le podemos decir:

> Aquí hay información de mi LinkedIn. Estructúrala de forma sensata debajo del encabezado de la página.

Le damos este texto y se va a ir a estructurarlo por nosotros. Otra vez, si vamos dos años atrás, tendrías que escribir las etiquetas a mano, escribir todo esto. En cambio, ahora tenemos la posibilidad de darle un texto y hacer que le ponga una estructura sensata alrededor, algo de HTML alrededor. Ahora bien, aquí no le pedimos que le dé estilo, ni que lo haga ver de cierta forma. Solo le pedimos que le ponga algo de estructura alrededor. Veamos qué tan bueno es Big Pickle en esto.

Por cierto, una vez que pase esta primera sesión, voy a usar Claude para la mayoría de las cosas que haga, simplemente porque lo conozco muy bien y además es rápido. Pero si estás siguiendo esto por tu cuenta, te recomiendo hacer esto. Si tienes un LinkedIn, si tienes un currículum, puedes copiar eso, ponerlo en OpenCode y pedirle que construya esto.

Pensó un rato. Ahora está preparando la edición. Y agregó el código. Aquí está. Ahora tenemos un lindo encabezado de nivel dos que dice «Experiencia», y tenemos el resto de la información. Si vamos a Chrome y actualizamos, ahora podemos ver que tenemos un poco de código básico y bien estructurado.

![La página de inicio en Chrome, ahora con una sección de Experiencia con entradas estructuradas para cada puesto.](/images/projects/build-your-personal-homepage/setting-up-the-project/homepage-with-experience.webp)

## Tu tarea

Lo siguiente en lo que hay que pensar es cómo queremos que se vea nuestra página de inicio personal. Esta es una pregunta a la que quiero que le dediques tiempo. A lo largo de este curso te voy a animar mucho a que agarres una hoja y un lápiz, te sientes en un lugar tranquilo, lo más lejos posible de una pantalla, y simplemente pienses.

Vamos a construirnos una página de inicio. Esa página de inicio necesita tener algunas cosas. Necesita tener una vista general de nosotros y de nuestros intereses. Necesita tener una página que sea nuestro currículum. Va a tener una página sobre nuestro portafolio, todos los proyectos que hacemos, y después va a enlazar a otras páginas sobre esos proyectos. Así que vamos a construir un sitio web grande, de varias páginas, con el tiempo. La mayor parte la vamos a hacer en la segunda sesión. Hoy solo estamos haciendo esta página de vista general. Pero quiero que pienses, con papel y lápiz, y dibujes cómo te gustaría que fueran las distintas páginas.

Y piensa un poco en un estilo. Mira las páginas de otras personas. Busca a otra gente de la comunidad de Exercism. Si miro a Erik Schierboom, que trabajaba con nosotros, tiene una página principal muy directa, y después una página «about» que está bastante bien, con un detallito lindo abajo. Tiene información sobre software, lugares donde dio charlas, y después algunos enlaces. Quizá eso te inspire bastante. O si miramos a SleeplessByte. Quizá te acuerdes de DJ si estuviste en los bootcamps, o de los mentores. Esta es la página de DJ. Así que busca gente que te interese y déjate inspirar por lo que hicieron. Piensa visualmente qué tipo de estilo te gusta. Y vamos a hablar un poco de cómo hacer imágenes y de cómo puedes usar la tecnología para hacerlas.

Explora las ideas de otra gente. A mí siempre me gusta bastante un estilo muy minimalista. Y para este proyecto voy a ir a pensar estos días cómo quiero que se vea mi nueva página principal, porque me voy a hacer esta página de inicio. Voy a pensar cómo se divide. Quiero una sección para mi fotografía. Quiero una sección donde pueda tener mis podcasts y videos y cosas que hice. Quiero un poco de biografía, y quiero un currículum. Así que voy a ir a pensar en esas cosas.

Tu tarea de esta semana es ir a pensar en eso, diseñarlo y después empezar a estructurar esas páginas. Puedes crear varias páginas. Podemos crear otra página, llamémosla mi currículum, y podemos copiar y pegar nuestro contenido ahí, borrar las partes que no necesitamos y cambiar el título a «Currículum de Jeremy». Ya tenemos nuestra página index, pero ahora también podemos ir a resume.html y tener eso como otra página.

Así que, esta semana:

- Piensa en las distintas páginas que vas a querer, y en el contenido que vas a poner en esas páginas.
- Instala VS Code.
- Instala OpenCode y configura un modelo.
- Trabajando con OpenCode, arma algunas de estas páginas.

No te preocupes todavía por los estilos. No quiero que te metas mucho en eso. Puedes jugar si quieres, siempre voy a animar a la gente a ser curiosa, pero me gustaría enseñarte cuáles creo que son las mejores formas de hacer eso en el mundo moderno. Definitivamente no empieces a usar frameworks de JavaScript ni nada por el estilo. Quédate en HTML básico, y después lo vamos a ir apilando en cada sesión hasta que se vuelva cada vez más potente y más complejo. Así vas a entender cómo pasa todo.

Si te interesa, ve a investigar un poco más sobre HTML. Averigua cuáles son las distintas etiquetas y qué significan. Investigar hoy en día puede ser tan simple como preguntar:

> Dime las 20 etiquetas más comunes.

Y después:

> Dime para qué sirve cada una.

Así investigo yo.

La próxima sesión la hacemos en unos días. Para entonces espero que llegues con OpenCode instalado, VS Code instalado y una serie de páginas. La próxima vez vamos a empezar a enlazar esas páginas entre sí, agregar navegación, agregar estilos, y también vamos a publicar esto en GitHub, y quizá hasta conseguirte un dominio propio, para que puedas tener tu sitio web personal en un dominio gratis. Quizá también quieras registrarte en GitHub esta semana, en github.com. Voy a publicar guías de VS Code, OpenCode y GitHub, y puedes seguirlas.

Ese es el final de esta primera sesión. Gracias por mirar. Espero que haya sido interesante. Espero que lo hayas disfrutado. Si tienes preguntas sobre cualquier cosa que vimos, súmate al foro. Voy a estar ahí, y tengo ganas de responder y explorar preguntas. No necesariamente tengo todas las respuestas. A mí también me encanta aprender. Así que pregunta lo que te interese. Y nos vemos en la próxima sesión.
