---
title: "Eine Agentic-Coding-Plattform installieren"
excerpt: "Schritt für Schritt: OpenCode installieren, anmelden und ein KI-Modell auswählen, mit Optionen, die gar nichts kosten."
tags: ["agentic-coding", "installation"]
seo:
  description: "Eine anfängerfreundliche Anleitung zur Installation von OpenCode, der Agentic-Coding-Plattform, die wir empfehlen, mit kostenlosen KI-Modellen über Zen und dem günstigen Go-Abo."
  keywords:
    [
      "opencode",
      "opencode installieren",
      "agentic coding",
      "ki coding assistent",
      "opencode zen",
      "opencode go",
      "kostenloses ki coding",
      "vscode"
    ]
en_md5: a5c3efc92432a167085818beba5b6bc7
---

## Einleitung

Eine Agentic-Coding-Plattform ist ein Tool, mit dem eine KI gemeinsam mit dir an Code arbeitet: Sie liest Dateien, nimmt Änderungen vor und führt Befehle auf deinem Computer aus. Falls das für dich neu klingt, starte mit unserer Anleitung dazu, [was Agentic Coding ist](/guides/what-is-agentic-coding), und komm hierher zurück, wenn du bereit bist, eine zu installieren.

Diese Anleitung führt dich durch die Installation von **OpenCode**, die Anmeldung und die Auswahl eines KI-Modells. Du musst das nur einmal machen, und das Ganze kostet dich keinen Cent.

## Warum wir OpenCode empfehlen

Es gibt mehrere gute Agentic-Coding-Tools, darunter Claude Code (Anthropic) und Codex (OpenAI). Sie lassen sich alle ungefähr gleich bedienen, du verlierst also nichts von dem, was du lernst, wenn du später wechselst. Trotzdem empfehlen wir dir während deiner Lernphase **[OpenCode](https://opencode.ai)**, und zwar aus drei Gründen:

- **Du kannst es kostenlos nutzen.** Es ist derzeit das einzige Tool seiner Art mit einem kostenlosen Tarif, der zuverlässig, stabil und wirklich brauchbar ist, und dieser Tarif wird so schnell nicht verschwinden.
- **Es funktioniert mit fast jedem KI-Modell.** Du kannst mit den kostenlosen Modellen anfangen und später stärkere ausprobieren, wenn du herumexperimentieren willst, alles ohne das Tool zu wechseln.
- **Es läuft im Terminal**, so wie die meisten professionellen Entwickler diese Tools benutzen, du lernst also gleich den „echten“ Weg. Und du kannst es in VS Code laufen lassen, wo es direkt neben deinem Code sitzt.

Du kannst OpenCode auf zwei Arten nutzen, und diese Anleitung bereitet dich auf beide vor:

- **Eigenständig**, in einem beliebigen Terminalfenster.
- **Eingebettet in VS Code**, wo es in einem Panel neben deinem Code geöffnet wird und sehen kann, an welcher Datei du gerade arbeitest. Das empfehlen wir: Du siehst die Änderungen des Agenten direkt in deinem Editor erscheinen, während er sie macht. (Du weißt nicht, was VS Code ist? Es ist unser [empfohlener Code-Editor](/guides/using-a-code-editor).)

## Was es kostet

OpenCode selbst kostet nichts. Bezahlen kannst du, wenn du willst, für das KI-Modell, das die Denkarbeit macht. Wenn du OpenCode mit einem Modell verbindest, siehst du zwei Optionen vom OpenCode-Team:

- **Zen** bietet eine Handvoll Modelle kostenlos an. Sie sind gratis, weil die Firmen dahinter sie bewerben, das heißt, die Auswahl wechselt mit der Zeit, und deine Unterhaltungen können genutzt werden, um die Modelle zu verbessern. Für Lernübungen ist das ein guter Kompromiss, aber gib dort nichts Privates oder Persönliches ein.
- **Go** ist ein Abo: **10 $/Monat** (der erste Monat kostet 5 $) für großzügigen Zugang zu deutlich stärkeren Modellen. Am ersten Tag brauchst du das nicht. Fang mit den kostenlosen Modellen von Zen an und steig auf das Go-Abo um, wenn du an ihre Grenzen stößt.

## Welches Modell soll ich wählen?

Wenn du dir nicht mal sicher bist, was ein „Modell“ überhaupt ist, erklärt unsere Anleitung zu den [wichtigsten Konzepten von Agentic Coding](/guides/key-agentic-coding-concepts) das ausführlich. Die Kurzfassung: Das Modell ist das eigentliche „Gehirn“ der KI, und die verschiedenen Modelle sind klüger, schneller oder günstiger als andere.

In OpenCode kannst du jederzeit das Modell wechseln, indem du `/models` eintippst. Unser Rat:

- **Im kostenlosen Tarif** probier die angebotenen kostenlosen Modelle aus und schau, mit welchem du gut zurechtkommst. Die Liste ändert sich, wenn Werbeaktionen kommen und gehen, wir tun also nicht so, als wüssten wir, was du sehen wirst, aber Stand jetzt ist **DeepSeek V4 Flash** eine hervorragende kostenlose Wahl.
- **Mit dem Go-Abo** sind die aufs Programmieren ausgerichteten Modelle (Stand jetzt Kimi K2.7 Code, GLM-5.2 und die Qwen-3.7-Familie) alle stark. Such dir eines aus und mach dir erst Gedanken über den Vergleich, wenn du die Grundlagen kennst.

Mach dir darüber nicht zu viele Gedanken. Für die Übungen, die du beim Lernen machst, ist jedes angebotene Modell mehr als ausreichend.

## Bevor du loslegst

Zwei Dinge solltest du vorher erledigt haben:

- **VS Code**, damit du OpenCode eingebettet in deinem Editor nutzen kannst. Wenn du es noch nicht installiert hast, folge unserer Anleitung zum [Installieren von VS Code](/guides/installing-vscode).
- **Nur unter Windows: WSL.** Die Terminal-Version von OpenCode läuft unter Linux am besten, und WSL gibt deinem Windows-Rechner ein richtiges Linux-Terminal. Folge zuerst unserer Anleitung zum [Installieren von WSL](/guides/installing-wsl), einschließlich des Abschnitts „WSL aus VS Code verwenden“ am Ende. Dann komm hierher zurück. Unter macOS und Linux musst du nichts zusätzlich installieren.

## OpenCode installieren

OpenCode zu installieren ist ein einziger Befehl im Terminal. Wenn du noch nie ein Terminal benutzt hast, ist das ein schöner erster Vorgeschmack: Du tippst einen Befehl ein, und der Computer erledigt die Arbeit.

### Windows

1. Öffne VS Code, verbinde es mit WSL (Ctrl+Shift+P, dann **WSL: Connect to WSL**) und öffne ein Terminal (Terminal-Menü, dann **New Terminal**).
2. Kopiere diesen Befehl, füge ihn im Terminal ein und drücke Enter:
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. Wenn es fertig ist, schließe das Terminal, öffne ein neues und tippe `opencode --version` ein, gefolgt von Enter. Wenn eine Versionsnummer erscheint, bist du fertig.

### macOS

1. Öffne **Terminal** (drücke Cmd+Leertaste, tippe „terminal“ ein und drücke Enter) oder öffne ein Terminal in VS Code (Terminal-Menü, dann **New Terminal**).
2. Kopiere diesen Befehl, füge ihn im Terminal ein und drücke Enter:
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. Wenn es fertig ist, schließe das Terminal, öffne ein neues und tippe `opencode --version` ein, gefolgt von Enter. Wenn eine Versionsnummer erscheint, bist du fertig.

### Linux

1. Öffne dein Terminal oder öffne eines in VS Code (Terminal-Menü, dann **New Terminal**).
2. Kopiere diesen Befehl, füge ihn im Terminal ein und drücke Enter:
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. Wenn es fertig ist, schließe das Terminal, öffne ein neues und tippe `opencode --version` ein, gefolgt von Enter. Wenn eine Versionsnummer erscheint, bist du fertig.

<!-- SCREENSHOT: terminal after the install script has completed -->

## OpenCode zum ersten Mal starten

Jetzt öffne OpenCode und verbinde es mit Zen, damit es ein Modell hat, mit dem es reden kann:

1. Öffne in VS Code einen Ordner mit etwas Code darin (jedes deiner Übungsprojekte passt perfekt) und öffne ein Terminal (Terminal-Menü, dann **New Terminal**).
2. Tippe `opencode` ein und drücke Enter. Die OpenCode-Oberfläche erscheint im Terminal-Panel, direkt neben deinem Code. (Beim ersten Mal installiert es außerdem eine kleine VS Code-Erweiterung, die beide verbindet, damit OpenCode sehen kann, welche Datei du geöffnet hast.)
3. Beim ersten Start erscheint eine Liste mit dem Titel „Connect a provider“. (Wenn keine Aufforderung kommt, tippe `/connect` ein, um sie aufzurufen.) Wähle mit den Pfeiltasten **OpenCode Zen (Recommended)** aus und drücke Enter.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/connect-a-provider.webp" alt="Der Bildschirm „Connect a provider“ von OpenCode, wobei OpenCode Zen (Recommended) oben in der Liste hervorgehoben ist" />
  <figcaption>Wähle OpenCode Zen aus der Anbieterliste.</figcaption>
</figure>

4. Danach wirst du nach einem **API key** gefragt: ein langer Code, der beweist, wer du bist, ungefähr wie ein Passwort. Um einen zu bekommen, öffne <a href="https://opencode.ai/zen" target="_blank" rel="noopener noreferrer">opencode.ai/zen</a> im Browser und erstelle ein kostenloses Konto. Zahlungsdaten sind nicht nötig. Kopiere den Schlüssel, den du bekommst, füge ihn im Terminal ein und drücke Enter.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-api-key.webp" alt="OpenCode fragt nach einem API key, mit dem Hinweis, ihn unter opencode.ai/zen zu holen" />
  <figcaption>Hol dir deinen Schlüssel unter opencode.ai/zen und füge ihn hier ein.</figcaption>
</figure>

5. Zum Schluss zeigt es dir die Liste der Modelle, wobei die kostenlosen rechts mit **Free** markiert sind. Wähle eines davon aus (wie oben gesagt, ist **DeepSeek V4 Flash Free** Stand jetzt eine hervorragende Wahl). Du kannst das Modell jederzeit wechseln, indem du `/models` eintippst.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-model-list.webp" alt="Die Modellliste von OpenCode Zen: Die kostenlosen Modelle sind rechts mit Free markiert, DeepSeek V4 Flash Free ist hervorgehoben" />
  <figcaption>Die kostenlosen Modelle sind rechts markiert. Hier wählen wir DeepSeek V4 Flash Free aus.</figcaption>
</figure>

## Deine erste Unterhaltung

Jetzt frag es etwas. Tippe zum Beispiel:

> Schau dir die Dateien in diesem Ordner an und erklär, was sie machen.

Schau, was passiert. Es liest Dateien, denkt nach und meldet sich zurück, und bevor es etwas ändert, fragt es dich um Erlaubnis. Diese Schleife aus Lesen, Handeln und Prüfen ist das Herz des Agentic Coding.

<figure class="post-figure" style="max-width:700px">
  <img src="/images/guides/installing-an-agentic-coding-platform/first-conversation.webp" alt="OpenCode liest die Dateien eines Projekts eine nach der anderen, denkt nach und erklärt dann, was die einzelnen Ordner und Dateien auf der obersten Ebene machen" />
  <figcaption>OpenCode liest die Dateien des Projekts, denkt nach und berichtet, was es gefunden hat.</figcaption>
</figure>

Genauso funktioniert es in jedem Terminal, mit oder ohne VS Code. Öffne ein Terminal, wechsle in einen Projektordner, tippe `opencode` ein, und schon geht es los. Manche Leute arbeiten am liebsten so. Probier beides aus und schau, was dir besser liegt.

Das war es. Du hast jetzt ein funktionierendes Agentic-Coding-Setup, dessen Betrieb nichts kostet. Wenn du verstehen willst, was da unter der Haube wirklich passiert und was Begriffe wie Tokens und Kontext bedeuten, mach weiter mit den [wichtigsten Konzepten von Agentic Coding](/guides/key-agentic-coding-concepts).
