---
title: "A szövegszerkesztő lenyűgöző története"
excerpt: "A kartonlapok lyukasztásától a helyettünk kódot író szerkesztőkig. A szerény szövegszerkesztő története, és a Vi és Emacs közötti vetélkedés, amely idősebb, mint a ma élő emberek többsége."
tags: ["history", "text-editors", "vim", "emacs", "coding"]
seo:
  description: "A szövegszerkesztő története a lyukkártyáktól és a sorszerkesztőktől a Vi-on, az Emacsen és a VS Code-on át a mesterséges intelligencia koráig. Hogyan zsugorodott a szakadék egy ötlet és a futó kód között."
  keywords: ["szövegszerkesztők története", "vi vs emacs", "szövegszerkesztő története", "kódszerkesztők története"]
en_md5: 1746a724d6fb171afc5dc961c3519e37
---

## Bevezetés

Harminc éve kezdtem programozni, és azóta szinte minden nap használtam szövegszerkesztőt. Sokfélét kipróbáltam, és időnként már-már vallásos áhítattal ragaszkodtam ahhoz, hogy melyik a legjobb.

Egy új fejlesztő első beavatási szertartásai közé ez az egész időszak alatt mindvégig beletartozott: telepíteni és megtanulni használni egy szövegszerkesztőt. Ám ahogy az agentikus programozás átformálja azt a képet, amit fejlesztőnek lenni jelent, a szövegszerkesztő dominanciájának kora talán épp most ér véget.

Ezért gondoltam, érdekes lenne áttekinteni a szövegszerkesztő történetét. A kartonba lyukasztástól és az órákig tartó várakozástól kezdve, a soronkénti szerkesztésen át egy nyomtatón, egészen a Vi és Emacs közötti – a ma élők többségénél idősebb – vetélkedésig.

Ez a szerény szövegszerkesztő története.

## A szerkesztő előtt: lyukak a kartonban (1950-es, 1960-as évek)

Nehéz elképzelni a programozást anélkül, hogy a kódot egy képernyőn látnánk, de innen indultunk.

Az 1950-es és 1960-as években a képernyőt még nem találták fel, ezért a programokat fizikailag lyukasztották kartonlapokba (avagy papírszalagra), soronként egy kódot egy kártyára. A „szerkesztés” azt jelentette, hogy újra kellett lyukasztani egy kártyát, vagy fizikailag kicserélni a kártyákat a pakliban.

Ha a kódom futása néhány másodpercnél tovább tart, nagyon frusztrál a lassú visszacsatolás, de ebben a korszakban a visszajelzést órákban mérhetted. A paklit át kellett adnod egy operátornak, aki betette egy futtatási sorba. Órákkal, néha napokkal később kaptál egy nyomtatott eredményt vissza. Gondolom, akkoriban egy elírás igazán nem számított…!

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/keypunch-operator.webp" alt="Egy lyukkártya-kezelő az 1950-es években, adatokat üt kártyákra" />
  <figcaption>Egy lyukkártya-kezelő az 1950-es években. Fotó: U.S. Census Bureau, a <a href="https://commons.wikimedia.org/wiki/File:Keypunch_operator_1950_census_IBM_016.jpg">Wikimedia Commons</a> oldaláról, közkincs.</figcaption>
</figure>

## A számítógép elkezd visszabeszélni (1960-as évek)

Két találmány mozdította ki a szerkesztést abból a lassú, kötegelt világból, és tette interaktívvá.

Az első a **távgépíró** volt. A távgépíró kiváltotta az előre lyukasztott kártyák kötegeit. Helyette billentyűzeten gépeltél. A leütéseid valós időben eljutottak a géphez, és az egyenesen egy papírtekercsre nyomtatta a válaszait. Még mindig nem volt képernyő, de most először élő, oda-vissza csatornád volt a számítógéphez, nemcsak egy halom kartonlap.

A második az **időosztás** volt. Időosztás nélkül a számítógép egyszerre továbbra is csak egy emberrel állt volna kapcsolatban, és a kapcsolat sebességét az határozta volna meg, milyen gyorsan tud az illető gépelni és válaszokat feldolgozni. Ez rengeteg elvesztegetett várakozási időt eredményezett. Az időosztás ezt úgy oldotta meg, hogy a gép egyszerre több ember között cikázott. Többen is kapcsolódhattak egy géphez, és a gép olyan gyorsan váltogatott közöttük, hogy mindenki azt az illúziót élte át, hogy a saját számítógépe van nála.

Ha ezt a kettőt összerakod, máris valódi párbeszédet folytathatsz a géppel. És amint párbeszédet folytathatsz, el is kezdheted a kódodat szerkeszteni, míg ott ülsz előtte – soronként –, a kártyák újralyukasztása és imádkozás helyett. Az első valódi szerkesztők pontosan ezt tették lehetővé.

<figure class="post-figure" style="max-width:300px">
  <img src="/images/blog/the-history-of-the-text-editor/teletype-asr33.webp" alt="Egy Teletype Model 33 ASR terminál, amely a kimenetet papírra nyomtatta képernyő helyett"/>
  <figcaption>Teletype Model 33 ASR. Fotó: ComputerGeek7066, a <a href="https://commons.wikimedia.org/wiki/File:Teletype_model_33_ASR.jpg">Wikimedia Commons</a> oldaláról, CC BY-SA 4.0.</figcaption>
</figure>

## A sorszerkesztők: ed, QED és TECO (1962–1971)

Az 1960-as évek újabb hatalmas paradigmaváltást hoztak. A programod megszűnt fizikai tárgy lenni, amit magaddal viszel (egy doboznyi kártyapakli), és helyette egy névvel ellátott fájllá vált, ami a számítógép saját lemezén élt. Ahelyett, hogy egy új kártyát nyomtattál volna a programod módosításához, most már valóban szerkeszthetted is a programodat.

Viszont még mindig nem voltak képernyőink. Ehelyett minden, amit végrehajtottál, és egy másolat, kinyomtatódott egy papírlapra. Ez a nyomtatvány az, amit „hard copy”-nak nevezünk – egy maradandó feljegyzés azokról az utasításokról, amiket a számítógépnek adtál.

Ez volt az első alkalom, hogy bármi a mai szerkesztőkhöz hasonló dolog megjelent, de ezek még eléggé idegenszerűek voltak, mert **sororientáltak** voltak. Egyszerre egy sorral dolgoztál, és parancsalapúak voltak. Parancsokat adtál ki (némelyik nagyon ismerősnek tűnhet azoknak, akik használtak már Vim-et), és ezek a parancsok változtatásokat hajtottak végre. Például egy vers szerkesztése, hogy kijavíts benne egy elírást, így nézhetett ki:

```
input         output          mit csinál
------------  --------------  ----------------------------------------
ed poem       45               megnyitja a „poem” fájlt; az ed kiírja a méretét
1,$p                           kiírja az összes sort – az ed válasza:
              Roses are red
              Violets are blu  itt az elírás!
              Sugar is sweet
2             Violets are blu  a 2. sorra ugrik; az ed kiírja a sort
s/blu/blue/                    ezen a soron cseréli blu-t blue-ra
p             Violets are blue kiírja az aktuális sort (most már javítva)
w             46               mentés/írás; az ed kiírja az új méretet
q                              kilépés
```

Akik ebben az időben programoztak, valószínűleg három figyelemreméltó szerkesztőt említenének ebből a korszakból:

- A **TECO**-t Dan Murphy készítette 1962-ben az MIT-n, eredetileg lyukszalag szerkesztésére. Közismerten kriptikus volt, és egyben programozási nyelvként is funkcionált (ennek később lesz jelentősége).
- A **QED**-t 1965/66-ban Butler Lampson és L. Peter Deutsch készítette a Berkeley-n, és az egyik első sorszerkesztő volt. Két évvel később Ken Thompson újraírta és ellátta **reguláris kifejezésekkel** (egy olyan programozási nyelvvel, amivel szövegben lehet mintákat illeszteni), ami az első megjelenésük volt egy szerkesztőben.
- Az **ed**-et az 1970-es évek elején Ken Thompson adta ki a Bell Labs-nél, és a QED ötleteit egy olyan minimális szerkesztővé sűrítette, amit az első Unix-szal együtt szállítottak. Az `ed` a mai napig telepítve van minden Mac és Linux gépen, a parancsnyelve pedig a `grep`, a `sed` és a Vi `:` parancsainak közvetlen őse (mindegyiknek van [Exercism trackje](http://exercism.org/tracks), ha szeretnéd megtanulni őket!).

A TECO-ban található meg az is, amit széles körben az első ismert szoftveres easter eggnek tartanak (egy rejtett funkció, ami sok mai játékban előfordul). A TECO egy későbbi verziójában a `make love` beírása a pimasz `not war?` választ adta. Ezt 1967 körül csempészték bele a Stanford AI Lab-ban, körülbelül egy évtizeddel azelőtt, hogy az easter eggek elterjedtek volna a videojátékokban. A TECO-t [telepítheted](https://github.com/blakemcbride/TECOC) és ki is próbálhatod!

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/teco-easter-egg.webp" alt="Egy zöld betűs, fekete hátterű terminál, amelyen a make love parancsra a TECO Not war?-ral válaszol" />
  <figcaption>A TECO <code>make love</code> / <code>not war?</code> easter eggje egy modern TECO fordításban.</figcaption>
</figure>

## Az egész oldal látványa: Bravo és a WYSIWYG (1974)

Eközben a **Xerox PARC**-ban a történet egy másik szála kezdődött.

1974-ben Butler Lampson és Charles Simonyi kiadta a **Bravo**-t, az első **WYSIWYG**-szerkesztőt („amit látsz, azt kapod”). Formázott szöveget mutatott valódi betűtípusokkal egy bittérképes képernyőn, és az **egeret** használta a szöveg kijelöléséhez (az egér szabadalma valójában sokkal régebbi, de ez egy másik történet!).

Kicsit olyan volt, mint a Vim: két módja volt – egy „Command mode”, ahol a billentyűk lenyomása csinált valamit, és egy „Insert mode”, ahol a billentyűk lenyomása begépelte a karaktereket a képernyőn.

Ez tulajdonképpen egy kulcsfontosságú fordulópont a történetünkben. Simonyi később ezeket az ötleteket a Microsofthoz vitte, ahol megépítette a Wordöt, és ezzel szövegszerkesztő programokat adott a világnak. A történet másik ágán pedig a képernyős egér és a modális szerkesztés közvetlenül táplálta az őket követő kódszerkesztőket.

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/xerox-alto.webp" alt="Egy Xerox Alto számítógép, amelyen a Bravo, az első WYSIWYG-szerkesztő futott" />
  <figcaption>Xerox Alto. Fotó a <a href="https://commons.wikimedia.org/wiki/File:Xerox_Alto.jpg">Wikimedia Commons</a> oldaláról, CC BY-SA 2.5.</figcaption>
</figure>

## A nagy vetélytársak: Vi és Emacs (1976-tól napjainkig)

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/emacs.webp" alt="A GNU Emacs képernyőképe kód szerkesztés közben" />
  <figcaption>GNU Emacs. Képernyőkép: tecosaur, a <a href="https://commons.wikimedia.org/wiki/File:Writing_and_compiling_C%2B%2B_in_Emacs.png">Wikimedia Commons</a> oldaláról, CC BY-SA 4.0.</figcaption>
</figure>

- A történet szíve: **1976**-ban, a két ellentétes parton, ellentétes filozófiákból megszületett az a két szerkesztő, amelyek a mai napig uralják a komoly programozást.
- **Emacs** (MIT: Richard Stallman, David Moon és Guy Steele segítségével): a TECO-hoz készített **makrók** halmazaként indult („Editor MACroS”).
- Az Emacs nagy ötlete: a szerkesztőnek a felhasználó által végtelenül **programozhatónak és bővíthetőnek** kell lennie. Inkább egy Lisp környezet, amiben történetesen szöveget is szerkeszteni lehet, mintsem egy szövegszerkesztő.
- Stallman 1984-ben **GNU Emacs** néven újraépítette, és a szabad szoftver mozgalom egyik zászlóshajója lett.
- **Vi** (Berkeley: Bill Joy, akkoriban PhD-hallgató, később a Sun társalapítója): egy teljes képernyős, **vizuális** mód, ami az ed sorszerkesztő magjára épült.

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/vim.webp" alt="A Vim képernyőképe kód szerkesztés közben" />
  <figcaption>Vim, a Vi legnépszerűbb modern leszármazottja. Képernyőkép: Carolinedmoreschi, a <a href="https://commons.wikimedia.org/wiki/File:Dracula_Theme_being_used_on_Vim.png">Wikimedia Commons</a> oldaláról, CC BY-SA 4.0.</figcaption>
</figure>

- A Vi tervezését kegyetlen korlátok szorították: használhatónak kellett lennie egy **300 baudos modem** fölött, ahol minden, a képernyőre küldött karakter számított.
- Ebből a szűkösségből született a Vi zsenialitása: a **modális szerkesztés**, ahol a billentyűleütések egy tömör parancsnyelvet alkotnak a szöveg mozgatására és átalakítására.
- A **Vim** („Vi IMproved”, 1991) többszintű visszavonást, szintaxiskiemelést és bővítményeket hozott. A **Neovim** később tovább modernizálta.
- A két tábor közötti **„editorháború”** a szoftvervilág legrégebbi vetélkedése, és valójában egy filozófiai szakadás: Emacs (maximális, programozható, mindent-csinálok környezet) kontra Vi (minimális, modális, kíméletlenül hatékony).
- Mindkettőt a mai napig napi szinten használják, közel 50 évvel később, és ez bármely szoftver esetében elképesztő.

## Szerkesztők a többieknek: BBEdit, TextMate, Sublime (1992–2008)

- Ahogy a grafikus operációs rendszerek kiforrtak, megjelentek azok a szerkesztők, amelyek natív GUI-t akartak, nem terminált.
- **BBEdit** (1992, Mac): a régóta velünk lévő szerkesztő, amiről azt mondták, „nem szívás”.
- **TextMate** (2004, Mac): óriási hatást gyakorolt a **Ruby on Rails** fellendülése idején. A „bundle” és snippet rendszere, valamint a szintaxiskiemeléséhez használt nyelvtan-formátuma gyakorlatilag szabvánnyá vált, amit a VS Code is használ a mai napig.
- **Sublime Text** (2008): gyors, platformfüggetlen, minimalista. Olyan dolgokat vezetett be, amiket aztán mindenki lemásolt: a minitérképet, a többszörös kurzort és a fuzzy parancspalettát.
- A Sublime bebizonyította, hogy hatalmas piac van a „terminálos szerkesztő” és a „nehézsúlyú IDE” között.

## A webes korszak: Atom és VS Code (2014–2015)

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/vscode.webp" alt="A VSCodium, a VS Code nyílt forráskódú változatának képernyőképe" />
  <figcaption>A VSCodium, a VS Code teljesen nyílt forráskódú változata (vizuálisan megegyezik a Microsoft kiadásával, de MIT-licencelt, ezért itt bemutatható). Képernyőkép a <a href="https://commons.wikimedia.org/wiki/File:VSCodium_official_screenshot.png">Wikimedia Commons</a> oldaláról, MIT.</figcaption>
</figure>

- **Atom** (GitHub, 2014): „egy hackelhető szövegszerkesztő a 21. századnak”, webes technológiákkal (HTML, JS, Node) építve, az **Electron** révén, ami később standarddá vált. Hackelhető, mint az Emacs, de lassú. A GitHub 2022 decemberében visszavonultatta.
- **VS Code** (Microsoft, 2015): szintén Electron-alapú, de gyorsabb és mindent beépítve tartalmaz (kódkiegészítés, hibakeresés, Git). Döntő győzelmet aratott, és mára egyeduralkodó.
- A VS Code legfontosabb strukturális ötlete a **Language Server Protocol (LSP)** volt.
- Az LSP előtt minden szerkesztőnek a nulláról kellett újraimplementálnia minden nyelv „megértését” (kódkiegészítés, ugrás a definícióhoz, hibajelzés).
- Az LSP-vel egy nyelv egyetlen „szervert” szállít, amivel bármelyik szerkesztő tud beszélni. Ez szétválasztotta a nyelvi intelligenciát a szerkesztőtől, és mára ipari szabvánnyá vált.

## A mesterséges intelligencia kora: szerkesztők, amelyek veled együtt írnak (2021-től napjainkig)

- Az új fejezet a szerkesztőt egy szövegmanipulációs eszközből **kollaborátorrá** változtatja.
- **GitHub Copilot** (2021): soron belüli AI kódkiegészítés, később a saját nyelvi szerverén keresztül elérhetővé téve, így bármelyik szerkesztő be tudja dugni.
- **Cursor** és **Windsurf**: a VS Code elágazásai, amelyek a szerkesztési ciklust az AI köré építik újra (többfájlos szerkesztések, chat, ágensek), miközben megtartják a VS Code bővítményeit.
- **Zed** (Rust, nyílt forráskódúvá tették 2024-ben): egy teljesen előről írt, GPU-gyorsítású szerkesztő, amelyet a sebesség, az együttműködés és az AI jegyében terveztek.
- **Agentikus eszközök** (mint a Claude Code): ahol a „szerkesztő” egyre inkább önmagát vezérli, az ember pedig felügyel és irányít, nem gépel.
- Érdekes módon az LSP-t most újrahasznosítják, ezúttal azért, hogy az AI-ügynökök pontos kódintelligenciát kapjanak a szövegkereséses találgatások helyett.

## Egy korszak vége? (ma)

- A történet minden korszaka egyre szorosabbra húzta a rést egy ötlet és a futó kód meglátása között: a kötegelt kártyák (órák), a sorszerkesztők (egyszerre egy sor), a teljes képernyős szerkesztők (az egész fájl), az IDE-intelligencia (a szerkesztő érti a kódodat), végül az AI (a szerkesztő veled együtt ír).
- És mégis, az 1976-os két szerkesztő, a Vi és az Emacs még mindig itt van. Az alapvető gondolatok (modális hatékonyság, programozható bővíthetőség) túléltek minden hardverhullámot.
- Ötven éven át a szerkesztőd megtanulása beavatási szertartás volt. Ez talán épp most kezd megváltozni.
- [Jiki kapcsolódás / záró gondolat ide kerül]
- Köszönöm, hogy elolvastad
