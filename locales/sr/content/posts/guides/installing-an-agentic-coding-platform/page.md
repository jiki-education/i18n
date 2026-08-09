---
title: "Instaliranje platforme za agentsko programiranje"
excerpt: "Korak po korak uputstvo za instaliranje OpenCode-a, prijavljivanje i izbor AI modela, uključujući i opcije koje ne koštaju ništa."
tags: ["agentic-coding", "installation"]
seo:
  description: "Vodič za početnike o instaliranju OpenCode-a, platforme za agentsko programiranje koju preporučujemo, sa besplatnim opcijama AI modela putem Zen-a i povoljnim Go planom."
  keywords:
    [
      "opencode",
      "install opencode",
      "agentsko programiranje",
      "AI pomoćnik za programiranje",
      "opencode zen",
      "opencode go",
      "besplatno agentsko programiranje",
      "vscode"
    ]
en_md5: a5c3efc92432a167085818beba5b6bc7
---

## Uvod

Platforma za agentsko programiranje je alat koji omogućava AI-ju da radi na kodu zajedno sa tobom: čita fajlove, unosi izmene i pokreće komande na tvom računaru. Ako ti ova rečenica zvuči nepoznato, kreni od našeg vodiča o tome [šta je agentsko programiranje](/guides/what-is-agentic-coding) i vrati se ovde kada budeš u mogućnosti da ga instaliraš.

Ovaj vodič te vodi kroz instaliranje **OpenCode-a**, prijavljivanje i izbor AI modela. Ovo treba da uradiš samo jednom, i možeš celu stvar da obaviš bez ikakvog troška.

## Zašto preporučujemo OpenCode

Postoji nekoliko dobrih alata za agentsko programiranje, uključujući Claude Code (Anthropic) i Codex (OpenAI). Svi su uglavnom slični za korišćenje, tako da ništa od onoga što naučiš neće biti uzaludno ako kasnije pređeš na neki drugi. Ipak, preporučujemo **[OpenCode](https://opencode.ai)** dok učiš, i to iz tri razloga:

- **Možeš da ga koristiš besplatno.** To je jedini alat te vrste koji ima pouzdan, stabilan i zaista upotrebljiv besplatni nivo, a taj nivo verovatno neće nestati.
- **Radi sa gotovo svakim AI modelom.** Možeš da počneš sa besplatnim modelima, a kasnije da probaš naprednije ako poželiš da istražuješ, sve to bez promene alata.
- **Pokreće se u terminalu**, na način na koji većina profesionalnih programera koristi ove alate, tako da učiš „pravi“ način rada. A možeš ga pokrenuti i unutar VS Code-a tako da ti stoji odmah pored koda.

OpenCode možeš da koristiš na dva načina, a ovaj vodič te priprema za oba:

- **Samostalno**, u bilo kom prozoru terminala.
- **Ugrađen u VS Code**, gde se otvara u panelu pored tvog koda i vidi na kom fajlu radiš. To preporučujemo: gledaš promene koje agent pravi dok ih unosi u tvom editoru. (Nemaš pojma šta je VS Code? To je naš [preporučeni editor koda](/guides/using-a-code-editor).)

## Koliko košta

Sam OpenCode ne košta ništa. Ono što možeš da platiš jeste AI model koji obavlja razmišljanje. Kada povežeš OpenCode sa modelom, videćeš dve opcije od OpenCode tima:

- **Zen** nudi nekoliko modela besplatno. Besplatni su zato što ih kompanije koje stoje iza njih promovišu, što znači da se ponuda vremenom menja, a tvoji razgovori mogu biti korišćeni za poboljšanje modela. To je sasvim prihvatljivo za vežbe tokom učenja, ali nemoj u njih lepiti ništa privatno ili lično.
- **Go** je pretplata: **$10 mesečno** (prvi mesec po $5) za izdašan pristup znatno jačem skupu modela. Ovo ti neće biti potrebno odmah. Kreni sa Zen-ovim besplatnim modelima, a nadogradi ako primetiš da si dostigao njihove limite.

## Koji model da izaberem?

Ako ti nije jasno šta je tačno „model“, naš vodič o [ključnim konceptima agentskog programiranja](/guides/key-agentic-coding-concepts) to objašnjava detaljno. Ukratko: model je stvarni „mozak“ AI-ja, a različiti modeli su pametniji, brži ili jeftiniji od drugih.

Unutar OpenCode-a u svakom trenutku možeš da promeniš model tako što ćeš uneti `/models`. Naš savet:

- **Na besplatnom nivou**, isprobaj besplatne modele koji su u ponudi i vidi s kojim ti najbolje ide. Lista se menja kako promocije dolaze i prolaze, pa nećemo da se pretvaramo da znamo šta ćeš videti, ali u trenutku pisanja ovog teksta **DeepSeek V4 Flash** je odličan besplatni izbor.
- **Na Go planu**, modeli fokusirani na programiranje (u trenutku pisanja, Kimi K2.7 Code, GLM-5.2 i porodica Qwen 3.7) svi su moćni. Izaberi jedan, a o upoređivanju među njima brini tek kad savladaš osnove.

Ne premišljaj se previše. Za vežbe koje ćeš raditi dok učiš, svaki model u ponudi je više nego dovoljan.

## Pre nego što počneš

Treba da imaš dve stvari spremne:

- **VS Code**, koji ti omogućava da koristiš OpenCode ugrađen u tvoj editor. Ako ga još nemaš instaliran, prati naš vodič za [instaliranje VS Code-a](/guides/installing-vscode).
- **Samo na Windows-u: WSL.** Terminalna verzija OpenCode-a najbolje radi na Linux-u, a WSL daje tvom Windows računaru pravi Linux terminal. Prvo prati naš vodič za [instaliranje WSL-a](/guides/installing-wsl), uključujući i odeljak „Using WSL from VS Code“ na kraju. Onda se vrati ovde. Na macOS-u i Linux-u nema potrebe za dodatnim instalacijama.

## Instaliranje OpenCode-a

Instaliranje OpenCode-a se svodi na jednu komandu u terminalu. Ako nemaš iskustva sa terminalom, evo lepog prvog susreta: otkucaš instrukciju, a računar obavi posao.

### Windows

1. Otvori VS Code, poveži ga sa WSL-om (Ctrl+Shift+P, zatim **WSL: Connect to WSL**), i otvori terminal (u meniju Terminal izaberi **New Terminal**).
2. Kopiraj i nalepi ovu komandu u terminal i pritisni Enter:
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. Kada se završi, zatvori terminal, otvori novi i unesi `opencode --version` pa pritisni Enter. Ako ispiše broj verzije, gotovo je.

### macOS

1. Otvori **Terminal** (pritisni Cmd+Space, unesi „terminal“ i pritisni Enter), ili otvori terminal unutar VS Code-a (u meniju Terminal izaberi **New Terminal**).
2. Kopiraj i nalepi ovu komandu u terminal i pritisni Enter:
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. Kada se završi, zatvori terminal, otvori novi i unesi `opencode --version` pa pritisni Enter. Ako ispiše broj verzije, gotovo je.

### Linux

1. Otvori svoj terminal, ili otvori jedan unutar VS Code-a (u meniju Terminal izaberi **New Terminal**).
2. Kopiraj i nalepi ovu komandu u terminal i pritisni Enter:
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. Kada se završi, zatvori terminal, otvori novi i unesi `opencode --version` pa pritisni Enter. Ako ispiše broj verzije, gotovo je.

<!-- SCREENSHOT: terminal after the install script has completed -->

## Prvo pokretanje OpenCode-a

Sada pokreni OpenCode i poveži ga sa Zen-om da bi imao model sa kojim će razgovarati:

1. U VS Code-u otvori folder sa nekim code-om (bilo koji tvoj projekat za vežbu je sasvim dobar) i otvori terminal (u meniju Terminal izaberi **New Terminal**).
2. Unesi `opencode` i pritisni Enter. OpenCode interfejs će se pojaviti u panelu terminala, odmah pored tvog code-a. (Kad to uradiš prvi put, instaliraće se i mali VS Code dodatak koji ih povezuje, tako da OpenCode može da vidi koji fajl imaš otvoren.)
3. Kada ga prvi put pokreneš, pojaviće se lista pod nazivom „Connect a provider“. (Ako ti ne ponudi, unesi `/connect` da je prikažeš.) Pomoću strelica izaberi **OpenCode Zen (Recommended)** i pritisni Enter.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/connect-a-provider.webp" alt="Ekran OpenCode-a 'Connect a provider', sa opcijom OpenCode Zen (Recommended) istaknutom na vrhu liste" />
  <figcaption>Izaberi OpenCode Zen sa liste provajdera.</figcaption>
</figure>

4. Zatim će te pitati za **API ključ**: dugačku šifru koja dokazuje ko si, pomalo nalik lozinci. Da bi ga dobio, otvori <a href="https://opencode.ai/zen" target="_blank" rel="noopener noreferrer">opencode.ai/zen</a> u svom pregledaču i kreiraj besplatni nalog. Nisu potrebni podaci za plaćanje. Kopiraj ključ koji dobiješ, nalepi ga u terminal i pritisni Enter.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-api-key.webp" alt="OpenCode traži API ključ, sa uputstvom da ga dobiješ na opencode.ai/zen" />
  <figcaption>Preuzmi svoj ključ sa opencode.ai/zen i nalepi ga ovde.</figcaption>
</figure>

5. Na kraju će ti prikazati listu modela, gde su besplatni označeni sa **Free** na desnoj strani. Izaberi jedan od njih (kao što smo rekli, u trenutku pisanja ovog teksta **DeepSeek V4 Flash Free** je odličan izbor). Model možeš da promeniš kad god poželiš unosom `/models`.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-model-list.webp" alt="Lista modela u OpenCode Zen-u, gde su besplatni modeli označeni sa Free na desnoj strani, a DeepSeek V4 Flash Free je istaknut" />
  <figcaption>Besplatni modeli su označeni na desnoj strani. Ovde biramo DeepSeek V4 Flash Free.</figcaption>
</figure>

## Tvoj prvi razgovor

Sada mu postavi neko pitanje. Unesi poruku kao što je:

> Pogledaj fajlove u ovom folderu i objasni šta rade.

Gledaj šta se dešava. Pročitaće fajlove, razmisliti i javiti ti, a pre nego što bilo šta promeni zatražiće tvoju dozvolu. Taj ciklus čitanja, delovanja i provere je srž agentskog programiranja.

<figure class="post-figure" style="max-width:700px">
  <img src="/images/guides/installing-an-agentic-coding-platform/first-conversation.webp" alt="OpenCode čita fajlove u projektu jedan po jedan, razmišlja, a zatim objašnjava šta radi svaki folder i fajl na najvišem nivou" />
  <figcaption>OpenCode čita fajlove projekta, razmišlja i izveštava o onome što pronađe.</figcaption>
</figure>

Isto radi i u bilo kom terminalu, sa ili bez VS Code-a. Otvori terminal, pređi u folder projekta, unesi `opencode`, i kreni. Nekima se jako sviđa taj način rada. Probaj oba i vidi šta ti više odgovara.

To je to. Sada imaš funkcionalno okruženje za agentsko programiranje koje te ne košta ništa. Da bi razumeo šta se zapravo dešava ispod haube i šta znače pojmovi poput tokena i konteksta, nastavi sa [ključnim konceptima agentskog programiranja](/guides/key-agentic-coding-concepts).
