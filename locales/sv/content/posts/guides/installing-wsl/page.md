---
title: "Installera Windows Subsystem for Linux (WSL)"
excerpt: "Steg-för-steg-instruktioner för att installera Windows Subsystem for Linux, så att du får en ordentlig utvecklingsmiljö på Windows."
tags: ["installation"]
seo:
  description: "En nybörjarvänlig guide till att installera WSL (Windows Subsystem for Linux) på Windows 10 och 11, med tydliga steg-för-steg-instruktioner och lösningar på vanliga problem."
  keywords:
    [
      "wsl",
      "install wsl",
      "windows subsystem for linux",
      "ubuntu on windows",
      "utvecklingsmiljö för windows",
      "lär dig programmera"
    ]
en_md5: 7286edef00bc5cd57f37c00fb20ba83a
---

## Inledning

WSL (**Windows Subsystem for Linux**) är en funktion i Windows, utvecklad av Microsoft, som kör ett riktigt Linux-system inuti din Windows-dator. Du behöver det eftersom de flesta programmeringsverktygen är byggda först (och fungerar bäst) på Linux och macOS, och WSL är sättet för Windows-utvecklare att få tillgång till allt detta. Det är så Microsoft själva rekommenderar att du utvecklar på Windows. Att installera det tar ungefär en kvart, varav det mesta är väntetid, och du behöver bara göra det en gång.

## Innan du börjar

Du behöver:

- **Windows 10 (version 2004 eller senare) eller Windows 11.** Vilken Windows-dator som helst från de senaste åren fungerar.
- **Administratörsbehörighet** till datorn. Om det är en familjedator kan du behöva att den som satte upp den skriver in sitt lösenord.

## Installera WSL

1. Klicka på **Start** och skriv "powershell". **Windows PowerShell** visas.
2. Öppna det inte bara. Högerklicka istället på det och välj **Kör som administratör**. Windows frågar om du vill tillåta att det gör ändringar: klicka på **Ja**.
3. I det blå fönster som visas skriver du följande och trycker på Enter:
   ```
   wsl --install
   ```
4. Windows laddar ner och ställer in allt, inklusive ett Linux-system som heter **Ubuntu** (den populäraste versionen av Linux). Det kan ta några minuter.
5. När du blir ombedd, **starta om datorn**.

<!-- SCREENSHOT: PowerShell running wsl --install -->

## Ställa in Ubuntu

Efter omstarten öppnas ett terminalfönster automatiskt för att slutföra inställningen av Ubuntu. (Om det inte gör det, klicka på Start, skriv "ubuntu" och öppna det.)

Du kommer att bli ombedd att skapa ett **användarnamn** och ett **lösenord** för ditt Linux-system:

1. Skriv ett användarnamn (gemener, inga mellanslag) och tryck på Enter.
2. Skriv ett lösenord och tryck på Enter, skriv det sedan igen för att bekräfta.

Det finns en sak som lurar alla här: **när du skriver lösenordet visas ingenting på skärmen**. Inga punkter, inga stjärnor, ingenting. Det är en säkerhetsfunktion i Linux, inte ett fel. Det du skriver registreras, så skriv bara lösenordet och tryck på Enter.

Glöm inte bort det här lösenordet. Du kommer att behöva det då och då när du installerar saker.

<!-- SCREENSHOT: Ubuntu first run asking for a username -->

## Kontrollera att det fungerar

Stäng allt, klicka sedan på **Start**, skriv "ubuntu" och öppna det. Du bör se ett fönster med en prompt som slutar med `$`, redo för dig att skriva. Grattis: det där är en äkta Linux-terminal, och du har nu samma utvecklingsmiljö som proffsen.

Testa att skriva `ls` och trycka på Enter. Det listar filerna i din aktuella mapp (det kommer inte att finnas så många än).

## Använda WSL från VS Code

Om du har [installerat VS Code](/guides/installing-vscode) kan det ansluta till WSL så att din editor och din Linux-terminal samarbetar:

1. Öppna VS Code.
2. Öppna tilläggspanelen (ikonen med fyra rutor till vänster, eller Ctrl+Shift+X), sök efter **WSL** och installera tillägget från Microsoft.
3. Tryck på Ctrl+Shift+P, skriv "WSL" och välj **WSL: Connect to WSL**. VS Code startar om, ansluten till Ubuntu.

Från och med nu är varje terminal du öppnar i VS Code (menyn Terminal, sedan Ny terminal) en Linux-terminal. Det här är den inställning vi rekommenderar för resten av våra guider.

## Om något går fel

Det vanligaste problemet är ett felmeddelande som nämner **virtualisering** (eller "VT-x", "AMD-V", eller "virtual machine platform"). WSL förlitar sig på en hårdvarufunktion som är avstängd på vissa datorer. Att slå på den innebär att du ändrar en inställning i datorns BIOS, vilket varierar beroende på tillverkare. Sök efter din bärbara dators modellnamn plus "enable virtualisation" för instruktioner, eller fråga i <a href="https://forum.jiki.io" target="_blank" rel="noopener noreferrer">vårt forum</a> så hjälper vi dig.

För allt annat har Microsofts <a href="https://learn.microsoft.com/en-us/windows/wsl/install" target="_blank" rel="noopener noreferrer">officiella installationsguide för WSL</a> ett felsökningsavsnitt, och återigen, forumet finns alltid där.
