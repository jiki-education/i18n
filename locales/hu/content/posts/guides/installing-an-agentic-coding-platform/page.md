---
title: "Agentikus programozási platform telepítése"
excerpt: "Lépésről lépésre útmutató az OpenCode telepítéséhez, a bejelentkezéshez és egy AI-modell kiválasztásához, beleértve az ingyenes lehetőségeket is."
tags: ["agentic-coding", "installation"]
seo:
  description: "Kezdőbarát útmutató az OpenCode, az általunk ajánlott agentikus programozási platform telepítéséhez, ingyenes AI-modell lehetőségekkel a Zenen keresztül és az alacsony költségű Go csomaggal."
  keywords:
    [
      "opencode",
      "install opencode",
      "agentikus programozás",
      "ai coding assistant",
      "opencode zen",
      "opencode go",
      "free ai coding",
      "vscode"
    ]
en_md5: a5c3efc92432a167085818beba5b6bc7
---

## Bevezetés

Az agentikus programozási platform egy olyan eszköz, amellyel egy AI veled együtt dolgozhat a kódon: fájlokat olvashat, módosításokat végezhet és parancsokat futtathat a számítógépeden. Ha ez a mondat új számodra, kezdd a [mi az agentikus programozás](/guides/what-is-agentic-coding) útmutatónkkal, és gyere vissza ide, ha készen állsz a telepítésre.

Ez az útmutató végigvezet az **OpenCode** telepítésén, a bejelentkezésen és egy AI-modell kiválasztásán. Ezt csak egyszer kell megcsinálnod, és az egészet végigcsinálhatod anélkül, hogy egy fillért is költenél.

## Miért az OpenCode-ot ajánljuk

Több jó agentikus programozási eszköz is létezik, köztük a Claude Code (Anthropic) és a Codex (OpenAI). Használatuk nagyjából hasonló, így semmi sem vész kárba, amit megtanulsz, ha később váltanál. Mindemellett az **[OpenCode](https://opencode.ai)**-ot ajánljuk, amíg tanulsz, három okból:

- **Ingyen használhatod.** Jelenleg ez az egyetlen ilyen eszköz, amelynek megbízható, stabil és valóban használható ingyenes szintje van, és ez a szint valószínűleg nem is fog eltűnni.
- **Szinte bármilyen AI-modellel működik.** Kezdheted az ingyenes modellekkel, és később kipróbálhatod a fejlettebbeket is, ha szeretnél mélyebbre ásni, mindezt anélkül, hogy eszközt kellene váltanod.
- **Terminálban fut**, ami a legtöbb profi fejlesztő munkamódszere, így a „valódi” módszert tanulod. És futtathatod a VS Code-on belül is, így közvetlenül a kódod mellett jelenik meg.

Az OpenCode-ot kétféleképpen használhatod, és ez az útmutató mindkettőre felkészít:

- **Önmagában**, bármilyen terminálablakban.
- **VS Code-ba ágyazva**, ahol egy panelben nyílik meg a kódod mellett, és látja, melyik fájlon dolgozol. Ezt ajánljuk: így nézheted, ahogy az ágens módosításai megjelennek a szerkesztőben, miközben végzi őket. (Nem tudod, mi az a VS Code? Ez az [általunk ajánlott kódszerkesztő](/guides/using-a-code-editor).)

## Mennyibe kerül

Az OpenCode maga ingyenes. Amiért fizethetsz, az a gondolkodást végző AI-modell. Amikor összekapcsolod az OpenCode-ot egy modellel, két lehetőséget látsz majd az OpenCode csapatától:

- **A Zen** néhány modellt kínál ingyen. Azért ingyenesek, mert a mögöttük álló cégek így népszerűsítik őket, ami azt jelenti, hogy a választék idővel változik, és a beszélgetéseidet felhasználhatják a modellek fejlesztéséhez. Ez tanulófeladatok esetében vállalható kompromisszum, de ne illessz be semmilyen privát vagy személyes adatot.
- **A Go** egy előfizetés: **10 $/hó** (az első hónap 5 $), amiért bőkezű hozzáférést kapsz sokkal erősebb modellekhez. Erre nincs szükséged az első naptól. Kezdd a Zen ingyenes modelljeivel, és akkor frissíts, ha úgy érzed, elérted a korlátaikat.

## Melyik modellt válasszam?

Ha nem vagy biztos benne, hogy egyáltalán mi az a „modell”, a [kulcsfontosságú agentikus programozási fogalmakról](/guides/key-agentic-coding-concepts) szóló útmutatónk elmagyarázza. Röviden: a modell maga az AI „agya”, és a különböző modellek okosabbak, gyorsabbak vagy olcsóbbak egymásnál.

Az OpenCode-on belül bármikor válthatsz modellt a `/models` beírásával. A tanácsunk:

- **Az ingyenes szinten** próbáld ki a kínált ingyenes modelleket, és nézd meg, melyikkel boldogulsz. A lista az akciók jövés-menésével változik, így nem tettetjük, hogy tudjuk, mit fogsz látni, de e sorok írásakor a **DeepSeek V4 Flash** kiváló ingyenes választás.
- **A Go csomagon** a kódolásra fókuszált modellek (e sorok írásakor a Kimi K2.7 Code, a GLM-5.2 és a Qwen 3.7 család) mind erősek. Válassz egyet, és csak akkor foglalkozz az összehasonlításukkal, ha már ismered az alapokat.

Ne agyalj ezen túl sokat. Azokhoz a feladatokhoz, amelyeket tanulás közben fogsz csinálni, minden kínált modell bőven megfelel.

## Mielőtt elkezded

Két dologra van szükséged:

- **VS Code**, hogy az OpenCode-ot a szerkesztődbe ágyazva használhasd. Ha még nem telepítetted, kövesd a [VS Code telepítéséről](/guides/installing-vscode) szóló útmutatónkat.
- **Csak Windows-on: WSL.** Az OpenCode terminálos verziója Linuxon fut a legjobban, a WSL pedig egy rendes Linux terminált ad a Windows gépednek. Kövesd először a [WSL telepítéséről](/guides/installing-wsl) szóló útmutatónkat, beleértve a végén található „A WSL használata VS Code-ból” részt is. Utána gyere vissza ide. macOS-en és Linuxon semmi extrát nem kell telepíteni.

## Az OpenCode telepítése

Az OpenCode telepítése egyetlen parancs a terminálban. Ha még soha nem használtál terminált, ez egy kellemes első élmény: beírsz egy utasítást, és a számítógép elvégzi a munkát.

### Windows

1. Nyisd meg a VS Code-ot, csatlakoztasd a WSL-hez (Ctrl+Shift+P, majd **WSL: Connect to WSL**), és nyiss egy terminált (Terminal menü, majd **New Terminal**).
2. Másold ki és illeszd be ezt a parancsot a terminálba, majd nyomj Entert:
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. Ha végzett, zárd be a terminált, nyiss egy újat, és írd be az `opencode --version` parancsot, majd nyomj Entert. Ha kiír egy verziószámot, készen vagy.

### macOS

1. Nyisd meg a **Terminal** alkalmazást (nyomd meg a Cmd+Space billentyűket, írd be, hogy „terminal”, és nyomj Entert), vagy nyiss egy terminált a VS Code-on belül (Terminal menü, majd **New Terminal**).
2. Másold ki és illeszd be ezt a parancsot a terminálba, majd nyomj Entert:
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. Ha végzett, zárd be a terminált, nyiss egy újat, és írd be az `opencode --version` parancsot, majd nyomj Entert. Ha kiír egy verziószámot, készen vagy.

### Linux

1. Nyisd meg a terminálodat, vagy nyiss egyet a VS Code-on belül (Terminal menü, majd **New Terminal**).
2. Másold ki és illeszd be ezt a parancsot a terminálba, majd nyomj Entert:
   ```
   curl -fsSL https://opencode.ai/install | bash
   ```
3. Ha végzett, zárd be a terminált, nyiss egy újat, és írd be az `opencode --version` parancsot, majd nyomj Entert. Ha kiír egy verziószámot, készen vagy.

<!-- SCREENSHOT: terminál a telepítő szkript befejezése után -->

## Az OpenCode első indítása

Most nyisd meg az OpenCode-ot, és csatlakoztasd a Zenhez, hogy legyen egy modelled, amivel beszélgethet:

1. A VS Code-ban nyiss meg egy mappát, amiben van kód (bármelyik gyakorlóprojekted tökéletes), és nyiss egy terminált (Terminal menü, majd **New Terminal**).
2. Írd be, hogy `opencode`, és nyomj Entert. Az OpenCode felülete megjelenik a terminálpanelen, közvetlenül a kódod mellett. (Amikor először csinálod, egy kis VS Code bővítmény is települ, ami összekapcsolja a kettőt, így az OpenCode látja, melyik fájl van megnyitva.)
3. Amikor először futtatod, megjelenik egy „Connect a provider” című lista. (Ha nem kérdez rá, írd be a `/connect` parancsot az előhívásához.) A nyílbillentyűkkel válaszd ki az **OpenCode Zen (Recommended)** lehetőséget, és nyomj Entert.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/connect-a-provider.webp" alt="Az OpenCode Connect a provider képernyője, az OpenCode Zen (Recommended) kiemelésével a lista tetején" />
  <figcaption>Válaszd az OpenCode Zent a szolgáltatói listából.</figcaption>
</figure>

4. Ezután egy **API-kulcsot** fog kérni: egy hosszú kódot, ami igazolja, hogy ki vagy, kicsit olyan, mint egy jelszó. Hogy szerezz egyet, nyisd meg az <a href="https://opencode.ai/zen" target="_blank" rel="noopener noreferrer">opencode.ai/zen</a> oldalt a böngésződben, és hozz létre egy ingyenes fiókot. Semmilyen fizetési adatra nincs szükség. Másold ki a kapott kulcsot, illeszd be a terminálba, és nyomj Entert.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-api-key.webp" alt="Az OpenCode API-kulcsot kér, útmutatással, hogy az opencode.ai/zen oldalon lehet egyet szerezni" />
  <figcaption>Szerezd meg a kulcsodat az opencode.ai/zen oldalról, és illeszd be ide.</figcaption>
</figure>

5. Végül megjeleníti a modellek listáját, ahol az ingyenesek jobb oldalon **Free** jelöléssel vannak ellátva. Válassz egyet ezek közül (ahogy fentebb mondtuk, e sorok írásakor a **DeepSeek V4 Flash Free** kiváló választás). Bármikor válthatsz modellt a `/models` beírásával.

<figure class="post-figure" style="max-width:500px">
  <img src="/images/guides/installing-an-agentic-coding-platform/zen-model-list.webp" alt="Az OpenCode Zen modellistája, az ingyenes modellek jobb oldalon Free jelöléssel, a DeepSeek V4 Flash Free kiemelve" />
  <figcaption>Az ingyenes modellek a jobb oldalon vannak jelölve. Itt épp a DeepSeek V4 Flash Free-t választjuk.</figcaption>
</figure>

## Az első beszélgetésed

Most kérdezz tőle valamit. Írj be egy ilyen üzenetet:

> Nézd meg a fájlokat ebben a mappában, és magyarázd el, mit csinálnak.

Figyeld meg, mi történik. Beolvassa a fájlokat, gondolkodik, majd visszajelez, és engedélyt kér, mielőtt bármit módosítana. Az olvasás, cselekvés és ellenőrzés ez a ciklusa az agentikus programozás lényege.

<figure class="post-figure" style="max-width:700px">
  <img src="/images/guides/installing-an-agentic-coding-platform/first-conversation.webp" alt="Az OpenCode egyenként beolvassa a projekt fájljait, gondolkodik, majd elmagyarázza, mit csinálnak az egyes felső szintű mappák és fájlok" />
  <figcaption>Az OpenCode beolvassa a projekt fájljait, gondolkodik, és visszajelez a találatokról.</figcaption>
</figure>

Ugyanez bármilyen terminálban működik, VS Code-dal vagy anélkül. Nyiss egy terminált, lépj be egy projektmappába, írd be, hogy `opencode`, és már kezdheted is. Vannak, akik imádnak így dolgozni. Próbáld ki mindkettőt, és nézd meg, melyik illik hozzád.

Ennyi. Most már van egy működő agentikus programozási környezeted, aminek a futtatása semmibe sem kerül. Hogy megértsd, mi is történik valójában a színfalak mögött, és mit jelentenek az olyan szavak, mint a token és a kontextus, folytasd a [kulcsfontosságú agentikus programozási fogalmakkal](/guides/key-agentic-coding-concepts).
