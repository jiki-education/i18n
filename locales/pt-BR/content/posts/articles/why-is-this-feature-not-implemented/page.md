---
title: "Por que este recurso não está implementado?"
excerpt: "Descubra por que certos recursos da linguagem são excluídos do Jiki e como isso te ajuda a aprender de forma mais eficaz."
tags: ["exercises"]
seo:
  description: "Entenda por que o Jiki exclui certos recursos de JavaScript e Python para ajudar quem está começando a aprender"
  keywords: ["jiki", "javascript", "python", "recursos excluídos", "foot-guns", "aprendizado"]
en_md5: 54efd50d3331fa1e315aed1728a6f859
---

Você tentou rodar seu código e recebeu uma mensagem dizendo que algo não está disponível nesta versão da linguagem? Continue lendo para entender o que está acontecendo!

Se você recebeu uma mensagem dizendo “Este recurso ainda não está disponível para você”, essa é uma situação diferente. Leia antes **[Quando este recurso vai ser desbloqueado?](/articles/when-will-this-feature-unlock)**.

## Introdução

Você usou uma palavra-chave ou um conceito que a nossa versão da linguagem não suporta. Não se preocupe: isso não é um bug!

As versões de JavaScript e Python que você está usando no Jiki foram **especificamente projetadas por nós** para te ajudar a aprender. Removemos cuidadosamente certos recursos para evitar que você tropece sem querer em partes complexas ou confusas da linguagem antes de estar preparado para elas.

## Por que excluir recursos?

As linguagens de programação são projetadas para **profissionais**. Contêm recursos avançados que ajudam desenvolvedores experientes a trabalhar mais rápido, além de bagagem histórica: recursos que provavelmente já deviam ter sido removidos há anos, mas que continuam ali para que os sistemas antigos continuem funcionando.

Quando você está aprendendo, esses recursos geram confusão. Ao removê-los, o Jiki deixa você se concentrar no que importa: **aprender a pensar como um desenvolvedor**.

### Foot-guns

Chamamos alguns recursos de **“foot-guns”**: coisas com as quais você pode, sem querer, dar um tiro no próprio pé. Eles são:

- **Genuinamente problemáticos** e que até os profissionais devem evitar
- **Casos-limite confusos** que desviam a atenção dos conceitos fundamentais
- **Bagagem histórica** que existe apenas por motivos de compatibilidade com versões anteriores

Esses estão permanentemente excluídos do Jiki porque simplesmente não compensam a confusão que causam.

### Recursos avançados

Outros recursos são excluídos por serem **avançados demais** para a fase em que você está no seu percurso de aprendizado. Eles não são recursos ruins. Só não ajudam quando você está aprendendo os fundamentos.

À medida que você avança no Jiki, alguns desses recursos vão ser desbloqueados. Mas, por enquanto, concentre-se em dominar as bases.

## Os detalhes

Você não precisa ler esta seção, a não ser que tenha mesmo interesse no que acontece nos bastidores e nas decisões que tomamos.

### JavaScript

| Recurso | Por que está excluído |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `var` | Use `let` ou `const` em vez disso. `var` tem regras de escopo confusas que causam bugs até para desenvolvedores experientes. |
| `with` | Obsoleto e confuso. Cria código ambíguo e difícil de entender. |
| `debugger` | Ferramenta de desenvolvimento, não é necessária para aprender. |
| `void` | Raramente útil e confuso para iniciantes. |
| `yield` | Recurso avançado de geradores. Você vai aprender os geradores mais para frente no seu percurso. |
| `delete` | Pode causar um comportamento confuso com arrays e objetos. |
| Operadores bit a bit (`&`, `\|`, `^`, `~`, `<<`, `>>`, `>>>`) | Raramente são necessários e são confusos quando você está aprendendo. Servem para manipulação de bits de baixo nível. |

### Python

| Recurso | Por que está excluído |
| ---------- | --------------------------------------------------------------------------------------------------------------------- |
| `global` | Modificar variáveis globais dentro de funções gera código confuso. Aprenda, em vez disso, a passar valores como parâmetros. |
| `nonlocal` | Recurso avançado de escopo para funções aninhadas. Não é necessário quando você está aprendendo os fundamentos. |
| `assert` | Ferramenta de depuração que pode ser desativada em produção. Aprenda, em vez disso, a tratar os erros corretamente. |

## E se você precisar de um recurso?

Cada exercício no Jiki foi projetado para ser resolvido com os recursos que já te foram ensinados até aquele momento. Se você está esbarrando numa limitação, normalmente existe um jeito melhor de resolver o problema usando os recursos disponíveis. Isso faz parte do aprendizado: entender como trabalhar dentro das limitações.

Se você acha mesmo que um recurso devia estar disponível no seu nível, nos diga! Estamos sempre aperfeiçoando o que está incluído com base no feedback.
