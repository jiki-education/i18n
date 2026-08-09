---
title: "Concetti chiave del coding agentico"
excerpt: "Modelli, token, finestre di contesto e le altre nozioni che ti servono per usare bene gli agenti di coding basati su IA."
tags: ["agentic-coding"]
seo:
  description: "I concetti fondamentali alla base del coding agentico spiegati per principianti: cosa sono i modelli IA e i token, come funzionano le finestre di contesto e perché gli agenti a volte sbagliano."
  keywords: ["concetti di coding agentico", "llm", "token", "finestra di contesto", "modelli ia", "prompt", "allucinazioni"]
en_md5: d963e01d7934f4003d436029d1808fc8
---

## Introduzione

A questo punto, presumiamo che tu abbia installato OpenCode o uno strumento equivalente. Se non lo hai ancora fatto, segui prima la nostra guida su [come installare una piattaforma di coding agentico](/guides/installing-an-agentic-coding-platform).

Puoi usare uno strumento di coding agentico senza capire come funziona, proprio come puoi guidare un’auto senza sapere a cosa serve la frizione. Ma un po’ di comprensione fa una grande differenza. Spiega perché lo strumento a volte sembra geniale e altre volte sembra sconcertante, perché alcune cose costano soldi e come ottenere risultati molto migliori. Questi sono i concetti che vale la pena conoscere.

## Modelli

Il **modello** (o LLM, abbreviazione di «large language model») è la vera intelligenza artificiale. Strumenti come OpenCode e Claude Code non sono intelligenti di per sé. Sono l’imbracatura: raccolgono la tua richiesta e il tuo codice, li mandano a un modello e agiscono in base a ciò che torna indietro. Il modello è il «cervello».

Ci sono molti modelli, realizzati da aziende diverse, e differiscono in tre aspetti che ti interessano:

- **Capacità.** I modelli più grandi e recenti sono più bravi a comprendere problemi complicati e a scrivere codice corretto. I migliori in assoluto (spesso chiamati modelli «di frontiera») sono nettamente più intelligenti degli altri.
- **Velocità.** I modelli più piccoli rispondono più in fretta. Per domande semplici, un modello veloce è spesso l’esperienza migliore.
- **Costo.** I modelli migliori possono costare anche cinquanta volte di più da eseguire rispetto a modelli perfettamente validi. Ecco perché i piani gratuiti usano modelli più piccoli o promozionali.

Non esiste un «modello migliore» permanente. La classifica si rimescola ogni pochi mesi, e questo è uno dei motivi per cui consigliamo uno strumento che ti permetta di cambiare modello liberamente (in OpenCode, digita `/models`).

## Token

I modelli non leggono lettere o parole. Leggono **token**: piccoli pezzi di testo, in media tre quarti di parola ciascuno. «Understanding» è un token. «Misunderstanding» potrebbe essere tre token. Tutto ciò che invii a un modello viene suddiviso in token, e tutto ciò che scrive torna indietro token per token. Ecco perché vedi le risposte apparire come un flusso di parole, invece che tutte insieme.

I token contano per un motivo importante: **sono ciò per cui paghi**. I prezzi dei modelli sono espressi per milione di token, sia per ciò che il modello legge («input») sia per ciò che scrive («output»). Quando un agente legge cinque file del tuo codice, potrebbero essere decine di migliaia di token in input. Per questo i piani gratuiti hanno dei limiti e perché un agente che lavora su un progetto grande costa di più di uno che risponde a una domanda veloce.

## La finestra di contesto

Un modello non ha memoria. Ogni volta che invii un messaggio, lo strumento manda di nuovo l’_intera conversazione fino a quel momento_, più tutti i file che l’agente ha letto. La **finestra di contesto** del modello è la quantità massima che può ricevere in una volta: la sua memoria di lavoro, misurata in token.

Da questo derivano due cose pratiche:

- **Le sessioni lunghe degradano.** Man mano che una conversazione cresce, il contesto si riempie di vecchie deviazioni e contenuti di file non più validi. I modelli peggiorano in modo misurabile nel prestare attenzione quando il contesto è intasato. Quando un agente inizia a fare errori sciocchi verso la fine di una sessione lunga, spesso non è che sia diventato stupido: sta affogando.
- **Le ripartenze pulite sono gratis.** Iniziare una nuova sessione con una richiesta pulita e ben formulata spesso batte il continuare a combattere in una sessione affollata. Non essere sentimentale verso la cronologia della conversazione.

## Prompt

Il tuo **prompt** è tutto ciò che scrivi al modello. La competenza più importante nel coding agentico è scrivere buoni prompt. La differenza tra «aggiusta il mio codice» e «i test in questa cartella falliscono con questo messaggio di errore, e mi aspettavo che la funzione restituisse 5, non 3» è la differenza tra un agente che tira a indovinare e un agente che sa cosa fare.

Un buon prompt dice tre cose: cosa stai cercando di ottenere, cosa sta succedendo in realtà e cosa hai già provato. Esattamente ciò che vorresti da un collega che ti chiede aiuto.

## Il ciclo agentico

Ciò che distingue un agente da un chatbot è il **ciclo**. Quando affidi un compito a un agente, non si limita a rispondere. Lavora:

1. Decide cosa deve sapere e usa degli **strumenti** (leggere file, cercare, eseguire comandi) per scoprirlo.
2. Apporta una modifica.
3. Controlla il proprio lavoro, di solito eseguendo il tuo codice o i tuoi test.
4. Se qualcosa non ha funzionato, torna al punto 1 con le nuove informazioni.

Osservare questo ciclo è davvero istruttivo: è un modello decente di come lavorano davvero i programmatori esperti. Indagare, cambiare una cosa, verificare, ripetere. Il tuo compito durante il ciclo è la supervisione. Lo strumento ti chiederà il permesso prima di fare qualsiasi cosa significativa, e dovresti leggere cosa propone invece di approvare tutto in automatico.

## Allucinazioni, ovvero: a volte il modello ha torto ma ne è convinto

I modelli non sanno le cose come le sai tu. Generano la risposta più plausibile, e a volte la risposta più plausibile è semplicemente sbagliata: una funzione che non esiste, un’impostazione che non è mai esistita, una spiegazione che sembra inattaccabile ma che in realtà è scorretta. Questo fenomeno si chiama **allucinazione**, e non scompare mai del tutto, nemmeno nei modelli migliori.

La difesa è la stessa che usano i professionisti: **non fidarti mai, verifica sempre**. Esegui il codice. Leggi la modifica prima di accettarla. Se una spiegazione è importante, chiedi al modello di mostrarti la riga di codice su cui si basa. Gli agenti sono molto meno inclini a questo difetto rispetto ai chatbot, proprio perché il loro ciclo prevede di eseguire codice e vedere risultati reali, ma l’abitudine a verificare è una cosa che dovresti costruire fin dal primo giorno.

## Privacy

Un’ultima cosa che vale la pena sapere, specialmente per i piani gratuiti: i modelli gratuiti di solito sono tali perché le aziende che li forniscono raccolgono le conversazioni per migliorare i propri modelli. Per gli esercizi di apprendimento è un accordo perfettamente accettabile. Ma tratta tutto ciò che invii a un modello gratuito come potenzialmente pubblico: niente password, niente informazioni personali e, più avanti nella tua carriera, niente codice aziendale privato senza aver verificato le regole.

## Queste sono le fondamenta

I modelli sono i «cervelli», i token sono la valuta, il contesto è la memoria, i prompt sono il volante e il ciclo è ciò che rende agente un agente. Tutto il resto lo imparerai sporcandoti le mani, ed è esattamente ciò che ti suggeriamo di fare. Se non hai ancora configurato uno strumento, la nostra [guida all’installazione](/guides/installing-an-agentic-coding-platform) ti porterà lì in dieci minuti. Poi guarda la prima sessione di [Frontend Basics](/build/frontend-basics/setting-up-the-project) in Learn to Build per vedere tutto in azione.
