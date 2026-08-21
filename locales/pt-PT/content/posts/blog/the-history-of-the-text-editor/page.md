---
title: "A fascinante história do editor de texto"
excerpt: "Dos furos em cartões aos editores que escrevem código por ti. A história do modesto editor de texto e da rivalidade entre Vi e Emacs, mais antiga do que a maioria das pessoas vivas hoje."
tags: ["history", "text-editors", "vim", "emacs", "coding"]
seo:
  description: "A história do editor de texto, dos cartões perfurados e dos editores de linha ao Vi, ao Emacs, ao VS Code e à era da IA. Como a distância entre uma ideia e o código a correr foi diminuindo."
  keywords: ["história dos editores de texto", "vi vs emacs", "história do editor de texto", "história dos editores de código"]
en_md5: 1746a724d6fb171afc5dc961c3519e37
---

## Introdução

Comecei a programar há 30 anos e, desde então, uso um editor de texto quase todos os dias. Experimentei muitos e, de vez em quando, até me tornei um bocado fanático sobre qual é o melhor.

Durante todo esse período, um dos primeiros ritos de passagem de quem começa a programar é instalar e aprender a usar um editor de texto. Mas, à medida que a programação com agentes muda o que significa ser programador, a era do domínio do editor de texto talvez esteja a chegar ao fim.

Por isso, achei que seria interessante conhecer a história do editor de texto. Dos furos em cartões e das horas de espera, à edição de uma linha de cada vez numa impressora, até à rivalidade entre o Vi e o Emacs, que é mais antiga do que a maioria das pessoas vivas hoje.

Esta é a história do modesto editor de texto.

## Antes do editor: furos em cartões (décadas de 1950 e 1960)

É difícil imaginar programar sem um ecrã para veres o teu código, mas foi assim que isto começou.

Nas décadas de 1950 e 1960, o ecrã ainda não tinha sido inventado e, em vez disso, os programas eram fisicamente perfurados em cartões de cartolina (ou fita de papel), uma linha de código por cartão. «Editar» significava voltar a perfurar um cartão, ou trocar fisicamente cartões no baralho.

Se o meu código demorar mais do que alguns segundos a correr, fico muito frustrado com a lentidão do ciclo de feedback, mas, nessa época, o feedback media-se em horas. Entregavas o teu baralho de cartões a um operador, que o colocava numa fila de tarefas para executar. Recebias uma impressão horas, ou talvez dias, mais tarde. Imagino que, naquela altura, uma «gralha» também não fosse bem uma coisa...!

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/keypunch-operator.webp" alt="Um operador de máquina perfuradora na década de 1950, a perfurar dados em cartões" />
  <figcaption>Um operador de máquina perfuradora na década de 1950. Fotografia do U.S. Census Bureau via <a href="https://commons.wikimedia.org/wiki/File:Keypunch_operator_1950_census_IBM_016.jpg">Wikimedia Commons</a>, domínio público.</figcaption>
</figure>

## O computador começa a responder (década de 1960)

Duas invenções tiraram a edição desse mundo lento de processamento em lote e levaram-na para algo interativo.

A primeira foi o **teletipo**. O teletipo substituiu o conceito de lotes de cartões pré-perfurados. Em vez disso, escrevias num teclado. As teclas que premias eram enviadas para a máquina em tempo real, e esta imprimia as respostas diretamente num rolo de papel. Ainda não havia ecrã, mas, pela primeira vez, tinhas um canal direto, de ida e volta, para o computador, em vez de uma pilha de cartões.

A segunda foi o **tempo partilhado**. Sem tempo partilhado, um computador continuava a estar ligado a uma pessoa de cada vez, limitado à velocidade a que essa pessoa conseguia escrever e processar respostas. Isto causava uma enorme perda de tempo à espera de o operador humano agir. O tempo partilhado resolveu isso ao permitir que a máquina saltasse entre várias pessoas ao mesmo tempo. Várias pessoas podiam estar ligadas à mesma máquina, e esta alternava com tanta rapidez que cada uma tinha a ilusão de ter o computador só para si.

Junta estas duas invenções e tens uma verdadeira conversa com a máquina. E, assim que podes conversar com ela, podes começar a editar o teu código enquanto lá estás sentado, uma linha de cada vez, em vez de voltares a perfurar cartões e rezar. É exatamente o que os primeiros editores a sério te permitiam fazer.

<figure class="post-figure" style="max-width:300px">
  <img src="/images/blog/the-history-of-the-text-editor/teletype-asr33.webp" alt="Um terminal Teletype Model 33 ASR, que imprimia o resultado em papel em vez de num ecrã"/>
  <figcaption>Teletype Model 33 ASR. Fotografia de ComputerGeek7066 via <a href="https://commons.wikimedia.org/wiki/File:Teletype_model_33_ASR.jpg">Wikimedia Commons</a>, CC BY-SA 4.0.</figcaption>
</figure>

## Os editores de linha: ed, QED e TECO (1962-1971)

A década de 1960 trouxe outra enorme mudança de paradigma. O teu programa deixou de ser um objeto físico que transportavas (um baralho de cartões numa caixa) e passou a ser um ficheiro com nome, guardado no disco do próprio computador. Em vez de imprimires um cartão novo para alterar o programa, agora podias realmente editar o programa.

Continuávamos, no entanto, sem ecrãs. Em vez disso, tudo o que executavas era também impresso numa folha de papel. Essa impressão é o que se conhece como «cópia impressa»: um registo permanente das instruções que davas ao computador.

Foi a primeira vez que tivemos algo parecido com os editores modernos, mas continuavam a ser bastante estranhos, pois eram **orientados à linha**. Trabalhavas uma linha de cada vez e baseavam-se em comandos. Davas comandos (alguns dos quais parecem muito familiares a quem já usou o Vim) e esses comandos faziam alterações. Por exemplo, editar um poema para corrigir uma gralha podia ter este aspeto:

```
input         output            what it does
------------  ----------------  ----------------------------------------
ed poem       45                open the file "poem"; ed prints its size
1,$p                            print all lines - ed then replies:
              Roses are red
              Violets are blu   the typo!
              Sugar is sweet
2             Violets are blu   jump to line 2; ed prints it
s/blu/blue/                     on this line, change blu to blue
p             Violets are blue  print the current line (now fixed)
w             46                write/save; ed prints the new size
q                               quit
```

As poucas pessoas que programavam nessa época provavelmente te falariam de três editores notáveis desse período:

- **TECO**, criado em 1962 por Dan Murphy no MIT, destinava-se originalmente a editar fita de papel perfurada. Era famoso por ser críptico e também funcionava como linguagem de programação (isto vai ser importante mais tarde)
- **QED**, criado em 1965/66 por Butler Lampson e L. Peter Deutsch em Berkeley, foi um dos primeiros editores de linha. Dois anos mais tarde, Ken Thompson reescreveu-o e deu-lhe **expressões regulares** (um tipo de linguagem de programação usado para encontrar padrões em texto), que foi a primeira vez que elas apareceram num editor.
- **ed**, lançado no início da década de 1970 por Ken Thompson na Bell Labs, reduziu as ideias do QED a um editor mínimo que acompanhava o primeiro Unix. O `ed` continua instalado em todos os Mac e em todas as máquinas Linux atuais, e a sua linguagem de comandos é a antecessora direta dos comandos `grep`, `sed` e `:` do Vi (todos eles têm [percursos do Exercism](http://exercism.org/tracks), se quiseres aprendê-los!)

O TECO é também o lar daquele que é amplamente considerado o primeiro «easter egg» de software conhecido (uma funcionalidade escondida presente em muitos jogos atuais). Numa versão posterior do TECO, escrever `make love` dava a resposta atrevida `not war?`. Foi lá introduzido discretamente por volta de 1967, no Stanford AI Lab, cerca de uma década antes de os «easter eggs» se tornarem algo comum nos videojogos. Podes [instalar o TECO](https://github.com/blakemcbride/TECOC) e experimentá-lo!

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/teco-easter-egg.webp" alt="Um terminal verde sobre preto a mostrar o comando make love, respondido pelo TECO com Not war?" />
  <figcaption>O «easter egg» <code>make love</code> / <code>not war?</code> do TECO, reproduzido numa versão moderna do TECO.</figcaption>
</figure>

## Ver a página inteira: Bravo e WYSIWYG (1974)

Entretanto, na **Xerox PARC**, começava um outro ramo da história.

Em 1974, Butler Lampson e Charles Simonyi lançaram o **Bravo**, o primeiro editor **WYSIWYG** («what you see is what you get», ou seja, «o que vês é o que obténs»). Mostrava texto formatado com tipos de letra reais num ecrã de mapa de bits e usava o **rato** para selecionar texto (na verdade, o rato já tinha sido patenteado muito antes, mas isso é uma história para outra altura!).

Um pouco como o Vim, tinha dois modos: um «modo de comandos», em que premir as teclas _fazia_ coisas, e um «modo de inserção», em que premir as teclas escrevia no ecrã.

Este é, na verdade, um ponto de viragem fundamental na nossa história. Por um lado, Simonyi levou mais tarde estas ideias para a Microsoft, onde criou o Word e nos deu os processadores de texto. Por outro lado, o rato e a edição por modos alimentaram diretamente os editores de código que se seguiram.

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/xerox-alto.webp" alt="Um computador Xerox Alto, que executava o Bravo, o primeiro editor WYSIWYG" />
  <figcaption>Xerox Alto. Fotografia via <a href="https://commons.wikimedia.org/wiki/File:Xerox_Alto.jpg">Wikimedia Commons</a>, CC BY-SA 2.5.</figcaption>
</figure>

## A grande rivalidade: Vi e Emacs (1976 em diante)

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/emacs.webp" alt="Uma captura de ecrã do GNU Emacs a editar código" />
  <figcaption>GNU Emacs. Captura de ecrã de tecosaur via <a href="https://commons.wikimedia.org/wiki/File:Writing_and_compiling_C%2B%2B_in_Emacs.png">Wikimedia Commons</a>, CC BY-SA 4.0.</figcaption>
</figure>

- O coração da história: em **1976**, em costas opostas, nasceram os dois editores que ainda dominam a programação a sério, a partir de filosofias opostas
- **Emacs** (MIT: Richard Stallman, com David Moon e Guy Steele): começou como um conjunto de **macros para o TECO** («Editor MACroS»)
- A grande ideia do Emacs: um editor deve ser infinitamente **programável e extensível** pelo seu utilizador. É menos um editor de texto e mais um ambiente Lisp onde, por acaso, também editas texto
- Stallman reconstruiu-o como **GNU Emacs** em 1984, e este tornou-se um símbolo do movimento do software livre
- **Vi** (Berkeley: Bill Joy, na altura aluno de pós-graduação, mais tarde cofundador da Sun): um modo **visual** de ecrã inteiro construído sobre o núcleo de edição de linha do ed

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/vim.webp" alt="Uma captura de ecrã do Vim a editar código" />
  <figcaption>Vim, o descendente moderno mais popular do Vi. Captura de ecrã de Carolinedmoreschi via <a href="https://commons.wikimedia.org/wiki/File:Dracula_Theme_being_used_on_Vim.png">Wikimedia Commons</a>, CC BY-SA 4.0.</figcaption>
</figure>

- O Vi foi concebido sob restrições brutais: tinha de poder ser usado através de um **modem de 300 baud**, em que cada caráter enviado para o ecrã contava
- Essa escassez produziu a genialidade do Vi: a **edição por modos**, em que as teclas premidas formam uma linguagem de comandos compacta para mover e transformar texto
- **Vim** («Vi IMproved», 1991) acrescentou desfazer em vários níveis, realce de sintaxe e plugins. O **Neovim** modernizou-o ainda mais recentemente
- A **«guerra dos editores»** entre os dois campos é a rivalidade mais antiga do software e é, na verdade, uma divisão filosófica: Emacs (ambiente maximalista, programável e que faz de tudo) contra o Vi (mínimo, por modos e de uma eficiência implacável)
- Ambos continuam em uso diário quase 50 anos depois, o que é espantoso para qualquer software

## Editores para o resto de nós: BBEdit, TextMate e Sublime (1992-2008)

- À medida que os sistemas operativos gráficos amadureceram, apareceu uma nova classe de editores para programadores que queriam uma interface gráfica nativa, e não um terminal
- **BBEdit** (1992, Mac): o editor de longa duração que «não desilude»
- **TextMate** (2004, Mac): extremamente influente durante o boom do **Ruby on Rails**. O seu sistema de «bundles» e snippets, e o seu formato de gramática para realce de sintaxe, tornaram-se um padrão de facto que o VS Code ainda usa hoje
- **Sublime Text** (2008): rápido, multiplataforma e minimalista. Introduziu coisas que todos copiaram, como o minimapa, os múltiplos cursores e uma paleta de comandos difusa
- O Sublime provou que havia um enorme mercado entre o «editor de terminal» e o «IDE pesado»

## A era da tecnologia web: Atom e VS Code (2014-2015)

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/vscode.webp" alt="Uma captura de ecrã do VSCodium, a versão de código aberto do VS Code" />
  <figcaption>VSCodium, a versão totalmente de código aberto do VS Code (visualmente idêntica à da Microsoft, mas com licença MIT, pelo que pode ser mostrada aqui). Captura de ecrã via <a href="https://commons.wikimedia.org/wiki/File:VSCodium_official_screenshot.png">Wikimedia Commons</a>, MIT.</figcaption>
</figure>

- **Atom** (GitHub, 2014): «um editor de texto personalizável para o século XXI», construído com tecnologias web (HTML, JS e Node) através do que viria a ser o **Electron**. Personalizável como o Emacs, mas lento. O GitHub descontinuou-o em dezembro de 2022
- **VS Code** (Microsoft, 2015): também baseado no Electron, mas mais rápido e com tudo incluído (autocompletar, depuração e Git integrados). Venceu de forma decisiva e hoje domina
- A ideia estrutural mais importante do VS Code foi o **Language Server Protocol (LSP)**
- Antes do LSP, cada editor tinha de voltar a implementar a «compreensão» de cada linguagem (autocompletar, ir para a definição e verificação de erros) do zero
- Com o LSP, cada linguagem fornece um único «servidor» com o qual qualquer editor pode falar. Isto separou a inteligência da linguagem do editor e é hoje um padrão da indústria

## A era da IA: editores que escrevem contigo (2021 em diante)

- O capítulo mais recente transforma o editor, que passa de ferramenta com que manipulas texto para **colaborador**
- **GitHub Copilot** (2021): autocompletar de IA em linha, mais tarde disponibilizado através do seu próprio servidor de linguagem para que qualquer editor se possa ligar
- **Cursor** e **Windsurf**: forks do VS Code que reconstroem o ciclo de edição à volta da IA (edições em vários ficheiros, chat e agentes) mantendo as extensões do VS Code
- **Zed** (Rust, código aberto em 2024): um editor feito do zero e acelerado por GPU, concebido para a velocidade, a colaboração e a IA
- **Ferramentas de agentes** (como o Claude Code): onde o «editor» cada vez mais se conduz a si próprio, e a pessoa revê e orienta em vez de escrever
- Curiosamente, o LSP está a ganhar uma nova utilidade, desta vez para dar aos agentes de IA uma compreensão precisa do código, em vez de suposições baseadas em pesquisa de texto

## O fim de uma era? (hoje)

- Cada era desta história reduziu a distância entre ter uma ideia e vê-la a correr: cartões em lote (horas), editores de linha (uma linha de cada vez), editores de ecrã inteiro (o ficheiro completo), a inteligência dos IDEs (o editor compreende o teu código) e a IA (o editor escreve contigo)
- E, no entanto, os dois editores de 1976, Vi e Emacs, continuam por cá. As ideias fundamentais (a eficiência por modos e a extensibilidade programável) sobreviveram a todas as vagas de hardware
- Durante 50 anos, aprender o teu editor foi um rito de passagem. Isso pode estar a mudar
- [Ligação ao Jiki / pensamento final a incluir aqui]
- Obrigado por leres
