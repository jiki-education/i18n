---
title: "Verificador de ISBN"
description: "Verifique se o ISBN de um livro é válido."
en_md5: 1f50053213b8649f126851f264174e53
---

Cada livro tem um ISBN, um número de 10 dígitos que o identifica de forma única. Cada ISBN é único e segue um formato específico. Também existe um processo formal de verificação para confirmar que uma string é um ISBN. É esse processo que você vai criar neste exercício.

Os ISBN costumam conter hifens e têm este aspecto: `3-598-21508-8`

(Também existem ISBN de 13 dígitos, mas você pode ignorá-los à vontade neste exercício!)

### Verificar um ISBN

Para verificar um ISBN:

- Comece pela esquerda e some cada dígito multiplicado por um peso decrescente de 10 até 1.
- Calcule o resto da divisão desse total por 11.
- Verifique se esse resto é zero.

Por exemplo, para o ISBN `3-598-21508-8`, verificamos se:

```
(3*10 + 5*9 + 9*8 + 8*7 + 2*6 + 1*5 + 5*4 + 0*3 + 8*2 + 8*1) % 11 === 0
```

Como o resultado é 0, fica provado que o ISBN é válido.

Mais algumas notas importantes:

- Às vezes, um ISBN pode terminar com um X. Nesse caso, o X representa `10`. Se o X aparecer em qualquer outro lugar, o ISBN é inválido.
- Os ISBN podem ser escritos com ou sem hifens.
- Quaisquer outros caracteres tornam o ISBN inválido.

### Sua tarefa

Crie uma função chamada `isValidIsbn(isbn)` (valida o ISBN) que recebe uma string com o ISBN e retorna `true` se for válido e `false` se não for.

### A função `Number(...)`

Ainda não falamos de uma coisa que você precisa conhecer: a função `Number(str)`. É uma função que recebe uma string e retorna essa string como número. Então, se você escrever `Number("1234")`, você obtém `1234`. É uma função estranha porque começa com uma letra maiúscula. Não se preocupe com isso por enquanto: vamos explicar o porquê muito mais à frente.

Saiba mais na <a href="/concepts/type-conversion" target="_blank" rel="noopener noreferrer">página do conceito Conversão de Tipo</a>.

### Use o que você acabou de aprender

Tal como no exercício anterior, existem muitas formas válidas de resolver este exercício, mas a solução que queremos que você encontre usa uma instrução `continue`.

O cenário bônus te desafia a resolver isso em 22 linhas de código. Há soluções mais curtas, mas se você chegar às 22 linhas, você fez um bom trabalho de otimização.

Divirta-se!
