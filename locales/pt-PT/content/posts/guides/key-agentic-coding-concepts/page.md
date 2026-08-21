---
title: "Conceitos-chave da programação com agentes"
excerpt: "Modelos, tokens, janelas de contexto e as restantes noções de que precisas para usar bem agentes de programação com IA."
tags: ["agentic-coding"]
seo:
  description: "Os conceitos fundamentais por trás da programação com agentes, explicados para principiantes: o que são os modelos de IA e os tokens, como funcionam as janelas de contexto e porque é que os agentes às vezes erram."
  keywords: ["conceitos de programação com agentes", "llm", "tokens", "janela de contexto", "modelos de ia", "prompts", "alucinações"]
en_md5: d963e01d7934f4003d436029d1808fc8
---

## Introdução

Nesta fase, partimos do princípio de que tens o OpenCode ou um equivalente instalado. Se não, começa por seguir o nosso guia sobre [como instalar uma plataforma de programação com agentes](/guides/installing-an-agentic-coding-platform).

Podes usar uma ferramenta de programação com agentes sem compreenderes como funciona, da mesma forma que podes conduzir um carro sem saberes o que faz a embraiagem. Mas um pouco de compreensão faz uma grande diferença. Explica porque é que a ferramenta às vezes parece brilhante e outras vezes parece desconcertante, porque é que algumas coisas custam dinheiro e como obter resultados muito melhores. São estes os conceitos que vale a pena conhecer.

## Modelos

O **modelo** (ou LLM, de "large language model") é a IA propriamente dita. Ferramentas como o OpenCode e o Claude Code não são inteligentes por si só. São a estrutura de suporte: reúnem o teu pedido e o teu código, enviam tudo para um modelo e agem consoante o que recebem. O modelo é o "cérebro".

Existem muitos modelos, criados por empresas diferentes, e distinguem-se em três aspetos que te interessam:

- **Capacidade.** Modelos maiores e mais recentes são melhores a compreender problemas confusos e a escrever código correto. Os melhores, muitas vezes chamados modelos "de ponta", são claramente mais inteligentes do que os restantes.
- **Velocidade.** Modelos mais pequenos respondem mais depressa. Para perguntas simples, um modelo rápido costuma proporcionar uma experiência mais agradável.
- **Custo.** Os melhores modelos podem custar cinquenta vezes mais para executar do que outros perfeitamente aceitáveis. É por isso que os planos gratuitos usam modelos mais pequenos ou promocionais.

Não existe um "melhor modelo" definitivo. A tabela de classificação reorganiza-se de poucos em poucos meses, o que é uma das razões pelas quais recomendamos uma ferramenta que te permita mudar livremente de modelo (no OpenCode, escreve `/models`).

## Tokens

Os modelos não leem letras nem palavras. Leem **tokens**: pequenos blocos de texto, em média cerca de três quartos de palavra cada um. "Understanding" é um token. "Misunderstanding" pode ser três. Tudo o que envias a um modelo é dividido em tokens, e tudo o que ele escreve volta token a token. É por isso que vês as respostas a aparecer como um fluxo de palavras, e não tudo de uma vez.

Os tokens importam por uma grande razão: **são aquilo que pagas**. Os preços dos modelos são indicados por milhão de tokens, tanto para o que o modelo lê ("entrada") como para o que escreve ("saída"). Quando um agente lê cinco ficheiros do teu código, isso pode representar dezenas de milhares de tokens de entrada. É por esta razão que os planos gratuitos têm limites e que um agente a trabalhar num projeto grande custa mais do que outro que responde a uma pergunta rápida.

## A janela de contexto

Um modelo não tem memória. De cada vez que envias uma mensagem, a ferramenta reenvia _toda a conversa até ao momento_, mais todos os ficheiros que o agente leu. A **janela de contexto** do modelo é a quantidade máxima que pode receber de uma só vez: a sua memória de trabalho, medida em tokens.

Daqui decorrem duas consequências práticas:

- **As sessões longas degradam-se.** À medida que uma conversa cresce, o contexto enche-se de desvios antigos e de conteúdos de ficheiros desatualizados. Os modelos ficam comprovadamente piores a prestar atenção quando o contexto está sobrecarregado. Quando um agente começa a cometer erros disparatados numa sessão longa, muitas vezes não é por ser limitado: está a afogar-se.
- **Recomeçar é grátis.** Começar uma sessão nova com um pedido claro e bem formulado costuma ser melhor do que insistir numa sessão confusa. Não sejas sentimental em relação ao teu histórico de conversa.

## Prompts

O teu **prompt** é aquilo que escreves ao modelo. A competência com maior impacto na programação com agentes é escrever bons prompts. A diferença entre "corrige o meu código" e "os testes nesta pasta falham com esta mensagem de erro, e eu esperava que a função devolvesse 5, e não 3" é a diferença entre o agente estar a adivinhar e o agente saber.

Um bom prompt diz três coisas: o que estás a tentar alcançar, o que está realmente a acontecer e o que já tentaste. Exatamente aquilo que gostarias de ouvir de um colega que te pedisse ajuda.

## O ciclo do agente

O que separa um agente de um chatbot é o **ciclo**. Quando dás uma tarefa a um agente, ele não se limita a responder. Ele trabalha:

1. Decide o que precisa de saber e usa **ferramentas** (ler ficheiros, pesquisar, executar comandos) para descobrir.
2. Faz uma alteração.
3. Verifica o próprio trabalho, normalmente executando o teu código ou os teus testes.
4. Se algo falhou, volta ao passo 1 com a nova informação.

Observar este ciclo é verdadeiramente instrutivo: é um bom modelo de como os programadores experientes trabalham de facto. Investigar, alterar uma coisa, verificar, repetir. O teu papel durante o ciclo é a supervisão. A ferramenta vai pedir-te autorização antes de fazer algo significativo, e deves ler o que ela está a propor em vez de aprovares tudo automaticamente.

## Alucinações, ou: o modelo às vezes está errado com confiança

Os modelos não sabem as coisas da mesma forma que tu. Geram a resposta com aparência mais plausível e, por vezes, a resposta com aparência mais plausível está simplesmente errada: uma função que não existe, uma definição que nunca existiu, uma explicação que parece irrefutável mas que na realidade está incorreta. É a isto que se chama **alucinação**, e nunca desaparece por completo, nem nos melhores modelos.

A defesa é a mesma que os profissionais usam: **nunca confies, verifica sempre**. Executa o código. Lê a alteração antes de a aceitares. Se uma explicação for importante, pede ao modelo que te mostre a linha de código em que se baseia. Os agentes são muito menos propensos a isto do que os chatbots, precisamente porque o seu ciclo envolve executar coisas e ver resultados reais, mas o hábito de verificar é algo que deves criar desde o primeiro dia.

## Privacidade

Há mais uma coisa que vale a pena saber, sobretudo nos planos gratuitos: os modelos gratuitos costumam ser gratuitos porque as empresas que estão por trás deles recolhem conversas para melhorar os seus modelos. Para exercícios de aprendizagem, é um acordo perfeitamente aceitável. Mas trata tudo o que enviares a um modelo gratuito como potencialmente público: nada de palavras-passe, nada de informações pessoais e, mais tarde na tua carreira, nada de código privado de uma empresa sem verificares as regras.

## Esta é a base

Os modelos são os "cérebros", os tokens são a moeda, o contexto é a memória, os prompts são o volante e o ciclo é o que faz dele um agente. Todo o resto vais aprender pondo as mãos na massa, o que é exatamente aquilo que te sugerimos que faças. Se ainda não configuraste uma ferramenta, o nosso [guia de instalação](/guides/installing-an-agentic-coding-platform) vai deixar-te pronto em dez minutos. Depois, vê a primeira sessão de [Noções Básicas de Frontend](/build/frontend-basics/setting-up-the-project) no curso Aprende a Construir para veres tudo em ação.
