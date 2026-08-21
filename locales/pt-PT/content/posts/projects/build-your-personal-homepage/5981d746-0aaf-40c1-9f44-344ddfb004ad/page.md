---
title: "Episódio 1: Programação com agentes, o básico"
excerpt: "Damos início a este projeto com um mergulho a fundo na programação com agentes. O que são os LLM e os agentes, como funcionam os modelos e o esforço, como te preparares de graça com o OpenCode, e como construir a tua primeira página web."
summary:
  from: "Partimos do princípio de que não sabes nada sobre a web nem sobre programação com agentes."
  to: "Ficas a perceber o ciclo da programação com agentes e escreves a tua primeira página pessoal, bem básica, no navegador."
  keyConcepts: ["Programação com agentes", "Modelos e esforço", "Tokens e contexto", "Bases de HTML"]
seo:
  description: "Aprende o que é a programação com agentes, como funcionam os LLM, os modelos e os tokens, e constrói a tua primeira página web com o OpenCode."
  keywords: ["programação com agentes", "llm", "html", "iniciante"]
en_md5: 179b6fdc5bf4a07aac6f6fb60589af30
---

## Introdução

Bem-vindo ao primeiro episódio desta nova série sobre como usar agentes, como usar os LLM (os grandes modelos de linguagem) para construir coisas nesta era moderna em que a programação mudou tanto. Ao longo dos anos fizemos muitas sessões como esta para o Exercism, mas esta é a primeira sessão oficial em direto do Learn to Build do Jiki.

Deixa-me explicar-te o que vai ser esta série, o que vamos ver hoje em concreto, o que vamos ver ao longo da série e para quem isto é. Vou começar por essa última questão.

## Para quem é isto

Isto é, na verdade, para dois grupos de pessoas. Para quem é totalmente novo na programação, novo neste mundo todo, que só quer começar e perceber como pode dar os primeiros passos. Mas também é para pessoas talvez muito mais experientes, possivelmente até programadores séniores, que ainda não entraram a sério nesta mudança para a programação com agentes e querem perceber o que se passa, ver algumas coisas a funcionar, discutir ideias e construir uma compreensão real disto. Portanto, podes estar em qualquer ponto desse espetro, desde o teu primeiro dia de programação, se calhar decidiste programar esta manhã, encontraste o Jiki e aqui estás, até alguém com muitos anos de experiência.

Nesta série em particular (vai haver várias séries), vou partir do princípio de que não sabes nada. Por isso, se és um programador sénior, vai haver muita coisa que eu digo que já conheces de cor, e isso pode parecer-te um bocado aborrecido. Se este é o teu primeiro dia, não deve haver nada que eu esteja a assumir que já sabes. Pode haver coisas que te passem ao lado, mas estou a tratar esta sessão como se fosse para ti. E se nunca fizeste este novo tipo de programação e tens mais experiência, isto vai continuar a ser útil.

Vou mostrar-te um bocadinho do que significa programar assim. Vou mostrar-te alguns exemplos de coisas que preciso de resolver agora mesmo no Jiki, e corrigi-las, só como preâmbulo. Depois vamos falar de alguns dos termos que usamos e de como estas coisas encaixam umas nas outras. E a seguir vamos mesmo construir qualquer coisa. Vamos criar uma nova página pessoal.

Isto é algo que quero incentivar toda a gente a fazer. Constrói o teu próprio site. Pode ser a tua página pessoal. Pode ser outra coisa qualquer. Talvez só um currículo em código, um CV em código, o que quiseres. Depois desta sessão, põe em prática o que viste aqui e experimenta.

Eu vou usar o Claude e algumas coisas mais avançadas, mas também te vou mostrar como podes fazer isto se não tiveres dinheiro nenhum para gastar. Se quiseres trabalhar com agentes de graça, isso também é uma das coisas que vamos ver.

### O que deves ter preparado antes?

Absolutamente nada. É só apareceres. Eu vou explicar-te as coisas e depois vou publicar uma série de guias que acompanham isto. Guias sobre como instalar o OpenCode, que vamos ver hoje, guias sobre os vários termos ligados aos LLM e como funcionam, e um guia sobre como usar o GitHub, de que também vamos falar. Vais poder passar uns dias a pôr a leitura em dia e a trabalhar nesses guias.

Se tiveres uma pergunta a que eu não responda neste episódio, podes sempre ir ao fórum em [forum.jiki.io](https://forum.jiki.io) e perguntar por lá. Eu ando por lá. Outros programadores séniores e outras pessoas que estão a acompanhar também andam por lá e podem responder a perguntas.

## Detetar os erros que os LLM cometem

Vou saltar para o fórum do Jiki, para uma coisa que reparei há bocado. Estes são vários tópicos relacionados com tradução, e vais reparar que a maior parte tem uma bandeira ao lado do país. Uma bandeira holandesa, uma bandeira alemã. Ao lado do turco temos um peru (em inglês, *turkey* é ao mesmo tempo o país e a ave). Provavelmente um bocado racista. Vamos ter de tratar disso daqui a nada. Mas o que me saltou à vista foi o do indonésio. Isto foi tudo feito pelo Claude, esta escolha de emojis. E aqui inventou claramente um emoji, ou foi buscar um emoji que não funciona.

![O fórum do Jiki a mostrar os tópicos de tradução. O turco tem um emoji de peru em vez de uma bandeira, e o indonésio mostra um emoji :garuda: partido.](/images/projects/build-your-personal-homepage/setting-up-the-project/forum-language-flags.webp)

É por aqui que quero começar, porque isto é real. Vi isto dois minutos antes de entrar em direto. Este é o tipo de coisa que vais ver muitas vezes enquanto trabalhas com estes LLM e com estes agentes. Eles inventam coisas. Acham que existe aqui um emoji, mas ele não funciona neste site. Era suposto porem a bandeira da Turquia e, em vez disso, puseram literalmente um peru.

Estes são os tipos de erro que são muito óbvios para nós, humanos. Vemo-los logo. Saltam-nos à vista. Rimo-nos um bocadinho. A preocupação são as decisões que o LLM está a tomar aqui. E este é o modelo mais poderoso que existe. É o Fable. É o modelo tão inteligente e tão perigoso que o governo dos Estados Unidos o proibiu. E, mesmo assim, põe um peru no lugar da bandeira turca e não faz necessariamente ideia de que isso pode chatear alguém. Claro que também pode ser só um grande sentido de humor. Não sei.

Estas são as coisas visíveis, as óbvias. Imagina quantos outros pequenos erros, ou digamos antes más decisões, estes LLM estão a tomar nos bastidores. À medida que formos avançando pelo próximo ano, ou por muitos anos, a fazer estes diretos, os LLM vão melhorar. Mas o que quero que percebas já, e que quero que interiorizes mesmo, é que estes não são uns deuses da programação a quem podes simplesmente entregar as coisas e que vão acertar em tudo. Cometem erros de forma consistente. Alguns são óbvios e engraçados, outros não. Se queres ser um programador moderno, uma grande parte do teu trabalho é procurar esses erros. E com isso não quero dizer procurar quando põem um peru em vez da bandeira turca. Quero dizer procurar os erros concetuais que estão a cometer, as ideias, as coisas que sugerem e que simplesmente não nos soam bem nem fazem grande sentido.

### O que significa i18n?

Significa internacionalização (_internationalization_ em inglês). O 18 é o número de letras que ficam entre o i e o n dessa palavra inglesa. É um atalho.

## A programação com agentes em poucas palavras

Vamos ver o que é fazer um bocadinho de programação com agentes. Peguemos naquele glossário da Indonésia com o emoji partido. Vou tirar uma captura de ecrã, ir ao meu terminal e entrar no Claude Code. Daqui a pouco vamos falar de como configurar isto tudo. Pode parecer um bocado intimidante e muito preto e verde neste momento, mas já lá vamos.

O que quero mostrar-te é isto. Posso arrastar a imagem para aqui e posso dizer "corrige o emoji errado". E isto vai desaparecer, vai pensar e vai fazer muita coisa. Podemos ver algumas das coisas que está a fazer. Está a executar comandos. Está a tentar perceber o que se passa. Porque é que esta bandeira está errada? O que significa esta bandeira? Como é que isto aconteceu? Agora está a começar a ler alguns scripts. Este é o script que cria a categoria de idioma no fórum, o script que correu quando criou essa categoria. Agora está a percorrer o histórico de tudo o que fez e a tentar perceber quando é que isto correu mal, como correu mal e porque correu mal. Está a ler vários ficheiros. Está a correr vários comandos. Podes ver este número a subir, a correr o quarto comando, e por aí fora.

![O Claude Code no terminal a trabalhar em "Fix the incorrect emoji", à procura de padrões, a ler ficheiros e a correr comandos de shell.](/images/projects/build-your-personal-homepage/setting-up-the-project/claude-code-fixing-emoji.webp)

E depois diz que o encontrou. O emoji correto devia ser a bandeira da Indonésia, não `:garuda:`. Vai-se embora, corre qualquer coisa que atualiza a categoria. E se formos agora ao fórum e abrirmos isto, vês que ficou corrigido. Temos agora uma bandeira indonésia.

![O tópico Glossary for Indonesian no fórum, agora com a bandeira indonésia correta.](/images/projects/build-your-personal-homepage/setting-up-the-project/indonesian-flag-fixed.webp)

Isto é a programação com agentes em poucas palavras. Dissemos "faz esta coisa". Foi-se embora. Correu vários comandos. Leu alguns documentos. Está a fazer tudo isto, muito complicado, em segundo plano, com bash de aspeto complicado que seria muito doloroso de escrever. A não ser que sejas um maintainer do Exercism, caso em que é facílimo. Mas para nós, meros mortais, é talvez um bocado complicado de escrever. Percorreu tudo, a tentar perceber quando é que isto correu mal. Leu o histórico dos ficheiros. Encontrou a entrada do indonésio e alguns registos. Leu as regras que lhe dei, encontrou algumas variáveis que lhe permitem ir atualizar o fórum, percebeu o que estava mal, discutiu comigo muito por alto e foi atualizar aquilo.

Foi assim que construí o Jiki. É assim que muitos programadores modernos, diria que provavelmente a maioria dos programadores que hoje trabalham, estão a trabalhar. Encontramos um problema como aquele. Reparamos nele. Talvez venha num ticket de outra pessoa. E depois entregamo-lo a algo como o Claude, ou a um dos muitos outros modelos que existem, e já lá chegaremos daqui a pouco. Eles percorrem este processo complexo de vários passos e depois corrigem o bug.

Ora, este bug é obviamente muito fácil. É uma página. Tem um emoji errado. Devia ter este emoji e tem outro. Por isso consegue corrigi-lo bastante depressa. Mas o sítio onde este fluxo funciona mesmo bem é quando não estamos só a tentar corrigir uma coisinha pequena. Estamos a construir uma funcionalidade nova, ou a fazer debug de algo mesmo complicado. Isso significa ler centenas de ficheiros e depois ter de escrever em alguns deles.

## Ter juízo com os custos

Antes de passarmos a outro exemplo, deixa-me mostrar-te uma coisa. Posso escrever `usage` aqui, e o `usage` mostra-nos o que se passa nos bastidores. Podes ver que aquilo demorou 52 segundos do início ao fim para o Claude fazer, e custou 37 cêntimos. Ora, eu tenho o Claude Max, o que significa que tenho um limite de utilização muito grande dos vários modelos. Por isso não me são cobrados 37 cêntimos por aquilo. Está simplesmente incluído na minha subscrição mensal.

![O ecrã de utilização do Claude Code a mostrar um custo total de 0,38 dólares e 52 segundos de tempo de API para a correção do emoji.](/images/projects/build-your-personal-homepage/setting-up-the-project/claude-code-usage.webp)

Mas isto é uma coisa de que quero que tenhas consciência desde já, agora que começamos a falar disto. Aquele processo de perceber tudo aquilo e resolver o problema custou 37 cêntimos. Se eu tivesse querido, podia simplesmente ter ido ao fórum e editado o tópico eu próprio. Podia ter selecionado o emoji, escrito Indonésia e clicado na bandeira. Isso não me teria custado 37 cêntimos. Se imaginares cada coisinha que eu faço como programador, seja lá quantas horas por dia estivermos a programar, é bom que tenhamos algum juízo sobre para que usamos esta inteligência super poderosa e o que podemos simplesmente fazer à mão.

Isto é especialmente verdade para quem não está a pagar uma subscrição Claude Max e não tem muito dinheiro. Vou mostrar-te como podes fazer tudo isto de graça. Mas, nos planos gratuitos, vais ter uma quantidade limitada de utilização. É uma quantidade bastante grande de utilização limitada. É tudo aquilo de que precisas. Mas quero que ganhes a mentalidade de não desperdiçar essa utilização em coisas que podes fazer à mão. É muito melhor para ti investigares tu próprio, perceberes o que se passa, aprenderes alguma coisa pelo caminho e depois corrigires aquilo. É essa a melhor forma de aprenderes. Se começares a atirar isto para cima de tudo, vamos ter problemas.

Deixa-me mostrar-te outra coisa. Isto mostra qual é a tua utilização mensal. Este é o meu último mês. Como disse, tenho este plano Claude Max, por isso pago apenas 200 dólares fixos por mês. Mas se não tivesse o Claude Max, se estivesse a pagar isto diretamente, teria custado 35 000 dólares este mês. São três mil milhões de tokens que usei este mês. Vamos falar daqui a pouco do que são os tokens. Mas as contas podem subir muito depressa.

![Uma tabela no terminal com a utilização diária de tokens por modelo, com milhares de milhões de tokens usados entre o Fable, o Opus, o Sonnet e o Haiku.](/images/projects/build-your-personal-homepage/setting-up-the-project/monthly-token-usage.webp)

### E o Ollama e outros modelos locais?

Esses funcionam. Se tiveres um computador suficientemente potente para correr modelos locais, um bom MacBook ou uma boa máquina Windows com uma boa GPU, podes correr modelos no teu computador em vez de enviar dados para o Claude e o Claude devolver dados. No entanto, vai ser muito, muito mais lento. Aquilo que acabámos de ver, que demorou 52 segundos, vai passar a demorar 5 minutos, ou meia hora. Mesmo numa máquina de topo estamos a falar de 10, 20, 30 vezes mais lento do que usar o Claude ou outra coisa qualquer.

### Não sai às vezes mais barato contratar um programador júnior do que pagar um LLM?

Como tenho uma subscrição Claude Max, que são 200 dólares por mês, o meu custo total para usar tudo isto é de 200 dólares por mês. Um programador júnior vai custar dez vezes mais do que isso. Mas, além disso, costumo ter talvez seis ou sete Claudes a correr ao mesmo tempo. Portanto, se este Claude é tão bom como um programador júnior, tenho seis ou sete desses júniores a correr em separadores diferentes, ao mesmo tempo, a fazer coisas diferentes. Já não existe uma economia em que pôr alguém a escrever este código à mão faça algum sentido.

Mas o sítio onde podes ganhar com isto, onde tu, como júnior, podes tornar-te valioso aqui, é este: se tu, como júnior, conseguires ter seis ou sete Claudes a correr ao mesmo tempo, e conseguires fazer com eles tarefas mais simples, mais básicas, então vais acrescentar imenso valor a uma empresa. A minha capacidade total como programador é provavelmente ter cinco ou seis a correr ao mesmo tempo, e mesmo assim passo muito tempo a pensar e a ler. Toda a gente vai chegar a esse limite se estiver a fazer isto como deve ser, a pensar no que está a acontecer. Por isso, se queres entrar hoje no setor tecnológico, o sítio onde vais acrescentar valor é a aprender a controlar estes Claudes, estes outros modelos, estes LLM, estes agentes, e a saber como lhes dar instruções, como os capacitar e como rever o trabalho deles de forma sensata e poderosa.

## Arrancar com um novo idioma

Portanto, este é o nosso ponto de partida. Já sabes um bocadinho sobre como estas coisas funcionam. Vou pôr mais uma destas a andar enquanto conversamos. Uma das coisas que construí é um comando de arranque de idiomas para traduzir o Jiki para vários idiomas. Já tenho o português do Brasil arrancado no fórum, mas quero arrancar com o português europeu. Vou clicar em executar e depois damos-lhe uma olhadela.

O que isto faz é ir criar informação, um guia, um glossário e outras coisas para traduzirmos o site para português. Podes ver o do turco no fórum. Aquele é o glossário que foi produzido e criado, com todos os termos que traduzimos para turco.

Este agente vai agora fazer muito trabalho para acertar nisto. Vai lançar outros agentes. Temos um agente principal que está encarregado disto. Vai enviar outros agentes para investigarem os termos corretos para português. Vai pô-los a consultar a documentação da Mozilla e da Microsoft para descobrir que termos são usados. Vai provavelmente consultar o Duolingo e alguns outros sites. E depois vai voltar e apresentar-me um monte de informação sobre o que encontrou, e fazer-me algumas perguntas.

Enquanto isso acontece, quero dar uma olhadela ao comando que acabei de correr, o Bootstrap Language. Isto é o que o Claude está a fazer. Estas são as instruções que o Claude está a seguir. Temos um bocadinho de coisas no topo que são apenas informação para o Claude sobre como correr isto. E depois tudo o resto é informação que tu ou eu podemos ler e que explica o que se passa.

Estamos a dizer ao Claude para arrancar com um novo idioma. Estamos a dizer que tem de investigar como o idioma se escreve, acordar decisões que só eu posso tomar, consultar estes guias e usar o húngaro como base, só porque foi esse o primeiro em que trabalhámos. O Aron, que é programador de front end aqui, é húngaro. E depois temos um monte de fases pelas quais ele passa. Algumas verificações que faz. Podes ver que, antes de mais, dizemos para verificar se este idioma já existe. Se existir, para e reporta. E vês que a primeira coisa que faz é dizer "vou começar por verificar se o idioma existe". Passa, não existe, e segue em frente.

Depois tem alguns ficheiros que vai ler. Lê este ficheiro de regras, este ficheiro de voz, mais alguma informação, e carrega tudo isso na sua memória, por assim dizer. Vamos falar daqui a pouco do que isso significa mesmo. Portanto, agora tem toda esta informação ali, todos estes documentos grandes que escrevi com regras, e com a forma de falar na voz certa, e todas estas coisas.

E depois vai fazer a investigação. Tem várias regras que lhe dei. Evitar contaminação gerada por LLM. Não quero que vá ler um monte de conteúdo que outros LLM já escreveram. Quero que olhe sobretudo para coisas anteriores a 2022, verificando as datas desse conteúdo antes de o usar. Está a verificar em várias fontes. Digo-lhe para ser desconfiado, para se sentir confortável com a incerteza, e depois para procurar várias coisas. Que metáforas é que as pessoas usam? Qual é o nível de formalidade e de registo? E depois vai juntar tudo isso numa estrutura e vai parar para discutir comigo. Vai explicar o que encontrou, fazer-me algumas perguntas, propor alguns termos-chave. E depois, assim que eu concordar, assim que os discutirmos, vai escrever um glossário e um guia, juntá-los e depois criar a publicação no fórum. Tem a capacidade de entrar no fórum do Jiki e criar essa publicação, e depois cria também a publicação do glossário. São duas publicações separadas.

Portanto, este é o comando que construí, e que ele pode depois seguir. E podemos vê-lo em segundo plano a moer. Aqui está, agora está a reportar as conclusões da investigação. Esta é a forma como deve tratar quem aprende: devemos usar o "tu" informal, que é a forma calorosa e corrente de nos dirigirmos a quem aprende, e não o outro tom, o formal. E depois pede-me algumas decisões. Concordo com isto? Deve usar as mesmas convenções do Brasil? Dá-me alguns termos que escolheu. E, a esta altura, posso ver tudo e dizer que sim, estou contente com todas estas decisões, estou contente com os teus valores por omissão. E depois ele continua.

![O Claude a reportar o seu resumo de investigação para o português europeu, incluindo as fontes e a decisão de usar o "tu" informal.](/images/projects/build-your-personal-homepage/setting-up-the-project/portuguese-research-findings.webp)

### Comandos e skills são a mesma coisa?

Sim, são a mesma coisa. Todas as empresas de LLM têm nomes diferentes para todas estas coisas.

## Agentes e modelos

Quero que paremos um segundo para pensar no que se passou aqui, porque esta é uma chave importante para perceber a diferença entre abrir a aplicação do Claude ou o ChatGPT e falar com eles, e usar programação com agentes como esta.

Quando falas com o Claude numa interface, estás a fazer uma pergunta e tens, na prática, um agente com quem falas, que talvez vá verificar uma coisa e depois volte e continue a escrever. É mesmo uma conversa entre ti e uma pessoa, um agente. Quando estás a trabalhar neste modelo de programação com agentes, o que acontece nos bastidores é que lançamos muitos agentes para fazerem coisas diferentes. Vamos ter agentes que investigam, agentes que planeiam, agentes que constroem. E podemos construir os nossos próprios agentes. Agentes que testem coisas de certas maneiras, agentes que verifiquem se as coisas cumprem determinadas normas. E muitas vezes o agente com quem estamos a falar é aquele que gere todos os outros agentes.

Esses agentes podem usar modelos diferentes. Por isso, esta é uma boa altura para falar de modelos. Já ouviste este termo muitas vezes, sem dúvida. Provavelmente já tens uma boa ideia do que são os modelos, mas vou explicar rapidamente.

Empresas diferentes, como a OpenAI ou a Anthropic, têm modelos diferentes, e os modelos são o mecanismo subjacente pelo qual um LLM funciona. É algo que foi treinado com uma certa quantidade de dados para funcionar a uma certa velocidade. Os modelos de fronteira, como lhes chamam, são os melhores modelos que existem. No caso da Anthropic, é neste momento uma coisa chamada Fable, ou Mythos. Esses são mais lentos, são caros, mas são muito poderosos. Lá no outro extremo está o Haiku, que é um modelo muito mais rápido. É qualquer coisa como 50 vezes mais barato de correr, muito mais rápido, mas não raciocina tão bem. E depois tens o Sonnet e tens o Opus. Portanto, tens estes quatro modelos, e todos os fornecedores têm esta variedade de modelos. Alguns dos de gama alta são super inteligentes. Outros são muito menos inteligentes mas muito mais rápidos.

Para uma tarefa básica, digamos a tarefa que acabámos de ver, do género porque é que esta bandeira está errada, não vai haver diferença nenhuma de desempenho entre o Haiku e o Fable. Mas se usares o Fable para a fazer, vais gastar 50 vezes mais dinheiro. Por isso, uma das coisas de que queremos estar sempre conscientes é qual o modelo certo para a tarefa. Isso mantém as coisas mesmo rápidas, mantém as coisas no nível de qualidade certo para aquilo de que realmente precisamos, e mantém o custo em baixo, o que também é importante.

Quando estás a correr um agente que depois corre vários outros agentes, eles também estão constantemente a tomar essa decisão. Se estiverem a lançar agentes para fazer coisas simples, vão usar modelos de gama baixa. Se estiverem a lançar agentes para fazer coisas muito complexas, vão lançar o Fable.

## Esforço

Temos também o conceito de esforço. O esforço é a quantidade de esforço que um modelo está disposto a fazer. Então o que significa esforço? A forma como estes modelos funcionam é que falam consigo próprios. Têm uma conversa longa e contínua. Já deves ter visto isto se usas o Claude ou o ChatGPT, onde há a opção de "mostrar o raciocínio" e consegues ver o modelo a responder a si próprio. O que estão a fazer é raciocinar, escrevendo o que acham que pode estar a acontecer e depois construindo em cima disso.

Quando falamos de esforço no mundo do Claude, e também noutras ferramentas, estamos a dizer quanto tempo deves passar a falar contigo próprio antes de voltares com uma resposta. Esforço baixo significa não fales muito contigo próprio, dá-nos só a primeira coisa que te ocorrer. Esforço alto significa fala muito contigo próprio. E o bom do esforço alto é que o Claude, na prática, diz a primeira coisa que lhe vem à cabeça (é uma má analogia, mas a primeira coisa que lhe ocorre), mas depois volta a raciocinar sobre isso, para ver se faz sentido ou não. Depois acrescenta uma terceira camada, e depois raciocina sobre esse conjunto todo e vê se faz sentido ou não. E depois acrescenta uma quarta coisa. Continua a raciocinar sobre o que está a dizer até chegar a um ponto com que fica satisfeito, ou de que fica convencido. Ao passo que, com esforço baixo, responde-te logo. E isso pode estar errado, pode não estar. Não houve verificação nenhuma sobre o seu raciocínio.

Portanto, temos estes dois eixos. Temos a qualidade do modelo: Fable, Opus, Sonnet, Haiku. E temos a quantidade de esforço que esse modelo vai fazer: baixo, médio, alto, extra alto. E podes continuar a subir. Muitas vezes os fornecedores cobram mais à medida que avanças nessa escala.

No Claude Code podemos mudar de modelo simplesmente escrevendo `/model`, e depois podemos escolher entre Opus, Fable, Sonnet ou Haiku. E podemos escolher o esforço: baixo, médio, alto ou máximo, com uns brilhantes no máximo, e ultracode, onde temos umas animações lindas em que as pessoas puseram imenso esforço.

Eu costumo ficar-me pelo Opus em médio como modelo padrão para a maior parte das coisas. Na maior parte do que faço, quero algo como o Opus para conseguir pensar bem nas coisas, e acho que o esforço médio é o equilíbrio certo. Mas estou mesmo consciente disso e, quando começo tarefas, penso em que modelo quero. Isto é simples ou é difícil? Quanto esforço é preciso pôr neste processo todo?

### Como é que sabemos qual o melhor modelo para uma tarefa?

Vais aprender isso com o tempo. Uma regra simples é perguntares a ti próprio quão difícil é para ti. É mesmo fácil? É como mudar uma bandeira numa publicação do fórum? Isso é mesmo fácil. O Haiku faz isso com esforço baixo. Estás a pedir-lhe uma coisa que te parece de uma complexidade estonteante? Vai buscar um modelo melhor ou mais esforço.

O Fable é excelente para tarefas longas. Para te dar um exemplo, ontem tive uma sessão aberta em que peguei em todos os vídeos que temos (a certa altura vou falar de como criei os vídeos) e extraí todo o inglês dos vídeos. Todo o inglês que está escrito no ecrã, extraí-o dos vídeos e coloquei-o como uma camada por cima, para depois poder mudar isso para outro idioma e voltar a exportar os vídeos com outro idioma no ecrã.

Pus o Fable a fazer isso. Lancei-o numa tarefa. Pu-lo a lançar um agente Fable para cada vídeo, por isso tinha 32 Fables a correr. Cada um deles percorreu todos os bocados do vídeo à procura de texto. Tiraram capturas de ecrã, depois atualizaram as imagens, removendo o texto das imagens. Depois perceberam qual era a fonte em que o texto tinha sido escrito, qual era o tamanho da fonte, o peso da fonte, o espaçamento entre letras, o espaçamento entre linhas, o kerning, todas essas coisas para fontes variáveis. Depois escreveram esse texto no ecrã no sítio certo e, a seguir, tiraram capturas de ecrã repetidamente e compararam até as duas capturas ficarem iguais ao pixel. Tinha um Fable que planeou tudo, investigou, analisou, escreveu alguma documentação, e depois tinha um Sonnet a orquestrar que ia lançando mais Fables para fazerem todos esses trabalhos. Demorou cerca de três horas. Custou cerca de 400 dólares. Mais uma vez, estava dentro da minha subscrição Max, mas de outra forma teria custado uns 400 dólares. E, no fundo, deixou todos os vídeos num estado em que estão prontos a avançar.

Nesse tipo de situação, eu sabia que aquilo era uma tarefa bastante complexa. Já tinha tentado fazê-lo com o Opus e o Opus não conseguiu. Era demasiado complexo para o Opus, por isso sabia que era preciso o Fable.

### Os modelos de fronteira são como os smartphones topo de gama?

Sim, exatamente. São mais inteligentes, são melhores, mas também são mais caros e são geralmente mais lentos. E tens de te lembrar de que o modelo de fronteira de hoje é o modelo barato daqui a um ano. Isso já é verdade. O Haiku é equivalente ao modelo de fronteira do ano passado. Portanto, o Haiku já é suficientemente bom para fazer muita programação, apesar de ser o modelo barato do outro extremo. Só precisas desse modelo caro se estiveres mesmo a fazer uma coisa que era impossível no modelo anterior, como o Opus. Só queres mesmo ir buscar esse modelo de fronteira em situações específicas.

### Para quem é especialista, não é frustrante pagar para programar em vez de programar?

Estou a pagar 200 dólares por mês. Embora seja uma quantia significativa, é pouco dinheiro para a produtividade extra que isso cria. Acho que estou a chegar a um ponto em que sou pelo menos uma vez e meia mais produtivo. O que produzo é uma vez e meia o que era. Não sei qual seria o meu salário no mercado, porque nunca tive um emprego, mas imagino que me esteja a poupar uma fortuna, se for essa a medida. Portanto, 200 dólares é barato. Se tivesse de pagar 2000 dólares por mês por isto, provavelmente não valeria a pena para mim.

É super frustrante muitas vezes? É. Mas o que percebi é que isto simplesmente me sobe um nível de abstração. Antes, havia muita programação que eu teria de fazer e que, para mim, era mesmo aborrecida. Pode ser mesmo interessante para um júnior ou um intermédio, mas para mim era super aborrecida. Agora não tenho de fazer isso, e não tenho de ter um júnior ou um intermédio a quem tenha de dar apoio. Consigo despachar aquilo com muita facilidade sem ter de gerir outras pessoas, o que significa que continuo livre para ser produtivo de outras formas. Portanto, o benefício líquido compensa, no meu caso.

Mas acho que, para muitos programadores, isto é bastante menos divertido, bastante menos agradável do que era. Também é apenas a realidade do mundo. Não temos escolha. Talvez algumas pessoas tenham o luxo, no emprego, de não fazer isto. Se avançares dez anos, não me parece que muita gente tenha esse luxo. Por isso, se queres proteger o teu futuro, ou se queres ganhar vantagem na indústria, ficares bom nisto é, na minha opinião, o segredo.

## Permissões e modo automático

Voltando à tarefa de tradução, já terminou. Temos agora alguns ficheiros que já foram commitados. Se voltarmos ao fórum, vamos ver se há uma publicação nova. Ah, isto é interessante. Publicar no fórum público foi bloqueado, porque pus isto em modo automático.

Isto funciona assim: ele tenta fazer coisas, e depois outro LLM monitoriza o que ele está a fazer e verifica se essas coisas se parecem com coisas que eu disse explicitamente. Assim que está a enviar dados para outros sites, ou a fazer alguma coisa desse género, precisa que eu diga explicitamente que concordo. E como eu o tinha deixado em modo automático, a moer sozinho, ele não me perguntou se eu concordava. Por isso bloqueou. Pergunta "queres que eu avance e crie essa publicação no fórum?", eu digo que sim, e agora vai mesmo fazê-lo. Esta é uma das coisas que aconteceu nos últimos dois ou três meses. Temos agora quase um LLM supervisor que permite que mais coisas aconteçam automaticamente, mas que tenta bloquear coisas arriscadas ou perigosas.

Portanto, agora, se eu atualizar, aqui está. Agora temos o glossário. Estes são todos os termos que encontrou e leu. Isto é tudo o que juntou. E agora temos uma publicação.

![A publicação final Glossary for European Portuguese no fórum do Jiki, com as traduções termo a termo e as notas.](/images/projects/build-your-personal-homepage/setting-up-the-project/portuguese-glossary.webp) Se falas português, a versão europeia, podes vir aqui e começar a dizer-me tudo o que está errado, e depois podemos começar a melhorar o glossário e a trabalhar nele. Para quem fala outros idiomas, temos glossários noutras versões, italiano, turco, e por aí fora. Já sabes como foram feitos. Podes ir fazer isto.

## Claude Code, Codex e OpenCode

Esta é a minha visão geral de como isto funciona. Agora o que quero mostrar-te é como podes preparar isto para ti.

Há muitos agentes e muitas ferramentas diferentes que podes usar. Por isso, vamos ser bem claros com a nossa linguagem aqui. O Claude Code, que é a janela em que me viste a trabalhar há bocado, é uma ferramenta de programação com agentes, talvez uma plataforma de programação com agentes. Corre no teu computador. Normalmente corre no terminal, que é como o tenho configurado. Também o podemos correr num editor de código, coisa que vamos ver daqui a pouco. E é o portal entre ti e os modelos. Mostrei-te que posso alternar entre o Opus, o Sonnet e o Haiku, e que posso alternar entre níveis de esforço.

Tudo isso acontece no teu computador local. Estás a falar no teu computador local. Ele envia dados para a Anthropic, para um dos modelos deles. O que eles devolvem não é só um bocadinho de texto que aparece no ecrã. Devolvem um monte de instruções que o Claude Code consegue interpretar para fazer coisas. Estão a dizer: vai correr este script no computador da pessoa. Vai ver esta pasta no computador da pessoa. Vai a este site e faz coisas. Todas essas instruções vêm do Claude.

Portanto, não estamos a ter uma conversa com o Opus, ou com o Sonnet, ou com o Haiku. Estamos a pôr algum texto lá dentro. Esse texto é empacotado com montes de outras coisas. É empacotado com código do nosso repositório, código que escrevemos ou que foi lá posto. É empacotado com o histórico completo da conversa, com os objetivos que estamos a tentar alcançar, com as nossas preferências sobre como gostamos de trabalhar. Tudo isso é empacotado e depois enviado para a Anthropic. Os modelos deles leem tudo isso e depois trazem instruções e algum texto de volta. Tudo isso é processado, e depois acontece este ciclo, este ciclo com agentes, em que ele faz uma coisa, volta ao Claude, o Claude responde e diz está bem, agora faz isto. Tudo isto acontece longe de nós. E depois, no fim, diz-nos: pronto, terminámos. Não conseguimos enviar a publicação do fórum por causa disto. Queres continuar? Há este ciclo enorme a acontecer nos bastidores.

Portanto, temos duas decisões. Uma decisão é que modelos queremos usar. Queremos usar a Anthropic, a OpenAI, ou outros modelos por trás? E a segunda decisão é com que ferramenta queremos interagir. Se eu usar o Claude Code, estou sempre a interagir com um dos modelos da Anthropic. Se usar o Codex, que é a versão da OpenAI, estou sempre a interagir com um dos modelos da OpenAI, um dos modelos GPT.

O que te vou recomendar usar é outra coisa, chamada OpenCode. O OpenCode é uma versão de código aberto, se quiseres, do Claude Code, uma versão de código aberto do Codex. É o suporte, a ferramenta que está no teu computador e que faz esse ciclo todo, que gere tudo. Mas consegue falar com qualquer modelo. Pode estar a falar com a Anthropic, com o Opus ou o Sonnet. Pode estar a falar com o GPT-5 e essas outras coisas. Mas também pode estar a falar com muitos modelos gratuitos. O próprio OpenCode é gratuito, e tem uma série de modelos gratuitos que também podes usar.

Chegamos ao OpenCode simplesmente estando num terminal e escrevendo `opencode`, depois de o termos instalado. E podemos escolher entre muitos modelos. Podemos escolher o Gemini, que é da Google. Podemos escolher o Opus, de que falámos há pouco, ou o Fable. Podemos escolher o Grok, se quiseres apoiar o Elon Musk. Os GPT. O DeepSeek, um modelo que ficou famoso por ter vindo da China. O Qwen, muito bom para programação. E todas estas opções aqui em cima, que são as gratuitas. Portanto, se não tens muito dinheiro, ou se só queres experimentar isto, ou se o teu trabalho não te paga uma subscrição, podes obter o OpenCode de graça e depois escolher um destes modelos gratuitos.

Tenho um guia que vou publicar e que explica como instalar o OpenCode, como te preparares de graça e quais destes modelos podes usar. Neste momento estou a recomendar o DeepSeek V4 Flash (free), mas ainda não experimentei muito nenhum destes, por isso podes experimentá-los tu e ver o que funciona melhor para ti.

Uma ressalva: estes gratuitos não são modelos de fronteira. Embora o Big Pickle seja um modelo secreto, e portanto até pode ser um modelo de fronteira, não sabemos. Mas os outros não são modelos de fronteira. Não são os melhores modelos, os do topo. Vão ser mais parecidos com o Haiku ou o Sonnet, modelos de nível mais baixo. Mas, para o ponto em que estás, acho que isso é muito bom. Porque os passos que queres estar a dar são passinhos pequeninos, em que não queres uma super inteligência a fazer tudo por ti. Queres alguém com quem possas trabalhar e conversar, com quem possas ir passinho a passinho, a perguntar como as coisas funcionam e a aprender sobre elas.

## Tokens e contexto

Deixa-me mostrar-te o OpenCode no repositório do tradutor. Isto não sabe nada sobre o meu repositório. Mas posso dizer qualquer coisa como "quantos idiomas temos até agora?" e isto vai trabalhar. É este o aspeto do OpenCode. Temos uma parte à esquerda onde ele fala. Temos a parte onde escrevemos, em baixo à esquerda. Quando está a correr, temos uma parte à direita. Podemos carregar em Ctrl+P para obter vários comandos e coisas com que podes brincar. Podes ver que isto é muito rápido. Pensou durante uns milissegundos, leu umas coisas, percebeu isto e voltou com 14 idiomas. Se destacares alguma coisa, ele copia-a para a área de transferência, o que é simpático.

![O OpenCode no terminal a responder a "How many languages do we have so far?", com um painel de contexto à direita a mostrar 10 054 tokens usados.](/images/projects/build-your-personal-homepage/setting-up-the-project/opencode-ui.webp)

Podes ver que é gratuito, por isso não gastámos nada. Mas quero que prestes um bocadinho de atenção aos números da direita. Não vou explicar em profundidade como funcionam os LLM, porque é um assunto sem fim em que não vale a pena entrar. Mas a unidade fundamental de um LLM é o token. Podes pensar num token como uma sílaba. "How" é provavelmente um token. "Language" são provavelmente três tokens: lang-u-age, qualquer coisa assim. "DeepSeek" provavelmente dois tokens. "V4" provavelmente dois tokens.

Sempre que escreves alguma coisa, ele pega no que escreveste, pega em tudo o que precisa para descobrir a resposta, e envia tudo isso para o modelo. O modelo lê, devolve, provavelmente faz uma pergunta de esclarecimento, e há um vaivém durante um bocado. Isso usa tokens. Perguntámos "quantos idiomas temos até agora?". Isso são talvez 11 tokens, talvez 15 tokens com os espaços. Quando acabou de ler, de ir buscar tudo o que precisava, de enviar aquilo e de fazer uns saltos, tinha usado 10 000 tokens. Portanto, isto enviou na prática um texto de 3000 palavras para um modelo e depois trouxe um bocadinho de volta.

Se fizermos uma pergunta maior, como "qual é o processo de adicionar um novo idioma?", ele vai ler mais ficheiros, e podes ver os tokens a subir enquanto lê. Isso acrescentou mais 6000 tokens para responder à pergunta, e já usou 10% do nosso contexto. O contexto deste modelo, o número máximo de tokens que pode ter numa conversa, é de cerca de 170 000 tokens.

Quando estiveres a trabalhar nisto, precisas de ir dando uma olhadela a esse número. À medida que usas mais e mais tokens, a conversa toda vai ficar mais lenta, porque todo esse contexto é passado ao modelo de cada vez. Se eu perguntar mais uma coisa, toda essa informação é enviada outra vez para o modelo. Toda a conversa anterior, todas as respostas anteriores. Vai tudo, a cada passo da conversa.

Uma das outras desvantagens de usar modelos gratuitos é que costumam ter um volume de conversa mais pequeno. O Opus é 1 milhão de tokens por conversa. Isto vai andar mais perto dos 150 000 ou 170 000. Por isso convém estares constantemente a começar conversas novas. Se escreveres `/new`, isso dá-te uma conversa nova. Isso faz reset aos teus tokens, mas o teu modelo também passa a não saber nada do que acabou de acontecer. Portanto, tenta ganhar o hábito de ter conversas pequenas sobre coisas diferentes.

### O Aron e a Nicole também trabalham assim no Jiki?

Sim. O Aron usa isto quase totalmente para todo o trabalho de front end que faz. A Nicole faz o mesmo para a edição de vídeo. Todos os nossos vídeos são escritos em código. Não fazemos vídeos num editor de vídeo. Fazemo-los em código, e depois ela trabalha com o Claude para construir todos os vídeos em código a partir daí.

### Os modelos gratuitos estão na nuvem?

Sim, os modelos gratuitos estão todos na nuvem. Seriam muito, muito lentos nas vossas máquinas.

### Recomendarias o Mistral?

Não sei praticamente nada sobre modelos fora da Anthropic. No dia a dia trabalho só com o Claude. Nunca o usei, por isso não sei. Pessoalmente usaria mesmo o Claude, mas provavelmente só usaria o Claude numa subscrição em que não pago por token.

## Construir a tua primeira página web

Aquela primeira metade foi um mergulho a fundo no que são os LLM, no que é a programação com agentes, no ciclo moderno que nós, programadores, usamos. É mesmo isso que espero que, ao longo dos próximos meses e do próximo ano, te vá deixar à vontade. À vontade que chegue para fazeres tudo o que te apetecer. Mas quero mesmo sublinhar, antes de continuarmos, esta ideia de que o importante é perceberes o que se passa nos bastidores.

Tenho noção de que te dei muita informação naquela primeira metade. Por isso, na segunda metade vamos ver como fazer uma página pessoal para ti. Hoje estava a pensar que íamos chegar a mais umas coisas, mas acho que vamos deixá-las para a próxima sessão. Na próxima sessão acho que vamos ver como publicar isto tudo, e vamos ver como enviá-lo para o GitHub. Tenho também uma oferta exclusiva para toda a gente que está a fazer o Jiki, em que ganhas um domínio .tech gratuito, e em breve vais poder ter também um domínio .online ou .space gratuito. Assim podes criar um site para ti com esse domínio. Vou falar mais disso na próxima sessão. Mas hoje vamos continuar a ver como construir a tua primeira página web, e a pensar um bocadinho no que isso envolve.

## VS Code

Já falámos um bocadinho de a programação com agentes ser num terminal, a escrever as tuas instruções para o Claude, ou para os modelos e ferramentas que uses. A forma antiga de fazer isto tudo era trabalhar dentro de um editor de código, um editor de texto. Houve muitos editores de texto ao longo da história, mas aquele que a maioria de nós acabou por usar hoje chama-se VS Code. Se nunca usaste um editor de texto, um editor de código, recomendo instalares o VS Code. Nos guias que estou a publicar a acompanhar isto há um guia sobre como instalar o VS Code e como o usar.

O que viste há pouco, quando me viste a percorrer ficheiros, era o VS Code. É apenas uma moldura, uma espécie de tela onde podes editar ficheiros de texto, e tem uma pequena prateleira ao lado que lista todos os teus ficheiros.

Portanto, o que vamos fazer é construir uma página pessoal. Vou começar por criar uma pasta. Vamos a Ficheiro, Abrir Pasta, e vamos criar uma pasta. Vou pô-la no meu ambiente de trabalho: "a minha nova página". Vou incentivar-te a estares no VS Code como o teu espaço principal. Por isso, cria uma pasta para ti. Se estás a acompanhar agora, podes fazer isto. Se não tens o VS Code instalado, podes pôr em pausa, ir ler o guia sobre como instalar o VS Code, e depois voltar.

Podemos abrir essa pasta e vemos que ele pergunta se confiamos nos autores. Como os autores somos nós, podemos confiar em nós próprios. E podes ver que temos algum espaço, e é aqui que os ficheiros vão aparecer, ao lado. Tens um terminal em baixo, e podemos abrir o OpenCode nesse terminal. Assim podemos ter o OpenCode em baixo e ver os ficheiros em cima. Como quero ter o ecrã grande, vou mantê-los separados por agora, com o OpenCode de um lado e todos os ficheiros do outro, só para conseguirmos ver o que se passa.

Vamos entrar na pasta nova que acabámos de criar e abrir aí o OpenCode. Alguém sugeriu experimentar outro modelo, o Big Pickle. Nunca usei o Big Pickle. Vamos experimentar e ver o que acontece. Não estamos aqui a fazer nada de complexo.

## O que é uma página web

Quero falar aqui um bocadinho sobre o que é uma página web e como funciona. Ao longo do tempo que aí vem, vamos fazer muito JavaScript, CSS, coisas complicadas. Hoje vamos fazer só o mais básico. Se já sabes alguma coisa sobre sites, isto vai parecer-te muito básico. Se não sabes nada, espero que isto seja uma boa introdução ao que vem a seguir.

Vamos falar um bocadinho sobre o que é uma página web normal, simples. Para isso podemos usar o meu site pessoal, que já existe. É bastante simples. É só algum texto numa página. Podes ir a qualquer site, clicar com o botão direito, escolher Ver código-fonte da página, e vais ver algo assim, que é um monte de coisas. Isto é HTML.

![O código-fonte HTML do site pessoal do Jeremy, a mostrar o doctype, as tags head, as meta tags e o title.](/images/projects/build-your-personal-homepage/setting-up-the-project/ihid-page-source.webp)

O HTML é famoso por ter este sinal de menor no início e este sinal de maior no fim das várias coisas. A isto chamamos uma tag head. Depois temos algum CSS. O CSS trata do estilo. Falamos disso daqui a pouco. E depois temos todo o conteúdo da página. Este é o cabeçalho. Podes ver o cabeçalho aqui, em roxo. Tem uma imagem lá dentro. `img` quer dizer imagem, com uma ligação para uma imagem. Tem algum texto, uma biografia minha, e depois mais texto dividido em parágrafos. `p` quer dizer parágrafo. Mais um bocado de informação, alguns títulos. Este é um título de nível dois, este é um título de nível um. E isto aqui em baixo é JavaScript, que te parecerá ligeiramente familiar se já fizeste o Coding Fundamentals.

Quando fizemos o bootcamp no ano passado e demos as bases de desenvolvimento web, passámos muito tempo a olhar para este HTML em grande profundidade, e para o CSS em grande profundidade. A garantir que percebias todas as tags diferentes e como funcionam. E também a perceber o CSS e como o podemos usar para dar estilo às coisas.

Isto é um exemplo de como acho que as coisas se inverteram. Agora acho que o que queremos fazer é simplesmente construir coisas, e depois olhar para o que construímos e perceber o que aquilo é. Portanto, em vez do que eu teria recomendado antes, e do que, de facto, terias de fazer antes, que era começar a escrever isto tudo, o que recomendo agora é que peçamos ao nosso LLM que nos faça uma estrutura mesmo, mesmo básica que possamos usar.

## index.html

A outra coisa a saber é que há uma convenção muito antiga de que um ficheiro chamado `index.html` é a primeira página de um site. Se fores a ihid.info/index.html, é na prática isto que vês, a página da frente. A regra é que, se não puseres nada a seguir ao domínio, ele vai ver se existe um ficheiro chamado index.html e, se existir, mostra o conteúdo dele. Este index.html é um ficheiro muito especial. Não faz nada de mágico, na verdade. É só uma norma. Mas muitos sites têm tradicionalmente isto como forma de fazer as coisas.

Portanto, se tens o OpenCode aberto, podes dizer:

> Cria um index.html com a estrutura mais básica possível para uma página, com um cabeçalho com o meu nome, Jeremy Walker, e uma linha de biografia com isto.

Temos aqui uma bifurcação. Podíamos, se quiséssemos, dizer "cria-me um site inteiro", e ele fazia isso. Mas aconteceriam duas coisas. Primeira, não seria um site que queremos. À medida que avançarmos, vamos pensar em que sites são esses, e vou mesmo desafiar-te a ires pensar num site. Falamos disso daqui a nada. Mas, além disso, ele dar-te-ia tanta coisa que não aprenderias nada com aquilo. Ao passo que assim, dando estes passinhos pequenos, é assim que vais aprender como as coisas funcionam.

Portanto, enviamos isto, e foi isto que ele escreveu. Podemos agora ver no VS Code e abrir isto. Este é o meu fluxo de trabalho quando faço isto. Tenho aqui o meu site inteiro, talvez milhares de ficheiros diferentes, e ponho o meu agente a trabalhar nos ficheiros. E depois, se precisar de verificar alguma coisa, de ver o que ele está a fazer, de editar coisas, abro aqui e dou uma vista de olhos.

E a outra coisa que podemos fazer agora que temos este ficheiro é abri-lo no Chrome. Se clicares com o botão direito no ficheiro e escolheres Abrir com o Chrome, podes ver que temos uma página que acabámos de criar. Portanto, parabéns. Construíste a tua própria página pessoal. Não é uma página muito entusiasmante nem muito boa, mas é uma página pessoal.

![A página pessoal básica aberta no Chrome. Um título com Jeremy Walker e uma linha de biografia, sem qualquer estilo.](/images/projects/build-your-personal-homepage/setting-up-the-project/first-barebones-homepage.webp)

## Perceber o que ele fez

Quero que paremos um minuto, e esta é a mentalidade em que quero sempre que estejas, a de parar um minuto para olhar para o que se passa aqui. A forma como te quero incentivar a fazer isto, agora que já construíste aquilo, é dizeres:

> Explica-me o que faz cada bocado.

Podes usar este ciclo não só para o pôr a fazer coisas, mas também para perceberes, para construíres conhecimento sobre como as coisas funcionam. Não deve ser uma pergunta assim tão complexa para ele, porque, primeiro, acabou de o escrever e, segundo, é muito simples. E ele explica. Aqui vamos nós.

A primeira linha, a tag doctype, diz ao navegador que este é um documento HTML5. Então o que se passa aqui, na verdade? O que é este HTML? Bom, este navegador é o Chrome (há outros navegadores disponíveis). Ele sabe ler um ficheiro HTML e sabe pô-lo no ecrã de uma forma que consigas ver. O HTML é uma especificação. Quer dizer _hypertext markup language_, ou seja, linguagem de marcação de hipertexto. Tem este aspeto, com um monte de tags e bocados de informação, e o Chrome, ou qualquer outro navegador, consegue ler estas tags e pô-las no ecrã.

Esquece a parte do topo por agora. Olha só aqui para baixo, para o body. Está a pôr um título e está a pôr texto de parágrafo. Este `h1` quer dizer título de nível um. E podes ver que, por ser um título de nível um, o Chrome sabe que o deve pôr um bocadinho maior e um bocadinho mais carregado. Ao passo que este `p` é um parágrafo. O Chrome sabe que o deve pôr um bocadinho mais pequeno.

Podíamos, se quiséssemos, pôr aqui outras tags. Esta é uma lista não ordenada, `ul`, e lá dentro teríamos itens de lista, `li`. Uma coisa que aconteceu desde que comecei a usar o Claude é que já não consigo escrever muito bem. E então podemos juntar várias tags, e isto dá-nos uma lista com pontos.

Portanto, esta é a anatomia, o esqueleto, de uma página web. Todas as páginas web são iguais. Se formos a jiki.io e virmos o código-fonte da página, vês que é exatamente igual. São muitas e muitas destas tags. Vemos que é a mesma coisa. Acabámos de usar uma lista não ordenada, um item de lista, uma ligação com algum texto e um ícone ao lado. É isto que o HTML é. Sempre que fizeres um site, de agora até ao fim dos tempos, estás sempre a produzir HTML para um navegador.

Vamos acabar de ler o que ele tão simpaticamente juntou. Então o que temos a seguir? Temos o doctype, que diz que este é um documento HTML. Depois dizemos, muito bem, este é o início do nosso documento HTML, e o idioma deste documento é o inglês.

Temos depois duas partes. Temos o head e temos o body.

A primeira coisa no head são os carateres que estamos a usar, e estamos a usar este conjunto de carateres chamado UTF-8. Cada um destes é um caráter. Estamos a dizer que podemos usar qualquer caráter que seja latino, romano, como estes, ou que também podemos usar emojis aqui. Se agarrarmos num emoji, podemos pô-lo diretamente neste documento, depois atualizamos e temos um emoji na página. É isto que aquilo significa. Está a dizer que estes são todos os carateres que se usam habitualmente. É o nosso conjunto de carateres padrão.

Temos também um viewport. Não precisamos de nos preocupar com isso por agora.

E temos um title. O título é Jeremy Walker. Este título é o título que aparece no topo do separador. Uma coisa em que vais pensar muito enquanto programas é em que títulos queres que apareçam ali, para que, quando as pessoas tiverem vários separadores abertos, tenham ali qualquer coisa que lhes sirva. Também podemos mudar coisas como o favicon. Podes ver que ainda não fizemos isso, por isso não temos ali nenhum ícone.

Esta secção head é tudo aquilo que não aparece no ecrã. Tudo aquilo que os motores de busca possam consultar, e outras coisas do género, fica no head. E depois o body é tudo o que está no espaço em baixo. E isto é, muito literalmente, um título, um parágrafo e uma lista.

Portanto, é isto que a explicação nos diz. A tag `html` é o elemento raiz. O head são os metadados. Metadados quer dizer apenas dados sobre a página, não coisas que vês. O charset é a codificação de carateres que faz com que os teus emojis e alguns carateres de outros idiomas apareçam. Não queremos preocupar-nos com o viewport. E depois o body é o resto que já vimos.

Para quem escreve HTML há anos, peço desculpa por isto ser tão básico, mas também aprendeste isto do zero, um dia.

## Acrescentar conteúdo a sério

Podes agora usar o teu agente para acrescentar algum HTML. Vamos buscar mais texto. Se tens um perfil no LinkedIn, talvez queiras ir buscar algum texto de lá. Aliás, vamos fazer exatamente isso. Vamos ao meu LinkedIn buscar alguma informação. E podemos dar isto ao nosso LLM. Podemos dizer:

> Aqui está alguma informação do meu LinkedIn. Estrutura-a de forma sensata por baixo do cabeçalho da página.

Damos-lhe este texto e ele vai estruturá-lo por nós. Mais uma vez, se recuarmos dois anos, terias de escrever tags à mão, escrever isto tudo. Em vez disso, temos agora a possibilidade de lhe dar simplesmente algum texto e pô-lo a criar uma estrutura sensata à volta dele. Ora, não lhe estamos aqui a pedir que dê estilo àquilo, nem que fique com um aspeto em particular. Estamos só a pedir-lhe que crie alguma estrutura à volta, algum HTML à volta. Vamos ver quão bom é o Big Pickle a fazer isto.

Depois desta primeira sessão, já agora, vou usar o Claude para a maior parte do que faço, só porque o conheço muito bem e também porque é rápido. Mas, se estás a acompanhar por tua conta, recomendo que faças isto. Se tens um LinkedIn, se tens um currículo, podes simplesmente copiar aquilo, pô-lo no OpenCode e pedir-lhe que construa esta coisa.

Pensou um bocadinho. Agora está a preparar a edição. E acrescentou o código. Aqui está. Temos agora um título de nível dois "Experience" giro, e temos a restante informação. Se formos ao Chrome e atualizarmos, vemos que temos agora um bocado de código básico bem estruturado.

![A página pessoal no Chrome, agora com uma secção Experience com entradas estruturadas para cada função.](/images/projects/build-your-personal-homepage/setting-up-the-project/homepage-with-experience.webp)

## Os teus trabalhos de casa

A próxima coisa em que temos de pensar é no aspeto que queremos que a nossa página pessoal tenha. Esta é uma questão em que quero que passes algum tempo. Vou incentivar-te muito, ao longo deste curso, a pegares numa caneta e num bloco, a sentares-te num sítio sossegado, o mais longe possível de um ecrã, e a pensares.

Vamos construir uma página pessoal para nós. Essa página tem de ter algumas coisas. Tem de ter uma apresentação de nós próprios e dos nossos interesses. Tem de ter uma página que seja o nosso currículo, o nosso CV. Vai ter uma página sobre o nosso portefólio, todos os projetos que estamos a fazer, e depois vai ter ligações para outras páginas sobre esses projetos. Portanto, vamos construir, ao longo do tempo, um site grande com várias páginas. Vamos fazer a maior parte disso na segunda sessão. Hoje estamos só a fazer esta página de apresentação. Mas quero que penses bem, com caneta e papel, e que desenhes como gostarias que fossem as várias páginas.

E pensa também um bocadinho no estilo. Vê as páginas de outras pessoas. Procura outras pessoas na comunidade do Exercism. Se olhar para o Erik Schierboom, que trabalhou connosco, ele tem uma página de entrada principal bastante simples e depois uma página "sobre", que é bastante gira, com uma coisinha simpática que aparece em baixo. Tem alguma informação sobre software, sítios onde deu palestras, e depois algumas ligações. Podes inspirar-te bastante nisso. Ou, se virmos o SleeplessByte. Talvez te lembres do DJ, se estiveste nos bootcamps ou se o conheceste como mentor. Esta é a página do DJ. Portanto, vai procurar pessoas que te interessem e inspira-te no que elas fizeram. Pensa visualmente no tipo de estilo de que gostas. E vamos falar um bocado sobre fazer imagens e como podes usar a tecnologia para as fazer.

Explora as ideias de várias pessoas. Eu sou sempre bastante fã de uma sensação muito minimalista. E, para este projeto, vou passar os próximos dias a pensar também no aspeto que quero que a minha nova página de entrada tenha, porque vou fazer esta página pessoal para mim. Vou pensar em como ela se divide. Quero uma secção para a minha fotografia. Quero uma secção onde possa ter os meus podcasts, vídeos e coisas que fiz. Quero um bocadinho de biografia, e quero um CV, um currículo. Portanto, vou pensar nessas coisas.

Os teus trabalhos de casa desta semana são pensar nisso, desenhar, e depois começar a estruturar essas páginas. Podes criar várias páginas. Podemos criar outra página, vamos chamar-lhe o meu currículo, e podemos copiar e colar o nosso conteúdo lá para dentro, apagar os bocados de que não precisamos, e mudar o título para "Currículo do Jeremy". Temos agora a nossa página index, mas também podemos agora ir a resume.html e ter aquilo como outra página.

Portanto, esta semana:

- Pensa nas várias páginas que vais querer, e no conteúdo que vais pôr nessas páginas.
- Instala o VS Code.
- Instala o OpenCode e configura um modelo.
- A trabalhar com o OpenCode, monta algumas dessas páginas.

Não te preocupes ainda com o estilo. Não quero mesmo que te metas nisso agora. Podes brincar, se quiseres, vou sempre incentivar as pessoas a serem curiosas, mas gostava de te ensinar quais são, na minha opinião, as melhores formas de fazer isso no mundo moderno. E não comeces mesmo a usar frameworks de JavaScript nem nada disso. Fica-te por HTML básico, e depois vamos acrescentar camadas em cada sessão, até ficar cada vez mais poderoso e cada vez mais complexo. Assim vais perceber como tudo acontece.

Se tiveres interesse, vai investigar um bocadinho mais sobre HTML. Descobre quais são as várias tags e o que significam. Hoje em dia, investigar pode ser tão simples como perguntar:

> Diz-me as 20 tags mais comuns.

E depois:

> Diz-me para que serve cada uma delas.

É assim que eu investigo as coisas.

Fazemos a próxima sessão daqui a uns dias. Até lá, espero que apareças com o OpenCode instalado, o VS Code instalado e uma série de páginas. Da próxima vez vamos começar a ligar essas páginas umas às outras, acrescentar navegação, acrescentar algum estilo, e também vamos publicar isto no GitHub, e talvez até arranjar-te um domínio personalizado, para que possas ter o teu próprio site pessoal num domínio, de graça. Esta semana talvez queiras também criar uma conta no GitHub, em github.com. Vou publicar guias para o VS Code, o OpenCode e o GitHub, e podes segui-los.

É este o fim desta primeira sessão. Obrigado por teres visto. Espero que tenha sido interessante. Espero que tenhas gostado. Se tiveres alguma pergunta sobre o que foi falado, aparece no fórum. Eu vou estar por lá, e estou ansioso por responder a perguntas e explorá-las. Não tenho necessariamente todas as respostas. Também adoro aprender. Por isso, pergunta o que te interessar. E fico à espera de te ver na próxima sessão.
