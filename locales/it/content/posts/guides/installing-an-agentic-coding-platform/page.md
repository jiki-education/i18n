---
title: "Installare una piattaforma di agentic coding"
excerpt: "Istruzioni passo passo per installare OpenCode, effettuare l'accesso e scegliere un modello IA, con opzioni che non costano nulla."
tags: ["agentic-coding", "installazione"]
seo:
  description: "Una guida per principianti all'installazione di OpenCode, la piattaforma di agentic coding che consigliamo, con opzioni gratuite di modelli IA tramite Zen e il piano Go a basso costo."
  keywords:
    [
      "opencode",
      "installare opencode",
      "agentic coding",
      "assistente di coding IA",
      "opencode zen",
      "opencode go",
      "coding IA gratuito",
      "vscode"
    ]
en_md5: a5c3efc92432a167085818beba5b6bc7
---

## Introduzione

Una piattaforma di agentic coding è uno strumento che permette a un'IA di lavorare sul codice insieme a te: leggendo file, apportando modifiche ed eseguendo comandi sul tuo computer. Se questa frase ti è nuova, inizia con la nostra guida su [cos'è l'agentic coding](/guides/what-is-agentic-coding) e torna qui quando sarai pronto a installarne una.

Questa guida ti accompagnerà nell'installazione di **OpenCode**, nell'accesso e nella scelta di un modello IA. Devi farlo solo una volta e puoi fare tutto senza spendere soldi.

## Perché consigliamo OpenCode

Ci sono diversi buoni strumenti di agentic coding, tra cui Claude Code (Anthropic) e Codex (OpenAI). Sono tutti molto simili da usare, quindi nulla di ciò che impari andrà perso se in futuro vorrai cambiare. Detto questo, ti consigliamo **[OpenCode](https://opencode.ai)** mentre stai imparando, per tre motivi:

- **Puoi usarlo gratuitamente.** È l'unico strumento di questo tipo, al momento, a offrire un livello gratuito affidabile, stabile e realmente utilizzabile, destinato a non scomparire.
- **Funziona con quasi tutti i modelli IA.** Puoi iniziare con i modelli gratuiti e provare quelli più avanzati in seguito, se vorrai esplorare, senza cambiare strumento.
- **Funziona nel terminale**, che è il modo in cui la maggior parte degli sviluppatori professionisti usa questi strumenti, quindi stai imparando il modo "vero". E puoi eseguirlo all'interno di VS Code, così si trova proprio accanto al tuo codice.

Puoi usare OpenCode in due modi, e questa guida ti prepara per entrambi:

- **Da solo**, in qualsiasi finestra di terminale.
- **Integrato in VS Code**, dove si apre in un pannello accanto al tuo codice e può vedere su quale file stai lavorando. È quello che ti consigliamo: guardi le modifiche dell'agente apparire nell'editor mentre le effettua. (Non sai cos'è VS Code? È il [nostro editor di codice consigliato](/guides/using-a-code-editor).)

## Quanto costa

OpenCode di per sé non costa nulla. Quello per cui puoi scegliere di pagare è il modello IA che fa il ragionamento. Quando connetti OpenCode a un modello, vedrai due opzioni del team di OpenCode:

- **Zen** offre alcuni modelli gratuitamente. Sono gratis perché le aziende che li producono li stanno promuovendo, il che significa che la selezione cambia nel tempo e le tue conversazioni potrebbero essere usate per migliorare i modelli. È un compromesso accettabile per gli esercizi di apprendimento, ma non incollare nulla di privato o personale.
- **Go** è un abbonamento: **10 $/mese** (con il primo mese a 5 $) per un accesso generoso a un insieme di modelli molto più potenti. Non ti serve dal primo giorno. Inizia con i modelli gratuiti di Zen e passa a Go se raggiungi i limiti.

## Quale modello scegliere?

Se non sei sicuro di cosa sia un "modello", la nostra guida ai [concetti chiave dell'agentic coding](/guides/key-agentic-coding-concepts) lo spiega bene. In breve: il modello è il "cervello" vero e proprio dell'IA, e modelli diversi sono più intelligenti, veloci o economici di altri.

All'interno di OpenCode puoi cambiare modello in qualsiasi momento digitando `/models`. Il nostro consiglio:

- **Sul piano gratuito**, prova i modelli gratuiti disponibili e vedi con quale ti trovi meglio. L'elenco cambia man mano che le promozioni vanno e vengono, quindi non proveremo a dirti cosa vedrai, ma al momento in cui scriviamo **DeepSeek V4 Flash** è un'ottima scelta gratuita.
- **Sul piano Go**, i modelli focalizzati sul codice (al momento in cui scriviamo, Kimi K2.7 Code, GLM-5.2 e la famiglia Qwen 3.7) sono tutti validi. Scegline uno e preoccupati di confrontarli solo quando avrai imparato le basi.

Non scervellarti su questo. Per gli esercizi che farai mentre impari, ogni modello disponibile è più che all'altezza.

## Prima di iniziare

Ti servono due cose:

- **VS Code**, per poter usare OpenCode integrato nell'editor. Se non l'hai ancora installato, segui la nostra guida su [come installare VS Code](/guides/installing-vscode).
- **Solo su Windows: WSL.** La versione terminale di OpenCode funziona meglio su Linux e WSL fornisce un vero terminale Linux sul tuo computer Windows. Segui prima la nostra guida su [come installare WSL](/guides/installing-wsl), includendo la sezione "Usare WSL da VS Code" alla fine. Poi torna qui. Su macOS e Linux non c'è nient'altro da installare.

## Installare OpenCode

Installare OpenCode è un unico comando nel terminale. Se non hai mai usato un terminale prima, questo è un bel primo assaggio: scrivi un'istruzione e il computer esegue il lavoro.

### Windows

1. Apri VS Code, connettilo a WSL (Ctrl+Shift+P, poi **WSL: Connect to WSL**) e apri un terminale (menu Terminal, quindi **New Terminal**).
2. Copia e incolla questo comando nel terminale e premi Invio:
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. Quando ha finito, chiudi il terminale, aprine uno nuovo e digita `opencode --version` seguito da Invio. Se ti restituisce un numero di versione, hai finito.

### macOS

1. Apri **Terminale** (premi Cmd+Spazio, digita "terminale" e premi Invio) oppure apri un terminale all'interno di VS Code (menu Terminal, quindi **New Terminal**).
2. Copia e incolla questo comando nel terminale e premi Invio:
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. Quando ha finito, chiudi il terminale, aprine uno nuovo e digita `opencode --version` seguito da Invio. Se ti restituisce un numero di versione, hai finito.

### Linux

1. Apri il terminale, oppure aprine uno all'interno di VS Code (menu Terminal, quindi **New Terminal**).
2. Copia e incolla questo comando nel terminale e premi Invio:
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. Quando ha finito, chiudi il terminale, aprine uno nuovo e digita `opencode --version` seguito da Invio. Se ti restituisce un numero di versione, hai finito.

<!-- SCREENSHOT: terminal after the install script has completed -->

## Avviare OpenCode per la prima volta

Ora apri OpenCode e connettilo a Zen in modo che abbia un modello con cui parlare:

1. In VS Code, apri una cartella che contiene del codice (qualsiasi tuo progetto di pratica va benissimo) e apri un terminale (menu Terminal, quindi **New Terminal**).
2. Digita `opencode` e premi Invio. L'interfaccia di OpenCode apparirà nel pannello del terminale, proprio accanto al tuo codice. (La prima volta che lo fai, installerà anche una piccola estensione di VS Code che connette i due, così OpenCode può vedere quale file hai aperto.)
3. La prima volta che lo esegui, apparirà un elenco intitolato "Connect a provider". (Se non ti viene mostrato, digita `/connect` per richiamarlo.) Usa i tasti freccia per scegliere **OpenCode Zen (Recommended)** e premi Invio.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/connect-a-provider.webp" alt="Schermata Connetti un provider di OpenCode, con OpenCode Zen (Recommended) evidenziato in cima all'elenco" />
  <figcaption>Scegli OpenCode Zen dall'elenco dei provider.</figcaption>
</figure>

4. Poi ti chiederà una **chiave API**: un codice lungo che dimostra chi sei, un po' come una password. Per ottenerla, apri <a href="https://opencode.ai/zen" target="_blank" rel="noopener noreferrer">opencode.ai/zen</a> nel browser e crea un account gratuito. Non servono dati di pagamento. Copia la chiave che ti fornisce, incollala nel terminale e premi Invio.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-api-key.webp" alt="OpenCode che richiede una chiave API, con l'istruzione di andare su opencode.ai/zen per ottenerla" />
  <figcaption>Ottieni la tua chiave da opencode.ai/zen e incollala qui.</figcaption>
</figure>

5. Infine, ti mostrerà l'elenco dei modelli, con quelli gratuiti contrassegnati da **Free** sulla destra. Scegline uno tra quelli (come abbiamo detto sopra, al momento in cui scriviamo **DeepSeek V4 Flash Free** è un'ottima scelta). Puoi cambiare modello in qualsiasi momento digitando `/models`.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-model-list.webp" alt="Elenco dei modelli di OpenCode Zen, con i modelli gratuiti contrassegnati da Free sulla destra e DeepSeek V4 Flash Free evidenziato" />
  <figcaption>I modelli gratuiti sono contrassegnati sulla destra. Qui stiamo scegliendo DeepSeek V4 Flash Free.</figcaption>
</figure>

## La tua prima conversazione

Ora chiedigli qualcosa. Scrivi un messaggio come:

> Look at the files in this folder and explain what they do.

Osserva cosa succede. Leggerà i file, penserà e ti risponderà, e chiederà il tuo permesso prima di modificare qualsiasi cosa. Questo ciclo di lettura, azione e verifica è il cuore dell'agentic coding.

<figure class="post-figure" style="max-width:700px">
  <img src="/images/guides/installing-an-agentic-coding-platform/first-conversation.webp" alt="OpenCode che legge i file di un progetto uno per uno, pensa e poi spiega cosa fa ogni cartella e file di primo livello" />
  <figcaption>OpenCode legge i file del progetto, pensa e ti riferisce cosa trova.</figcaption>
</figure>

La stessa cosa funziona in qualsiasi terminale, con o senza VS Code. Apri un terminale, spostati in una cartella del progetto, digita `opencode` e sei pronto. Ad alcune persone piace lavorare così. Prova entrambi i modi e vedi quale ti si addice.

Questo è tutto. Ora hai una configurazione di agentic coding funzionante e che non costa nulla per usarla. Per capire cosa succede realmente sotto il cofano e cosa significano parole come token e contesto, continua con i [concetti chiave dell'agentic coding](/guides/key-agentic-coding-concepts).
