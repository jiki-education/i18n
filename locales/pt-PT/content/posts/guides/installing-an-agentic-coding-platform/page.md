---
title: "Instalar uma plataforma de programação com agentes"
excerpt: "Instruções passo a passo para instalar o OpenCode, iniciar sessão e escolher um modelo de IA, incluindo opções que não custam nada."
tags: ["agentic-coding", "installation"]
seo:
  description: "Um guia para principiantes sobre a instalação do OpenCode, a plataforma de programação com agentes que recomendamos, com opções gratuitas de modelos de IA através do Zen e o plano Go de baixo custo."
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

Uma plataforma de programação com agentes é uma ferramenta que permite que uma IA trabalhe no código contigo: lê ficheiros, faz alterações e executa comandos no teu computador. Se esta frase é novidade para ti, começa pelo nosso guia sobre [o que é a programação com agentes](/guides/what-is-agentic-coding) e volta aqui quando estiveres pronto para instalar uma.

Este guia explica-te passo a passo como instalar o **OpenCode**, iniciar sessão e escolher um modelo de IA. Só precisas de fazer isto uma vez e podes fazer tudo sem gastar dinheiro.

## Porque recomendamos o OpenCode

Existem várias boas ferramentas de programação com agentes, incluindo o Claude Code (Anthropic) e o Codex (OpenAI). Todas têm uma utilização muito semelhante, por isso nada do que aprenderes será desperdiçado se mudares mais tarde. Dito isto, recomendamos o **[OpenCode](https://opencode.ai)** enquanto estás a aprender, por três razões:

- **Podes usá-lo gratuitamente.** É atualmente a única ferramenta do género com um plano gratuito fiável, estável e realmente utilizável, e é improvável que esse plano desapareça.
- **Funciona com quase todos os modelos de IA.** Podes começar pelos modelos gratuitos e experimentar modelos mais avançados mais tarde, se quiseres explorar, tudo sem mudar de ferramenta.
- **Corre no terminal**, que é como a maioria dos programadores profissionais usa estas ferramentas, por isso estás a aprender a forma "real". E podes executá-lo dentro do VS Code, para que fique mesmo ao lado do teu código.

Podes usar o OpenCode de duas formas, e este guia prepara-te para ambas:

- **Sozinho**, em qualquer janela de terminal.
- **Integrado no VS Code**, onde abre num painel ao lado do teu código e consegue ver em que ficheiro estás a trabalhar. É o que recomendamos: vês as alterações do agente a aparecerem no teu editor à medida que as faz. (Não sabes o que é o VS Code? É o nosso [editor de código recomendado](/guides/using-a-code-editor).)

## Quanto custa

O OpenCode em si não custa nada. O que podes optar por pagar é o modelo de IA que faz o raciocínio. Quando ligares o OpenCode a um modelo, verás duas opções da equipa do OpenCode:

- **Zen** oferece um pequeno conjunto de modelos sem custos. São gratuitos porque as empresas que estão por trás deles os estão a promover, o que significa que a seleção muda ao longo do tempo, e as tuas conversas podem ser usadas para ajudar a melhorar os modelos. É uma contrapartida aceitável para exercícios de aprendizagem, mas não coles nada privado nem pessoal nessas conversas.
- **Go** é uma subscrição: **10 $/mês** (com o primeiro mês a 5 $) para acesso generoso a um conjunto muito mais forte de modelos. Não precisas disto no primeiro dia. Começa pelos modelos gratuitos do Zen e faz o upgrade se começares a esbarrar nos limites deles.

## Que modelo devo escolher?

Se nem sabes bem o que é um "modelo", o nosso guia sobre [os conceitos-chave da programação com agentes](/guides/key-agentic-coding-concepts) explica-o como deve ser. Em resumo: o modelo é o verdadeiro "cérebro" da IA, e há modelos mais inteligentes, mais rápidos ou mais baratos do que outros.

Dentro do OpenCode, podes mudar de modelo a qualquer momento; basta escreveres `/models`. O nosso conselho:

- **No plano gratuito**, experimenta os modelos gratuitos disponíveis e vê com qual te dás melhor. A lista muda conforme as promoções vão e vêm, por isso não vamos fingir que sabemos o que vais ver, mas, à data de escrita, o **DeepSeek V4 Flash** é uma excelente opção gratuita.
- **No plano Go**, os modelos focados em programação (à data de escrita, Kimi K2.7 Code, GLM-5.2 e a família Qwen 3.7) são todos fortes. Escolhe um e só te preocupes em compará-los depois de saberes o básico.

Não percas tempo com isto. Para os exercícios que vais fazer enquanto aprendes, qualquer modelo disponível é mais do que capaz.

## Antes de começares

Precisas de ter duas coisas prontas:

- **VS Code**, para poderes usar o OpenCode integrado no teu editor. Se ainda não o instalaste, segue o nosso guia sobre [instalar o VS Code](/guides/installing-vscode).
- **Só no Windows: WSL.** A versão de terminal do OpenCode funciona melhor em Linux, e o WSL dá ao teu computador Windows um terminal Linux a sério. Segue primeiro o nosso guia sobre [instalar o WSL](/guides/installing-wsl), incluindo a secção "Usar o WSL a partir do VS Code" no final. Depois volta aqui. No macOS e no Linux não há nada adicional para instalar.

## Instalar o OpenCode

Instalar o OpenCode é um único comando no terminal. Se nunca usaste um terminal, esta é uma boa primeira experiência: escreves uma instrução e o computador faz o trabalho.

### Windows

1. Abre o VS Code, liga-o ao WSL (Ctrl+Shift+P e depois **WSL: Connect to WSL**) e abre um terminal (menu Terminal e depois **New Terminal**).
2. Copia e cola este comando no terminal e carrega em Enter:
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. Quando terminar, fecha o terminal, abre um novo e escreve `opencode --version` seguido de Enter. Se mostrar um número de versão, está feito.

### macOS

1. Abre o **Terminal** (prime Cmd+Space, escreve "terminal" e carrega em Enter) ou abre um terminal dentro do VS Code (menu Terminal e depois **New Terminal**).
2. Copia e cola este comando no terminal e carrega em Enter:
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. Quando terminar, fecha o terminal, abre um novo e escreve `opencode --version` seguido de Enter. Se mostrar um número de versão, está feito.

### Linux

1. Abre o teu terminal ou abre um dentro do VS Code (menu Terminal e depois **New Terminal**).
2. Copia e cola este comando no terminal e carrega em Enter:
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. Quando terminar, fecha o terminal, abre um novo e escreve `opencode --version` seguido de Enter. Se mostrar um número de versão, está feito.

<!-- SCREENSHOT: terminal after the install script has completed -->

## Iniciar o OpenCode pela primeira vez

Agora abre o OpenCode e liga-o ao Zen, para que tenha um modelo com que falar:

1. No VS Code, abre uma pasta com algum código lá dentro (qualquer um dos teus projetos de treino é perfeito) e abre um terminal (menu Terminal e depois **New Terminal**).
2. Escreve `opencode` e carrega em Enter. A interface do OpenCode vai aparecer no painel do terminal, mesmo ao lado do teu código. (Na primeira vez que fizeres isto, também instala uma pequena extensão do VS Code que liga os dois, para que o OpenCode possa ver que ficheiro tens aberto.)
3. Na primeira vez que o executares, vai aparecer uma lista com o título "Connect a provider". (Se não aparecer, escreve `/connect` para a fazer aparecer.) Usa as teclas de setas para escolher **OpenCode Zen (Recommended)** e carrega em Enter.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/connect-a-provider.webp" alt="Ecrã 'Connect a provider' do OpenCode, com a opção OpenCode Zen (Recommended) em destaque no topo da lista" />
  <figcaption>Escolhe o OpenCode Zen na lista de fornecedores.</figcaption>
</figure>

4. Depois, vai pedir-te uma **chave de API**: um código longo que prova quem és, um pouco como uma palavra-passe. Para obteres uma, abre <a href="https://opencode.ai/zen" target="_blank" rel="noopener noreferrer">opencode.ai/zen</a> no teu navegador e cria uma conta gratuita. Não são necessários dados de pagamento. Copia a chave que te for dada, cola-a no terminal e carrega em Enter.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-api-key.webp" alt="O OpenCode a pedir uma chave de API, com instruções para ires a opencode.ai/zen para obteres uma" />
  <figcaption>Obtém a tua chave em opencode.ai/zen e cola-a aqui.</figcaption>
</figure>

5. Por fim, vai mostrar-te a lista de modelos, com os gratuitos marcados como **Free** à direita. Escolhe um desses (como dissemos acima, à data de escrita, o **DeepSeek V4 Flash Free** é uma excelente escolha). Podes mudar de modelo sempre que quiseres; basta escreveres `/models`.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-model-list.webp" alt="Lista de modelos do OpenCode Zen, com os modelos gratuitos marcados como Free à direita e o DeepSeek V4 Flash Free em destaque" />
  <figcaption>Os modelos gratuitos estão marcados à direita. Aqui estamos a escolher o DeepSeek V4 Flash Free.</figcaption>
</figure>

## A tua primeira conversa

Agora pede-lhe alguma coisa. Escreve uma mensagem como:

> Olha para os ficheiros desta pasta e explica o que fazem.

Observa o que acontece. Vai ler ficheiros, pensar e responder-te, e vai pedir a tua permissão antes de alterar alguma coisa. Esse ciclo de ler, agir e verificar é o coração da programação com agentes.

<figure class="post-figure" style="max-width:700px">
  <img src="/images/guides/installing-an-agentic-coding-platform/first-conversation.webp" alt="O OpenCode a ler os ficheiros de um projeto um a um, a pensar e a explicar o que faz cada pasta e ficheiro de nível superior" />
  <figcaption>O OpenCode lê os ficheiros do projeto, pensa e responde-te sobre o que encontra.</figcaption>
</figure>

O mesmo funciona em qualquer terminal, com ou sem VS Code. Abre um terminal, entra numa pasta de projeto, escreve `opencode` e já está. Há quem adore trabalhar assim. Experimenta ambas e vê qual se adapta melhor a ti.

É tudo. Tens agora um ambiente de programação com agentes a funcionar e que não custa nada. Para perceberes o que acontece realmente nos bastidores, e o que significam palavras como tokens e contexto, continua para [os conceitos-chave da programação com agentes](/guides/key-agentic-coding-concepts).
