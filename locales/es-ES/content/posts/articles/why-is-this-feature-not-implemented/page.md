---
title: "¿Por qué no está implementada esta funcionalidad?"
excerpt: "Aprende por qué Jiki excluye ciertas funcionalidades de los lenguajes y cómo esto te ayuda a aprender de forma más efectiva."
tags: ["exercises"]
seo:
  description: "Entiende por qué Jiki excluye ciertas funcionalidades de JavaScript y Python para ayudar a principiantes a aprender"
  keywords: ["jiki", "javascript", "python", "funcionalidades excluidas", "disparos en el pie", "aprendizaje"]
en_md5: 54efd50d3331fa1e315aed1728a6f859
---

¿Intentaste ejecutar tu código y recibiste un mensaje que dice que algo no está disponible en esta versión del lenguaje? ¡Sigue leyendo para entender qué está pasando!

Si recibiste un mensaje que dice «Esta funcionalidad no está disponible para ti todavía», es una situación diferente: mejor lee **[¿Cuándo se desbloqueará esta funcionalidad?](/articles/when-will-this-feature-unlock)**.

## Introducción

Usaste una palabra clave o un concepto que nuestra versión del lenguaje no admite. ¡No te preocupes, no es un error!

Las versiones de JavaScript y Python que usas en Jiki fueron **diseñadas específicamente por nosotros** para ayudarte a aprender. Hemos eliminado cuidadosamente ciertas funcionalidades para evitar que te topes sin querer con partes complejas o confusas del lenguaje antes de estar preparado.

## ¿Por qué excluir funcionalidades?

Los lenguajes de programación están diseñados para **profesionales**. Contienen funcionalidades avanzadas que ayudan a desarrolladores experimentados a trabajar más rápido, además de lastre histórico: funcionalidades que probablemente deberían haberse eliminado hace años pero que se mantienen para que los sistemas antiguos sigan funcionando.

Cuando estás aprendiendo, estas funcionalidades crean confusión. Al eliminarlas, Jiki te permite concentrarte en lo que importa: **aprender a pensar como programador**.

### Los disparos en el pie

A algunas funcionalidades las llamamos **«disparos en el pie»**: cosas con las que puedes dispararte en el pie accidentalmente. Estas son:

- **Realmente problemáticas** y es mejor evitarlas incluso para profesionales.
- **Casos límite confusos** que distraen de los conceptos centrales.
- **Lastre histórico** que existe solo por compatibilidad con versiones anteriores.

Estas funcionalidades están excluidas permanentemente de Jiki porque simplemente no vale la pena la confusión que generan.

### Funcionalidades avanzadas

Otras funcionalidades están excluidas porque son **demasiado avanzadas** para el punto en el que te encuentras en tu camino de aprendizaje. No son malas funcionalidades; simplemente no son útiles cuando estás aprendiendo los fundamentos.

A medida que avances en Jiki, algunas de estas funcionalidades se desbloquearán. Pero por ahora, concéntrate en dominar los fundamentos.

## Los detalles

No necesitas leer esto a menos que te interese activamente lo que sucede detrás de escena y las decisiones que hemos tomado.

### JavaScript

| Funcionalidad                                              | Por qué está excluida                                                                                                                           |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `var`                                                      | Usa `let` o `const` en su lugar. `var` tiene reglas de scope confusas que causan errores incluso a desarrolladores experimentados.            |
| `with`                                                     | Obsoleto y confuso. Crea código ambiguo sobre el que es difícil razonar.                                                                       |
| `debugger`                                                 | Herramienta de desarrollo, no necesaria para aprender.                                                                                         |
| `void`                                                     | Rara vez útil y confuso para principiantes.                                                                                                    |
| `yield`                                                    | Funcionalidad avanzada de generadores. Aprenderás sobre generadores más adelante en tu camino.                                                 |
| `delete`                                                   | Puede causar comportamientos confusos con arrays y objetos.                                                                                    |
| `import` / `export`                                        | Funcionalidades del sistema de módulos. Jiki maneja los módulos de forma diferente para mantener las cosas simples.                            |
| Operadores bit a bit (`&`, `\|`, `^`, `~`, `<<`, `>>`, `>>>`) | Muy rara vez necesarios y confusos cuando estás aprendiendo. Son para manipulación de bits de bajo nivel.                                     |

### Python

| Funcionalidad | Por qué está excluida                                                                                                                                |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `global`      | Modificar variables globales desde dentro de las funciones genera código confuso. Aprende mejor a pasar valores como argumentos.                    |
| `nonlocal`    | Funcionalidad de scope avanzada para funciones anidadas. No se necesita al aprender los fundamentos.                                                |
| `assert`      | Herramienta de depuración que puede desactivarse en producción. En su lugar, aprende un manejo de errores adecuado.                                 |

## ¿Qué pasa si necesito una funcionalidad?

Cada ejercicio en Jiki está diseñado para resolverse con las funcionalidades que te han enseñado hasta ese punto. Si estás topándote con una limitación, suele haber una mejor forma de resolver tu problema usando las funcionalidades disponibles. Eso es parte del aprendizaje: descubrir cómo trabajar dentro de las restricciones.

Si realmente crees que una funcionalidad debería estar disponible en tu nivel, ¡avísanos! Siempre estamos ajustando lo que se incluye según los comentarios.
