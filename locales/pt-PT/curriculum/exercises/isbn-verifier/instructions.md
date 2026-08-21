---
title: "Verificador de ISBN"
description: "Verifica se o ISBN de um livro é válido."
en_md5: 1f50053213b8649f126851f264174e53
---

Cada livro tem um ISBN, um número de 10 algarismos que o identifica de forma única. Cada ISBN é único e segue um formato específico. Também existe um processo formal de verificação para confirmar que uma string é um ISBN. É esse processo que vais criar neste exercício.

Os ISBN costumam conter hífenes e têm este aspeto: `3-598-21508-8`

(Também existem ISBN de 13 algarismos, mas podes ignorá-los à vontade neste exercício!)

### Verificar um ISBN

Para verificar um ISBN:

- Começa pela esquerda e soma cada algarismo multiplicado por um peso decrescente de 10 até 1.
- Calcula o resto da divisão desse total por 11.
- Verifica se esse resto é zero.

Por exemplo, para o ISBN `3-598-21508-8`, verificamos se:

```
(3*10 + 5*9 + 9*8 + 8*7 + 2*6 + 1*5 + 5*4 + 0*3 + 8*2 + 8*1) % 11 === 0
```

Como o resultado é 0, fica provado que o ISBN é válido.

Mais algumas notas importantes:

- Às vezes, um ISBN pode terminar com um X. Nesse caso, o X representa `10`. Se o X aparecer em qualquer outro sítio, o ISBN é inválido.
- Os ISBN podem ser escritos com ou sem hífenes.
- Quaisquer outros carateres tornam o ISBN inválido.

### A tua tarefa

Cria uma função chamada `isValidIsbn(isbn)` (valida o ISBN) que recebe uma string com o ISBN e devolve `true` se for válido e `false` se não for.

### A função `Number(...)`

Ainda não falámos de uma coisa que precisas de conhecer: a função `Number(str)`. É uma função que recebe uma string e devolve essa string como número. Por isso, se escreveres `Number("1234")`, obténs `1234`. É uma função estranha porque começa com uma letra maiúscula. Não te preocupes com isso para já: vamos explicar porquê muito mais à frente.

Sabe mais na <a href="/concepts/type-conversion" target="_blank" rel="noopener noreferrer">página do conceito Conversão de Tipo</a>.

### Usar o que acabaste de aprender

Tal como no exercício anterior, existem muitas formas válidas de resolver este exercício, mas a solução que queremos que encontres usa uma instrução `continue`.

O cenário bónus desafia-te a resolver isto em 22 linhas de código. Há soluções mais curtas, mas se chegares às 22 linhas, fizeste um bom trabalho de otimização.

Diverte-te!
