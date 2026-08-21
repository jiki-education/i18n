---
title: "Porque é que esta funcionalidade não está implementada?"
excerpt: "Descobre porque é que certas funcionalidades da linguagem são excluídas do Jiki e como isso te ajuda a aprender de forma mais eficaz."
tags: ["exercises"]
seo:
  description: "Percebe porque é que o Jiki exclui certas funcionalidades de JavaScript e Python para ajudar quem está a começar a aprender"
  keywords: ["jiki", "javascript", "python", "funcionalidades excluídas", "foot-guns", "aprendizagem"]
en_md5: 54efd50d3331fa1e315aed1728a6f859
---

Tentaste correr o teu código e recebeste uma mensagem a dizer que algo não está disponível nesta versão da linguagem? Continua a ler para perceberes o que se passa!

Se recebeste uma mensagem a dizer “Esta funcionalidade ainda não está disponível para ti”, essa é uma situação diferente. Lê antes **[Quando é que esta funcionalidade vai ser desbloqueada?](/articles/when-will-this-feature-unlock)**.

## Introdução

Usaste uma palavra-chave ou um conceito que a nossa versão da linguagem não suporta. Não te preocupes: isto não é um bug!

As versões de JavaScript e Python que estás a usar no Jiki foram **especificamente concebidas por nós** para te ajudar a aprender. Removemos cuidadosamente certas funcionalidades para evitar que tropeces acidentalmente em partes complexas ou confusas da linguagem antes de estares preparado para elas.

## Porquê excluir funcionalidades?

As linguagens de programação são concebidas para **profissionais**. Contêm funcionalidades avançadas que ajudam programadores experientes a trabalhar mais depressa, além de bagagem histórica: funcionalidades que provavelmente já deviam ter sido removidas há anos, mas que se mantêm para que os sistemas antigos continuem a funcionar.

Quando estás a aprender, estas funcionalidades geram confusão. Ao removê-las, o Jiki permite que te concentres no que importa: **aprender a pensar como um programador**.

### Foot-guns

Chamamos a algumas funcionalidades **“foot-guns”**: coisas com as quais podes, sem querer, dar um tiro no teu próprio pé. Estas são:

- **Genuinamente problemáticas** e que até os profissionais devem evitar
- **Casos-limite confusos** que desviam a atenção dos conceitos fundamentais
- **Bagagem histórica** que existe apenas por motivos de compatibilidade com versões anteriores

Estas estão permanentemente excluídas do Jiki porque simplesmente não compensam a confusão que causam.

### Funcionalidades avançadas

Outras funcionalidades são excluídas por serem **demasiado avançadas** para a fase em que te encontras no teu percurso de aprendizagem. Estas não são funcionalidades más. Apenas não ajudam quando estás a aprender os fundamentos.

À medida que avanças no Jiki, algumas destas funcionalidades vão ser desbloqueadas. Mas, para já, concentra-te em dominar as bases.

## Os pormenores

Não precisas de ler esta secção, a não ser que tenhas mesmo interesse no que acontece nos bastidores e nas decisões que tomámos.

### JavaScript

| Funcionalidade | Porque é que está excluída |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `var` | Usa `let` ou `const` em vez disso. `var` tem regras de âmbito confusas que causam bugs mesmo a programadores experientes. |
| `with` | Obsoleto e confuso. Cria código ambíguo e difícil de compreender. |
| `debugger` | Ferramenta de desenvolvimento, não é necessária para aprender. |
| `void` | Raramente útil e confuso para principiantes. |
| `yield` | Funcionalidade avançada de geradores. Vais aprender os geradores mais à frente no teu percurso. |
| `delete` | Pode causar um comportamento confuso com arrays e objetos. |
| Operadores bit a bit (`&`, `\|`, `^`, `~`, `<<`, `>>`, `>>>`) | Raramente são necessários e são confusos quando estás a aprender. Servem para manipulação de bits de baixo nível. |

### Python

| Funcionalidade | Porque é que está excluída |
| ---------- | --------------------------------------------------------------------------------------------------------------------- |
| `global` | Modificar variáveis globais dentro de funções gera código confuso. Aprende, em vez disso, a passar valores como parâmetros. |
| `nonlocal` | Funcionalidade avançada de âmbito para funções aninhadas. Não é necessária quando estás a aprender os fundamentos. |
| `assert` | Ferramenta de depuração que pode ser desativada em produção. Aprende, em vez disso, a tratar os erros corretamente. |

## E se precisares de uma funcionalidade?

Cada exercício no Jiki foi concebido para ser resolvido com as funcionalidades que já te foram ensinadas até esse momento. Se estás a esbarrar numa limitação, normalmente há uma forma melhor de resolver o problema usando as funcionalidades disponíveis. Isso faz parte da aprendizagem: perceber como trabalhar dentro das limitações.

Se achas mesmo que uma funcionalidade devia estar disponível no teu nível, diz-nos! Estamos sempre a aperfeiçoar o que está incluído com base no feedback.
