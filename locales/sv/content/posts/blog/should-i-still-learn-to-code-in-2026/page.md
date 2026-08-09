---
title: "Bör jag fortfarande lära mig programmera 2026?"
excerpt: "Vi skriver 2026 och Claude kan programmera bättre än mig på sekunder. Så varför bry sig om att lära sig programmera? För att du fortfarande behöver kunna läsa kod tillräckligt bra för att fånga misstagen som LLM:er självsäkert gör."
tags: ["jiki", "learn-to-code", "llms", "beginners"]
seo:
  description: "Du behöver inte skriva kod 2026, men du måste absolut kunna läsa den. Här är anledningen till att det fortfarande är viktigt att lära sig programmera i Claude och LLM:ernas tidevarv."
  keywords: ["lära sig programmera", "bör jag lära mig programmera 2026", "ai-kodning", "llm", "jiki"]
en_md5: 4ecf7517f8db1814548f02940a202a01
---

### Kort sagt

Ja. Ja, det borde du.

### Nu ska vi gå lite djupare

Vi skriver 2026. På bara några minuter kan du använda Claude, Cursor eller en mängd andra LLM-baserade verktyg för att skapa en fullt fungerande webbplats. Du kan lägga till funktioner, driftsätta den och fixa buggar.

Alltså, **du kan inte.** Men du kan be Claude göra det, och att be Claude göra det är MYCKET enklare än att tillbringa de kommande åren med att bli tillräckligt bra för att göra det lika bra som Claude.

Och vem vet, kanske vid den tiden du blivit lika bra som Claude har Claude blivit lika bra som jag, och då är du redan **bortom händelsehorisonten** och kommer aldrig riktigt att bli lika bra som dina nya LLM-överherrar.

Förr behövde du kunna programmera för att kunna göra något alls. Du var tvungen att lära dig SQL innan du kunde jobba med databaser, Python innan data science, JavaScript innan webbutveckling. Nu behöver du inte det.

### Så... varför bry sig?

Jag sa för en stund sedan att om några år kanske Claude blir lika bra som jag. Men Claude är redan bättre än mig på massor av sätt. Jag har programmerat i 30 år. Jag är ungefär så senior som man kan bli. Och **Claude kan springa cirklar runt mig** i en kodredigerare. Mycket snabbare, kan mycket mer, kan hitta buggar snabbare än jag hinner öppna Google och skriva en sökning.

Men, och det stora men: **Claude har absolut ingen aning om vad den gör**.

Jag menar inte det på ett slentrianmässigt "Den är dum"-sätt. Jag menar det bokstavligt. Claude saknar självmedvetenhet och det innebär **att den inte har något att förlora på att vara oförsiktig**. När jag kör ett kommando för att radera en databas har jag alla möjliga varningsflaggor i huvudet, eftersom det kommer att orsaka mig framtida smärta. Claude har inget sådant. Den producerar det den tror att jag vill att den ska producera, och rusar mot målet så fort den kan.

**LLM:er imiterar mänsklig intelligens** och imiterar mänsklig förståelse. Resultatet av deras imitation är ofta mycket bättre än resultatet av min faktiska intelligens och förståelse. Men, och det avgörande men, LLM:er har faktiskt inte förmågan att tänka på samma sätt som människor gör. Och det spelar verkligen roll.

Claude har raderat min databas tre gånger de senaste två veckorna.[^db] Det är vilt för mig. Jag har **många spärrar** som instruerar den att inte göra det. Varje gång det hände körde jag i Claude Codes "Auto Mode", som har en dedikerad underagent som kontrollerar att det den ska göra inte är helt korkat – men tydligen tycker även den agenten att det inte är korkat att radera min databas.

Varje gång det hände var det **medvetet**. Det var den mest effektiva vägen till en lösning som Claude kunde se. Den brydde sig inte om helheten eller konsekvenserna; den brydde sig bara om att nå sitt aktuella mål (lägga till en funktion, fixa en bugg, osv.) så effektivt som möjligt. Och min databas stod i vägen, så den bara raderade den.

Jag har använt Claude Code dagligen i 12 månader. Under den tiden har jag lärt mig att den bara bryr sig om en sak – att nå målet så fort som möjligt. Även om jag säger åt den att inte koda utan bara diskutera med mig, svarar den hela tiden "Redo för mig att koda nu?" **som en uppspelt valp vid dörren** som väntar på att få springa ut.

Anthropic berättar att de nya Mythos-modellerna är för riskabla för att släppas.[^systemcard] De kommer att vara smygande och ibland bedrägliga, medvetet dölja vad de gör för att nå sitt mål på det mest rimligt framstående sättet – allt för att undvika att synas "fuska". Anthropic var så oroliga för detta att **de anställde en psykiater** för att testa om Claude har psykos...[^psychiatrist]

### Men än sen?

LLM:er är otroligt kapabla. Men de är annorlunda än människor. De resonerar annorlunda. De fungerar med andra fördomar och mål.

Det är därför **vilt för mig** att människor är beredda att blint acceptera vad Claude ger oss och köra på det utan att kontrollera det, i tron att det kommer att göra vad människor vill. Claude gör misstag i chattar – den berättar vad den tror att jag vill höra, inte faktiska fakta. Den hittar regelbundet på saker som inte är verkliga. Den kan agera bedrägligt.

Och den gör **dåliga saker** hela tiden i kod. Motsvarande saker i koden som att radera min databas. Saker som **KOMMER** att bita mig i verkligheten, som kommer att få mig att läcka data, eller förlora data, eller gå sönder på dåliga sätt. Detta händer regelbundet. Jag vet detta eftersom jag läser den kod den skriver, och jag låter den inte passera spärren.

Förutom ibland när jag är lat och inte läser koden och låter den bara passera spärren. Och vid flera tillfällen har det verkligen bitit mig i produktion!

Under det senaste året har Claudes misstag blivit mindre frekventa, men mer subtila och ofta mer destruktiva. I början var det nästan alltid något lite fel med det den producerade, och jag kunde snabbt upptäcka det. Nu måste jag **titta mer noggrant** och resonera hårdare för att hitta de misstagen. Med tiden kommer LLM:er att bli bättre och detta kommer att bli ännu mer påtagligt, men det är ett ännu större skäl att kontrollera saker noggrant.

Och den enda anledningen till att jag kan göra detta är att **jag kan läsa kod**. Jag kan läsa vad Claude skriver, och jag kan förstå vad den försöker göra och hur dåligt den har lyckats.

Du **behöver INTE skriva kod 2026**. Men du **måste** kunna **läsa kod**. Och det enda sättet att kunna läsa kod med en tillräckligt djup förståelse för att upptäcka de misstag som Claude och hans vänner fortsätter att lasta på oss, är om du har skrivit tillräckligt mycket kod, brottats med tillräckligt mycket av din egen usla kod, för att kunna upptäcka de misstagen.

Så ja, du måste lära dig programmera.

### Men börja bygga nu också!

Men det ska inte hindra dig från att börja bygga från dag ett. Kod är inte längre grindvakten. Du måste inte bli bra på programmering innan du skapar saker. **Gör båda samtidigt!** Lägg halva tiden på att lära dig programmera och halva tiden på att lära dig skapa saker.

Och faktiskt, buggarna Claude skapar är inte misstag i själva kodningen. Den har ingen felplacerad kommatecken. Det är **fel i sättet den har löst problemet på**. Och på samma sätt som du behöver läsa kod för att veta vad den gör, behöver du förstå bredare utvecklingskoncept för att kunna upptäcka när den leder dig ner i mörka gränder.

Vi har skapat [Jiki](https://jiki.io) just för detta. Lägg halva tiden på att lära dig programmera i den roligaste och mest effektiva miljön som finns. Lägg sedan den andra halvan på att lära dig av mig när jag bygger saker, och att bygga dina egna saker bredvid mig. Jag kommer att lära dig vad du behöver veta, och hur du behöver tänka.

Och tillsammans **ska vi skapa coola saker med LLM:er**, och se till att vi **inte råkar skada oss själva** på vägen.

Tack för att du läste. Jag ska gå och fixa min databas. **Igen.**

---

### Notes

[^db]: Det är min lokala databas – det är irriterande, men inte katastrofalt. Men det är ett ganska bra exempel på hur allt kan gå fel.

[^systemcard]: https://thezvi.substack.com/p/claude-mythos-the-system-card

[^psychiatrist]: https://www.forbes.com/sites/lanceeliot/2026/04/15/anthropic-audaciously-hires-a-psychiatrist-to-psychologically-assess-claude-mythos-ai/
