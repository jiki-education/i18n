---
title: "O operador `!` (não)"
description: "Usar `!` para inverter um Boolean: true passa a false e false passa a true, útil para alternar ou inverter verificações."
en_md5: 5d752c7a85e6e17d914c73c83429de80
---

Até agora, quando comparamos coisas para ver se são iguais, usamos três sinais de igual. Às vezes, porém, queremos verificar se as coisas não são iguais e, para isso, usamos um ponto de exclamação seguido de dois sinais de igual. E, em geral, em programação, um ponto de exclamação (_bang_ em inglês), como acho que os nossos amigos americanos chamam, significa não. Imagine que você trabalha numa loja e que a gerência decidiu que ninguém pode entrar com roupa de discoteca.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/shop-bouncer.webp"
  alt="Um segurança na porta de uma loja verificando a roupa das pessoas na fila"
  width="451"
  height="400"
/>

Podemos dizer: “Se a roupa não for de discoteca, abra a porta.” A condicional if funciona exatamente da mesma forma.

```javascript
if (outfit !== "disco") {
  openDoor()
}
```

A diferença é que a condição retorna true se as coisas forem diferentes e retorna false se forem iguais. Por isso, podíamos escrever a mesma coisa assim: “Se a roupa for de discoteca, não faça nada. Caso contrário, abra a porta.” Mas, geralmente, é mais fácil e mais limpo usar o operador `not` (_operator_ em inglês) para saber e dizer exatamente o que você quer dizer.

Mais uma coisa relacionada a isso. Às vezes, você vai ter uma variável que é true e quer invertê-la para false; outras vezes, você vai ter algo que é false e quer invertê-lo para true. Podemos usar isso para acompanhar o estado de alguma coisa.

Imagine que temos algo quicando da esquerda para a direita e uma variável chamada `movingRight` (a mover para a direita), que é true quando você deve se mover para a direita. Mas, quando você bate na extremidade direita, quer alternar (_toggle_ em inglês) o valor para false.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/pong-court.webp"
  alt="Um campo ao estilo Pong com raquetes e uma bola quicando de um lado para o outro, ilustrando a alternância de uma variável movingRight"
  width="500"
  height="352"
/>

Podíamos fazer isso dizendo: “Se `movingRight` for igual a true, `movingRight` passa a false. Caso contrário, `movingRight` passa a true.” Esta é uma forma de alternar a variável. O Jiki olha para `movingRight` para ver se é true ou false; depois calcula o oposto e coloca de volta na caixa.

```javascript
if (movingRight === true) {
  movingRight = false
} else {
  movingRight = true
}
```

Mas há uma forma mais limpa de fazer isso, que é usar o mesmo ponto de exclamação ou _bang_:

```javascript
movingRight = !movingRight
```

E é isso que inverte o valor. `!movingRight` significa o oposto daquilo que era antes.

Portanto, se `movingRight` era true, agora é false. Se era false, agora é true. O Jiki vai buscar o que está na caixa neste momento, e esse _bang_ diz para ele encontrar o oposto. Assim, o oposto de true é false. O oposto de false é true. Depois, coloca de volta na caixa. Isso é exatamente o mesmo que aquela condicional if/else mais longa, mas é muito mais limpo e sucinto de escrever.
