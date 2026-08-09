---
title: "Fascinantna istorija tekst editora"
excerpt: "Od bušenja rupa u kartonu do editora koji pišu kod za tebe. Priča o skromnom tekst editoru i rivalstvu između Vi‑ja i Emacs‑a koje je starije od većine ljudi koji danas žive."
tags: ["history", "text-editors", "vim", "emacs", "coding"]
seo:
  description: "Istorija tekst editora, od bušenih kartica i linijskih editora do Vi‑ja, Emacs‑a, VS Code‑a i ere AI‑ja. Kako se razmak između ideje i pokretanja koda stalno smanjivao."
  keywords: ["istorija tekst editora", "vi vs emacs", "istorija tekst editora", "istorija kod editora"]
en_md5: 1746a724d6fb171afc5dc961c3519e37
---

## Uvod

Otkad sam počeo da programiram pre 30 godina, skoro svakodnevno koristim neki tekst editor. Isprobao sam mnogo različitih i povremeno postajao pomalo religiozan po pitanju toga koji je najbolji.

Sve to vreme jedan od prvih obreda prelaska za novog programera je da instalira i nauči da koristi tekst editor. Ali kako agentsko kodiranje menja ono što znači biti programer, era dominacije tekst editora možda se bliži kraju.

Zato sam pomislio da bi bilo zanimljivo sagledati priču o tekst editoru. Od bušenja rupa u kartonu i čekanja satima, preko uređivanja jedne po jedne linije na štampaču, do rivalstva između Vi‑ja i Emacs‑a koje je starije od većine ljudi koji danas žive.

Ovo je priča o skromnom tekst editoru.

## Pre editora: rupe u kartonu (1950‑e i 1960‑e)

Teško je zamisliti programiranje bez ekrana na kom vidiš svoj kod, ali odatle sve kreće.

Tokom 1950‑ih i 1960‑ih ekran još nije bio izmišljen i umesto toga programi su fizički bušeni na kartonske kartice (ili papirnu traku), jedna linija koda po kartici. „Uređivanje“ je značilo ponovno bušenje kartice ili fizičko vađenje i umetanje kartica u špil.

Ako mom kodu treba više od nekoliko sekundi da se izvrši, prilično se iznerviram zbog spore povratne sprege, ali u tom periodu povratna informacija se merila satima. Dao bi svoj špil operatoru, koji bi ga zatim stavio u red zadataka za izvršavanje. Odštampani izlaz bi stigao satima, ili možda danima, kasnije. Pretpostavljam da „greška u kucanju“ tada zaista nije bila problem…!

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/keypunch-operator.webp" alt="Operater na bušaču kartica 1950-ih, buši podatke na kartice" />
  <figcaption>Operater na bušaču kartica 1950-ih. Fotografija U.S. Census Bureau, preko <a href="https://commons.wikimedia.org/wiki/File:Keypunch_operator_1950_census_IBM_016.jpg">Wikimedia Commons</a>, javno vlasništvo.</figcaption>
</figure>

## Računar počinje da odgovara (1960‑e)

Dva izuma su izvukla uređivanje iz tog sporog paketnog sveta i pretvorila ga u nešto interaktivno.

Prvi je bio **teleprinter**. Teleprinter je zamenio koncept paketa unapred bušenih kartica. Umesto toga, kucao si na tastaturi. Tvoji pritisci tastera slali su se mašini u realnom vremenu, a ona je svoje odgovore štampala direktno na rolnu papira. I dalje nije bilo ekrana, ali po prvi put si imao živ, dvosmeran kanal ka računaru umesto gomile kartona.

Drugi je bilo **deljenje vremena**. Bez deljenja vremena, računar bi i dalje bio povezan sa jednom osobom u jednom trenutku, ograničen brzinom kojom je ta osoba mogla da kuca i obrađuje odgovore. To je dovodilo do ogromnog gubitka vremena na čekanje ljudskog operatora. Deljenje vremena je to rešilo tako što je omogućilo mašini da preleće između više ljudi istovremeno. Više osoba je moglo biti povezano na jednu mašinu, a ona bi prebacivala toliko brzo da bi svako od njih imao iluziju da ima ceo računar samo za sebe.

Spoji to dvoje i dobiješ pravi razgovor sa mašinom. A kad jednom možeš da razgovaraš, možeš da počneš da uređuješ svoj kod dok sediš tu, liniju po liniju, umesto da ponovo bušiš kartice i moliš se. Što je upravo ono što su ti omogućili prvi pravi editori.

<figure class="post-figure" style="max-width:300px">
  <img src="/images/blog/the-history-of-the-text-editor/teletype-asr33.webp" alt="Teletype Model 33 ASR terminal, koji je izlaz štampao na papir umesto na ekran" />
  <figcaption>Teletype Model 33 ASR. Fotografija ComputerGeek7066 preko <a href="https://commons.wikimedia.org/wiki/File:Teletype_model_33_ASR.jpg">Wikimedia Commons</a>, CC BY-SA 4.0.</figcaption>
</figure>

## Linijski editori: ed, QED i TECO (1962–1971)

Šezdesete su donele još jednu ogromnu promenu paradigme. Tvoj program je prestao da bude fizički objekat koji nosiš (špil kartica u kutiji) i postao imenovani fajl koji živi na disku samog računara. Umesto da štampaš novu karticu da bi promenio svoj program, sada si zaista mogao da ga uređuješ.

I dalje, međutim, nismo imali ekrane. Umesto toga, sve što si izvršio, i kopija odštampana na komadu papira. Taj odštampani primerak je ono što se zove „hard copy“ – trajni zapis instrukcija koje si dao računaru.

To je bio prvi put da smo imali nešto nalik modernim editorima, ali su i dalje bili prilično strani jer su bili **linijski orijentisani**. Radio si jednu po jednu liniju, a bili su komandno zasnovani. Izdavao bi komande (od kojih bi neke bile veoma prepoznatljive nama koji smo koristili vim), i te komande bi pravile izmene. Na primer, uređivanje pesme da bi se ispravila slovna greška moglo bi izgledati ovako:

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

Malo ljudi koji su tada programirali verovatno bi ti pričali o tri značajna editora iz tog perioda:

- **TECO**, koji je 1962. napravio Dan Marfi na MIT‑u, prvobitno je bio namenjen uređivanju bušene papirne trake. Bio je čuveno zagonetan, a istovremeno je služio i kao programski jezik (ovo će kasnije biti važno).
- **QED**, koji su 1965/66. napravili Batler Lampsom i L. Piter Dojč na Berkliju, bio je jedan od prvih linijskih editora. Dve godine kasnije, Ken Tompson ga je prepisao i dodao mu **regularne izraze** (vrstu programskog jezika za pronalaženje šablona u tekstu), što je bio prvi put da su se pojavili u jednom editoru.
- **ed**, objavljen početkom 1970‑ih od strane Kena Tompsona u Bell Labs‑u, koji je sveo ideje QED‑a na minimalni editor koji je isporučen sa prvim Unix‑om. `ed` je i danas instaliran na svakom Mac‑u i Linux računaru, a njegov komandni jezik je direktni predak komandi `grep`, `sed` i Vi‑jevih `:` komandi (sve one imaju [Exercism staze](http://exercism.org/tracks) ako želiš da ih naučiš!)

TECO je takođe dom onoga što se smatra najstarijim poznatim softverskim uskršnjim jajetom (skrivenom osobinom koja se danas nalazi u mnogim igrama). U kasnijoj verziji TECO‑a, kucanje `make love` donosilo je drski odgovor `not war?`. Ubaceno je negde 1967. u Stanford AI Lab‑u, otprilike deceniju pre nego što su uskršnja jaja postala stvar u video igrama. Možeš da [instaliraš TECO](https://github.com/blakemcbride/TECOC) i isprobaš ga!

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/teco-easter-egg.webp" alt="Zeleno-na-crn terminal koji prikazuje komandu make love na koju TECO odgovara sa Not war?" />
  <figcaption>TECO‑vo <code>make love</code> / <code>not war?</code> uskršnje jaje, reprodukovano u modernoj verziji TECO‑a.</figcaption>
</figure>

## Videti celu stranu: Bravo i WYSIWYG (1974)

U međuvremenu, u **Xerox PARC‑u**, započinjala je druga grana ove priče.

Godine 1974. Batler Lampsom i Čarls Šimonji objavili su **Bravo**, prvi **WYSIWYG** editor („ono što vidiš to i dobiješ“). Prikazivao je formatirani tekst sa pravim fontovima na bitmap ekranu, a za selekciju teksta koristio je **miša** (miš je zapravo patentiran mnogo ranije, ali to je priča za neki drugi put!).

Pomalo slično Vim‑u, imao je dva režima – „Komandni režim“ u kom su pritisci tastera _radili_ stvari, i „Režim unosa“ u kom su pritisci ispisivali tekst na ekranu.

Ovo je zapravo ključna tačka preokreta u našoj priči. S jedne strane, Šimonji je kasnije te ideje odneo u Microsoft gde je napravio Word i darovao nam programe za obradu teksta. S druge strane, ekran, miš i modalno uređivanje direktno su uticali na kod editore koji su usledili.

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/xerox-alto.webp" alt="Xerox Alto računar, koji je pokretao Bravo, prvi WYSIWYG editor" />
  <figcaption>Xerox Alto. Fotografija preko <a href="https://commons.wikimedia.org/wiki/File:Xerox_Alto.jpg">Wikimedia Commons</a>, CC BY-SA 2.5.</figcaption>
</figure>

## Veliko rivalstvo: Vi i Emacs (od 1976. nadalje)

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/emacs.webp" alt="Screenshot GNU Emacs‑a dok uređuje kod" />
  <figcaption>GNU Emacs. Screenshot autora tecosaur preko <a href="https://commons.wikimedia.org/wiki/File:Writing_and_compiling_C%2B%2B_in_Emacs.png">Wikimedia Commons</a>, CC BY-SA 4.0.</figcaption>
</figure>

- Srce priče: 1976. godine, na suprotnim obalama, rođena su dva editora iz suprotstavljenih filozofija, koji i danas dominiraju ozbiljnim programiranjem.
- **Emacs** (MIT: Ričard Stolman, sa Dejvidom Munom i Gajem Stilom): nastao je kao skup **makra za TECO** („Editor MACroS“).
- Velika ideja Emacs‑a: editor bi trebalo da bude beskrajno **programibilan i proširiv** od strane svog korisnika. Manje je tekst editor, a više Lisp okruženje u kom slučajno uređuješ tekst.
- Stolman ga je obnovio kao **GNU Emacs** 1984. godine i postao je zastava pokreta slobodnog softvera.
- **Vi** (Berkli: Bil Džoj, tada postdiplomac, kasnije suosnivač Sun‑a): režim rada preko celog ekrana (**vizuelni**) izgrađen povrh linijskog jezgra ed‑a.

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/vim.webp" alt="Screenshot Vim‑a dok uređuje kod" />
  <figcaption>Vim, najpopularniji savremeni potomak Vi‑ja. Screenshot autorke Carolinedmoreschi preko <a href="https://commons.wikimedia.org/wiki/File:Dracula_Theme_being_used_on_Vim.png">Wikimedia Commons</a>, CC BY-SA 4.0.</figcaption>
</figure>

- Vi je dizajniran pod surovim ograničenjima: morao je biti upotrebljiv preko **300‑bodnog modema**, gde se svaki znak poslat na ekran računao.
- Ta oskudica je iznedrila Vi‑jev genij: **modalno uređivanje**, gde su pritisci tastera kompaktni komandni jezik za kretanje i transformaciju teksta.
- **Vim** („Vi IMproved“, 1991.) dodao je višestruko poništavanje, sintaksno isticanje i dodatke. **Neovim** ga je kasnije dodatno modernizovao.
- **„Rat editora“** između dva tabora je najstarije rivalstvo u softveru, i to je zaista filozofski raskol: Emacs (maksimalistički, programibilan, okruženje‑za‑sve) naspram Vi‑ja (minimalistički, modalni, nemilosrdno efikasan).
- Oba su i dalje u svakodnevnoj upotrebi skoro 50 godina kasnije, što je zapanjujuće za bilo koji softver.

## Editori za nas ostale: BBEdit, TextMate, Sublime (1992–2008)

- Kako su grafički operativni sistemi sazrevali, pojavila se nova klasa editora za programere koji su želeli nativni GUI, a ne terminal.
- **BBEdit** (1992, Mac): dugovečni editor koji „nije loš“.
- **TextMate** (2004, Mac): izuzetno uticajan tokom eksplozije **Ruby on Rails**‑a. Njegov sistem „paketa“ i isečaka, kao i gramatički format za sintaksno isticanje, postali su de facto standard koji VS Code i danas koristi.
- **Sublime Text** (2008): brz, višeplatformski, minimalističan. Uveo je stvari koje su svi kopirali, poput minimape, višestrukih kursora i zamućene komandne palete.
- Sublime je dokazao da postoji ogromno tržište koje se nalazi između „terminal editora“ i „teškog integrisanog razvojnog okruženja (IDE)“.

## Era veb tehnologije: Atom i VS Code (2014–2015)

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/vscode.webp" alt="Screenshot VSCodium‑a, otvorenog izdanja VS Code‑a" />
  <figcaption>VSCodium, potpuno otvoreno izdanje VS Code‑a (vizuelno identično Microsoft‑ovom izdanju, ali pod MIT licencom tako da može biti prikazano ovde). Screenshot preko <a href="https://commons.wikimedia.org/wiki/File:VSCodium_official_screenshot.png">Wikimedia Commons</a>, MIT.</figcaption>
</figure>

- **Atom** (GitHub, 2014): „hakerski tekst editor za 21. vek“, izgrađen veb tehnologijama (HTML, JS, Node) kroz ono što je postalo **Electron**. Hakabilan poput Emacs‑a, ali spor. GitHub ga je povukao u decembru 2022.
- **VS Code** (Microsoft, 2015): takođe baziran na Electron‑u, ali brži i sa ugrađenim alatima (automatsko dovršavanje, debugovanje, Git). Pobedio je odlučno i sada dominira.
- Najvažnija strukturna ideja VS Code‑a je **Language Server Protocol (LSP)**.
- Pre LSP‑a, svaki editor je morao iznova da implementira „razumevanje“ svakog jezika (automatsko dovršavanje, odlazak na definiciju, proveru grešaka).
- Sa LSP‑om, jezik isporučuje jedan „server“ sa kojim bilo koji editor može da komunicira. To je razdvojilo inteligenciju jezika od editora i sada je industrijski standard.

## Era AI‑ja: editori koji pišu sa tobom (od 2021. nadalje)

- Najnovije poglavlje pomera editor od alata kojim manipulišeš tekstom, ka **saradniku**.
- **GitHub Copilot** (2021): inline AI automatsko dovršavanje, kasnije izloženo kroz sopstveni jezički server tako da svaki editor može da se priključi.
- **Cursor** i **Windsurf**: fork‑ovi VS Code‑a koji ponovo izgrađuju petlju uređivanja oko AI‑ja (izmena više fajlova, čet, agenti), zadržavajući ekstenzije VS Code‑a.
- **Zed** (Rust, otvoren kod 2024): editor iz nule sa GPU ubrzanjem, napravljen za brzinu, saradnju i AI.
- **Agentski alati** (poput Claude Code‑a): gde „editor“ sve više sam sebe pokreće, a čovek pregleda i usmerava umesto da kuca.
- Zanimljivo je da se LSP ponovo koristi, ovog puta da agentima AI‑ja pruži preciznu inteligenciju o kodu umesto nagađanja pretraživanjem teksta.

## Kraj jedne ere? (danas)

- Svaka era ove priče je smanjivala razmak između ideje i pokretanja koda: paketne kartice (sati), preko linijskih editora (linija po liniju), do editora preko celog ekrana (ceo fajl), do inteligencije IDE‑a (editor razume tvoj kod), do AI‑ja (editor piše sa tobom).
- A ipak su dva editora iz 1976., Vi i Emacs, i dalje tu. Fundamentalne ideje (modalna efikasnost, programibilna proširivost) nadživele su svaki talas hardvera.
- Pedeset godina je učenje svog editora bilo obred prelaska. To bi moglo da se menja.
- [Jiki tie-in / closing thought to go here]
- Hvala što ste čitali
