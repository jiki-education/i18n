---
title: "Texteditorns fascinerande historia"
excerpt: "Från att stansa hål i papp till editorer som skriver kod åt dig. Historien om den anspråkslösa texteditorn, och rivaliteten mellan Vi och Emacs som är äldre än de flesta människor som lever idag."
tags: ["history", "text-editors", "vim", "emacs", "coding"]
seo:
  description: "Historien om texteditorn, från hålkort och radeditorer till Vi, Emacs, VS Code och AI-eran. Hur avståndet mellan en idé och att köra kod krympt."
  keywords: ["historia om texteditorer", "vi vs emacs", "texteditor historia", "historia om kodeditorer"]
en_md5: 1746a724d6fb171afc5dc961c3519e37
---

## Introduktion

Sedan jag började programmera för 30 år sedan har jag använt en texteditor nästan varje dag. Jag har testat många olika och har då och då blivit lite religiös om vilken som är bäst.

Under hela den tiden har en av de första invigningsritualerna för en ny utvecklare varit att installera och lära sig använda en texteditor. Men i takt med att agentbaserad programmering förändrar vad det innebär att vara utvecklare, går texteditorns dominans kanske mot sitt slut.

Så jag tänkte att det vore intressant att titta på texteditorns historia. Från att stansa hål i papp och vänta i timmar, till att redigera en rad i taget på en skrivare, till rivaliteten mellan Vi och Emacs som är äldre än de flesta människor som lever idag.

Det här är historien om den anspråkslösa texteditorn.

## Innan editorn: hål i papp (1950–1960-talet)

Det är svårt att föreställa sig programmering utan en skärm att se sin kod på, men det är så det hela börjar.

På 1950- och 1960-talet hade skärmen ännu inte uppfunnits, och i stället stansades program fysiskt in i pappkort (eller pappersremsa), en rad kod per kort. ”Redigering” innebar att stansa om ett kort, eller att fysiskt byta kort i och ur kortleken.

Om det tar mer än några sekunder för min kod att köra blir jag väldigt frustrerad över den långsamma återkopplingen, men på den här tiden mättes återkoppling i timmar. Du lämnade din kortlek till en operatör, som sedan lade den i en kö av uppgifter som skulle köras. Du fick tillbaka en utskrift timmar, eller kanske dagar, senare. Jag antar att ett ”stavfel” verkligen inte var en grej på den tiden...!

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/keypunch-operator.webp" alt="En hålkortsoperatör på 1950-talet som stansar data på kort" />
  <figcaption>En hålkortsoperatör på 1950-talet. Foto: U.S. Census Bureau via <a href="https://commons.wikimedia.org/wiki/File:Keypunch_operator_1950_census_IBM_016.jpg">Wikimedia Commons</a>, public domain.</figcaption>
</figure>

## Datorn börjar svara (1960-talet)

Två uppfinningar drog redigeringen ur den långsamma batchvärlden och in i något interaktivt.

Den första var **teletypeskrivaren**. Teletypeskrivaren ersatte konceptet med färdigstansade kort. I stället skrev du på ett tangentbord. Dina tangenttryckningar skickades till maskinen i realtid, och den skrev ut sina svar direkt på en pappersrulle. Det fanns fortfarande ingen skärm, men för första gången hade du en levande, tvåvägskanal till datorn i stället för en hög med papp.

Den andra var **tidsdelning**. Utan tidsdelning var en dator fortfarande kopplad till en person i taget, begränsad av hastigheten de kunde skriva och ta emot svar. Det ledde till enorma mängder bortkastad tid i väntan på att den mänskliga operatören skulle agera. Tidsdelning löste det genom att låta maskinen växla mellan flera personer samtidigt. Flera personer kunde vara anslutna till samma maskin, och den växlade så snabbt att var och en fick intrycket att de hade hela datorn för sig själva.

Sätt ihop de två och du får en riktig konversation med maskinen. Och när du kan ha en konversation kan du börja redigera din kod medan du sitter där, en rad i taget, i stället för att stansa om kort och be. Vilket är precis vad de första riktiga redigerarna lät dig göra.

<figure class="post-figure" style="max-width:300px">
  <img src="/images/blog/the-history-of-the-text-editor/teletype-asr33.webp" alt="En Teletype Model 33 ASR-terminal som skrev ut resultatet på papper i stället för på en skärm"/>
  <figcaption>Teletype Model 33 ASR. Foto: ComputerGeek7066 via <a href="https://commons.wikimedia.org/wiki/File:Teletype_model_33_ASR.jpg">Wikimedia Commons</a>, CC BY-SA 4.0.</figcaption>
</figure>

## Radeditorerna: ed, QED och TECO (1962–1971)

1960-talet förde med sig ett nytt enormt paradigmskifte. Ditt program slutade vara ett fysiskt föremål du bar på (en kortlek i en låda) och blev en namngiven fil som bodde på datorns egen disk. Istället för att skriva ut ett nytt kort för att ändra ditt program kunde du nu faktiskt redigera ditt program.

Vi hade fortfarande inga skärmar. Istället skrevs allt du körde ut, och en kopia trycktes på ett papper. Den utskriften är vad som kallas en ”hårdkopia” – en permanent dokumentation av de instruktioner du gav datorn.

Det var första gången vi hade något som liknade moderna editorer, men de var fortfarande ganska främmande eftersom de var **radorienterade**. Du arbetade en rad i taget, och de var kommandobaserade. Du utfärdade kommandon (en del känns väldigt igenkännbara för oss som har använt vim), och dessa kommandon gjorde ändringar. Att till exempel redigera en dikt för att rätta ett stavfel skulle kunna se ut så här:

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

De få som programmerade under den här tiden skulle förmodligen berätta om tre anmärkningsvärda editorer från perioden:

- **TECO** skapades 1962 av Dan Murphy vid MIT och var ursprungligen avsedd för att redigera stansad pappersremsa. Den var ökänd för att vara kryptisk, och fungerade även som ett programmeringsspråk (det här spelar roll senare)
- **QED** skapades 1965/66 av Butler Lampson och L. Peter Deutsch vid Berkeley och var en av de första radeditorerna. Två år senare skrev Ken Thompson om den och gav den **reguljära uttryck** (en typ av programmeringsspråk som används för att matcha mönster i text), vilket var första gången de dök upp i en editor.
- **ed** släpptes i början av 1970-talet av Ken Thompson vid Bell Labs och skalade ner QED:s idéer till en minimal editor som levererades med den första Unix. `ed` finns installerad på varje Mac- och Linuxmaskin än idag, och dess kommandospråk är den direkta förfadern till `grep`, `sed` och Vi:s `:`-kommandon (som alla har [Exercism-spår](http://exercism.org/tracks) om du vill lära dig dem!)

TECO sägs också vara hem för vad som allmänt anses vara det tidigaste kända påskägget i mjukvara (en dold funktion som idag finns i många spel). I en senare version av TECO gav `make love` dig det fräcka svaret `not war?`. Det smögs in runt 1967 på Stanford AI Lab, ungefär tio år innan påskägg blev en grej i tv-spel. Du kan [installera TECO](https://github.com/blakemcbride/TECOC) och testa själv!

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/teco-easter-egg.webp" alt="En terminal med grön text på svart bakgrund som visar TECO:s svar “not war?” på kommandot “make love”" />
  <figcaption>TECOs <code>make love</code> / <code>not war?</code>-påskägg, återskapat i en modern TECO-version.</figcaption>
</figure>

## Att se hela sidan: Bravo och WYSIWYG (1974)

Under tiden, på **Xerox PARC**, började en annan gren av historien ta form.

1974 släpper Butler Lampson och Charles Simonyi **Bravo**, den första **WYSIWYG**-redigeraren (”vad du ser är vad du får”). Den visade formaterad text med riktiga typsnitt på en bitmappsskärm, och använde **musen** för att markera text (musen patenterades betydligt tidigare, men det är en historia för ett annat tillfälle!).

Lite som Vim hade den två lägen – ett ”kommandoläge” där tangenttryckningar _gjorde_ saker, och ett ”insättningsläge” där tangenttryckningar skrev på skärmen.

Det här är faktiskt en viktig vändpunkt i vår berättelse. Å ena sidan tog Simonyi senare med sig dessa idéer till Microsoft där han byggde Word och gav oss ordbehandlare. Å andra sidan matades skärmen, musen och det modala redigeringssättet direkt in i de kodeditorer som följde.

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/xerox-alto.webp" alt="En Xerox Alto-dator, som körde Bravo, den första WYSIWYG-redigeraren" />
  <figcaption>Xerox Alto. Foto via <a href="https://commons.wikimedia.org/wiki/File:Xerox_Alto.jpg">Wikimedia Commons</a>, CC BY-SA 2.5.</figcaption>
</figure>

## Den stora rivaliteten: Vi och Emacs (1976 och framåt)

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/emacs.webp" alt="En skärmdump av GNU Emacs som redigerar kod" />
  <figcaption>GNU Emacs. Skärmdump av tecosaur via <a href="https://commons.wikimedia.org/wiki/File:Writing_and_compiling_C%2B%2B_in_Emacs.png">Wikimedia Commons</a>, CC BY-SA 4.0.</figcaption>
</figure>

- Hjärtat i berättelsen: år **1976**, på motsatta kuster, föddes de två editorer som fortfarande dominerar seriös programmering, med motsatta filosofier
- **Emacs** (MIT: Richard Stallman, med David Moon och Guy Steele): började som en uppsättning **makron för TECO** (”Editor MACroS”)
- Emacs stora idé: en editor bör vara oändligt **programmerbar och utbyggbar** av sin användare. Den är mindre en texteditor och mer en Lisp-miljö där du råkar redigera text
- Stallman byggde om den som **GNU Emacs** 1984, och den blev ett flaggskepp för fri mjukvara-rörelsen
- **Vi** (Berkeley: Bill Joy, då doktorand, senare medgrundare av Sun): ett fullskärms-**visuellt** läge byggt ovanpå ed:s radredigeringskärna

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/vim.webp" alt="En skärmdump av Vim som redigerar kod" />
  <figcaption>Vim, den mest populära moderna avkomman till Vi. Skärmdump av Carolinedmoreschi via <a href="https://commons.wikimedia.org/wiki/File:Dracula_Theme_being_used_on_Vim.png">Wikimedia Commons</a>, CC BY-SA 4.0.</figcaption>
</figure>

- Vi designades under brutala begränsningar: den behövde fungera över ett **300-baud-modem**, där varje tecken som sändes till skärmen räknades
- Den knappheten skapade Vi:s geni: **modal redigering**, där tangenttryckningar är ett kompakt kommandospråk för att flytta och transformera text
- **Vim** (”Vi IMproved”, 1991) lade till ångra i flera nivåer, syntaxmarkering och insticksmoduler. **Neovim** moderniserade den ytterligare senare
- **”Redigerarkriget”** mellan de två lägren är den äldsta rivaliteten inom mjukvara, och det är egentligen en filosofisk motsättning: Emacs (maximal, programmerbar, allt-i-ett-miljö) mot Vi (minimal, modal, skoningslöst effektiv)
- Båda används fortfarande dagligen nästan 50 år senare, vilket är häpnadsväckande för vilken programvara som helst

## Editorer för oss andra: BBEdit, TextMate, Sublime (1992–2008)

- När grafiska operativsystem mognade dök en ny klass editorer upp för utvecklare som ville ha ett grafiskt gränssnitt i stället för en terminal
- **BBEdit** (1992, Mac): den långlivade ”det suger inte”-editorn
- **TextMate** (2004, Mac): enormt inflytelserik under **Ruby on Rails**-boomen. Dess ”bundle”- och snippet-system, och dess grammatikformat för syntaxmarkering, blev en de facto-standard som VS Code fortfarande använder idag
- **Sublime Text** (2008): snabb, plattformsoberoende, minimal. Den introducerade saker som alla kopierade, som minikartan, multipla markörer och en fuzzy kommandopalett
- Sublime bevisade att det fanns en enorm marknad mellan ”terminaleditor” och ”tung IDE”

## Webteknikens era: Atom och VS Code (2014–2015)

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/vscode.webp" alt="En skärmdump av VSCodium, den öppna versionen av VS Code" />
  <figcaption>VSCodium, den helt öppna versionen av VS Code (visuellt identisk med Microsofts utgåva, men MIT-licensierad så den kan visas här). Skärmdump via <a href="https://commons.wikimedia.org/wiki/File:VSCodium_official_screenshot.png">Wikimedia Commons</a>, MIT.</figcaption>
</figure>

- **Atom** (GitHub, 2014): ”en hackbar texteditor för 2000-talet”, byggd med webbteknik (HTML, JS, Node) via det som blev **Electron**. Hackbar som Emacs, men långsam. GitHub lade ner den i december 2022
- **VS Code** (Microsoft, 2015): också Electron-baserad, men snabbare och med batterier inkluderade (autokomplettering, felsökning, Git inbyggt). Den vann avgörande och dominerar nu
- VS Codes viktigaste strukturella idé var **Language Server Protocol (LSP)**
- Innan LSP var varje editor tvungen att implementera ”förståelse” för varje språk (autokomplettering, gå-till-definition, felkontroll) från grunden
- Med LSP levereras en språkserver som vilken editor som helst kan kommunicera med. Det frikopplade språkintelligensen från editorn, och det är idag en industristandard

## AI-eran: editorer som skriver med dig (2021 och framåt)

- Det nyaste kapitlet förvandlar editorn från ett verktyg du manipulerar text med, till en **samarbetspartner**
- **GitHub Copilot** (2021): AI-autokomplettering direkt i koden, som senare exponerades via en egen språkserver så att vilken editor som helst kan ansluta sig
- **Cursor** och **Windsurf**: förgreningar av VS Code som bygger om redigeringsloopen kring AI (redigering i flera filer, chat, agenter) samtidigt som de behåller VS Codes tillägg
- **Zed** (Rust, öppen källkod 2024): en från grunden byggd, GPU-accelererad editor skapad för snabbhet, samarbete och AI
- **Agentbaserade verktyg** (som Claude Code): där ”editorn” i allt högre grad kör sig själv, och människan granskar och styr snarare än skriver själv
- Intressant nog används LSP återigen, den här gången för att ge AI-agenter precis kodintelligens istället för gissningar baserade på textsökningar

## Slutet på en era? (idag)

- Varje era i den här historien har minskat avståndet mellan att ha en idé och att se den köras: från hålkort (timmar), till radeditorer (en rad i taget), till fullskärmseditorer (hela filen), till IDE-intelligens (editorn förstår din kod), till AI (editorn skriver med dig)
- Och ändå finns de två redigerarna från 1976, Vi och Emacs, kvar. De grundläggande idéerna (modal effektivitet, utbyggbarhet genom programmering) har överlevt varje hårdvaruvåg
- I 50 år har det att lära sig sin editor varit en invigningsrit. Det kan vara på väg att förändras
- [Jiki-anknytning / avslutande tanke ska in här]
- Tack för att du läste
