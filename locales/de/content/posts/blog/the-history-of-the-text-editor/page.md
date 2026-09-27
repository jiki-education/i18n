---
title: "Die faszinierende Geschichte des Texteditors"
excerpt: "Vom Lochen von Löchern in Karton bis zu Editoren, die deinen Code für dich schreiben. Die Geschichte des bescheidenen Texteditors und die Rivalität zwischen Vi und Emacs, die älter ist als die meisten heute lebenden Menschen."
tags: ["history", "text-editors", "vim", "emacs", "coding"]
seo:
  description: "Die Geschichte des Texteditors, von Lochkarten und zeilenorientierten Editoren bis zu Vi, Emacs, VS Code und dem KI-Zeitalter. Wie die Lücke zwischen einer Idee und laufendem Code immer kleiner wurde."
  keywords: ["Geschichte der Texteditoren", "Vi gegen Emacs", "Geschichte des Texteditors", "Geschichte der Code-Editoren"]
en_md5: 1746a724d6fb171afc5dc961c3519e37
---

## Einleitung

Seit ich vor 30 Jahren angefangen habe zu programmieren, benutze ich fast jeden Tag einen Texteditor. Ich habe viele verschiedene ausprobiert und bin mit der Zeit fast religiös geworden, wenn es darum ging, welcher der beste ist.

Während dieser ganzen Zeit ist es für neue Entwicklerinnen und Entwickler fast ein Initiationsritus, einen Texteditor zu installieren und zu lernen, ihn zu benutzen. Aber während agentisches Programmieren verändert, was es bedeutet, Entwicklerin oder Entwickler zu sein, neigt sich die Ära der Vorherrschaft des Texteditors vielleicht dem Ende zu.

Deshalb fand ich es spannend, mir die Geschichte des Texteditors anzuschauen. Vom Lochen von Löchern in Karton und stundenlangem Warten, über das Bearbeiten einer Zeile nach der anderen auf einem Drucker, bis zur Rivalität zwischen Vi und Emacs, die älter ist als die meisten heute lebenden Menschen.

Das ist die Geschichte des bescheidenen Texteditors.

## Vor dem Editor: Löcher in Karton (1950er-1960er)

Es ist schwer, sich Programmieren ohne einen Bildschirm vorzustellen, auf dem du deinen Code sehen kannst, aber genau da fängt alles an.

In den 1950er und 1960er Jahren war der Bildschirm noch nicht erfunden, stattdessen wurden Programme physisch in Lochkarten (oder Lochstreifen) gestanzt, eine Codezeile pro Karte. „Bearbeiten“ hieß, eine Karte neu zu lochen oder Karten physisch aus dem Stapel zu nehmen und andere hineinzusetzen.

Wenn mein Code länger als ein paar Sekunden braucht, um zu laufen, werde ich sehr ungeduldig wegen der langsamen Rückmeldung, aber damals wurde Rückmeldung in Stunden gemessen. Du hast deinen Kartenstapel einer Person gegeben, die ihn in eine Warteschlange von Aufgaben zum Ausführen einreihte. Stunden, vielleicht Tage, später bekamst du einen Ausdruck zurück. Ich stelle mir vor, dass ein „Tippfehler“ damals wirklich kein Thema war ...!

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/keypunch-operator.webp" alt="Eine Locherin in den 1950er Jahren, die Daten in Karten stanzt" />
  <figcaption>Eine Locherin in den 1950er Jahren. Foto vom U.S. Census Bureau via <a href="https://commons.wikimedia.org/wiki/File:Keypunch_operator_1950_census_IBM_016.jpg">Wikimedia Commons</a>, gemeinfrei.</figcaption>
</figure>

## Der Computer fängt an zu antworten (1960er)

Zwei Erfindungen holten das Bearbeiten aus dieser langsamen Stapelwelt heraus und machten etwas Interaktives daraus.

Die erste war das **Fernschreiber**-Terminal (auf Englisch _teletype_). Der Fernschreiber ersetzte die Vorstellung von Stapeln vorgelochter Karten. Stattdessen hast du auf einer Tastatur getippt. Deine Tastenanschläge wurden in Echtzeit an die Maschine geschickt, und sie druckte ihre Antworten direkt auf eine Papierrolle. Es gab immer noch keinen Bildschirm, aber zum ersten Mal hattest du einen lebendigen Kanal zum Hin und Her mit dem Computer statt eines Stapels Karton.

Die zweite war **Time-Sharing**. Ohne Time-Sharing wäre ein Computer immer noch mit einer Person gleichzeitig verbunden gewesen, begrenzt auf die Geschwindigkeit, mit der diese tippen und Antworten verarbeiten konnte. Das führte dazu, dass sehr viel Zeit damit verschwendet wurde, auf die handelnde Person zu warten. Time-Sharing löste das, indem die Maschine zwischen verschiedenen Personen hin- und herwechseln konnte. Mehrere Personen konnten sich mit einer Maschine verbinden, und sie wechselte so schnell, dass jede von ihnen die Illusion bekam, den ganzen Computer für sich zu haben.

Setz diese beiden Dinge zusammen, und du hast eine richtige Unterhaltung mit der Maschine. Und sobald du eine Unterhaltung führen kannst, kannst du anfangen, deinen Code direkt im Sitzen zu bearbeiten, Zeile für Zeile, statt Karten neu zu lochen und zu beten. Genau das ließen dich die ersten echten Editoren tun.

<figure class="post-figure" style="max-width:300px">
  <img src="/images/blog/the-history-of-the-text-editor/teletype-asr33.webp" alt="Ein Teletype Model 33 ASR Terminal, das die Ausgabe auf Papier statt auf einen Bildschirm druckte"/>
  <figcaption>Teletype Model 33 ASR. Foto von ComputerGeek7066 via <a href="https://commons.wikimedia.org/wiki/File:Teletype_model_33_ASR.jpg">Wikimedia Commons</a>, CC BY-SA 4.0.</figcaption>
</figure>

## Die Zeileneditoren: ed, QED und TECO (1962-1971)

Die 1960er Jahre brachten einen weiteren großen Paradigmenwechsel. Dein Programm war kein physisches Objekt mehr, das du herumgetragen hast (ein Kartenstapel in einer Kiste), sondern eine benannte Datei, die auf der Festplatte des Computers lag. Statt eine neue Karte auszudrucken, um dein Programm zu ändern, konntest du dein Programm jetzt tatsächlich bearbeiten.

Bildschirme hatten wir aber immer noch nicht. Stattdessen wurde alles, was du ausgeführt hast, und eine Kopie davon auf ein Stück Papier gedruckt. Dieser Ausdruck ist das, was man eine „Hard Copy“ nennt – eine dauerhafte Aufzeichnung der Befehle, die du dem Computer gegeben hast.

Das war das erste Mal, dass wir so etwas wie moderne Editoren hatten, aber sie waren noch ziemlich fremd, weil sie **zeilenorientiert** waren. Du hast Zeile für Zeile gearbeitet, und sie waren befehlsbasiert. Du hast Befehle eingegeben (manche kommen allen sehr bekannt vor, die vim benutzt haben), und diese Befehle haben Änderungen vorgenommen. Ein Gedicht zu bearbeiten, um einen Tippfehler zu korrigieren, könnte zum Beispiel so aussehen:

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

Die wenigen Menschen, die damals programmiert haben, würden dir wahrscheinlich von drei bemerkenswerten Editoren aus dieser Zeit erzählen:

- **TECO**, 1962 von Dan Murphy am MIT entwickelt, war ursprünglich zum Bearbeiten von Lochstreifen gedacht. Es war berüchtigt kryptisch und diente gleichzeitig als Programmiersprache (das wird später noch wichtig)
- **QED**, 1965/66 von Butler Lampson und L. Peter Deutsch in Berkeley entwickelt, war einer der ersten Zeileneditoren. Zwei Jahre später schrieb Ken Thompson es neu und gab ihm **reguläre Ausdrücke** (eine Art Programmiersprache, mit der man Muster in Text findet), was das erste Mal war, dass sie in einem Editor auftauchten.
- **ed**, Anfang der 1970er Jahre von Ken Thompson bei Bell Labs veröffentlicht, reduzierte QEDs Ideen auf einen minimalen Editor, der mit dem ersten Unix ausgeliefert wurde. `ed` ist auch heute noch auf jedem Mac- und Linux-Rechner installiert, und seine Befehlssprache ist der direkte Vorfahre von `grep`, `sed` und den `:`-Befehlen von Vi (für die es alle [Exercism-Tracks](http://exercism.org/tracks) gibt, wenn du sie lernen möchtest!)

TECO ist auch die Heimat dessen, was weithin als das früheste bekannte Software-Easter-Egg gilt (ein verstecktes Feature, das man heute in vielen Spielen findet). In einer späteren Version von TECO bekamst du auf die Eingabe `make love` die freche Antwort `not war?`. Es wurde um 1967 am Stanford AI Lab eingeschmuggelt, etwa ein Jahrzehnt bevor Easter Eggs in Videospielen üblich wurden. Du kannst [TECO installieren](https://github.com/blakemcbride/TECOC) und es ausprobieren!

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/teco-easter-egg.webp" alt="Ein grün auf schwarz leuchtendes Terminal, das den Befehl make love zeigt, den TECO mit Not war? beantwortet" />
  <figcaption>TECOs Easter Egg <code>make love</code> / <code>not war?</code>, nachgestellt in einem modernen TECO-Build.</figcaption>
</figure>

## Die ganze Seite sehen: Bravo und WYSIWYG (1974)

Bei **Xerox PARC** begann unterdessen ein anderer Zweig der Geschichte.

1974 veröffentlichten Butler Lampson und Charles Simonyi **Bravo**, den ersten **WYSIWYG**-Editor („what you see is what you get“, also: du siehst genau das, was du bekommst). Er zeigte formatierten Text mit echten Schriftarten auf einem Bitmap-Bildschirm und benutzte die **Maus**, um Text auszuwählen (die Maus wurde tatsächlich schon viel früher patentiert, aber das ist eine Geschichte für ein andermal!).

Ein bisschen wie Vim hatte er zwei Modi: einen „Command mode“, in dem Tasten etwas _bewirkten_, und einen „Insert mode“, in dem Tasten Zeichen auf den Bildschirm brachten.

Das ist tatsächlich ein entscheidender Wendepunkt in unserer Geschichte. Auf der einen Seite nahm Simonyi diese Ideen später zu Microsoft mit, wo er Word baute und uns die Textverarbeitung gab. Auf der anderen Seite flossen Bildschirm, Maus und modales Bearbeiten direkt in die Code-Editoren ein, die folgten.

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/xerox-alto.webp" alt="Ein Xerox Alto Computer, auf dem Bravo lief, der erste WYSIWYG-Editor" />
  <figcaption>Xerox Alto. Foto via <a href="https://commons.wikimedia.org/wiki/File:Xerox_Alto.jpg">Wikimedia Commons</a>, CC BY-SA 2.5.</figcaption>
</figure>

## Die große Rivalität: Vi und Emacs (ab 1976)

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/emacs.webp" alt="Ein Screenshot von GNU Emacs beim Bearbeiten von Code" />
  <figcaption>GNU Emacs. Screenshot von tecosaur via <a href="https://commons.wikimedia.org/wiki/File:Writing_and_compiling_C%2B%2B_in_Emacs.png">Wikimedia Commons</a>, CC BY-SA 4.0.</figcaption>
</figure>

- Der Kern der Geschichte: **1976** wurden an entgegengesetzten Küsten die beiden Editoren geboren, die ernsthaftes Programmieren bis heute dominieren, und zwar aus entgegengesetzten Philosophien
- **Emacs** (MIT: Richard Stallman, mit David Moon und Guy Steele): begann als eine Sammlung von **Makros für TECO** („Editor MACroS“)
- Emacs' große Idee: Ein Editor sollte vom Benutzer endlos **programmierbar und erweiterbar** sein. Er ist weniger ein Texteditor als eine Lisp-Umgebung, in der du zufällig Text bearbeitest
- Stallman baute ihn 1984 als **GNU Emacs** neu auf, und er wurde zu einem Aushängeschild der Freie-Software-Bewegung
- **Vi** (Berkeley: Bill Joy, damals Doktorand, später Mitgründer von Sun): ein bildschirmfüllender **visueller** Modus, der auf eds zeilenorientiertem Kern aufbaute

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/vim.webp" alt="Ein Screenshot von Vim beim Bearbeiten von Code" />
  <figcaption>Vim, der beliebteste moderne Nachfahre von Vi. Screenshot von Carolinedmoreschi via <a href="https://commons.wikimedia.org/wiki/File:Dracula_Theme_being_used_on_Vim.png">Wikimedia Commons</a>, CC BY-SA 4.0.</figcaption>
</figure>

- Vi wurde unter brutalen Einschränkungen entworfen: Es musste über ein **300-Baud-Modem** benutzbar sein, wo jedes an den Bildschirm geschickte Zeichen zählte
- Diese Knappheit brachte Vis Geniestreich hervor: **modales Bearbeiten**, bei dem Tastenanschläge eine kompakte Befehlssprache sind, um Text zu bewegen und umzuwandeln
- **Vim** („Vi IMproved“, 1991) fügte mehrstufiges Rückgängigmachen, Syntaxhervorhebung und Plugins hinzu. **Neovim** modernisierte ihn später weiter
- Der **„Editor-Krieg“** zwischen den beiden Lagern ist die älteste Rivalität in der Softwarewelt, und im Kern ist es ein philosophischer Graben: Emacs (maximal, programmierbar, eine Umgebung, die alles kann) gegen Vi (minimal, modal, gnadenlos effizient)
- Beide werden fast 50 Jahre später noch täglich benutzt, was für jede Software erstaunlich ist

## Editoren für den Rest von uns: BBEdit, TextMate, Sublime (1992-2008)

- Als grafische Betriebssysteme reiften, erschien eine neue Klasse von Editoren für Entwicklerinnen und Entwickler, die eine native grafische Oberfläche wollten, kein Terminal
- **BBEdit** (1992, Mac): der langlebige Editor, von dem man sagt, er sei einfach gut
- **TextMate** (2004, Mac): extrem einflussreich während des **Ruby on Rails**-Booms. Sein „Bundle“- und Snippet-System und sein Grammatikformat für Syntaxhervorhebung wurden zum De-facto-Standard, den VS Code bis heute verwendet
- **Sublime Text** (2008): schnell, plattformübergreifend, minimal. Es führte Dinge ein, die alle kopierten, wie die Minikarte, mehrere Cursor und eine unscharfe Befehlspalette
- Sublime bewies, dass es einen riesigen Markt zwischen „Terminal-Editor“ und „schwergewichtiger IDE“ gab

## Das Webtechnik-Zeitalter: Atom und VS Code (2014-2015)

<figure class="post-figure">
  <img src="/images/blog/the-history-of-the-text-editor/vscode.webp" alt="Ein Screenshot von VSCodium, dem Open-Source-Build von VS Code" />
  <figcaption>VSCodium, der vollständig quelloffene Build von VS Code (optisch identisch mit Microsofts Version, aber MIT-lizenziert, weshalb er hier gezeigt werden darf). Screenshot via <a href="https://commons.wikimedia.org/wiki/File:VSCodium_official_screenshot.png">Wikimedia Commons</a>, MIT.</figcaption>
</figure>

- **Atom** (GitHub, 2014): „a hackable text editor for the 21st century“, gebaut mit Webtechnik (HTML, JS, Node) über das, was später **Electron** wurde. Hackbar wie Emacs, aber langsam. GitHub stellte es im Dezember 2022 ein
- **VS Code** (Microsoft, 2015): ebenfalls Electron-basiert, aber schneller und mit allem Nötigen ausgestattet (Autovervollständigung, Debugging, Git eingebaut). Es gewann eindeutig und dominiert heute
- VS Codes wichtigste strukturelle Idee war das **Language Server Protocol (LSP)**
- Vor LSP musste jeder Editor das „Verständnis“ jeder Sprache (Autovervollständigung, Gehe-zu-Definition, Fehlerprüfung) von Grund auf neu implementieren
- Mit LSP liefert eine Sprache einen einzigen „Server“, mit dem jeder Editor sprechen kann. Das entkoppelte Sprachintelligenz vom Editor, und heute ist es ein Industriestandard

## Das KI-Zeitalter: Editoren, die mit dir schreiben (ab 2021)

- Das neueste Kapitel verschiebt den Editor von einem Werkzeug, mit dem du Text bearbeitest, hin zu einem **Mitarbeiter**
- **GitHub Copilot** (2021): KI-Autovervollständigung direkt im Code, später über einen eigenen Language Server verfügbar gemacht, sodass jeder Editor andocken kann
- **Cursor** und **Windsurf**: Abspaltungen von VS Code, die die Bearbeitungsschleife um KI herum neu aufbauen (Änderungen über mehrere Dateien, Chat, Agenten), während sie VS Codes Erweiterungen behalten
- **Zed** (Rust, 2024 quelloffen gemacht): ein von Grund auf neu gebauter, GPU-beschleunigter Editor für Geschwindigkeit, Zusammenarbeit und KI
- **Agentische Tools** (wie Claude Code): Hier steuert sich der „Editor“ zunehmend selbst, und der Mensch prüft und lenkt, statt zu tippen
- Interessanterweise wird LSP erneut zweckentfremdet, diesmal um KI-Agenten präzise Code-Intelligenz statt Textsuch-Raten zu geben

## Das Ende einer Ära? (heute)

- Jede Ära dieser Geschichte verkleinerte die Lücke zwischen einer Idee und ihrer Ausführung: Stapelkarten (Stunden), dann Zeileneditoren (eine Zeile nach der anderen), dann bildschirmfüllende Editoren (die ganze Datei), dann IDE-Intelligenz (der Editor versteht deinen Code), dann KI (der Editor schreibt mit dir)
- Und trotzdem sind die beiden Editoren von 1976, Vi und Emacs, immer noch da. Die grundlegenden Ideen (modale Effizienz, programmierbare Erweiterbarkeit) überlebten jede Welle von Hardware
- 50 Jahre lang gehörte es zum Erwachsenwerden dazu, seinen Editor zu lernen. Das ändert sich vielleicht gerade
- [Jiki-Bezug / Schlussgedanke kommt hierhin]
- Danke fürs Lesen
