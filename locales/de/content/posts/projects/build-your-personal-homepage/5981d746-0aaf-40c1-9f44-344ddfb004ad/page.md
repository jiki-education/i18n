---
title: "Folge 1: Agentic Coding 101"
excerpt: "Zum Auftakt dieses Projekts tauchen wir tief ins Agentic Coding ein: was LLMs und Agenten sind, wie Modelle und Aufwand funktionieren, wie du mit OpenCode kostenlos loslegst, und wie du deine allererste Webseite baust."
summary:
  from: "Wir gehen davon aus, dass du nichts über das Web oder Agentic Coding weißt."
  to: "Du verstehst die Schleife beim Agentic Coding und schreibst im Browser deine erste, ganz schlichte Homepage."
  keyConcepts: ["Agentic Coding", "Modelle und Aufwand", "Tokens und Kontext", "HTML-Grundlagen"]
seo:
  description: "Lerne, was Agentic Coding ist und wie LLMs, Modelle und Tokens funktionieren, und baue mit OpenCode deine erste Webseite."
  keywords: ["agentic coding", "llm", "html", "Einsteiger"]
en_md5: 179b6fdc5bf4a07aac6f6fb60589af30
---

## Einleitung

Willkommen zur ersten Folge dieser neuen Reihe. Wir schauen uns an, wie man Agenten einsetzt und wie man mit LLMs baut, in einer modernen Zeit, in der sich das Programmieren so stark verändert hat. Wir haben über die Jahre viele solcher Sessions für Exercism gemacht, aber das hier ist die erste offizielle Learn-to-Build-Livesession für Jiki.

Ich erkläre dir kurz, was diese Reihe sein wird, was wir heute konkret machen, was wir im Lauf der Reihe behandeln und für wen das Ganze gedacht ist. Mit der letzten Frage fange ich an.

## Für wen das ist

Das hier ist eigentlich für zwei Gruppen gedacht. Zum einen für Leute, die ganz neu im Programmieren sind, neu in dieser ganzen Welt, und einfach anfangen und herausfinden wollen, wie sie etwas lernen können. Zum anderen aber auch für Leute mit viel mehr Erfahrung, vielleicht sogar Senior-Entwickler, die sich noch nicht so richtig mit den Veränderungen durch Agentic Coding beschäftigt haben. Sie wollen verstehen, was da passiert, ein paar Dinge in Aktion sehen, darüber diskutieren und ein echtes Verständnis dafür aufbauen. Du kannst also irgendwo auf diesem Spektrum stehen: von deinem ersten Tag beim Programmieren (vielleicht hast du dich heute Morgen entschieden, programmieren zu lernen, hast Jiki gefunden und bist jetzt hier) bis hin zu jemandem mit richtig viel Erfahrung.

In dieser Reihe (es wird noch mehrere Reihen geben) gehe ich davon aus, dass du nichts weißt. Wenn du also Senior-Entwickler bist, wirst du vieles, was ich sage, in- und auswendig kennen, und das kann sich ein bisschen langweilig anfühlen. Wenn heute dein erster Tag ist, sollte es nichts geben, was ich bei dir voraussetze. Manches geht vielleicht über deinen Kopf hinweg, aber ich gestalte diese Session so, als wäre sie für dich. Und wenn du erfahrener bist, diese neue Art zu programmieren aber noch nicht ausprobiert hast, ist das hier trotzdem nützlich für dich.

Ich zeige dir ein bisschen, was es heißt, auf diese Art zu programmieren. Als kleine Einstimmung zeige ich dir ein paar Beispiele von Dingen, die ich in Jiki gerade in Ordnung bringen muss, und behebe sie. Dann sprechen wir über einige Begriffe, die wir verwenden, und darüber, wie diese Dinge zusammenspielen. Und dann bauen wir einfach tatsächlich etwas. Wir bauen eine neue Homepage.

Dazu möchte ich wirklich alle ermutigen: Bau dir eine neue Website. Das kann deine Homepage sein oder etwas anderes. Vielleicht schreibst du einfach deinen Lebenslauf in Code, was auch immer. Setz nach dieser Session um, was du hier gesehen hast, und probier Dinge aus.

Ich verwende Claude und ein paar fortgeschrittenere Sachen, zeige dir aber auch, wie du das hinbekommst, wenn du dafür kein Geld ausgeben kannst. Wenn du kostenlos mit Agenten arbeiten willst, schauen wir uns auch das an.

### Was solltest du vorher vorbereitet haben?

Gar nichts. Du kommst einfach vorbei. Ich erkläre dir alles, und danach veröffentliche ich eine Reihe von Guides, die dazu passen: Guides zur Installation von OpenCode, das wir uns anschauen werden, Guides zu den verschiedenen Begriffen rund um LLMs und wie sie funktionieren, und einen Guide zur Nutzung von GitHub, über das wir auch sprechen werden. Du kannst dir dann ein paar Tage Zeit nehmen, um aufzuholen und sie durchzuarbeiten.

Wenn du eine Frage hast, die ich in dieser Folge nicht beantworte, kannst du sie jederzeit im Forum unter [forum.jiki.io](https://forum.jiki.io) stellen. Ich bin dort. Andere Senior-Entwickler und andere Leute, die mitschauen, sind auch dort und können ebenfalls Fragen beantworten.

## Die Fehler von LLMs erkennen

Ich springe mal rüber ins Jiki-Forum, zu etwas, das mir vorhin aufgefallen ist. Das hier sind verschiedene Themen rund um Übersetzungen, und du siehst, dass die meisten neben dem Land eine Flagge haben. Eine niederländische Flagge, eine deutsche Flagge. Neben Türkisch haben wir einen Truthahn (auf Englisch heißen beide „Turkey“). Wahrscheinlich ein bisschen rassistisch. Darum müssen wir uns wohl gleich kümmern. Aber aufgefallen ist mir das indonesische Thema. Diese ganze Emoji-Auswahl hat Claude getroffen. Und hier hat es sich offensichtlich einfach ein Emoji ausgedacht oder eines erwischt, das nicht funktioniert.

![Das Jiki-Forum mit Übersetzungsthemen. Türkisch hat statt einer Flagge ein Truthahn-Emoji, und bei Indonesisch wird ein kaputtes :garuda:-Emoji angezeigt.](/images/projects/build-your-personal-homepage/setting-up-the-project/forum-language-flags.webp)

Genau hier möchte ich anfangen, denn das ist echt. Ich habe das zwei Minuten vor dem Stream gesehen. So etwas wirst du oft sehen, wenn du mit diesen LLMs und Agenten arbeitest. Sie erfinden Dinge. Sie denken, hier gibt es ein Emoji, aber auf dieser Website funktioniert es nicht. Sie sollen eine Flagge für die Türkei einfügen und setzen stattdessen buchstäblich einen Truthahn ein.

Solche Fehler sind für uns Menschen wirklich offensichtlich. Wir sehen sie sofort. Sie springen uns ins Auge. Wir schmunzeln kurz. Die Sorge ist, dass das LLM dieselben Entscheidungen auch anderswo trifft. Und das ist das leistungsstärkste Modell. Das ist Fable. Das ist das Modell, das so intelligent und gefährlich ist, dass die US-Regierung es verboten hat. Trotzdem setzt es für die türkische Flagge einen Truthahn ein und weiß nicht unbedingt, dass das jemanden verärgern könnte. Es könnte natürlich auch einfach einen tollen Sinn für Humor haben. Ich bin mir nicht sicher.

Das sind die sichtbaren Dinge, die offensichtlich sind. Stell dir vor, wie viele andere kleine Fehler, oder sagen wir lieber schlechte Entscheidungen, diese LLMs im Hintergrund treffen. Im nächsten Jahr, oder in den vielen Jahren, in denen wir diese Streams machen, werden LLMs besser werden. Aber eines sollst du gleich wissen und wirklich verinnerlichen: Das sind keine Programmiergötter, denen du einfach Dinge übergeben kannst und die dann alles richtig machen. Sie machen ständig Fehler. Manche sind offensichtlich und lustig, manche nicht. Wenn du ein moderner Softwareentwickler sein willst, besteht ein großer Teil deines Jobs darin, nach diesen Fehlern zu suchen. Damit meine ich nicht, darauf zu achten, ob sie einen Truthahn statt einer türkischen Flagge einsetzen. Ich meine, nach den konzeptionellen Fehlern zu suchen: nach den Ideen, nach den Dingen, die sie sich ausdenken und die sich einfach nicht ganz richtig anfühlen und nicht ganz sinnvoll sind.

### Was bedeutet i18n?

Es steht für „internationalization“, also Internationalisierung. 18 ist die Anzahl der Buchstaben zwischen dem i und dem n im englischen Wort. Es ist eine Abkürzung.

## Agentic Coding in aller Kürze

Schauen wir uns an, wie es aussieht, ein bisschen Agentic Coding zu machen. Nehmen wir das Glossar für Indonesien mit dem kaputten Emoji. Ich mache einen Screenshot davon, gehe rüber in mein Terminal und starte Claude Code. Wie man das einrichtet und so weiter, besprechen wir gleich noch. Im Moment wirkt das vielleicht ein bisschen einschüchternd, so schwarz und grün, aber dazu kommen wir alles noch.

Folgendes möchte ich dir zeigen. Ich kann das Bild hineinziehen und sagen: „korrigiere das falsche Emoji“. Und dann legt es los, denkt nach und macht eine Menge Dinge. Wir können uns einiges davon anschauen. Es führt Befehle aus. Es versucht herauszufinden, was los ist. Warum ist diese Flagge falsch? Was bedeutet diese Flagge? Wie ist das passiert? Jetzt fängt es an, ein paar Skripte zu lesen. Das hier ist das Skript, das die Sprachkategorie im Forum anlegt, das Skript, das es beim Anlegen dieser Kategorie ausgeführt hat. Jetzt geht es den Verlauf von allem durch, was es gemacht hat, und versucht herauszufinden, wann das schiefgelaufen ist, wie und warum. Es liest verschiedene Dateien. Es führt verschiedene Befehle aus. Du siehst, wie der Zähler steigt, jetzt führt es seinen vierten Befehl aus, und so weiter.

![Claude Code im Terminal bei der Arbeit an „Fix the incorrect emoji“: Es sucht nach Mustern, liest Dateien und führt Shell-Befehle aus.](/images/projects/build-your-personal-homepage/setting-up-the-project/claude-code-fixing-emoji.webp)

Und dann sagt es, dass es den Fehler gefunden hat. Das richtige Emoji wäre die Flagge Indonesiens, nicht `:garuda:`. Es legt los und führt etwas aus, das die Kategorie aktualisiert. Wenn wir jetzt rüber ins Forum gehen und das Thema öffnen, siehst du, dass es den Fehler behoben hat. Jetzt haben wir stattdessen eine indonesische Flagge.

![Das Thema „Glossary for Indonesian“ im Forum, jetzt mit der richtigen indonesischen Flagge.](/images/projects/build-your-personal-homepage/setting-up-the-project/indonesian-flag-fixed.webp)

Das ist also Agentic Coding in aller Kürze. Wir haben gesagt: „Mach diese eine Sache.“ Es hat losgelegt. Es hat verschiedene Befehle ausgeführt. Es hat ein paar Dokumente gelesen. Im Hintergrund macht es lauter sehr komplizierte Sachen, etwas kompliziert aussehendes Bash, das von Hand zu schreiben ziemlich mühsam wäre. Es sei denn, du bist Maintainer bei Exercism, dann ist das ganz einfach. Aber für uns Normalsterbliche ist es vielleicht etwas kompliziert zu schreiben. Es hat alles durchgesehen und versucht herauszufinden, wann das schiefgelaufen ist. Es hat den Verlauf der Dateien gelesen. Es hat den indonesischen Eintrag und ein paar Logs gefunden. Es hat die Regeln gelesen, die ich ihm gegeben habe, ein paar Variablen gefunden, mit denen es das Forum aktualisieren kann, herausgefunden, was falsch ist, das ganz kurz mit mir besprochen und die Sache dann aktualisiert.

So habe ich Jiki gebaut. So arbeiten viele moderne Softwareentwickler, ich würde sagen wahrscheinlich die Mehrheit aller Softwareentwickler, die heute arbeiten. Wir finden ein Problem wie dieses. Wir entdecken es. Vielleicht kommt es als Ticket von jemand anderem rein. Und dann übergeben wir es an etwas wie Claude oder eines der vielen anderen Modelle da draußen (dazu kommen wir gleich). Sie arbeiten diesen komplexen, mehrstufigen Prozess ab und beheben dann den Bug.

Dieser Bug ist natürlich sehr einfach. Es ist eine Seite. Sie hat ein falsches Emoji. Sie sollte dieses Emoji haben, hat aber ein anderes. Deshalb kann es das ziemlich schnell beheben. Richtig gut funktioniert dieser ganze Ablauf aber, wenn wir nicht nur eine Kleinigkeit beheben wollen. Wenn wir ein neues Feature bauen oder etwas wirklich Kompliziertes debuggen. Dann müssen Hunderte von Dateien gelesen und anschließend einige Dateien geschrieben werden.

## Mit den Kosten klug umgehen

Bevor wir uns ein anderes Beispiel anschauen, zeige ich dir noch eine Sache. Ich kann hier `usage` eintippen, und das zeigt uns, was im Hintergrund passiert. Du siehst, dass Claude von Anfang bis Ende 52 Sekunden dafür gebraucht hat, und das hat 37 Cent gekostet. Ich habe Claude Max, das heißt, ich bekomme ein sehr großes Kontingent für die verschiedenen Modelle. Mir werden dafür also keine 37 Cent berechnet. Es ist einfach in meinem Monatsabo enthalten.

![Der Usage-Bildschirm von Claude Code mit Gesamtkosten von 0,38 Dollar und 52 Sekunden API-Zeit für die Emoji-Korrektur.](/images/projects/build-your-personal-homepage/setting-up-the-project/claude-code-usage.webp)

Aber das sollst du gleich von Anfang an im Blick haben, wenn wir anfangen, darüber zu sprechen. Dieser Prozess, das alles herauszufinden und zu lösen, hat 37 Cent gekostet. Wenn ich gewollt hätte, hätte ich einfach ins Forum gehen und das Thema selbst bearbeiten können. Ich hätte das Emoji auswählen, Indonesien eintippen und auf die Flagge klicken können. Das hätte mich keine 37 Cent gekostet. Stell dir jede einzelne Sache vor, die ich als Entwickler mache, so viele Stunden am Tag, wie wir eben programmieren. Da sollten wir schon etwas klug damit umgehen, wofür wir diese superstarke Intelligenz einsetzen und was wir einfach selbst von Hand erledigen können.

Das gilt besonders für alle, die kein Claude-Max-Abo bezahlen und nicht viel Geld haben. Ich zeige dir, wie du das alles kostenlos machen kannst. Aber in kostenlosen Tarifen hast du nur ein begrenztes Kontingent. Es ist ein ziemlich großes Kontingent. Es reicht für alles, was du brauchst. Aber ich möchte, dass du dir angewöhnst, dieses Kontingent nicht für Dinge zu verschwenden, die du selbst erledigen kannst. Es ist viel besser für dich, selbst nachzuforschen, herauszufinden, was los ist, dabei ein bisschen zu lernen und die Sache dann zu beheben. So lernst du am besten. Wenn du das einfach auf alles loslässt, bekommen wir Probleme.

Ich zeige dir noch etwas anderes. Hier siehst du deine monatliche Nutzung. Das ist mein letzter Monat. Wie gesagt, ich habe dieses Claude-Max-Abo, ich zahle also pauschal 200 Dollar im Monat. Aber ohne Claude Max, wenn ich direkt dafür bezahlen würde, hätte mich das diesen Monat 35.000 Dollar gekostet. Ich habe diesen Monat drei Milliarden Tokens verbraucht. Was Tokens sind, besprechen wir gleich. Aber du siehst, wie schnell da hohe Rechnungen zusammenkommen können.

![Eine Terminal-Tabelle mit der täglichen Token-Nutzung, aufgeschlüsselt nach Modell, mit Milliarden verbrauchter Tokens über Fable, Opus, Sonnet und Haiku.](/images/projects/build-your-personal-homepage/setting-up-the-project/monthly-token-usage.webp)

### Was ist mit Ollama und anderen lokalen Modellen?

Die funktionieren. Wenn du einen Computer hast, der stark genug für lokale Modelle ist, also ein gutes MacBook oder einen guten Windows-Rechner mit einer guten GPU, kannst du Modelle auf deinem eigenen Computer laufen lassen, statt Daten an Claude zu schicken und von Claude zurückzubekommen. Allerdings ist das viel, viel langsamer. Das, was wir uns gerade angeschaut haben und was 52 Sekunden gedauert hat, dauert dann stattdessen 5 Minuten oder eine halbe Stunde. Selbst auf einem Rechner auf dem neuesten Stand bist du 10-, 20- oder 30-mal langsamer als mit Claude oder etwas anderem.

### Ist es nicht manchmal günstiger, einen Junior-Entwickler einzustellen, als für ein LLM zu bezahlen?

Weil ich ein Claude-Max-Abo für 200 Dollar im Monat habe, kostet mich das alles insgesamt 200 Dollar im Monat. Ein Junior-Entwickler kostet das Zehnfache. Außerdem habe ich meistens sechs oder sieben Claudes gleichzeitig laufen. Wenn dieses Claude also so gut ist wie ein Junior-Entwickler, habe ich sechs oder sieben solcher Junior-Entwickler, die gleichzeitig in verschiedenen Tabs an verschiedenen Dingen arbeiten. Es gibt einfach keine Wirtschaftlichkeit mehr, in der es sinnvoll wäre, diesen Code von einem Menschen von Hand schreiben zu lassen.

Aber hier kannst du profitieren, hier kannst du als Junior wertvoll werden: Wenn du als Junior sechs oder sieben Claudes gleichzeitig laufen lassen und mit ihnen einfachere, grundlegendere Aufgaben erledigen könntest, würdest du einem Unternehmen enorm viel Wert bringen. Meine Gesamtkapazität als Entwickler liegt wahrscheinlich bei fünf oder sechs gleichzeitig, und ich verbringe trotzdem noch viel Zeit mit Nachdenken und Lesen. Alle stoßen irgendwann an diese Grenze, wenn sie es richtig machen und darüber nachdenken, was passiert. Wenn du also heute in die Tech-Branche einsteigen willst, bringst du Wert, indem du lernst, diese Claudes, diese anderen Modelle, diese LLMs, diese Agenten zu steuern, ihnen gute Prompts zu geben, sie zu befähigen und ihre Arbeit sinnvoll und wirkungsvoll zu überprüfen.

## Eine neue Sprache aufsetzen

Das ist also unser Ausgangspunkt. Jetzt weißt du ein bisschen darüber, wie diese Dinge funktionieren. Ich starte noch so einen Auftrag, während wir reden. Ich habe unter anderem einen Befehl gebaut, der eine neue Sprache aufsetzt, um Jiki in verschiedene Sprachen zu übersetzen. Brasilianisches Portugiesisch ist im Forum schon aufgesetzt, aber ich möchte europäisches Portugiesisch aufsetzen. Ich klicke einfach auf Ausführen, und dann schauen wir uns das ein bisschen an.

Der Befehl erstellt Informationen, einen Guide, ein Glossar und weitere Dinge, damit wir die Website ins Portugiesische übersetzen können. Im Forum siehst du das türkische. Das ist das Glossar, das dabei erstellt und ausgegeben wurde, mit allen Begriffen, die wir ins Türkische übersetzen.

Dieser Agent legt jetzt los und wird viel Arbeit investieren, um das richtig hinzubekommen. Er startet weitere Agenten. Wir haben einen Hauptagenten, der das Ganze leitet. Er schickt andere Agenten los, um die richtigen Begriffe für Portugiesisch zu recherchieren. Er lässt sie die Dokumentationen von Mozilla und Microsoft durchsehen, um herauszufinden, welche Begriffe dort verwendet werden. Er schaut sich wahrscheinlich Duolingo und ein paar andere Websites an. Und dann meldet er sich bei mir mit einer ganzen Menge Informationen darüber, was er gefunden hat, und stellt mir ein paar Fragen.

Während er das macht, möchte ich mir den Befehl, den ich gerade ausgeführt habe, ein bisschen genauer anschauen: Bootstrap Language. Das hier macht Claude gerade. Das sind die Anweisungen, denen Claude folgt. Oben steht ein bisschen was, das nur für Claude gedacht ist und erklärt, wie das Ganze auszuführen ist. Und alles andere sind Informationen, die du oder ich lesen können und die erklären, was passiert.

Wir sagen Claude, dass es eine neue Sprache aufsetzen soll. Wir sagen, dass es recherchieren muss, wie die Sprache geschrieben wird, Entscheidungen abstimmen muss, die nur ich treffen kann, sich diese Guides anschauen und Ungarisch als Grundlage nehmen soll, einfach weil wir daran zuerst gearbeitet haben. Aron, der hier Frontend-Entwickler ist, ist Ungar. Und dann gibt es eine ganze Reihe von Phasen, die es durchläuft. Ein paar Prüfungen, die es macht. Du siehst, als Erstes sagen wir: Prüfe, ob diese Sprache schon existiert. Falls ja, hör auf und melde das. Und du siehst, das Erste, was es tut, ist zu sagen: „Ich prüfe zuerst, ob die Sprache existiert.“ Die Prüfung klappt, die Sprache existiert nicht, es macht weiter.

Dann gibt es ein paar Dateien, die es liest. Es liest diese Regeldatei, diese Datei zum Tonfall, ein paar weitere Informationen, und lädt das alles gewissermaßen in sein Gedächtnis. Was das wirklich heißt, besprechen wir gleich. Es hat jetzt also all diese Informationen parat, all diese umfangreichen Dokumente, die ich geschrieben habe, mit Regeln, mit Hinweisen zum richtigen Tonfall und so weiter.

Und dann macht es diese Recherche. Es hat verschiedene Regeln, die ich ihm gegeben habe. Vermeide Verunreinigung durch LLM-generierte Inhalte. Ich will nicht, dass es haufenweise Inhalte liest, die andere LLMs schon geschrieben haben. Ich will, dass es sich eigentlich nur Material von vor 2022 anschaut und das Datum dieser Inhalte prüft, bevor es sie verwendet. Es gleicht mehrere Quellen miteinander ab. Ich sage ihm, dass es misstrauisch sein, mit Unsicherheit gut umgehen können und auf verschiedene Dinge achten soll. Welche Metaphern verwenden die Leute? Wie förmlich ist die Sprache, welches Register passt? Und dann fasst es das in einer Struktur zusammen, hält an und bespricht es mit mir. Es erklärt, was es gefunden hat, stellt mir ein paar Fragen und schlägt ein paar zentrale Begriffe vor. Und sobald ich zustimme, sobald wir das besprochen haben, schreibt es ein Glossar und einen Guide, stellt beides zusammen und erstellt dann den Forumsbeitrag. Es kann ins Jiki-Forum gehen und diesen Beitrag erstellen, und dann erstellt es auch den Glossar-Beitrag. Das sind zwei getrennte Beiträge.

Das ist also der Befehl, den ich gebaut habe und dem es folgen kann. Und wir sehen, wie es im Hintergrund vor sich hin arbeitet. Da, jetzt meldet es seine Rechercheergebnisse. So sollen wir die Lernenden ansprechen: mit dem informellen „tu“, der herzlichen, alltäglichen Art, Lernende anzusprechen, und nicht mit dem anderen, förmlichen Ton. Und dann bittet es mich um ein paar Entscheidungen. Bin ich damit einverstanden? Soll es dieselben Konventionen wie für Brasilien verwenden? Es nennt mir ein paar Begriffe, die es ausgewählt hat. Und an dieser Stelle kann ich alles durchsehen und sagen: Okay, ich bin mit all diesen Entscheidungen zufrieden, ich bin mit deinen Vorschlägen einverstanden. Und dann macht es weiter.

![Claude berichtet seine Rechercheergebnisse für europäisches Portugiesisch, einschließlich der Quellen und der Entscheidung für das informelle „tu“.](/images/projects/build-your-personal-homepage/setting-up-the-project/portuguese-research-findings.webp)

### Sind Befehle und Skills dasselbe?

Ja, das ist dasselbe. Die verschiedenen LLM-Firmen haben für all diese Dinge unterschiedliche Namen.

## Agenten und Modelle

Ich möchte kurz innehalten und darüber nachdenken, was hier passiert ist. Das ist nämlich ein echter Schlüssel, um den Unterschied zu verstehen: zwischen dem Moment, in dem du die Claude-App oder ChatGPT öffnest und damit redest, und dem Moment, in dem du so wie hier Agentic Coding machst.

Wenn du in einer Benutzeroberfläche mit Claude sprichst, stellst du eine Frage, und du hast im Grunde einen einzigen Agenten, mit dem du redest. Der prüft vielleicht kurz etwas, kommt dann zurück und schreibt weiter. Es ist ganz klar ein Gespräch zwischen dir und einer Person, einem Agenten. Wenn du dagegen mit diesem Agentic-Coding-Modell arbeitest, starten wir im Hintergrund viele Agenten für verschiedene Aufgaben. Wir haben Agenten, die recherchieren, Agenten, die planen, Agenten, die bauen. Und wir können unsere eigenen Agenten bauen. Agenten, die Dinge auf bestimmte Weise testen, Agenten, die prüfen, ob Dinge bestimmten Standards entsprechen. Und oft ist der Agent, mit dem wir sprechen, derjenige, der all die anderen Agenten verwaltet.

Diese Agenten können unterschiedliche Modelle verwenden. Das ist also ein guter Zeitpunkt, um über Modelle zu sprechen. Den Begriff hast du bestimmt schon oft gehört. Wahrscheinlich hast du eine ziemlich gute Vorstellung davon, was Modelle sind, aber ich erkläre es kurz.

Verschiedene Firmen wie OpenAI oder Anthropic haben verschiedene Modelle, und Modelle sind der zugrunde liegende Mechanismus, mit dem ein LLM läuft. So ein Modell wurde mit einer bestimmten Menge an Daten trainiert, um mit einer bestimmten Geschwindigkeit zu arbeiten. Die sogenannten Frontier-Modelle sind die allerbesten Modelle. Bei Anthropic ist das zurzeit etwas namens Fable oder Mythos. Die sind langsamer und teuer, aber sehr leistungsstark. Ganz am anderen Ende steht Haiku, ein viel schnelleres Modell. Es ist etwa 50-mal günstiger im Betrieb und viel schneller, kann aber nicht so gut schlussfolgern. Und dazwischen gibt es Sonnet und Opus. Es gibt also diese vier Modelle, und alle Anbieter haben solche unterschiedlichen Modelle. Manche der richtig hochwertigen sind superintelligent. Manche sind viel weniger intelligent, dafür aber viel schneller.

Bei einer einfachen Aufgabe, etwa der, die wir uns gerade angeschaut haben (warum ist diese Flagge falsch?), gibt es keinen Leistungsunterschied zwischen Haiku und Fable. Aber wenn du Fable dafür verwendest, gibst du 50-mal mehr Geld aus. Wir wollen also immer im Blick haben, welches Modell für die Aufgabe das richtige ist. So bleibt alles richtig schnell, die Qualität passt zu dem, was wir tatsächlich brauchen, und unsere Kosten bleiben niedrig, was ebenfalls wichtig ist.

Wenn ein Agent mehrere andere Agenten startet, treffen auch diese ständig diese Entscheidung. Wenn sie Agenten für einfache Aufgaben starten, verwenden sie einfache Modelle. Wenn sie Agenten für sehr komplexe Aufgaben starten, nehmen sie Fable.

## Aufwand

Dann gibt es noch das Konzept des Aufwands. Der Aufwand gibt an, wie viel Mühe sich ein Modell geben will. Was bedeutet Aufwand also? Diese Modelle funktionieren so, dass sie mit sich selbst reden. Sie führen ein langes, fortlaufendes Gespräch. Das hast du vielleicht schon gesehen, wenn du Claude oder ChatGPT nutzt: Dort gibt es die Option „show thinking“, und du kannst sehen, wie das Modell mit sich selbst spricht. Dabei schlussfolgern sie, indem sie ausgeben, was ihrer Meinung nach passieren könnte, und darauf dann aufbauen.

Wenn wir in der Welt von Claude (und bei anderen Tools auch) über Aufwand sprechen, meinen wir: Wie lange sollst du mit dir selbst reden, bevor du mit einer Antwort zurückkommst? Niedriger Aufwand heißt: Rede nicht groß mit dir selbst, gib uns einfach den ersten Gedanken. Hoher Aufwand heißt: Rede viel mit dir selbst. Das Gute an hohem Aufwand ist, dass Claude zwar im Grunde das Erste sagt, was ihm in den Sinn kommt (das ist ein schlechter Vergleich, aber eben das Erste, worauf es kommt), dann aber noch einmal darüber nachdenkt, ob das sinnvoll ist oder nicht. Dann fügt es eine dritte Ebene hinzu und denkt über das Ganze nach, ob es sinnvoll ist oder nicht. Und dann fügt es eine vierte Sache hinzu. Es denkt so lange über das nach, was es sagt, bis es an einem Punkt ist, mit dem es zufrieden ist oder von dem es überzeugt ist. Bei niedrigem Aufwand dagegen sagt es dir die Antwort sofort. Und die kann falsch sein oder auch nicht. Sein Denken wurde überhaupt nicht überprüft.

Wir haben also diese zwei Achsen. Die Qualität des Modells: Fable, Opus, Sonnet, Haiku. Und den Aufwand, den dieses Modell betreibt: niedrig, mittel, hoch, extra hoch. Und es geht noch weiter. Oft verlangen die Anbieter mehr, je weiter man auf dieser Achse geht.

In Claude Code können wir das Modell einfach wechseln, indem wir `/model` eintippen, und dann zwischen Opus, Fable, Sonnet oder Haiku wählen. Und wir können den Aufwand wählen: low, medium, high oder max, mit ein paar funkelnden Max-Varianten, und ultracode, wo es wunderschöne Animationen gibt, in die jemand richtig viel Mühe gesteckt hat.

Ich bleibe meistens bei Opus auf medium als Standardmodell für die meisten Dinge. Bei den meisten Sachen, die ich mache, will ich etwas wie Opus, das die Dinge durchdenken kann, und ich finde, dass mittlerer Aufwand die richtige Balance ist. Aber ich bin mir dessen sehr bewusst, und wenn ich eine Aufgabe starte, überlege ich mir, welches Modell ich will. Ist das einfach oder schwierig? Wie viel Aufwand muss in diesen ganzen Prozess fließen?

### Wie behalten wir den Überblick, welches Modell für eine Aufgabe am besten ist?

Das lernst du mit der Zeit einfach. Eine einfache Faustregel: Frag dich, wie schwer die Aufgabe für dich selbst ist. Ist sie wirklich einfach? So wie eine Flagge in einem Forumsbeitrag zu ändern? Das ist wirklich einfach. Das schafft Haiku mit niedrigem Aufwand. Bittest du es um etwas, das dir selbst unglaublich komplex vorkommt? Dann greif zu einem besseren Modell oder zu mehr Aufwand.

Fable ist großartig für Aufgaben, die lange laufen. Ein Beispiel: Gestern hatte ich eine Session offen, in der ich alle unsere Videos genommen habe (ich erzähle irgendwann noch, wie ich die Videos erstellt habe) und den ganzen englischen Text aus den Videos herausgezogen habe. Jeden englischen Text, der auf dem Bildschirm steht, habe ich aus den Videos extrahiert und als Overlay angelegt, damit ich ihn einfach in eine andere Sprache ändern und die Videos mit Text in einer anderen Sprache auf dem Bildschirm neu exportieren kann.

Das habe ich Fable machen lassen. Ich habe es auf eine Aufgabe angesetzt. Ich habe es für jedes Video einen Fable-Agenten starten lassen, ich hatte also 32 Fables am Laufen. Jeder davon ist jede Stelle seines Videos durchgegangen und hat nach Text gesucht. Sie haben Screenshots gemacht und dann die Bilder bearbeitet und den Text daraus entfernt. Dann haben sie herausgefunden, in welcher Schrift der Text geschrieben war, welche Schriftgröße, welche Schriftstärke, welcher Buchstabenabstand, Zeilenabstand, welches Kerning, all so etwas bei variablen Schriften. Dann haben sie den Text an der richtigen Stelle auf den Bildschirm geschrieben und immer wieder Screenshots gemacht und verglichen, bis die beiden Screenshots pixelgenau übereinstimmten. Ich hatte ein Fable, das alles geplant, recherchiert, untersucht und etwas Dokumentation geschrieben hat, und dann ein orchestrierendes Sonnet, das einfach weitere Fables für all diese Jobs gestartet hat. Das hat etwa drei Stunden gedauert. Es hat etwa 400 Dollar gekostet. Auch das war in meinem Max-Abo enthalten, aber sonst hätte es etwa 400 Dollar gekostet. Und damit sind im Grunde alle Videos jetzt startklar.

In so einer Situation wusste ich, dass das eine ziemlich komplexe Aufgabe war. Ich hatte es vorher mit Opus versucht, und Opus hat es nicht geschafft. Es war zu komplex für Opus, also wusste ich, dass es Fable braucht.

### Sind Frontier-Modelle wie Flaggschiff-Smartphones?

Ja, genau. Sie sind klüger und besser, aber auch teurer und in der Regel langsamer. Und denk daran: Das Frontier-Modell von heute ist das günstige Modell von nächstem Jahr. Das gilt jetzt schon. Haiku entspricht dem Frontier-Modell vom letzten Jahr. Haiku ist also schon gut genug für ziemlich viel Programmierarbeit, obwohl es das günstige Modell am anderen Ende ist. Das teure Modell brauchst du nur, wenn du wirklich etwas machst, das mit dem vorherigen Modell, etwa Opus, unmöglich war. Zum Frontier-Modell solltest du wirklich nur in bestimmten Situationen greifen.

### Ist es für einen Experten nicht frustrierend, fürs Programmieren zu bezahlen, statt es selbst zu machen?

Ich zahle 200 Dollar im Monat. Das ist zwar ein nennenswerter Betrag, aber für den zusätzlichen Produktivitätsgewinn ist es wenig Geld. Ich glaube, ich bin inzwischen mindestens anderthalbmal so produktiv. Mein Output ist das Anderthalbfache von früher. Ich weiß nicht, wie hoch mein Gehalt auf dem freien Markt wäre, weil ich nie eine Anstellung hatte, aber ich vermute, wenn man das als Maßstab nimmt, spart es mir ein Vermögen. 200 Dollar sind also günstig. Wenn ich dafür 2.000 Dollar im Monat zahlen müsste, würde es sich für mich wahrscheinlich nicht lohnen.

Ist es oft superfrustrierend? Ja. Aber mir ist klar geworden, dass es mich einfach eine Abstraktionsebene nach oben bringt. Früher musste ich viel Code schreiben, der für mich wirklich langweilig war. Für einen Junior oder jemanden auf mittlerem Level wäre das vielleicht total spannend, aber für mich war es superlangweilig. Jetzt muss ich das nicht mehr machen, und ich muss auch keinen Junior und niemanden auf mittlerem Level betreuen. Ich kann das ganz einfach erledigen, ohne andere Leute führen zu müssen, und habe dadurch trotzdem Freiraum, um auf andere Art produktiv zu sein. Unterm Strich lohnt es sich für mich also.

Aber ich glaube, für viele Entwickler macht es viel weniger Spaß und ist viel weniger erfüllend als früher. Es ist aber auch einfach die Realität. Wir haben keine Wahl. Vielleicht haben manche Leute in ihrem Job den Luxus, das nicht zu tun. Aber wenn du zehn Jahre vorspulst, glaube ich nicht, dass noch viele diesen Luxus haben. Wenn du also zukunftssicher werden oder in der Branche vorankommen willst, ist es meiner Meinung nach das Geheimnis, darin richtig gut zu werden.

## Berechtigungen und Auto-Modus

Zurück zur Übersetzungsaufgabe: Die ist jetzt fertig. Wir haben jetzt ein paar Dateien, die committet wurden. Wenn wir zurück ins Forum gehen, sehen wir nach, ob es einen neuen Beitrag gibt. Ah, das ist interessant. Das Posten ins öffentliche Forum wurde blockiert, weil ich das im automatischen Modus laufen lassen habe.

Das funktioniert so: Es versucht, Dinge zu tun, und ein anderes LLM überwacht, was es tut, und prüft, ob diese Dinge nach etwas aussehen, das ich ausdrücklich erlaubt habe. Sobald es Daten an andere Websites sendet oder etwas in der Art macht, muss ich ausdrücklich zustimmen. Und weil ich es im Auto-Modus einfach vor sich hin arbeiten lassen habe, hat es mich nicht gefragt, ob ich einverstanden bin. Also wurde es blockiert. Es fragt: „Soll ich diesen Forumsbeitrag erstellen?“, ich sage Ja, und jetzt macht es das tatsächlich. Das ist eines der Dinge, die in den letzten zwei, drei Monaten passiert sind. Wir haben jetzt quasi ein übergeordnetes LLM, das mehr Dinge automatisch geschehen lässt, aber versucht, riskante oder gefährliche Dinge zu blockieren.

Wenn ich jetzt neu lade, siehst du: Jetzt haben wir das Glossar. Das sind alle Begriffe, die es gefunden und gelesen hat. Das ist alles, was es zusammengestellt hat. Und jetzt haben wir einen Beitrag.

![Der fertige Beitrag „Glossary for European Portuguese“ im Jiki-Forum, mit Übersetzungen Begriff für Begriff und Anmerkungen.](/images/projects/build-your-personal-homepage/setting-up-the-project/portuguese-glossary.webp) Wenn du Portugiesisch sprichst, also die europäische Variante, kannst du hier reinkommen und mir alles sagen, was daran falsch ist, und dann können wir anfangen, das Glossar zu verbessern und daran zu arbeiten. Für alle, die andere Sprachen sprechen: Wir haben Glossare auch in anderen Sprachen, Italienisch, Türkisch und so weiter. Jetzt weißt du, wie sie entstanden sind. Du kannst das auch machen.

## Claude Code, Codex und OpenCode

Das war mein grober Überblick darüber, wie das funktioniert. Jetzt möchte ich dir zeigen, wie du das für dich selbst einrichten kannst.

Es gibt viele verschiedene Agenten und verschiedene Tools, die du verwenden kannst. Lass uns also bei ein paar Begriffen ganz klar sein. Claude Code, also das Fenster, in dem du mich gerade hast arbeiten sehen, ist ein Tool für Agentic Coding, vielleicht auch eine Plattform für Agentic Coding. Es läuft auf deinem Computer. Normalerweise läuft es im Terminal, so habe ich es eingerichtet. Wir können es aber auch in einem Code-Editor laufen lassen, das schauen wir uns gleich an. Und es ist das Tor zwischen dir und den Modellen. Ich habe dir gezeigt, dass ich zwischen Opus, Sonnet und Haiku und zwischen verschiedenen Aufwandsstufen wechseln kann.

Das alles passiert auf deinem lokalen Computer. Du sprichst auf deinem lokalen Computer. Er schickt Daten an Anthropic, an eines ihrer Modelle. Was zurückkommt, ist nicht nur ein bisschen Text, der auf dem Bildschirm erscheint. Es kommt eine ganze Menge Befehle zurück, die Claude Code interpretieren kann, um Dinge zu tun. Sie sagen: Führ dieses Skript auf dem Computer der Person aus. Schau in dieses Verzeichnis auf dem Computer der Person. Ruf diese Website da drüben auf und mach etwas. All diese Befehle kommen von Claude zurück.

Wir führen also kein Gespräch mit Opus oder mit Sonnet oder Haiku. Wir geben etwas Text ein. Dieser Text wird mit jeder Menge anderem Zeug gebündelt. Er wird mit Code aus unserem Repository gebündelt, Code, den wir geschrieben haben oder der dort abgelegt wurde. Er wird mit dem gesamten Gesprächsverlauf gebündelt, mit den Zielen, die wir erreichen wollen, mit unseren Vorlieben, wie wir gern arbeiten. Das alles wird gebündelt und dann an Anthropic geschickt. Deren Modelle lesen das alles und schicken dann Befehle und etwas Text zurück. Das alles wird verarbeitet, und dann läuft diese Schleife, diese agentische Schleife: Es macht etwas, geht zurück zu Claude, Claude kommt zurück und sagt: Okay, jetzt mach das. Das alles passiert, ohne dass wir es direkt sehen. Und am Ende sagt es uns: Okay, jetzt sind wir fertig. Den Forumsbeitrag konnten wir aus diesem Grund nicht senden. Willst du weitermachen? Hinter den Kulissen läuft diese ganze riesige Schleife.

Wir haben also zwei Entscheidungen. Die eine Entscheidung ist, welche Modelle wir verwenden wollen. Wollen wir im Hintergrund Anthropic, OpenAI oder andere Modelle nutzen? Und die zweite Entscheidung ist, mit welchem Tool wir arbeiten wollen. Wenn ich Claude Code verwende, arbeite ich immer mit einem der Modelle von Anthropic. Wenn ich Codex verwende, die Version von OpenAI, arbeite ich immer mit einem der Modelle von OpenAI, einem der GPT-Modelle.

Ich empfehle dir etwas anderes, nämlich OpenCode. OpenCode ist sozusagen eine Open-Source-Version von Claude Code, eine Open-Source-Version von Codex. Es ist das Harness, also das Tool auf deinem Computer, das diese ganze Schleife abwickelt und alles verwaltet. Aber es kann mit jedem Modell sprechen. Es kann mit Anthropic sprechen, mit Opus oder Sonnet. Es kann mit GPT-5 und den anderen sprechen. Es kann aber auch mit vielen kostenlosen Modellen sprechen. OpenCode selbst ist kostenlos, und es bietet auch eine Reihe kostenloser Modelle, die du verwenden kannst.

Zu OpenCode kommen wir einfach, indem wir in einem Terminal `opencode` eintippen, nachdem wir es installiert haben. Und wir können zwischen vielen Modellen wählen. Wir können Gemini wählen, das Modell von Google. Wir können Opus wählen, über das wir gerade gesprochen haben, oder Fable. Wir können Grok wählen, wenn du Elon Musk unterstützen willst. Die GPTs. DeepSeek, ein Modell, das bekanntermaßen aus China kommt. Qwen, sehr gut fürs Programmieren. Und all diese Optionen ganz oben sind kostenlose. Wenn du also nicht viel Geld hast, wenn du das einfach ausprobieren willst oder wenn dein Arbeitgeber kein Abo bezahlt, kannst du OpenCode kostenlos nutzen und eines dieser kostenlosen Modelle wählen.

Ich veröffentliche einen Guide, der erklärt, wie du OpenCode installierst, wie du es kostenlos einrichtest und welche dieser Modelle du verwenden kannst. Ich empfehle im Moment DeepSeek V4 Flash (free), aber ich habe diese Modelle kaum ausprobiert, also kannst du sie selbst testen und schauen, was für dich funktioniert.

Eine Einschränkung: Diese kostenlosen Modelle sind keine Frontier-Modelle. Big Pickle ist allerdings ein geheimes Modell, es könnte also ein Frontier-Modell sein, das wissen wir nicht. Aber die anderen sind keine Frontier-Modelle. Sie sind nicht die allerbesten Modelle. Sie liegen eher auf dem Niveau von Haiku oder Sonnet, also einfachere Modelle. Aber für deinen jetzigen Stand halte ich das für eine richtig gute Sache. Denn du willst kleine Babyschritte machen, bei denen dir keine Superintelligenz alles abnimmt. Du willst ein Gegenüber, mit dem du zusammenarbeiten und reden kannst, mit dem du Schritt für Schritt vorgehen, fragen kannst, wie Dinge funktionieren, und etwas darüber lernen kannst.

## Tokens und Kontext

Ich zeige dir OpenCode im Translator-Repo. Es weiß nichts über mein Repo. Aber ich kann etwas fragen wie „Wie viele Sprachen haben wir bisher?“, und es legt los. So sieht OpenCode aus. Links ist der Bereich, in dem gesprochen wird. Unten links ist der Bereich, in den wir tippen. Während es läuft, gibt es rechts einen weiteren Bereich. Mit Strg+P bekommst du verschiedene Befehle und Dinge, mit denen du herumspielen kannst. Du siehst, das geht sehr schnell. Es hat ein paar Millisekunden nachgedacht, ein bisschen was gelesen, das herausgefunden und kam mit 14 Sprachen zurück. Wenn du etwas markierst, wird es in deine Zwischenablage kopiert, das ist praktisch.

![OpenCode im Terminal bei der Antwort auf „How many languages do we have so far?“, rechts ein Kontextbereich mit 10.054 verbrauchten Tokens.](/images/projects/build-your-personal-homepage/setting-up-the-project/opencode-ui.webp)

Du siehst, es ist kostenlos, wir haben also nichts ausgegeben. Aber achte ein bisschen auf die Zahlen rechts. Ich werde nicht im Detail erklären, wie LLMs funktionieren, denn das ist ein Kaninchenbau, in den wir nicht hinabsteigen müssen. Aber die grundlegende Einheit eines LLM ist ein Token. Du kannst dir ein Token wie eine Silbe vorstellen. „Wie“ ist wahrscheinlich ein Token. „Sprachen“ sind wahrscheinlich zwei Tokens: Spra-chen, so ungefähr. „DeepSeek“ wahrscheinlich zwei Tokens. „V4“ wahrscheinlich zwei Tokens.

Jedes Mal, wenn du etwas eintippst, nimmt es das, was du getippt hast, und alles, was es braucht, um die Antwort herauszufinden, und schickt das an das Modell. Das Modell liest es und schickt etwas zurück, stellt wahrscheinlich eine Rückfrage, und so geht es ein bisschen hin und her. Dabei werden Tokens verbraucht. Wir haben gefragt: „Wie viele Sprachen haben wir bisher?“ Das sind vielleicht 11 Tokens, mit den Leerzeichen vielleicht 15. Bis es fertig gelesen, alles Nötige zusammengesucht, abgeschickt und ein paar Runden gedreht hatte, hatte es 10.000 Tokens verbraucht. Es hat also praktisch einen Aufsatz mit 3.000 Wörtern an ein Modell geschickt und dann ein kleines bisschen zurückbekommen.

Wenn wir eine größere Frage stellen, etwa „Wie läuft das Hinzufügen einer neuen Sprache ab?“, liest es mehr Dateien, und du siehst, wie die Tokens beim Lesen steigen. Das hat weitere 6.000 Tokens gekostet, um die Frage zu beantworten, und jetzt sind 10 % unseres Kontexts verbraucht. Der Kontext dieses Modells, also die maximale Menge an Tokens, die es in einem Gespräch haben kann, liegt bei etwa 170.000 Tokens.

Wenn du damit arbeitest, musst du das ein bisschen im Auge behalten. Je mehr Tokens du verbrauchst, desto langsamer wird das ganze Gespräch, weil dieser ganze Kontext jedes Mal an das Modell übergeben wird. Wenn ich noch etwas frage, werden all diese Informationen wieder an das Modell geschickt. Das gesamte bisherige Gespräch, alle bisherigen Antworten. Bei jedem Schritt im Gespräch wird alles mitgeschickt.

Ein weiterer Nachteil kostenloser Modelle ist, dass sie meistens einen kleineren Gesprächsumfang erlauben. Opus hat 1 Million Tokens pro Gespräch. Das hier liegt eher bei 150.000 oder 170.000. Du solltest also ständig neue Gespräche beginnen. Wenn du `/new` schreibst, bekommst du ein neues Gespräch. Das setzt deine Tokens zurück, aber dein Modell weiß dann auch nichts mehr von dem, was gerade passiert ist. Versuch also, dir anzugewöhnen, kleine, kurze Gespräche über verschiedene Dinge zu führen.

### Arbeiten Aron und Nicole bei Jiki auch so?

Ja. Aron nutzt das fast ausschließlich für seine gesamte Frontend-Arbeit. Nicole macht dasselbe beim Videoschnitt. Alle unsere Videos sind in Code geschrieben. Wir machen Videos nicht in einem Videoschnittprogramm. Wir erstellen sie in Code, und sie arbeitet mit Claude zusammen, um daraus auch alle Videos in Code aufzubauen.

### Laufen die kostenlosen Modelle in der Cloud?

Ja, die kostenlosen Modelle laufen alle in der Cloud. Auf deinem Rechner wären sie sehr, sehr langsam.

### Würdest du Mistral empfehlen?

Über Modelle außerhalb von Anthropic weiß ich eigentlich nichts. Ich persönlich arbeite im Alltag nur mit Claude. Ich habe es nie benutzt, also weiß ich es nicht. Ich persönlich würde einfach Claude verwenden, aber wahrscheinlich nur mit einem Abo, bei dem ich nicht pro Token bezahle.

## Deine erste Webseite bauen

Die erste Hälfte war ein ziemlich tiefer Einstieg darin, was LLMs sind, was Agentic Coding ist und wie die moderne Schleife aussieht, mit der wir als Entwickler arbeiten. Ich hoffe wirklich, dass du damit in den nächsten Monaten und im Lauf des Jahres vertraut wirst. Vertraut genug, um alles Mögliche zu bauen. Aber bevor wir weitermachen, möchte ich einen Gedanken wirklich betonen: Das Wichtigste ist, dass du verstehst, was im Hintergrund passiert.

Mir ist bewusst, dass ich dir in der ersten Hälfte eine Menge Informationen gegeben habe. In der zweiten Hälfte schauen wir uns deshalb an, wie du dir eine Homepage baust. Eigentlich dachte ich, wir kommen heute noch zu ein paar anderen Dingen, aber ich glaube, die heben wir uns für die nächste Session auf. In der nächsten Session schauen wir uns, glaube ich, an, wie wir das alles ausrollen, und wir pushen es auf GitHub. Außerdem habe ich ein exklusives Angebot für alle, die Jiki nutzen: Du bekommst eine kostenlose .tech-Domain, und bald kannst du auch eine kostenlose .online- oder .space-Domain bekommen. Damit kannst du dir eine eigene Website mit dieser Domain erstellen. Darüber erzähle ich in der nächsten Session mehr. Aber heute bauen wir weiter an deiner ersten Webseite und überlegen ein bisschen, was dazugehört.

## VS Code

Wir haben ein bisschen darüber gesprochen, dass Agentic Coding im Terminal stattfindet und dass du deine Befehle einfach an Claude oder an welche Modelle und Tools auch immer schreibst, die du verwendest. Früher hat man das alles in einem Code-Editor gemacht, einem Texteditor. Im Lauf der Geschichte gab es viele Texteditoren, aber bei dem, den die meisten von uns heute verwenden, sind wir mit VS Code gelandet. Wenn du noch nie einen Texteditor oder Code-Editor benutzt hast, empfehle ich dir, VS Code zu installieren. Unter den Guides, die ich dazu veröffentliche, gibt es einen Guide zum Installieren und Benutzen von VS Code.

Als du mich vorhin Dateien hast durchsehen sehen, war das VS Code. Es ist einfach ein Rahmen, eine Art Leinwand, auf der du Textdateien bearbeiten kannst, und an der Seite hat es eine Art Regal, in dem alle deine Dateien aufgelistet sind.

Wir bauen jetzt also eine Homepage. Zuerst lege ich ein Verzeichnis an. Ich gehe oben auf „File“ und dann auf „Open Folder“, und wir legen einfach ein Verzeichnis an. Ich lege es einfach auf meinen Desktop: „my new homepage“. Ich möchte dich ermutigen, VS Code zu deinem Hauptarbeitsplatz zu machen. Leg dir also ein Verzeichnis an. Wenn du gerade mitschaust, kannst du das jetzt machen. Wenn du VS Code nicht installiert hast, kannst du hier pausieren, den Guide zur Installation von VS Code lesen und dann zurückkommen.

Wir können dieses Verzeichnis öffnen, und du siehst, dass es fragt, ob wir den Autoren vertrauen. Da wir die Autoren sind, können wir uns selbst vertrauen. Und du siehst, dass wir etwas Platz haben, und hier an der Seite erscheinen später die Dateien. Unten gibt es ein Terminal, und wir können OpenCode direkt in diesem Terminal öffnen. So können wir unten OpenCode benutzen und oben die Dateien ansehen. Weil ich meinen Bildschirm groß machen will, halte ich die beiden erst einmal getrennt: OpenCode auf der einen Seite und alle Dateien auf der anderen, damit wir sehen, was passiert.

Gehen wir in das neue Verzeichnis, das wir gerade angelegt haben, und öffnen dort OpenCode. Jemand hat vorgeschlagen, ein anderes Modell auszuprobieren, Big Pickle. Ich habe Big Pickle noch nie benutzt. Probieren wir es aus und schauen, was passiert. Wir machen hier überhaupt nichts Komplexes.

## Was eine Webseite ist

Ich möchte hier ein bisschen darüber sprechen, was eine Webseite ist und wie eine Webseite funktioniert. In der kommenden Zeit, wie lang die auch wird, machen wir viel JavaScript, CSS und komplizierte Sachen. Heute machen wir nur die allereinfachsten Dinge. Wenn du dich mit Websites auskennst, wird sich das wahrscheinlich sehr einfach anfühlen. Wenn du gar nichts darüber weißt, ist das hoffentlich eine gute Einführung in das, was als Nächstes kommt.

Sprechen wir ein bisschen darüber, was eine normale, einfache Webseite ist. Dafür können wir einfach meine bestehende persönliche Website nehmen. Die ist ziemlich schlicht. Es ist einfach etwas Text auf einer Seite. Du kannst auf jede beliebige Website gehen, einen Rechtsklick machen und „Seitenquelltext anzeigen“ wählen, und dann siehst du so etwas wie das hier, also jede Menge Zeug. Das ist HTML.

![Der HTML-Quelltext von Jeremys persönlicher Website mit dem Doctype, den Head-Tags, Meta-Tags und dem Titel.](/images/projects/build-your-personal-homepage/setting-up-the-project/ihid-page-source.webp)

HTML ist berühmt dafür, dass verschiedene Dinge am Anfang ein Kleiner-als-Zeichen und am Ende ein Größer-als-Zeichen haben. Das hier nennen wir einen Head-Tag. Dann haben wir etwas CSS. Bei CSS geht es um die Gestaltung. Dazu kommen wir gleich. Und dann haben wir den gesamten Inhalt der Seite. Das ist der Header. Du siehst hier, dass der Header lila ist. Er enthält ein Bild. `img` steht für „image“, also Bild, mit einem Link zu einem Bild. Er hat etwas Text, eine Biografie von mir, und dann noch mehr Text, aufgeteilt in Absätze. `p` steht für „paragraph“, also Absatz. Noch ein paar Informationen, ein paar Überschriften. Das hier ist eine Überschrift der Ebene zwei, das eine Überschrift der Ebene eins. Und hier unten ist JavaScript, das dir ein bisschen bekannt vorkommen dürfte, wenn du Coding Fundamentals gemacht hast.

Als wir letztes Jahr das Bootcamp und die Web Dev Fundamentals gemacht haben, haben wir viel Zeit damit verbracht, uns dieses HTML sehr ausführlich anzuschauen, und CSS ebenso. Damit du alle verschiedenen Tags verstehst und weißt, wie sie funktionieren. Und damit du CSS verstehst und weißt, wie wir damit Dinge gestalten können.

Das ist ein Beispiel dafür, wie sich die Dinge meiner Meinung nach umgedreht haben. Ich finde jetzt, wir sollten einfach Dinge bauen und uns dann anschauen, was wir gebaut haben, und verstehen, wie es aussieht. Früher hätte ich empfohlen (und eigentlich musstest du das früher auch), all das selbst auszuschreiben. Jetzt empfehle ich stattdessen, dass wir unser LLM einfach eine wirklich, wirklich einfache Struktur bauen lassen, mit der wir arbeiten können.

## index.html

Außerdem solltest du wissen, dass es eine sehr alte Konvention gibt: Eine Datei namens `index.html` ist die erste Seite einer Website. Wenn du auf ihid.info/index.html gehst, siehst du praktisch genau das, die Startseite. Die Regel lautet: Wenn du nach der Domain nichts angibst, schaut der Server nach, ob es eine Datei namens index.html gibt, und wenn ja, zeigt er einfach ihren Inhalt an. Diese index.html ist eine ganz besondere Datei. Sie macht eigentlich nichts Magisches. Es ist einfach ein Standard. Aber viele Websites nutzen das traditionell so.

Wenn du OpenCode offen hast, kannst du also sagen:

> Erstelle eine index.html mit dem allernötigsten Grundgerüst für eine Seite, mit einer Überschrift mit meinem Namen, Jeremy Walker, und einer Zeile Bio hierzu.

Hier stehen wir an einer Weggabelung. Wir könnten, wenn wir wollten, sagen: „Bau mir eine komplette Website“, und das würde es auch tun. Aber dann würden zwei Dinge passieren. Erstens wäre es nicht die Website, die wir wollen. Im weiteren Verlauf überlegen wir uns, was diese Websites sein sollen, und ich werde dich sogar herausfordern, dir selbst eine Website auszudenken. Darüber sprechen wir gleich. Zweitens würde es dir einfach so viel Zeug liefern, dass du nichts daraus lernen würdest. Wenn du dagegen diese kleinen Schritte machst, lernst du, wie die Dinge funktionieren.

Wir schicken das also ab, und das hat es geschrieben. Jetzt können wir in VS Code nachschauen und die Datei öffnen. Das ist mein Workflow, wenn ich so arbeite. Ich habe hier meine ganze Website, vielleicht Tausende verschiedener Dateien, und lasse meinen Agenten an den Dateien arbeiten. Und wenn ich etwas prüfen, nachsehen will, was er macht, oder etwas bearbeiten will, öffne ich die Datei einfach hier drüben und schaue sie mir an.

Und jetzt, wo wir diese Datei haben, können wir sie auch in Chrome öffnen. Wenn du einfach einen Rechtsklick auf die Datei machst und „Öffnen mit“ und dann Chrome wählst, siehst du jetzt eine Seite, die wir gerade gebaut haben. Herzlichen Glückwunsch also. Du hast dir eine Homepage gebaut. Es ist keine besonders aufregende oder gute Homepage, aber es ist eine Homepage.

![Die schlichte Homepage in Chrome: eine Überschrift mit „Jeremy Walker“ und eine Zeile Bio, ganz ohne Gestaltung.](/images/projects/build-your-personal-homepage/setting-up-the-project/first-barebones-homepage.webp)

## Verstehen, was es gebaut hat

Ich möchte, dass wir uns eine Minute nehmen. In dieser Haltung sollst du immer sein: dir eine Minute zu nehmen und anzuschauen, was hier passiert. Jetzt, wo du das gebaut hast, möchte ich dich ermutigen, Folgendes zu sagen:

> Erklär mir, was jeder Teil macht.

Du kannst diese Schleife nicht nur nutzen, um Dinge erledigen zu lassen, sondern auch, um zu verstehen und Wissen darüber aufzubauen, wie Dinge funktionieren. Die Frage sollte für das Modell nicht besonders schwierig sein, denn a) hat es den Code gerade selbst geschrieben, und b) ist er sehr einfach. Und es erklärt. Hier ist es.

Die erste Zeile, der Doctype-Tag, sagt dem Browser, dass das ein HTML5-Dokument ist. Was passiert hier also eigentlich? Was ist dieses HTML? Nun, dieser Browser ist Chrome (es gibt auch andere Browser). Er weiß, wie man eine HTML-Datei liest und so auf den Bildschirm bringt, dass du sie sehen kannst. HTML ist eine Spezifikation. Es steht für „Hypertext Markup Language“. Es sieht so aus, mit einer Menge Tags und Informationsschnipseln, und Chrome oder jeder andere Browser kann diese Tags lesen und auf den Bildschirm bringen.

Vergiss den oberen Teil erst einmal. Schau dir nur unten den Body an. Er setzt eine Überschrift und einen Absatz Text. Dieses `h1` steht für eine Überschrift der Ebene eins. Und du siehst: Weil das eine Überschrift der Ebene eins ist, weiß Chrome, dass sie etwas größer und etwas fetter dargestellt werden soll. Dieses `p` dagegen ist ein Absatz. Chrome weiß, dass es ihn etwas kleiner darstellen soll.

Wenn wir wollten, könnten wir hier noch andere Tags einfügen. Das hier ist eine ungeordnete Liste, `ul`, und darin hätten wir Listeneinträge, `li`. Seit ich Claude benutze, ist eines passiert: Ich kann nicht mehr besonders gut tippen. Wir können also verschiedene Tags zusammenstellen, und das ergibt ein paar Aufzählungspunkte.

Das ist also die Anatomie, das Knochengerüst einer Webseite. Jede einzelne Webseite ist gleich aufgebaut. Wenn wir auf jiki.io gehen und uns den Quelltext der Seite anschauen, siehst du, dass es genau dasselbe ist. Es sind ganz viele dieser Tags. Wir sehen, das ist dasselbe. Wir haben gerade eine ungeordnete Liste verwendet, einen Listeneintrag, einen Link mit Text und einem Icon daneben. Das ist HTML. Wann immer du irgendeine Website baust, von jetzt an bis zum Ende aller Zeiten, gibst du an einen Webbrowser immer HTML aus.

Lesen wir fertig durch, was es so freundlich für uns zusammengestellt hat. Was kommt als Nächstes? Wir haben den Doctype, der sagt, dass das ein HTML-Dokument ist. Dann sagen wir: Okay, hier beginnt unser HTML-Dokument, und die Sprache dieses Dokuments ist Englisch.

Dann haben wir zwei Teile. Wir haben den Head und den Body.

Das Erste im Head ist, welche Zeichen wir verwenden, und wir verwenden diesen Zeichensatz namens UTF-8. Jedes davon ist ein Zeichen. Wir sagen damit, dass wir jedes Zeichen verwenden können, das ein lateinisches Zeichen ist, so wie diese hier, oder dass wir auch Emojis verwenden können. Wenn wir uns ein Emoji schnappen, können wir es direkt in dieses Dokument einfügen, dann neu laden, und schon ist ein Emoji auf der Seite. Das bedeutet diese Zeile. Sie sagt: Das sind alle Zeichen, die man üblicherweise verwendet. Das ist unser Standardzeichensatz.

Wir haben außerdem einen Viewport. Darum müssen wir uns im Moment nicht kümmern.

Und wir haben einen Titel. Der Titel ist Jeremy Walker. Dieser Titel erscheint oben im Tab. Beim Programmieren wirst du oft darüber nachdenken, welche Titel dort erscheinen sollen, damit die Leute etwas Sinnvolles sehen, wenn sie mehrere Tabs offen haben. Wir können auch Dinge wie das Favicon ändern. Du siehst, das haben wir noch nicht gemacht, deshalb gibt es dort kein Icon.

Dieser Head-Bereich umfasst alles, was nicht auf dem Bildschirm erscheint. Alles, was sich Suchmaschinen vielleicht anschauen, und andere Dinge dieser Art stehen im Head. Und der Body ist alles in der quadratischen Fläche darunter. Das hier ist ganz buchstäblich eine Überschrift, ein Absatz und eine Liste.

Das sagt uns also die Erklärung. Der `html`-Tag ist das Wurzelelement. Der Head enthält Metadaten. Metadaten sind einfach Daten über die Seite, nicht das, was du siehst. Das Charset ist die Zeichenkodierung, die dafür sorgt, dass deine Emojis und die Zeichen mancher anderer Sprachen angezeigt werden. Um den Viewport wollen wir uns nicht kümmern. Und der Body ist der Rest, den wir uns angeschaut haben.

Allen, die schon seit Jahren HTML schreiben: Entschuldigung, dass das für euch so einfach ist. Aber auch ihr habt das irgendwann einmal von Grund auf gelernt.

## Echte Inhalte hinzufügen

Jetzt kannst du deinen Agenten etwas HTML hinzufügen lassen. Nehmen wir noch etwas mehr Text. Wenn du ein LinkedIn-Profil hast, kannst du dir von dort etwas Text holen. Machen wir das doch einfach. Gehen wir auf mein LinkedIn und holen uns von dort ein paar Informationen. Die können wir unserem LLM geben. Wir können sagen:

> Hier sind ein paar Informationen aus meinem LinkedIn-Profil. Strukturiere sie sinnvoll unterhalb des Headers auf der Seite.

Wir geben ihm diesen Text, und es legt los und strukturiert ihn für uns. Auch hier gilt: Vor zwei Jahren hättest du Tags von Hand schreiben müssen, das ganze Zeug selbst schreiben. Jetzt können wir ihm stattdessen einfach Text geben und es eine sinnvolle Struktur darum bauen lassen. Wir bitten es hier nicht, das Ganze zu gestalten oder auf eine bestimmte Art aussehen zu lassen. Wir bitten es nur, eine Struktur darum zu bauen, etwas HTML darum zu setzen. Mal sehen, wie gut Big Pickle das hinbekommt.

Übrigens: Nach dieser ersten Session verwende ich für die meisten Sachen Claude, einfach weil ich es sehr gut kenne und weil es schnell ist. Aber wenn du selbst mitmachst, empfehle ich dir genau das hier. Wenn du ein LinkedIn-Profil oder einen Lebenslauf hast, kannst du den Text einfach kopieren, in OpenCode einfügen und es bitten, das zu bauen.

Es hat kurz nachgedacht. Jetzt bereitet es die Änderung vor. Und es hat den Code eingefügt. Da ist es. Wir haben jetzt eine schöne Überschrift der Ebene zwei, „Experience“, und die übrigen Informationen. Wenn wir zu Chrome wechseln und neu laden, sehen wir jetzt ein schlichtes Stück sauber strukturierten Code.

![Die Homepage in Chrome zeigt jetzt einen Abschnitt „Experience“ mit strukturierten Einträgen für jede Stelle.](/images/projects/build-your-personal-homepage/setting-up-the-project/homepage-with-experience.webp)

## Deine Hausaufgabe

Als Nächstes überlegen wir uns, wie unsere persönliche Homepage aussehen soll. Über diese Frage sollst du dir wirklich Zeit nehmen. Ich werde dich in diesem Kurs oft ermutigen, dir Stift und Notizblock zu schnappen, dich an einen ruhigen Ort zu setzen, möglichst weit weg von jedem Bildschirm, und einfach nachzudenken.

Wir bauen uns eine Homepage. Diese Homepage braucht ein paar Dinge. Sie braucht einen Überblick über uns und unsere Interessen. Sie braucht eine Seite mit unserem Lebenslauf. Sie bekommt eine Seite über unser Portfolio, alle Projekte, die wir bauen, und von dort verlinkt sie auf weitere Seiten zu diesen Projekten. Mit der Zeit bauen wir also eine große Website mit mehreren Seiten. Das meiste davon machen wir in der zweiten Session. Heute machen wir nur diese eine Übersichtsseite. Aber ich möchte, dass du mit Stift und Papier durchdenkst und aufzeichnest, wie die verschiedenen Seiten aussehen sollen.

Und denk ein bisschen über einen Stil nach. Schau dir die Seiten anderer Leute an. Such dir andere Leute aus der Exercism-Community. Erik Schierboom zum Beispiel, der früher bei uns gearbeitet hat, hat eine wirklich schlichte Haupt-Landingpage und dazu eine About-Seite, die ziemlich hübsch ist, mit einem netten kleinen Element, das unten auftaucht. Er hat ein paar Informationen über Software, über Orte, an denen er Vorträge gehalten hat, und dann ein paar Links. Vielleicht inspiriert dich das. Oder schauen wir uns SleeplessByte an. Vielleicht erinnerst du dich an DJ aus den Bootcamps oder von den Mentoren. Das ist die Seite von DJ. Such dir also Leute, die dich interessieren, und lass dich davon inspirieren, was sie gemacht haben. Überleg dir, welcher visuelle Stil dir gefällt. Und wir sprechen noch ein bisschen darüber, wie man Bilder erstellt und wie man dafür Technik einsetzen kann.

Schau dir die Ideen verschiedener Leute an. Ich mag meistens einen sehr minimalistischen Stil. Und für dieses Projekt werde ich mir in den nächsten Tagen überlegen, wie meine neue Landingpage aussehen soll, denn ich baue diese Homepage auch für mich selbst. Ich überlege mir, wie sie sich aufteilt. Ich will einen Bereich für meine Fotografie. Ich will einen Bereich für meine Podcasts, Videos und andere Dinge, die ich gemacht habe. Ich will eine kurze Bio, und ich will einen Lebenslauf. Darüber werde ich also nachdenken.

Deine Hausaufgabe für diese Woche ist, darüber nachzudenken, das Ganze zu entwerfen und dann anzufangen, diese Seiten zu strukturieren. Du kannst mehrere Seiten erstellen. Wir können eine weitere Seite erstellen, nennen wir sie „my resume“, unseren Inhalt hineinkopieren, die Teile löschen, die wir nicht brauchen, und den Titel in „Jeremys Lebenslauf“ ändern. Jetzt haben wir unsere Index-Seite, können aber auch auf resume.html gehen und haben dort eine weitere Seite.

Diese Woche also:

- Überleg dir, welche verschiedenen Seiten du haben willst und welche Inhalte du auf diese Seiten packst.
- Installiere VS Code.
- Installiere OpenCode und richte ein Modell ein.
- Bau mit OpenCode ein paar dieser verschiedenen Seiten.

Mach dir noch keine Gedanken über die Gestaltung. Damit sollst du dich eigentlich noch nicht beschäftigen. Du kannst gern herumspielen, wenn du willst, ich ermutige Leute immer, neugierig zu sein, aber ich möchte dir beibringen, wie man das meiner Meinung nach in der modernen Welt am besten macht. Fang auf keinen Fall an, JavaScript-Frameworks oder etwas anderes zu verwenden. Bleib einfach bei schlichtem HTML, und dann bauen wir in jeder Session eine Schicht darauf, bis es immer leistungsfähiger und komplexer wird. So verstehst du, wie alles funktioniert.

Wenn es dich interessiert, recherchier noch ein bisschen mehr über HTML. Finde heraus, welche verschiedenen Tags es gibt und was sie bedeuten. Recherchieren kann heutzutage so einfach sein wie diese Frage:

> Nenn mir die 20 häufigsten Tags.

Und dann:

> Sag mir, wofür jeder davon da ist.

So recherchiere ich.

Die nächste Session machen wir in ein paar Tagen. Bis dahin hoffe ich, dass du OpenCode und VS Code installiert und eine Reihe von Seiten gebaut hast. Nächstes Mal verlinken wir diese Seiten miteinander, fügen eine Navigation hinzu und etwas Gestaltung, und wir rollen das Ganze auch über GitHub aus. Vielleicht bekommst du sogar eine eigene Domain, damit du deine persönliche Website kostenlos unter einer eigenen Domain haben kannst. Diese Woche kannst du dich auch schon bei GitHub unter github.com registrieren. Ich veröffentliche Guides für VS Code, OpenCode und GitHub, die du durcharbeiten kannst.

Das war das Ende dieser ersten Session. Danke fürs Zuschauen. Ich hoffe, es war interessant und hat dir Spaß gemacht. Wenn du Fragen zu irgendetwas hast, das wir behandelt haben, komm bitte ins Forum. Ich bin dort und freue mich darauf, Fragen zu beantworten und gemeinsam zu erkunden. Ich habe nicht unbedingt alle Antworten. Ich lerne selbst auch gern. Frag also einfach, was dich interessiert. Ich freue mich darauf, dich in der nächsten Session zu sehen.
