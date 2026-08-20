---
title: "Instalación del Subsistema de Windows para Linux (WSL)"
excerpt: "Instrucciones paso a paso para instalar el Subsistema de Windows para Linux, que te da un entorno de desarrollo adecuado en Windows."
tags: ["installation"]
seo:
  description: "Una guía amigable para principiantes sobre cómo instalar WSL (Subsistema de Windows para Linux) en Windows 10 y 11, con instrucciones paso a paso claras y soluciones a problemas comunes."
  keywords:
    [
      "wsl",
      "instalar wsl",
      "subsistema de windows para linux",
      "ubuntu en windows",
      "entorno de desarrollo windows",
      "aprender a programar"
    ]
en_md5: 7286edef00bc5cd57f37c00fb20ba83a
---

## Introducción

WSL (el **Subsistema de Windows para Linux**) es una funcionalidad de Windows, creada por Microsoft, que ejecuta un sistema Linux real dentro de tu máquina Windows. Lo necesitas porque la mayoría de las herramientas de programación se crean primero (y funcionan mejor) en Linux y macOS, y WSL es la forma en que los desarrolladores en Windows acceden a todo eso. Es la manera que el propio Microsoft recomienda para desarrollar en Windows. Instalarlo toma unos quince minutos, la mayor parte esperando, y solo necesitas hacerlo una vez.

## Antes de empezar

Necesitas:

- **Windows 10 (versión 2004 o posterior) o Windows 11.** Cualquier computadora con Windows de los últimos años funciona.
- **Acceso de administrador** a la computadora. Si es una computadora familiar, tal vez necesites que quien la configuró escriba su contraseña.

## Instalar WSL

1. Haz clic en el botón **Inicio** y escribe «powershell». Verás aparecer **Windows PowerShell**.
2. No lo abras simplemente. En su lugar, haz clic derecho sobre él y elige **Ejecutar como administrador**. Windows te preguntará si quieres permitir que haga cambios: haz clic en **Sí**.
3. En la ventana azul que aparece, escribe lo siguiente y presiona Enter:
   ```
   wsl --install
   ```
4. Windows descargará y configurará todo, incluido un sistema Linux llamado **Ubuntu** (la versión más popular de Linux). Esto puede tardar unos minutos.
5. Cuando te lo pida, **reinicia tu computadora**.

<!-- SCREENSHOT: PowerShell running wsl --install -->

## Configurar Ubuntu

Tras el reinicio, se abrirá automáticamente una ventana de terminal para terminar de configurar Ubuntu. (Si no lo hace, haz clic en Inicio, escribe «ubuntu» y ábrela.)

Te pedirá que crees un **nombre de usuario** y una **contraseña** para tu sistema Linux:

1. Escribe un nombre de usuario (en minúsculas, sin espacios) y presiona Enter.
2. Escribe una contraseña y presiona Enter, luego vuelve a escribirla para confirmar.

Hay algo que despista a todo el mundo aquí: **cuando escribes la contraseña, no aparece nada en la pantalla**. Ni puntos, ni asteriscos, nada. Es una medida de seguridad de Linux, no un fallo. Lo que escribes sí se está registrando; simplemente escribe la contraseña y presiona Enter.

No olvides esta contraseña. La necesitarás de vez en cuando al instalar cosas.

<!-- SCREENSHOT: Ubuntu first run asking for a username -->

## Verificar que funciona

Cierra todo, luego haz clic en **Inicio**, escribe «ubuntu» y ábrela. Deberías ver una ventana con un indicador que termina en `$`, esperando a que escribas. ¡Felicidades! Esa es una terminal Linux real, y ahora tienes el mismo entorno de desarrollo que los profesionales.

Prueba a escribir `ls` y presiona Enter. Lista los archivos de tu carpeta actual (todavía no habrá muchos).

## Usar WSL desde VS Code

Si tienes [VS Code instalado](/guides/installing-vscode), puede conectarse a WSL para que tu editor y tu terminal Linux trabajen juntos:

1. Abre VS Code.
2. Abre el panel de Extensiones (el icono de los cuatro cuadros a la izquierda, o Ctrl+Shift+X), busca **WSL** e instala la extensión creada por Microsoft.
3. Presiona Ctrl+Shift+P, escribe «WSL» y elige **WSL: Connect to WSL**. VS Code se reiniciará, conectado a Ubuntu.

De ahora en adelante, cualquier terminal que abras dentro de VS Code (menú Terminal, luego Nuevo terminal) será una terminal Linux. Esta es la configuración que recomendamos para el resto de nuestras guías.

## Si algo sale mal

El problema más común es un error que mencione **virtualización** (o «VT-x», «AMD-V» o «plataforma de máquina virtual»). WSL depende de una funcionalidad de hardware que está desactivada en algunas computadoras. Activarla implica cambiar un ajuste en la BIOS de tu computadora, que varía según el fabricante. Busca el nombre del modelo de tu laptop junto con «enable virtualisation» para obtener instrucciones, o pregunta en <a href="https://forum.jiki.io" target="_blank" rel="noopener noreferrer">nuestro foro</a> y te ayudaremos.

Para cualquier otra cosa, la <a href="https://learn.microsoft.com/en-us/windows/wsl/install" target="_blank" rel="noopener noreferrer">guía oficial de instalación de WSL</a> de Microsoft tiene una sección de solución de problemas y, de nuevo, el foro siempre está disponible.
