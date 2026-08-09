---
title: "Jikis bakgrundshistoria"
excerpt: "Varför vi byggde Jiki. Det här är bakgrunden som ledde oss från Exercism till att skapa något helt nytt för nybörjare, och vart vi hoppas att resan ska leda!"
tags: ["jiki", "learn-to-code", "beginners", "story"]
seo:
  description: "Historien bakom Jiki – varför jag byggde en ny lär-dig-koda-plattform efter år av att driva Exercism, och min vision för att hjälpa nybörjare."
  keywords: ["jiki", "lär dig koda", "nybörjare", "exercism", "programmeringsbootcamp"]
en_md5: 62c6e8e363795859b8e096214cbbe903
---

Hej allihopa!

Jag har tillbringat de senaste 2 åren med att bygga **[Jiki](https://jiki.io)**, började med en idé, höll en bootcamp för att testa mitt tänkande, och sedan byggde jag en (vad jag hoppas är en skitbra) produkt tillsammans med Aron och Nicole.

Jag ville berätta om resan. Varför Jiki finns, varför vi investerade vår tid och energi i det, och vart jag hoppas att det ska leda.

## Innan Jiki fanns Exercism

För den som inte vet har jag tillbringat det senaste decenniet med att bygga **[Exercism](https://exercism.org)**. Exercism är en plattform som hjälper utvecklare att fördjupa sina kunskaper och lära sig nya programmeringsspråk. Det har varit ett enormt samarbete med tusentals personer som committar kod, hundratals underhållare som bygger språkspår, och tusentals mentorer som stöttar andra utvecklare. Miljontals människor har använt det för att höja sin programmering, och det är något jag är riktigt stolt över.

Men medan Exercism var utformat för utvecklare som redan kan koda, fortsatte vi att locka helt nybörjare. Faktum är att enligt senaste räkningen anmäler sig över 500 personer om dagen till Exercism som aldrig har skrivit en rad kod tidigare. Och Exercism fungerar verkligen inte för dem eftersom det inte byggdes för dem, så vi skickar iväg dem.

Och det suger.

Min motivation med Exercism har alltid handlat om social rörlighet – att hjälpa de som behöver hjälpen mest. Jag tror att programmering är en kärnkompetens som nästan alla borde lära sig. För vissa kan det bli en karriär, men för alla lär det ut kritiskt tänkande, problemlösning, och ger dig en färdighetsuppsättning som hjälper i nästan allt digitalt arbete. Kort sagt, jag tror att programmering verkligen förändrar liv och öppnar dörrar som annars kunde ha förblivit stängda. Så att se dessa nybörjare komma, fulla av entusiasm, och sedan behöva säga ”tyvärr, det här är inte för dig än” kändes som ett misslyckande från min sida.

Jag började utforska landskapet för ”lär dig koda” för att förstå vad som fanns där ute för dem. Jag pratade med många av nybörjarna som anmälde sig och började utforska resurserna som fanns. Och när jag provade dessa resurser insåg jag att något saknades. De flesta av dem kommer inte till kärnan av vad jag tror att programmering faktiskt är: rolig problemlösning.

Istället ger de dig videor att titta på, frågesporter att göra, kanske en liten programmeringsövning, och ett certifikat på slutet. De lär dig syntax och teori, men de får dig inte riktigt att skapa saker. Och jag tror att det är därför så många ger upp. Det är inte för att programmering är för svårt – det är för att sättet de lärs ut på inte känns som programmering alls.

Så jag bestämde mig för att göra något åt det.

## Jikis resa mot verklighet

### Basera Jiki på min erfarenhet

När jag tänker på hur jag lärde mig koda, så var det inte genom kurser eller handledningar. Jag började vid åtta års ålder, långt innan jag hade internet. Jag lärde mig genom att bygga spel. Jag förvandlade vad mitt barnsliga sinne var besatt av just då (det var mycket Star Trek och trollkarlar) till något slumpmässigt spel. Sedan, när jag blev äldre, gjorde jag webbplatser och små verktyg åt mig själv – vad jag än tyckte var intressant. Jag hade ingen läroplan. Jag skapade bara saker, körde fast, löste det, och skapade mer.

Den erfarenheten har format allt om hur jag tänker på lärande. Jag tror att människor lär sig koda genom att koda – inte genom att titta på någon annan som gör det, inte genom att svara på flervalsfrågor, inte genom att skriva en rad kod för att ”avsluta” en övning, utan genom att faktiskt skriva riktiga program och lösa problem.

Det är därför Jiki är byggt kring projekt från dag ett. Du håller inte på med små femradersövningar i månader i sträck. Du bygger saker – spel, animationer, verktyg – och skriver dussintals, sedan hundratals rader kod under dina första månader. Det är utmanande, men det är den typen av utmaning som får dig att känna att du faktiskt håller på att bli en programmerare.

### Bootcampen

I januari 2025 höll jag en bootcamp för 1 000 studenter. De lärde sig ett programmeringsspråk som jag hade skrivit specifikt för bootcampen (som heter JikiScript). Varje vecka hade de ungefär 3 timmars liveundervisning, sedan några övningar att lösa, och sedan en 3 timmars ”Labs”-session, där vi gick igenom övningarna tillsammans, de ställde frågor osv.

Det var en riktigt rolig upplevelse och jag lärde mig massor av det. Det var också vansinnigt intensivt eftersom jag skrev ett programmeringsspråk, övningar och lektioner plus att jag gjorde 6 timmars livesändning och dussintals timmar support varje vecka – ett stort tack till volontärerna som hjälpte mig med det!!

Avgörande var att jag lärde mig att tempot jag skapade var alldeles för högt. Jag gjorde något som jag trodde skulle vara mjukt och lätt, och det var fortfarande vääääldigt för fort och för svårt för människor. Så jag har tagit med mig det in i Jiki, och saktat ner saker ännu mer – lagt till fler övningar som går i ett långsammare tempo. Om du tycker det är lätt, kommer du att rusa igenom de extra övningarna, men om du kämpar, kommer de (förhoppningsvis) att vara livräddare!

### Ta bort foot-gunsen

Jag tror starkt på att det blir mycket svårare att lära sig koda om du samtidigt också måste lära dig ett programmeringsspråk. Det låter antagligen som ett ganska konstigt påstående, men häng kvar.

Programmeringsspråk är designade för professionella. De innehåller många ”avancerade” funktioner som gör att vi som utvecklare kan arbeta snabbare och mer effektivt. De tenderar också att ha massor av historiskt bagage (JavaScript lider särskilt av detta) – funktioner som borde ha tagits bort ur språket för länge sedan, men som måste stanna kvar för bakåtkompatibilitet.

Det betyder att du medan du lär dig stöter på saker som antingen är väldigt avancerade eller helt enkelt konstiga. Vi kallar dem foot-guns (saker du kan skjuta dig själv i foten med). När jag körde bootcampen bestämde jag mig för att skriva ett nytt språk utan foot-guns (som hette JikiScript). En feedback jag fick var dock att det var frustrerande att lära sig ett språk som du sedan inte kunde använda i verkligheten. Så för Jiki har jag bestämt mig för att undervisa genom antingen JavaScript eller Python (samma kursplan – du väljer språket).

Men jag har tagit bort foot-gunsen.

Jag har skrivit anpassade tolkar för båda språken som helt enkelt rensar bort bruset. Du kan inte använda `var` i JavaScript längre. Du kan inte använda pilfunktioner förrän du är riktigt bekväm med vanliga funktioner. Du kan inte skriva `[] + {}` och förvänta dig något annat än ett fel. Om någon sannolikt skulle råka göra något oavsiktligt vid den här punkten i sin läranderesa, är det inaktiverat. Och allteftersom du går framåt aktiverar vi fler funktioner och mer funktionalitet. Det här har varit ett **ENORMT** jobb, men jag tror att det kommer att göra en enorm skillnad.

### i18n

En annan viktig funktion som jag visste att jag behövde lägga till var att göra Jiki flerspråkigt.

De flesta människor talar inte engelska. De flesta programmeringsresurser är på engelska. Det är en enorm barriär för människor som ofta har minst pengar att spendera på resurser. Och det är något jag verkligen vill fixa.

Så när vi byggde Jiki skapade vi det så att allt kunde vara flerspråkigt – innehållet, övningarna, AI-hjälpen och videorna. Min plan är att lansera med engelska för betan och sedan släppa en handfull nya språk varje månad, tills vi täcker 95 % av världen i slutet av året.

### Freemium

Det sista beslutet jag var tvungen att fatta var prissättningen.

Jag visste till 100 % att jag ville att Jiki skulle vara gratis. Hela poängen är att hjälpa människor som behöver hjälp. Men jag har också lärt mig från Exercism att det är riktigt svårt att driva något när det inte kommer in tillräckligt med pengar för att finansiera det (**ETT STORT TACK** till alla som donerar till Exercism – ni har gjort Jiki möjligt!!)

Så jag bestämde mig för att ta ett Freemium-tillvägagångssätt. Kärnan i Jiki är gratis – videorna och övningarna är tillgängliga för alla. Men det finns några trevliga extrafunktioner (AI-stöd, några bonusprojekt, livesändningar, bakom-kulisserna-innehåll, osv.) som människor kan få tillgång till mot en liten månadsavgift (9,99 USD, justerat efter plats med hjälp av [Purchasing Power Parity](https://en.wikipedia.org/wiki/Purchasing_power_parity)). Det är ett belopp som är överkomligt för de flesta människor i världen, så om folk antingen vill stödja det vi gör, eller vill ha tillgång till de funktionerna, är det ett jättebra sätt att börja på.

## Sen kom agentic coding

Precis när jag var redo att lansera dök Claude Code och dess vänner upp och förändrade programmering för alltid. Jag ägnade lång tid åt att undra om jag ens skulle lansera Jiki – om programmering ens var relevant längre. Men 6 månader senare är jag mer övertygad än någonsin: koden är här för att stanna, och programvaruutvecklare är mer värdefulla än någonsin.

I årtionden har kod varit verktyget vi använder för att skapa, men det har också varit grindvakten. Du kunde inte syssla med datavetenskap innan du hade bemästrat Python, kunde inte göra webbplatser innan du lärde dig JavaScript, kunde inte arbeta med databaser innan du pluggade SQL. Nu har det förändrats. Claude, ChatGPT och många andra verktyg kan skriva den koden åt dig.

Men, och det här är det stora menet, människor är lika nödvändiga som någonsin för att designa programvara, för att fatta kloka tekniska beslut, för att forma en vag idé till något tillräckligt precist att bygga. Det är vad programvaruutveckling alltid har handlat om: konsten att förvandla idéer till verklighet. Vi behöver bara inte längre göra kodskrivningssteget själva.

Så Jiki lär ut båda. Den lär ut grunderna i programmering, för du behöver fortfarande förstå vad din AI gör. Men den lär dig också hur du bygger: hur webbplatser fungerar under huven, hur man designar databaser, hur man arkitektera programvara. Allt du behöver för att faktiskt skapa saker. Om du vill få ett jobb inom techbranschen är det här sakerna att bemästra. Och om du bara vill skapa saker, kommer detta att lära dig hur du gör det på ett sätt du förstår, som inte bara förvandlas till spagettikaos.

## Vad Jiki är och vart jag vill att det ska ta vägen

Jiki är en lär-dig-koda-plattform, utformad för att vara mycket interaktiv och rolig. Den är gjord för nybörjare – människor som har kodat i mindre än ett år och vill få riktigt stabila grunder på plats. Du lär dig genom att bygga projekt i en anpassad miljö som är specifikt utformad för att hjälpa dig förstå vad som händer.

Sakerna är strukturerade i nivåer. I varje tittar du på en kort video som lär ut ett nytt begrepp, och sedan har du en serie projekt där du får använda det. Kärnan i lärandet är Jiki, en figur som kör din kod. Allt jag lär ut sker genom Jikis ögon – hur han ser din kod, hur han kör den. När du kör din kod kan du se exakt vad Jiki ser – varför han gör som han gör.

Men mer än funktionerna är det filosofin bakom som jag verkligen bryr mig om. Alla behöver inte bli programvaruutvecklare, men förståelse för hur man bryter ner problem och bygger lösningar är en färdighet som överförs till allt. Och det är nyckeln till kursen – att sakta ner och verkligen tänka djupt på hur man löser problem. Det är riktigt svårt i början (vi lever i en dopamindriven era!) men det är en fantastisk färdighet när det väl klickar.

Jag har inga storslagna ambitioner för Jiki att ersätta någon av de andra plattformarna där ute. Jag är absolut inte intresserad av att konkurrera med någon annan, och bortom grunderna tror jag att det finns massor av bra innehåll. Det jag vill se i världen är en plattform som gör att så många som möjligt kan få riktigt stabila grunder och ha jättekul när de lär sig dem. För när du har de grunderna blir det **så** mycket lättare att lära sig allt annat. Det är Jikis mål, och jag är riktigt taggad på att sätta det i världen.

## Testa själv

Jag skulle älska om du **[testade Jiki](https://jiki.io/auth/signup)** och såg vad du tycker.

Om du är relativt ny på programmering (eller helt nybörjare), hoppas jag att du verkligen kommer att njuta av att lära dig från detta. Jag skulle älska att veta var du kör fast eller blir frustrerad – den feedbacken är ovärderlig för att göra det bättre.

Om du är en etablerad utvecklare, vill jag vara ärlig: det här är inte designat för dig. Det kommer antagligen att kännas ganska grundläggande och långsamt. Men tro mig, för nybörjare känns det snabbt och intensivt! Jag skulle ändå älska om du testade och gav mig feedback. Dina erfarna ögon kommer utan tvekan att upptäcka saker som nybörjare inte skulle tänka på att nämna. Och om du känner någon som har funderat på att lära sig programmera, skulle jag verkligen uppskatta om du delade Jiki med dem. Den mun-till-mun-spridningen betyder allt!

Om du tror på det vi gör och vill stödja uppdraget ekonomiskt, skulle jag vara oerhört tacksam för ditt stöd. Om du är en Exercism-medlem kan du **[donera här](https://exercism.org/donate)**. Om inte, använd gärna **[denna Stripe-donationssida](https://donate.stripe.com/8x2fZh1jK7XD5O94fS8g11g)**. Att bygga något sådant här tar enormt mycket tid och resurser, och varje bit stöd hjälper oss att fortsätta.

Tack för att du läste 😁
