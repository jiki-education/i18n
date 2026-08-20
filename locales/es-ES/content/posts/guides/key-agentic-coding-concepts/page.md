---
title: "Conceptos clave de la programación agéntica"
excerpt: "Modelos, tokens, ventanas de contexto y las demás ideas que necesitas entender para usar bien los agentes de programación con IA."
tags: ["agentic-coding"]
seo:
  description: "Los conceptos fundamentales de la programación agéntica explicados para principiantes: qué son los modelos de IA y los tokens, cómo funcionan las ventanas de contexto y por qué los agentes a veces se equivocan."
  keywords: ["conceptos de programación agéntica", "llm", "tokens", "context window", "ai models", "prompts", "hallucinations"]
en_md5: d963e01d7934f4003d436029d1808fc8
---

## Introducción

Damos por hecho que ya tienes OpenCode o algo similar instalado. Si no es así, primero sigue nuestra guía sobre [cómo instalar una plataforma de programación agéntica](/guides/installing-an-agentic-coding-platform).

Puedes usar una herramienta de programación agéntica sin entender cómo funciona, igual que puedes conducir un coche sin saber qué hace el embrague. Pero tener una noción ayuda muchísimo. Explica por qué la herramienta a veces parece brillante y otras desconcertante, por qué algunas cosas cuestan dinero y cómo conseguir resultados mucho mejores. Estos son los conceptos que vale la pena conocer.

## Modelos

El **modelo** (o LLM, las siglas en inglés de «large language model», modelo de lenguaje grande) es la inteligencia artificial en sí. Herramientas como OpenCode y Claude Code no son inteligentes por sí mismas. Son la plataforma: recogen tu petición y tu código, los envían a un modelo y actúan a partir de lo que reciben. El modelo es el «cerebro».

Hay muchos modelos, creados por distintas empresas, y se diferencian en tres aspectos que te importan:

- **Capacidad.** Los modelos más grandes y recientes entienden mejor los problemas enredados y escriben código más correcto. Los mejores (a menudo llamados modelos «de vanguardia», o «frontier» en inglés) son notablemente más inteligentes que el resto.
- **Velocidad.** Los modelos más pequeños responden más rápido. Para preguntas sencillas, un modelo rápido suele dar una experiencia más agradable.
- **Coste.** Los mejores modelos pueden costar cincuenta veces más de ejecutar que otros perfectamente decentes. Por eso los planes gratuitos usan modelos más pequeños o promocionales.

No existe un «mejor modelo» permanente. La tabla de clasificación se reordena cada pocos meses, y esa es una de las razones por las que recomendamos una herramienta que te deje cambiar de modelo libremente (en OpenCode, escribe `/models`).

## Tokens

Los modelos no leen letras ni palabras. Leen **tokens**: fragmentos pequeños de texto, de media unas tres cuartas partes de una palabra cada uno. «Understanding» es un token. «Misunderstanding» pueden ser tres. Todo lo que envías a un modelo se parte en tokens, y todo lo que escribe vuelve token a token. Por eso ves que las respuestas aparecen como un flujo de palabras en lugar de aparecer de golpe.

Los tokens importan sobre todo por una razón: **son por lo que pagas**. El precio de los modelos se da por cada millón de tokens, tanto por lo que el modelo lee («entrada») como por lo que escribe («salida»). Cuando un agente lee cinco archivos de tu código, eso pueden ser decenas de miles de tokens de entrada. Por eso los planes gratuitos tienen límites y por eso un agente que trabaja en un proyecto grande cuesta más que uno que responde una pregunta rápida.

## La ventana de contexto

Un modelo no tiene memoria. Cada vez que envías un mensaje, la herramienta manda *toda la conversación hasta ese momento*, más los archivos que el agente haya leído, una y otra vez. La **ventana de contexto** del modelo es la cantidad máxima que puede recibir de una vez: su memoria de trabajo, medida en tokens.

De ahí se siguen dos cosas prácticas:

- **Las sesiones largas se degradan.** A medida que la conversación crece, el contexto se llena de desvíos antiguos y contenidos obsoletos de archivos. Los modelos empeoran notablemente su atención cuando el contexto está saturado. Cuando un agente empieza a cometer errores tontos al final de una sesión larga, muchas veces no es que sea lerdo, es que se está ahogando.
- **Empezar de nuevo es gratis.** Iniciar una sesión nueva con una petición limpia y bien formulada suele ser mejor que seguir adelante en una sesión atiborrada. No le tengas apego al historial de conversación.

## Prompts

Tu **prompt** es lo que escribes al modelo. La habilidad que más impacto tiene en la programación agéntica es redactar buenos prompts. La diferencia entre «arréglame el código» y «las pruebas de esta carpeta fallan con este mensaje de error, y yo esperaba que la función devolviera 5, no 3» es la diferencia entre que el agente adivine y que el agente sepa.

Un buen prompt dice tres cosas: qué estás intentando conseguir, qué está pasando realmente y qué ya has probado. Exactamente lo que querrías de un colega que te pide ayuda.

## El bucle agéntico

Lo que diferencia a un agente de un chatbot es el **bucle**. Cuando le das una tarea a un agente, no se limita a responder. Trabaja:

1. Decide qué necesita saber y usa **herramientas** (leer archivos, buscar, ejecutar comandos) para averiguarlo.
2. Hace un cambio.
3. Revisa su propio trabajo, normalmente ejecutando tu código o tus pruebas.
4. Si algo falló, vuelve al paso 1 con la información nueva.

Ver este bucle es realmente instructivo: es un modelo aceptable de cómo trabajan en la práctica los programadores con experiencia. Investigar, cambiar una cosa, verificar, repetir. Tu trabajo durante el bucle es supervisar. La herramienta te pedirá permiso antes de hacer nada significativo, y tú debes leer lo que te propone en lugar de aprobar todo sin pensar.

## Alucinaciones, o: el modelo se equivoca con seguridad a veces

Los modelos no saben las cosas como tú. Generan la respuesta que parece más verosímil y, a veces, la respuesta más verosímil es sencillamente errónea: una función que no existe, una configuración que nunca fue real, una explicación que suena impecable pero que es incorrecta. Esto es lo que se llama **alucinación** y nunca desaparece del todo, ni siquiera en los mejores modelos.

La defensa es la misma que usan los profesionales: **nunca confíes, siempre verifica**. Ejecuta el código. Revisa el cambio antes de aceptarlo. Si una explicación importa, pídele al modelo que te muestre la línea de código en la que se basa. Los agentes son mucho menos propensos a esto que los chatbots, precisamente porque su bucle implica ejecutar cosas y ver resultados reales, pero el hábito de verificar es algo que debes construir desde el primer día.

## Privacidad

Un aspecto más que conviene saber, sobre todo en los planes gratuitos: los modelos gratuitos suelen serlo porque las empresas que los ofrecen recopilan las conversaciones para mejorar sus modelos. Para los ejercicios de aprendizaje, es un trato perfectamente válido. Pero considera que todo lo que envíes a un modelo gratuito es potencialmente público: nada de contraseñas, nada de información personal y, más adelante en tu carrera, nada de código privado de la empresa sin revisar las normas.

## Esa es la base

Los modelos son los «cerebros», los tokens son la moneda, el contexto es la memoria, los prompts son el volante y el bucle es lo que lo convierte en un agente. Todo lo demás lo aprenderás ensuciándote las manos, que es justo lo que te sugerimos que hagas. Si todavía no has configurado una herramienta, nuestra [guía de instalación](/guides/installing-an-agentic-coding-platform) te la dejará lista en diez minutos. Luego mira la primera sesión de [Frontend Basics](/build/frontend-basics/setting-up-the-project) en Aprende a Construir para verlo todo en funcionamiento.
