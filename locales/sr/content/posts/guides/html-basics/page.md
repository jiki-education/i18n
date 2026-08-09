---
title: "HTML Osnove"
excerpt: "Šta web stranica zapravo jeste, kako se pravi, i tagovi koje ćeš koristiti da struktuiraš sve što ikada napraviš na webu."
tags: ["front-end-basics"]
seo:
  description: "Vodič za početnike o HTML-u. Saznaj šta je HTML, kako je web stranica struktuirana pomoću glave (head) i tela (body), i koji su najvažniji tagovi za pamćenje."
  keywords: ["html", "html osnove", "nauči html", "html tagovi", "struktura web stranice", "početnici"]
en_md5: a3a8af4d009d64ef8339dc7e2661ef82
---

## Uvod

U ovom vodiču želim da popričamo malo o tome šta web stranica zapravo jeste i kako funkcioniše. Držaćemo se najosnovnijih stvari. Ako već znaš ponešto HTML-a, ovo će ti verovatno delovati veoma osnovno. Ako ne znaš, ovo bi trebalo da bude dobra podloga za sve što dolazi kasnije.

## Šta je web stranica zapravo

Web stranica je samo tekstualni fajl. Kada posetiš neki sajt, tvoj pregledač dobije HTML fajl, pročita ga i iscrta tako da nastane stranica koju vidiš.

Možeš i sam da se uveriš u ovo odmah. Otvori bilo koji sajt, klikni desnim tasterom bilo gde na stranici i izaberi **View Page Source**. To je HTML. Na velikom sajtu će izgledati preplavljujuće, gomila svega i svačega, ali sve je napravljeno od istog šačica građevinskih blokova koje ćemo pogledati u nastavku.

HTML je skraćenica za **HyperText Markup Language**. „Markup“ (označavanje) jednostavno znači da uzmemo neki tekst i obeležimo ga dodatnim informacijama o tome šta svaki deo predstavlja. Pregledač, bilo da je Chrome ili neki drugi, čita ta obeležja i koristi ih da odluči kako da sve rasporedi na ekranu.

## Tagovi

HTML je poznat po svojim **tagovima**, koji imaju znak `<` na početku i `>` na kraju. Između tih uglastih zagrada nalazi se stvar na koju se tag odnosi. Zatim imamo neki sadržaj, a potom i zatvarajući tag, koji je isti kao i otvarajući, ali sa kosom crtom.

Hajde da pogledamo primer:

```html
<p>Hello there.</p>
```

Slovo `p` označava paragraf. Ovim govorimo pregledaču da želimo da na ekranu prikaže paragraf, i da je tekst u tom paragrafu „Hello there.“

Tagovi mogu da nose i dodatne deliće informacija koji se zovu **atributi**, a nalaze se unutar otvarajućeg taga. Link je dobar primer:

```html
<a href="https://jiki.io">Visit Jiki</a>
```

Za kreiranje linka koristimo tag `a` (što označava sidro – anchor, iz [pomalo čudnih istorijskih razloga](https://thehistoryoftheweb.com/brief-history-hypertext/)). Link obično ima atribut `href`, koji kaže kuda link vodi, a tekst između tagova je onaj deo na koji se klika.

Nekoliko tagova ne obavija nikakav sadržaj, pa nemaju zatvarajući tag. Slika je klasičan primer:

```html
<img src="photo.jpg" alt="A photo of me on a mountain" />
```

Skraćenica `img` znači slika (image). Atribut `src` pokazuje na fajl sa slikom, a atribut `alt` opisuje sliku za osobe koje koriste čitače ekrana. To je ujedno i ono što se prikazuje ako slika ne uspe da se učita.

## Anatomija stranice

Svaka web stranica ima isti skelet, iste kosti. Evo najjednostavnije **validne** stranice koju možeš da napraviš (možeš napraviti i nevalidne stranice sa još manje HTML-a, koje će pregledač prikazati, ali hajde da krenemo kako treba i ponašamo se kao odgovorni programeri!):

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

Hajde da prođemo kroz nju od vrha.

Linija `<!doctype html>` govori pregledaču da je ovo moderan HTML dokument. To je obavezan boilerplate. Napiši je jednom na vrhu i zaboravi na nju.

Tag `html` je korenski element koji obuhvata ceo dokument. Atribut `lang="en"` govori pregledačima i pretraživačkim motorima da je stranica napisana na engleskom jeziku.

Unutar njega imamo dva dela: **glavu** (head) i **telo** (body).

### Glava (head)

Glava je sve ono što se **ne** prikazuje na ekranu. To su metapodaci, a metapodaci jednostavno znače podaci o stranici, a ne stvari koje vidiš. U našem primeru postoje dve stvari u njoj:

- `<meta charset="UTF-8" />` govori koji skup karaktera stranica koristi. UTF-8 je standardni skup karaktera i pokriva gotovo sve: latinična slova, slova sa dijakritičkim znacima, druga pisma, čak i emodžije. Ako nalepiš emodži u svoj HTML, ova linija je ta koja čini da se on pravilno prikaže. Uvek je uključi.
- `<title>` postavlja tekst koji se pojavljuje na vrhu kartice pregledača. To je ujedno i ono što pretraživački motori koriste kao naslov tvoje stranice. Jedna stvar o kojoj ćeš često razmišljati dok programiraš jeste šta želiš da stoji tamo gore kada neko ima dvadeset otvorenih kartica.

Često ćeš u glavi videti još jednu liniju, koju vredi prepoznati:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Ovo govori telefonima da stranicu prikažu u razumnoj veličini, umesto da je zumiraju odjednom. Za sada ne treba da brinemo o tome dalje od ovoga. Uključi je i nastavi dalje.

### Telo (body)

Telo je sve ono što zaista vidiš, sve u onom velikom pravougaonom prostoru ispod kartica i adresne trake. Svaki naslov, paragraf, slika i link žive unutar tela. Ostatak ovog vodiča govori o tagovima koji idu tamo.

## index.html

Pre nego što pređemo na tagove, još jedna stvar koju vredi znati. Postoji veoma dugotrajna konvencija da fajl pod nazivom `index.html` bude prva stranica jednog sajta. Ako odeš na neki domen i ne dodaš ništa posle njega, sajt proverava da li postoji fajl pod nazivom `index.html`, i ako postoji, jednostavno ti prikazuje njegov sadržaj. Nema ničeg magičnog u samom fajlu. To je samo standard koji prate gotovo svi sajtovi, tako da bi tvoja početna strana trebalo da se nalazi u fajlu s tim imenom.

## Tagovi koje ćeš prvo koristiti

Možeš da napraviš zaista korisnu stranicu sa manje od deset tagova. Hajde da ih pogledamo, otprilike redosledom kojim ćeš za njima posezati.

### Naslovi

Naslovi dolaze u šest nivoa, od `h1` do `h6`:

```html
<h1>Jeremy Walker</h1>
<h2>About me</h2>
<h3>My photography</h3>
```

`h1` je glavni naslov stranice i obično bi trebalo da postoji samo jedan. `h2` koristi za naslove odeljaka, `h3` za pododeljke unutar njih, i tako dalje. Pošto je `h1` naslov prvog nivoa, pregledač zna da treba da ga napravi malo većim i malo debljim.

Biraj nivoe naslova prema značenju, a ne prema veličini. Oni stranici daju strukturu, poput poglavlja i odeljaka u knjizi.

### Paragrafi

Tag `p` označava paragraf teksta, i skoro sve reči na bilo kojoj stranici žive unutar jednog:

```html
<p>I have been building things on the web for thirty years.</p>
<p>These days I spend most of my time working on Jiki.</p>
```

Svaki paragraf dobija svoj sopstveni tag, a pregledač automatski dodaje razmak između njih.

### Liste

Postoje dve vrste listi. **Neuređena lista** (`ul`) daje ti nabrajanje sa tačkama, a **uređena lista** (`ol`) daje brojeve. Unutar bilo koje od njih, svaki unos je **stavka liste** (`li`):

```html
<ul>
  <li>Photography</li>
  <li>Podcasting</li>
  <li>Teaching people to code</li>
</ul>
```

Zameni `ul` sa `ol` i tačke postaju 1, 2, 3.

### Linkovi

Linkovi su ono što čini web webom. Tag `a` pretvara bilo šta u nešto na šta može da se klikne:

```html
<p>You can find my code on <a href="https://github.com/ihid">GitHub</a>.</p>
```

Linkovi mogu da pokazuju na druge sajtove, ili na druge stranice na tvom sopstvenom sajtu. Ako imaš `resume.html` pored svog `index.html`, možeš da ga povežeš sa `<a href="resume.html">My resume</a>`.

### Slike

Tag `img` postavlja sliku na stranicu:

```html
<img src="images/me.jpg" alt="Jeremy standing on a hill in the Lake District" />
```

`src` može da bude fajl na tvom sajtu ili puna web adresa. Uvek popuni tekst za `alt` istinskim opisom slike.

### Isticanje

Dva mala taga ti omogućavaju da istakneš reči unutar teksta. `strong` obeležava nešto kao važno, a pregledači ga prikazuju podebljano. `em` obeležava naglašavanje, a pregledači ga prikazuju iskošeno:

```html
<p>The struggle is where the <strong>learning</strong> happens, so <em>write your own solutions</em>.</p>
```

## Davanje strukture tvojoj stranici

Tagovi koje smo do sada pogledali opisuju pojedinačne delove sadržaja. Postoji i druga porodica tagova koja opisuje oblasti jedne stranice. Oni se često nazivaju **semantičkim tagovima**, jer daju značenje svakoj oblasti, umesto da menjaju kako bilo šta izgleda:

- `header` obuhvata gornji deo stranice, obično tvoj naziv sajta i logo.
- `nav` obuhvata tvoju navigaciju, skup linkova ka drugim stranicama na tvom sajtu.
- `main` obuhvata glavni sadržaj stranice. Trebalo bi da postoji samo jedan.
- `section` grupiše jedan prepoznatljiv deo sadržaja, obično sa sopstvenim naslovom.
- `article` obuhvata samostalni deo, poput blog posta ili vesti.
- `footer` obuhvata donji deo, obično copyright i kontakt linkove.

Lična početna strana koja koristi ove tagove mogla bi da izgleda ovako:

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

Nijedan od ovih tagova sam po sebi ne menja značajno izgled tvoje stranice. Pa zašto se onda truditi? Zato što struktura sa značenjem pomaže svemu što čita tvoju stranicu, a nije ljudsko biće koje gleda u ekran. Čitači ekrana koriste ove tagove da omoguće slepim korisnicima da skoče direktno na navigaciju ili glavni sadržaj. Pretraživački motori ih koriste da bi razumeli o čemu je tvoja stranica. A kada jednog dana dođeš na red da stilizuješ svoju stranicu, dobro organizovana struktura sve čini mnogo lakšim.

Ako neki deo stranice ne odgovara nijednom od tih značenja, postoje dva generička kontejnera: `div` za blok sadržaja i `span` za nekoliko reči unutar teksta. Oni ne znače apsolutno ništa, i upravo je to razlog zašto bi prvo trebalo posegnuti za tagovima koji imaju značenje.

## Još tagova koje treba prepoznati

Ne moraš ove da pamtiš, ali ćeš naletati na njih dok gledaš tuđe stranice, pa vredi znati da postoje:

- `blockquote` za citat sa nekog drugog mesta.
- `code` za isečak koda unutar teksta, i `pre` za blok prethodno formatiranog teksta.
- `table`, sa `tr` za svaki red i `td` za svaku ćeliju, za zaista tabelarne podatke.
- `form`, `input`, `label` i `button` za prikupljanje unosa od posetilaca.
- `video` i `audio` za ugrađivanje medijskih sadržaja.
- `br` za prelom reda unutar teksta. Koristi ga retko. Ako želiš novi paragraf, koristi novi `p`.

Ukupno postoji više od sto tagova, ali oni iz ovog vodiča pokrivaju ogromnu većinu onoga što ćeš videti i pisati. Kada naiđeš na neki koji ne prepoznaješ, potraži ga na [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)-u, referenci koju koriste profesionalci.

## Kuda dalje

Najbolji način da sve ovo ostane u glavi jeste da napraviš nešto. Kreiraj `index.html`, dodaj mu skelet iz ovog vodiča i struktuiraj stranicu o sebi koristeći naslove, paragrafe, liste i linkove. Zatim je otvori u pregledaču i pogledaj šta si napravio.

Kada se opustiš, stekni naviku da gledaš izvorni kod sajtova koje posećuješ. Počećeš da prepoznaješ tagove svuda, i videćeš da su čak i najsofisticiraniji sajtovi izgrađeni od potpuno istih delova koje si upravo naučio.

Tvoja stranica će za sada izgledati prilično obično, i to je sasvim u redu. HTML daje stranici strukturu. Da bi izgledala lepo, zadužen je CSS, a o tome sledeći put.
