---
title: "O operador `!` (não)"
description: "Usar `!` para inverter um Boolean: true passa a false e false passa a true, útil para alternar ou inverter verificações."
en_md5: 5d752c7a85e6e17d914c73c83429de80
---

Até agora, quando comparámos coisas para ver se são iguais, usámos três sinais de igual. Às vezes, porém, queremos verificar se as coisas não são iguais e, para isso, usamos um ponto de exclamação seguido de dois sinais de igual. E, em geral, em programação, um ponto de exclamação (_bang_ em inglês), como acho que os nossos amigos americanos lhe chamam, significa não. Imagina que trabalhas numa loja e que a gerência decidiu que ninguém pode entrar com roupa de discoteca.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/shop-bouncer.webp"
  alt="Um porteiro à porta de uma loja a verificar a roupa das pessoas na fila"
  width="451"
  height="400"
/>

Podemos dizer: «Se a roupa não for de discoteca, abre a porta.» A condicional if funciona exatamente da mesma forma.

```javascript
if (outfit !== "disco") {
  openDoor()
}
```

A diferença é que a condição devolve true se as coisas forem diferentes e devolve false se forem iguais. Por isso, podíamos escrever a mesma coisa assim: «Se a roupa for de discoteca, não faças nada. Caso contrário, abre a porta.» Mas, geralmente, é mais fácil e mais limpo usar o operador `not` (_operator_ em inglês) para saberes e dizeres exatamente o que queres dizer.

Mais uma coisa relacionada com isto. Às vezes, vais ter uma variável que é true e queres invertê-la para false; outras vezes, vais ter algo que é false e queres invertê-lo para true. Podemos usar isto para acompanhar o estado de alguma coisa.

Imagina que temos algo a saltitar da esquerda para a direita e uma variável chamada `movingRight` (a mover para a direita), que é true quando deves mover-te para a direita. Mas, quando bates na extremidade direita, queres alternar (_toggle_ em inglês) o valor para false.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/pong-court.webp"
  alt="Um campo ao estilo Pong com raquetes e uma bola a saltitar de um lado para o outro, a ilustrar a alternância de uma variável movingRight"
  width="500"
  height="352"
/>

Podíamos fazer isto dizendo: «Se `movingRight` for igual a true, `movingRight` passa a false. Caso contrário, `movingRight` passa a true.» Esta é uma forma de alternar a variável. O Jiki olha para `movingRight` para ver se é true ou false; depois calcula o oposto e coloca-o de volta na caixa.

```javascript
if (movingRight === true) {
  movingRight = false
} else {
  movingRight = true
}
```

Mas há uma forma mais limpa de fazer isto, que é usar o mesmo ponto de exclamação ou _bang_:

```javascript
movingRight = !movingRight
```

E é isso que inverte o valor. `!movingRight` significa o oposto daquilo que era antes.

Portanto, se `movingRight` era true, agora é false. Se era false, agora é true. O Jiki vai buscar o que está na caixa neste momento, e esse _bang_ diz-lhe para encontrar o oposto. Assim, o oposto de true é false. O oposto de false é true. Depois, coloca-o de volta na caixa. Isto é exatamente o mesmo que aquela condicional if/else mais longa, mas é muito mais limpo e sucinto de escrever.
