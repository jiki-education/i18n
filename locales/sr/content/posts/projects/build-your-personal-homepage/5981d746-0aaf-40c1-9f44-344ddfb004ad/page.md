---
title: "Epizoda 1: Osnove agentskog programiranja"
excerpt: "Ovaj projekat počinjemo detaljnim uvodom u agentsko programiranje. Šta su LLM-ovi i agenti, kako funkcionišu modeli i trud, kako da sve podesiš besplatno uz OpenCode i kako da napraviš svoju prvu veb-stranicu."
summary:
  from: "Pretpostavljamo da ne znaš ništa o vebu ni o agentskom programiranju."
  to: "Razumeš petlju agentskog programiranja i praviš svoju prvu, sasvim osnovnu početnu stranicu u pregledaču."
  keyConcepts: ["Agentsko programiranje", "Modeli i trud", "Tokeni i kontekst", "Osnove HTML-a"]
seo:
  description: "Saznaj šta je agentsko programiranje, kako funkcionišu LLM-ovi, modeli i tokeni, i napravi svoju prvu veb-stranicu uz OpenCode."
  keywords: ["agentsko programiranje", "llm", "html", "početnici"]
en_md5: 179b6fdc5bf4a07aac6f6fb60589af30
---

## Uvod

Dobro došli u prvu epizodu ove nove serije u kojoj gledamo kako da koristimo agente i kako da uz LLM-ove pravimo stvari u ovom modernom dobu, kada se programiranje toliko promenilo. Tokom godina smo održali mnogo ovakvih sesija za Exercism, ali ovo je prva zvanična Learn to Build sesija uživo za Jiki.

Da objasnim šta će ova serija biti, šta ćemo konkretno raditi danas, šta ćemo pokriti tokom cele serije i za koga je sve ovo. Počeću od tog poslednjeg pitanja.

## Za koga je ovo

Ovo je zapravo za dve grupe ljudi. Prva su oni kojima je programiranje potpuno novo, kojima je ceo ovaj svet nov, koji samo žele da počnu i da shvate kako da krenu da uče. Ali ovo je i za ljude, možda mnogo iskusnije, čak i za senior programere, koji još nisu zaista zakoračili u promene koje donosi agentsko programiranje, a žele da saznaju šta se dešava, da vide neke stvari u praksi, da o njima diskutuju i da steknu pravo razumevanje svega toga. Dakle, možeš biti bilo gde na tom spektru, od prvog dana programiranja (možda ti je jutros palo na pamet da programiraš, naišao ti je Jiki i evo te ovde) pa sve do nekoga ko je zaista iskusan.

U ovoj konkretnoj seriji (a biće ih više) pretpostaviću da ne znaš ništa. Ako imaš mnogo iskustva kao programer, reći ću gomilu stvari koje znaš kao svoj džep, i to ti može biti pomalo dosadno. Ako ti je ovo prvi dan, ne bi trebalo da postoji ništa za šta pretpostavljam da već znaš. Možda će ti poneka stvar biti nejasna, ali ovu sesiju vodim kao da je baš za tebe. A ako imaš iskustva, ali ti je ovakav način programiranja još nepoznat, i dalje će ti biti korisno.

Provešću te malo kroz to šta znači ovako programirati. Pokazaću ti par primera stvari koje baš sada moram da sredim u Jikiju i popraviću ih, čisto kao uvod. Zatim ćemo proći kroz neke pojmove koje koristimo i kroz to kako sve to funkcioniše zajedno. A onda ćemo zapravo nešto i napraviti. Napravićemo novu početnu stranicu.

Ovo je nešto na šta želim da podstaknem svakoga. Napravi sebi novi sajt. Može to biti tvoja početna stranica. Može biti nešto drugo. Možda samo CV u kodu, biografija u kodu, bilo šta. Posle ove sesije primeni u praksi ono što ovde vidiš i isprobavaj stvari.

Koristiću Claude i neke naprednije stvari, ali ću ti pokazati i kako sve ovo da radiš ako nemaš novca da potrošiš na to. Ako želiš da radiš sa agentima besplatno, i to ćemo pogledati.

### Šta treba da pripremiš unapred?

Apsolutno ništa. Samo se pojaviš. Ja ću ti sve objasniti, a zatim ću objaviti seriju vodiča koji idu uz ovo. Vodiče o tome kako da instaliraš OpenCode, koji ćemo gledati, vodiče o raznim pojmovima vezanim za LLM-ove i kako oni funkcionišu, i vodič o tome kako da koristiš GitHub, o kome ćemo takođe pričati. Moći ćeš da provedeš par dana nadoknađujući gradivo i prolazeći kroz njih.

Ako imaš pitanje na koje ne odgovorim u ovoj epizodi, uvek možeš da odeš na forum na [forum.jiki.io](https://forum.jiki.io) i da ga postaviš tamo. Ja sam tamo. Tamo su i drugi iskusni programeri i drugi ljudi koji prate serije, i oni takođe mogu da odgovaraju na pitanja.

## Kako uočiti greške koje LLM-ovi prave

Skočiću na Jikijev forum, na nešto što sam primetio malo ranije. Ovo su različite teme vezane za prevođenje, i primetićeš da većina njih ima zastavu pored imena zemlje. Holandska zastava, nemačka zastava. Pored turskog imamo ćurku (na engleskom se i ćurka i Turska kažu „turkey“). Verovatno pomalo rasistički. Verovatno ćemo morati to da rešimo za minut. Ali ono što sam ja video je indonežanska tema. Ceo ovaj izbor emodžija napravio je Claude. I ovde je očigledno samo izmislio emodži, ili uzeo emodži koji ne radi.

![Jikijev forum sa temama o prevođenju. Pored turskog stoji emodži ćurke umesto zastave, a pored indonežanskog pokvaren emodži :garuda:.](/images/projects/build-your-personal-homepage/setting-up-the-project/forum-language-flags.webp)

Odavde želim da počnemo, jer je ovo stvarno. Video sam ovo dva minuta pre nego što sam se uključio u strim. Ovakve stvari ćeš često viđati dok radiš sa ovim LLM-ovima i agentima. Oni izmišljaju stvari. Misle da ovde postoji emodži, a on ne radi na ovom sajtu. Trebalo je da stave zastavu Turske, a umesto toga su stavili pravu pravcatu ćurku.

Ovo su greške koje su nama, ljudima, sasvim očigledne. Odmah ih vidimo. Bodu oči. Malo se nasmejemo. Ono što brine su iste odluke koje LLM donosi ovde. A ovo je najmoćniji model. Ovo je Fable. To je model koji je toliko inteligentan i opasan da ga je vlada SAD zabranila. Pa ipak i dalje stavlja ćurku umesto turske zastave i ne mora nužno da zna da bi to nekoga moglo da naljuti. Naravno, možda samo ima sjajan smisao za humor. Nisam siguran.

Ovo su vidljive stvari koje su očigledne. Zamisli koliko drugih sitnih grešaka, ili da kažemo loših odluka, ovi LLM-ovi prave ispod haube. Kako budemo radili ove strimove narednih godinu dana, ili mnogo godina, LLM-ovi će se poboljšavati. Ali ono što želim da znaš odmah, i što želim da zaista usvojiš, jeste da ovo nisu nekakvi bogovi programiranja kojima možeš samo da predaš stvari i koji će sve uraditi tačno. Oni stalno prave greške. Neke su očigledne i smešne, a neke nisu. Ako želiš da budeš moderan programer, veliki deo tvog posla je da tražiš te greške. I pod tim ne mislim da tražiš kada stave ćurku umesto turske zastave. Mislim na to da tražiš konceptualne greške koje prave, ideje, stvari koje smisle, a koje ti jednostavno ne deluju baš kako treba i nemaju baš smisla.

### Šta znači i18n?

Znači internationalization, odnosno internacionalizacija. Broj 18 je broj slova između i i n u toj engleskoj reči. To je skraćenica.

## Agentsko programiranje u malom

Hajde da pogledamo kako izgleda malo agentskog programiranja. Uzmimo onaj pojmovnik za indonežanski sa pokvarenim emodžijem. Napraviću snimak ekrana, preći u svoj terminal i otvoriti Claude Code. Malo kasnije ćemo pričati o tome kako se sve ovo podešava. Sada ti možda deluje pomalo zastrašujuće, sve to crno i zeleno, ali doći ćemo do svega.

Ono što želim da ti pokažem je sledeće. Mogu da prevučem sliku unutra i da napišem „popravi pogrešan emodži“. I on će sada krenuti, razmišljaće i uraditi gomilu stvari. Možemo da pogledamo deo onoga što radi. Pokreće komande. Pokušava da shvati šta se dešava. Zašto je ova zastava pogrešna? Šta ova zastava znači? Kako je do ovoga došlo? Sada počinje da čita neke skripte. Ovo je skripta za pravljenje kategorije jezika na forumu, skripta koju je pokrenuo kada je napravio tu kategoriju. Sada pregleda istoriju svega što je uradio i pokušava da shvati kada je ovo pošlo naopako, kako je pošlo naopako i zašto. Čita razne fajlove. Pokreće razne komande. Vidiš kako ovo raste, pokreće svoju četvrtu komandu i tako dalje.

![Claude Code u terminalu radi na zadatku „Fix the incorrect emoji“, traži šablone, čita fajlove i pokreće komande u šelu.](/images/projects/build-your-personal-homepage/setting-up-the-project/claude-code-fixing-emoji.webp)

A onda kaže da je pronašao problem. Ispravan emodži treba da bude zastava Indonezije, a ne `:garuda:`. Kreće dalje, pokreće nešto što ažurira kategoriju. I ako sada pređemo na forum i otvorimo ovo, vidiš da je popravio. Sada imamo indonežansku zastavu.

![Tema „Glossary for Indonesian“ na forumu, sada sa ispravnom zastavom Indonezije.](/images/projects/build-your-personal-homepage/setting-up-the-project/indonesian-flag-fixed.webp)

Dakle, ovo je agentsko programiranje u malom. Rekli smo „uradi ovu jednu stvar“. On je krenuo. Pokrenuo je razne komande. Pročitao je neke dokumente. U pozadini radi sve te veoma komplikovane stvari, neki bash koji izgleda komplikovano i koji bi bilo veoma mukotrpno napisati. Osim ako održavaš Exercism, u kom slučaju je to vrlo lako. Ali nama, običnim smrtnicima, to je možda malo komplikovano za pisanje. Pregledao je sve pokušavajući da shvati kada je ovo pošlo naopako. Pročitao je istoriju fajlova. Našao je unos za indonežanski i neke logove. Pročitao je pravila koja sam mu zadao, našao neke promenljive koje mu omogućavaju da ažurira forum, shvatio šta nije u redu, vrlo kratko to prodiskutovao sa mnom i otišao da ažurira tu stvar.

Ovako sam napravio Jiki. Ovako radi mnogo modernih programera, rekao bih verovatno većina programera koji danas rade. Nalazimo ovakav problem. Uočimo ga. Možda stigne kao tiket od nekog drugog. A onda ga predamo nečemu kao što je Claude, ili nekom od mnogih drugih modela koji postoje (i do svega toga ćemo doći malo kasnije). Oni prođu kroz ovaj složeni proces od više koraka i onda poprave bag.

E sad, ovaj bag je očigledno veoma lak. U pitanju je jedna stranica. Ima pogrešan emodži. Treba da ima ovaj emodži, a ima neki drugi. Zato može prilično brzo da ga popravi. Ali ceo ovaj tok zaista dolazi do izražaja kada ne pokušavamo samo da popravimo jednu sitnicu. Kada pravimo novu funkcionalnost ili debagujemo nešto zaista komplikovano. To znači čitanje stotina fajlova, a zatim i pisanje u neke fajlove.

## Pametno sa troškovima

Pre nego što uzmemo drugi primer, da ti pokažem jednu stvar. Ovde mogu da otkucam `usage`, a usage nam pokazuje šta se dešava ispod haube. Vidiš da je Claude-u za ovo trebalo 52 sekunde od početka do kraja i da je to koštalo 37 centi. E sad, ja sam na Claude Max planu, što znači da imam veoma veliku kvotu za razne modele. Zato mi se tih 37 centi ne naplaćuje. To je jednostavno uključeno u moju mesečnu pretplatu.

![Ekran potrošnje u Claude Code-u sa ukupnim troškom od 0,38 dolara i 52 sekunde API vremena za popravku emodžija.](/images/projects/build-your-personal-homepage/setting-up-the-project/claude-code-usage.webp)

Ali ovo je nešto čega želim da budeš svestan odmah, čim počnemo da pričamo o ovome. Taj proces razmišljanja i rešavanja koštao je 37 centi. Da sam hteo, mogao sam samo da odem na forum i sam izmenim temu. Mogao sam da izaberem emodži, otkucam Indonesia i kliknem na zastavu. To me ne bi koštalo 37 centi. Ako zamisliš svaku pojedinačnu stvar koju radim kao programer, koliko god sati dnevno programiramo, verovatno želimo da budemo donekle pametni u vezi s tim za šta koristimo ovu super moćnu inteligenciju, a šta možemo jednostavno da uradimo ručno.

Ovo posebno važi za one od vas koji ne plaćaju Claude Max pretplatu i nemaju mnogo novca. Pokazaću ti kako da sve ovo radiš besplatno. Ali kada si na besplatnim planovima, imaćeš ograničenu količinu korišćenja. Ta ograničena količina je prilično velika. To je sve što ti treba. Ali želim da usvojiš način razmišljanja u kom tu kvotu ne trošiš na stvari koje možeš da uradiš ručno. Mnogo je bolje da sam istražiš, shvatiš šta se dešava, usput nešto naučiš i onda popraviš tu stvar. To je najbolji način da učiš. Ako počneš sve na ovo da bacaš, bićemo u nevolji.

Da ti pokažem još jednu stvar. Ovo ti pokazuje tvoju mesečnu potrošnju. Ovo je moj prošli mesec. Kao što rekoh, ja sam na Claude Max planu, pa jednostavno plaćam fiksnih 200 dolara mesečno. Ali da nisam na Claude Max planu, da ovo plaćam direktno, ovaj mesec bi me koštao 35.000 dolara. Ovog meseca sam potrošio tri milijarde tokena. Za minut ćemo pričati o tome šta su tokeni. Ali vrlo brzo možeš da nakupiš velike račune.

![Tabela u terminalu sa dnevnom potrošnjom tokena po modelima, sa milijardama tokena potrošenih na Fable, Opus, Sonnet i Haiku.](/images/projects/build-your-personal-homepage/setting-up-the-project/monthly-token-usage.webp)

### A šta je sa Ollamom i drugim lokalnim modelima?

Oni rade. Ako imaš dovoljno moćan računar na kome možeš da pokrećeš lokalne modele, dobar MacBook ili dobru Windows mašinu sa dobrim grafičkim procesorom, možeš da pokrećeš modele na svom računaru umesto da šalješ podatke Claude-u i da ti Claude šalje podatke nazad. Međutim, biće mnogo, mnogo sporije. Ono što smo upravo gledali, a što je trajalo 52 sekunde, trajaće umesto toga 5 minuta ili pola sata. Čak i na najsavremenijoj mašini, pričamo o 10, 20, 30 puta sporijem radu nego sa Claude-om ili nečim drugim.

### Zar nije ponekad jeftinije zaposliti junior programera nego plaćati LLM?

Pošto imam Claude Max pretplatu, koja je 200 dolara mesečno, ukupan trošak svega ovoga za mene je 200 dolara mesečno. Junior programer će koštati deset puta više. Ali takođe, obično imam možda šest ili sedam Claude-ova koji rade istovremeno. Pa ako je ovaj Claude dobar kao junior programer, ja imam šest ili sedam takvih junior programera koji rade u različitim tabovima u isto vreme i rade različite stvari. Jednostavno više ne postoji ekonomija u kojoj ima ikakvog smisla da neko ovaj kod piše ručno.

Ali tamo gde možeš da imaš koristi, gde ti kao junior ovde možeš da postaneš vredan, jeste to da, ako kao junior možeš da pokrećeš šest ili sedam Claude-ova odjednom i da sa njima radiš jednostavnije, osnovnije zadatke, onda ćeš firmi doneti ogromnu vrednost. Moj ukupni kapacitet kao programera je verovatno pet ili šest odjednom, i dalje provodim mnogo vremena razmišljajući i čitajući. Svako će dostići taj plafon ako ovo radi kako treba, tako da razmišlja o tome šta se dešava. Zato, ako danas želiš da uđeš u IT industriju, vrednost ćeš doneti tako što ćeš naučiti kako da upravljaš ovim Claude-ovima, ovim drugim modelima, ovim LLM-ovima, ovim agentima, i kako da im daješ promptove, da ih osnažiš i da pregledaš njihov rad na razuman i moćan način.

## Pokretanje novog jezika

Dakle, to je naša polazna tačka. Sada znaš ponešto o tome kako ove stvari rade. Pokrenuću još jedan ovakav zadatak dok pričamo. Jedna od stvari koje sam napravio je komanda bootstrap language za prevođenje Jikija na različite jezike. Brazilski portugalski je već pokrenut na forumu, ali želim da pokrenem evropski portugalski. Samo ću kliknuti na pokretanje, a onda ćemo malo pogledati.

Ovo radi tako što ode i napravi informacije, vodič, pojmovnik i druge stvari da bismo mogli da prevedemo sajt na portugalski. Na forumu možeš da vidiš onaj za turski. To je pojmovnik koji je napravljen, sa svim pojmovima koje prevodimo na turski.

Ovaj agent sada kreće i uradiće mnogo posla da bi ovo bilo kako treba. Pokrenuće druge agente. Imamo jednog glavnog agenta koji je zadužen za ovo. On će poslati druge agente da istraže ispravne portugalske termine. Poslaće ih da pogledaju Mozillinu i Microsoftovu dokumentaciju da vide koji se termini koriste. Verovatno će pogledati Duolingo i još neke sajtove. A onda će mi se javiti sa gomilom informacija o onome što je našao i postaviti mi neka pitanja.

Dok on to radi, želim malo da pogledam komandu koju sam upravo pokrenuo, Bootstrap Language. Ovo je ono što Claude radi. Ovo su instrukcije koje Claude prati. Na vrhu imamo malo stvari koje su samo informacije za Claude o tome kako da ovo pokrene. A sve ostalo su informacije koje ti ili ja možemo da pročitamo i koje objašnjavaju šta se dešava.

Kažemo Claude-u da pokrene novi jezik. Kažemo mu da mora da istraži kako se taj jezik piše, da dogovori odluke koje samo ja mogu da donesem, da pogleda ove vodiče i da kao osnovu koristi mađarski, prosto zato što smo na njemu prvo radili. Aron, koji je ovde frontend programer, je Mađar. A onda imamo čitav niz faza kroz koje prolazi. Neke provere koje radi. Vidiš da prvo kažemo: proveri da li ovaj jezik već postoji. Ako postoji, stani i prijavi. I vidiš da prvo što uradi jeste da kaže: „Počeću tako što ću proveriti da li jezik postoji.“ Provera prolazi, jezik ne postoji, ide dalje.

Zatim ima neke fajlove koje ode i pročita. Čita ovaj fajl sa pravilima, ovaj fajl o tonu i još neke informacije, i sve to učitava praktično u svoju memoriju. Malo kasnije ćemo pričati o tome šta to zapravo znači. Dakle, sada su sve ove informacije tu, svi ovi veliki dokumenti koje sam napisao, sa pravilima, sa tim kako govoriti pravim tonom i svim tim stvarima.

A onda radi ovo istraživanje. Ima razna pravila koja sam mu zadao. Izbegavaj sadržaj zagađen LLM-ovima. Ne želim da ide i čita gomilu sadržaja koji su već napisali drugi LLM-ovi. Želim da zaista gleda samo stvari od pre 2022, i da proveri datume tog sadržaja pre nego što ga upotrebi. Proverava podatke u više izvora. Kažem mu da bude sumnjičav, da mu bude prijatno sa neizvesnošću, i onda da traži razne stvari. Koje metafore ljudi koriste? Koliki je nivo formalnosti i koji je registar? A onda će sve to složiti u neku strukturu, stati i prodiskutovati sa mnom. Objasniće šta je našao, postaviti mi neka pitanja i predložiti neke ključne termine. A onda, kada se oko njih složim, kada ih prodiskutujemo, otići će i napisati pojmovnik i vodič, sklopiti to i zatim napraviti objavu na forumu. Ima mogućnost da uđe na Jiki forum i napravi tu objavu, a onda će napraviti i objavu sa pojmovnikom. To su dve odvojene objave.

Dakle, ovo je komanda koju sam napravio i koju on onda može da prati. I vidimo kako u pozadini neumorno radi. Evo, sada javlja rezultate svog istraživanja. Ovako bi trebalo da se obraća polaznicima: treba da koristimo neformalno „tu“, što je topao, uobičajen način obraćanja polaznicima, a ne onaj drugi, formalni ton. A onda traži da donesem neke odluke. Da li mi ovo odgovara? Da li treba da koristi iste konvencije kao za Brazil? Daje mi neke termine koje je izabrao. I u ovom trenutku mogu da sve pregledam i kažem: u redu, zadovoljan sam svim ovim odlukama, zadovoljan sam tvojim podrazumevanim izborima. I on će onda nastaviti.

![Claude iznosi rezultate istraživanja za evropski portugalski, uključujući izvore i odluku da se koristi neformalno „tu“.](/images/projects/build-your-personal-homepage/setting-up-the-project/portuguese-research-findings.webp)

### Da li su komande i skilovi ista stvar?

Da, isti su. Sve LLM kompanije imaju različita imena za sve ove stvari.

## Agenti i modeli

Želim da na sekund stanemo i razmislimo o tome šta se ovde dešavalo, jer je ovo pravi ključ za razumevanje razlike između toga kada otvoriš aplikaciju Claude ili ChatGPT i pričaš sa njom, i toga kada koristiš ovakvo agentsko programiranje.

Kada pričaš sa Claude-om u korisničkom interfejsu, postavljaš pitanje i praktično imaš jednog agenta sa kojim pričaš, koji možda ode da nešto proveri, a onda se vrati i nastavi da piše. To je baš razgovor između tebe i jedne osobe, jednog agenta. Kada radiš u ovom modelu agentskog programiranja, ispod haube se dešava to da pokrećemo mnogo agenata da rade različite stvari. Imaćemo agente koji istražuju, agente koji planiraju, agente koji grade. A možemo da pravimo i sopstvene agente. Agente koji možda testiraju stvari na određene načine, agente koji možda proveravaju da li stvari odgovaraju određenim standardima. I često je agent sa kojim razgovaramo onaj koji upravlja svim ostalim agentima.

Ti agenti mogu da koriste različite modele. Zato je ovo dobar trenutak da pričamo o modelima. Ovaj termin sigurno često čuješ. Verovatno imaš dobru predstavu o tome šta su modeli, ali ukratko ću objasniti.

Različite kompanije, kao što su OpenAI ili Anthropic, imaju različite modele, a modeli su osnovni mehanizam pomoću kog LLM radi. To je nešto što je trenirano na određenoj količini podataka da radi određenom brzinom. Takozvani frontier modeli su najbolji modeli koji postoje. Kod Anthropica je to trenutno nešto što se zove Fable, ili Mythos. Oni su sporiji, skupi su, ali su veoma moćni. Na sasvim drugom kraju je Haiku, koji je mnogo brži model. Otprilike 50 puta je jeftiniji za pokretanje, mnogo je brži, ali ne rezonuje tako dobro. A onda imaš Sonnet i imaš Opus. Dakle, imaš ova četiri modela, i svi različiti provajderi imaju ovakve različite modele. Neki od onih zaista vrhunskih su super inteligentni. Neki su mnogo manje inteligentni, ali mnogo brži.

Za osnovni zadatak, recimo zadatak koji smo upravo gledali, tipa zašto je ova zastava pogrešna, neće biti nikakve razlike u performansama između Haikua i Fablea. Ali ako za to upotrebiš Fable, potrošićeš 50 puta više novca. Zato je jedna od stvari kojih uvek želimo da budemo svesni koji model odgovara zadatku. Time sve ostaje zaista brzo, kvalitet ostaje na nivou koji nam zaista treba, a troškovi ostaju niski, što je takođe važno.

Kada pokrećeš jednog agenta koji onda pokreće više drugih agenata, i oni stalno donose tu odluku. Ako pokreću agente da rade jednostavne stvari, koristiće slabije modele. Ako pokreću agente da rade veoma složene stvari, pokrenuće Fable.

## Trud

Imamo i koncept truda. Trud je to koliko je model spreman da se potrudi. Pa šta trud znači? Ovi modeli rade tako što pričaju sami sa sobom. Vode dug, neprekidan razgovor. To verovatno poznaješ ako koristiš Claude ili ChatGPT, gde možeš da vidiš opcije „show thinking“ i da vidiš kako model odgovara sam sebi. Ono što rade je rezonovanje: ispisuju ono što misle da se možda dešava i onda nadograđuju na to.

Kada pričamo o trudu u svetu Claude-a, a i drugih alata, pitamo koliko dugo treba da pričaš sam sa sobom pre nego što se vratiš sa odgovorom. Mali trud znači: nemoj baš da pričaš sam sa sobom, samo nam daj prvo što ti padne na pamet. Veliki trud znači: pričaj sam sa sobom mnogo. A dobra strana velikog truda je to što će Claude praktično reći prvo što mu padne na pamet (loša je analogija, ali prvo što smisli), ali će onda o tome ponovo rezonovati, da vidi da li ima smisla ili ne. Zatim će dodati treći sloj, pa će rezonovati o celoj toj stvari i videti da li ima smisla ili ne. Pa će dodati četvrtu stvar. Nastaviće da rezonuje o onome što govori dok ne dođe do tačke kojom je zadovoljan, ili u koju je ubeđen. Dok će ti na malom trudu odgovoriti odmah. I to može biti pogrešno, a ne mora. Nije imao nikakvu proveru svog razmišljanja.

Dakle, imamo ove dve ose. Imamo kvalitet modela: Fable, Opus, Sonnet, Haiku. I imamo količinu truda koju će taj model uložiti: mali, srednji, veliki, ekstra veliki. I može dalje od toga. Provajderi često naplaćuju više što dalje ideš.

U Claude Code-u možemo da promenimo model samo tako što otkucamo `/model`, i onda možemo da biramo između Opusa, Fablea, Sonneta i Haikua. I možemo da biramo trud: low, medium, high ili max, sa nekim svetlucavim max opcijama, i ultracode, gde dobijamo neke prelepe animacije u koje su ljudi uložili gomilu truda.

Obično se držim Opusa na srednjem trudu kao standardnog modela koji koristim za većinu stvari. Za većinu onoga što radim želim da nešto poput Opusa može da promisli stvar, a srednji trud mi je pravi balans. Ali toga sam zaista svestan, i kada započinjem zadatke, razmislim koji model želim. Da li je ovo jednostavno ili teško? Koliko truda treba da se uloži u ceo ovaj proces?

### Kako da pratimo koji model je najbolji za koji zadatak?

To ćeš jednostavno naučiti vremenom. Lako pravilo je da se zapitaš koliko je to teško tebi. Da li je ovo baš lako? Da li je kao menjanje zastave u objavi na forumu? To je baš lako. Haiku to može da uradi sa malim trudom. Da li tražiš od njega nešto što ti deluje neverovatno složeno? Posegni za boljim modelom ili većim trudom.

Fable je neverovatan za zadatke koji dugo traju. Da ti dam primer: juče sam imao otvorenu jednu sesiju u kojoj sam uzeo sve video snimke koje imamo (u nekom trenutku ću pričati o tome kako sam pravio video snimke) i izvukao sav engleski tekst iz njih. Sav engleski tekst koji je napisan na ekranu izvukao sam iz video snimaka i postavio kao sloj preko njih, tako da onda mogu samo da ga promenim na drugi jezik i ponovo eksportujem video snimke sa drugim jezikom na ekranu.

To sam dao Fableu da uradi. Pokrenuo sam ga na zadatku. Naterao sam ga da pokrene po jednog Fable agenta za svaki video, tako da mi je radilo 32 Fablea. Svaki od njih je prošao kroz svaki deo videa tražeći tekst. Pravili su snimke ekrana, zatim ažurirali slike i uklanjali tekst sa njih. Onda su utvrdili kojim fontom je tekst bio napisan, koja je veličina fonta, debljina fonta, razmak između slova, razmak između redova, kerning, sve te stvari za varijabilne fontove. Zatim su ispisali taj tekst na ekranu na pravom mestu, a onda iznova pravili snimke ekrana i poredili ih dok se dva snimka nisu poklopila do piksela. Imao sam jedan Fable koji je sve isplanirao, istražio, pregledao i napisao nešto dokumentacije, a onda sam imao Sonnet koji je sve orkestrirao i samo pokretao nove Fableove da odrade sve te poslove. Trajalo je oko tri sata. Koštalo je oko 400 dolara. Opet, bilo je u okviru moje Max pretplate, ali bi inače koštalo oko 400 dolara. I u suštini je sve video snimke dovelo u stanje u kom su spremni.

U takvoj situaciji sam znao da je to prilično složen zadatak. Ranije sam pokušao da to uradim sa Opusom i Opus nije mogao. Bilo je previše složeno za Opus, pa sam znao da je potreban Fable.

### Da li su frontier modeli kao vodeći pametni telefoni?

Da, upravo tako. Pametniji su, bolji su, ali su i skuplji i uglavnom sporiji. I moraš da imaš na umu da je današnji frontier model kao jeftini model za godinu dana. To već sada važi. Haiku je ekvivalentan prošlogodišnjem frontier modelu. Dakle, Haiku je već dovoljno dobar za mnogo programiranja, iako je jeftini model na drugom kraju. Taj skupi model ti treba samo ako zaista radiš nešto što je bilo nemoguće na prethodnom modelu, kao što je Opus. Za frontier modelom zaista želiš da posegneš samo u određenim situacijama.

### Za nekoga ko je ekspert, zar nije frustrirajuće da plaća programiranje umesto da ga sam radi?

Plaćam 200 dolara mesečno. Iako je to značajna svota novca, to je malo novca za količinu dodatne produktivnosti koju donosi. Mislim da sada dolazim do tačke u kojoj sam bar upola produktivniji nego pre. Moj učinak je jedan i po put veći nego što je bio. Ne znam kolika bi mi bila plata na otvorenom tržištu, jer nikada nisam imao posao, ali pretpostavljam da mi ovo štedi čitavo bogatstvo, ako je to merilo. Tako da je 200 dolara jeftino. Da moram da plaćam 2.000 dolara mesečno za ovo, verovatno mi se ne bi isplatilo.

Da li je često super frustrirajuće? Jeste. Ali shvatio sam da me to jednostavno podiže na viši nivo apstrakcije. Pre je postojalo mnogo programiranja koje sam morao da radim, a koje mi je bilo zaista dosadno. Možda je zaista zanimljivo za juniora ili za nekoga na srednjem nivou, ali meni je bilo super dosadno. Sada ne moram to da radim, i ne moram da imam juniora ili nekoga sa srednjeg nivoa kojim upravljam. Mogu to da završim zaista lako, bez drugih ljudi kojima treba da upravljam, što znači da sam i dalje slobodan da budem produktivan na druge načine. Tako da mi se ukupna korist isplati.

Ali mislim da je mnogim programerima ovo mnogo manje zabavno, mnogo manje prijatno nego što je bilo. To je takođe jednostavno realnost sveta. Nemamo izbora. Možda neki ljudi na nekim poslovima imaju luksuz da ovo ne rade. Ako premotaš 10 godina unapred, mislim da taj luksuz neće imati mnogo ljudi. Zato, ako želiš da se osiguraš za budućnost, ili želiš da napreduješ u industriji, mislim da je tajna u tome da postaneš dobar u ovome.

## Dozvole i automatski režim

Da se vratimo na zadatak prevođenja, on je sada završen. Sada imamo neke fajlove koji su komitovani. Ako se vratimo na forum, videćemo da li ima nove objave. Aha, to je zanimljivo. Objavljivanje na javnom forumu je blokirano, jer sam ovo stavio u automatski režim.

Ovo funkcioniše tako što on pokušava da radi stvari, a onda drugi LLM prati šta radi i proverava da li te stvari izgledaju kao nešto što sam izričito rekao. Čim šalje podatke na druge sajtove, ili radi bilo šta slično, potrebno je da ja izričito kažem da se slažem s tim. A pošto sam ga ostavio u automatskom režimu, da samo neumorno radi, nije me pitao da li se slažem. Zato je to blokirano. Pita: „Da li želiš da nastavim i napravim tu objavu na forumu?“, ja kažem da, i sada će zaista otići i uraditi to. Ovo je jedna od stvari koje su se desile u poslednja dva ili tri meseca. Sada imamo nešto kao nadzorni LLM koji dozvoljava da se više stvari dešava automatski, ali pokušava da blokira rizične ili opasne stvari.

I sada, ako osvežim, evo ga. Sada imamo pojmovnik. Ovo su svi termini koje je pronašao i pročitao. Ovo je sve što je sklopio. I sada imamo objavu.

![Gotova objava „Glossary for European Portuguese“ na Jiki forumu, sa prevodima termina jedan po jedan i napomenama.](/images/projects/build-your-personal-homepage/setting-up-the-project/portuguese-glossary.webp) Ako govoriš portugalski, evropsku varijantu, možeš da uđeš ovde i da mi kažeš sve što ne valja, a onda možemo da počnemo da poboljšavamo pojmovnik i da radimo na njemu. Za one od vas koji govore druge jezike, imamo pojmovnike i u drugim verzijama, italijanskoj, turskoj i tako dalje. Sada znaš kako su napravljeni. Možeš i ti ovo da radiš.

## Claude Code, Codex i OpenCode

To je moj pregled iz ptičje perspektive kako ovo funkcioniše. Sada želim da ti pokažem kako to da podesiš za sebe.

Postoji mnogo različitih agenata i različitih alata koje možeš da koristiš. Zato hajde da budemo vrlo jasni oko nekih izraza. Claude Code, prozor u kom me upravo gledaš kako radim, je alat za agentsko programiranje, možda platforma za agentsko programiranje. Radi na tvom računaru. Obično radi u terminalu, tako sam ga ja podesio. Možemo da ga pokrećemo i u editoru koda, što ćemo pogledati za minut. I on je portal između tebe i modela. Pokazao sam ti da mogu da prebacujem između Opusa, Sonneta i Haikua, i da mogu da prebacujem između nivoa truda.

Sve se to dešava na tvom lokalnom računaru. Ti pričaš na svom lokalnom računaru. On šalje podatke Anthropicu, jednom od njihovih modela. Ono što oni šalju nazad nije samo malo teksta koji se pojavi na ekranu. Šalju nazad gomilu instrukcija koje Claude Code može da interpretira da bi nešto uradio. Kažu: idi i pokreni ovu skriptu na računaru te osobe. Idi i pogledaj u ovaj direktorijum na računaru te osobe. Idi na ovaj sajt ovde i uradi nešto. Sve te instrukcije stižu od Claude-a.

Dakle, mi ne vodimo razgovor sa Opusom, Sonnetom ili Haikuom. Mi ubacimo neki tekst. Taj tekst se pakuje zajedno sa gomilom drugih stvari. Pakuje se sa kodom iz našeg repozitorijuma, kodom koji smo mi napisali ili koji je tamo stavljen. Pakuje se sa celom istorijom razgovora, ciljevima koje pokušavamo da postignemo, našim sklonostima o tome kako volimo da radimo. Sve se to spakuje, a onda se sve to šalje Anthropicu. Njihovi modeli sve to čitaju i onda vraćaju instrukcije i nešto teksta. Sve se to obrađuje, i onda se dešava ova petlja, ova agentska petlja, u kojoj on nešto uradi, vrati se Claude-u, Claude se vrati i kaže: u redu, sad uradi ovo. Sve se to dešava daleko od nas. I onda na kraju nam kaže: u redu, sada smo gotovi. Nismo mogli da pošaljemo objavu na forum zbog ovoga. Da li želiš da nastavimo? Iza scene se dešava cela ova ogromna petlja.

Dakle, imamo dve odluke. Jedna odluka je koje modele želimo da koristimo. Da li želimo da u pozadini koristimo Anthropic, OpenAI ili druge modele? A druga odluka je sa kojim alatom želimo da radimo. Ako koristim Claude Code, uvek radim sa nekim od Anthropicovih modela. Ako koristim Codex, OpenAI-jevu verziju, uvek radim sa nekim od OpenAI-jevih modela, nekim od GPT modela.

Ono što ću ti preporučiti da koristiš je nešto drugo, što se zove OpenCode. OpenCode je, ako hoćeš, verzija Claude Code-a otvorenog koda, verzija Codexa otvorenog koda. To je okvir, alat koji stoji na tvom računaru, koji vrti celu tu petlju i koji svime upravlja. Ali može da razgovara sa bilo kojim modelom. Može da razgovara sa Anthropicom, sa Opusom ili Sonnetom. Može da razgovara sa GPT-5 i tim drugim stvarima. Ali može da razgovara i sa mnogo besplatnih modela. Sam OpenCode je besplatan, a ima i niz besplatnih modela koje možeš da koristiš.

Do OpenCode-a stižemo tako što smo u terminalu i otkucamo `opencode`, kada ga instaliramo. I možemo da biramo između mnogo modela. Možemo da izaberemo Gemini, koji je Googleov. Možemo da izaberemo Opus, o kome smo upravo pričali, ili Fable. Možemo da izaberemo Grok, ako želiš da podržiš Ilona Maska. GPT modele. DeepSeek, model koji je, kao što je poznato, potekao iz Kine. Qwen, veoma dobar za programiranje. I sve ove opcije na vrhu, koje su besplatne. Dakle, ako nemaš mnogo novca, ili samo želiš da ovo isprobaš, ili ti posao ne plaća pretplatu, možeš besplatno da nabaviš OpenCode i onda da izabereš neki od ovih besplatnih modela.

Imam vodič koji ću objaviti i koji objašnjava kako da instaliraš OpenCode, kako da ga besplatno podesiš i koje od ovih modela možeš da koristiš. Za sada preporučujem DeepSeek V4 Flash (free), ali ove modele uopšte nisam mnogo isprobavao, pa možeš sam da ih isprobaš i vidiš šta ti odgovara.

Jedna napomena: ovi besplatni nisu frontier modeli. Doduše, Big Pickle je tajni model, pa bi mogao biti frontier model, ne znamo. Ali ostali nisu frontier modeli. Nisu vrhunski, najbolji modeli. Biće više kao Haiku ili Sonnet, modeli nižeg nivoa. Ali za nivo na kom si sada, mislim da je to zaista dobra stvar. Jer koraci koje želiš da praviš su mali, bebini koraci, u kojima ne želiš da super inteligencija radi sve umesto tebe. Želiš nekoga sa kim možeš da radiš i razgovaraš, sa kim možeš da ideš korak po korak, da pitaš kako stvari funkcionišu i da učiš o njima.

## Tokeni i kontekst

Da ti pokažem OpenCode u translator repozitorijumu. On ne zna ništa o mom repozitorijumu. Ali mogu da kažem nešto poput „koliko jezika imamo do sada?“ i on će krenuti. Ovako izgleda OpenCode. Levo imamo deo u kom se priča. Dole levo imamo deo u koji kucamo. Kada radi, imamo deo desno. Možemo da pritisnemo Ctrl+P da dobijemo razne komande i stvari sa kojima možeš da se igraš. Vidiš da je ovo veoma brzo. Razmišljao je nekoliko milisekundi, pročitao neke stvari, izračunao ovo i vratio se sa 14 jezika. Ako nešto označiš, to se kopira u tvoj klipbord, što je zgodno.

![OpenCode u terminalu odgovara na pitanje „How many languages do we have so far?“, sa panelom konteksta desno koji pokazuje 10.054 potrošena tokena.](/images/projects/build-your-personal-homepage/setting-up-the-project/opencode-ui.webp)

Vidiš da je besplatno, pa nismo potrošili ništa. Ali želim da obratiš malo pažnje na brojeve desno. Neću detaljno objašnjavati kako LLM-ovi rade, jer je to zečja rupa u koju ne vredi da se spuštamo. Ali osnovna jedinica LLM-a je token. Token možeš da zamisliš kao slog. „How“ je verovatno jedan token. „Language“ je verovatno tri tokena: lang-u-age, tako nešto. „DeepSeek“ verovatno dva tokena. „V4“ verovatno dva tokena.

Kad god nešto otkucaš, on uzme ono što otkucaš, uzme sve što mu je potrebno da smisli odgovor i sve to pošalje modelu. Model to pročita, pošalje nazad, verovatno postavi pitanje da nešto razjasni, i to malo ide napred-nazad. Troši tokene. Pitali smo „koliko jezika imamo do sada?“. To je možda 11 tokena, možda 15 tokena sa razmacima. Dok je završio sa čitanjem, prikupio sve što mu treba, poslao to i napravio par krugova, potrošio je 10.000 tokena. Dakle, ovo je praktično poslalo esej od 3.000 reči modelu, a onda vratilo tek malo nazad.

Ako postavimo veće pitanje, recimo „kakav je proces dodavanja novog jezika?“, on krene i čita još fajlova, i vidiš kako broj tokena raste dok čita. To je dodalo još 6.000 tokena da bi se odgovorilo na pitanje, i sada je potrošeno 10% našeg konteksta. Kontekst ovog modela, najveći broj tokena koji može da ima u jednom razgovoru, iznosi oko 170.000 tokena.

Dok radiš na ovome, treba malo da pratiš to. Kako koristiš sve više tokena, ceo razgovor će postajati sporiji, jer se ceo taj kontekst svaki put prosleđuje modelu. Ako pitam još jednu stvar, sve te informacije se ponovo šalju modelu. Ceo prethodni razgovor, svi prethodni odgovori. Sve se šalje za svaki korak u razgovoru.

Još jedna mana korišćenja besplatnih modela je to što obično dozvoljavaju kraći razgovor. Opus ima milion tokena po razgovoru. Ovo će biti bliže 150.000 ili 170.000. Zato želiš stalno da započinješ nove razgovore. Ako napišeš `/new`, dobićeš novi razgovor. To resetuje tvoje tokene, ali tvoj model onda takođe ne zna ništa o onome što se upravo desilo. Zato pokušaj da stekneš naviku da vodiš male razgovore o različitim stvarima.

### Da li i Aron i Nikol ovako rade na Jikiju?

Da. Aron ovo koristi gotovo za sav frontend posao koji radi. Nikol isto radi za montažu videa. Svi naši video snimci su napisani u kodu. Ne pravimo video snimke u programu za montažu. Pravimo ih u kodu, a ona onda radi sa Claude-om i iz toga u kodu pravi sve video snimke.

### Da li su besplatni modeli u oblaku?

Da, svi besplatni modeli su u oblaku. Na tvom računaru bi bili veoma, veoma spori.

### Da li bi preporučio Mistral?

Ne znam baš ništa o modelima van Anthropica. Ja lično svakodnevno radim samo sa Claude-om. Nikada ga nisam koristio, pa ne znam. Ja bih lično koristio Claude, ali verovatno samo uz pretplatu, gde ne plaćam po tokenu.

## Pravljenje tvoje prve veb-stranice

Ta prva polovina je bila pomalo dubok zaron u to šta su LLM-ovi, šta je agentsko programiranje i koja je to moderna petlja koju mi programeri koristimo. To je zaista ono za šta se nadam da će ti tokom narednih nekoliko meseci i godine postati prirodno. Dovoljno prirodno da napraviš bilo šta pod suncem. Ali zaista želim da naglasim, pre nego što nastavimo, ovu ideju da je važno da razumeš šta se dešava ispod haube.

Svestan sam da sam ti u toj prvoj polovini dao mnogo informacija. Zato ćemo u drugoj polovini pogledati kako da napraviš početnu stranicu za sebe. Mislio sam da ćemo danas stići i do nekih drugih stvari, ali mislim da ćemo njih ostaviti za sledeću sesiju. Na sledećoj sesiji ćemo, mislim, gledati postavljanje svega ovoga na server, i gledaćemo kako da to pošaljemo na GitHub. Imam i ekskluzivnu ponudu za sve koji rade na Jikiju, gde dobijaš besplatan .tech domen, a uskoro ćeš moći da dobiješ i besplatan .online ili .space domen. Tako možeš da napraviš sajt za sebe sa tim domenom. O tome ću pričati više na sledećoj sesiji. Ali danas ćemo nastaviti sa pravljenjem tvoje prve veb-stranice i malo razmisliti o tome šta sve to podrazumeva.

## VS Code

Malo smo pričali o tome da se agentsko programiranje radi u terminalu i da samo pišeš svoje instrukcije Claude-u ili kojim god modelima i alatima koristiš. Stari način da se sve ovo radi bio je rad unutar editora koda, tekstualnog editora. Kroz istoriju je postojalo mnogo tekstualnih editora, ali onaj koji je većina nas danas na kraju počela da koristi je nešto što se zove VS Code. Ako ti je tekstualni editor, editor koda, nešto potpuno novo, preporučujem ti da instaliraš VS Code. Među vodičima koje objavljujem uz ovo nalazi se vodič za instaliranje i korišćenje VS Code-a.

Kada sam malo ranije pregledao fajlove, to je bio VS Code. To je samo okvir, neka vrsta platna, na kom možeš da menjaš tekstualne fajlove, i sa strane ima malu policu na kojoj su izlistani svi tvoji fajlovi.

Dakle, ono što ćemo uraditi je da napravimo početnu stranicu. Prvo ću napraviti direktorijum. Idem gore na File, pa Open Folder, i samo ćemo napraviti direktorijum. Staviću ga na desktop: „my new homepage“. Podstaći ću te da ti VS Code bude glavni radni prostor. Zato napravi sebi direktorijum. Ako sada pratiš uporedo, možeš ovo da uradiš. Ako nemaš instaliran VS Code, možeš da pauziraš, pročitaš vodič o tome kako da instaliraš VS Code i onda se vratiš.

Možemo da otvorimo taj direktorijum i vidimo da nas pita da li verujemo autorima. Pošto smo mi autori, možemo da verujemo sami sebi. I vidiš da imamo nešto prostora, i ovde sa strane će se pojavljivati fajlovi. Dole imaš terminal, i u tom terminalu zapravo možemo da otvorimo OpenCode. Tako možemo da koristimo OpenCode dole, a da gore gledamo fajlove. Pošto želim da mi ekran bude veliki, za sada ću ih držati odvojeno, sa OpenCode-om na jednoj strani i svim fajlovima na drugoj, samo da vidimo šta se dešava.

Hajde da uđemo u novi direktorijum koji smo upravo napravili i tamo otvorimo OpenCode. Neko je predložio da probamo drugi model, Big Pickle. Nisam koristio Big Pickle. Hajde da ga probamo i vidimo šta će se desiti. Ovde uopšte ne radimo ništa složeno.

## Šta je veb-stranica

Ovde želim malo da pričam o tome šta je veb-stranica i kako veb-stranica funkcioniše. U narednom periodu, koliko god da traje, radićemo mnogo JavaScripta, CSS-a, komplikovanih stvari. Danas radimo samo najosnovnije stvari. Ako znaš bilo šta o sajtovima, ovo će ti verovatno delovati zaista osnovno. Ako ne znaš ništa, nadam se da će ovo biti dobar uvod za ono što sledi.

Hajde da pričamo malo o tome šta je standardna, jednostavna veb-stranica. Za ovo možemo samo da uzmemo moj postojeći lični sajt. Prilično je jednostavan. To je samo malo teksta na stranici. Možeš da odeš na bilo koji sajt, klikneš desnim tasterom i odeš na View Page Source, i videćeš nešto ovako, gomilu stvari. Ovo je HTML.

![HTML izvorni kod Džeremijevog ličnog sajta, sa doctype-om, head tagovima, meta tagovima i naslovom.](/images/projects/build-your-personal-homepage/setting-up-the-project/ihid-page-source.webp)

HTML je poznat po tome što različite stvari imaju znak manje-od na početku i znak veće-od na kraju. Ovo zovemo head tag. Zatim imamo malo CSS-a. CSS služi za stilizovanje. O tome ćemo za minut. A onda imamo sav sadržaj stranice. Ovo je zaglavlje. Vidiš da je zaglavlje ovde ljubičasto. U njemu je slika. `img` znači image (slika), sa linkom ka slici. Ima malo teksta, moju biografiju, a zatim još teksta podeljenog na pasuse. `p` znači paragraph (pasus). Još malo informacija, neki naslovi. Ovo je naslov drugog nivoa, ovo je naslov prvog nivoa. A ovo dole je JavaScript, koji ti deluje pomalo poznato ako iza sebe imaš Coding Fundamentals.

Kada smo prošle godine radili butkamp i web dev fundamentals, proveli smo mnogo vremena gledajući ovaj HTML veoma detaljno, i CSS veoma detaljno. Pazili smo da razumeš sve različite tagove i kako funkcionišu. I da razumeš CSS i kako pomoću njega možemo da stilizujemo stvari.

Ovo je primer onoga kako mislim da su se stvari preokrenule. Sada mislim da je ono što želimo da uradimo jednostavno da pravimo stvari, a onda da pogledamo šta smo napravili i razumemo kako to izgleda. Dakle, umesto onoga što bih ranije preporučio, i što je u stvari ranije bilo neophodno, a to je da počneš sve ovo da ispisuješ, sada preporučujem da jednostavno kažemo svom LLM-u da nam napravi zaista, zaista osnovnu strukturu koju možemo da koristimo.

## index.html

Druga stvar koju treba znati je da postoji veoma stara konvencija po kojoj je fajl pod imenom `index.html` prva stranica sajta. Ako odeš na ihid.info/index.html, to je praktično ono što vidiš, naslovna stranica. Pravilo je da, ako ništa ne staviš posle domena, pregledač proveri da li postoji fajl pod imenom index.html, i ako postoji, samo prikaže njegov sadržaj. Ovaj index.html je veoma poseban fajl. Ne radi ništa zaista magično. To je samo standard. Ali mnogo sajtova ga tradicionalno koristi kao način da se nešto uradi.

Dakle, ako imaš otvoren OpenCode, možeš da kažeš:

> Napravi index.html koji ima sasvim osnovni kostur stranice, sa zaglavljem u kom je moje ime, Jeremy Walker, i jednim redom biografije o ovome.

Ovde imamo raskrsnicu. Mogli bismo, da hoćemo, da kažemo „idi i napravi mi ceo sajt“, i on bi to uradio. Ali desile bi se dve stvari. Prvo, to ne bi bio sajt koji želimo. Kako budemo napredovali, razmišljaćemo o tome kakvi su ti sajtovi, i zapravo ću te izazvati da odeš i razmisliš o sajtu. O tome ćemo za minut. Ali takođe, dao bi ti toliko stvari da iz toga ništa ne bi moglo da se nauči. Dok ćeš ovako, praveći male korake, naučiti kako stvari funkcionišu.

Dakle, pošaljemo ovo, i to je ono što je ispisao. Sada možemo da pogledamo u VS Code-u i da ovo otvorimo. Ovo je moj radni tok kada ovo radim. Ovde imam ceo svoj sajt, možda hiljade različitih fajlova, i kažem svom agentu da radi na fajlovima. A onda, ako treba nešto da proverim, da vidim šta radi, da izmenim nešto, samo to otvorim ovde i pogledam.

A druga stvar koju sada možemo da uradimo, kada imamo ovaj fajl, jeste da ga zapravo otvorimo u Chromeu. Ako samo klikneš desnim tasterom na fajl i izabereš Open With Chrome, sada vidiš da imamo stranicu koju smo upravo napravili. Dakle, čestitam. Sada imaš svoju početnu stranicu. Nije baš uzbudljiva ni dobra početna stranica, ali jeste početna stranica.

![Sasvim osnovna početna stranica otvorena u Chromeu. Naslov sa imenom Jeremy Walker i red biografije, bez ikakvog stila.](/images/projects/build-your-personal-homepage/setting-up-the-project/first-barebones-homepage.webp)

## Kako da razumeš šta je napravio

Želim da odvojimo minut, i u ovom načinu razmišljanja želim da uvek budeš, da odvojiš minut i pogledaš šta se ovde dešava. Način na koji želim da te podstaknem da to radiš, sada kada ovo imaš, jeste da kažeš:

> Objasni mi šta radi svaki deo.

Ovu petlju možeš da koristiš ne samo da ga nateraš da nešto uradi, već i za razumevanje, za sticanje znanja o tome kako stvari funkcionišu. Ovo ne bi trebalo da bude preterano složeno pitanje za njega, jer je a) upravo to napisao i b) veoma je jednostavno. I objašnjava. Evo ga.

Prvi red, doctype tag, govori pregledaču da je ovo HTML5 dokument. Pa šta se ovde zapravo dešava? Šta je ovaj HTML? Pa, ovaj pregledač je Chrome (postoje i drugi pregledači). On zna kako da pročita HTML fajl i kako da ga prikaže na ekranu tako da možeš da ga vidiš. HTML je specifikacija. Skraćenica je od hypertext markup language (jezik za označavanje hiperteksta). Izgleda ovako, sa gomilom tagova i delića informacija, a Chrome, ili bilo koji drugi pregledač, može da pročita te tagove i prikaže ih na ekranu.

Zaboravi za sada deo na vrhu. Pogledaj samo dole, body. Tu stavlja naslov i stavlja tekst pasusa. Ovaj `h1` znači naslov prvog nivoa. I vidiš da, pošto je ovo naslov prvog nivoa, Chrome zna da ga napravi malo većim i malo podebljanim. Dok je ovaj `p` pasus. Chrome zna da ga napravi malo manjim.

Mogli bismo, da hoćemo, da ovde stavimo i neke druge tagove. Ovo je neuređena lista, `ul`, a unutra bismo imali stavke liste, `li`. Jedna stvar koja se desila otkako sam počeo da koristim Claude je to da više ne umem dobro da kucam. I tako možemo da složimo različite tagove, i ovo će nam dati nabrajanje sa tačkama.

Dakle, ovo je anatomija, kostur veb-stranice. Svaka pojedinačna veb-stranica je ista. Ako odemo na jiki.io i pogledamo izvorni kod stranice, vidiš da je potpuno isto. To je mnogo, mnogo ovakvih tagova. Vidimo da je ovo isto. Samo smo koristili neuređenu listu, stavku liste, link sa nekim tekstom i ikonicom pored njega. To je HTML. Kad god praviš bilo koji sajt, od sada pa do kraja istorije, uvek šalješ HTML veb-pregledaču.

Hajde da završimo čitanje onoga što nam je tako ljubazno sklopio. Pa šta imamo sledeće? Imamo doctype, koji kaže da je ovo HTML dokument. Zatim kažemo: u redu, ovo je početak našeg HTML dokumenta, a jezik na kom je ovaj dokument je engleski.

Zatim imamo dva dela. Imamo head i imamo body.

Prva stvar u head delu je to koje karaktere koristimo, a mi koristimo skup karaktera koji se zove UTF-8. Svaki od ovih je karakter. Kažemo da možemo da koristimo bilo koji karakter koji je latinični, kao što su ovi, a mogli bismo ovde da koristimo i emodžije. Ako uzmemo neki emodži, možemo da ga stavimo direktno u ovaj dokument, onda osvežimo, i imamo emodži na stranici. To je ono što ovo znači. Kaže da su ovo svi karakteri koje obično koristiš. Ovo je naš standardni skup karaktera.

Imamo i viewport. O tome za sada ne treba da brinemo.

I imamo naslov. Naslov je Jeremy Walker. Ovaj naslov je onaj koji se pojavljuje na vrhu taba. Jedna stvar o kojoj ćeš mnogo razmišljati dok programiraš je koji naslovi želiš da se tu pojavljuju, tako da ljudi, kada imaju otvorene različite tabove, tamo gore vide nešto što im je korisno. Možemo da promenimo i stvari kao što je favikon. Vidiš da to još nismo uradili, pa tamo nemamo ikonicu.

Ovaj head deo je sve ono što se ne pojavljuje na ekranu. Sve što pretraživači mogu da pogledaju, i druge takve stvari, nalazi se u head delu. A body je sve u onom pravougaonom prostoru ispod. I to je doslovno naslov, pasus i lista.

Dakle, to nam objašnjenje govori. Tag `html` je korenski element. Head su metapodaci. Metapodaci jednostavno znače podatke o stranici, a ne stvari koje vidiš. Charset je kodiranje karaktera koje omogućava da se tvoji emodžiji i neki karakteri drugih jezika prikazuju. O viewportu ne želimo da brinemo. A onda je body ostatak koji smo pogledali.

Onima od vas koji godinama pišu HTML, izvinjavam se što je ovo tako osnovno za vas, ali i vi ste ovo nekada učili od nule.

## Dodavanje pravog sadržaja

Sada možeš da koristiš svog agenta da dodaš malo HTML-a. Hajde da uzmemo još teksta. Ako imaš LinkedIn profil, možda ćeš hteti da odande uzmeš malo teksta. U stvari, hajde da baš to uradimo. Hajde da odemo na moj LinkedIn i uzmemo odande neke informacije. I to možemo da damo svom LLM-u. Možemo da kažemo:

> Evo nekih informacija sa mog LinkedIna. Strukturiraj ih na smislen način ispod zaglavlja na stranici.

Damo mu ovaj tekst, i on će krenuti i strukturirati ga za nas. Opet, da se vratimo dve godine unazad, tagove i sve ovo trebalo je pisati ručno. Umesto toga, sada imamo mogućnost da mu samo damo malo teksta i kažemo mu da oko njega postavi smislenu strukturu. E sad, ovde ne tražimo od njega da to stilizuje, ili da učini da izgleda na određeni način. Samo tražimo da oko toga postavi neku strukturu, malo HTML-a. Hajde da vidimo koliko je Big Pickle dobar u ovome.

Inače, kada prođem ovu prvu sesiju, za većinu stvari koje radim koristiću Claude, prosto zato što ga zaista dobro poznajem, a i brz je. Ali ako sam pratiš, preporučujem ti da uradiš ovo. Ako imaš LinkedIn, ako imaš biografiju, možeš samo da kopiraš te stvari, ubaciš ih u OpenCode i tražiš od njega da napravi ovo.

Malo je razmišljao. Sada priprema izmenu. I dodao je kod. Evo ga. Sada imamo lep naslov drugog nivoa „Experience“ i imamo ostale informacije. Ako pređemo u Chrome i osvežimo, sada vidimo da imamo jednostavan, lepo strukturiran kod.

![Početna stranica u Chromeu, sada sa odeljkom Experience i strukturiranim unosima za svaku poziciju.](/images/projects/build-your-personal-homepage/setting-up-the-project/homepage-with-experience.webp)

## Tvoj domaći zadatak

Sledeće o čemu treba da razmislimo je kako želimo da izgleda naša lična početna stranica. Ovo je pitanje kome želim da posvetiš malo vremena. Tokom ovog kursa ću te često podsticati da uzmeš olovku i beležnicu, sedneš na mirno mesto, što dalje od ekrana, i jednostavno razmišljaš.

Napravićemo početnu stranicu za sebe. Ta početna stranica treba da ima nekoliko stvari. Treba da ima pregled o nama i našim interesovanjima. Treba da ima stranicu koja je naša biografija, naš CV. Imaće stranicu o našem portfoliju, svim projektima koje pravimo, a onda će voditi linkovima na druge stranice o tim projektima. Dakle, vremenom ćemo napraviti veliki sajt sa više stranica. Većinu toga ćemo uraditi na drugoj sesiji. Danas radimo samo ovu jednu preglednu stranicu. Ali želim da olovkom i na papiru promisliš i nacrtaš kako želiš da izgledaju različite stranice.

I razmisli malo o stilu. Pogledaj stranice drugih ljudi. Pronađi druge ljude iz Exercism zajednice. Ako pogledam Erika Širboma (Erik Schierboom), koji je nekada radio za nas, on ima zaista jednostavnu glavnu naslovnu stranicu, a zatim stranicu o sebi, koja je prilično zgodna, sa lepim malim detaljem koji se pojavi na dnu. Ima neke informacije o softveru, mesta gde je držao predavanja, a zatim neke linkove. To bi te moglo prilično inspirisati. Ili ako pogledamo SleeplessByte. Možda se sećaš DJ-a sa butkampova, ili iz mentorskog programa. Ovo je DJ-eva stranica. Zato idi i pronađi ljude koji ti se čine zanimljivim i inspiriši se onim što su napravili. Razmisli o tome koji ti se vizuelni stil sviđa. A pričaćemo malo i o pravljenju slika i o tome kako možeš da koristiš tehnologiju za pravljenje slika.

Istraži ideje različitih ljudi. Ja sam uvek bio prilično ljubitelj veoma minimalističkog utiska. I za ovaj projekat ću narednih nekoliko dana razmišljati o tome kako želim da izgleda moja nova naslovna stranica, jer ću ovu početnu stranicu napraviti i za sebe. Razmisliću o tome kako se deli na delove. Želim odeljak za svoju fotografiju. Želim odeljak u kom mogu da imam svoje podkaste, video snimke i stvari koje sam napravio. Želim malo biografije i želim CV, biografiju. Zato ću otići i razmisliti o tim stvarima.

Tvoj domaći zadatak za ovu nedelju je da razmisliš o tome, da to osmisliš, a onda da počneš da strukturiraš te stranice. Možeš da napraviš više stranica. Možemo da napravimo još jednu stranicu, nazovimo je my resume, i da u nju kopiramo i nalepimo naš sadržaj, obrišemo delove koji nam ne trebaju i promenimo naslov u „Jeremy's Resume“. Sada imamo našu index stranicu, ali sada možemo da odemo i na resume.html i da to imamo kao još jednu stranicu.

Dakle, ove nedelje:

- Razmisli o različitim stranicama koje ćeš želeti i o različitom sadržaju koji ćeš staviti na te stranice.
- Instaliraj VS Code.
- Instaliraj OpenCode i podesi model.
- Radeći sa OpenCode-om, sklopi nekoliko ovih različitih stranica.

Ne brini još o stilizovanju. Ne želim da se zaista upuštaš u to. Možeš da se igraš ako želiš, uvek ću podsticati ljude da budu radoznali, ali voleo bih da te naučim onome što mislim da su najbolji načini da se to radi u modernom svetu. Nikako nemoj da počinješ da koristiš JavaScript frameworke ili bilo šta drugo. Samo se drži sasvim osnovnog HTML-a, a onda ćemo na svakoj sesiji dodavati slojeve dok ne postane sve moćnije i sve složenije. Na ovaj način ćeš razumeti kako se sve dešava.

Ako te zanima, idi i istraži malo više o HTML-u. Otkrij koji su različiti tagovi i šta znače. Istraživanje danas može biti jednostavno kao da pitaš:

> Navedi mi 20 najčešćih tagova.

A onda:

> Reci mi čemu služi svaki od njih.

Tako ja istražujem stvari.

Sledeću sesiju ćemo imati za nekoliko dana. Do tada se nadam da ćeš doći sa instaliranim OpenCode-om, instaliranim VS Code-om i nizom stranica. Sledeći put ćemo početi da povezujemo te stranice, dodaćemo navigaciju, dodaćemo stil, a takođe ćemo ovo postaviti na server preko GitHuba, i možda ti čak nabaviti sopstveni domen, tako da možeš besplatno da imaš svoj lični sajt na domenu. Možda ćeš hteti da se ove nedelje registruješ i na GitHubu, na github.com. Objaviću vodiče za VS Code, OpenCode i GitHub, i možeš da ih pratiš.

To je kraj ove prve sesije. Hvala ti što gledaš. Nadam se da je bilo zanimljivo. Nadam se da ti se dopalo. Ako imaš bilo kakva pitanja o bilo čemu što smo prošli, slobodno svrati na forum. Biću tamo i radujem se odgovaranju na pitanja i istraživanju pitanja. Nemam nužno sve odgovore. I ja volim da učim. Zato pitaj šta god te zanima. I radujem se što ćemo se videti na sledećoj sesiji.
