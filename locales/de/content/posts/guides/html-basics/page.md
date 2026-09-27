---
title: "HTML-Grundlagen"
excerpt: "Was eine Webseite wirklich ist, wie sie aufgebaut ist und mit welchen Tags du alles strukturierst, was du je im Web erstellst."
tags: ["front-end-basics"]
seo:
  description: "Ein Einsteiger-Leitfaden zu HTML. Lerne, was HTML ist, wie eine Webseite mit Head und Body aufgebaut ist und welche Tags du kennen solltest."
  keywords: ["html", "html grundlagen", "html lernen", "html tags", "webseitenstruktur", "anfänger"]
en_md5: a3a8af4d009d64ef8339dc7e2661ef82
---

## Einführung

In diesem Leitfaden möchte ich ein wenig darüber sprechen, was eine Webseite eigentlich ist und wie sie funktioniert. Wir beschränken uns dabei auf die grundlegendsten Dinge. Wenn du schon etwas HTML kennst, wird dir das wahrscheinlich sehr einfach vorkommen. Wenn nicht, ist es eine gute Einführung in alles, was noch kommt.

## Was eine Webseite wirklich ist

Eine Webseite ist einfach eine Textdatei. Wenn du eine Website besuchst, bekommt dein Browser eine HTML-Datei geschickt. Er liest sie und baut daraus die Seite auf, die du siehst.

Du kannst dir das gleich selbst beweisen. Geh auf irgendeine Website, klicke irgendwo auf der Seite mit der rechten Maustaste und wähle **Seitenquelltext anzeigen**. Das ist das HTML. Bei einer großen Website wirkt es erst einmal überwältigend, ein riesiger Haufen Zeug, aber alles besteht aus denselben wenigen Bausteinen, die wir uns unten ansehen.

HTML steht für **HyperText Markup Language**. „Markup“ bedeutet einfach, dass wir einen Text nehmen und ihn mit zusätzlichen Informationen darüber versehen, was die einzelnen Teile sind. Der Browser, egal ob Chrome oder irgendein anderer, liest diese Markierungen und entscheidet damit, wie er alles auf dem Bildschirm darstellt.

## Tags

HTML ist berühmt für seine **Tags**, die am Anfang ein `<` und am Ende ein `>` haben. Zwischen diesen spitzen Klammern steht das, worum es bei dem Tag geht. Dann folgt ein Inhalt, und danach ein schließender Tag, der genauso aussieht wie der öffnende, aber mit einem Schrägstrich.

Schauen wir uns ein Beispiel an:

```html
<p>Hello there.</p>
```

Das `p` steht für paragraph, das englische Wort für Absatz. Indem wir das schreiben, sagen wir dem Browser, dass er einen Absatz auf dem Bildschirm darstellen soll und dass der Text in diesem Absatz „Hello there.“ lautet.

Tags können außerdem zusätzliche Informationen tragen, die **Attribute** heißen und im öffnenden Tag stehen. Ein Link ist ein gutes Beispiel:

```html
<a href="https://jiki.io">Visit Jiki</a>
```

Um einen Link zu erstellen, verwenden wir den `a`-Tag (der für anchor steht, aus [etwas seltsamen historischen Gründen](https://thehistoryoftheweb.com/brief-history-hypertext/)). Ein Link hat normalerweise ein `href`-Attribut, das angibt, wohin der Link führt, und der Text zwischen den Tags ist der Teil, auf den du klickst.

Ein paar Tags umschließen keinen Inhalt und haben deshalb keinen schließenden Tag. Ein Bild ist das klassische Beispiel:

```html
<img src="photo.jpg" alt="A photo of me on a mountain" />
```

Das `img` steht für image, das englische Wort für Bild. Das `src`-Attribut verweist auf die Bilddatei, und das `alt`-Attribut beschreibt das Bild für Menschen, die Screenreader verwenden. Es ist außerdem das, was angezeigt wird, wenn das Bild nicht geladen werden kann.

## Der Aufbau einer Seite

Jede einzelne Webseite hat dasselbe Skelett, dieselben Knochen. Hier ist die minimalistischste **gültige** Seite, die du erstellen kannst (du kannst mit weniger HTML auch ungültige Seiten bauen, die der Browser trotzdem darstellt, aber fangen wir am besten gleich so an, wie wir weitermachen wollen, und verhalten wir uns wie verantwortungsvolle Entwickler!):

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

Gehen wir es von oben durch.

Die Zeile `<!doctype html>` sagt dem Browser, dass dies ein modernes HTML-Dokument ist. Sie ist ein Pflichtbestandteil der Grundstruktur. Schreib sie einmal oben hin und vergiss sie dann.

Der `html`-Tag ist das Wurzelelement, das das gesamte Dokument umschließt. Das Attribut `lang="en"` sagt Browsern und Suchmaschinen, dass die Seite auf Englisch geschrieben ist.

Darin gibt es zwei Teile: den **Head** und den **Body**.

### Der Head

Der Head ist alles, was **nicht** auf dem Bildschirm erscheint. Er enthält Metadaten, und Metadaten sind einfach Daten über die Seite und nicht das, was du siehst. In unserem Beispiel stehen zwei Dinge darin:

- `<meta charset="UTF-8" />` legt fest, welchen Zeichensatz die Seite verwendet. UTF-8 ist der Standard-Zeichensatz und deckt so ziemlich alles ab: lateinische Buchstaben, Buchstaben mit Akzenten, andere Alphabete, sogar Emojis. Wenn du ein Emoji in dein HTML einfügst, sorgt diese Zeile dafür, dass es richtig angezeigt wird. Bau sie immer ein.
- `<title>` legt den Text fest, der oben im Browser-Tab erscheint. Er ist auch das, was Suchmaschinen als Überschrift für deine Seite verwenden. Eine Sache, über die du beim Programmieren viel nachdenken wirst, ist, was du dort oben stehen haben willst, wenn jemand zwanzig Tabs offen hat.

Im Head wirst du oft noch eine weitere Zeile sehen, die du kennen solltest:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Sie sagt Handys, dass sie die Seite in einer vernünftigen Größe anzeigen sollen und nicht ganz herausgezoomt. Mehr brauchst du darüber vorerst nicht zu wissen. Bau sie ein und mach weiter.

### Der Body

Der Body ist alles, was du tatsächlich siehst, alles in dem großen rechteckigen Bereich unterhalb der Tabs und der Adressleiste. Jede Überschrift, jeder Absatz, jedes Bild und jeder Link lebt im Body. Im Rest dieses Leitfadens geht es um die Tags, die dort hineingehören.

## index.html

Bevor wir zu den Tags kommen, gibt es noch eine Sache, die du wissen solltest. Es gibt eine uralte Konvention, dass eine Datei namens `index.html` die erste Seite einer Website ist. Wenn du eine Domain ohne etwas dahinter aufrufst, schaut die Website nach, ob es eine Datei namens `index.html` gibt, und wenn ja, zeigt sie dir einfach deren Inhalt. An der Datei selbst ist nichts Magisches. Es ist einfach ein Standard, dem fast jede Website folgt. Deine Startseite sollte also in einer Datei mit diesem Namen liegen.

## Die Tags, die du zuerst verwenden wirst

Du kannst mit weniger als zehn Tags eine wirklich nützliche Seite bauen. Schauen wir sie uns an, ungefähr in der Reihenfolge, in der du sie verwenden wirst.

### Überschriften

Überschriften gibt es in sechs Ebenen, von `h1` bis `h6`:

```html
<h1>Jeremy Walker</h1>
<h2>About me</h2>
<h3>My photography</h3>
```

Das `h1` ist die Hauptüberschrift der Seite, und normalerweise sollte es nur eine geben. Verwende `h2` für Abschnittsüberschriften, `h3` für Unterabschnitte darin und so weiter. Weil ein `h1` eine Überschrift der ersten Ebene ist, macht der Browser sie automatisch etwas größer und etwas fetter.

Wähle deine Überschriftsebenen nach der Bedeutung, nicht nach der Größe. Sie geben deiner Seite eine Gliederung, ein bisschen wie Kapitel und Abschnitte in einem Buch.

### Absätze

Der `p`-Tag markiert einen Textabsatz, und fast alle Wörter auf einer Seite stecken in einem solchen Absatz:

```html
<p>I have been building things on the web for thirty years.</p>
<p>These days I spend most of my time working on Jiki.</p>
```

Jeder Absatz bekommt seinen eigenen Tag, und der Browser fügt automatisch Abstand dazwischen ein.

### Listen

Es gibt zwei Arten von Listen. Eine **ungeordnete Liste** (`ul`) liefert dir Aufzählungspunkte, und eine **geordnete Liste** (`ol`) liefert dir Nummern. In beiden ist jeder Eintrag ein **Listeneintrag** (`li`):

```html
<ul>
  <li>Photography</li>
  <li>Podcasting</li>
  <li>Teaching people to code</li>
</ul>
```

Tauschst du das `ul` gegen ein `ol` aus, werden aus den Aufzählungspunkten 1, 2, 3.

### Links

Links sind das, was das Web zum Web macht. Der `a`-Tag macht alles anklickbar:

```html
<p>You can find my code on <a href="https://github.com/ihid">GitHub</a>.</p>
```

Links können auf andere Websites zeigen oder auf andere Seiten deiner eigenen Website. Wenn eine `resume.html` neben deiner `index.html` liegt, kannst du mit `<a href="resume.html">My resume</a>` darauf verlinken.

### Bilder

Der `img`-Tag setzt ein Bild auf die Seite:

```html
<img src="images/me.jpg" alt="Jeremy standing on a hill in the Lake District" />
```

Das `src` kann eine Datei auf deiner eigenen Website oder eine vollständige Webadresse sein. Fülle den `alt`-Text immer mit einer echten Beschreibung des Bildes.

### Betonung

Zwei kleine Tags lassen dich Wörter in deinem Text hervorheben. `strong` markiert etwas als wichtig, und Browser zeigen es fett. `em` markiert eine betonte Hervorhebung, und Browser zeigen sie kursiv:

```html
<p>The struggle is where the <strong>learning</strong> happens, so <em>write your own solutions</em>.</p>
```

## So gibst du deiner Seite Struktur

Die Tags, die wir bisher angesehen haben, beschreiben einzelne Inhalte. Es gibt eine zweite Familie von Tags, die die Bereiche einer Seite beschreiben. Sie werden oft **semantische Tags** genannt, weil sie jedem Bereich eine Bedeutung geben, statt zu verändern, wie etwas aussieht:

- `header` umschließt den oberen Bereich der Seite, typischerweise deinen Seitennamen und dein Logo.
- `nav` umschließt deine Navigation, die Sammlung von Links zu den anderen Seiten deiner Website.
- `main` umschließt den Hauptinhalt der Seite. Davon sollte es nur einen geben.
- `section` gruppiert einen abgegrenzten Inhaltsblock, meist mit eigener Überschrift.
- `article` umschließt einen in sich geschlossenen Beitrag, wie einen Blogpost oder einen Nachrichtenartikel.
- `footer` umschließt den unteren Bereich, typischerweise Copyright- und Kontaktlinks.

Eine persönliche Startseite, die diese Tags verwendet, könnte so aussehen:

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

Keiner dieser Tags verändert das Aussehen deiner Seite für sich genommen groß. Warum also die Mühe? Weil eine Struktur mit Bedeutung allem hilft, was deine Seite liest und kein Mensch ist, der auf einen Bildschirm schaut. Screenreader nutzen diese Tags, damit blinde Nutzer direkt zur Navigation oder zum Hauptinhalt springen können. Suchmaschinen nutzen sie, um zu verstehen, worum es auf deiner Seite geht. Und wenn du deine Seite später gestaltest, macht eine gute Organisation alles viel einfacher.

Wenn ein Teil der Seite zu keiner dieser Bedeutungen passt, gibt es zwei allgemeine Container: `div` für einen Block von Inhalten und `span` für ein paar Wörter innerhalb eines Textes. Sie bedeuten überhaupt nichts, und genau deshalb solltest du zuerst zu den bedeutungsvollen Tags greifen.

## Weitere Tags zum Kennenlernen

Du musst sie dir nicht einprägen, aber sie werden dir begegnen, wenn du dir die Seiten anderer Leute ansiehst. Es lohnt sich also zu wissen, dass es sie gibt:

- `blockquote` für ein Zitat von woanders.
- `code` für einen Codeausschnitt innerhalb von Text und `pre` für einen Block vorformatierten Textes.
- `table` mit `tr` für jede Zeile und `td` für jede Zelle, für wirklich tabellarische Daten.
- `form`, `input`, `label` und `button`, um Eingaben von Besuchern zu sammeln.
- `video` und `audio` zum Einbetten von Medien.
- `br` für einen Zeilenumbruch innerhalb von Text. Verwende es selten. Wenn du einen neuen Absatz willst, verwende ein neues `p`.

Insgesamt gibt es über hundert Tags, aber die aus diesem Leitfaden decken die große Mehrheit dessen ab, was du sehen und schreiben wirst. Wenn dir ein Tag begegnet, das du nicht kennst, schlag es bei [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) nach, der Referenz, die Profis verwenden.

## Wie es weitergeht

Am besten bleibt all das hängen, wenn du etwas baust. Erstelle eine `index.html`, gib ihr das Grundgerüst aus diesem Leitfaden und strukturiere eine Seite über dich mit Überschriften, Absätzen, Listen und Links. Dann öffne sie im Browser und schau dir an, was du gebaut hast.

Wenn du dich damit wohlfühlst, mach es dir zur Gewohnheit, den Quelltext der Websites anzusehen, die du besuchst. Du wirst die Tags überall wiedererkennen und sehen, dass selbst die ausgefeiltesten Websites aus genau denselben Bausteinen gebaut sind, die du gerade kennengelernt hast.

Deine Seite wird vorerst ziemlich schlicht aussehen, und das ist völlig in Ordnung. HTML gibt einer Seite ihre Struktur. Sie gut aussehen zu lassen, ist die Aufgabe von CSS, und dahin geht es als Nächstes.
