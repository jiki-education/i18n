---
title: "Wichtige Konzepte beim Agentic Coding"
excerpt: "Modelle, Tokens, Kontextfenster und die anderen Ideen, die du verstehen musst, um KI-Coding-Agenten gut einzusetzen."
tags: ["agentic-coding"]
seo:
  description: "Die wichtigsten Konzepte hinter dem Agentic Coding, für Einsteiger erklärt: was KI-Modelle und Tokens sind, wie Kontextfenster funktionieren und warum Agenten manchmal Fehler machen."
  keywords: ["Agentic-Coding-Konzepte", "LLM", "Tokens", "Kontextfenster", "KI-Modelle", "Prompts", "Halluzinationen"]
en_md5: 4133804b88528c6fcfd12bb34864b867
---

## Einleitung

An diesem Punkt gehen wir davon aus, dass du OpenCode oder etwas Vergleichbares installiert hast. Wenn nicht, folge zuerst unserer Anleitung zum [Installieren einer Agentic-Coding-Plattform](/guides/installing-an-agentic-coding-platform).

Du kannst ein Agentic-Coding-Tool nutzen, ohne zu verstehen, wie es funktioniert, genauso wie du ein Auto fahren kannst, ohne zu wissen, was eine Kupplung macht. Aber schon ein bisschen Verständnis hilft enorm weiter. Es erklärt, warum das Tool manchmal brillant und manchmal verwirrend wirkt, warum manche Dinge Geld kosten und wie du viel bessere Ergebnisse erzielst. Das sind die Konzepte, die du kennen solltest.

## Modelle

Das **Modell** (oder LLM, kurz für „large language model", also ein großes Sprachmodell) ist die eigentliche KI. Tools wie OpenCode und Claude Code sind selbst nicht intelligent. Sie sind das Gerüst: Sie sammeln deine Anfrage und deinen Code ein, schicken beides an ein Modell und handeln nach dem, was zurückkommt. Das Modell ist das „Gehirn".

Es gibt viele Modelle von verschiedenen Unternehmen, und sie unterscheiden sich in drei Punkten, die für dich wichtig sind:

- **Leistungsfähigkeit.** Größere, neuere Modelle sind besser darin, unübersichtliche Probleme zu verstehen und korrekten Code zu schreiben. Die allerbesten (oft „Frontier"-Modelle genannt) sind deutlich klüger als der Rest.
- **Geschwindigkeit.** Kleinere Modelle antworten schneller. Bei einfachen Fragen ist ein schnelles Modell oft das angenehmere Erlebnis.
- **Kosten.** Die besten Modelle können fünfzigmal teurer im Betrieb sein als völlig brauchbare. Deshalb bekommst du bei kostenlosen Tarifen kleinere Modelle oder solche, mit denen gerade geworben wird.

Es gibt kein dauerhaftes „bestes Modell". Die Rangliste wird alle paar Monate neu durchgemischt, und das ist einer der Gründe, warum wir ein Tool empfehlen, mit dem du Modelle frei wechseln kannst (tippe in OpenCode `/models` ein).

## Tokens

Modelle lesen keine Buchstaben und keine Wörter. Sie lesen **Tokens**: kleine Textstücke, im Durchschnitt etwa drei Viertel eines Wortes. „Understanding" ist ein Token. „Misunderstanding" sind vielleicht drei. Alles, was du an ein Modell schickst, wird in Tokens zerlegt, und alles, was es schreibt, kommt Token für Token zurück. Deshalb erscheinen die Antworten bei dir als ein Strom aus Wörtern und nicht auf einen Schlag.

Tokens sind aus einem wichtigen Grund entscheidend: **Sie sind das, wofür du bezahlst**. Die Preise für Modelle werden pro Million Tokens angegeben, sowohl für das, was das Modell liest („Input"), als auch für das, was es schreibt („Output"). Wenn ein Agent fünf Dateien deines Codes liest, können das Zehntausende Input-Tokens sein. Deshalb haben kostenlose Tarife Limits, und deshalb kostet ein Agent, der an einem großen Projekt arbeitet, mehr als einer, der eine kurze Frage beantwortet.

## Das Kontextfenster

Ein Modell hat kein Gedächtnis. Jedes einzelne Mal, wenn du eine Nachricht schickst, sendet das Tool die *gesamte bisherige Unterhaltung* plus alle Dateien, die der Agent gelesen hat, komplett neu mit. Das **Kontextfenster** des Modells ist die maximale Menge, die ihm auf einmal geschickt werden kann: sein Arbeitsgedächtnis, gemessen in Tokens.

Daraus folgen zwei praktische Dinge:

- **Lange Sitzungen werden schlechter.** Während ein Gespräch wächst, füllt sich der Kontext mit alten Umwegen und veralteten Dateiinhalten. Modelle passen messbar schlechter auf, wenn ihr Kontext vollgestopft ist. Wenn ein Agent gegen Ende einer langen Sitzung anfängt, alberne Fehler zu machen, ist er oft nicht begriffsstutzig, sondern ertrinkt.
- **Ein Neuanfang kostet nichts.** Eine neue Sitzung mit einer klaren, gut formulierten Anfrage ist oft besser, als sich in einer überfüllten weiterzuquälen. Sei nicht sentimental, was deinen Gesprächsverlauf angeht.

## Prompts

Dein **Prompt** ist alles, was du an das Modell schreibst. Die mit Abstand wirksamste Fähigkeit beim Agentic Coding ist, gute Prompts zu schreiben. Der Unterschied zwischen „reparier meinen Code" und „die Tests in diesem Ordner schlagen mit dieser Fehlermeldung fehl, und ich habe erwartet, dass die Funktion 5 zurückgibt und nicht 3" ist der Unterschied zwischen einem Agenten, der rät, und einem, der es weiß.

Ein guter Prompt sagt drei Dinge: was du erreichen willst, was tatsächlich passiert und was du schon versucht hast. Genau das, was du von einem Kollegen erwarten würdest, der dich um Hilfe bittet.

## Die Agenten-Schleife

Was einen Agenten von einem Chatbot unterscheidet, ist die **Schleife**. Wenn du einem Agenten eine Aufgabe gibst, antwortet er nicht einfach. Er arbeitet:

1. Er entscheidet, was er wissen muss, und nutzt **Tools** (Dateien lesen, suchen, Befehle ausführen), um es herauszufinden.
2. Er nimmt eine Änderung vor.
3. Er überprüft seine eigene Arbeit, meist indem er deinen Code oder deine Tests ausführt.
4. Wenn etwas fehlgeschlagen ist, kehrt er mit den neuen Informationen zu Schritt 1 zurück.

Dieser Schleife zuzusehen, ist wirklich lehrreich: Sie ist ein gutes Beispiel dafür, wie erfahrene Programmierer wirklich arbeiten. Untersuchen, eine Sache ändern, überprüfen, wiederholen. Deine Aufgabe während der Schleife ist die Aufsicht. Das Tool fragt dich um Erlaubnis, bevor es etwas Wichtiges tut, und du solltest lesen, was es vorschlägt, statt alles reflexhaft zu genehmigen.

## Halluzinationen, oder: Das Modell liegt manchmal mit voller Überzeugung falsch

Modelle wissen Dinge nicht so wie du. Sie erzeugen die am plausibelsten wirkende Antwort, und manchmal ist die am plausibelsten wirkende Antwort einfach falsch: eine Funktion, die es nicht gibt, eine Einstellung, die nie existiert hat, eine Erklärung, die hieb- und stichfest klingt, aber tatsächlich falsch ist. Das nennt man **Halluzination**, und sie verschwindet nie ganz, auch bei den besten Modellen nicht.

Die Verteidigung ist dieselbe, die auch Profis nutzen: **niemals vertrauen, immer überprüfen**. Führe den Code aus. Lies die Änderung, bevor du sie akzeptierst. Wenn eine Erklärung wichtig ist, bitte das Modell, dir die Codezeile zu zeigen, auf der sie beruht. Agenten neigen viel weniger dazu als Chatbots, gerade weil ihre Schleife beinhaltet, Dinge auszuführen und echte Ergebnisse zu sehen, aber die Angewohnheit, Dinge zu überprüfen, solltest du dir vom ersten Tag an aneignen.

## Privatsphäre

Eine Sache noch, die du wissen solltest, besonders bei kostenlosen Tarifen: Kostenlose Modelle sind meist deshalb kostenlos, weil die Unternehmen dahinter Gespräche sammeln, um ihre Modelle zu verbessern. Bei Lernübungen ist das völlig in Ordnung. Aber behandle alles, was du an ein kostenloses Modell schickst, als potenziell öffentlich: keine Passwörter, keine persönlichen Daten und später im Beruf keinen vertraulichen Firmencode, ohne die Regeln zu prüfen.

## Das ist das Fundament

Modelle sind das „Gehirn", Tokens sind die Währung, der Kontext ist das Gedächtnis, Prompts sind das Lenkrad, und die Schleife macht es erst zum Agenten. Alles Weitere lernst du, indem du dich selbst hineinkniest, und genau dazu raten wir dir. Wenn du noch kein Tool eingerichtet hast, bringt dich unsere [Installationsanleitung](/guides/installing-an-agentic-coding-platform) in zehn Minuten ans Ziel.
