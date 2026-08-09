---
title: "L'affascinante storia dell'editor di testo"
excerpt: "Dai fori nel cartone agli editor che scrivono codice per te. La storia dell'umile editor di testo e la rivalità tra Vi ed Emacs, più vecchia della maggior parte delle persone viventi oggi."
tags: ["history", "text-editors", "vim", "emacs", "coding"]
seo:
  description: "La storia dell'editor di testo, dalle schede perforate e dagli editor a riga di comando fino a Vi, Emacs, VS Code e l'era dell'IA. Come il divario tra un'idea e il codice in esecuzione si è sempre più ridotto."
  keywords: ["storia degli editor di testo", "vi vs emacs", "storia dell'editor di testo", "storia degli editor di codice"]
en_md5: 1746a724d6fb171afc5dc961c3519e37
---

## Introduzione

Da quando ho iniziato a programmare 30 anni fa, ho usato un editor di testo quasi ogni giorno. Ne ho provati molti diversi e di tanto in tanto sono diventato un po' integralista su quale fosse il migliore.

Per tutto quel periodo, uno dei primi riti di passaggio per un nuovo sviluppatore è stato installare e imparare a usare un editor di testo. Ma mentre lo sviluppo agentico cambia cosa significa essere uno sviluppatore, l'era del dominio dell'editor di testo sta forse giungendo al termine.

Così ho pensato che sarebbe interessante guardare alla storia dell'editor di testo. Dai fori nel cartone e le attese di ore, alla modifica di una riga alla volta su una stampante, fino a una rivalità tra Vi ed Emacs che è più vecchia della maggior parte delle persone viventi oggi.

Questa è la storia dell'umile editor di testo.

## Prima dell'editor: fori nel cartone (1950-1960)

È difficile immaginare la programmazione senza uno schermo su cui vedere il codice, ma è da lì che tutto è partito.

Negli anni '50 e '60 lo schermo non era ancora stato inventato e i programmi venivano perforati fisicamente su schede di cartone (o nastri di carta), una riga di codice per scheda. "Modificare" significava riperforare una scheda o scambiarle fisicamente nel mazzo.

Se il mio codice impiega più di qualche secondo a eseguirsi, mi frustro molto per il ciclo di feedback lento, ma in quel periodo il feedback si misurava in ore. Consegnavi il tuo mazzo a un operatore, che lo metteva in coda per l'esecuzione. Ricevevi la stampa ore, o forse giorni, dopo. Immagino che un refuso non fosse proprio un problema trascurabile allora...!

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/keypunch-operator.webp" alt="Un'operatrice di perforatrici negli anni '50, mentre inserisce dati su schede" />
  <figcaption>Un'operatrice di perforatrici negli anni '50. Foto dell'U.S. Census Bureau via <a href="https://commons.wikimedia.org/wiki/File:Keypunch_operator_1950_census_IBM_016.jpg">Wikimedia Commons</a>, dominio pubblico.</figcaption>
</figure>

## Il computer comincia a rispondere (anni '60)

Due invenzioni trascinarono la modifica fuori da quel lento mondo a lotti e la portarono in qualcosa di interattivo.

La prima fu la **telescrivente**. La telescrivente sostituì il concetto di lotti di schede pre-perforate. Al suo posto, si digitava su una tastiera. I tasti premuti venivano inviati alla macchina in tempo reale, e questa stampava le sue risposte direttamente su un rotolo di carta. Non c'era ancora uno schermo, ma per la prima volta si aveva un canale vivo, di andata e ritorno, verso il computer invece di una pila di cartone.

La seconda fu il **time-sharing**. Senza il time-sharing, un computer sarebbe rimasto collegato a una sola persona alla volta, limitato dalla velocità con cui quella persona poteva digitare ed elaborare le risposte. Questo portava a un'enorme quantità di tempo sprecato in attesa che l'operatore umano agisse. Il time-sharing risolse il problema permettendo alla macchina di passare rapidamente da una persona all'altra. Più persone potevano essere collegate alla stessa macchina, e questa passava da una all'altra così velocemente che ciascuna aveva l'illusione di avere l'intero computer per sé.

Metti insieme queste due innovazioni e ottieni una vera conversazione con la macchina. E una volta che puoi avere una conversazione, puoi iniziare a modificare il codice mentre sei seduto lì, una riga alla volta, invece di riperforare schede e sperare. Ed è esattamente ciò che i primi veri editor ti permettevano di fare.

<figure class="post-figure" style="max-width:300px">
  <img src="/images/blog/the-history-of-the-text-editor/teletype-asr33.webp" alt="Un terminale Teletype Model 33 ASR, che stampava l'output su carta anziché su uno schermo"/>
  <figcaption>Teletype Model 33 ASR. Foto di ComputerGeek7066 via <a href="https://commons.wikimedia.org/wiki/File:Teletype_model_33_ASR.jpg">Wikimedia Commons</a>, CC BY-SA 4.0.</figcaption>
</figure>

## Gli editor a riga: ed, QED e TECO (1962-1971)

Gli anni '60 portarono un altro enorme cambio di paradigma. Il tuo programma smise di essere un oggetto fisico che portavi in giro (un mazzo di schede in una scatola) e divenne un file con un nome, residente sul disco del computer. Invece di dover stampare una nuova scheda per modificare il programma, ora potevi davvero modificarlo.

Non avevamo ancora gli schermi, però. Tutto ciò che eseguivi veniva stampato su un pezzo di carta. Quella stampa è ciò che oggi chiamiamo "hard copy", una copia cartacea permanente delle istruzioni che davi al computer.

Fu la prima volta in cui avemmo qualcosa di simile agli editor moderni, ma erano ancora piuttosto alieni perché erano **orientati alla riga**. Lavoravi una riga alla volta, ed erano basati su comandi. Inserivi comandi (alcuni dei quali risultano molto familiari a chi ha usato Vim) e quei comandi apportavano modifiche. Ad esempio, modificare una poesia per correggere un refuso poteva apparire così:

```
input         output            what it does
------------  ----------------  ----------------------------------------
ed poem       45                open the file "poem"; ed prints its size
1,$p                            print all lines - ed then replies:
              Roses are red
              Violets are blu   the typo!
              Sugar is sweet
2             Violets are blu   jump to line 2; ed prints it
s/blu/blue/                     on this line, change blu to blue
p             Violets are blue  print the current line (now fixed)
w             46                write/save; ed prints the new size
q                               quit
```

Le poche persone che programmavano a quel tempo ti avrebbero probabilmente parlato di tre degni di nota editor di quel periodo:

- **TECO** creato nel 1962 da Dan Murphy al MIT, era stato originariamente pensato per modificare nastri di carta perforata. Era notoriamente criptico e fungeva anche da linguaggio di programmazione (questo sarà importante in seguito)
- **QED** creato nel 1965/66 da Butler Lampson e L. Peter Deutsch a Berkeley, fu uno dei primi editor a riga. Due anni dopo, Ken Thompson lo riscrisse e gli aggiunse le **espressioni regolari** (un tipo di linguaggio di programmazione usato per trovare corrispondenze di pattern nel testo), che fu la prima volta che comparivano in un editor.
- **ed** rilasciato all'inizio degli anni '70 da Ken Thompson ai Bell Labs, ridusse le idee di QED a un editor minimale fornito con il primo Unix. `ed` è ancora installato su ogni Mac e macchina Linux oggi, e il suo linguaggio di comandi è l'antenato diretto di `grep`, `sed` e dei comandi `:` di Vi (tutti hanno [tracce su Exercism](http://exercism.org/tracks) se vuoi impararli!)

TECO è anche la sede di quello che è ampiamente considerato il più antico easter egg software conosciuto (una caratteristica nascosta, come quelle presenti in molti giochi oggi). In una versione successiva di TECO, digitando `make love` si riceveva la risposta impertinente `not war?`. Fu introdotto di nascosto intorno al 1967 presso lo Stanford AI Lab, circa un decennio prima che gli easter egg diventassero una cosa nei videogiochi. Puoi [installare TECO](https://github.com/blakemcbride/TECOC) e provarlo!

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/teco-easter-egg.webp" alt="Un terminale verde su nero che mostra il comando make love a cui TECO risponde Not war?" />
  <figcaption>L'easter egg di TECO <code>make love</code> / <code>not war?</code>, riprodotto in una build moderna di TECO.</figcaption>
</figure>

## Vedere l'intera pagina: Bravo e WYSIWYG (1974)

Nel frattempo, allo **Xerox PARC**, iniziava un ramo diverso della storia.

Nel 1974, Butler Lampson e Charles Simonyi rilasciarono **Bravo**, il primo editor **WYSIWYG** (acronimo di «what you see is what you get», ovvero ciò che vedi è ciò che ottieni). Mostrava testo formattato con font reali su uno schermo bitmap e usava il **mouse** per selezionare il testo (il mouse era stato brevettato molto tempo prima, ma questa è un'altra storia!).

Un po' come Vim, aveva due modalità: una "Modalità Comando" in cui la pressione dei tasti eseguiva azioni, e una "Modalità Inserimento" in cui digitavi il testo sullo schermo.

Questo è in realtà un punto di svolta chiave nella nostra storia. Da un lato, Simonyi portò queste idee in Microsoft dove costruì Word, regalandoci i word processor. Dall'altro lato, lo schermo, il mouse e l'editing modale confluirono direttamente negli editor di codice che seguirono.

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/xerox-alto.webp" alt="Un computer Xerox Alto, che eseguiva Bravo, il primo editor WYSIWYG" />
  <figcaption>Xerox Alto. Foto via <a href="https://commons.wikimedia.org/wiki/File:Xerox_Alto.jpg">Wikimedia Commons</a>, CC BY-SA 2.5.</figcaption>
</figure>

## La grande rivalità: Vi ed Emacs (dal 1976 in poi)

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/emacs.webp" alt="Uno screenshot di GNU Emacs durante la modifica di codice" />
  <figcaption>GNU Emacs. Screenshot di tecosaur via <a href="https://commons.wikimedia.org/wiki/File:Writing_and_compiling_C%2B%2B_in_Emacs.png">Wikimedia Commons</a>, CC BY-SA 4.0.</figcaption>
</figure>

- Il cuore della storia: nel **1976**, su coste opposte, nacquero i due editor che ancora oggi dominano la programmazione seria, da filosofie opposte
- **Emacs** (MIT: Richard Stallman, con David Moon e Guy Steele): nacque come un insieme di **macro per TECO** ("Editor MACroS")
- La grande idea di Emacs: un editor dovrebbe essere infinitamente **programmabile ed estensibile** da parte dell'utente. È meno un editor di testo che un ambiente Lisp in cui capita di modificare testo
- Stallman lo ricostruì come **GNU Emacs** nel 1984, e divenne un fiore all'occhiello del movimento del software libero
- **Vi** (Berkeley: Bill Joy, allora studente di dottorato, poi co-fondatore di Sun): una modalità **visuale** a schermo intero costruita sopra il nucleo di editing a riga di ed

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/vim.webp" alt="Uno screenshot di Vim durante la modifica di codice" />
  <figcaption>Vim, il più popolare discendente moderno di Vi. Screenshot di Carolinedmoreschi via <a href="https://commons.wikimedia.org/wiki/File:Dracula_Theme_being_used_on_Vim.png">Wikimedia Commons</a>, CC BY-SA 4.0.</figcaption>
</figure>

- Vi fu progettato sotto vincoli brutali: doveva essere utilizzabile tramite un **modem a 300 baud**, dove ogni carattere inviato allo schermo contava
- Quella scarsità produsse il genio di Vi: l'**editing modale**, in cui le sequenze di tasti sono un linguaggio di comandi compatto per spostarsi e trasformare il testo
- **Vim** ("Vi IMproved", 1991) aggiunse annullamento multi-livello, evidenziazione della sintassi e plugin. **Neovim** lo modernizzò ulteriormente in seguito
- La **"guerra degli editor"** tra i due schieramenti è la rivalità più antica nel software, ed è davvero una divisione filosofica: Emacs (ambiente massimale, programmabile, che fa tutto) contro Vi (minimale, modale, spietatamente efficiente)
- Entrambi sono ancora in uso quotidiano quasi 50 anni dopo, il che è sorprendente per qualsiasi software

## Editor per tutti noi: BBEdit, TextMate, Sublime (1992-2008)

- Man mano che i sistemi operativi grafici maturavano, apparve una nuova classe di editor per sviluppatori che volevano un'interfaccia grafica nativa, non un terminale
- **BBEdit** (1992, Mac): l'editor longevo che «non fa schifo»
- **TextMate** (2004, Mac): enormemente influente durante il boom di **Ruby on Rails**. Il suo sistema di "bundle" e snippet, e il suo formato di grammatica per l'evidenziazione della sintassi, divennero uno standard de facto che VS Code utilizza ancora oggi
- **Sublime Text** (2008): veloce, multipiattaforma, minimale. Introdusse cose che tutti copiarono, come la minimappa, i cursori multipli e una palette comandi fuzzy
- Sublime dimostrò che esisteva un enorme mercato a metà strada tra l'editor da terminale e l'IDE pesante

## L'era del web-tech: Atom e VS Code (2014-2015)

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/vscode.webp" alt="Uno screenshot di VSCodium, la versione open source di VS Code" />
  <figcaption>VSCodium, la build completamente open source di VS Code (visivamente identica al rilascio di Microsoft, ma con licenza MIT quindi può essere mostrata qui). Screenshot via <a href="https://commons.wikimedia.org/wiki/File:VSCodium_official_screenshot.png">Wikimedia Commons</a>, MIT.</figcaption>
</figure>

- **Atom** (GitHub, 2014): «un editor di testo hackerabile per il 21° secolo», costruito con tecnologie web (HTML, JS, Node) tramite quello che sarebbe diventato **Electron**. Hackerabile come Emacs, ma lento. GitHub lo ritirò nel dicembre 2022
- **VS Code** (Microsoft, 2015): anch'esso basato su Electron, ma più veloce e con tutto incluso (autocompletamento, debugging, Git integrato). Vinse nettamente e ora domina
- L'idea strutturale più importante di VS Code fu il **Language Server Protocol (LSP)**
- Prima del LSP, ogni editor doveva reimplementare da zero la "comprensione" di ogni linguaggio (autocompletamento, vai alla definizione, controllo degli errori)
- Con LSP, un linguaggio fornisce un "server" a cui qualsiasi editor può parlare. Ha disaccoppiato l'intelligenza del linguaggio dall'editor, e ora è uno standard di settore

## L'era dell'IA: editor che scrivono con te (dal 2021 in poi)

- Il capitolo più recente trasforma l'editor da uno strumento con cui si manipola il testo a un **collaboratore**
- **GitHub Copilot** (2021): autocompletamento AI inline, successivamente esposto tramite un proprio server linguistico in modo che qualsiasi editor possa collegarsi
- **Cursor** e **Windsurf**: fork di VS Code che ricostruiscono il ciclo di editing intorno all'IA (modifiche multi-file, chat, agenti) mantenendo le estensioni di VS Code
- **Zed** (Rust, open source nel 2024): un editor costruito da zero, accelerato via GPU, pensato per velocità, collaborazione e IA
- **Strumenti agentici** (come Claude Code): in cui l'"editor" guida sempre più se stesso, e l'umano rivede e dirige invece di digitare
- È interessante notare che LSP è stato riadattato ancora una volta, stavolta per fornire agli agenti IA un'intelligenza del codice precisa invece di ipotesi basate sulla ricerca testuale

## La fine di un'era? (oggi)

- Ogni era di questa storia ha compresso il divario tra avere un'idea e vederla eseguita: schede a lotti (ore), editor a riga (una riga alla volta), editor a schermo intero (l'intero file), intelligenza IDE (l'editor comprende il tuo codice), IA (l'editor scrive con te)
- Eppure i due editor del 1976, Vi ed Emacs, sono ancora qui. Le idee fondamentali (efficienza modale, estensibilità programmabile) sono sopravvissute a ogni ondata hardware
- Per 50 anni, imparare il proprio editor è stato un rito di passaggio. Questo potrebbe cambiare
- [Jiki tie-in / closing thought to go here]
- Grazie per aver letto
