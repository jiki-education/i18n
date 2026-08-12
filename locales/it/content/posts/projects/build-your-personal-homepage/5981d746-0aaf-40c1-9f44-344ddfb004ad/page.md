---
title: "Episodio 1: Coding agentico 101"
excerpt: "Diamo il via a questo progetto con un'immersione approfondita nel coding agentico. Cosa sono LLM e agenti, come funzionano modelli ed effort, come prepararsi gratis con OpenCode e costruire la tua primissima pagina web."
summary:
  from: "Diamo per scontato che tu non sappia nulla del web o del coding agentico."
  to: "Comprendi il ciclo del coding agentico e scrivi la tua prima homepage essenziale nel browser."
  keyConcepts: ["Coding agentico", "Modelli e effort", "Token e contesto", "Fondamenti di HTML"]
seo:
  description: "Impara cos'è il coding agentico, come funzionano LLM, modelli e token, e costruisci la tua prima pagina web con OpenCode."
  keywords: ["coding agentico", "llm", "html", "principiante"]
en_md5: 179b6fdc5bf4a07aac6f6fb60589af30
---

## Introduzione

Benvenuto al primo episodio di questa nuova serie dedicata a come usare gli agenti, a come usare gli LLM per costruire in quest'epoca moderna in cui il coding è cambiato così tanto. Abbiamo tenuto molte sessioni simili nel corso degli anni per Exercism, ma questa è la prima sessione live ufficiale di Learn to Build per Jiki.

Ti spiego in cosa consisterà questa serie, cosa tratteremo oggi nello specifico, cosa tratteremo nel corso della serie e a chi è rivolta. Inizierò da quest'ultima domanda.

## A chi è rivolto

È pensato per due gruppi di persone. Chi è completamente nuovo al coding, nuovo a questo intero mondo, che vuole solo iniziare e capire come cominciare a imparare. Ma è anche per persone, forse molto più esperte, possibilmente anche sviluppatori senior, che non si sono ancora addentrate nei cambiamenti del coding agentico in corso e vogliono capire cosa sta succedendo, vedere qualcosa in azione, discutere e costruirsi una comprensione reale. Quindi puoi trovarti in qualsiasi punto di questo spettro, dal tuo primo giorno di coding – magari hai deciso di programmare stamattina, hai scoperto Jiki ed eccoti qui – fino a una persona davvero senior.

In questa serie in particolare (ce ne saranno diverse), darò per scontato che tu non sappia nulla. Quindi se sei uno sviluppatore senior, ci saranno molte cose che dirò e che conosci come le tue tasche, e potrebbe risultare un po' noioso. Se è il tuo primo giorno, non dovrebbe esserci nulla che io dia per scontato. Potrebbero esserci cose che ti sfuggono, ma sto trattando questa sessione come se fosse per te. E se non hai mai fatto questo nuovo tipo di coding prima e sei più senior, ti sarà comunque utile.

Ti guiderò un po' in ciò che significa fare questo tipo di coding. Ti mostrerò un paio di esempi di cose che devo sistemare adesso su Jiki e risolvere, giusto come preambolo. Poi parleremo di alcuni termini che usiamo e di come queste cose funzionano insieme. E poi andremo a fare davvero qualcosa. Creeremo una nuova homepage.

Questa è una cosa che voglio incoraggiare tutti a fare. Costruisciti un nuovo sito web. Potrebbe essere la tua homepage. Potrebbe essere qualcos'altro. Magari fai un CV con il codice, un curriculum in codice, quello che vuoi. Dopo questa sessione, metti in pratica ciò che hai visto e prova le cose.

Userò Claude e alcune cose più avanzate, ma ti mostrerò anche come puoi farlo se non hai soldi da spendere. Se vuoi lavorare con gli agenti gratuitamente, lo vedremo anche.

### Cosa dovresti avere preparato in anticipo?

Assolutamente niente. Ti presenti e basta. Ti spiegherò le cose e poi pubblicherò una serie di guide che accompagneranno tutto questo. Guide su come installare OpenCode, che vedremo, guide sui diversi termini negli LLM e su come funzionano, e una guida su come usare GitHub, di cui parleremo anche. Potrai dedicare un paio di giorni a recuperare e a lavorarci su.

Se hai una domanda a cui non rispondo in questo episodio, puoi sempre andare sul forum all'indirizzo [forum.jiki.io](https://forum.jiki.io) e chiedere lì. Io ci sono. Anche altri sviluppatori senior e altre persone che stanno guardando sono lì e possono rispondere alle domande.

## Riconoscere gli errori che fanno gli LLM

Passo al forum di Jiki, a una cosa che ho notato poco fa. Ci sono diversi argomenti legati alle traduzioni e noterai che la maggior parte ha una bandiera accanto al paese. Una bandiera olandese, una bandiera tedesca. Abbiamo un tacchino accanto al turco. Probabilmente un po' razzista. Dovremo probabilmente occuparcene tra un attimo. Ma quello che avevo visto era quello indonesiano. Tutto questo è stato creato da Claude, questa scelta di emoji. E qui ha chiaramente inventato un'emoji, o ha preso un'emoji che non funziona.

![Il forum di Jiki che mostra gli argomenti di traduzione. Il turco ha un'emoji di tacchino invece di una bandiera, e l'indonesiano mostra un'emoji :garuda: non funzionante.](/images/projects/build-your-personal-homepage/setting-up-the-project/forum-language-flags.webp)

È da qui che voglio iniziare, perché è reale. L'ho visto due minuti prima di andare in diretta. Questo è il genere di cose che vedrai spesso lavorando con questi LLM e questi agenti. Inventano cose. Pensano che ci sia un'emoji qui, ma non funziona su questo sito. Dovrebbero mettere una bandiera per la Turchia, ma invece hanno messo un tacchino letterale.

Questi sono il tipo di errori che per noi umani sono davvero evidenti. Li notiamo subito. Balzano all'occhio. Ci facciamo una risatina. La preoccupazione sono le stesse decisioni che l'LLM sta prendendo qui. E questo è il modello più potente. È Fable. È il modello così intelligente e pericoloso che il governo americano l'ha vietato. Eppure mette un tacchino al posto della bandiera turca e non sa necessariamente che potrebbe infastidire qualcuno. Potrebbe naturalmente avere solo un gran senso dell'umorismo. Non sono sicuro.

Queste sono le cose visibili che sono evidenti. Immagina quanti altri piccoli errori, o dovremmo dire cattive decisioni, questi LLM prendono sotto il cofano. Mentre andremo avanti per il prossimo anno, o per molti anni, facendo queste dirette, gli LLM miglioreranno. Ma la cosa che voglio che tu sappia subito, e che voglio che tu interiorizzi davvero, è che non sono una sorta di divinità del coding a cui puoi semplicemente dare cose e loro faranno tutto giusto. Fanno costantemente errori. Alcuni sono evidenti e divertenti, altri no. Se vuoi essere uno sviluppatore software moderno, una grande parte del tuo lavoro è cercare questi errori. E con questo non intendo cercare quando mettono un tacchino invece di una bandiera turca. Intendo cercare gli errori concettuali che fanno, le idee, le cose che escogitano e che semplicemente non sembrano del tutto giuste e non hanno del tutto senso.

### Cosa significa i18n?

Significa internazionalizzazione. 18 è il numero di lettere tra la i e la n. È un'abbreviazione.

## Il coding agentico in poche parole

Vediamo cosa significa fare un po' di coding agentico. Prendiamo quel glossario per l'Indonesia con l'emoji rotta. Faccio uno screenshot, vado sul mio terminale ed entro in Claude Code. Parleremo tra poco di come configurarlo e tutto il resto. Al momento potrebbe sembrare un po' intimidatorio e nero e verde, ma ci arriveremo.

La cosa che voglio mostrarti è questa. Posso trascinare l'immagine e dire «fix the incorrect emoji». E questo andrà via, penserà e farà un sacco di cose. Possiamo guardare alcune delle cose che sta facendo. Sta eseguendo comandi. Sta cercando di capire cosa sta succedendo. Perché questa bandiera è sbagliata? Cosa significa questa bandiera? Come è successo? Ora sta iniziando a leggere alcuni script. Questo è lo script per creare la categoria del forum per la lingua, lo script che ha eseguito quando ha creato quella categoria. Adesso sta esaminando la cronologia di tutto ciò che ha fatto e sta cercando di capire quando è andato storto, come è andato storto, perché è andato storto. Sta leggendo vari file. Sta eseguendo vari comandi. Puoi vedere che il conteggio sale, eseguendo il quarto comando e così via.

![Claude Code nel terminale mentre lavora su «Fix the incorrect emoji», cercando pattern, leggendo file ed eseguendo comandi shell.](/images/projects/build-your-personal-homepage/setting-up-the-project/claude-code-fixing-emoji.webp)

E poi dice di averlo trovato. L'emoji corretta dovrebbe essere la bandiera dell'Indonesia, non `:garuda:`. Va via, esegue qualcosa che aggiorna la categoria. E poi se ora andiamo sul forum e apriamo questo, puoi vedere che l'ha sistemato. Ora abbiamo invece una bandiera indonesiana.

![L'argomento Glossario per l'indonesiano sul forum, che ora mostra la bandiera indonesiana corretta.](/images/projects/build-your-personal-homepage/setting-up-the-project/indonesian-flag-fixed.webp)

Questo è il coding agentico in poche parole. Abbiamo detto «fai questa cosa». È andato via. Ha eseguito questi diversi comandi. Ha letto alcuni documenti. Sta facendo tutta questa roba molto complicata in background, bash dall'aspetto complicato che sarebbe molto doloroso scrivere. A meno che tu non sia un maintainer di Exercism, nel qual caso è molto facile. Ma per noi comuni mortali, è forse un po' complicato da scrivere. Ha cercato, cercando di capire quando è andato storto. Ha letto la cronologia dei file. Ha trovato la voce per l'Indonesia e dei log. Ha letto le regole che gli ho dato, ha trovato alcune variabili che gli consentono di andare ad aggiornare il forum, ha capito cosa non andava, ne ha discusso brevemente con me ed è andato ad aggiornare quella cosa.

È così che ho costruito Jiki. È così che molti sviluppatori software moderni, direi probabilmente la maggioranza degli sviluppatori software che lavorano oggi, lavorano. Troviamo un problema come quello. Lo individuiamo. Magari arriva tramite un ticket di qualcun altro. E poi lo passiamo a qualcosa come Claude, o a uno dei tanti altri modelli là fuori, e a tutto questo ci arriveremo tra poco. Eseguono questo complesso processo in più fasi e poi risolvono il bug.

Ora, questo bug è ovviamente molto facile. È una pagina. Ha un'emoji sbagliata. Dovrebbe avere quest'emoji e ne ha una diversa. Quindi può risolverlo abbastanza rapidamente. Ma dove tutto questo flusso funziona davvero bene è quando non stiamo solo cercando di sistemare una piccola cosa. Stiamo costruendo una nuova funzionalità, o facendo il debug di qualcosa di molto complicato. Ciò significa leggere centinaia di file e poi dover scrivere su alcuni file.

## Essere saggi riguardo ai costi

Prima di prendere un altro esempio, lascia che ti mostri una cosa. Posso digitare `usage` qui, e usage ci mostra cosa sta succedendo sotto il cofano. Puoi vedere che ci sono voluti 52 secondi dall'inizio alla fine per Claude per farlo, e che è costato 37 centesimi. Ora, io ho Claude Max, il che significa che ho una grandissima disponibilità dei diversi modelli. Quindi non mi vengono addebitati 37 centesimi per quello. È semplicemente incluso nel mio abbonamento mensile.

![La schermata d'uso di Claude Code che mostra un costo totale di $0,38 e 52 secondi di tempo API per la correzione dell'emoji.](/images/projects/build-your-personal-homepage/setting-up-the-project/claude-code-usage.webp)

Ma questa è una cosa di cui voglio che tu sia consapevole subito, mentre iniziamo a parlarne. Quel processo di elaborare tutto ciò e risolverlo è costato 37 centesimi. Se avessi voluto, avrei potuto semplicemente andare sul forum e modificare l'argomento da solo. Avrei potuto selezionare l'emoji, digitare Indonesia e cliccare sulla bandiera. Non mi sarebbe costato 37 centesimi. Se immagini ogni singola cosa che faccio come sviluppatore, per quante ore al giorno programmiamo, probabilmente vogliamo essere un po' saggi su cosa usiamo questa intelligenza super potente e cosa possiamo semplicemente fare manualmente da soli.

Questo è particolarmente vero per chi di voi non paga un abbonamento Claude Max e non ha molti soldi. Ti mostrerò come puoi fare tutte queste cose gratuitamente. Ma quando sei su piani gratuiti, avrai una quantità limitata di utilizzo. È una quantità piuttosto grande di utilizzo limitato. È tutto ciò di cui hai bisogno. Ma voglio che tu entri nella mentalità di non sprecare quell'utilizzo per cose che puoi fare manualmente. È molto meglio per te indagare da solo, capire cosa sta succedendo, imparare un po' nel processo e poi sistemare quella cosa. È il modo migliore per imparare. Se inizi a buttare tutto questo su ogni cosa, saremo nei guai.

Lascia che ti mostri un'altra cosa. Questo mostra qual è il tuo utilizzo mensile. Questo è l'ultimo mese per me. Come ho detto, ho il piano Claude Max, quindi pago semplicemente una tariffa fissa di $200 al mese. Ma se non avessi Claude Max, se pagassi direttamente, questo mese sarebbe costato $35.000. Sono tre miliardi di token che ho usato questo mese. Parleremo tra un minuto di cosa sono i token. Ma puoi accumulare conti salati molto rapidamente.

![Una tabella del terminale con l'uso giornaliero di token suddiviso per modello, con miliardi di token usati tra Fable, Opus, Sonnet e Haiku.](/images/projects/build-your-personal-homepage/setting-up-the-project/monthly-token-usage.webp)

### E per quanto riguarda Ollama e altri modelli locali?

Funzionano. Se hai un computer abbastanza potente da poter eseguire modelli locali, un buon MacBook o una buona macchina Windows con una buona GPU, puoi eseguire modelli sul tuo computer invece di inviare dati a Claude e che Claude ti rispedisca dati. Tuttavia, sarà molto, molto più lento. Quella cosa che abbiamo appena visto e che ha impiegato 52 secondi impiegherà 5 minuti, o mezz'ora, invece. Anche su una macchina all'avanguardia si parla di 10, 20, 30 volte più lento rispetto all'uso di Claude o di qualcos'altro.

### Non è a volte più economico assumere uno sviluppatore junior piuttosto che pagare un LLM?

Dato che ho un abbonamento Claude Max, che costa $200 al mese, il mio costo totale per usare tutto questo è di $200 al mese. Uno sviluppatore junior costerà 10 volte tanto. Ma inoltre, tendo ad avere forse sei o sette Claude in esecuzione contemporaneamente. Quindi se questo Claude è bravo come uno sviluppatore junior, ho sei o sette di quegli sviluppatori junior in esecuzione in diverse schede contemporaneamente che fanno cose diverse. Semplicemente non esiste più un'economia in cui ha senso far scrivere questo codice manualmente a qualcuno.

Ma dove puoi trarre beneficio, dove tu come junior puoi diventare prezioso qui, è che se tu come junior potessi eseguire sei o sette Claude contemporaneamente, e potessi svolgere compiti più semplici, più basilari con quei Claude, allora aggiungeresti un'enorme quantità di valore a un'azienda. La mia capacità totale come sviluppatore è probabilmente di eseguirne cinque o sei contemporaneamente, e passo ancora molto tempo a pensare e leggere. Chiunque raggiungerà quel punto se lo fa correttamente, pensando a ciò che sta accadendo. Quindi se vuoi entrare nel tech oggi, dove aggiungerai valore è imparare a controllare questi Claude, questi altri modelli, questi LLM, questi agenti, e come fornire loro prompt, potenziarli e revisionare il loro lavoro in modo sensato e potente.

## Avviare una nuova lingua

Quindi questo è il nostro punto di partenza. Ora sai un po' come funzionano queste cose. Ne avvierò un'altra mentre parliamo. Una delle cose che ho costruito è un comando di bootstrap della lingua per tradurre Jiki in diverse lingue. Ho già avviato il portoghese brasiliano sul forum, ma voglio avviare il portoghese europeo. Faccio semplicemente clic su Esegui, e poi gli daremo un'occhiata.

Quello che fa è andare a creare informazioni, una guida, un glossario e altre cose per tradurre il sito web in portoghese. Puoi vedere quello turco sul forum. Quello è il glossario che è stato prodotto e creato, di tutti i termini che traduciamo in turco.

Questo agente ora sta andando via e farà molto lavoro per fare le cose per bene. Avvierà altri agenti. Abbiamo un agente principale che è responsabile di questo. Invierà altri agenti a fare ricerche sui termini corretti per il portoghese. Li farà andare a guardare la documentazione di Mozilla e la documentazione di Microsoft per trovare quali termini vengono utilizzati. Guarderà probabilmente Duolingo e alcuni altri siti web. E poi tornerà da me con un sacco di informazioni su ciò che ha trovato e mi farà alcune domande.

Mentre lo fa, voglio dare una rapida occhiata al comando che ho appena eseguito, Bootstrap Language. Questo è ciò che Claude sta facendo. Queste sono le istruzioni che Claude sta seguendo. Abbiamo un po' di roba in cima che sono solo informazioni per Claude su come eseguirlo. E poi tutto il resto sono informazioni che tu o io potremmo leggere che spiegano cosa sta succedendo.

Stiamo dicendo a Claude di avviare una nuova lingua. Stiamo dicendo che devi fare ricerche su come è scritta la lingua, concordare decisioni che solo io posso prendere, guardare queste guide e usare l'ungherese come base, solo perché è stata la prima su cui abbiamo lavorato. Aron, che è uno sviluppatore front-end qui, è ungherese. E poi abbiamo un sacco di fasi che attraversa. Alcuni controlli che fa. Puoi vedere, prima di tutto, diciamo controlla se questa lingua esiste già. Se esiste, fermati e segnalalo. E vedi la prima cosa che fa, dice «Inizierò controllando se la lingua esiste». Il controllo passa, non esiste, va avanti.

Poi ha alcuni file che va a leggere. Legge questo file delle regole, questo file della voce, alcune altre informazioni e carica tutto questo effettivamente nella sua memoria. Parleremo tra poco di cosa significhi veramente. Quindi ora ha tutte queste informazioni lì, tutti questi grandi documenti che ho scritto con regole, e come parlare con la voce giusta, e tutte queste cose.

E poi va e fa questa ricerca. Ha varie regole che gli ho dato. Evita la contaminazione generata dagli LLM. Non voglio che vada a leggere un sacco di contenuti che altri LLM hanno già scritto. Voglio che guardi solo cose precedenti al 2022, controllando le date di quel contenuto prima di usarlo. Sta verificando attraverso più fonti. Gli dico di essere sospettoso, di sentirsi a suo agio con l'incertezza e poi di cercare varie cose. Quali metafore usano le persone? Qual è il livello di formalità e registro? E poi metterà tutto insieme in una struttura e discuterà e si fermerà con me. Mi spiegherà cosa ha trovato, mi farà alcune domande, proporrà alcuni termini chiave. E poi una volta che sarò d'accordo, una volta che ne avremo discusso, andrà via e scriverà un glossario e una guida, li metterà insieme e poi creerà il post sul forum. Ha la capacità di andare nel forum di Jiki e creare quel post, e poi creerà anche il post del glossario. Sono due post separati.

Quindi questo è il comando che ho costruito, che poi può andare a seguire. E possiamo vederlo in background che macina. Ecco, sta riportando i risultati della sua ricerca ora. Questo è il modo in cui dovrebbe rivolgersi agli studenti: dovremmo usare il «tu» informale, che è il modo caldo e ordinario di rivolgersi agli studenti, e non l'altro tono formale. E poi mi chiede alcune decisioni. Sono d'accordo? Dovrebbe usare le stesse convenzioni del Brasile? Mi dà alcuni termini che ha scelto. E a questo punto posso esaminare e dire ok, sono contento di tutte queste decisioni, sono contento delle tue impostazioni predefinite. E poi andrà via e continuerà.

![Claude riporta il suo brief di ricerca per il portoghese europeo, incluse le fonti e la decisione di usare il «tu» informale.](/images/projects/build-your-personal-homepage/setting-up-the-project/portuguese-research-findings.webp)

### I comandi e le skill sono la stessa cosa?

Sì, sono la stessa cosa. Tutte le diverse aziende di LLM hanno nomi diversi per tutte queste cose.

## Agenti e modelli

Vorrei fermarci un attimo e pensare a cosa è successo qui, perché questa è una vera chiave per capire la differenza tra quando apri l'app di Claude o ChatGPT e ci parli, e quando usi il coding agentico in questo modo.

Quando parli con Claude in un'interfaccia utente, stai facendo una domanda, e hai effettivamente un agente con cui stai parlando, che forse va via, controlla qualcosa e poi torna e continua a scrivere. È molto una conversazione tra te e una persona, un agente. Quando lavori in questo modello di coding agentico, ciò che succede sotto il cofano è che generiamo molti agenti per fare cose diverse. Avremo agenti che fanno ricerche, agenti che pianificano, agenti che costruiscono. E possiamo costruire i nostri agenti. Agenti che potrebbero testare le cose in certi modi, agenti che potrebbero verificare che le cose siano conformi a determinati standard. E spesso l'agente con cui stiamo parlando è quello che gestisce tutti gli altri agenti.

Questi agenti possono usare modelli diversi. Quindi questo è un buon momento per parlare di modelli. Sicuramente hai sentito molto questo termine. Probabilmente hai una buona idea di cosa siano i modelli, ma lo spiegherò rapidamente.

Diverse aziende, come OpenAI o Anthropic, hanno modelli diversi, e i modelli sono il meccanismo sottostante attraverso cui un LLM viene eseguito. È qualcosa che è stato addestrato su una certa quantità di dati per operare a una certa velocità. I modelli di frontiera, come vengono chiamati, sono i migliori modelli in assoluto. Nel caso di Anthropic, al momento è qualcosa chiamato Fable, o Mythos. Quelli sono più lenti, sono costosi, ma sono molto potenti. All'altro estremo c'è Haiku, che è un modello molto più veloce. È circa 50 volte più economico da eseguire, molto più veloce, ma non ragiona altrettanto bene. E poi ci sono Sonnet e Opus. Quindi hai questi quattro modelli, e tutti i diversi fornitori hanno questi diversi modelli. Alcuni di quelli di fascia molto alta sono super intelligenti. Alcuni sono molto meno intelligenti ma molto più veloci.

Per un compito di base, diciamo il compito che abbiamo appena esaminato, come perché questa bandiera è sbagliata, non ci sarà alcuna differenza di prestazioni tra Haiku e Fable. Ma se usi Fable per farlo, spenderai 50 volte più soldi per farlo. Quindi una delle cose di cui dobbiamo sempre essere consapevoli è quale modello è giusto per il compito. Questo mantiene le cose davvero veloci, le mantiene al giusto livello di qualità per ciò di cui abbiamo effettivamente bisogno e mantiene bassi i nostri costi, il che è anche importante.

Quando esegui un agente che poi esegue più altri agenti, anche loro prendono costantemente quella decisione. Se generano agenti per fare cose semplici, useranno modelli di fascia bassa. Se generano agenti per fare cose molto complesse, genereranno Fable.

## Effort

Abbiamo anche il concetto di effort. Effort è quanto sforzo un modello è disposto a fare. Quindi cosa significa effort? Il modo in cui funzionano questi modelli è che parlano da soli. Hanno una lunga conversazione in corso. Lo avrai visto se usi Claude o ChatGPT, dove puoi vedere le opzioni «mostra ragionamento» e puoi vedere il modello che parla da solo. Quello che fanno è ragionare, producendo ciò che pensano potrebbe accadere e poi costruendoci sopra.

Quando parliamo di effort nel mondo di Claude, e anche in altri strumenti, stiamo dicendo quanto tempo dovresti passare a parlare da solo prima di tornare con una risposta. Basso effort significa non parlare davvero da solo, dacci solo la prima cosa che pensi. Alto effort significa parlare da solo molto. E la cosa buona dell'effort alto è che Claude effettivamente dirà la prima cosa che gli viene in mente (è una cattiva analogia, ma la prima cosa che gli viene in mente), ma poi ragionerà anche su quella di nuovo, per vedere se è sensata o meno. Poi aggiungerà un terzo livello, e poi ragionerà su tutta quella cosa e vedrà se è sensata o meno. E poi aggiungerà una quarta cosa. Continuerà a ragionare su ciò che sta dicendo fino a quando non arriverà a un punto in cui è soddisfatto, o convinto. Mentre con effort basso, te lo dirà semplicemente subito. E potrebbe essere sbagliato, potrebbe non esserlo. Non ha avuto alcuna verifica sul suo pensiero.

Quindi abbiamo questi due assi. Abbiamo la qualità del modello: Fable, Opus, Sonnet, Haiku. E abbiamo la quantità di effort che quel modello farà: basso, medio, alto, extra alto. E puoi continuare. Spesso i fornitori fanno pagare di più man mano che vai avanti.

In Claude Code possiamo cambiare modello semplicemente digitando `/model`, e poi possiamo scegliere tra Opus, Fable, Sonnet o Haiku. E possiamo scegliere effort: basso, medio, alto o max, con alcune cose scintillanti per max, e ultracode, dove otteniamo delle bellissime animazioni in cui le persone hanno messo un sacco di impegno.

Tendo a usare Opus su medio come modello standard che uso per la maggior parte delle cose. La maggior parte delle cose che faccio, voglio qualcosa come Opus che sia in grado di ragionarci su, e trovo che effort medio sia il giusto equilibrio. Ma ne sono molto consapevole, e quando inizio i compiti penso a quale modello voglio. È semplice o è difficile? Quanto effort deve essere dedicato a questo intero processo?

### Come teniamo traccia di quale modello è migliore per un compito?

Lo imparerai col tempo. Una semplice regola pratica è chiederti quanto è difficile per te. È davvero facile? È come cambiare una bandiera in un post del forum? È davvero facile. Haiku può farlo con effort basso. Stai chiedendo di fare qualcosa che ti sembra incredibilmente complesso? Scegli un modello migliore o più effort.

Fable è fantastico per eseguire compiti di lunga durata. Per darti un esempio, ieri avevo una sessione aperta in cui ho preso tutti i video che abbiamo (parlerò a un certo punto di come ho creato i video) e ho estratto tutto l'inglese dai video. Qualsiasi inglese scritto sullo schermo, l'ho estratto dai video e l'ho impostato come overlay, in modo da poter poi semplicemente cambiarlo in una lingua diversa e riesportare i video con una lingua diversa sullo schermo.

Ho fatto fare questo a Fable. Ho impostato un compito. Gli ho fatto generare un agente Fable per ogni video, quindi avevo 32 Fable in esecuzione. Ognuno di loro ha esaminato ogni parte del video trovando il testo. Hanno fatto screenshot, poi hanno aggiornato le immagini, rimuovendo il testo dalle immagini. Poi hanno capito qual era il font con cui il testo era stato scritto, qual era la dimensione del font, lo spessore del font, la spaziatura delle lettere, l'interlinea, la crenatura, tutta quella roba per i font variabili. Hanno poi scritto quel testo sullo schermo nel posto giusto, e poi hanno ripetutamente fatto screenshot e confrontato fino a quando i due screenshot erano pixel perfect. Avevo un Fable che pianificava tutto, faceva ricerche, lo esaminava, scriveva un po' di documentazione, e poi avevo un Sonnet orchestratore che andava e generava altri Fable per fare tutti quei lavori. Ci sono volute circa tre ore. È costato circa $400. Di nuovo, era nel mio abbonamento Max, ma altrimenti sarebbe costato circa $400. E ha sostanzialmente messo tutti i video in una posizione in cui sono pronti per l'uso.

In quel tipo di situazione, sapevo che era un compito piuttosto complesso. Avevo provato a farlo con Opus prima e Opus non ci era riuscito. Era troppo complesso per Opus, quindi sapevo che ci voleva Fable.

### I modelli di frontiera sono come gli smartphone di punta?

Sì, esatto. Sono più intelligenti, sono migliori, ma sono anche più costosi e generalmente sono più lenti. E devi ricordare che il modello di frontiera di oggi è come il modello economico di un anno fa. Questo è già vero. Haiku è equivalente al modello di frontiera dell'anno scorso. Quindi Haiku è già abbastanza buono per fare molto coding, anche se è il modello economico all'altro estremo. Hai bisogno di quel modello costoso solo se stai davvero facendo qualcosa che era impossibile sul modello precedente, come Opus. Vuoi davvero ricorrere a quel modello di frontiera solo in situazioni specifiche.

### Per un esperto, non è frustrante pagare per il coding invece di farlo da solo?

Sto pagando $200 al mese. Sebbene sia una cifra significativa, è una cifra bassa per la quantità di produttività extra che crea. Penso di essere arrivato al punto in cui sono almeno una volta e mezza più produttivo. Il mio output è una volta e mezza quello che era. Non so quale sarebbe il mio stipendio sul mercato aperto, perché non ho mai avuto un lavoro, ma immagino che mi stia facendo risparmiare una fortuna se questa è la metrica. Quindi $200 è una cifra economica. Se dovessi pagare $2.000 al mese per questo, probabilmente non ne varrebbe la pena per me.

È super frustrante molte volte? Sì. Ma quello che ho capito è che mi porta semplicemente su un livello di astrazione superiore. Prima, c'era molto coding che avrei dovuto fare e che per me era davvero noioso. Potrebbe essere davvero interessante per un junior o un mid, ma per me era super noioso. Ora non devo più farlo, e non devo avere un junior o un mid da gestire. Posso semplicemente farlo fare molto facilmente senza dover avere altre persone da gestire, il che significa che sono ancora libero di essere produttivo in altri modi. Quindi il beneficio netto ne vale la pena per me.

Ma penso che per molti sviluppatori sia molto meno divertente, molto meno piacevole di quanto non fosse. È anche semplicemente la realtà del mondo. Non abbiamo scelta. Forse alcune persone hanno il lusso nei lavori di non fare questo. Se vai avanti veloce di 10 anni, non credo che molte persone abbiano quel lusso. Quindi se vuoi renderti a prova di futuro, o vuoi andare avanti nel settore, diventare bravo in questo è, credo, il segreto.

## Permessi e modalità automatica

Tornando al compito di traduzione, ora è finito. Ora abbiamo alcuni file che sono stati committati. Se torniamo nel forum, vedremo se c'è un nuovo post. Ah, interessante. La pubblicazione sul forum pubblico è stata bloccata, perché l'avevo messo in modalità automatica.

Il modo in cui funziona è che cerca di fare cose, e poi un altro LLM monitora ciò che sta facendo e controlla se quelle cose sembrano cose che ho esplicitamente detto. Non appena pubblica dati su altri siti web, o fa qualcosa del genere, richiede che io dica esplicitamente che mi va bene. E poiché l'avevo lasciato in modalità automatica, semplicemente a macinare, non mi ha chiesto se mi andasse bene. Quindi l'ha bloccato. Chiede: «Vuoi che proceda e crei quel post del forum?», io dico sì, e ora lo farà effettivamente. Questa è una delle cose che sono successe negli ultimi due o tre mesi. Ora abbiamo quasi questo LLM supervisore che consente a più cose di accadere automaticamente, ma sta cercando di bloccare le cose rischiose o pericolose.

Quindi ora se aggiorno, ecco qua. Ora abbiamo il glossario. Questi sono tutti i termini che ha trovato e letto. Questo è tutto ciò che ha messo insieme. E ora abbiamo un post.

![Il post finito del Glossario per il portoghese europeo sul forum di Jiki, con traduzioni termine per termine e note.](/images/projects/build-your-personal-homepage/setting-up-the-project/portuguese-glossary.webp)

Se parli portoghese, la versione europea, puoi venire qui e puoi iniziare a dirmi tutto ciò che non va, e poi possiamo iniziare a migliorare il glossario e lavorarci. Per quelli di voi che parlano altre lingue, abbiamo glossari in altre versioni, italiano, turco e così via. Ora sai come sono stati fatti. Puoi andare e farlo.

## Claude Code, Codex e OpenCode

Questa è la mia panoramica di alto livello su come funziona. Ora quello che voglio mostrarti è come puoi configurarlo da solo.

Ci sono molti agenti diversi e diversi strumenti che puoi usare. Quindi facciamo molta chiarezza su parte del nostro linguaggio qui. Claude Code, che è la finestra che mi hai appena visto usare, è uno strumento di coding agentico, forse una piattaforma di coding agentico. Viene eseguito sul tuo computer. Normalmente viene eseguito nel terminale, che è come l'ho configurato io. Possiamo anche eseguirlo in un editor di codice, che vedremo tra un minuto. Ed è il portale tra te e i modelli. Ti ho mostrato che posso passare da Opus, Sonnet, Haiku e posso passare da un livello di effort all'altro.

Tutto questo avviene sul tuo computer locale. Stai parlando sul tuo computer locale. Sta inviando dati ad Anthropic, a uno dei loro modelli. Ciò che rispediscono non è solo un po' di testo che appare sullo schermo. Stanno rispedendo un sacco di istruzioni che Claude Code può interpretare per fare cose. Dicono vai ed esegui questo script sul computer della persona. Vai a guardare in questa directory sul computer della persona. Vai a colpire questo sito web qui e fai cose. Tutte queste istruzioni arrivano da Claude.

Quindi non stiamo avendo una conversazione con Opus o con Sonnet o Haiku. Stiamo inserendo del testo. Quel testo viene impacchettato con un sacco di altra roba. Viene impacchettato con il codice dal nostro repository, codice che abbiamo scritto o che è stato messo lì. Viene impacchettato con l'intera cronologia della conversazione, gli obiettivi che stiamo cercando di raggiungere, le nostre preferenze su come ci piace lavorare. Tutto questo viene impacchettato, e poi tutto questo viene inviato ad Anthropic. I loro modelli leggono tutto questo e poi riportano istruzioni e un po' di testo. Tutto questo viene elaborato, e poi si verifica questo ciclo, questo ciclo agentico, in cui fa qualcosa, torna a Claude, Claude torna e dice ok, ora fai questo. Tutto questo accade lontano da noi. E poi alla fine, ci dice: ok, ora abbiamo finito. Non abbiamo potuto inviare il post del forum per questo motivo. Vuoi continuare? C'è questo intero enorme ciclo che accade dietro le quinte.

Quindi abbiamo due decisioni. Una decisione è quali modelli vogliamo usare. Vogliamo usare Anthropic, OpenAI o altri modelli in background? E la seconda decisione è con quale strumento vogliamo interagire. Se uso Claude Code, interagisco sempre con uno dei modelli di Anthropic. Se uso Codex, che è la versione di OpenAI, interagisco sempre con uno dei modelli di OpenAI, uno dei modelli GPT.

Quello che ti consiglierò di usare è qualcos'altro, che si chiama OpenCode. OpenCode è una versione open source, se vuoi, di Claude Code, una versione open source di Codex. È l'imbracatura, lo strumento che risiede sul tuo computer, che sta facendo tutto quel ciclo, che sta gestendo tutto. Ma può parlare con qualsiasi modello. Può parlare con Anthropic, con Opus o Sonnet. Può parlare con GPT-5 e quelle altre cose. Ma può anche parlare con molti modelli gratuiti. OpenCode stesso è gratuito, e ha anche una serie di modelli gratuiti che puoi usare.

Arriviamo a OpenCode semplicemente stando in un terminale e digitando `opencode` una volta installato. E possiamo scegliere tra molti modelli. Possiamo scegliere Gemini, che è di Google. Possiamo scegliere Opus, di cui abbiamo appena parlato, o Fable. Possiamo scegliere Grok, se vuoi sostenere Elon Musk. I GPT. DeepSeek, un modello che è notoriamente uscito dalla Cina. Qwen, molto buono per il coding. E tutte queste opzioni in alto, che sono quelle gratuite. Quindi se non hai molti soldi, o se vuoi solo provarlo, o se il tuo lavoro non paga un abbonamento, puoi ottenere OpenCode gratuitamente e poi puoi scegliere uno di questi modelli gratuiti.

Ho una guida che pubblicherò che spiega come installare OpenCode, come configurarsi gratuitamente e quali di questi modelli puoi usare. Per il momento consiglio DeepSeek V4 Flash (gratuito), ma non li ho provati molto affatto, quindi puoi provarli tu stesso e vedere cosa funziona per te.

Un avvertimento: questi gratuiti non sono modelli di frontiera. Anche se Big Pickle è un modello segreto, quindi potrebbe essere un modello di frontiera, non lo sappiamo. Ma gli altri non sono modelli di frontiera. Non sono i modelli migliori in assoluto. Saranno più come Haiku o Sonnet, modelli di livello inferiore. Ma per il punto in cui ti trovi, penso che sia davvero una buona cosa. Perché i passi che vuoi fare sono piccoli piccoli passi, in cui non vuoi che una super intelligenza faccia tutto per te. Vuoi qualcuno con cui puoi lavorare e parlare, con cui puoi fare un passo dopo l'altro, chiedere come funzionano le cose e imparare.

## Token e contesto

Lascia che ti mostri OpenCode nel repo del traduttore. Questo non sa nulla del mio repo. Ma posso dire qualcosa come «how many languages do we have so far?» e questo andrà via. Ecco come appare OpenCode. Abbiamo una parte parlante a sinistra. Abbiamo la parte in cui digitiamo in basso a sinistra. Quando è in esecuzione, abbiamo una parte a destra. Possiamo premere Ctrl+P per ottenere vari comandi e cose con cui puoi giocare. Puoi vedere che è molto veloce. Ha pensato per pochi millisecondi, ha letto qualcosa, ha elaborato questo, è tornato con 14 lingue. Se evidenzi qualcosa, lo copia negli appunti, il che è carino.

![OpenCode nel terminale risponde a «Quante lingue abbiamo finora?», con un pannello di contesto a destra che mostra 10.054 token usati.](/images/projects/build-your-personal-homepage/setting-up-the-project/opencode-ui.webp)

Puoi vedere che è gratuito, quindi non abbiamo speso nulla. Ma voglio che tu presti un po' di attenzione ai numeri sulla destra. Non spiegherò come funzionano gli LLM in profondità, perché è una tana del coniglio in cui non vale la pena addentrarsi. Ma l'unità fondamentale di un LLM è un token. Puoi pensare a un token come a una sillaba. «How» è probabilmente un token. «Language» è probabilmente tre token: lang-u-age, qualcosa del genere. «DeepSeek» probabilmente due token. «V4» probabilmente due token.

Ogni volta che digiti qualcosa, prende ciò che hai digitato, e prende tutto ciò di cui ha bisogno per elaborare la risposta, e invia tutto questo al modello. Il modello lo legge, lo rispedisce, probabilmente fa una domanda di chiarimento, e va avanti e indietro un po'. Usa token. Abbiamo chiesto «how many languages do we have so far?». Sono forse 11 token, forse con gli spazi sono 15 token. Quando ha finito di leggere, ottenendo tutto ciò di cui aveva bisogno, inviandolo, facendo un paio di salti, ha usato 10.000 token. Quindi questo ha effettivamente inviato un saggio di 3.000 parole a un modello e poi ha restituito un po' indietro.

Se facciamo una domanda più grande, come «what is the process of adding a new language?», va via e legge più file, e puoi vedere i token che salgono mentre legge. Questo ha aggiunto altri 6.000 token per rispondere alla domanda, e ora ha usato il 10% del nostro contesto. Il contesto di questo modello, la quantità massima di token che può avere in una conversazione, è di circa 170.000 token.

Quando ci lavori, devi tenere un po' d'occhio questo. Man mano che usi sempre più token, l'intera conversazione diventerà più lenta, perché tutto quel contesto viene passato al modello ogni singola volta. Se faccio un'altra cosa, tutte quelle informazioni vengono inviate di nuovo al modello. Tutta la conversazione precedente, tutte le risposte precedenti. Tutto viene inviato per ogni passo della conversazione.

Uno degli altri svantaggi dell'usare modelli gratuiti è che tendono ad avere un volume di conversazione più piccolo che puoi avere. Opus è 1 milione di token per conversazione. Questo sarà più vicino a 150.000 o 170.000. Quindi vuoi iniziare costantemente nuove conversazioni. Se scrivi `/new`, questo ti darà una nuova conversazione. Questo azzera i tuoi token, ma il tuo modello poi non sa nulla di ciò che è appena successo. Quindi vuoi cercare di prendere l'abitudine di avere piccole conversazioni su cose diverse.

### Anche Aron e Nicole lavorano in questo modo su Jiki?

Sì. Aron lo usa quasi interamente per qualsiasi lavoro di front-end faccia. Nicole fa lo stesso per il montaggio video. Tutti i nostri video sono scritti in codice. Non facciamo video in un editor video. Li facciamo in codice, e poi lei lavora con Claude per costruire tutti i video in codice a partire da quello.

### I modelli gratuiti sono basati su cloud?

Sì, i modelli gratuiti sono tutti basati su cloud. Sarebbero molto, molto lenti sulle vostre macchine.

### Consiglieresti Mistral?

Non so davvero nulla di modelli al di fuori di Anthropic. Lavoro solo con Claude personalmente, giorno per giorno. Non l'ho mai usato, quindi non lo so. Personalmente userei solo Claude, ma probabilmente userei Claude solo con un abbonamento in cui non pago per token.

## Costruire la tua prima pagina web

Quella prima metà è stata un po' un'immersione approfondita su cosa sono gli LLM, cos'è il coding agentico, il ciclo moderno che noi come sviluppatori stiamo usando. È davvero quello che spero, nei prossimi mesi e nell'anno, che tu possa acquisire familiarità. Abbastanza familiarità da fare qualsiasi cosa sotto il sole. Ma voglio davvero sottolineare, prima di andare avanti, questa idea che la cosa importante è che tu capisca cosa sta succedendo sotto il cofano.

Sono consapevole di averti dato molte informazioni in quella prima metà. Quindi nella seconda metà vedremo come creare una homepage per te. Pensavo che oggi saremmo arrivati ad altre cose, ma credo che le lasceremo alla prossima sessione. Nella prossima sessione credo che vedremo come distribuire tutto questo e come inviarlo a GitHub. Ho anche un'offerta esclusiva per tutti quelli che stanno facendo Jiki, in cui ottieni un dominio .tech gratuito, e presto potrai ottenere gratuitamente anche un dominio .online o .space. Così puoi creare un sito web per te con quel dominio. Ne parlerò meglio nella prossima sessione. Ma oggi continueremo a vedere come costruire la tua prima pagina web, e a pensare un po' a cosa comporta.

## VS Code

Abbiamo parlato un po' di come il coding agentico avvenga in un terminale, e di come tu scriva semplicemente le tue istruzioni a Claude o a qualsiasi modello, qualsiasi strumento, tu usi. Il vecchio modo di fare tutto questo era lavorare all'interno di un editor di codice, un editor di testo. Ci sono stati molti editor di testo nel corso della storia, ma quello che la maggior parte di noi ha finito per usare oggi si chiama VS Code. Se non hai mai usato un editor di testo prima, un editor di codice, ti consiglio di installare VS Code. Nelle guide che pubblico insieme a questo, c'è una guida per installare VS Code e usare VS Code.

Quello che hai visto prima quando mi hai visto sfogliare i file, quello era VS Code. È solo una cornice, una sorta di tela, dove puoi modificare file di testo, e ha un piccolo scaffale laterale che elenca tutti i tuoi file.

Quindi quello che faremo è costruire una homepage. Per prima cosa creerò una directory. Vai su File, Apri cartella, e creiamo una directory. La metto semplicemente sul desktop: «la mia nuova homepage». Ti incoraggio a sederti in VS Code come tuo spazio principale. Quindi crea una directory. Se stai guardando ora, puoi farlo. Se non hai VS Code installato, puoi mettere in pausa, andare a leggere la guida su come installare VS Code e poi tornare.

Possiamo aprire quella directory e vediamo che chiede se ci fidiamo degli autori. Dato che siamo noi gli autori, possiamo fidarci di noi stessi. E puoi vedere che abbiamo un po' di spazio, e questo sarà il punto in cui i file appariranno sul lato. In basso c'è un terminale, e possiamo aprire OpenCode proprio in quel terminale. Quindi possiamo usare OpenCode in basso e poi visualizzare i file in alto. Dato che voglio ingrandire il mio schermo, per un attimo li terrò separati, con OpenCode da un lato e tutti i file dall'altro, giusto per vedere cosa sta succedendo.

Entriamo nella nuova directory che abbiamo appena creato e apriamo OpenCode lì. Qualcuno ha suggerito di provare un modello diverso, Big Pickle. Non ho mai usato Big Pickle. Proviamo e vediamo cosa succede. Non stiamo facendo nulla di complesso qui.

## Cos'è una pagina web

Voglio parlare un po' qui di cos'è una pagina web e di come funziona una pagina web. Nei prossimi tempi faremo molto JavaScript, CSS, cose complicate. Oggi facciamo solo le cose più basilari. Se sai qualcosa sui siti web, probabilmente ti sembrerà molto semplice. Se non sai nulla, spero che questo sia un buon primer per ciò che verrà dopo.

Parliamo un po' di cos'è una pagina web standard e semplice. Per questo possiamo semplicemente usare il mio sito web personale esistente. È piuttosto semplice. È solo del testo su una pagina. Puoi andare su qualsiasi sito web, fare clic con il tasto destro e andare su Visualizza sorgente pagina, e vedrai qualcosa del genere, che è un sacco di roba. Questo è HTML.

![Il sorgente HTML del sito web personale di Jeremy, che mostra il doctype, i tag head, i meta tag e il titolo.](/images/projects/build-your-personal-homepage/setting-up-the-project/ihid-page-source.webp)

HTML è famoso per avere questo minore-di all'inizio e maggiore-di alla fine di diverse cose. Questo è ciò che chiamiamo un tag head. Poi abbiamo del CSS. CSS riguarda lo styling. Ne parleremo tra un minuto. E poi abbiamo tutto il contenuto della pagina. Questa è l'intestazione. Puoi vedere l'intestazione qui che è viola. Ha un'immagine al suo interno. `img` sta per image, con un link a un'immagine. Ha del testo, una biografia di me, e poi altro testo suddiviso in paragrafi. `p` sta per paragrafo. Un po' più di informazioni, alcune intestazioni. Questa è un'intestazione di livello due, questa è un'intestazione di livello uno. E questo quaggiù è JavaScript, che sembra leggermente familiare se hai fatto Coding Fundamentals.

Quando abbiamo fatto il bootcamp l'anno scorso e abbiamo fatto i fondamenti dello sviluppo web, abbiamo passato molto tempo a guardare questo HTML in grande profondità, e il CSS in grande profondità. Assicurandoci che tu capissi tutti i diversi tag e come funzionano. Anche capire il CSS e come possiamo usarlo per dare stile alle cose.

Questo è un esempio di come penso che le cose si siano ribaltate. Ora penso che ciò che vogliamo fare sia semplicemente fare cose, e poi guardare ciò che abbiamo fatto e capire che aspetto ha. Quindi invece di quello che avrei raccomandato prima, e che in effetti avresti dovuto fare prima, che era iniziare a scrivere tutto questo, quello che raccomando ora è che semplicemente facciamo fare al nostro LLM una struttura davvero, davvero di base che possiamo usare.

## index.html

L'altra cosa da sapere è che c'è questa convenzione di lunga data per cui un file chiamato `index.html` è la prima pagina di un sito web. Se vai su ihid.info/index.html, questo è effettivamente ciò che vedi, la prima pagina. La regola è che se non metti nulla dopo il dominio, cerca di vedere se c'è un file chiamato index.html, e se c'è, mostra semplicemente il suo contenuto. Questo index.html è un file molto speciale. Non fa davvero nulla di magico. È solo uno standard. Ma molti siti web tradizionalmente hanno questo come modo di fare qualcosa.

Quindi se hai OpenCode aperto, puoi dire:

> Crea un index.html che abbia lo scheletro più essenziale per una pagina, con un'intestazione del mio nome, Jeremy Walker, e una riga di biografia di questo.

Abbiamo una svolta qui. Potremmo, se volessimo, dire «vai via e creami un intero sito web», e lo farebbe. Ma succederebbero due cose. Uno, non sarebbe un sito web che vogliamo. Man mano che andiamo avanti, penseremo a cosa sono quei siti web, e ti sfiderò effettivamente ad andare via e pensare a un sito web. Ne parleremo tra un minuto. Ma anche, ti darebbe così tanta roba, e tu non impareresti da essa. Mentre invece, facendo questi piccoli passi, è così che imparerai come funzionano le cose.

Quindi inviamo questo, ed è quello che ha scritto. Ora possiamo guardare in VS Code e aprirlo. Questo è il mio flusso di lavoro quando faccio questo. Ho il mio intero sito web qui, forse migliaia di file diversi, e faccio lavorare il mio agente sui file. E poi se devo controllare qualcosa, vedere cosa sta facendo, modificare cose, lo apro semplicemente qui e ci do un'occhiata.

E poi l'altra cosa che possiamo fare ora che abbiamo questo file è effettivamente aprirlo in Chrome. Se fai clic con il tasto destro sul file e scegli Apri con Chrome, ora puoi vedere che abbiamo una pagina che abbiamo appena creato. Quindi congratulazioni. Hai costruito una homepage per te. Non è una homepage molto eccitante o bella, ma è una homepage.

![La homepage essenziale aperta in Chrome. Un'intestazione che dice Jeremy Walker e una riga di biografia, senza stile.](/images/projects/build-your-personal-homepage/setting-up-the-project/first-barebones-homepage.webp)

## Capire cosa ha creato

Voglio che ci prendiamo un minuto, e questa è la mentalità in cui voglio sempre che tu sia, di prenderci un minuto per guardare cosa sta succedendo qui. Il modo in cui voglio incoraggiarti a farlo, ora che l'hai creato, è dire:

> Spiegami cosa fa ogni parte.

Puoi usare questo ciclo non solo per fargli fare cose, ma anche per capire, per costruire conoscenza su come funzionano le cose. Non dovrebbe essere una domanda troppo complessa per lui, dato che a) l'ha appena scritta, e b) è molto semplice. E spiega. Ecco qua.

La prima riga, il tag doctype, dice al browser che questo è un documento HTML5. Quindi cosa sta succedendo davvero qui? Cos'è questo HTML? Beh, questo browser è Chrome (sono disponibili altri browser). Sa come leggere un file HTML e come metterlo sullo schermo in un modo che tu possa vedere. HTML è una specifica. Sta per hypertext markup language. Ha questo aspetto, con un sacco di tag e bit di informazioni, e Chrome, o qualsiasi altro browser, può leggere questi tag e metterli su uno schermo.

Per il momento dimentica la parte in cima. Guarda solo il body. Sta mettendo un'intestazione e sta mettendo del testo di paragrafo. Questo `h1` sta per intestazione di livello uno. E puoi vedere, dato che questa è un'intestazione di livello uno, Chrome sa di renderla un po' più grande e un po' più in grassetto. Mentre questo `p` è un paragrafo. Chrome sa di renderlo un po' più piccolo.

Potremmo, se volessimo, mettere qui altri tag. Questa è una lista non ordinata, `ul`, e all'interno avremmo elementi di lista, `li`. Una cosa che è successa da quando ho iniziato a usare Claude è che non riesco più a digitare molto bene. E così possiamo mettere insieme diversi tag, e questo ci darà alcuni punti elenco.

Quindi questa è l'anatomia, le ossa, di una pagina web. Ogni singola pagina web è uguale. Se andiamo su jiki.io e visualizziamo il sorgente della pagina, puoi vedere che è esattamente lo stesso. È un sacco di questi tag. Possiamo vedere che è lo stesso. Abbiamo appena usato una lista non ordinata, un elemento di lista, un link con del testo con un'icona accanto. Questo è ciò che è HTML. Ogni volta che crei un sito web, da ora fino alla fine della storia, stai sempre producendo HTML per un browser web.

Finiamo di leggere ciò che ha così gentilmente messo insieme. Quindi cosa abbiamo dopo? Abbiamo il doctype, che dice che questo è un documento HTML. Poi diciamo ok, questo è l'inizio del nostro documento HTML, e la lingua di questo documento è l'inglese.

Poi abbiamo due parti. Abbiamo la head e abbiamo il body.

La prima cosa nella head è quali caratteri stiamo usando, e stiamo usando questo set di caratteri chiamato UTF-8. Ognuno di questi è un carattere. Stiamo dicendo che possiamo usare qualsiasi carattere che sia un carattere latino, romano, come questi, o potremmo anche usare emoji qui. Se prendiamo un'emoji, possiamo metterla direttamente in questo documento, e poi aggiornare, e abbiamo un'emoji sulla pagina. Questo è ciò che significa. Sta dicendo che questi sono tutti i caratteri che usi comunemente. Questo è il nostro set di caratteri standard.

Abbiamo anche un viewport. Non dobbiamo preoccuparcene per ora.

E abbiamo un titolo. Il titolo è Jeremy Walker. Questo titolo è il titolo che appare nella parte superiore della scheda. Una cosa a cui penserai molto mentre programmi è quali titoli vuoi che appaiano lì, così quando le persone hanno diverse schede aperte, ottengono qualcosa che vogliono lassù. Possiamo anche cambiare cose come la favicon. Puoi vedere che non l'abbiamo ancora fatto, quindi non abbiamo un'icona lì.

Questa sezione head è tutto ciò che non appare sullo schermo. Tutto ciò che i motori di ricerca potrebbero guardare, e altre cose del genere, vive nella head. E poi il body è tutto nello spazio quadrato sottostante. E questa è letteralmente un'intestazione, un paragrafo e una lista.

Quindi questo è ciò che ci dice la spiegazione. Il tag `html` è l'elemento radice. La head è metadati. Metadati significa semplicemente dati che riguardano la pagina, non cose che vedi. Il charset è la codifica dei caratteri che fa sì che le tue emoji e alcuni altri caratteri di lingua vengano visualizzati. Non vogliamo preoccuparci del viewport. E poi il body è l'altra roba che abbiamo guardato.

Per quelli di voi che scrivono HTML da anni, mi dispiace che sia così basilare per voi, ma anche voi l'avete imparato da zero una volta.

## Aggiungere contenuti reali

Ora puoi usare il tuo agente per aggiungere dell'HTML. Prendiamo un po' più di testo. Se hai un profilo LinkedIn, potresti voler andare a prendere del testo da lì. In effetti, facciamolo. Andiamo sul mio LinkedIn e prendiamo alcune informazioni da lì. E possiamo darle al nostro LLM. Possiamo dire:

> Ecco alcune informazioni dal mio LinkedIn. Strutturale in modo sensato sotto l'intestazione nella pagina.

Gli diamo questo testo, e lui andrà via e lo strutturerà per noi. Di nuovo, tornando indietro di due anni, avresti dovuto scrivere manualmente i tag, scrivere tutta questa roba. Invece, ora abbiamo la capacità di dargli semplicemente del testo e fargli mettere una struttura sensata intorno. Ora, non gli stiamo chiedendo qui di dargli uno stile, o di farlo apparire in un modo particolare. Gli stiamo solo chiedendo di metterci un po' di struttura intorno, un po' di HTML intorno. Vediamo quanto è bravo Big Pickle a farlo.

Una volta superata questa prima sessione, comunque, userò Claude per la maggior parte delle cose che faccio, solo perché lo conosco molto bene ed è anche veloce. Ma se stai seguendo da solo, ti consiglio di farlo. Se hai un LinkedIn, se hai un curriculum, puoi semplicemente copiare quella roba, metterla in OpenCode e chiedergli di costruire questa cosa.

Ha pensato per un po'. Ora sta preparando la modifica. E ha aggiunto il codice. Ecco qua. Ora abbiamo una bella intestazione di livello due «Esperienza» e abbiamo le altre informazioni. Se andiamo su Chrome e aggiorniamo, ora possiamo vedere che abbiamo un po' di codice ben strutturato ed essenziale.

![La homepage in Chrome che ora mostra una sezione Esperienza con voci strutturate per ogni ruolo.](/images/projects/build-your-personal-homepage/setting-up-the-project/homepage-with-experience.webp)

## I tuoi compiti

La prossima cosa a cui pensare è come vogliamo che appaia la nostra homepage personale. Questa è una domanda su cui voglio che tu passi del tempo. Ti incoraggerò molto durante questo corso a prendere penna e taccuino, sederti in un posto tranquillo, il più lontano possibile da uno schermo, e semplicemente pensare.

Costruiremo una homepage per noi stessi. Quella homepage deve avere alcune cose. Deve avere una panoramica di noi stessi e dei nostri interessi. Deve avere una pagina che è il nostro curriculum, il nostro CV. Avrà una pagina sul nostro portfolio, tutti i progetti che stiamo realizzando, e poi si collegherà ad altre pagine su quei progetti. Quindi costruiremo un grande sito web multipagina nel tempo. Faremo la maggior parte di questo nella seconda sessione. Oggi stiamo solo facendo questa pagina di panoramica. Ma voglio che tu rifletta, con carta e penna, e disegni come vorresti che fossero le diverse pagine.

E pensa un po' a uno stile. Guarda le pagine di altre persone. Trova altre persone nella comunità di Exercism. Se guardo Erik Schierboom, che lavorava per noi, ha una pagina di destinazione principale davvero molto semplice, e poi una pagina about, che è piuttosto ordinata, con una bella cosine che appare in fondo. Ha alcune informazioni sul software, posti in cui ha tenuto interventi, e poi alcuni link. Potresti trarre ispirazione da questo. Oppure se guardiamo SleeplessByte. Forse ricordi DJ se eri ai bootcamp, o dai mentor. Questa è la pagina di DJ. Quindi vai a trovare persone che ti interessano e lasciati ispirare da ciò che hanno fatto. Pensa visivamente a che tipo di stile ti piace. E parleremo un po' di come creare immagini e di come puoi usare la tecnologia per creare immagini.

Esplora le idee di persone diverse. Sono sempre un fan di un'atmosfera molto minimalista. E per questo progetto, andrò via nei prossimi giorni e penserò anche a come voglio che appaia la mia nuova pagina di destinazione, perché questa homepage la farò per me stesso. Penserò a come si suddivide. Voglio una sezione per la mia fotografia. Voglio una sezione dove posso avere i miei podcast e video e cose che ho fatto. Voglio un po' di biografia, e voglio un CV, un curriculum. Quindi andrò via e penserò a queste cose.

I tuoi compiti per questa settimana sono andare a pensare a questo, progettarlo e poi iniziare a strutturare quelle pagine. Puoi creare più pagine. Possiamo creare un'altra pagina, chiamiamola il mio curriculum, e possiamo copiare e incollare il nostro contenuto al suo interno, eliminare le parti che non ci servono e cambiare il titolo in «Curriculum di Jeremy». Ora abbiamo la nostra pagina index, ma possiamo anche andare su resume.html e averla come un'altra pagina.

Quindi, questa settimana:

- Pensa alle diverse pagine che vorrai, e ai diversi contenuti che metterai in quelle pagine.
- Installa VS Code.
- Installa OpenCode e configura un modello.
- Lavorando con OpenCode, metti insieme alcune di queste diverse pagine.

Non preoccuparti ancora di stilizzarlo. Non voglio che ti ci addentri davvero. Puoi giocare se vuoi, incoraggerò sempre le persone a essere curiose, ma mi piacerebbe insegnarti quali penso siano i modi migliori per farlo nel mondo moderno. Sicuramente non iniziare a usare framework JavaScript o qualsiasi altra cosa. Mantieniti solo su HTML essenziale, e poi lo stratificheremo in ogni sessione fino a quando non diventerà sempre più potente e sempre più complesso. In questo modo capirai come accade tutto.

Se sei interessato, vai a fare ricerche su altro HTML. Scopri quali sono i diversi tag e cosa significano. Fare ricerche al giorno d'oggi può essere semplice come chiedere:

> Dimmi i 20 tag più comuni.

E poi:

> Dimmi a cosa serve ciascuno di essi.

È così che faccio ricerche.

Faremo la prossima sessione tra qualche giorno. A quel punto, spero che tu verrai con OpenCode installato, VS Code installato e una serie di pagine. La prossima volta inizieremo a collegare insieme quelle pagine, ad aggiungere un po' di navigazione, ad aggiungere un po' di stile, e faremo anche in modo di distribuire tutto questo su GitHub, e forse ti procureremo anche un dominio personalizzato, così potrai avere il tuo sito web personale su un dominio gratuitamente. Potresti anche volerti iscrivere a GitHub questa settimana, su github.com. Pubblicherò guide per VS Code, OpenCode e GitHub, e potrai seguire quelle guide.

Questa è la fine di questa prima sessione. Grazie per aver guardato. Spero che sia stato interessante. Spero che ti sia piaciuto. Se hai domande su qualsiasi cosa sia stata trattata, per favore vai sul forum. Io sarò lì, e non vedo l'ora di rispondere alle domande ed esplorare le domande. Non ho necessariamente tutte le risposte. Anch'io amo imparare. Quindi chiedi qualsiasi cosa ti interessi. E non vedo l'ora di vederti alla prossima sessione.
