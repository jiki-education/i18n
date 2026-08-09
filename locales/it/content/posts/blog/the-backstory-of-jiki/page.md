---
title: "La storia dietro Jiki"
excerpt: "Perché abbiamo creato Jiki. Ecco la storia che ci ha portato da Exercism a creare qualcosa di completamente nuovo per principianti, e dove speriamo ci condurrà questo viaggio!"
tags: ["jiki", "learn-to-code", "beginners", "story"]
seo:
  description: "La storia dietro Jiki: perché ho creato una nuova piattaforma per imparare a programmare dopo anni di gestione di Exercism, e la mia visione per aiutare i principianti."
  keywords: ["jiki", "imparare a programmare", "principianti", "exercism", "bootcamp di programmazione"]
en_md5: 62c6e8e363795859b8e096214cbbe903
---

Ciao a tutti!

Ho trascorso gli ultimi 2 anni a costruire **[Jiki](https://jiki.io)**, partendo da un'idea, organizzando un bootcamp per mettere alla prova le mie idee, e poi realizzando un prodotto (che spero sia fantastico) insieme ad Aron e Nicole.

Volevo raccontarti di questo viaggio. Perché esiste Jiki, perché abbiamo investito tempo ed energie in questo progetto, e dove spero ci porterà.

## Prima di Jiki, c'era Exercism

Per chi non lo sapesse, ho trascorso l'ultimo decennio a costruire **[Exercism](https://exercism.org)**. Exercism è una piattaforma che aiuta gli sviluppatori ad approfondire le proprie competenze e a imparare nuovi linguaggi di programmazione. È stato un enorme sforzo collaborativo con migliaia di persone che hanno contribuito al codice, centinaia di manutentori che hanno costruito percorsi per diversi linguaggi, e migliaia di mentori che hanno supportato altri sviluppatori. Milioni di persone l'hanno usata per migliorare le proprie capacità di programmazione, ed è qualcosa di cui sono davvero orgoglioso.

Ma, benché Exercism fosse pensata per sviluppatori che sanno già programmare, **continuavamo ad attrarre principianti assoluti**. Infatti, stando agli ultimi dati, oltre **500 persone al giorno** si iscrivevano a Exercism senza aver mai scritto una sola riga di codice. Ed Exercism non funziona per loro, perché non è stata creata per loro: quindi li mandavamo via.

E questo è un peccato.

La mia motivazione con Exercism è sempre stata legata alla **mobilità sociale**: aiutare le persone che hanno più bisogno di aiuto. Credo che la programmazione sia una competenza fondamentale che quasi tutti dovrebbero imparare. Per alcuni può diventare una carriera, ma per tutti insegna il pensiero critico, la risoluzione dei problemi, e fornisce un insieme di competenze utili in quasi ogni tipo di lavoro digitale. In breve, credo che la programmazione cambi davvero la vita e apra porte che altrimenti resterebbero chiuse. Perciò, vedere questi principianti arrivare, pieni di entusiasmo, e poi dover dire loro «mi dispiace, questa non fa ancora per te», mi sembrava un mio fallimento.

Ho iniziato a esplorare il panorama del "imparare a programmare" per capire cosa esistesse per loro. Ho parlato con molti dei principianti che si iscrivevano e ho iniziato a esaminare le risorse disponibili. E provando quelle risorse, mi sono reso conto che mancava qualcosa. La maggior parte non va al cuore di ciò che, secondo me, è davvero la programmazione: **divertirsi a risolvere problemi**.

Invece, ti danno video da guardare, quiz da fare, forse un piccolo esercizio di programmazione, e un certificato alla fine. Ti insegnano sintassi e teoria, ma non ti fanno davvero **costruire** qualcosa. E credo che sia per questo che così tante persone abbandonano. Non è che programmare sia troppo difficile, è che il modo in cui viene insegnato non sembra affatto programmare.

Così ho deciso di fare qualcosa al riguardo.

## Il percorso di Jiki verso la realizzazione

### Basare Jiki sulla mia esperienza

Quando penso a come ho imparato a programmare, non è stato attraverso corsi o tutorial. Ho iniziato a otto anni, molto prima di avere Internet. Ho imparato **costruendo giochi**. Prendevo qualunque cosa ossessionasse la mia mente infantile in quel periodo (c'erano molti Star Trek e maghi) e lo trasformavo in un gioco a caso. Poi, crescendo, creavo siti web e piccoli strumenti per me stesso, qualunque cosa trovassi interessante. Non avevo un programma di studi. Semplicemente costruivo cose, mi bloccavo, risolvevo il problema, e costruivo altre cose.

Quell'esperienza ha plasmato tutto il mio modo di pensare all'apprendimento. Credo che le persone imparino a programmare **programmando**, non guardando qualcun altro farlo, non rispondendo a domande a scelta multipla, non scrivendo una riga di codice per "completare" un esercizio, ma scrivendo veri programmi e risolvendo problemi reali.

Ecco perché Jiki è costruito attorno ai **progetti fin dal primo giorno**. Non stai facendo minuscoli esercizi di cinque righe per mesi e mesi. Stai costruendo cose: giochi, animazioni, strumenti, e scrivendo **decine, poi centinaia** di righe di codice nei primi mesi. È impegnativo, ma è il tipo di sfida che ti fa sentire come se stessi davvero diventando un programmatore.

### Il Bootcamp

Nel gennaio 2025, ho organizzato un Bootcamp per 1.000 studenti. Hanno imparato un linguaggio di programmazione che ho scritto appositamente per il bootcamp (chiamato JikiScript). Ogni settimana avevano circa 3 ore di lezioni dal vivo, poi alcuni esercizi da risolvere, e infine una sessione "Laboratorio" di 3 ore, in cui esaminavamo insieme gli esercizi e rispondevamo alle domande.

È stata un'esperienza molto divertente e ho imparato moltissimo. È stata anche incredibilmente intensa, dato che stavo scrivendo un linguaggio di programmazione, esercizi e lezioni, oltre a fare 6 ore di diretta streaming e decine di ore di supporto ogni settimana. Un enorme ringraziamento ai volontari che mi hanno aiutato!

Fondamentalmente, ciò che ho imparato è che il ritmo che avevo creato era troppo veloce. Avevo pensato di fare qualcosa di delicato e semplice, ma era ancora mooooolto troppo veloce e difficile per le persone. Così ho tenuto conto di questo in Jiki, rallentando ulteriormente le cose, aggiungendo più esercizi con un ritmo più lento. Se lo trovi facile, supererai quegli esercizi extra in un attimo, ma se sei in difficoltà, si spera che ti salveranno la vita!

### Eliminare le armi a doppio taglio

Credo fermamente che imparare a programmare sia reso molto più difficile dal fatto che devi anche imparare un linguaggio di programmazione allo stesso tempo. Probabilmente suona come un'affermazione un po' strana, ma seguitemi.

I linguaggi di programmazione sono progettati per professionisti. Contengono numerose funzionalità "avanzate" che permettono a noi sviluppatori di lavorare più in fretta e in modo più efficiente. Inoltre, tendono ad avere un sacco di bagaglio storico (JavaScript in particolare ne soffre molto): funzionalità che avrebbero dovuto essere eliminate dal linguaggio molto tempo fa, ma che devono restare per supportare il codice legacy.

Questo significa che, mentre impari, ti imbatti in cose che sono molto avanzate o semplicemente strane. Le chiamiamo armi a doppio taglio (cose con cui puoi spararti sui piedi). Quando ho organizzato il bootcamp, ho deciso di scrivere un nuovo linguaggio senza armi a doppio taglio (chiamato JikiScript). Tuttavia, uno dei feedback che ho ricevuto è stato che era frustrante imparare un linguaggio che poi non potevi usare nel mondo reale. Quindi per Jiki, ho deciso di insegnare tramite JavaScript o Python (stesso programma, puoi scegliere il linguaggio).

Ma ho eliminato le armi a doppio taglio.

Ho scritto interpreti personalizzati per entrambi i linguaggi che eliminano il rumore. Non puoi più usare `var` in JavaScript. Non puoi usare le funzioni freccia finché non sei davvero a tuo agio con le funzioni normali. Non puoi scrivere `[] + {}` aspettandoti altro che un errore. Se è probabile che qualcuno stia facendo qualcosa involontariamente in questa fase del suo percorso di apprendimento, viene disabilitato. E man mano che avanzi, abilitiamo più funzionalità. È stato un **SACCO** di lavoro, ma credo che farà una grande differenza.

### i18n

Un'altra funzionalità chiave che sapevo di dover aggiungere era rendere Jiki multilingue.

La maggior parte delle persone non parla inglese. La maggior parte delle risorse di programmazione sono in inglese. Questa è una barriera enorme per le persone che spesso hanno meno soldi da spendere per le risorse. Ed è qualcosa che voglio davvero risolvere.

Quindi, costruendo Jiki, l'abbiamo progettato in modo che tutto potesse essere multilingue: i contenuti, gli esercizi, l'assistente IA e i video. Il mio piano è lanciare con l'inglese per la beta, per poi rilasciare una manciata di nuove lingue ogni mese, fino a coprire il 95% del mondo entro la fine dell'anno.

### Freemium

L'ultima decisione da prendere è stata il prezzo.

Sapevo al 100% che volevo che Jiki fosse gratuito. L'intero scopo è aiutare le persone che hanno bisogno di aiuto. Ma ho anche imparato da Exercism che è molto difficile gestire qualcosa quando i soldi che arrivano non sono sufficienti a finanziarlo (**GRAZIE** a tutti coloro che donano a Exercism: avete reso possibile Jiki!!)

Così ho deciso di adottare un approccio Freemium. Il nucleo di Jiki è gratuito: i video e gli esercizi sono disponibili per tutti. Ma ci sono alcune piacevoli funzionalità extra (supporto IA, alcuni progetti bonus, dirette streaming, contenuti dietro le quinte, ecc.) a cui le persone possono accedere con una piccola quota mensile ($9,99, adeguata in base alla posizione geografica utilizzando la [parità di potere d'acquisto](https://en.wikipedia.org/wiki/Purchasing_power_parity)). È una cifra che è accessibile alla maggior parte delle persone nel mondo, quindi se qualcuno vuole sostenere il nostro lavoro, o vuole accedere a quelle funzionalità, è un ottimo modo per iniziare.

## Poi è arrivata la programmazione agentica

Proprio mentre mi stavo preparando al lancio, Claude Code e i suoi simili sono arrivati e hanno cambiato per sempre il modo di programmare. Ho passato molto tempo a chiedermi se lanciare Jiki, se la programmazione fosse ancora rilevante. Ma 6 mesi dopo, sono più convinto che mai: il codice è qui per rimanere e gli sviluppatori di software sono più preziosi che mai.

Per decenni, il codice è stato lo strumento per creare, ma è stato anche il guardiano. Non potevi fare data science prima di padroneggiare Python, non potevi creare siti web prima di imparare JavaScript, non potevi lavorare con i database prima di studiare SQL. Ora questo è cambiato. Claude, ChatGPT e numerosi altri strumenti possono scrivere quel codice per te.

Ma, ed è un grosso ma, gli esseri umani sono ancora necessari per progettare il software, per prendere decisioni tecniche sagge, per trasformare un'idea vaga in qualcosa di abbastanza preciso da costruire. Ecco di cosa si è sempre occupato lo sviluppo software: l'arte di trasformare le idee in realtà. Solo che non abbiamo più bisogno di fare noi stessi il passo della scrittura del codice.

Così Jiki insegna entrambe le cose. Insegna i fondamenti della programmazione, perché hai ancora bisogno di capire cosa sta facendo la tua IA. Ma ti insegna anche a costruire: come funzionano i siti web sotto il cofano, come progettare database, come architettare il software. Tutto ciò che ti serve per creare cose concrete. Se vuoi trovare un lavoro nel settore tech, queste sono le competenze da padroneggiare. E se vuoi solo creare cose, questo ti insegnerà a farlo in modo che tu capisca, senza trasformarsi in un caos di spaghetti.

### Cos'è Jiki e dove voglio che arrivi

Jiki è una piattaforma per imparare a programmare, progettata per essere molto interattiva e divertente. È pensata per principianti: persone che programmano da meno di un anno e vogliono costruire basi molto solide. Impari costruendo progetti in un ambiente personalizzato, progettato appositamente per aiutarti a capire cosa sta succedendo.

I contenuti sono strutturati in livelli. In ogni livello, guarderai un breve video che insegna un nuovo concetto, per poi avere una serie di progetti in cui usarlo. Al centro dell'apprendimento c'è **Jiki**, un personaggio che esegue il tuo codice. Tutto ciò che insegno è attraverso gli occhi di Jiki: come vede il tuo codice, come lo esegue. Mentre esegui il tuo codice, puoi vedere esattamente ciò che Jiki vede, perché fa quello che fa.

Ma più delle funzionalità, ciò a cui tengo davvero è la filosofia che c'è dietro. Non tutti hanno bisogno di diventare sviluppatori di software, ma capire come scomporre i problemi e costruire soluzioni è una competenza che si trasferisce a tutto. Ed è questa la chiave del corso: rallentare e pensare davvero a fondo a come risolvere i problemi. All'inizio è molto difficile (viviamo in un'era dominata dalla dopamina!), ma è una capacità straordinaria quando scatta.

Non ho grandi aspirazioni per Jiki nel sostituire le altre piattaforme esistenti. Non sono minimamente interessato a competere con nessuno, e oltre le basi credo ci siano molti ottimi contenuti. Ciò che vorrei vedere nel mondo è una piattaforma che permetta a più persone possibile di acquisire **fondamenta davvero solide** e di divertirsi moltissimo imparandole. Perché quando hai quelle fondamenta, imparare tutto il resto è **molto** più facile. Questo è l'obiettivo di Jiki, e sono davvero entusiasta di metterlo a disposizione del mondo.

## Provaci

Mi piacerebbe che tu **[provassi Jiki](https://jiki.io/auth/signup)** e mi dicessi cosa ne pensi.

Se sei relativamente nuovo alla programmazione (o un principiante assoluto), allora spero che ti divertirai davvero a imparare. Mi piacerebbe sapere dove ti blocchi o ti senti frustrato: quel feedback è preziosissimo per migliorarlo.

Se sei già uno sviluppatore, devo essere onesto: questo non è pensato per te. Probabilmente ti sembrerà piuttosto basilare e lento. Ma fidati, per i neofiti sembra veloce e intenso! Mi piacerebbe comunque che ci dessi un'occhiata e mi fornissi un feedback. I tuoi occhi esperti noteranno senza dubbio cose che i principianti non penserebbero di menzionare. E se conosci qualcuno che sta pensando di imparare a programmare, ti sarei molto grato se condividessi Jiki con loro. Quel passaparola significa tutto!

Se credi in quello che stiamo facendo e vuoi sostenere la missione finanziariamente, allora ti sarò immensamente grato per il tuo supporto. Se sei un membro di Exercism, puoi **[donare qui](https://exercism.org/donate)**. Altrimenti, utilizza **[questa pagina di donazione Stripe](https://donate.stripe.com/8x2fZh1jK7XD5O94fS8g11g)**. Costruire qualcosa del genere richiede un'enorme quantità di tempo e risorse, e ogni piccolo contributo ci aiuta a continuare.

Grazie per la lettura 😁
