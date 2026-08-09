---
title: "Installera en agentic coding-plattform"
excerpt: "Steg-för-steg-instruktioner för att installera OpenCode, logga in och välja en AI-modell, inklusive alternativ som inte kostar någonting alls."
tags: ["agentic-coding", "installation"]
seo:
  description: "En nybörjarvänlig guide till att installera OpenCode, den agentic coding-plattform vi rekommenderar, med gratis AI-modellalternativ via Zen och den lågkostnadsplanen Go."
  keywords:
    [
      "opencode",
      "installera opencode",
      "agentic coding",
      "ai-kodningsassistent",
      "opencode zen",
      "opencode go",
      "gratis ai-kodning",
      "vscode"
    ]
en_md5: a5c3efc92432a167085818beba5b6bc7
---

## Introduktion

En agentic coding-plattform är ett verktyg som låter en AI arbeta tillsammans med dig på kod: läsa filer, göra ändringar och köra kommandon på din dator. Om den meningen är ny för dig, börja med vår guide om [vad agentic coding är](/guides/what-is-agentic-coding) och kom tillbaka hit när du är redo att installera en.

Den här guiden går igenom hur du installerar **OpenCode**, loggar in och väljer en AI-modell. Du behöver bara göra det här en gång, och du kan göra hela proceduren utan att spendera några pengar.

## Varför vi rekommenderar OpenCode

Det finns flera bra agentic coding-verktyg, bland annat Claude Code (Anthropic) och Codex (OpenAI). De är alla ungefär lika att använda, så inget du lär dig är bortkastat om du byter senare. Trots det rekommenderar vi **[OpenCode](https://opencode.ai)** medan du lär dig, av tre skäl:

- **Du kan använda det gratis.** Det är just nu det enda verktyget av sitt slag med en pålitlig, stabil, genuint användbar gratisnivå, och den nivån kommer troligen inte att försvinna.
- **Det fungerar med nästan vilken AI-modell som helst.** Du kan börja med gratismodellerna och testa mer avancerade senare om du vill utforska, allt utan att byta verktyg.
- **Det körs i terminalen**, vilket är hur de flesta professionella utvecklare använder sådana här verktyg, så du lär dig på riktigt. Och du kan köra det inuti VS Code så att det finns precis bredvid din kod.

Du kan använda OpenCode på två sätt, och den här guiden förbereder dig för båda:

- **På egen hand**, i vilket terminalfönster som helst.
- **Inbäddat i VS Code**, där det öppnas i en panel bredvid din kod och kan se vilken fil du arbetar med. Det här är vad vi rekommenderar: du ser agentens ändringar dyka upp i din editor samtidigt som den gör dem. (Har du ingen aning om vad VS Code är? Det är vår [rekommenderade kodredigerare](/guides/using-a-code-editor).)

## Vad det kostar

OpenCode självt kostar ingenting. Det du kan välja att betala för är den AI-modell som tänker. När du ansluter OpenCode till en modell ser du två alternativ från OpenCode-teamet:

- **Zen** erbjuder några modeller utan kostnad. De är gratis eftersom företagen bakom dem marknadsför dem, vilket innebär att urvalet roterar över tid, och dina konversationer kan komma att användas för att förbättra modellerna. Det är en acceptabel kompromiss för övningsuppgifter, men klistra inte in något privat eller personligt i dem.
- **Go** är en prenumeration: **$10/månad** (med första månaden för $5) för generös tillgång till en mycket kraftfullare uppsättning modeller. Du behöver inte detta från dag ett. Börja med Zens gratismodeller och uppgradera om du märker att du slår i taket.

## Vilken modell ska jag välja?

Om du inte är säker på vad en ”modell” ens är, förklarar vår guide till [nyckelbegrepp inom agentic coding](/guides/key-agentic-coding-concepts) det ordentligt. Kortversionen: modellen är själva AI-”hjärnan”, och olika modeller är smartare, snabbare eller billigare än andra.

Inuti OpenCode kan du byta modell när som helst genom att skriva `/models`. Vårt råd:

- **På gratisnivån**, testa gratismodellerna som erbjuds och se vilken du trivs med. Listan ändras i takt med att kampanjer kommer och går, så vi låtsas inte veta vad du kommer att se, men i skrivande stund är **DeepSeek V4 Flash** ett utmärkt gratisval.
- **På Go-planen** är de kodfokuserade modellerna (i skrivande stund Kimi K2.7 Code, GLM-5.2 och familjen Qwen 3.7) alla starka. Välj en, och bry dig om att jämföra dem först när du kan grunderna.

Överanalysera inte det här. För de övningar du kommer att göra medan du lär dig är varje modell som erbjuds mer än kapabel.

## Innan du börjar

Du behöver två saker på plats:

- **VS Code**, så att du kan använda OpenCode inbäddat i din editor. Om du inte har installerat det än, följ vår guide om [att installera VS Code](/guides/installing-vscode).
- **Endast på Windows: WSL.** OpenCodes terminalversion fungerar bäst i Linux, och WSL ger din Windows-maskin en riktig Linux-terminal. Följ vår guide om [att installera WSL](/guides/installing-wsl) först, inklusive avsnittet ”Använda WSL från VS Code” i slutet. Kom sedan tillbaka hit. På macOS och Linux behövs inget extra att installera.

## Installera OpenCode

Att installera OpenCode är ett enda kommando i terminalen. Om du aldrig har använt en terminal tidigare är det här en bra första bekantskap: du skriver en instruktion och datorn gör jobbet.

### Windows

1. Öppna VS Code, anslut den till WSL (Ctrl+Shift+P, sedan **WSL: Connect to WSL**), och öppna en terminal (Terminal-menyn, sedan **New Terminal**).
2. Kopiera och klistra in detta kommando i terminalen och tryck Enter:
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. När det är klart, stäng terminalen, öppna en ny och skriv `opencode --version` följt av Enter. Om det skriver ut ett versionsnummer är du klar.

### macOS

1. Öppna **Terminal** (tryck Cmd+Space, skriv ”terminal” och tryck Enter), eller öppna en terminal inuti VS Code (Terminal-menyn, sedan **New Terminal**).
2. Kopiera och klistra in detta kommando i terminalen och tryck Enter:
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. När det är klart, stäng terminalen, öppna en ny och skriv `opencode --version` följt av Enter. Om det skriver ut ett versionsnummer är du klar.

### Linux

1. Öppna din terminal, eller öppna en inuti VS Code (Terminal-menyn, sedan **New Terminal**).
2. Kopiera och klistra in detta kommando i terminalen och tryck Enter:
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. När det är klart, stäng terminalen, öppna en ny och skriv `opencode --version` följt av Enter. Om det skriver ut ett versionsnummer är du klar.

<!-- SCREENSHOT: terminal after the install script has completed -->

## Starta OpenCode för första gången

Öppna nu OpenCode och anslut det till Zen så att det har en modell att prata med:

1. I VS Code, öppna en mapp med lite kod i (vilket som helst av dina övningsprojekt fungerar utmärkt) och öppna en terminal (Terminal-menyn, sedan **New Terminal**).
2. Skriv `opencode` och tryck Enter. OpenCode-gränssnittet visas i terminalpanelen, precis bredvid din kod. (Första gången du gör det här installeras även ett litet VS Code-tillägg som kopplar ihop de två, så att OpenCode kan se vilken fil du har öppen.)
3. Första gången du kör det visas en lista med titeln ”Connect a provider”. (Om du inte får frågan, skriv `/connect` för att ta fram den.) Använd piltangenterna för att välja **OpenCode Zen (Recommended)** och tryck Enter.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/connect-a-provider.webp" alt="OpenCodes ”Connect a provider”-skärm, med OpenCode Zen (Recommended) markerat högst upp i listan" />
  <figcaption>Välj OpenCode Zen från leverantörslistan.</figcaption>
</figure>

4. Den kommer sedan att be dig om en **API-nyckel**: en lång kod som bevisar vem du är, ungefär som ett lösenord. För att få en, öppna <a href="https://opencode.ai/zen" target="_blank" rel="noopener noreferrer">opencode.ai/zen</a> i din webbläsare och skapa ett gratiskonto. Inga betalningsuppgifter behövs. Kopiera nyckeln du får, klistra in den i terminalen och tryck Enter.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-api-key.webp" alt="OpenCode ber om en API-nyckel, med instruktioner att gå till opencode.ai/zen för att hämta en" />
  <figcaption>Hämta din nyckel från opencode.ai/zen och klistra in den här.</figcaption>
</figure>

5. Slutligen visar den modellistan, där de gratis är markerade med **Free** till höger. Välj en av dem (som vi sa ovan, i skrivande stund är **DeepSeek V4 Flash Free** ett utmärkt val). Du kan byta modell när du vill genom att skriva `/models`.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-model-list.webp" alt="OpenCode Zens modellista, med gratismodeller markerade Free till höger och DeepSeek V4 Flash Free markerat" />
  <figcaption>Gratismodellerna är markerade till höger. Här väljer vi DeepSeek V4 Flash Free.</figcaption>
</figure>

## Din första konversation

Fråga den nu något. Skriv ett meddelande som:

> Look at the files in this folder and explain what they do.

Se vad som händer. Den läser filer, tänker och rapporterar tillbaka, och den ber om din tillåtelse innan den ändrar något. Den loopen av att läsa, agera och kontrollera är kärnan i agentic coding.

<figure class="post-figure" style="max-width:700px">
  <img src="/images/guides/installing-an-agentic-coding-platform/first-conversation.webp" alt="OpenCode läser filerna i ett projekt en efter en, tänker och förklarar sedan vad varje mapp och fil på översta nivån gör" />
  <figcaption>OpenCode läser projektets filer, tänker och rapporterar vad den hittar.</figcaption>
</figure>

Samma sak fungerar i vilken terminal som helst, med eller utan VS Code. Öppna en terminal, navigera till en projektmapp, skriv `opencode` och du är igång. En del älskar att arbeta på det viset. Testa båda och se vad som passar dig.

Det var allt. Nu har du en fungerande agentic coding-uppsättning som inte kostar något att köra. För att förstå vad som egentligen händer under huven, och vad ord som tokens och context betyder, gå vidare till [nyckelbegrepp inom agentic coding](/guides/key-agentic-coding-concepts).
