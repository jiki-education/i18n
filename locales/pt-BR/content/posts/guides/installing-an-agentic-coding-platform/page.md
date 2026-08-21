---
title: "Instalar uma plataforma de programação com agentes"
excerpt: "Instruções passo a passo para instalar o OpenCode, fazer login e escolher um modelo de IA, incluindo opções que não custam nada."
tags: ["agentic-coding", "installation"]
seo:
  description: "Um guia para iniciantes sobre a instalação do OpenCode, a plataforma de programação com agentes que recomendamos, com opções gratuitas de modelos de IA através do Zen e o plano Go de baixo custo."
  keywords:
    [
      "opencode",
      "instalar opencode",
      "programação com agentes",
      "assistente de programação com IA",
      "opencode zen",
      "opencode go",
      "programação gratuita com IA",
      "vscode"
    ]
en_md5: a5c3efc92432a167085818beba5b6bc7
---

## Introdução

Uma plataforma de programação com agentes é uma ferramenta que permite que uma IA trabalhe no código com você: ela lê arquivos, faz alterações e executa comandos no seu computador. Se essa frase é novidade para você, comece pelo nosso guia sobre [o que é a programação com agentes](/guides/what-is-agentic-coding) e volte aqui quando tudo estiver pronto para instalar uma.

Este guia te explica passo a passo como instalar o **OpenCode**, fazer login e escolher um modelo de IA. Você só precisa fazer isso uma vez, e pode fazer tudo sem gastar dinheiro.

## Por que recomendamos o OpenCode

Existem várias boas ferramentas de programação com agentes, incluindo o Claude Code (Anthropic) e o Codex (OpenAI). Todas têm um uso muito parecido, então nada do que você aprender será desperdiçado se mudar mais tarde. Dito isso, recomendamos o **[OpenCode](https://opencode.ai)** enquanto você está aprendendo, por três razões:

- **Você pode usá-lo gratuitamente.** É atualmente a única ferramenta do gênero com um plano gratuito confiável, estável e realmente utilizável, e é improvável que esse plano desapareça.
- **Funciona com quase todos os modelos de IA.** Você pode começar pelos modelos gratuitos e experimentar modelos mais avançados mais tarde, se quiser explorar, tudo sem mudar de ferramenta.
- **Roda no terminal**, que é como a maioria dos desenvolvedores profissionais usa essas ferramentas, então você está aprendendo do jeito "real". E você pode executá-lo dentro do VS Code, para que fique bem do lado do seu código.

Você pode usar o OpenCode de duas formas, e este guia te prepara para as duas:

- **Sozinho**, em qualquer janela de terminal.
- **Integrado no VS Code**, onde ele abre num painel ao lado do seu código e consegue ver em que arquivo você está trabalhando. É o que recomendamos: você vê as alterações do agente aparecendo no seu editor à medida que ele as faz. (Não sabe o que é o VS Code? É o nosso [editor de código recomendado](/guides/using-a-code-editor).)

## Quanto custa

O OpenCode em si não custa nada. O que você pode optar por pagar é o modelo de IA que faz o raciocínio. Quando você conectar o OpenCode a um modelo, vai ver duas opções da equipe do OpenCode:

- **Zen** oferece um pequeno conjunto de modelos sem custo. Eles são gratuitos porque as empresas que estão por trás deles os estão promovendo, o que significa que a seleção muda ao longo do tempo, e as suas conversas podem ser usadas para ajudar a melhorar os modelos. É uma contrapartida aceitável para exercícios de aprendizado, mas não cole nada privado nem pessoal nessas conversas.
- **Go** é uma assinatura: **10 $/mês** (com o primeiro mês a 5 $) para acesso generoso a um conjunto de modelos muito mais forte. Você não precisa disso no primeiro dia. Comece pelos modelos gratuitos do Zen e faça o upgrade se começar a esbarrar nos limites deles.

## Que modelo devo escolher?

Se você nem sabe bem o que é um "modelo", o nosso guia sobre [os conceitos-chave da programação com agentes](/guides/key-agentic-coding-concepts) explica isso direitinho. Em resumo: o modelo é o verdadeiro "cérebro" da IA, e há modelos mais inteligentes, mais rápidos ou mais baratos do que outros.

Dentro do OpenCode, você pode trocar de modelo a qualquer momento; basta escrever `/models`. O nosso conselho:

- **No plano gratuito**, experimente os modelos gratuitos disponíveis e veja com qual você se dá melhor. A lista muda conforme as promoções vão e vêm, então não vamos fingir que sabemos o que você vai ver, mas, no momento em que escrevemos, o **DeepSeek V4 Flash** é uma excelente opção gratuita.
- **No plano Go**, os modelos focados em programação (no momento em que escrevemos, Kimi K2.7 Code, GLM-5.2 e a família Qwen 3.7) são todos fortes. Escolha um e só se preocupe em compará-los depois de saber o básico.

Não perca tempo com isso. Para os exercícios que você vai fazer enquanto aprende, qualquer modelo disponível é mais do que capaz.

## Antes de começar

Você precisa ter duas coisas prontas:

- **VS Code**, para poder usar o OpenCode integrado no seu editor. Se você ainda não instalou, siga o nosso guia sobre [instalar o VS Code](/guides/installing-vscode).
- **Só no Windows: WSL.** A versão de terminal do OpenCode funciona melhor no Linux, e o WSL dá ao seu computador Windows um terminal Linux de verdade. Siga primeiro o nosso guia sobre [instalar o WSL](/guides/installing-wsl), incluindo a seção "Usar o WSL a partir do VS Code" no final. Depois volte aqui. No macOS e no Linux não há nada a mais para instalar.

## Instalar o OpenCode

Instalar o OpenCode é um único comando no terminal. Se você nunca usou um terminal, essa é uma boa primeira experiência: você escreve uma instrução e o computador faz o trabalho.

### Windows

1. Abra o VS Code, conecte-o ao WSL (Ctrl+Shift+P e depois **WSL: Connect to WSL**) e abra um terminal (menu Terminal e depois **New Terminal**).
2. Copie e cole este comando no terminal e pressione Enter:
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. Quando terminar, feche o terminal, abra um novo e escreva `opencode --version` seguido de Enter. Se aparecer um número de versão, está feito.

### macOS

1. Abra o **Terminal** (pressione Cmd+Space, escreva "terminal" e pressione Enter) ou abra um terminal dentro do VS Code (menu Terminal e depois **New Terminal**).
2. Copie e cole este comando no terminal e pressione Enter:
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. Quando terminar, feche o terminal, abra um novo e escreva `opencode --version` seguido de Enter. Se aparecer um número de versão, está feito.

### Linux

1. Abra o seu terminal ou abra um dentro do VS Code (menu Terminal e depois **New Terminal**).
2. Copie e cole este comando no terminal e pressione Enter:
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. Quando terminar, feche o terminal, abra um novo e escreva `opencode --version` seguido de Enter. Se aparecer um número de versão, está feito.

<!-- SCREENSHOT: terminal after the install script has completed -->

## Iniciar o OpenCode pela primeira vez

Agora abra o OpenCode e conecte-o ao Zen, para que ele tenha um modelo com quem conversar:

1. No VS Code, abra uma pasta com algum código dentro dela (qualquer um dos seus projetos de treino é perfeito) e abra um terminal (menu Terminal e depois **New Terminal**).
2. Escreva `opencode` e pressione Enter. A interface do OpenCode vai aparecer no painel do terminal, bem ao lado do seu código. (Na primeira vez que você fizer isso, ele também instala uma pequena extensão do VS Code que conecta os dois, para que o OpenCode possa ver qual arquivo você tem aberto.)
3. Na primeira vez que você executar, vai aparecer uma lista com o título "Connect a provider". (Se não aparecer, escreva `/connect` para fazê-la aparecer.) Use as teclas de setas para escolher **OpenCode Zen (Recommended)** e pressione Enter.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/connect-a-provider.webp" alt="Tela 'Connect a provider' do OpenCode, com a opção OpenCode Zen (Recommended) em destaque no topo da lista" />
  <figcaption>Escolha o OpenCode Zen na lista de fornecedores.</figcaption>
</figure>

4. Depois, ele vai te pedir uma **chave de API**: um código longo que prova quem você é, um pouco como uma senha. Para conseguir uma, abra <a href="https://opencode.ai/zen" target="_blank" rel="noopener noreferrer">opencode.ai/zen</a> no seu navegador e crie uma conta gratuita. Não são necessários dados de pagamento. Copie a chave que você receber, cole no terminal e pressione Enter.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-api-key.webp" alt="O OpenCode pedindo uma chave de API, com instruções para ir a opencode.ai/zen para conseguir uma" />
  <figcaption>Consiga a sua chave em opencode.ai/zen e cole aqui.</figcaption>
</figure>

5. Por fim, ele vai te mostrar a lista de modelos, com os gratuitos marcados como **Free** à direita. Escolha um desses (como dissemos acima, no momento em que escrevemos, o **DeepSeek V4 Flash Free** é uma excelente escolha). Você pode trocar de modelo sempre que quiser; basta escrever `/models`.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-model-list.webp" alt="Lista de modelos do OpenCode Zen, com os modelos gratuitos marcados como Free à direita e o DeepSeek V4 Flash Free em destaque" />
  <figcaption>Os modelos gratuitos estão marcados à direita. Aqui estamos escolhendo o DeepSeek V4 Flash Free.</figcaption>
</figure>

## A sua primeira conversa

Agora peça alguma coisa para ele. Escreva uma mensagem como:

> Olhe para os arquivos desta pasta e explique o que eles fazem.

Observe o que acontece. Ele vai ler arquivos, pensar e te responder, e vai pedir a sua permissão antes de alterar alguma coisa. Esse ciclo de ler, agir e verificar é o coração da programação com agentes.

<figure class="post-figure" style="max-width:700px">
  <img src="/images/guides/installing-an-agentic-coding-platform/first-conversation.webp" alt="O OpenCode lendo os arquivos de um projeto um a um, pensando e explicando o que faz cada pasta e arquivo de nível superior" />
  <figcaption>O OpenCode lê os arquivos do projeto, pensa e te responde sobre o que encontra.</figcaption>
</figure>

O mesmo funciona em qualquer terminal, com ou sem VS Code. Abra um terminal, entre numa pasta de projeto, escreva `opencode` e pronto. Tem gente que adora trabalhar assim. Experimente as duas e veja qual se adapta melhor a você.

É isso. Agora você tem um ambiente de programação com agentes funcionando e que não custa nada. Para entender o que acontece de verdade nos bastidores, e o que significam palavras como tokens e contexto, continue para [os conceitos-chave da programação com agentes](/guides/key-agentic-coding-concepts).
