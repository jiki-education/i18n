---
title: "Conceitos-chave da programação com agentes"
excerpt: "Modelos, tokens, janelas de contexto e as demais noções de que você precisa para usar bem agentes de programação com IA."
tags: ["agentic-coding"]
seo:
  description: "Os conceitos fundamentais por trás da programação com agentes, explicados para iniciantes: o que são os modelos de IA e os tokens, como funcionam as janelas de contexto e por que os agentes às vezes erram."
  keywords: ["conceitos de programação com agentes", "llm", "tokens", "janela de contexto", "modelos de ia", "prompts", "alucinações"]
en_md5: d963e01d7934f4003d436029d1808fc8
---

## Introdução

Nesta fase, partimos do princípio de que você tem o OpenCode ou um equivalente instalado. Se não, comece seguindo o nosso guia sobre [como instalar uma plataforma de programação com agentes](/guides/installing-an-agentic-coding-platform).

Você pode usar uma ferramenta de programação com agentes sem entender como ela funciona, da mesma forma que pode dirigir um carro sem saber o que faz a embreagem. Mas um pouco de entendimento faz uma grande diferença. Explica por que a ferramenta às vezes parece brilhante e outras vezes parece desconcertante, por que algumas coisas custam dinheiro e como obter resultados muito melhores. São estes os conceitos que vale a pena conhecer.

## Modelos

O **modelo** (ou LLM, de "large language model") é a IA propriamente dita. Ferramentas como o OpenCode e o Claude Code não são inteligentes por si só. São a estrutura de suporte: reúnem o seu pedido e o seu código, enviam tudo para um modelo e agem conforme o que recebem. O modelo é o "cérebro".

Existem muitos modelos, criados por empresas diferentes, e eles se distinguem em três aspectos que interessam a você:

- **Capacidade.** Modelos maiores e mais recentes são melhores para entender problemas confusos e escrever código correto. Os melhores, muitas vezes chamados de modelos "de ponta", são claramente mais inteligentes do que os demais.
- **Velocidade.** Modelos menores respondem mais rápido. Para perguntas simples, um modelo rápido costuma proporcionar uma experiência mais agradável.
- **Custo.** Os melhores modelos podem custar cinquenta vezes mais para executar do que outros perfeitamente aceitáveis. É por isso que os planos gratuitos usam modelos menores ou promocionais.

Não existe um "melhor modelo" definitivo. A tabela de classificação se reorganiza de poucos em poucos meses, o que é uma das razões pelas quais recomendamos uma ferramenta que deixe você mudar livremente de modelo (no OpenCode, escreva `/models`).

## Tokens

Os modelos não leem letras nem palavras. Leem **tokens**: pequenos blocos de texto, em média cerca de três quartos de palavra cada um. "Understanding" é um token. "Misunderstanding" pode ser três. Tudo o que você envia a um modelo é dividido em tokens, e tudo o que ele escreve volta token a token. É por isso que você vê as respostas aparecendo como um fluxo de palavras, e não tudo de uma vez.

Os tokens importam por uma grande razão: **são aquilo que você paga**. Os preços dos modelos são indicados por milhão de tokens, tanto para o que o modelo lê ("entrada") como para o que escreve ("saída"). Quando um agente lê cinco arquivos do seu código, isso pode representar dezenas de milhares de tokens de entrada. É por esta razão que os planos gratuitos têm limites e que um agente trabalhando num projeto grande custa mais do que outro que responde a uma pergunta rápida.

## A janela de contexto

Um modelo não tem memória. Cada vez que você envia uma mensagem, a ferramenta reenvia _toda a conversa até o momento_, mais todos os arquivos que o agente leu. A **janela de contexto** do modelo é a quantidade máxima que ele pode receber de uma só vez: a sua memória de trabalho, medida em tokens.

Daqui decorrem duas consequências práticas:

- **As sessões longas se degradam.** À medida que uma conversa cresce, o contexto se enche de desvios antigos e de conteúdos de arquivos desatualizados. Os modelos ficam comprovadamente piores em prestar atenção quando o contexto está sobrecarregado. Quando um agente começa a cometer erros bobos numa sessão longa, muitas vezes não é por ser limitado: ele está se afogando.
- **Recomeçar é grátis.** Começar uma sessão nova com um pedido claro e bem formulado costuma ser melhor do que insistir numa sessão confusa. Não seja sentimental em relação ao seu histórico de conversa.

## Prompts

O seu **prompt** é aquilo que você escreve ao modelo. A habilidade com maior impacto na programação com agentes é escrever bons prompts. A diferença entre "corrige o meu código" e "os testes nesta pasta falham com esta mensagem de erro, e eu esperava que a função retornasse 5, e não 3" é a diferença entre o agente estar adivinhando e o agente saber.

Um bom prompt diz três coisas: o que você está tentando alcançar, o que está realmente acontecendo e o que você já tentou. Exatamente aquilo que você gostaria de ouvir de um colega que pedisse ajuda a você.

## O laço do agente

O que separa um agente de um chatbot é o **laço**. Quando você dá uma tarefa a um agente, ele não se limita a responder. Ele trabalha:

1. Decide o que precisa saber e usa **ferramentas** (ler arquivos, buscar, executar comandos) para descobrir.
2. Faz uma alteração.
3. Verifica o próprio trabalho, normalmente executando o seu código ou os seus testes.
4. Se algo falhou, volta ao passo 1 com a nova informação.

Observar este laço é verdadeiramente instrutivo: é um bom modelo de como os desenvolvedores experientes trabalham de fato. Investigar, alterar uma coisa, verificar, repetir. O seu papel durante o laço é a supervisão. A ferramenta vai te pedir autorização antes de fazer algo significativo, e você deve ler o que ela está propondo em vez de aprovar tudo automaticamente.

## Alucinações, ou: o modelo às vezes está errado com confiança

Os modelos não sabem as coisas da mesma forma que você. Eles geram a resposta com aparência mais plausível e, às vezes, a resposta com aparência mais plausível está simplesmente errada: uma função que não existe, uma definição que nunca existiu, uma explicação que parece irrefutável mas que na realidade está incorreta. É a isso que se chama **alucinação**, e isso nunca desaparece por completo, nem nos melhores modelos.

A defesa é a mesma que os profissionais usam: **nunca confie, sempre verifique**. Execute o código. Leia a alteração antes de aceitar. Se uma explicação for importante, peça ao modelo que te mostre a linha de código em que ele se baseia. Os agentes são muito menos propensos a isso do que os chatbots, precisamente porque o laço deles envolve executar coisas e ver resultados reais, mas o hábito de verificar é algo que você deve criar desde o primeiro dia.

## Privacidade

Há mais uma coisa que vale a pena saber, sobretudo nos planos gratuitos: os modelos gratuitos costumam ser gratuitos porque as empresas que estão por trás deles coletam conversas para melhorar os seus modelos. Para exercícios de aprendizado, é um acordo perfeitamente aceitável. Mas trate tudo o que você enviar a um modelo gratuito como potencialmente público: nada de senhas, nada de informações pessoais e, mais tarde na sua carreira, nada de código privado de uma empresa sem verificar as regras.

## Esta é a base

Os modelos são os "cérebros", os tokens são a moeda, o contexto é a memória, os prompts são o volante e o laço é o que faz dele um agente. Todo o resto você vai aprender colocando a mão na massa, o que é exatamente aquilo que sugerimos que você faça. Se você ainda não configurou uma ferramenta, o nosso [guia de instalação](/guides/installing-an-agentic-coding-platform) vai deixar tudo pronto em dez minutos. Depois, assista à primeira sessão de [Noções Básicas de Frontend](/build/frontend-basics/setting-up-the-project) no curso Aprenda a Construir para ver tudo em ação.
