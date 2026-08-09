---
title: "HTML alapok"
excerpt: "Hogy mi is valójában egy weboldal, hogyan épül fel, és milyen tagekkel fogod strukturálni mindazt, amit a weben valaha is létrehozol."
tags: ["front-end-basics"]
seo:
  description: "Bevezető útmutató a HTML-be. Tudd meg, mi a HTML, hogyan épül fel egy weboldal fejléccel és törzszsel, és ismerd meg a legfontosabb tageket."
  keywords: ["html", "html alapok", "tanulj html-t", "html tagek", "weboldal felépítése", "kezdők"]
en_md5: a3a8af4d009d64ef8339dc7e2661ef82
---

## Bevezetés

Ebben az útmutatóban szeretnék egy kicsit beszélni arról, hogy mi is valójában egy weboldal, és hogyan működik. A legalapvetőbb dolgokra szorítkozunk. Ha már ismersz valamennyi HTML-t, valószínűleg nagyon alapvetőnek fogod érezni. Ha nem, akkor ez jó bevezető lesz mindahhoz, ami ezután következik.

## Mi is valójában egy weboldal

Egy weboldal nem más, mint egy szöveges fájl. Amikor meglátogatsz egy weboldalt, a böngésződ kap egy HTML fájlt, amit beolvas, és ennek alapján rajzolja ki a képernyőn látható oldalt.

Ezt most rögtön ki is próbálhatod. Látogass meg bármelyik weboldalt, kattints a jobb egérgombbal bárhová az oldalon, és válaszd a **Forrás megtekintése** menüpontot. Ez a HTML. Egy nagyobb oldalon rengeteg mindent fogsz látni, ami elsőre ijesztő lehet, de az egész ugyanabból a néhány építőelemből áll, amiket alább meg fogunk nézni.

A HTML a **HyperText Markup Language** rövidítése. A „markup” (jelölés) annyit tesz, hogy fogunk egy szöveget, és további információkkal jelöljük meg, hogy melyik rész micsoda. A böngésző (legyen az a Chrome vagy bármi más) ezeket a jelöléseket olvassa, és ezek alapján dönti el, hogyan jelenítsen meg mindent a képernyőn.

## Tagek

A HTML arról híres, hogy **tageket** használ, amelyek egy `<` jellel kezdődnek és egy `>` jellel végződnek. A két csúcsos zárójel közé kerül az, hogy miről is szól a tag. Ezután jön valamilyen tartalom, majd egy záró tag, ami ugyanúgy néz ki, mint a nyitó, csak egy perjellel kiegészítve.

Lássunk egy példát:

```html
<p>Hello there.</p>
```

A `p` a paragraph (bekezdés) rövidítése. Ezt leírva azt mondjuk a böngészőnek, hogy jelenítsen meg egy bekezdést a képernyőn, és a bekezdés szövege „Hello there.” legyen.

A tagek extra információkat is hordozhatnak, ezeket **attribútumoknak** nevezzük, és a nyitó tag belsejében helyezkednek el. A link jó példa erre:

```html
<a href="https://jiki.io">Visit Jiki</a>
```

Egy link létrehozásához az `a` taget használjuk (az „a” az anchor, azaz horgony rövidítése, [kissé furcsa történelmi okokból](https://thehistoryoftheweb.com/brief-history-hypertext/)). Egy link általában tartalmaz egy `href` attribútumot, ami megadja, hogy hová mutat a link, a tagek közötti szöveg pedig az, amire rákattinthatsz.

Néhány tag nem fog közre semmilyen tartalmat, így nincs is záró párjuk. Az ilyenre a kép a klasszikus példa:

```html
<img src="photo.jpg" alt="Egy fotó rólam egy hegyen" />
```

Az `img` az image (kép) rövidítése. A `src` attribútum a képfájlra mutat, az `alt` attribútum pedig leírja a képet a képernyőolvasót használók számára. Ez a szöveg jelenik meg akkor is, ha a kép valamiért nem töltődik be.

## Egy oldal felépítése

Minden egyes weboldalnak ugyanaz a váza, ugyanazok a csontjai. Íme a lehető legminimalistább **érvényes** oldal, amit létrehozhatsz (készíthetsz érvénytelen oldalakat is kevesebb HTML-lel, amit a böngésző megjelenít, de kezdjük úgy, ahogy folytatni szeretnénk – felelős fejlesztőként viselkedve!):

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

Olvassuk végig felülről.

A `<!doctype html>` sor közli a böngészővel, hogy ez egy modern HTML dokumentum. Ez egy kötelező sablonrész. Írd be egyszer a fájl legelejére, és többet ne foglalkozz vele.

Az `html` tag a gyökérelem, ami az egész dokumentumot körülöleli. A `lang="en"` attribútum jelzi a böngészőknek és a keresőmotoroknak, hogy az oldal angol nyelvű.

Ezen belül két részre oszlik: a **fejléc** és a **törzs**.

### A fejléc

A fejléc minden, ami **nem** jelenik meg a képernyőn. Ez metaadat, a metaadat pedig egyszerűen az oldalra vonatkozó adatokat jelenti, nem pedig a látható tartalmat. A példánkban két dolog található benne:

- A `<meta charset="UTF-8" />` azt adja meg, hogy az oldal milyen karakterkészletet használ. Az UTF-8 a standard karakterkészlet, ami szinte mindent lefed: latin betűket, ékezetes karaktereket, más ábécéket, még az emojikat is. Ha beszúrsz egy emojit a HTML-edbe, ez a sor biztosítja, hogy helyesen jelenjen meg. Mindig írd bele.
- A `<title>` a böngésző lapfülének tetején megjelenő szöveget állítja be. Ezt használják a keresőmotorok is az oldalad címeként. Az egyik dolog, amire kódolás közben sokat kell majd gondolnod, hogy mit szeretnél ott látni, amikor valakinek húsz lap van nyitva.

Gyakran találkozhatsz még egy sorral a fejlécben, amit érdemes felismerned:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Ez arra utasítja a telefonokat, hogy az oldalt normális méretben jelenítsék meg, ahelyett hogy teljesen kicsinyítve mutatnák. Egyelőre ennél többet nem kell vele foglalkoznunk. Írd be, és lépj tovább.

### A törzs

A törzs minden, amit ténylegesen látsz – minden, ami a lapfülek és a címsor alatti nagy, négyzet alakú területen van. Minden címsor, bekezdés, kép és link a törzsben helyezkedik el. Az útmutató további része azokról a tagekről szól, amelyek ide kerülnek.

## index.html

Mielőtt rátérnénk a tagekre, van még egy dolog, amit érdemes tudni. Van egy nagyon régi konvenció, miszerint az `index.html` nevű fájl egy weboldal kezdőlapja. Ha egy domainre navigálsz anélkül, hogy bármit a végére írnál, a weboldal megnézi, van-e `index.html` nevű fájl, és ha van, egyszerűen megjeleníti annak tartalmát. Magában a fájlban nincs semmi varázslat. Ez csak egy szabvány, amit szinte minden weboldal követ, így a honlapodnak ezzel a névvel kell szerepelnie egy fájlban.

## Az első tagek, amiket használni fogsz

Egy valóban hasznos oldalt tíznél kevesebb taggel is létrehozhatsz. Nézzük meg őket, nagyjából abban a sorrendben, ahogy majd nyúlni fogsz utánuk.

### Címsorok

A címsorok hat szinten érhetők el, `h1`-től `h6`-ig:

```html
<h1>Jeremy Walker</h1>
<h2>About me</h2>
<h3>My photography</h3>
```

Az `h1` az oldal főcíme, és általában csak egy lehet belőle. Használj `h2`-t a szakaszcímekhez, `h3`-at a szekciókon belüli alcímekhez, és így tovább. Mivel az `h1` egy első szintű címsor, a böngésző tudja, hogy egy kicsit nagyobbra és vastagabbra kell szednie.

A címszintet nem a méret, hanem a jelentés alapján válaszd meg. Ezek adják az oldalad vázát, kicsit olyanok, mint a fejezetek és alfejezetek egy könyvben.

### Bekezdések

A `p` tag egy szöveges bekezdést jelöl, és szinte minden szó egy oldalon ilyen bekezdésekben található:

```html
<p>I have been building things on the web for thirty years.</p>
<p>These days I spend most of my time working on Jiki.</p>
```

Minden bekezdés saját taget kap, és a böngésző automatikusan térközt tesz közéjük.

### Listák

Kétféle lista létezik. A **rendezetlen lista** (`ul`) felsoroláspontokat, a **rendezett lista** (`ol`) pedig számozást jelenít meg. Mindkét esetben minden elem egy **listaelem** (`li`):

```html
<ul>
  <li>Photography</li>
  <li>Podcasting</li>
  <li>Teaching people to code</li>
</ul>
```

Cseréld le az `ul`-t `ol`-ra, és a felsoroláspontokból számozás lesz: 1, 2, 3.

### Linkek

A linkek teszik a webet igazán webbé. Az `a` tag bármiből kattintható dolgot csinál:

```html
<p>You can find my code on <a href="https://github.com/ihid">GitHub</a>.</p>
```

A linkek mutathatnak más weboldalakra, vagy a saját oldalad más lapjaira. Ha van egy `resume.html` fájlod az `index.html` mellett, akkor így hivatkozhatsz rá: `<a href="resume.html">My resume</a>`.

### Képek

Az `img` tag egy képet tesz az oldalra:

```html
<img src="images/me.jpg" alt="Jeremy egy dombon áll a Lake Districtben" />
```

A `src` lehet egy fájl a saját oldaladon, vagy egy teljes webcím. Mindig töltsd ki az `alt` szöveget a kép valódi leírásával.

### Kiemelés

Két apró tag segítségével kiemelhetsz szavakat a szövegedben. A `strong` valamit fontosnak jelöl, és a böngészők félkövéren jelenítik meg. Az `em` hangsúlyos kiemelést jelöl, és a böngészők dőlten jelenítik meg:

```html
<p>The struggle is where the <strong>learning</strong> happens, so <em>write your own solutions</em>.</p>
```

## Adj szerkezetet az oldaladnak

Az eddigi tagek egyes tartalmi elemeket írnak le. Létezik egy másik tagcsalád is, ami az oldal régióit írja le. Ezeket gyakran **szemantikus tageknek** nevezik, mert jelentést adnak minden területnek, ahelyett hogy a kinézetét változtatnák meg:

- A `header` az oldal felső részét fogja közre, általában az oldal nevét és logóját.
- A `nav` a navigációdat foglalja magában, vagyis a többi oldalra mutató linkek gyűjteményét.
- A `main` az oldal fő tartalmát fogja közre. Csak egy lehet belőle.
- A `section` egy elkülönült tartalmi részt csoportosít, általában saját címmel.
- Az `article` egy önálló egységet, például egy blogbejegyzést vagy hírcikket fog közre.
- A `footer` az oldal alsó részét, jellemzően a szerzői jogi és elérhetőségi linkeket tartalmazza.

Egy ilyen tagekkel készült személyes honlap így nézhet ki:

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

Ezek a tagek önmagukban nem sokat változtatnak az oldalad kinézetén. Akkor miért érdemes foglalkozni velük? Mert a jelentéssel bíró szerkezet segít minden olyan eszköznek, ami a lapot olvassa, de nem egy emberi szem nézi a képernyőt. A képernyőolvasók ezeket a tageket használják, hogy a vak felhasználók közvetlenül a navigációra vagy a fő tartalomra ugorhassanak. A keresőmotorok ezek segítségével értik meg, miről szól az oldalad. Később, amikor majd formázni szeretnéd az oldaladat, a jól szervezett szerkezet mindent sokkal könnyebbé tesz.

Ha az oldal egy része nem illik egyik jelentésbe sem, két általános konténer áll rendelkezésre: a `div` egy tartalmi blokkhoz, a `span` pedig néhány szóhoz a szövegen belül. Ezek önmagukban semmit sem jelentenek, pont ezért éri meg először a jelentéssel bíró tagekhez nyúlni.

## További tagek, amelyeket érdemes felismerni

Ezeket nem kell megjegyezned, de szembe fognak jönni, amikor mások oldalait nézed, ezért jó tudni, hogy léteznek:

- `blockquote` egy más forrásból származó idézethez.
- `code` egy kódrészlethez a szövegben, a `pre` pedig egy előreformázott szövegblokkhoz.
- `table` valódi táblázatos adatok megjelenítéséhez, ahol a `tr` jelöli a sorokat, a `td` pedig a cellákat.
- `form`, `input`, `label` és `button` a látogatóktól származó adatok begyűjtéséhez.
- `video` és `audio` médiatartalmak beágyazásához.
- `br` egy sortöréshez a szövegben. Ritkán használd. Ha új bekezdést akarsz, használj inkább egy új `p`-t.

Összesen több mint száz tag létezik, de az ebben az útmutatóban bemutatottak lefedik a látott és írott kódok túlnyomó többségét. Ha olyannal találkozol, amit nem ismersz, nézd meg az [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) oldalon, amit a profi fejlesztők is használnak referenciaként.

## Hogyan tovább

A legjobb módja, hogy mindez megragadjon, ha építesz valamit. Hozz létre egy `index.html` fájlt, add hozzá az útmutatóban látott vázat, és készíts egy oldalt magadról címsorokkal, bekezdésekkel, listákkal és linkekkel. Ezután nyisd meg a böngészőben, és nézd meg, mit alkottál.

Ha már magabiztosan mozogsz, szokj rá, hogy megnézed a meglátogatott weboldalak forrását. Hamarosan mindenhol felismered a tageket, és látni fogod, hogy a legkifinomultabb oldalak is pontosan ugyanazokból az elemekből épülnek fel, amiket most tanultál meg.

Egyelőre elég egyszerűnek fog kinézni az oldalad, és ez így van rendjén. A HTML adja meg az oldal szerkezetét. Az, hogy jól is nézzen ki, a CSS dolga – és mi is afelé tartunk.
