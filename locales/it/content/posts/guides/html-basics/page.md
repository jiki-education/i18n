---
title: "Le basi di HTML"
excerpt: "Cos'è davvero una pagina web, come è costruita e i tag che userai per strutturare tutto ciò che creerai sul web."
tags: ["front-end-basics"]
seo:
  description: "Una guida per principianti all'HTML. Scopri cos'è l'HTML, come è strutturata una pagina web con head e body, e i tag più importanti da conoscere."
  keywords: ["html", "basi html", "imparare html", "tag html", "struttura pagina web", "principianti"]
en_md5: a3a8af4d009d64ef8339dc7e2661ef82
---

## Introduzione

In questa guida voglio parlare un po' di cos'è davvero una pagina web e di come funziona. Ci limiteremo alle cose più basilari. Se conosci già un po' di HTML, probabilmente ti sembrerà molto basilare. Se invece non lo conosci, questa dovrebbe essere una buona introduzione a tutto ciò che verrà dopo.

## Cos'è davvero una pagina web

Una pagina web è semplicemente un file di testo. Quando visiti un sito web, al tuo browser viene inviato un file HTML, che legge e disegna per creare la pagina che vedi.

Puoi verificarlo tu stesso in questo momento. Vai su un sito qualsiasi, fai clic con il tasto destro in un punto qualsiasi della pagina e scegli **Visualizza sorgente pagina**. Quello è l'HTML. Su un sito grande sembrerà travolgente, un mare di roba, ma è tutto fatto con lo stesso piccolo insieme di mattoni che vedremo qui sotto.

HTML sta per **HyperText Markup Language**. "Markup" significa semplicemente che prendiamo del testo e lo contrassegniamo con informazioni extra su cosa sia ogni parte. Il browser, che sia Chrome o qualunque altro, legge quei contrassegni e li usa per decidere come disporre tutto sullo schermo.

## I tag

L'HTML è famoso per avere dei **tag**, che iniziano con un `<` e finiscono con un `>`. Tra queste parentesi angolari mettiamo la cosa di cui parla il tag. Poi abbiamo del contenuto e infine un tag di chiusura, identico a quello di apertura ma con una barra in avanti.

Vediamo un esempio:

```html
<p>Hello there.</p>
```

La `p` sta per paragrafo. Scrivendo questo, stiamo dicendo al browser che vogliamo che visualizzi un paragrafo sullo schermo, e che il testo in quel paragrafo è "Hello there."

I tag possono anche portare informazioni aggiuntive chiamate **attributi**, che si trovano all'interno del tag di apertura. Un link è un buon esempio:

```html
<a href="https://jiki.io">Visita Jiki</a>
```

Per creare un link usiamo il tag `a` (che sta per anchor, per [motivi storici leggermente bizzarri](https://thehistoryoftheweb.com/brief-history-hypertext/)). Un link di solito ha un attributo `href`, che indica la destinazione, e il testo tra i tag è quello su cui si fa clic.

Alcuni tag non racchiudono contenuto, quindi non hanno un tag di chiusura. Un'immagine è l'esempio classico:

```html
<img src="photo.jpg" alt="Una mia foto in montagna" />
```

`img` sta per image. L'attributo `src` punta al file immagine, e l'attributo `alt` descrive l'immagine per le persone che usano screen reader. È anche ciò che viene mostrato se l'immagine non si carica.

## L'anatomia di una pagina

Ogni singola pagina web ha lo stesso scheletro, le stesse ossa. Ecco la pagina **valida** più minimale che puoi creare (puoi creare pagine non valide con meno HTML, che il browser visualizzerà comunque, ma iniziamo come intendiamo proseguire, comportandoci da sviluppatori responsabili!):

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Jeremy Walker</title>
  </head>
  <body>
    <h1>Jeremy Walker</h1>
    <p>I build things on the web.</p>
  </body>
</html>
```

Leggiamolo dall'alto.

La riga `<!doctype html>` dice al browser che questo è un documento HTML moderno. È un pezzo di codice obbligatorio. Scrivilo una volta in cima e dimenticatene.

Il tag `html` è l'elemento radice che racchiude l'intero documento. L'attributo `lang="en"` indica a browser e motori di ricerca che la pagina è scritta in inglese.

Al suo interno abbiamo due parti: l'**head** e il **body**.

### L'head

L'head è tutto ciò che **non** appare sullo schermo. Sono metadati, e metadati significa semplicemente dati sulla pagina piuttosto che contenuti visibili. Nel nostro esempio ci sono due cose:

- `<meta charset="UTF-8" />` indica il set di caratteri usato dalla pagina. UTF-8 è il set di caratteri standard e copre praticamente tutto: lettere latine, caratteri accentati, altri alfabeti, persino emoji. Se incolli un emoji nel tuo HTML, è questa riga che lo fa apparire correttamente. Includila sempre.
- `<title>` imposta il testo che appare in cima alla scheda del browser. È anche ciò che i motori di ricerca usano come titolo della tua pagina. Una cosa a cui ti troverai a pensare spesso mentre scrivi codice è cosa vuoi vedere lì quando qualcuno ha venti schede aperte.

Spesso vedrai un'altra riga nell'head, che vale la pena riconoscere:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Questo dice ai telefoni di mostrare la pagina a una dimensione sensata anziché rimpicciolirla completamente. Per ora non dobbiamo preoccuparcene oltre. Includila e vai avanti.

### Il body

Il body è tutto ciò che vedi realmente, tutto ciò che sta nel grande spazio rettangolare sotto le schede e la barra degli indirizzi. Ogni titolo, paragrafo, immagine e link vive all'interno del body. Il resto di questa guida riguarda i tag che ci vanno dentro.

## index.html

Prima di arrivare ai tag, c'è un'altra cosa che vale la pena sapere. C'è una convenzione consolidata per cui un file chiamato `index.html` è la prima pagina di un sito web. Se vai su un dominio senza aggiungere niente dopo, il sito controlla se esiste un file chiamato `index.html` e, se c'è, ti mostra semplicemente il suo contenuto. Non c'è nulla di magico nel file stesso. È solo uno standard che quasi tutti i siti web seguono, quindi la tua homepage dovrebbe stare in un file con quel nome.

## I tag che userai per primi

Puoi costruire una pagina davvero utile con meno di dieci tag. Diamo un'occhiata, più o meno nell'ordine in cui li userai.

### Titoli

I titoli sono a sei livelli, da `h1` a `h6`:

```html
<h1>Jeremy Walker</h1>
<h2>About me</h2>
<h3>My photography</h3>
```

L'`h1` è il titolo principale della pagina e di norma dovrebbe essercene solo uno. Usa `h2` per i titoli di sezione, `h3` per le sottosezioni all'interno di queste e così via. Poiché un `h1` è un titolo di primo livello, il browser sa di doverlo rendere un po' più grande e un po' più grassetto.

Scegli i livelli di titolo per significato, non per dimensione. Danno alla tua pagina una struttura, un po' come i capitoli e le sezioni di un libro.

### Paragrafi

Il tag `p` contrassegna un paragrafo di testo, e quasi tutte le parole di una pagina vivono dentro uno di essi:

```html
<p>I have been building things on the web for thirty years.</p>
<p>These days I spend most of my time working on Jiki.</p>
```

Ogni paragrafo ha il suo tag e il browser aggiunge automaticamente spazio tra di essi.

### Liste

Ci sono due tipi di liste. Una **lista non ordinata** (`ul`) dà punto elenco, e una **lista ordinata** (`ol`) dà numeri. All'interno di entrambe, ogni voce è un **elemento di lista** (`li`):

```html
<ul>
  <li>Photography</li>
  <li>Podcasting</li>
  <li>Teaching people to code</li>
</ul>
```

Sostituisci `ul` con `ol` e i punti diventano 1, 2, 3.

### Link

I link sono la cosa che rende il web un web. Il tag `a` trasforma qualsiasi cosa in qualcosa di cliccabile:

```html
<p>You can find my code on <a href="https://github.com/ihid">GitHub</a>.</p>
```

I link possono puntare ad altri siti web o ad altre pagine del tuo stesso sito. Se hai un `resume.html` accanto al tuo `index.html`, puoi collegarti con `<a href="resume.html">My resume</a>`.

### Immagini

Il tag `img` inserisce un'immagine nella pagina:

```html
<img src="images/me.jpg" alt="Jeremy in piedi su una collina nel Lake District" />
```

L'attributo `src` può essere un file del tuo sito o un indirizzo web completo. Compila sempre il testo `alt` con una descrizione reale dell'immagine.

### Enfasi

Due piccoli tag ti permettono di enfatizzare parole all'interno del tuo testo. `strong` indica qualcosa di importante, e i browser lo mostrano in grassetto. `em` indica enfasi, e i browser lo mostrano in corsivo:

```html
<p>The struggle is where the <strong>learning</strong> happens, so <em>write your own solutions</em>.</p>
```

## Dare struttura alla tua pagina

I tag che abbiamo visto finora descrivono singoli pezzi di contenuto. C'è una seconda famiglia di tag che descrivono le regioni di una pagina. Questi sono spesso chiamati **tag semantici**, perché danno significato a ciascuna area piuttosto che cambiarne l'aspetto:

- `header` racchiude la zona superiore della pagina, di solito il nome del sito e il logo.
- `nav` racchiude la navigazione, l'insieme di link alle altre pagine del tuo sito.
- `main` racchiude il contenuto principale della pagina. Dovrebbe essercene solo uno.
- `section` raggruppa un blocco distinto di contenuto, di solito con un proprio titolo.
- `article` racchiude un elemento autonomo, come un post di blog o una notizia.
- `footer` racchiude la zona inferiore, di solito copyright e link di contatto.

Una homepage personale che li usa potrebbe avere questa forma:

```html
<body>
  <header>
    <h1>Jeremy Walker</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="resume.html">Resume</a>
      <a href="portfolio.html">Portfolio</a>
    </nav>
  </header>
  <main>
    <section>
      <h2>About me</h2>
      <p>...</p>
    </section>
    <section>
      <h2>My projects</h2>
      <p>...</p>
    </section>
  </main>
  <footer>
    <p>Get in touch at jeremy@example.com.</p>
  </footer>
</body>
```

Nessuno di questi tag modifica molto l'aspetto della pagina da solo. Allora perché usarli? Perché la struttura con significato aiuta tutto ciò che legge la tua pagina che non è un essere umano che guarda uno schermo. Gli screen reader usano questi tag per permettere agli utenti ciechi di saltare direttamente alla navigazione o al contenuto principale. I motori di ricerca li usano per capire di cosa parla la tua pagina. E quando più avanti vorrai dare uno stile alla tua pagina, averla ben organizzata rende tutto molto più semplice.

Se una parte della pagina non rientra in nessuno di questi significati, ci sono due contenitori generici: `div` per un blocco di contenuto e `span` per alcune parole all'interno di un testo. Non significano assolutamente nulla, ed è proprio per questo che dovresti usare prima i tag con significato.

## Altri tag da riconoscere

Non devi memorizzarli, ma li incontrerai guardando le pagine di altre persone, quindi vale la pena sapere che esistono:

- `blockquote` per una citazione da un'altra fonte.
- `code` per un frammento di codice all'interno del testo, e `pre` per un blocco di testo preformattato.
- `table`, con `tr` per ogni riga e `td` per ogni cella, per dati realmente tabellari.
- `form`, `input`, `label` e `button` per raccogliere input dai visitatori.
- `video` e `audio` per incorporare contenuti multimediali.
- `br` per un'interruzione di riga all'interno del testo. Usalo raramente. Se vuoi un nuovo paragrafo, usa un nuovo `p`.

Ci sono più di cento tag in totale, ma quelli di questa guida coprono la stragrande maggioranza di ciò che vedrai e scriverai. Quando ne incontri uno che non conosci, cerca su [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), che è il riferimento usato dai professionisti.

## Dove andare ora

Il modo migliore per fissare tutto questo è costruire qualcosa. Crea un `index.html`, dagli lo scheletro di questa guida e struttura una pagina su di te con titoli, paragrafi, liste e link. Poi aprila nel browser e dai un'occhiata a ciò che hai creato.

Quando ti senti a tuo agio, prendi l'abitudine di visualizzare il sorgente dei siti web che visiti. Inizierai a riconoscere i tag ovunque e vedrai che anche i siti più sofisticati sono costruiti con gli stessi identici pezzi che hai appena imparato.

La tua pagina per ora sembrerà molto spoglia, e va bene così. L'HTML dà struttura a una pagina. Renderla bella è compito dei CSS, ed è lì che ci dirigeremo dopo.
