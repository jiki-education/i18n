---
title: "Ključni koncepti agentskog programiranja"
excerpt: "Modeli, tokeni, kontekstni prozori i druge ideje koje treba da razumeš da bi dobro koristio AI agente za programiranje."
tags: ["agentic-coding"]
seo:
  description: "Osnovni koncepti agentskog programiranja objašnjeni za početnike: šta su AI modeli i tokeni, kako funkcionišu kontekstni prozori i zašto agenti ponekad greše."
  keywords: ["koncepti agentskog programiranja", "llm", "tokeni", "kontekstni prozor", "ai modeli", "promptovi", "halucinacije"]
en_md5: d963e01d7934f4003d436029d1808fc8
---

## Uvod

U ovoj fazi pretpostavljamo da već imaš instaliran OpenCode ili nešto slično. Ako nemaš, prvo prati naš vodič o [instaliranju agentske platforme za programiranje](/guides/installing-an-agentic-coding-platform).

Možeš da koristiš alat za agentsko programiranje i bez razumevanja kako radi, slično kao što možeš da voziš automobil a da ne znaš šta radi kvačilo. Ali malo razumevanja mnogo znači. Objašnjava zašto alat ponekad izgleda genijalno, a ponekad zbunjujuće, zašto neke stvari koštaju novac i kako da dobiješ mnogo bolje rezultate. Ovo su koncepti koje vredi znati.

## Modeli

**Model** (ili LLM, što znači veliki jezički model) je stvarna veštačka inteligencija. Alati kao što su OpenCode i Claude Code sami po sebi nisu inteligentni. Oni su kao oruđe: skupljaju tvoj zahtev i tvoj kod, šalju ga modelu, a potom deluju na osnovu odgovora. Model je „mozak”.

Postoji mnogo modela, koje prave različite kompanije, a za tebe se razlikuju u tri bitne stvari:

- **Sposobnost.** Veći, noviji modeli bolje razumeju neuredne probleme i pišu tačniji kod. Najbolji (često nazvani „frontier” modeli) su primetno pametniji od ostalih.
- **Brzina.** Manji modeli odgovaraju brže. Za jednostavna pitanja, brži model je često prijatnije iskustvo.
- **Cena.** Najbolji modeli mogu da koštaju i pedeset puta više za pokretanje od sasvim pristojnih. Zato besplatne verzije koriste manje ili promotivne modele.

Ne postoji trajni „najbolji model”. Tabela se menja svakih nekoliko meseci, i to je jedan od razloga zašto preporučujemo alat koji ti omogućava da slobodno menjaš modele (u OpenCode-u otkucaj `/models`).

## Tokeni

Modeli ne čitaju slova niti reči. Oni čitaju **tokene**: male delove teksta, u proseku otprilike tri četvrtine reči. “Understanding” je jedan token. “Misunderstanding” bi mogao da bude tri. Sve što pošalješ modelu biva iseckano u tokene, a sve što model napiše vraća se token po token. Zato odgovore vidiš kao tok reči, a ne odjednom.

Tokeni su važni iz jednog velikog razloga: **upravo za njih plaćaš**. Cene modela se navode po milion tokena, i za ono što model pročita („ulazni podaci”) i za ono što napiše („izlazni podaci”). Kada agent pročita pet tvojih fajlova sa kodom, to može da bude desetine hiljada ulaznih tokena. Zato besplatne verzije imaju ograničenja, a rad agenta na velikom projektu košta više nego odgovaranje na jedno kratko pitanje.

## Kontekstni prozor

Model nema memoriju. Svaki put kada pošalješ poruku, alat šalje *kompletnu dosadašnju konverzaciju*, plus sve fajlove koje je agent pročitao, sve ispočetka. **Kontekstni prozor** modela je maksimalna količina podataka koja mu može biti poslata odjednom: njegova radna memorija, merena u tokenima.

Iz ovoga slede dve praktične stvari:

- **Duge sesije se degradiraju.** Kako razgovor raste, kontekst se puni starim skretanjima i zastarelim sadržajem fajlova. Modeli postaju merljivo lošiji u obraćanju pažnje kada im je kontekst pretrpan. Kada agent počne da pravi glupe greške kasno u dugoj sesiji, često nije da je glup – nego se davi.
- **Sveži počeci su besplatni.** Započinjanje nove sesije sa čistim, dobro sročenim zahtevom često donosi bolje rezultate nego nastavljanje u pretrpanoj. Nemoj da budeš sentimentalan prema istoriji razgovora.

## Promptovi

Tvoj **prompt** je sve što napišeš modelu. Najmoćnija veština u agentskom programiranju je pisanje dobrih promptova. Razlika između „popravi mi kod” i „testovi u ovom folderu padaju sa ovom greškom, a očekivao sam da funkcija vrati 5, a ne 3” jeste razlika između agenta koji nagađa i agenta koji zna.

Dobar prompt govori tri stvari: šta pokušavaš da postigneš, šta se zapravo dešava i šta si već probao. Tačno ono što bi želeo da ti kaže kolega koji traži pomoć.

## Agentska petlja

Ono što agenta razdvaja od čet-bota jeste **petlja**. Kada agentu daš zadatak, on ne odgovori samo tako. On radi:

1. Odlučuje šta treba da zna, i koristi **alate** (čitanje fajlova, pretragu, izvršavanje komandi) da to sazna.
2. Pravi izmenu.
3. Proverava sopstveni rad, obično pokretanjem tvog koda ili testova.
4. Ako nešto nije uspelo, vraća se na korak 1 sa novim informacijama.

Posmatranje ove petlje zaista je poučno: to je dobar model kako iskusni programeri zapravo rade. Istraži, promeni jednu stvar, proveri, ponovi. Tvoj posao tokom petlje je nadzor. Alat će tražiti tvoju dozvolu pre nego što preduzme nešto značajno, a ti treba da pročitaš šta predlaže, a ne da refleksno odobravaš sve.

## Halucinacije, ili: model je ponekad sigurno pogrešan

Modeli ne znaju stvari na način na koji ih ti znaš. Oni generišu odgovor koji izgleda najverovatnije, a ponekad je taj najverovatniji odgovor jednostavno pogrešan: funkcija koja ne postoji, podešavanje koje nikada nije postojalo, objašnjenje koje zvuči nepropusno, ali je zapravo netačno. Ovo se zove **halucinacija** i nikada u potpunosti ne nestaje, čak ni kod najboljih modela.

Odbrana je ista kao i kod profesionalaca: **nikad ne veruj, uvek proveri**. Pokreni kod. Pročitaj izmenu pre nego što je prihvatiš. Ako ti je objašnjenje važno, traži od modela da ti pokaže liniju koda na kojoj se zasniva. Agenti su mnogo manje skloni tome od čet-botova, upravo zato što njihova petlja podrazumeva pokretanje stvari i viđenje stvarnih rezultata, ali naviku proveravanja treba da izgradiš od prvog dana.

## Privatnost

Još jedna stvar koju vredi znati, posebno na besplatnim planovima: besplatni modeli su obično besplatni zato što kompanije koje stoje iza njih sakupljaju razgovore kako bi unapredile svoje modele. Za vežbe učenja to je sasvim prihvatljiva pogodba. Ali sve što pošalješ besplatnom modelu tretiraj kao potencijalno javno: bez lozinki, bez ličnih podataka, a kasnije u karijeri, bez privatnog koda kompanije bez provere pravila.

## To je osnova

Modeli su „mozak”, tokeni su valuta, kontekst je memorija, promptovi su volan, a petlja je ono što od toga čini agenta. Sve ostalo ćeš naučiti kroz praksu, a to je upravo ono što ti predlažemo da uradiš. Ako još uvek nisi podesio alat, naš [vodič za instalaciju](/guides/installing-an-agentic-coding-platform) će te dovesti do toga za deset minuta. Zatim pogledaj prvu sesiju [Frontend Basics](/build/frontend-basics/setting-up-the-project) u delu Nauči da gradiš da bi sve to video na delu.
