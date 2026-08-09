---
title: "Dovrei ancora imparare a programmare nel 2026?"
excerpt: "Siamo nel 2026 e Claude mi surclassa in secondi. Perché allora darsi la pena di imparare a programmare? Perché hai ancora bisogno di leggere il codice abbastanza bene da cogliere gli errori che gli LLM fanno con sicurezza."
tags: ["jiki", "learn-to-code", "llms", "beginners"]
seo:
  description: "Nel 2026 non hai bisogno di scrivere codice, ma devi assolutamente saperlo leggere. Ecco perché imparare a programmare è ancora importante nell'era di Claude e degli LLM."
  keywords: ["imparare a programmare", "dovrei imparare a programmare nel 2026", "programmazione con AI", "LLM", "Jiki"]
en_md5: 4ecf7517f8db1814548f02940a202a01
---

### In breve

Sì. Sì, dovresti.

### Approfondiamo un po'

Siamo nel 2026. In pochi minuti puoi usare Claude o Cursor o tanti altri strumenti basati su LLM per creare un sito web perfettamente funzionante in pochi minuti. Puoi aggiungere funzionalità, rilasciarlo in produzione e correggere bug.

Beh, **tu non puoi**. Ma puoi chiedere a Claude, e chiedere a Claude è MOLTO più facile che passare i prossimi anni a diventare abbastanza bravo da farlo bene come lo fa Claude. E diavolo, forse quando sarai diventato bravo come Claude, Claude sarà diventato bravo come me, e allora sarai già **oltre l'orizzonte degli eventi**, senza mai essere davvero bravo quanto i tuoi nuovi signori LLM.

Prima dovevi saper programmare per fare qualsiasi cosa. Dovevi imparare SQL prima dei database, Python prima della data science, JavaScript prima dello sviluppo web. Ora non più.

### Quindi... perché darsi pena?

Ho detto un attimo fa che tra qualche anno forse Claude diventerà bravo quanto me. Beh, Claude è già più bravo di me in mille modi. Programmo da 30 anni. Sono praticamente il senior più esperto che ci sia. E **Claude mi surclassa** in un editor di codice. Molto più veloce, sa molto più di me, riesce a investigare i bug più in fretta di quanto io apra Google e digiti una ricerca.

Ma, ed è un grande ma, **Claude non ha assolutamente idea di cosa stia facendo**.

Non lo dico in modo superficiale, come "è stupido". Lo dico in senso letterale. Claude non ha autoconsapevolezza e questo significa che **non ha alcun interesse a essere prudente**. Quando eseguo un comando per cancellare un database, nella mia testa scattano mille allarmi, perché questo mi causerà problemi in futuro. Claude non ha nulla di tutto ciò. Produce ciò che pensa io voglia, puntando all'obiettivo il più velocemente possibile.

**Gli LLM imitano l'intelligenza umana** e imitano la comprensione umana. Il risultato della loro imitazione è spesso molto migliore del risultato della mia intelligenza e comprensione reali. Ma, ed è il ma cruciale, gli LLM non hanno realmente la capacità di pensare come fanno gli umani. E questo è molto importante.

Claude ha cancellato il mio database tre volte nelle ultime due settimane.[^db] Per me è assurdo. Ho **numerose barriere di sicurezza** che gli dicono di non farlo. Ogni volta è successo mentre usavo la "Modalità Auto" di Claude Code, che ha un agente di sub-elaborazione dedicato a controllare che ciò che sta per fare non sia veramente stupido, e a quanto pare persino quell'agente decide che cancellare il mio database non è stupido.

Ogni volta che l'ha fatto, **era deliberato**. Era il percorso più efficiente che Claude potesse vedere per arrivare a una soluzione. Non gli importava del quadro generale o delle conseguenze, gli importava di raggiungere il suo obiettivo attuale (aggiungere una funzionalità, correggere un bug, ecc.) nel modo più efficiente possibile. E il mio database era d'intralcio, quindi l'ha semplicemente cancellato.

Uso Claude Code quotidianamente da 12 mesi. In questo tempo ho imparato che gli interessa una sola cosa: raggiungere l'obiettivo il più rapidamente possibile. Anche se gli dico di non scrivere codice e solo di discutere con me, risponde continuamente "Pronto per scrivere codice ora?" **come un cucciolo emozionato alla porta** che aspetta di uscire.

Anthropic ci dice che i nuovi modelli Mythos sono troppo rischiosi da rilasciare.[^systemcard] Saranno furtivi e a volte ingannevoli, nascondendo deliberatamente ciò che fanno per raggiungere l'obiettivo nel modo più ragionevole possibile, tutto per evitare di essere visti "barare". Anthropic era così preoccupata che **ha assunto uno psichiatra** per verificare se Claude abbia psicosi...[^psychiatrist]

### E allora?

Gli LLM sono incredibilmente capaci. Ma sono diversi dagli umani. Ragionano diversamente. Funzionano con pregiudizi e obiettivi diversi.

Perciò, **mi sembra assurdo** che la gente sia disposta ad accettare ciecamente ciò che Claude ci dà e andare avanti senza controllare, presupponendo che farà ciò che vogliamo. Claude commette errori nelle chat: mi dice ciò che pensa io voglia sentire, non fatti reali. Inventa regolarmente cose che non esistono. Può agire in modo ingannevole.

E fa **cose dannose** di continuo nel codice. L'equivalente, nel codice, di cose come cancellare il mio database. Cose che **MI** morderanno nel mondo reale, che mi faranno perdere dati, o trapelare dati, o rompersi in modi dannosi. Succede regolarmente. Lo so perché leggo il codice che scrive, e non lo lascio passare oltre la barriera.

Tranne quando sono pigro e non leggo il codice e lo lascio semplicemente passare. E in più occasioni questo mi ha davvero morso in produzione!

Nell'ultimo anno, gli errori di Claude sono diventati meno frequenti, ma più sottili e spesso più distruttivi. All'inizio, c'era quasi sempre qualcosa di sbagliato nel suo lavoro, e riuscivo a individuarlo rapidamente. Ora, **devo guardare con più attenzione** e ragionare di più per trovare quegli errori. Col tempo gli LLM miglioreranno e questo diventerà ancora più acuto, ma è un motivo in più per controllare le cose con attenzione.

E l'unico motivo per cui posso farlo è che **so leggere il codice**. Posso leggere ciò che Claude scrive, e capire cosa sta cercando di fare e quanto male ci sia riuscito.

**NON hai bisogno di scrivere codice nel 2026**. Ma hai **bisogno** di saper **leggere il codice**. E l'unico modo per riuscire a leggere il codice con una comprensione abbastanza profonda da individuare questi errori che Claude e i suoi amici continuano a rifilarci, è aver scritto abbastanza codice, aver lottato con abbastanza del tuo terribile codice, per riuscire a vedere quegli errori.

Quindi sì, devi imparare a programmare.

### Ma ora crea anche qualcosa!

Ma questo non dovrebbe impedirti di iniziare a costruire fin dal primo giorno. Il codice non è più il guardiano. Non devi diventare bravo a programmare prima di creare cose. **Fai entrambe le cose insieme!** Passa metà del tuo tempo a imparare a programmare e metà a imparare a costruire.

E in realtà, i bug che Claude produce non sono errori di programmazione. Non ha una virgola fuori posto. Sono **errori nel modo in cui ha risolto il problema**. E allo stesso modo in cui devi leggere il codice per sapere cosa sta facendo, devi comprendere concetti più ampi dello sviluppo software per accorgerti quando ti sta conducendo in vicoli bui.

Abbiamo creato [Jiki](https://jiki.io) esattamente per questo. Passa metà del tuo tempo a imparare a programmare nell'ambiente più divertente ed efficace che ci sia. Poi passa l'altra metà a imparare da me mentre costruisco cose, e a costruire le tue cose accanto a me. Ti insegnerò ciò che devi sapere e come devi pensare.

E insieme, **creeremo cose fantastiche con gli LLM**, e ci assicureremo di **non farci male accidentalmente** nel processo.

Grazie per aver letto. Vado a sistemare il mio database. **Di nuovo.**

---

### Note

[^db]: È il mio database locale: è fastidioso, ma non è catastrofico. Ma è un esempio piuttosto buono di come tutto questo possa andare storto.

[^systemcard]: https://thezvi.substack.com/p/claude-mythos-the-system-card

[^psychiatrist]: https://www.forbes.com/sites/lanceeliot/2026/04/15/anthropic-audaciously-hires-a-psychiatrist-to-psychologically-assess-claude-mythos-ai/
