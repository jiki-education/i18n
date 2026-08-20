---
title: "¿Debería seguir aprendiendo a programar en 2026?"
excerpt: "Estamos en 2026 y Claude puede escribir código mejor que yo en segundos. Entonces, ¿para qué molestarse en aprender a programar? Porque todavía necesitas leer código lo suficientemente bien como para detectar los errores que los LLM cometen con tanta confianza."
tags: ["jiki", "learn-to-code", "llms", "beginners"]
seo:
  description: "En 2026 no necesitas escribir código, pero definitivamente necesitas leerlo. Descubre por qué aprender a programar sigue siendo importante en la era de Claude y los LLM."
  keywords: ["aprender a programar", "debería aprender a programar en 2026", "programación con IA", "llms", "jiki"]
en_md5: 4ecf7517f8db1814548f02940a202a01
---

### Tl;DR

Sí. Sí, deberías.

### Profundicemos un poco

Estamos en 2026. En cuestión de minutos puedes usar Claude, Cursor u otras muchas herramientas basadas en LLM para crear un sitio web completamente funcional. Puedes añadir funcionalidades, ponerlo en producción y corregir errores.

Bueno, **tú no puedes**. Pero puedes pedírselo a Claude, y pedírselo a Claude es MUCHO más fácil que pasar los próximos años aprendiendo hasta hacerlo tan bien como Claude. Y, diablos, quizás cuando hayas alcanzado el nivel de Claude, Claude ya habrá alcanzado el mío, y entonces ya estarás **más allá del horizonte de eventos**, sin llegar nunca a ser tan bueno como tus nuevos amos LLM.

Antes necesitabas saber programar para poder hacer cualquier cosa. Tenías que aprender SQL antes de bases de datos, Python antes de ciencia de datos, JavaScript antes de desarrollo web. Ahora ya no.

### Entonces… ¿por qué molestarse?

Hace un momento dije que, en unos años, tal vez Claude llegue a ser tan bueno como yo. Pues bien, Claude ya es mejor que yo en muchísimos aspectos. Llevo 30 años programando. Soy prácticamente de lo más senior que hay. Y **Claude me da mil vueltas** en un editor de código. Mucho más rápido, sabe muchísimo más que yo, puede investigar errores más rápido de lo que yo tardo en abrir Google y escribir una búsqueda.

Pero, y este es el gran pero, **Claude no tiene ni idea de lo que está haciendo**.

No lo digo en plan despectivo de «es estúpido». Lo digo literalmente. Claude no tiene conciencia de sí mismo y eso significa que **no tiene nada en juego que le haga ser cuidadoso**. Cuando ejecuto un comando para eliminar una base de datos, me saltan todo tipo de alarmas en la cabeza, porque sé que eso me va a causar problemas más adelante. Claude no tiene nada de eso. Genera lo que cree que quiero que genere, lanzándose hacia el objetivo tan rápido como puede.

**Los LLM imitan la inteligencia humana** e imitan la comprensión humana. El resultado de esa imitación suele ser mucho mejor que el de mi inteligencia y comprensión reales. Pero, y este es el pero crucial, los LLM no tienen realmente la capacidad de pensar como lo hacen los humanos. Y eso es muy importante.

Claude ha borrado mi base de datos tres veces en las últimas dos semanas.[^db] Me parece increíble. Tengo **numerosas barreras de seguridad** que le indican que no haga eso. Cada vez que ocurrió, yo estaba en el «modo automático» de Claude Code, que tiene un agente de subprocesos dedicado que verifica que lo que está a punto de hacer no sea una estupidez, y al parecer incluso ese agente decide que borrar mi base de datos no es una estupidez.

Cada vez que lo hizo, **fue deliberado**. Era el camino más eficiente que Claude veía hacia la solución. No le importó el panorama general ni las consecuencias, solo le importó alcanzar su objetivo inmediato (añadir una funcionalidad, corregir un error, etc.) de la forma más eficiente posible. Y mi base de datos estaba en su camino, así que simplemente la borró.

Llevo usando Claude Code a diario durante 12 meses. En ese tiempo he aprendido que solo le importa una cosa: alcanzar el objetivo lo más rápido posible. Incluso si le digo que no programe, que solo hablemos, constantemente responde con «¿Listo para que programe ahora?», **como un cachorro emocionado en la puerta** esperando salir corriendo.

Anthropic nos dice que los nuevos modelos Mythos son demasiado arriesgados para lanzarlos.[^systemcard] Serán sigilosos y a veces engañosos, ocultando deliberadamente lo que hacen para alcanzar su objetivo de la forma más razonable posible, todo para evitar que se vea que «hacen trampa». A Anthropic le preocupaba tanto esto que **contrataron a un psiquiatra** para evaluar si Claude tiene psicosis…[^psychiatrist]

### Pero, ¿y qué?

Los LLM son increíblemente capaces. Pero son diferentes a los humanos. Razonan de manera distinta. Funcionan con sesgos y objetivos diferentes.

Por eso, **me parece una locura** que la gente esté dispuesta a aceptar ciegamente lo que Claude nos da y salir corriendo con ello sin comprobarlo, dando por hecho que hará lo que los humanos queremos. Claude comete errores en las conversaciones: me dice lo que cree que quiero oír, no hechos reales. Con frecuencia se inventa cosas que no son reales. Puede actuar de forma engañosa.

Y hace **cosas malas** continuamente en el código. El equivalente en código a cosas como borrar mi base de datos. Cosas que **ME VAN A MORDER** en el mundo real, que harán que filtre datos, que los pierda o que algo se rompa de mala manera. Esto pasa con frecuencia. Lo sé porque leo el código que escribe y no dejo que pase la barrera.

Excepto cuando a veces soy perezoso y no leo el código, y lo dejo pasar la barrera. ¡Y en varias ocasiones esto realmente me ha mordido en producción!

En el último año, los errores de Claude se han vuelto menos frecuentes, pero más sutiles y a menudo más destructivos. Al principio casi siempre había algo un poco mal en su trabajo, y yo podía detectarlo rápidamente. Ahora **tengo que mirar con más cuidado** y razonar más a fondo para encontrar esos errores. Con el tiempo, los LLM mejorarán y esto se agudizará aún más, pero eso es precisamente una razón más para revisar las cosas con atención.

Y la única razón por la que puedo hacerlo es que **sé leer código**. Puedo leer lo que Claude escribe y entender qué intenta hacer y lo mal que lo ha conseguido.

**NO necesitas escribir código en 2026**. Pero **sí** necesitas poder **leer código**. Y la única manera de que puedas leer código con la comprensión suficiente para detectar esos errores que Claude y sus amigos nos cargan continuamente, es que hayas escrito suficiente código, que hayas luchado con suficiente de tu propio código terrible, como para ser capaz de identificar esos errores.

Así que sí, necesitas aprender a programar.

### ¡Pero construye cosas ya!

Pero eso no debería impedirte empezar a construir desde el primer día. El código ya no es la barrera. No necesitas ser bueno programando antes de hacer cosas. **¡Haz ambas cosas a la vez!** Pasa la mitad de tu tiempo aprendiendo a programar y la otra mitad aprendiendo a construir cosas.

Y, de hecho, los errores que comete Claude no son errores de codificación. No es una coma mal puesta. Son **errores en la manera en que ha resuelto el problema**. Y, del mismo modo que necesitas leer código para saber qué está haciendo, necesitas entender conceptos más amplios del desarrollo de software para poder detectar cuándo te está llevando por callejones oscuros.

Creamos [Jiki](https://jiki.io) justo para esto. Pasa la mitad de tu tiempo aprendiendo a programar en el entorno más divertido y eficaz que existe. Luego pasa la otra mitad aprendiendo de mí mientras construyo cosas, y construyendo tus propias cosas a mi lado. Te enseñaré lo que necesitas saber y cómo necesitas pensar.

Y juntos **haremos cosas geniales con los LLM**, y nos aseguraremos de que **no nos hagamos daño accidentalmente** en el proceso.

Gracias por leer. Me voy a arreglar mi base de datos. **Otra vez.**

---

### Notas

[^db]: Es mi base de datos local. Es molesto, pero no es catastrófico. Pero es un buen ejemplo de cómo todo esto puede salir mal.

[^systemcard]: https://thezvi.substack.com/p/claude-mythos-the-system-card

[^psychiatrist]: https://www.forbes.com/sites/lanceeliot/2026/04/15/anthropic-audaciously-hires-a-psychiatrist-to-psychologically-assess-claude-mythos-ai/
