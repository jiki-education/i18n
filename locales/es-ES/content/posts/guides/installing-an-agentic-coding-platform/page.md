---
title: "Instalación de una plataforma de programación agentiva"
excerpt: "Instrucciones paso a paso para instalar OpenCode, iniciar sesión y elegir un modelo de IA, incluyendo opciones que no cuestan nada."
tags: ["agentic-coding", "installation"]
seo:
  description: "Guía amigable para principiantes sobre cómo instalar OpenCode, la plataforma de programación agentiva que recomendamos, con opciones de modelos de IA gratuitos a través de Zen y el plan Go de bajo coste."
  keywords:
    [
      "opencode",
      "instalar opencode",
      "programación agentiva",
      "asistente de codificación con IA",
      "opencode zen",
      "opencode go",
      "codificación con IA gratuita",
      "vscode"
    ]
en_md5: a5c3efc92432a167085818beba5b6bc7
---

## Introducción

Una plataforma de programación agentiva es una herramienta que permite que una IA trabaje en el código contigo: lee archivos, hace cambios y ejecuta comandos en tu ordenador. Si esa frase te resulta nueva, empieza con nuestra guía sobre [qué es la programación agentiva](/guides/what-is-agentic-coding) y regresa aquí cuando estés listo para instalar una.

Esta guía te explica paso a paso cómo instalar **OpenCode**, iniciar sesión y elegir un modelo de IA. Solo necesitas hacerlo una vez, y puedes hacer todo sin gastar dinero.

## Por qué recomendamos OpenCode

Existen varias herramientas de programación agentiva buenas, como Claude Code (Anthropic) y Codex (OpenAI). Todas son bastante similares de usar, así que nada de lo que aprendas se desperdicia si luego cambias. Dicho esto, recomendamos **[OpenCode](https://opencode.ai)** mientras estás aprendiendo, por tres razones:

- **Puedes usarla gratis.** Actualmente es la única herramienta de este tipo con un nivel gratuito confiable, estable y realmente útil, y es poco probable que ese nivel desaparezca.
- **Funciona con casi cualquier modelo de IA.** Puedes empezar con los modelos gratuitos y probar otros más avanzados después si quieres explorar, todo sin cambiar de herramienta.
- **Se ejecuta en la terminal**, que es como la mayoría de los desarrolladores profesionales usan estas herramientas, así que estás aprendiendo de la forma «real». Y puedes ejecutarlo dentro de VS Code para que quede justo al lado de tu código.

Puedes usar OpenCode de dos maneras, y esta guía te prepara para ambas:

- **Por sí solo**, en cualquier ventana de terminal.
- **Integrado en VS Code**, donde se abre en un panel junto a tu código y puede ver qué archivo estás editando. Esta es la manera que recomendamos: ves cómo los cambios del agente aparecen en tu editor a medida que los hace. (¿No sabes qué es VS Code? Es nuestro [editor de código recomendado](/guides/using-a-code-editor).)

## Cuánto cuesta

OpenCode en sí no cuesta nada. Lo que puedes elegir pagar es el modelo de IA que hace el razonamiento. Cuando conectas OpenCode a un modelo, verás dos opciones del equipo de OpenCode:

- **Zen** ofrece un puñado de modelos sin coste. Son gratuitos porque las empresas que los respaldan los están promocionando, lo que significa que la selección rota con el tiempo, y tus conversaciones pueden usarse para ayudar a mejorar los modelos. Es una buena concesión para los ejercicios de aprendizaje, pero no pegues nada privado o personal en ellos.
- **Go** es una suscripción: **$10 al mes** (con el primer mes a $5) que te da acceso generoso a un conjunto de modelos mucho más potentes. No necesitas esto el primer día. Empieza con los modelos gratuitos de Zen, y actualiza si sientes que estás chocando con sus límites.

## ¿Qué modelo debería elegir?

Si no estás seguro de qué es exactamente un «modelo», nuestra guía sobre [conceptos clave de programación agentiva](/guides/key-agentic-coding-concepts) lo explica bien. La versión corta: el modelo es el «cerebro» real de la IA, y los diferentes modelos son más inteligentes, más rápidos o más económicos que otros.

Dentro de OpenCode puedes cambiar de modelo en cualquier momento escribiendo `/models`. Nuestro consejo:

- **En el nivel gratuito**, prueba los modelos gratuitos disponibles y ve con cuál te llevas bien. La lista cambia según las promociones que aparecen y desaparecen, así que no vamos a fingir que sabemos lo que verás, pero al momento de escribir esto **DeepSeek V4 Flash** es una excelente opción gratuita.
- **En el plan Go**, los modelos enfocados en programación (al momento de escribir esto, Kimi K2.7 Code, GLM-5.2 y la familia Qwen 3.7) son todos potentes. Elige uno y preocúpate por compararlos solo cuando domines lo básico.

No te angusties por esto. Para los ejercicios que harás mientras aprendes, todos los modelos disponibles son más que capaces.

## Antes de empezar

Necesitas dos cosas listas:

- **VS Code**, para que puedas usar OpenCode integrado en tu editor. Si aún no lo instalaste, sigue nuestra guía sobre [cómo instalar VS Code](/guides/installing-vscode).
- **Solo en Windows: WSL.** La versión de terminal de OpenCode funciona mejor en Linux, y WSL le da a tu máquina Windows una terminal de Linux adecuada. Primero sigue nuestra guía sobre [cómo instalar WSL](/guides/installing-wsl), incluyendo la sección «Usar WSL desde VS Code» al final. Luego regresa aquí. En macOS y Linux no hay nada extra que instalar.

## Instalación de OpenCode

Instalar OpenCode es un solo comando en la terminal. Si nunca antes usaste una terminal, este es un buen primer acercamiento: escribes una instrucción y el ordenador hace el trabajo.

### Windows

1. Abre VS Code, conéctalo a WSL (Ctrl+Shift+P, luego **WSL: Connect to WSL**) y abre una terminal (menú Terminal, luego **Nueva terminal**).
2. Copia y pega este comando en la terminal y pulsa Enter:
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. Cuando termine, cierra la terminal, abre una nueva y escribe `opencode --version` seguido de Enter. Si muestra un número de versión, ya terminaste.

### macOS

1. Abre **Terminal** (pulsa Cmd+Space, escribe «terminal» y pulsa Enter) o abre una terminal dentro de VS Code (menú Terminal, luego **Nueva terminal**).
2. Copia y pega este comando en la terminal y pulsa Enter:
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. Cuando termine, cierra la terminal, abre una nueva y escribe `opencode --version` seguido de Enter. Si muestra un número de versión, ya terminaste.

### Linux

1. Abre tu terminal o abre una dentro de VS Code (menú Terminal, luego **Nueva terminal**).
2. Copia y pega este comando en la terminal y pulsa Enter:
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. Cuando termine, cierra la terminal, abre una nueva y escribe `opencode --version` seguido de Enter. Si muestra un número de versión, ya terminaste.

<!-- SCREENSHOT: terminal after the install script has completed -->

## Iniciar OpenCode por primera vez

Ahora abre OpenCode y conéctalo a Zen para que tenga un modelo con quien hablar:

1. En VS Code, abre una carpeta que tenga algo de código (cualquiera de tus proyectos de práctica está perfecto) y abre una terminal (menú Terminal, luego **Nueva terminal**).
2. Escribe `opencode` y pulsa Enter. La interfaz de OpenCode aparecerá en el panel de la terminal, justo al lado de tu código. (La primera vez que haces esto, también instala una pequeña extensión de VS Code que conecta ambos, para que OpenCode pueda ver qué archivo tienes abierto.)
3. La primera vez que lo ejecutas, aparecerá una lista con el título «Conectar un proveedor». (Si no te lo muestra, escribe `/connect` para que aparezca.) Usa las teclas de flecha para elegir **OpenCode Zen (Recomendado)** y pulsa Enter.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/connect-a-provider.webp" alt="Pantalla de Conectar un proveedor de OpenCode, con OpenCode Zen (Recomendado) resaltado al inicio de la lista" />
  <figcaption>Elige OpenCode Zen de la lista de proveedores.</figcaption>
</figure>

4. Luego te pedirá una **clave API**: un código largo que demuestra quién eres, algo así como una contraseña. Para obtener una, abre <a href="https://opencode.ai/zen" target="_blank" rel="noopener noreferrer">opencode.ai/zen</a> en tu navegador y crea una cuenta gratuita. No necesitas datos de pago. Copia la clave que te da, pégala en la terminal y pulsa Enter.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-api-key.webp" alt="OpenCode pidiendo una clave API, con instrucciones para ir a opencode.ai/zen para obtener una" />
  <figcaption>Obtén tu clave en opencode.ai/zen y pégala aquí.</figcaption>
</figure>

5. Finalmente, te mostrará la lista de modelos, con los gratuitos marcados como **Free** a la derecha. Elige uno de esos (como dijimos antes, al momento de escribir esto **DeepSeek V4 Flash Free** es una excelente opción). Puedes cambiar de modelo cuando quieras escribiendo `/models`.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-model-list.webp" alt="Lista de modelos de OpenCode Zen, con los modelos gratuitos marcados Free a la derecha y DeepSeek V4 Flash Free resaltado" />
  <figcaption>Los modelos gratuitos están marcados a la derecha. Aquí estamos eligiendo DeepSeek V4 Flash Free.</figcaption>
</figure>

## Tu primera conversación

Ahora pídele algo. Escribe un mensaje como:

> Mira los archivos de esta carpeta y explica qué hacen.

Observa lo que sucede. Leerá archivos, pensará y te informará, y te pedirá permiso antes de cambiar nada. Ese ciclo de leer, actuar y verificar es el corazón de la programación agentiva.

<figure class="post-figure" style="max-width:700px">
  <img src="/images/guides/installing-an-agentic-coding-platform/first-conversation.webp" alt="OpenCode leyendo los archivos de un proyecto uno por uno, pensando y luego explicando lo que hace cada carpeta y archivo de nivel superior" />
  <figcaption>OpenCode lee los archivos del proyecto, piensa e informa sobre lo que encuentra.</figcaption>
</figure>

Lo mismo funciona en cualquier terminal, con o sin VS Code. Abre una terminal, muévete a una carpeta de proyecto, escribe `opencode` y ya estás listo. A algunas personas les encanta trabajar así. Prueba ambos y ve cuál te queda mejor.

Eso es todo. Ahora tienes una configuración de programación agentiva que funciona y no cuesta nada ejecutar. Para entender qué está pasando realmente bajo el capó, y qué significan palabras como tokens y contexto, continúa con [conceptos clave de programación agentiva](/guides/key-agentic-coding-concepts).
