---
title: "Episódio 1: Programação com agentes, o básico"
excerpt: "Damos início a este projeto com um aprofundamento na programação com agentes. O que são os LLM e os agentes, como funcionam os modelos e o esforço, como se preparar de graça com o OpenCode, e como construir sua primeira página web."
summary:
  from: "Partimos do princípio de que você não sabe nada sobre a web nem sobre programação com agentes."
  to: "Você entende o ciclo da programação com agentes e escreve sua primeira página pessoal, bem básica, no navegador."
  keyConcepts: ["Programação com agentes", "Modelos e esforço", "Tokens e contexto", "Bases de HTML"]
seo:
  description: "Aprenda o que é a programação com agentes, como funcionam os LLM, os modelos e os tokens, e construa sua primeira página web com o OpenCode."
  keywords: ["programação com agentes", "llm", "html", "iniciante"]
en_md5: 179b6fdc5bf4a07aac6f6fb60589af30
---

## Introdução

Bem-vindo ao primeiro episódio desta nova série sobre como usar agentes, como usar os LLM (os grandes modelos de linguagem) para construir coisas nesta era moderna em que a programação mudou tanto. Ao longo dos anos fizemos muitas sessões como esta para o Exercism, mas esta é a primeira sessão oficial ao vivo do Learn to Build do Jiki.

Deixa eu explicar para você o que vai ser esta série, o que vamos ver hoje em concreto, o que vamos ver ao longo da série e para quem isto é. Vou começar por essa última questão.

## Para quem é isto

Isto é, na verdade, para dois grupos de pessoas. Para quem é totalmente novo na programação, novo neste mundo todo, que só quer começar e entender como pode dar os primeiros passos. Mas também é para pessoas talvez muito mais experientes, possivelmente até desenvolvedores seniores, que ainda não entraram para valer nesta mudança para a programação com agentes e querem entender o que está acontecendo, ver algumas coisas funcionando, discutir ideias e construir uma compreensão real disto. Então, você pode estar em qualquer ponto desse espectro, desde o seu primeiro dia de programação, talvez você tenha decidido programar esta manhã, encontrou o Jiki e aqui está, até alguém com muitos anos de experiência.

Nesta série em particular (vai haver várias séries), vou partir do princípio de que você não sabe nada. Então, se você é um desenvolvedor sênior, vai haver muita coisa que eu digo que você já conhece de cor, e isso pode parecer um pouco chato para você. Se este é o seu primeiro dia, não deve haver nada que eu esteja assumindo que você já sabe. Pode haver coisas que passem batido, mas estou tratando esta sessão como se fosse para você. E se você nunca fez este novo tipo de programação e tem mais experiência, isto vai continuar sendo útil.

Vou mostrar para você um pouquinho do que significa programar assim. Vou mostrar alguns exemplos de coisas que eu preciso resolver agora mesmo no Jiki, e corrigi-las, só como preâmbulo. Depois vamos falar de alguns dos termos que usamos e de como estas coisas encaixam umas nas outras. E a seguir vamos mesmo construir alguma coisa. Vamos criar uma nova página pessoal.

Isto é algo que quero incentivar todo mundo a fazer. Construa seu próprio site. Pode ser sua página pessoal. Pode ser outra coisa qualquer. Talvez só um currículo em código, um CV em código, o que você quiser. Depois desta sessão, ponha em prática o que viu aqui e experimente.

Eu vou usar o Claude e algumas coisas mais avançadas, mas também vou te mostrar como você pode fazer isto se não tiver dinheiro nenhum para gastar. Se você quiser trabalhar com agentes de graça, isso também é uma das coisas que vamos ver.

### O que você deve ter preparado antes?

Absolutamente nada. É só aparecer. Eu vou explicar as coisas para você e depois vou publicar uma série de guias que acompanham isto. Guias sobre como instalar o OpenCode, que vamos ver hoje, guias sobre os vários termos ligados aos LLM e como funcionam, e um guia sobre como usar o GitHub, que também vamos falar. Você vai poder passar uns dias colocando a leitura em dia e trabalhando nesses guias.

Se você tiver uma pergunta que eu não responda neste episódio, pode sempre ir ao fórum em [forum.jiki.io](https://forum.jiki.io) e perguntar por lá. Eu ando por lá. Outros desenvolvedores seniores e outras pessoas que estão acompanhando também andam por lá e podem responder a perguntas.

## Detectar os erros que os LLM cometem

Vou pular para o fórum do Jiki, para uma coisa que notei agora há pouco. Estes são vários tópicos relacionados com tradução, e você vai reparar que a maior parte tem uma bandeira ao lado do país. Uma bandeira holandesa, uma bandeira alemã. Ao lado do turco temos um peru (em inglês, *turkey* é ao mesmo tempo o país e a ave). Provavelmente um pouco racista. Vamos ter que cuidar disso daqui a pouco. Mas o que me saltou aos olhos foi o do indonésio. Isto foi tudo feito pelo Claude, esta escolha de emojis. E aqui ele claramente inventou um emoji, ou foi buscar um emoji que não funciona.

![O fórum do Jiki mostrando os tópicos de tradução. O turco tem um emoji de peru em vez de uma bandeira, e o indonésio mostra um emoji :garuda: quebrado.](/images/projects/build-your-personal-homepage/setting-up-the-project/forum-language-flags.webp)

É por aqui que quero começar, porque isto é real. Vi isto dois minutos antes de entrar ao vivo. Este é o tipo de coisa que você vai ver muitas vezes enquanto trabalha com estes LLM e com estes agentes. Eles inventam coisas. Acham que existe aqui um emoji, mas ele não funciona neste site. Era para eles porem a bandeira da Turquia e, em vez disso, puseram literalmente um peru.

Estes são os tipos de erro que são muito óbvios para nós, humanos. A gente vê na hora. Saltam aos olhos. A gente ri um pouquinho. A preocupação são as decisões que o LLM está tomando aqui. E este é o modelo mais poderoso que existe. É o Fable. É o modelo tão inteligente e tão perigoso que o governo dos Estados Unidos proibiu. E, mesmo assim, ele põe um peru no lugar da bandeira turca e não faz necessariamente ideia de que isso pode irritar alguém. Claro que também pode ser só um grande senso de humor. Não sei.

Estas são as coisas visíveis, as óbvias. Imagina quantos outros pequenos erros, ou digamos antes más decisões, estes LLM estão tomando nos bastidores. À medida que formos avançando pelo próximo ano, ou por muitos anos, fazendo estas transmissões, os LLM vão melhorar. Mas o que quero que você entenda já, e que quero que você interiorize mesmo, é que estes não são uns deuses da programação para quem você pode simplesmente entregar as coisas e que vão acertar em tudo. Eles cometem erros de forma consistente. Alguns são óbvios e engraçados, outros não. Se você quer ser um desenvolvedor moderno, uma grande parte do seu trabalho é procurar esses erros. E com isso não quero dizer procurar quando eles põem um peru em vez da bandeira turca. Quero dizer procurar os erros conceituais que estão cometendo, as ideias, as coisas que sugerem e que simplesmente não soam bem para a gente nem fazem muito sentido.

### O que significa i18n?

Significa internacionalização (_internationalization_ em inglês). O 18 é o número de letras que ficam entre o i e o n dessa palavra inglesa. É um atalho.

## A programação com agentes em poucas palavras

Vamos ver o que é fazer um pouquinho de programação com agentes. Vamos pegar aquele glossário da Indonésia com o emoji quebrado. Vou tirar uma captura de tela, ir ao meu terminal e entrar no Claude Code. Daqui a pouco vamos falar de como configurar isto tudo. Pode parecer um pouco intimidante e muito preto e verde neste momento, mas já chegamos lá.

O que quero mostrar para você é isto. Posso arrastar a imagem para aqui e posso dizer "corrige o emoji errado". E isto vai desaparecer, vai pensar e vai fazer muita coisa. A gente consegue ver algumas das coisas que ele está fazendo. Está executando comandos. Está tentando entender o que está acontecendo. Por que esta bandeira está errada? O que significa esta bandeira? Como isto aconteceu? Agora está começando a ler alguns scripts. Este é o script que cria a categoria de idioma no fórum, o script que rodou quando criou essa categoria. Agora está percorrendo o histórico de tudo o que fez e tentando entender quando isto deu errado, como deu errado e por que deu errado. Está lendo vários arquivos. Está rodando vários comandos. Você pode ver este número subindo, rodando o quarto comando, e por aí vai.

![O Claude Code no terminal trabalhando em "Fix the incorrect emoji", procurando padrões, lendo arquivos e rodando comandos de shell.](/images/projects/build-your-personal-homepage/setting-up-the-project/claude-code-fixing-emoji.webp)

E depois ele diz que encontrou. O emoji correto devia ser a bandeira da Indonésia, não `:garuda:`. Ele vai embora, roda alguma coisa que atualiza a categoria. E se a gente for agora ao fórum e abrir isto, você vê que ficou corrigido. Temos agora uma bandeira indonésia.

![O tópico Glossary for Indonesian no fórum, agora com a bandeira indonésia correta.](/images/projects/build-your-personal-homepage/setting-up-the-project/indonesian-flag-fixed.webp)

Isto é a programação com agentes em poucas palavras. A gente disse "faz esta coisa". Ele foi embora. Rodou vários comandos. Leu alguns documentos. Está fazendo tudo isto, muito complicado, em segundo plano, com bash de aspecto complicado que seria muito doloroso de escrever. A não ser que você seja um maintainer do Exercism, caso em que é facílimo. Mas para nós, meros mortais, é talvez um pouco complicado de escrever. Ele percorreu tudo, tentando entender quando isto deu errado. Leu o histórico dos arquivos. Encontrou a entrada do indonésio e alguns registros. Leu as regras que eu dei para ele, encontrou algumas variáveis que permitem que ele vá atualizar o fórum, entendeu o que estava errado, discutiu comigo por alto e foi atualizar aquilo.

Foi assim que eu construí o Jiki. É assim que muitos desenvolvedores modernos, eu diria que provavelmente a maioria dos desenvolvedores que hoje trabalham, estão trabalhando. A gente encontra um problema como aquele. A gente nota ele. Talvez venha num ticket de outra pessoa. E depois a gente entrega para algo como o Claude, ou para um dos muitos outros modelos que existem, e já chegamos lá daqui a pouco. Eles percorrem este processo complexo de vários passos e depois corrigem o bug.

Agora, este bug é obviamente muito fácil. É uma página. Tem um emoji errado. Devia ter este emoji e tem outro. Por isso ele consegue corrigir bem rápido. Mas o lugar onde este fluxo funciona mesmo bem é quando a gente não está só tentando corrigir uma coisinha pequena. A gente está construindo um recurso novo, ou fazendo debug de algo bem complicado. Isso significa ler centenas de arquivos e depois ter que escrever em alguns deles.

## Ter juízo com os custos

Antes de a gente passar para outro exemplo, deixa eu mostrar uma coisa. Posso escrever `usage` aqui, e o `usage` mostra o que está acontecendo nos bastidores. Você pode ver que aquilo demorou 52 segundos do início ao fim para o Claude fazer, e custou 37 centavos. Agora, eu tenho o Claude Max, o que significa que tenho um limite de uso muito grande dos vários modelos. Por isso não me cobram 37 centavos por aquilo. Está simplesmente incluído na minha assinatura mensal.

![A tela de uso do Claude Code mostrando um custo total de 0,38 dólares e 52 segundos de tempo de API para a correção do emoji.](/images/projects/build-your-personal-homepage/setting-up-the-project/claude-code-usage.webp)

Mas isto é uma coisa que quero que você tenha consciência desde já, agora que a gente começa a falar disto. Aquele processo de entender tudo aquilo e resolver o problema custou 37 centavos. Se eu tivesse querido, podia simplesmente ter ido ao fórum e editado o tópico eu mesmo. Podia ter selecionado o emoji, escrito Indonésia e clicado na bandeira. Isso não teria me custado 37 centavos. Se você imaginar cada coisinha que eu faço como desenvolvedor, sejam lá quantas horas por dia a gente esteja programando, é bom que a gente tenha algum juízo sobre para que a gente usa esta inteligência super poderosa e o que a gente pode simplesmente fazer à mão.

Isto é especialmente verdade para quem não está pagando uma assinatura Claude Max e não tem muito dinheiro. Vou mostrar para você como pode fazer tudo isto de graça. Mas, nos planos gratuitos, você vai ter uma quantidade limitada de uso. É uma quantidade bem grande de uso limitado. É tudo aquilo de que você precisa. Mas quero que você ganhe a mentalidade de não desperdiçar esse uso em coisas que pode fazer à mão. É muito melhor para você investigar por conta própria, entender o que está acontecendo, aprender alguma coisa pelo caminho e depois corrigir aquilo. É essa a melhor forma de você aprender. Se você começar a jogar isto em cima de tudo, a gente vai ter problemas.

Deixa eu mostrar outra coisa. Isto mostra qual é o seu uso mensal. Este é o meu último mês. Como eu disse, tenho este plano Claude Max, por isso pago apenas 200 dólares fixos por mês. Mas se eu não tivesse o Claude Max, se estivesse pagando isto diretamente, teria custado 35 000 dólares este mês. São três bilhões de tokens que eu usei este mês. Vamos falar daqui a pouco do que são os tokens. Mas as contas podem subir bem rápido.

![Uma tabela no terminal com o uso diário de tokens por modelo, com bilhões de tokens usados entre o Fable, o Opus, o Sonnet e o Haiku.](/images/projects/build-your-personal-homepage/setting-up-the-project/monthly-token-usage.webp)

### E o Ollama e outros modelos locais?

Esses funcionam. Se você tiver um computador potente o suficiente para rodar modelos locais, um bom MacBook ou uma boa máquina Windows com uma boa GPU, pode rodar modelos no seu computador em vez de enviar dados para o Claude e o Claude retornar dados. No entanto, vai ser muito, muito mais lento. Aquilo que a gente acabou de ver, que demorou 52 segundos, vai passar a demorar 5 minutos, ou meia hora. Mesmo numa máquina de topo a gente está falando de 10, 20, 30 vezes mais lento do que usar o Claude ou outra coisa qualquer.

### Não sai às vezes mais barato contratar um desenvolvedor júnior do que pagar um LLM?

Como eu tenho uma assinatura Claude Max, que são 200 dólares por mês, o meu custo total para usar tudo isto é de 200 dólares por mês. Um desenvolvedor júnior vai custar dez vezes mais do que isso. Mas, além disso, eu costumo ter talvez seis ou sete Claudes rodando ao mesmo tempo. Então, se este Claude é tão bom quanto um desenvolvedor júnior, eu tenho seis ou sete desses juniores rodando em abas diferentes, ao mesmo tempo, fazendo coisas diferentes. Já não existe uma economia em que colocar alguém para escrever este código à mão faça algum sentido.

Mas o lugar onde você pode ganhar com isto, onde você, como júnior, pode se tornar valioso aqui, é este: se você, como júnior, conseguir ter seis ou sete Claudes rodando ao mesmo tempo, e conseguir fazer com eles tarefas mais simples, mais básicas, então você vai acrescentar um monte de valor a uma empresa. A minha capacidade total como desenvolvedor é provavelmente ter cinco ou seis rodando ao mesmo tempo, e mesmo assim passo muito tempo pensando e lendo. Todo mundo vai chegar a esse limite se estiver fazendo isto direito, pensando no que está acontecendo. Então, se você quer entrar hoje no mercado de tech, o lugar onde você vai acrescentar valor é aprendendo a controlar estes Claudes, estes outros modelos, estes LLM, estes agentes, e a saber como dar instruções para eles, como capacitá-los e como revisar o trabalho deles de forma sensata e poderosa.

## Arrancar com um novo idioma

Então, este é o nosso ponto de partida. Você já sabe um pouquinho sobre como estas coisas funcionam. Vou colocar mais uma destas para rodar enquanto a gente conversa. Uma das coisas que eu construí é um comando de arranque de idiomas para traduzir o Jiki para vários idiomas. Já tenho o português do Brasil arrancado no fórum, mas quero arrancar com o português europeu. Vou clicar em executar e depois a gente dá uma olhada.

O que isto faz é ir criar informação, um guia, um glossário e outras coisas para a gente traduzir o site para português. Você pode ver o do turco no fórum. Aquele é o glossário que foi produzido e criado, com todos os termos que a gente traduziu para turco.

Este agente vai agora fazer muito trabalho para acertar nisto. Vai lançar outros agentes. Temos um agente principal que está encarregado disto. Vai enviar outros agentes para investigarem os termos corretos para português. Vai colocar eles para consultar a documentação da Mozilla e da Microsoft para descobrir que termos são usados. Vai provavelmente consultar o Duolingo e alguns outros sites. E depois vai voltar e me apresentar um monte de informação sobre o que encontrou, e me fazer algumas perguntas.

Enquanto isso acontece, quero dar uma olhada no comando que eu acabei de rodar, o Bootstrap Language. Isto é o que o Claude está fazendo. Estas são as instruções que o Claude está seguindo. Temos um pouquinho de coisas no topo que são apenas informação para o Claude sobre como rodar isto. E depois todo o resto é informação que você ou eu podemos ler e que explica o que está acontecendo.

A gente está dizendo ao Claude para arrancar com um novo idioma. A gente está dizendo que ele precisa investigar como o idioma se escreve, acordar decisões que só eu posso tomar, consultar estes guias e usar o húngaro como base, só porque foi esse o primeiro em que a gente trabalhou. O Aron, que é desenvolvedor de front end aqui, é húngaro. E depois temos um monte de fases pelas quais ele passa. Algumas verificações que ele faz. Você pode ver que, antes de mais nada, a gente diz para verificar se este idioma já existe. Se existir, para e reporta. E você vê que a primeira coisa que ele faz é dizer "vou começar verificando se o idioma existe". Passa, não existe, e segue em frente.

Depois ele tem alguns arquivos que vai ler. Lê este arquivo de regras, este arquivo de voz, mais alguma informação, e carrega tudo isso na sua memória, por assim dizer. Vamos falar daqui a pouco do que isso significa mesmo. Então, agora ele tem toda esta informação ali, todos estes documentos grandes que eu escrevi com regras, e com a forma de falar na voz certa, e todas estas coisas.

E depois ele vai fazer a investigação. Tem várias regras que eu dei para ele. Evitar contaminação gerada por LLM. Não quero que ele vá ler um monte de conteúdo que outros LLM já escreveram. Quero que ele olhe sobretudo para coisas anteriores a 2022, verificando as datas desse conteúdo antes de usar. Está verificando em várias fontes. Eu digo para ele ser desconfiado, se sentir confortável com a incerteza, e depois procurar várias coisas. Que metáforas as pessoas usam? Qual é o nível de formalidade e de registro? E depois ele vai juntar tudo isso numa estrutura e vai parar para discutir comigo. Vai explicar o que encontrou, me fazer algumas perguntas, propor alguns termos-chave. E depois, assim que eu concordar, assim que a gente discutir, ele vai escrever um glossário e um guia, juntar tudo e depois criar o post no fórum. Ele tem a capacidade de entrar no fórum do Jiki e criar esse post, e depois cria também o post do glossário. São dois posts separados.

Então, este é o comando que eu construí, e que ele pode depois seguir. E a gente consegue ver ele em segundo plano moendo. Aqui está, agora está reportando as conclusões da investigação. Esta é a forma como ele deve tratar quem aprende: a gente deve usar o "tu" informal, que é a forma calorosa e corrente de se dirigir a quem aprende, e não o outro tom, o formal. E depois ele me pede algumas decisões. Concordo com isto? Deve usar as mesmas convenções do Brasil? Me dá alguns termos que escolheu. E, a esta altura, posso ver tudo e dizer que sim, estou contente com todas estas decisões, estou contente com os seus valores padrão. E depois ele continua.

![O Claude reportando o seu resumo de investigação para o português europeu, incluindo as fontes e a decisão de usar o "tu" informal.](/images/projects/build-your-personal-homepage/setting-up-the-project/portuguese-research-findings.webp)

### Comandos e skills são a mesma coisa?

Sim, são a mesma coisa. Todas as empresas de LLM têm nomes diferentes para todas estas coisas.

## Agentes e modelos

Quero que a gente pare um segundo para pensar no que aconteceu aqui, porque esta é uma chave importante para entender a diferença entre abrir o aplicativo do Claude ou o ChatGPT e falar com eles, e usar programação com agentes como esta.

Quando você fala com o Claude numa interface, você está fazendo uma pergunta e tem, na prática, um agente com quem fala, que talvez vá verificar uma coisa e depois volte e continue escrevendo. É mesmo uma conversa entre você e uma pessoa, um agente. Quando você está trabalhando neste modelo de programação com agentes, o que acontece nos bastidores é que a gente lança muitos agentes para fazerem coisas diferentes. A gente vai ter agentes que investigam, agentes que planejam, agentes que constroem. E a gente pode construir os nossos próprios agentes. Agentes que testem coisas de certas maneiras, agentes que verifiquem se as coisas cumprem determinadas normas. E muitas vezes o agente com quem a gente está falando é aquele que gerencia todos os outros agentes.

Esses agentes podem usar modelos diferentes. Por isso, esta é uma boa hora para falar de modelos. Você já ouviu este termo muitas vezes, sem dúvida. Provavelmente já tem uma boa ideia do que são os modelos, mas vou explicar rapidamente.

Empresas diferentes, como a OpenAI ou a Anthropic, têm modelos diferentes, e os modelos são o mecanismo subjacente pelo qual um LLM funciona. É algo que foi treinado com uma certa quantidade de dados para funcionar a uma certa velocidade. Os modelos de fronteira, como eles chamam, são os melhores modelos que existem. No caso da Anthropic, é neste momento uma coisa chamada Fable, ou Mythos. Esses são mais lentos, são caros, mas são muito poderosos. Lá no outro extremo está o Haiku, que é um modelo muito mais rápido. É alguma coisa como 50 vezes mais barato de rodar, muito mais rápido, mas não raciocina tão bem. E depois você tem o Sonnet e tem o Opus. Então, você tem estes quatro modelos, e todos os fornecedores têm esta variedade de modelos. Alguns dos de gama alta são super inteligentes. Outros são muito menos inteligentes mas muito mais rápidos.

Para uma tarefa básica, digamos a tarefa que a gente acabou de ver, do tipo por que esta bandeira está errada, não vai haver diferença nenhuma de desempenho entre o Haiku e o Fable. Mas se você usar o Fable para fazer isso, vai gastar 50 vezes mais dinheiro. Por isso, uma das coisas que a gente quer estar sempre consciente é qual o modelo certo para a tarefa. Isso mantém as coisas bem rápidas, mantém as coisas no nível de qualidade certo para aquilo de que a gente realmente precisa, e mantém o custo baixo, o que também é importante.

Quando você está rodando um agente que depois roda vários outros agentes, eles também estão constantemente tomando essa decisão. Se estiverem lançando agentes para fazer coisas simples, vão usar modelos de gama baixa. Se estiverem lançando agentes para fazer coisas muito complexas, vão lançar o Fable.

## Esforço

Temos também o conceito de esforço. O esforço é a quantidade de esforço que um modelo está disposto a fazer. Então o que significa esforço? A forma como estes modelos funcionam é que eles falam consigo mesmos. Têm uma conversa longa e contínua. Você já deve ter visto isto se usa o Claude ou o ChatGPT, onde há a opção de "mostrar o raciocínio" e você consegue ver o modelo respondendo a si mesmo. O que eles estão fazendo é raciocinar, escrevendo o que acham que pode estar acontecendo e depois construindo em cima disso.

Quando a gente fala de esforço no mundo do Claude, e também em outras ferramentas, a gente está dizendo quanto tempo você deve passar falando consigo mesmo antes de voltar com uma resposta. Esforço baixo significa não fale muito consigo mesmo, dê para a gente só a primeira coisa que vier à cabeça. Esforço alto significa fale muito consigo mesmo. E o bom do esforço alto é que o Claude, na prática, diz a primeira coisa que vem à cabeça dele (é uma má analogia, mas a primeira coisa que ocorre para ele), mas depois volta a raciocinar sobre isso, para ver se faz sentido ou não. Depois acrescenta uma terceira camada, e depois raciocina sobre esse conjunto todo e vê se faz sentido ou não. E depois acrescenta uma quarta coisa. Continua raciocinando sobre o que está dizendo até chegar a um ponto com que fica satisfeito, ou de que fica convencido. Enquanto que, com esforço baixo, ele responde na hora. E isso pode estar errado, pode não estar. Não houve verificação nenhuma sobre o raciocínio dele.

Então, temos estes dois eixos. Temos a qualidade do modelo: Fable, Opus, Sonnet, Haiku. E temos a quantidade de esforço que esse modelo vai fazer: baixo, médio, alto, extra alto. E você pode continuar subindo. Muitas vezes os fornecedores cobram mais à medida que você avança nessa escala.

No Claude Code a gente pode mudar de modelo simplesmente escrevendo `/model`, e depois a gente pode escolher entre Opus, Fable, Sonnet ou Haiku. E a gente pode escolher o esforço: baixo, médio, alto ou máximo, com uns brilhos no máximo, e ultracode, onde a gente tem umas animações lindas em que as pessoas colocaram um monte de esforço.

Eu costumo ficar no Opus em médio como modelo padrão para a maior parte das coisas. Na maior parte do que eu faço, quero algo como o Opus para conseguir pensar bem nas coisas, e acho que o esforço médio é o equilíbrio certo. Mas eu sou bem consciente disso e, quando começo tarefas, penso em que modelo eu quero. Isto é simples ou é difícil? Quanto esforço é preciso colocar neste processo todo?

### Como a gente sabe qual o melhor modelo para uma tarefa?

Você vai aprender isso com o tempo. Uma regra simples é você se perguntar quão difícil é para você. É bem fácil? É como mudar uma bandeira num post do fórum? Isso é bem fácil. O Haiku faz isso com esforço baixo. Você está pedindo para ele uma coisa que parece de uma complexidade estonteante? Vá buscar um modelo melhor ou mais esforço.

O Fable é excelente para tarefas longas. Para te dar um exemplo, ontem eu tive uma sessão aberta em que peguei todos os vídeos que a gente tem (a certa altura vou falar de como criei os vídeos) e extraí todo o inglês dos vídeos. Todo o inglês que está escrito na tela, extraí dos vídeos e coloquei como uma camada por cima, para depois poder mudar isso para outro idioma e exportar de novo os vídeos com outro idioma na tela.

Coloquei o Fable para fazer isso. Lancei ele numa tarefa. Coloquei ele para lançar um agente Fable para cada vídeo, por isso tinha 32 Fables rodando. Cada um deles percorreu todos os pedaços do vídeo procurando texto. Tiraram capturas de tela, depois atualizaram as imagens, removendo o texto das imagens. Depois entenderam qual era a fonte em que o texto tinha sido escrito, qual era o tamanho da fonte, o peso da fonte, o espaçamento entre letras, o espaçamento entre linhas, o kerning, todas essas coisas para fontes variáveis. Depois escreveram esse texto na tela no lugar certo e, a seguir, tiraram capturas de tela repetidamente e compararam até as duas capturas ficarem iguais no pixel. Eu tinha um Fable que planejou tudo, investigou, analisou, escreveu alguma documentação, e depois tinha um Sonnet orquestrando que ia lançando mais Fables para fazerem todos esses trabalhos. Demorou cerca de três horas. Custou cerca de 400 dólares. Mais uma vez, estava dentro da minha assinatura Max, mas de outra forma teria custado uns 400 dólares. E, no fundo, deixou todos os vídeos num estado em que estão prontos para avançar.

Nesse tipo de situação, eu sabia que aquilo era uma tarefa bem complexa. Já tinha tentado fazer com o Opus e o Opus não conseguiu. Era complexo demais para o Opus, por isso eu sabia que era preciso o Fable.

### Os modelos de fronteira são como os smartphones topo de linha?

Sim, exatamente. São mais inteligentes, são melhores, mas também são mais caros e são geralmente mais lentos. E você tem que lembrar que o modelo de fronteira de hoje é o modelo barato daqui a um ano. Isso já é verdade. O Haiku é equivalente ao modelo de fronteira do ano passado. Então, o Haiku já é bom o suficiente para fazer muita programação, apesar de ser o modelo barato do outro extremo. Você só precisa desse modelo caro se estiver mesmo fazendo uma coisa que era impossível no modelo anterior, como o Opus. Você só quer mesmo ir buscar esse modelo de fronteira em situações específicas.

### Para quem é especialista, não é frustrante pagar para programar em vez de programar?

Eu estou pagando 200 dólares por mês. Embora seja uma quantia significativa, é pouco dinheiro para a produtividade extra que isso cria. Acho que estou chegando a um ponto em que sou pelo menos uma vez e meia mais produtivo. O que eu produzo é uma vez e meia o que era. Não sei qual seria o meu salário no mercado, porque nunca tive um emprego, mas imagino que esteja me poupando uma fortuna, se for essa a medida. Então, 200 dólares é barato. Se eu tivesse que pagar 2000 dólares por mês por isto, provavelmente não valeria a pena para mim.

É super frustrante muitas vezes? É. Mas o que eu entendi é que isto simplesmente me sobe um nível de abstração. Antes, havia muita programação que eu teria que fazer e que, para mim, era bem chata. Pode ser bem interessante para um júnior ou um intermediário, mas para mim era super chata. Agora eu não tenho que fazer isso, e não tenho que ter um júnior ou um intermediário para quem eu tenha que dar suporte. Consigo despachar aquilo com muita facilidade sem ter que gerenciar outras pessoas, o que significa que continuo livre para ser produtivo de outras formas. Então, o benefício líquido compensa, no meu caso.

Mas acho que, para muitos desenvolvedores, isto é bem menos divertido, bem menos agradável do que era. Também é apenas a realidade do mundo. A gente não tem escolha. Talvez algumas pessoas tenham o luxo, no emprego, de não fazer isto. Se você avançar dez anos, não me parece que muita gente tenha esse luxo. Por isso, se você quer proteger o seu futuro, ou se quer ganhar vantagem na indústria, ficar bom nisto é, na minha opinião, o segredo.

## Permissões e modo automático

Voltando à tarefa de tradução, ela já terminou. Temos agora alguns arquivos que já foram commitados. Se a gente voltar ao fórum, vamos ver se há um post novo. Ah, isto é interessante. Postar no fórum público foi bloqueado, porque eu coloquei isto em modo automático.

Isto funciona assim: ele tenta fazer coisas, e depois outro LLM monitora o que ele está fazendo e verifica se essas coisas se parecem com coisas que eu disse explicitamente. Assim que ele está enviando dados para outros sites, ou fazendo alguma coisa desse tipo, ele precisa que eu diga explicitamente que concordo. E como eu tinha deixado ele em modo automático, moendo sozinho, ele não me perguntou se eu concordava. Por isso bloqueou. Ele pergunta "você quer que eu avance e crie esse post no fórum?", eu digo que sim, e agora ele vai mesmo fazer. Esta é uma das coisas que aconteceu nos últimos dois ou três meses. Temos agora quase um LLM supervisor que permite que mais coisas aconteçam automaticamente, mas que tenta bloquear coisas arriscadas ou perigosas.

Então, agora, se eu atualizar, aqui está. Agora temos o glossário. Estes são todos os termos que ele encontrou e leu. Isto é tudo o que ele juntou. E agora temos um post.

![O post final Glossary for European Portuguese no fórum do Jiki, com as traduções termo a termo e as notas.](/images/projects/build-your-personal-homepage/setting-up-the-project/portuguese-glossary.webp) Se você fala português, a versão europeia, pode vir aqui e começar a me dizer tudo o que está errado, e depois a gente pode começar a melhorar o glossário e a trabalhar nele. Para quem fala outros idiomas, temos glossários em outras versões, italiano, turco, e por aí vai. Você já sabe como foram feitos. Você pode ir fazer isto.

## Claude Code, Codex e OpenCode

Esta é a minha visão geral de como isto funciona. Agora o que quero mostrar para você é como você pode preparar isto para si.

Há muitos agentes e muitas ferramentas diferentes que você pode usar. Por isso, vamos ser bem claros com a nossa linguagem aqui. O Claude Code, que é a janela em que você me viu trabalhando agora há pouco, é uma ferramenta de programação com agentes, talvez uma plataforma de programação com agentes. Roda no seu computador. Normalmente roda no terminal, que é como eu tenho ele configurado. A gente também pode rodar ele num editor de código, coisa que vamos ver daqui a pouco. E é o portal entre você e os modelos. Eu mostrei para você que posso alternar entre o Opus, o Sonnet e o Haiku, e que posso alternar entre níveis de esforço.

Tudo isso acontece no seu computador local. Você está falando no seu computador local. Ele envia dados para a Anthropic, para um dos modelos deles. O que eles retornam não é só um pouquinho de texto que aparece na tela. Retornam um monte de instruções que o Claude Code consegue interpretar para fazer coisas. Estão dizendo: vá rodar este script no computador da pessoa. Vá ver esta pasta no computador da pessoa. Vá a este site e faça coisas. Todas essas instruções vêm do Claude.

Então, a gente não está tendo uma conversa com o Opus, ou com o Sonnet, ou com o Haiku. A gente está colocando algum texto lá dentro. Esse texto é empacotado com um monte de outras coisas. É empacotado com código do nosso repositório, código que a gente escreveu ou que foi colocado lá. É empacotado com o histórico completo da conversa, com os objetivos que a gente está tentando alcançar, com as nossas preferências sobre como a gente gosta de trabalhar. Tudo isso é empacotado e depois enviado para a Anthropic. Os modelos deles leem tudo isso e depois trazem instruções e algum texto de volta. Tudo isso é processado, e depois acontece este ciclo, este ciclo com agentes, em que ele faz uma coisa, volta ao Claude, o Claude responde e diz está bem, agora faça isto. Tudo isto acontece longe da gente. E depois, no fim, ele diz para a gente: pronto, terminamos. Não conseguimos enviar o post do fórum por causa disto. Você quer continuar? Há este ciclo enorme acontecendo nos bastidores.

Então, temos duas decisões. Uma decisão é que modelos a gente quer usar. A gente quer usar a Anthropic, a OpenAI, ou outros modelos por trás? E a segunda decisão é com que ferramenta a gente quer interagir. Se eu usar o Claude Code, estou sempre interagindo com um dos modelos da Anthropic. Se eu usar o Codex, que é a versão da OpenAI, estou sempre interagindo com um dos modelos da OpenAI, um dos modelos GPT.

O que eu vou recomendar para você usar é outra coisa, chamada OpenCode. O OpenCode é uma versão de código aberto, se você quiser, do Claude Code, uma versão de código aberto do Codex. É o suporte, a ferramenta que está no seu computador e que faz esse ciclo todo, que gerencia tudo. Mas ele consegue falar com qualquer modelo. Pode estar falando com a Anthropic, com o Opus ou o Sonnet. Pode estar falando com o GPT-5 e essas outras coisas. Mas também pode estar falando com muitos modelos gratuitos. O próprio OpenCode é gratuito, e tem uma série de modelos gratuitos que você também pode usar.

A gente chega ao OpenCode simplesmente estando num terminal e escrevendo `opencode`, depois de ter instalado ele. E a gente pode escolher entre muitos modelos. A gente pode escolher o Gemini, que é da Google. A gente pode escolher o Opus, que a gente falou agora há pouco, ou o Fable. A gente pode escolher o Grok, se você quiser apoiar o Elon Musk. Os GPT. O DeepSeek, um modelo que ficou famoso por ter vindo da China. O Qwen, muito bom para programação. E todas estas opções aqui em cima, que são as gratuitas. Então, se você não tem muito dinheiro, ou se só quer experimentar isto, ou se o seu trabalho não te paga uma assinatura, você pode obter o OpenCode de graça e depois escolher um destes modelos gratuitos.

Eu tenho um guia que vou publicar e que explica como instalar o OpenCode, como se preparar de graça e quais destes modelos você pode usar. Neste momento estou recomendando o DeepSeek V4 Flash (free), mas ainda não experimentei muito nenhum destes, por isso você pode experimentar eles e ver o que funciona melhor para você.

Uma ressalva: estes gratuitos não são modelos de fronteira. Embora o Big Pickle seja um modelo secreto, e portanto até possa ser um modelo de fronteira, a gente não sabe. Mas os outros não são modelos de fronteira. Não são os melhores modelos, os do topo. Vão ser mais parecidos com o Haiku ou o Sonnet, modelos de nível mais baixo. Mas, para o ponto em que você está, acho que isso é muito bom. Porque os passos que você quer estar dando são passinhos pequenininhos, em que você não quer uma super inteligência fazendo tudo por você. Você quer alguém com quem possa trabalhar e conversar, com quem possa ir passinho a passinho, perguntando como as coisas funcionam e aprendendo sobre elas.

## Tokens e contexto

Deixa eu mostrar o OpenCode no repositório do tradutor. Isto não sabe nada sobre o meu repositório. Mas posso dizer alguma coisa como "quantos idiomas a gente tem até agora?" e isto vai trabalhar. É este o aspecto do OpenCode. Temos uma parte à esquerda onde ele fala. Temos a parte onde a gente escreve, embaixo à esquerda. Quando está rodando, temos uma parte à direita. A gente pode apertar Ctrl+P para obter vários comandos e coisas com que você pode brincar. Você pode ver que isto é muito rápido. Pensou durante uns milissegundos, leu umas coisas, entendeu isto e voltou com 14 idiomas. Se você destacar alguma coisa, ele copia para a área de transferência, o que é simpático.

![O OpenCode no terminal respondendo a "How many languages do we have so far?", com um painel de contexto à direita mostrando 10 054 tokens usados.](/images/projects/build-your-personal-homepage/setting-up-the-project/opencode-ui.webp)

Você pode ver que é gratuito, por isso a gente não gastou nada. Mas quero que você preste um pouquinho de atenção aos números da direita. Não vou explicar em profundidade como funcionam os LLM, porque é um assunto sem fim em que não vale a pena entrar. Mas a unidade fundamental de um LLM é o token. Você pode pensar num token como uma sílaba. "How" é provavelmente um token. "Language" são provavelmente três tokens: lang-u-age, alguma coisa assim. "DeepSeek" provavelmente dois tokens. "V4" provavelmente dois tokens.

Sempre que você escreve alguma coisa, ele pega no que você escreveu, pega em tudo o que precisa para descobrir a resposta, e envia tudo isso para o modelo. O modelo lê, retorna, provavelmente faz uma pergunta de esclarecimento, e há um vai e vem durante um tempinho. Isso usa tokens. A gente perguntou "quantos idiomas a gente tem até agora?". Isso são talvez 11 tokens, talvez 15 tokens com os espaços. Quando ele acabou de ler, de ir buscar tudo o que precisava, de enviar aquilo e de fazer uns saltos, tinha usado 10 000 tokens. Então, isto enviou na prática um texto de 3000 palavras para um modelo e depois trouxe um pouquinho de volta.

Se a gente fizer uma pergunta maior, como "qual é o processo de adicionar um novo idioma?", ele vai ler mais arquivos, e você pode ver os tokens subindo enquanto ele lê. Isso acrescentou mais 6000 tokens para responder à pergunta, e já usou 10% do nosso contexto. O contexto deste modelo, o número máximo de tokens que ele pode ter numa conversa, é de cerca de 170 000 tokens.

Quando você estiver trabalhando nisto, precisa ir dando uma olhada nesse número. À medida que você usa mais e mais tokens, a conversa toda vai ficar mais lenta, porque todo esse contexto é passado ao modelo de cada vez. Se eu perguntar mais uma coisa, toda essa informação é enviada outra vez para o modelo. Toda a conversa anterior, todas as respostas anteriores. Vai tudo, a cada passo da conversa.

Uma das outras desvantagens de usar modelos gratuitos é que eles costumam ter um volume de conversa menor. O Opus é 1 milhão de tokens por conversa. Isto vai andar mais perto dos 150 000 ou 170 000. Por isso convém você estar constantemente começando conversas novas. Se você escrever `/new`, isso te dá uma conversa nova. Isso faz reset nos seus tokens, mas o seu modelo também passa a não saber nada do que acabou de acontecer. Então, tente ganhar o hábito de ter conversas pequenas sobre coisas diferentes.

### O Aron e a Nicole também trabalham assim no Jiki?

Sim. O Aron usa isto quase totalmente para todo o trabalho de front end que faz. A Nicole faz o mesmo para a edição de vídeo. Todos os nossos vídeos são escritos em código. A gente não faz vídeos num editor de vídeo. A gente faz eles em código, e depois ela trabalha com o Claude para construir todos os vídeos em código a partir daí.

### Os modelos gratuitos estão na nuvem?

Sim, os modelos gratuitos estão todos na nuvem. Seriam muito, muito lentos nas máquinas de vocês.

### Você recomendaria o Mistral?

Eu não sei praticamente nada sobre modelos fora da Anthropic. No dia a dia trabalho só com o Claude. Nunca usei, por isso não sei. Pessoalmente eu usaria mesmo o Claude, mas provavelmente só usaria o Claude numa assinatura em que não pago por token.

## Construir sua primeira página web

Aquela primeira metade foi um aprofundamento no que são os LLM, no que é a programação com agentes, no ciclo moderno que nós, desenvolvedores, usamos. É mesmo isso que eu espero que, ao longo dos próximos meses e do próximo ano, deixe você à vontade. À vontade o suficiente para fazer tudo o que você tiver vontade. Mas quero mesmo sublinhar, antes de a gente continuar, esta ideia de que o importante é você entender o que está acontecendo nos bastidores.

Eu tenho noção de que dei muita informação para você naquela primeira metade. Por isso, na segunda metade vamos ver como fazer uma página pessoal para você. Hoje eu estava pensando que a gente ia chegar a mais umas coisas, mas acho que a gente vai deixar elas para a próxima sessão. Na próxima sessão acho que a gente vai ver como publicar isto tudo, e vamos ver como enviar para o GitHub. Eu tenho também uma oferta exclusiva para todo mundo que está fazendo o Jiki, em que você ganha um domínio .tech gratuito, e em breve vai poder ter também um domínio .online ou .space gratuito. Assim você pode criar um site para você com esse domínio. Vou falar mais disso na próxima sessão. Mas hoje vamos continuar vendo como construir sua primeira página web, e pensando um pouquinho no que isso envolve.

## VS Code

A gente já falou um pouquinho de a programação com agentes ser num terminal, escrevendo as suas instruções para o Claude, ou para os modelos e ferramentas que você use. A forma antiga de fazer isto tudo era trabalhar dentro de um editor de código, um editor de texto. Houve muitos editores de texto ao longo da história, mas aquele que a maioria de nós acabou usando hoje se chama VS Code. Se você nunca usou um editor de texto, um editor de código, recomendo que instale o VS Code. Nos guias que estou publicando junto com isto há um guia sobre como instalar o VS Code e como usar ele.

O que você viu agora há pouco, quando me viu percorrendo arquivos, era o VS Code. É apenas uma moldura, uma espécie de tela onde você pode editar arquivos de texto, e tem uma pequena prateleira ao lado que lista todos os seus arquivos.

Então, o que a gente vai fazer é construir uma página pessoal. Vou começar criando uma pasta. Vamos em Arquivo, Abrir Pasta, e vamos criar uma pasta. Vou colocar ela na minha área de trabalho: "a minha nova página". Vou incentivar você a estar no VS Code como o seu espaço principal. Por isso, crie uma pasta para você. Se você está acompanhando agora, pode fazer isto. Se você não tem o VS Code instalado, pode colocar em pausa, ir ler o guia sobre como instalar o VS Code, e depois voltar.

A gente pode abrir essa pasta e vê que ele pergunta se a gente confia nos autores. Como os autores somos nós, a gente pode confiar em nós mesmos. E você pode ver que temos algum espaço, e é aqui que os arquivos vão aparecer, ao lado. Você tem um terminal embaixo, e a gente pode abrir o OpenCode nesse terminal. Assim a gente pode ter o OpenCode embaixo e ver os arquivos em cima. Como eu quero ter a tela grande, vou manter eles separados por agora, com o OpenCode de um lado e todos os arquivos do outro, só para a gente conseguir ver o que está acontecendo.

Vamos entrar na pasta nova que a gente acabou de criar e abrir o OpenCode aí. Alguém sugeriu experimentar outro modelo, o Big Pickle. Nunca usei o Big Pickle. Vamos experimentar e ver o que acontece. A gente não está fazendo nada de complexo aqui.

## O que é uma página web

Quero falar aqui um pouquinho sobre o que é uma página web e como funciona. Ao longo do tempo que vem aí, a gente vai fazer muito JavaScript, CSS, coisas complicadas. Hoje vamos fazer só o mais básico. Se você já sabe alguma coisa sobre sites, isto vai parecer muito básico para você. Se você não sabe nada, espero que isto seja uma boa introdução ao que vem a seguir.

Vamos falar um pouquinho sobre o que é uma página web normal, simples. Para isso a gente pode usar o meu site pessoal, que já existe. É bem simples. É só algum texto numa página. Você pode ir a qualquer site, clicar com o botão direito, escolher Exibir código-fonte da página, e vai ver algo assim, que é um monte de coisas. Isto é HTML.

![O código-fonte HTML do site pessoal do Jeremy, mostrando o doctype, as tags head, as meta tags e o title.](/images/projects/build-your-personal-homepage/setting-up-the-project/ihid-page-source.webp)

O HTML é famoso por ter este sinal de menor no início e este sinal de maior no fim das várias coisas. A gente chama isto de uma tag head. Depois temos algum CSS. O CSS cuida do estilo. A gente fala disso daqui a pouco. E depois temos todo o conteúdo da página. Este é o cabeçalho. Você pode ver o cabeçalho aqui, em roxo. Tem uma imagem lá dentro. `img` quer dizer imagem, com um link para uma imagem. Tem algum texto, uma biografia minha, e depois mais texto dividido em parágrafos. `p` quer dizer parágrafo. Mais um pouco de informação, alguns títulos. Este é um título de nível dois, este é um título de nível um. E isto aqui embaixo é JavaScript, que vai parecer ligeiramente familiar para você se já fez o Coding Fundamentals.

Quando a gente fez o bootcamp no ano passado e deu as bases de desenvolvimento web, a gente passou muito tempo olhando para este HTML em grande profundidade, e para o CSS em grande profundidade. Garantindo que você entendia todas as tags diferentes e como funcionam. E também entendendo o CSS e como a gente pode usar ele para dar estilo às coisas.

Isto é um exemplo de como eu acho que as coisas se inverteram. Agora eu acho que o que a gente quer fazer é simplesmente construir coisas, e depois olhar para o que a gente construiu e entender o que aquilo é. Então, em vez do que eu teria recomendado antes, e do que, de fato, você teria que fazer antes, que era começar a escrever isto tudo, o que eu recomendo agora é que a gente peça ao nosso LLM que faça para a gente uma estrutura bem, bem básica que a gente possa usar.

## index.html

A outra coisa a saber é que há uma convenção muito antiga de que um arquivo chamado `index.html` é a primeira página de um site. Se você for a ihid.info/index.html, é na prática isto que você vê, a página da frente. A regra é que, se você não colocar nada depois do domínio, ele vai ver se existe um arquivo chamado index.html e, se existir, mostra o conteúdo dele. Este index.html é um arquivo muito especial. Ele não faz nada de mágico, na verdade. É só uma norma. Mas muitos sites têm tradicionalmente isto como forma de fazer as coisas.

Então, se você tem o OpenCode aberto, pode dizer:

> Crie um index.html com a estrutura mais básica possível para uma página, com um cabeçalho com o meu nome, Jeremy Walker, e uma linha de biografia com isto.

Temos aqui uma bifurcação. A gente podia, se quisesse, dizer "crie um site inteiro para mim", e ele fazia isso. Mas aconteceriam duas coisas. Primeira, não seria um site que a gente quer. À medida que a gente for avançando, vamos pensar em que sites são esses, e vou mesmo desafiar você a ir pensar num site. A gente fala disso daqui a pouco. Mas, além disso, ele ia te dar tanta coisa que você não aprenderia nada com aquilo. Enquanto que assim, dando estes passinhos pequenos, é assim que você vai aprender como as coisas funcionam.

Então, a gente envia isto, e foi isto que ele escreveu. A gente pode agora ver no VS Code e abrir isto. Este é o meu fluxo de trabalho quando faço isto. Tenho aqui o meu site inteiro, talvez milhares de arquivos diferentes, e coloco o meu agente para trabalhar nos arquivos. E depois, se eu precisar verificar alguma coisa, ver o que ele está fazendo, editar coisas, abro aqui e dou uma olhada.

E a outra coisa que a gente pode fazer agora que temos este arquivo é abrir ele no Chrome. Se você clicar com o botão direito no arquivo e escolher Abrir com o Chrome, pode ver que temos uma página que a gente acabou de criar. Então, parabéns. Você construiu sua própria página pessoal. Não é uma página muito empolgante nem muito boa, mas é uma página pessoal.

![A página pessoal básica aberta no Chrome. Um título com Jeremy Walker e uma linha de biografia, sem nenhum estilo.](/images/projects/build-your-personal-homepage/setting-up-the-project/first-barebones-homepage.webp)

## Entender o que ele fez

Quero que a gente pare um minuto, e esta é a mentalidade em que eu sempre quero que você esteja, a de parar um minuto para olhar para o que está acontecendo aqui. A forma como eu quero incentivar você a fazer isto, agora que você já construiu aquilo, é dizendo:

> Me explique o que cada pedaço faz.

Você pode usar este ciclo não só para colocar ele para fazer coisas, mas também para entender, para construir conhecimento sobre como as coisas funcionam. Não deve ser uma pergunta tão complexa assim para ele, porque, primeiro, ele acabou de escrever e, segundo, é muito simples. E ele explica. Aqui vamos nós.

A primeira linha, a tag doctype, diz ao navegador que este é um documento HTML5. Então o que está acontecendo aqui, na verdade? O que é este HTML? Bom, este navegador é o Chrome (há outros navegadores disponíveis). Ele sabe ler um arquivo HTML e sabe colocar ele na tela de uma forma que você consiga ver. O HTML é uma especificação. Quer dizer _hypertext markup language_, ou seja, linguagem de marcação de hipertexto. Tem este aspecto, com um monte de tags e pedaços de informação, e o Chrome, ou qualquer outro navegador, consegue ler estas tags e colocar elas na tela.

Esqueça a parte do topo por agora. Olhe só aqui para baixo, para o body. Está colocando um título e está colocando texto de parágrafo. Este `h1` quer dizer título de nível um. E você pode ver que, por ser um título de nível um, o Chrome sabe que deve colocar ele um pouquinho maior e um pouquinho mais carregado. Enquanto que este `p` é um parágrafo. O Chrome sabe que deve colocar ele um pouquinho menor.

A gente podia, se quisesse, colocar aqui outras tags. Esta é uma lista não ordenada, `ul`, e lá dentro a gente teria itens de lista, `li`. Uma coisa que aconteceu desde que eu comecei a usar o Claude é que já não consigo escrever muito bem. E então a gente pode juntar várias tags, e isto nos dá uma lista com pontos.

Então, esta é a anatomia, o esqueleto, de uma página web. Todas as páginas web são iguais. Se a gente for a jiki.io e vir o código-fonte da página, você vê que é exatamente igual. São muitas e muitas destas tags. A gente vê que é a mesma coisa. A gente acabou de usar uma lista não ordenada, um item de lista, um link com algum texto e um ícone ao lado. É isto que o HTML é. Sempre que você fizer um site, de agora até o fim dos tempos, você está sempre produzindo HTML para um navegador.

Vamos acabar de ler o que ele tão simpaticamente juntou. Então o que temos a seguir? Temos o doctype, que diz que este é um documento HTML. Depois a gente diz, muito bem, este é o início do nosso documento HTML, e o idioma deste documento é o inglês.

Temos depois duas partes. Temos o head e temos o body.

A primeira coisa no head são os caracteres que a gente está usando, e a gente está usando este conjunto de caracteres chamado UTF-8. Cada um destes é um caractere. A gente está dizendo que pode usar qualquer caractere que seja latino, romano, como estes, ou que também pode usar emojis aqui. Se a gente pegar um emoji, pode colocar ele diretamente neste documento, depois atualiza e temos um emoji na página. É isto que aquilo significa. Está dizendo que estes são todos os caracteres que se usam habitualmente. É o nosso conjunto de caracteres padrão.

Temos também um viewport. A gente não precisa se preocupar com isso por agora.

E temos um title. O título é Jeremy Walker. Este título é o título que aparece no topo da aba. Uma coisa em que você vai pensar muito enquanto programa é em que títulos você quer que apareçam ali, para que, quando as pessoas tiverem várias abas abertas, tenham ali alguma coisa que sirva para elas. A gente também pode mudar coisas como o favicon. Você pode ver que a gente ainda não fez isso, por isso não temos nenhum ícone ali.

Esta seção head é tudo aquilo que não aparece na tela. Tudo aquilo que os motores de busca possam consultar, e outras coisas do tipo, fica no head. E depois o body é tudo o que está no espaço embaixo. E isto é, muito literalmente, um título, um parágrafo e uma lista.

Então, é isto que a explicação nos diz. A tag `html` é o elemento raiz. O head são os metadados. Metadados quer dizer apenas dados sobre a página, não coisas que você vê. O charset é a codificação de caracteres que faz com que os seus emojis e alguns caracteres de outros idiomas apareçam. A gente não quer se preocupar com o viewport. E depois o body é o resto que a gente já viu.

Para quem escreve HTML há anos, peço desculpa por isto ser tão básico, mas você também aprendeu isto do zero, um dia.

## Acrescentar conteúdo de verdade

Você pode agora usar o seu agente para acrescentar algum HTML. Vamos buscar mais texto. Se você tem um perfil no LinkedIn, talvez queira ir buscar algum texto de lá. Aliás, vamos fazer exatamente isso. Vamos ao meu LinkedIn buscar alguma informação. E a gente pode dar isto ao nosso LLM. A gente pode dizer:

> Aqui está alguma informação do meu LinkedIn. Estruture ela de forma sensata embaixo do cabeçalho da página.

A gente dá este texto para ele e ele vai estruturar para a gente. Mais uma vez, se a gente voltar dois anos, você teria que escrever tags à mão, escrever isto tudo. Em vez disso, agora a gente tem a possibilidade de simplesmente dar algum texto para ele e colocar ele para criar uma estrutura sensata em volta. Agora, a gente não está pedindo aqui que ele dê estilo àquilo, nem que fique com um aspecto em particular. A gente está só pedindo que ele crie alguma estrutura em volta, algum HTML em volta. Vamos ver quão bom o Big Pickle é nisso.

Depois desta primeira sessão, aliás, vou usar o Claude para a maior parte do que eu faço, só porque conheço ele muito bem e também porque é rápido. Mas, se você está acompanhando por conta própria, recomendo que faça isto. Se você tem um LinkedIn, se tem um currículo, pode simplesmente copiar aquilo, colocar no OpenCode e pedir que ele construa esta coisa.

Ele pensou um pouquinho. Agora está preparando a edição. E acrescentou o código. Aqui está. Temos agora um título de nível dois "Experience" bacana, e temos a restante informação. Se a gente for ao Chrome e atualizar, vê que temos agora um pouco de código básico bem estruturado.

![A página pessoal no Chrome, agora com uma seção Experience com entradas estruturadas para cada função.](/images/projects/build-your-personal-homepage/setting-up-the-project/homepage-with-experience.webp)

## Sua lição de casa

A próxima coisa em que a gente tem que pensar é no aspecto que a gente quer que a nossa página pessoal tenha. Esta é uma questão em que quero que você passe algum tempo. Vou incentivar você muito, ao longo deste curso, a pegar uma caneta e um bloco, sentar num lugar sossegado, o mais longe possível de uma tela, e pensar.

Vamos construir uma página pessoal para nós. Essa página precisa ter algumas coisas. Precisa ter uma apresentação de nós mesmos e dos nossos interesses. Precisa ter uma página que seja o nosso currículo, o nosso CV. Vai ter uma página sobre o nosso portfólio, todos os projetos que a gente está fazendo, e depois vai ter links para outras páginas sobre esses projetos. Então, a gente vai construir, ao longo do tempo, um site grande com várias páginas. Vamos fazer a maior parte disso na segunda sessão. Hoje a gente está só fazendo esta página de apresentação. Mas quero que você pense bem, com caneta e papel, e que desenhe como gostaria que fossem as várias páginas.

E pense também um pouquinho no estilo. Veja as páginas de outras pessoas. Procure outras pessoas na comunidade do Exercism. Se eu olhar para o Erik Schierboom, que trabalhou com a gente, ele tem uma página de entrada principal bem simples e depois uma página "sobre", que é bem bacana, com uma coisinha simpática que aparece embaixo. Tem alguma informação sobre software, lugares onde ele deu palestras, e depois alguns links. Você pode se inspirar bastante nisso. Ou, se a gente vir o SleeplessByte. Talvez você lembre do DJ, se esteve nos bootcamps ou se conheceu ele como mentor. Esta é a página do DJ. Então, vá procurar pessoas que te interessem e se inspire no que elas fizeram. Pense visualmente no tipo de estilo de que você gosta. E a gente vai falar um pouco sobre fazer imagens e como você pode usar a tecnologia para fazer elas.

Explore as ideias de várias pessoas. Eu sou sempre bem fã de uma sensação bem minimalista. E, para este projeto, vou passar os próximos dias pensando também no aspecto que quero que a minha nova página de entrada tenha, porque vou fazer esta página pessoal para mim. Vou pensar em como ela se divide. Quero uma seção para a minha fotografia. Quero uma seção onde possa ter os meus podcasts, vídeos e coisas que eu fiz. Quero um pouquinho de biografia, e quero um CV, um currículo. Então, vou pensar nessas coisas.

A sua lição de casa desta semana é pensar nisso, desenhar, e depois começar a estruturar essas páginas. Você pode criar várias páginas. A gente pode criar outra página, vamos chamar ela de o meu currículo, e a gente pode copiar e colar o nosso conteúdo lá para dentro, apagar os pedaços de que a gente não precisa, e mudar o título para "Currículo do Jeremy". Temos agora a nossa página index, mas também podemos agora ir a resume.html e ter aquilo como outra página.

Então, esta semana:

- Pense nas várias páginas que você vai querer, e no conteúdo que vai colocar nessas páginas.
- Instale o VS Code.
- Instale o OpenCode e configure um modelo.
- Trabalhando com o OpenCode, monte algumas dessas páginas.

Não se preocupe ainda com o estilo. Eu não quero mesmo que você se meta nisso agora. Você pode brincar, se quiser, eu vou sempre incentivar as pessoas a serem curiosas, mas eu gostaria de te ensinar quais são, na minha opinião, as melhores formas de fazer isso no mundo moderno. E não comece mesmo a usar frameworks de JavaScript nem nada disso. Fique no HTML básico, e depois a gente vai acrescentar camadas em cada sessão, até ficar cada vez mais poderoso e cada vez mais complexo. Assim você vai entender como tudo acontece.

Se você tiver interesse, vá investigar um pouquinho mais sobre HTML. Descubra quais são as várias tags e o que significam. Hoje em dia, investigar pode ser tão simples quanto perguntar:

> Me diga as 20 tags mais comuns.

E depois:

> Me diga para que serve cada uma delas.

É assim que eu investigo as coisas.

A gente faz a próxima sessão daqui a uns dias. Até lá, espero que você apareça com o OpenCode instalado, o VS Code instalado e uma série de páginas. Da próxima vez a gente vai começar a conectar essas páginas umas às outras, acrescentar navegação, acrescentar algum estilo, e também vamos publicar isto no GitHub, e talvez até arranjar um domínio personalizado para você, para que você possa ter o seu próprio site pessoal num domínio, de graça. Esta semana talvez você queira também criar uma conta no GitHub, em github.com. Vou publicar guias para o VS Code, o OpenCode e o GitHub, e você pode seguir eles.

É este o fim desta primeira sessão. Obrigado por assistir. Espero que tenha sido interessante. Espero que você tenha gostado. Se você tiver alguma pergunta sobre o que foi falado, apareça no fórum. Eu vou estar por lá, e estou ansioso para responder a perguntas e explorar elas. Eu não tenho necessariamente todas as respostas. Também adoro aprender. Por isso, pergunte o que te interessar. E fico esperando você na próxima sessão.
