---
title: "Windows Subsystem for Linux (WSL) installieren"
excerpt: "Schritt für Schritt: So installierst du das Windows Subsystem for Linux, das dir unter Windows eine richtige Entwicklungsumgebung gibt."
tags: ["installation"]
seo:
  description: "Eine anfängerfreundliche Anleitung zur Installation von WSL (Windows Subsystem for Linux) unter Windows 10 und 11, mit klaren Schritt-für-Schritt-Anweisungen und Lösungen für häufige Probleme."
  keywords:
    [
      "wsl",
      "wsl installieren",
      "windows subsystem for linux",
      "ubuntu unter windows",
      "entwicklungsumgebung windows",
      "programmieren lernen"
    ]
en_md5: 7286edef00bc5cd57f37c00fb20ba83a
---

## Einleitung

WSL (das **Windows Subsystem for Linux**) ist eine Funktion von Windows, die Microsoft entwickelt hat und die ein echtes Linux-System in deinem Windows-Rechner laufen lässt. Du brauchst es, weil die meisten Programmierwerkzeuge zuerst für Linux und macOS entwickelt werden (und dort am besten funktionieren), und WSL ist der Weg, wie Entwickler unter Windows Zugriff auf all das bekommen. Microsoft selbst empfiehlt genau diese Variante für die Entwicklung unter Windows. Die Installation dauert etwa fünfzehn Minuten, die meiste Zeit davon wartest du, und du musst es nur einmal machen.

## Bevor du loslegst

Du brauchst:

- **Windows 10 (Version 2004 oder neuer) oder Windows 11.** Jeder Windows-Rechner aus den letzten paar Jahren ist in Ordnung.
- **Administratorrechte** auf dem Computer. Wenn es ein Familiencomputer ist, brauchst du vielleicht die Person, die ihn eingerichtet hat, damit sie ihr Passwort eintippt.

## WSL installieren

1. Klicke auf den **Start**-Button und tippe „powershell" ein. Es erscheint **Windows PowerShell**.
2. Öffne es nicht einfach so. Klicke es stattdessen mit der rechten Maustaste an und wähle **Als Administrator ausführen**. Windows fragt dich, ob du Änderungen zulassen möchtest: Klicke auf **Ja**.
3. Tippe in das blaue Fenster, das erscheint, Folgendes ein und drücke die Eingabetaste:
   ```
   wsl --install
   ```
4. Windows lädt alles herunter und richtet es ein, darunter ein Linux-System namens **Ubuntu** (die beliebteste Linux-Version). Das kann ein paar Minuten dauern.
5. Wenn du dazu aufgefordert wirst, **starte deinen Computer neu**.

<!-- SCREENSHOT: PowerShell running wsl --install -->

## Ubuntu einrichten

Nach dem Neustart öffnet sich automatisch ein Terminalfenster, um die Einrichtung von Ubuntu abzuschließen. (Falls nicht, klicke auf Start, tippe „ubuntu" ein und öffne es.)

Es fordert dich auf, einen **Benutzernamen** und ein **Passwort** für dein Linux-System anzulegen:

1. Tippe einen Benutzernamen ein (klein geschrieben, ohne Leerzeichen) und drücke die Eingabetaste.
2. Tippe ein Passwort ein und drücke die Eingabetaste, dann tippe es zur Bestätigung noch einmal.

Eine Sache bringt hier alle ins Stolpern: **Wenn du das Passwort eintippst, erscheint nichts auf dem Bildschirm**. Keine Punkte, keine Sternchen, nichts. Das ist eine Sicherheitsfunktion von Linux und kein Fehler. Deine Eingabe wird trotzdem erfasst, tippe das Passwort also einfach ein und drücke die Eingabetaste.

Vergiss dieses Passwort nicht. Du brauchst es gelegentlich, wenn du etwas installierst.

<!-- SCREENSHOT: Ubuntu first run asking for a username -->

## Prüfen, ob es funktioniert

Schließe alles, klicke dann auf **Start**, tippe „ubuntu" ein und öffne es. Du solltest ein Fenster mit einer Eingabeaufforderung sehen, die auf `$` endet und darauf wartet, dass du etwas eintippst. Herzlichen Glückwunsch: Das ist ein echtes Linux-Terminal, und du hast jetzt dieselbe Entwicklungsumgebung wie die Profis.

Tippe zum Ausprobieren `ls` ein und drücke die Eingabetaste. Der Befehl listet die Dateien in deinem aktuellen Ordner auf (es werden noch nicht viele sein).

## WSL aus VS Code heraus verwenden

Wenn du [VS Code installiert hast](/guides/installing-vscode), kann es sich mit WSL verbinden, sodass dein Editor und dein Linux-Terminal zusammenarbeiten:

1. Öffne VS Code.
2. Öffne das Erweiterungen-Panel (das Symbol mit den vier Quadraten links, oder Ctrl+Shift+X), suche nach **WSL** und installiere die Erweiterung von Microsoft.
3. Drücke Ctrl+Shift+P, tippe „WSL" ein und wähle **WSL: Connect to WSL**. VS Code öffnet sich neu, verbunden mit Ubuntu.

Ab jetzt ist jedes Terminal, das du in VS Code öffnest (Terminal-Menü, dann Neues Terminal), ein Linux-Terminal. Diese Einrichtung empfehlen wir dir für alle weiteren Anleitungen.

## Wenn etwas schiefgeht

Das häufigste Problem ist eine Fehlermeldung, in der **Virtualisierung** vorkommt (oder „VT-x", „AMD-V" oder „virtual machine platform"). WSL ist auf eine Hardware-Funktion angewiesen, die bei manchen Computern abgeschaltet ist. Um sie einzuschalten, musst du eine Einstellung im BIOS deines Computers ändern, und das ist je nach Hersteller unterschiedlich. Suche nach dem Modellnamen deines Laptops plus „Virtualisierung aktivieren" nach einer Anleitung, oder frag in <a href="https://forum.jiki.io" target="_blank" rel="noopener noreferrer">unserem Forum</a>, und wir helfen dir weiter.

Für alles andere hat Microsofts <a href="https://learn.microsoft.com/en-us/windows/wsl/install" target="_blank" rel="noopener noreferrer">offizielle Anleitung zur WSL-Installation</a> einen Abschnitt zur Fehlerbehebung, und wie gesagt: Das Forum ist immer für dich da.
