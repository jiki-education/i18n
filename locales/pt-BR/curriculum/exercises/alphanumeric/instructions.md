---
title: "Alfanumérico"
description: "Crie funções para classificar texto como letras, números ou ambos."
en_md5: ba81d7fc98b45703f0c9bba133ae8058
---

Neste exercício, a sua tarefa é criar funções que verifiquem se uma string contém letras e/ou números.

Você vai precisar escrever três funções auxiliares:

- `isAlpha(string)` (é alfabético): determina se uma string é composta apenas por letras ASCII (por exemplo, "A", "a", "Hello")
- `isNumeric(string)` (é numérico): determina se uma string é composta apenas por caracteres numéricos (por exemplo, "0", "1", "456")
- `isAlphanumeric(string)` (é alfanumérico): determina se uma string é composta apenas por letras ou números ASCII (por exemplo, "Hello", "42", "Hello42")

Para quaisquer outros símbolos (por exemplo, "! ?") ou caracteres não ASCII (por exemplo, "じき", "正直"), as três funções devem retornar false.

Depois, escreva uma função `whatAmI(string)` (o que sou eu) que usa essas funções auxiliares para classificar uma string:

- Strings com apenas letras devem retornar `"Alpha"`
- Strings com apenas números devem retornar `"Numeric"`
- Strings com letras e números devem retornar `"Alphanumeric"`
- Todo o resto deve retornar `"Unknown"`

### Tarefas bônus

Existem muitas formas válidas de resolver este exercício. Você pode experimentar usar uma instrução `continue`, mas há muitas outras boas soluções.

Há também uma tarefa bônus que desafia você a resolver tudo em 42 linhas de código ou menos. Esse objetivo não é necessariamente a solução mais adequada para produção. Mais umas linhas provavelmente resultam numa solução melhor, e também existem soluções mais curtas. Mas é um bom objetivo para levar as suas capacidades mais longe.

Divirta-se!
