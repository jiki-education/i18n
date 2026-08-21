---
title: "Modelos de strings"
description: "Usar acentos graves e os espaços reservados `${...}` para encaixar valores diretamente numa string, em vez de juntar pedaços com `+`."
en_md5: 7fd0e09ac3b32db5f159f8e772872104
---

Podemos usar algo chamado _template literals_ (modelos de texto) para inserir strings dentro de outras strings.

Assim, em vez de juntar strings, podemos ter uma string, ou um modelo, que tem espaços para outras strings lá dentro.

Para isso, usamos acentos graves (_backticks_ em inglês) em vez de aspas.

Os acentos graves são, como o nome em inglês sugere, apóstrofos ao contrário, mas é bem possível que você nunca tenha usado eles, então você precisa encontrar a tecla certa no seu teclado.

Eles servem para criar um modelo que pode conter outras strings. E depois, para inserir uma string no modelo, usamos outra sintaxe esquisita, com cifrões e chaves. Assim, por exemplo, para obter o mesmo efeito de `"hello " + name` que acabamos de ver na concatenação, poderíamos escrever:

```javascript
`hello ${name}` // "hello Jeremy" ou "hello Jiki"
```

<img
  class="concept-image"
  src="/static/images/concept-assets/string-templates/jiki-name-box.webp"
  alt="O Jiki segurando uma caixa com a etiqueta name, o valor que é encaixado no modelo"
  width="207"
  height="400"
/>

E isso faz exatamente a mesma coisa que juntar as strings.

Mas quando você tem várias strings que precisam ser todas montadas no mesmo lugar, isso pode ser bem mais eficiente.

Você vai demorar um pouco para se acostumar com essa sintaxe específica, mas não tem nada de muito complexo nela.
