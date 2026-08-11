---
title: "Első epizód: Agentikus programozás 101"
excerpt: "Elindítjuk ezt a projektet egy mélyreható betekintéssel az agentikus programozásba. Hogy mik az LLM-ek és az ágensek, hogyan működnek a modellek és az erőfeszítés, hogyan állíthatod be ingyenesen az OpenCode-ot, és hogyan építheted meg a legelső weboldaladat."
summary:
  from: "Feltételezzük, hogy semmit sem tudsz a webről vagy az agentikus programozásról."
  to: "Megérted az agentikus programozási ciklust, és megírod az első, alapvető honlapodat a böngészőben."
  keyConcepts: ["Agentikus programozás", "Modellek és erőfeszítés", "Tokenek és kontextus", "HTML alapok"]
seo:
  description: "Ismerd meg, mi az agentikus programozás, hogyan működnek az LLM-ek, a modellek és a tokenek, és építsd meg az első weboldaladat az OpenCode segítségével."
  keywords: ["agentikus programozás", "LLM", "HTML", "kezdő"]
en_md5: 179b6fdc5bf4a07aac6f6fb60589af30
---

## Bevezetés

Üdvözöllek a sorozat első epizódjában, amelyben azt nézzük meg, hogyan használhatunk ágenseket és LLM-eket az építkezéshez ebben a modern korban, amikor a programozás ennyire megváltozott. Az évek során sok hasonló alkalmat tartottunk az Exercism keretein belül, de ez az első hivatalos Tanulj fejleszteni élő adás a Jikin.

Hadd magyarázzam el, miről fog szólni ez a sorozat, mit veszünk át ma konkrétan, mit fogunk átvenni a sorozat során, és kiknek szól. Kezdjük is az utolsó kérdéssel.

## Kinek szól ez

Ez a sorozat igazából két csoportnak szól. Azoknak, akik teljesen újak a programozásban, újak ebben az egész világban, és csak el akarnak indulni, ki akarják találni, hogyan kezdhetnek el tanulni. De azoknak is szól, akik talán jóval tapasztaltabbak, akár senior fejlesztők is lehetnek, de még nem igazán mélyedtek bele az agentikus programozásban zajló változásokba, és szeretnék megérteni, mi történik, látni valamit működés közben, beszélgetni a dolgokról, és valódi megértést szerezni. Szóval bárhol is vagy ezen a skálán – a legelső programozós napodtól kezdve, amikor talán ma reggel döntöttél úgy, hogy kódolni fogsz, megtaláltad Jikit és itt vagy, egészen addig, hogy valaki nagyon senior –, ez neked szól.

Ebben a konkrét sorozatban (több sorozat is lesz) abból indulok ki, hogy semmit sem tudsz. Így ha senior fejlesztő vagy, sok minden, amit mondok, neked olyan lesz, mint a tenyeretek, és lehet, hogy kicsit unalmasnak találod. Ha ez az első napod, akkor nem feltételezek semmilyen előzetes tudást. Lehet, hogy lesznek dolgok, amik meghaladják a jelenlegi tudásodat, de úgy vezetem ezt az alkalmat, mintha neked szólna. Ha még nem csináltad ezt az új típusú programozást, és tapasztaltabb vagy, ez akkor is hasznos lesz.

Végigveszem, mit is jelent az ilyen típusú programozás. Mutatok pár példát olyan dolgokra, amiket most kell elintéznem a Jikiben, és meg is oldom őket, mintegy felvezetésképpen. Aztán átbeszélünk néhány olyan kifejezést, amit használunk, és hogy ezek a dolgok hogyan működnek együtt. Utána pedig ténylegesen meg is csinálunk valamit – egy új honlapot.

Szeretnék mindenkit arra biztatni, hogy csináljon ilyet. Építs magadnak egy új weboldalt. Lehet ez a saját honlapod, de lehet valami más is. Akár készíthetsz egy kódból álló önéletrajzot vagy bármi mást. Az epizód után ültesd át a gyakorlatba, amit itt láttál, és próbálj ki dolgokat.

Én a Claude-ot és néhány haladóbb eszközt fogok használni, de azt is megmutatom, hogyan csinálhatod mindezt anélkül, hogy pénzt kellene költened rá. Ha ingyen szeretnél ágensekkel dolgozni, akkor erre is kitérünk.

### Mit kell előre előkészítened?

Abszolút semmit. Csak jelenj meg. Elmagyarázom a dolgokat, aztán kiadok pár útmutatót, ami ehhez kapcsolódik. Lesz útmutató az OpenCode telepítéséhez, amit meg fogunk nézni, útmutató az LLM-ek különböző kifejezéseiről és arról, hogyan működnek, valamint egy útmutató a GitHub használatáról, amiről szintén beszélünk majd. Pár napot eltölthetsz azzal, hogy felzárkózol és átveszed ezeket.

Ha olyan kérdésed van, amire ebben az epizódban nem kapsz választ, bármikor felteheted a fórumon, a [forum.jiki.io](https://forum.jiki.io) címen. Ott vagyok. Más senior fejlesztők és a többiek, akik követik az adást, szintén ott vannak, és válaszolhatnak a kérdésekre.

## Az LLM-ek hibáinak észrevétele

Átugrok a Jiki fórumára, egy olyan dologhoz, amit kicsit korábban vettem észre. Ezek különböző fordításhoz kapcsolódó témák, és láthatod, hogy a legtöbb mellett az adott ország zászlaja van. Egy holland zászló, egy német zászló. Törökország mellett egy pulyka van. Ez valószínűleg kicsit rasszista. Ezzel mindjárt foglalkoznunk kell. De amit észrevettem, az az indonéz bejegyzés. Az egészet a Claude állította össze, beleértve az emojik kiválasztását is. Itt pedig egyértelműen kitalált egy emojit, vagy olyan emojit sikerült találnia, ami nem működik.

![A Jiki fóruma a fordítási témákkal. Törökország mellett pulyka emoji van a zászló helyett, Indonéziánál pedig egy hibás :garuda: emoji látható.](/images/projects/build-your-personal-homepage/setting-up-the-project/forum-language-flags.webp)

Itt szeretném kezdeni, mert ez a valóság. Két perccel az adás előtt vettem észre. Pontosan ilyen dolgokkal fogsz gyakran találkozni, amikor ezekkel az LLM-ekkel és ágensekkel dolgozol. Kitalálnak dolgokat. Azt hiszik, van itt egy emoji, de ezen a weboldalon nem működik. Törökország zászlaja helyett egy szó szerinti pulykát tesznek.

Ezek olyan hibák, amelyek nekünk, embereknek egyből feltűnnek. Rögtön kiszúrjuk őket. Felnevetünk rajtuk. A gond az, hogy ugyanilyen döntéseket hoz az LLM máskor is. És ez a legjobb modell, a Fable. Arról a modellről van szó, ami annyira intelligens és veszélyes, hogy az amerikai kormány betiltotta. Mégis pulykát tesz a török zászló helyére, és nem biztos, hogy tudja, ez valakit bosszanthat. Persze az is lehet, hogy csak remek humora van. Nem tudom.

Ezek a látható dolgok, amik nyilvánvalóak. Képzeld el, hány apró hiba, vagy mondjuk inkább rossz döntés keletkezik a háttérben. Ahogy a következő egy évben, vagy akár sok évben ezeket az adásokat készítjük, az LLM-ek javulni fognak. De azt szeretném, ha rögtön, zsigerből tudnád: ezek nem valamiféle programozó istenek, akiknek odaadhatsz bármit, és ők mindent hibátlanul megoldanak. Folyamatosan hibáznak. Van, ami nyilvánvaló és vicces, van, ami nem. Ha modern szoftverfejlesztő akarsz lenni, a munkád nagy része az lesz, hogy ezeket a hibákat keresed. És ez alatt nem azt értem, hogy figyeled, mikor tesznek pulykát a török zászló helyett. Hanem a fogalmi hibákat keresed, az ötleteket, amiket kitalálnak, de amik valahogy nem stimmelnek, nem állnak össze.

### Mit jelent az i18n?

Az internacionalizációt. A 18 az i és az n közötti betűk száma. Egy rövidítés.

## Az agentikus programozás dióhéjban

Nézzük meg, hogy néz ki egy kis agentikus programozás. Vegyük azt az indonéz fogalomtárat a hibás emojival. Készítek róla egy képernyőképet, átjövök a terminálba, és megnyitom a Claude Code-ot. Kicsit később beszélünk majd arról, hogyan kell beállítani. Lehet, hogy most még ijesztő, fekete-zöld dolognak tűnik, de mindjárt rátérünk.

Amit most meg akarok mutatni, az a következő. Behúzom a képet, és azt mondom: „javítsd ki a hibás emojit”. Erre elindul a háttérben, gondolkodik és nagyon sok dolgot csinál. Láthatjuk, miket csinál. Parancsokat futtat. Megpróbálja kideríteni, mi történik. Miért hibás ez a zászló? Mit jelent ez a zászló? Hogyan jött létre ez a dolog? Most elkezd scripteket olvasni. Ez a fórum nyelvi kategóriáját létrehozó script, amit akkor futtatott, amikor létrehozta azt a kategóriát. Most átnézi az összes eddigi tevékenysége történetét, és megpróbálja kitalálni, mikor romlott el, hogyan romlott el, miért romlott el. Különböző fájlokat olvas. Különböző parancsokat futtat. Láthatod, hogy egyre több dolgot csinál, a negyedik parancsát futtatja, és így tovább.

![Claude Code a terminálban, amint a „Fix the incorrect emoji” feladaton dolgozik: mintákat keres, fájlokat olvas, shell parancsokat futtat.](/images/projects/build-your-personal-homepage/setting-up-the-project/claude-code-fixing-emoji.webp)

Aztán közli, hogy megtalálta. A helyes emojinak az indonéz zászlónak kell lennie, nem `:garuda:`-nak. Elindul, futtat valamit, ami frissíti a kategóriát. És ha most átjövünk a fórumra, és megnyitjuk, láthatod, hogy kijavította. Most már itt van az indonéz zászló.

![A Glossary for Indonesian téma a fórumon, most már a helyes indonéz zászlóval.](/images/projects/build-your-personal-homepage/setting-up-the-project/indonesian-flag-fixed.webp)

Na, ez az agentikus programozás dióhéjban. Azt mondtuk neki: „csináld meg ezt az egy dolgot”. Erre ő elindult, futtatott különböző parancsokat, dokumentumokat olvasott, a háttérben nagyon bonyolult dolgokat intézett, olyan komplikált bash parancsokat, amiket nagyon fájdalmas lenne megírni. Kivéve, ha valaki Exercism maintainer, mert annak nagyon könnyű. De nekünk, halandóknak, lehet, hogy kicsit bonyolult lenne. Átnézte, megpróbálta kideríteni, mikor romlott el. Átolvasta a fájlok előzményeit. Megtalálta az indonéz bejegyzést és néhány naplóbejegyzést. Elolvasta a szabályokat, amiket adtam neki, talált néhány változót, amivel frissíteni tudja a fórumot, kiderítette, mi a baj, röviden megbeszélte velem, majd frissítette azt a dolgot.

Én így építettem a Jikit. Így dolgozik ma rengeteg modern szoftverfejlesztő, sőt, azt mondanám, a szoftverfejlesztők többsége. Észreveszünk egy ilyen problémát. Kiszúrjuk. Talán egy másik embertől érkező hibajegy alapján. Aztán odaadjuk valaminek, mint a Claude, vagy a számtalan más modell valamelyikének, és mindjárt rátérünk ezekre. Ők lefuttatják ezt a bonyolult, több lépésből álló folyamatot, aztán kijavítják a hibát.

Ez a hiba persze nagyon egyszerű. Egy oldal. Hibás emoji. Ennek az emojinak kell itt lennie, és helyette egy másik van. Így elég gyorsan ki tudja javítani. De ez a munkafolyamat akkor működik igazán jól, ha nem csak egy apró dolgot akarunk kijavítani, hanem egy új funkciót építünk, vagy valami nagyon bonyolult hibát keresünk. Amihez több száz fájlt kell elolvasni, aztán írni néhány fájlba.

## Bölcsesség a költségekkel kapcsolatban

Mielőtt egy másik példát vennénk, hadd mutassak meg valamit. Be tudom írni, hogy `usage`, és a `usage` megmutatja, mi történik a háttérben. Láthatod, hogy a Claude-nak ez az elejétől a végéig 52 másodpercig tartott, és 37 centbe került. Nekem Claude Max előfizetésem van, ami azt jelenti, hogy nagyon nagy keretet kapok a különböző modellekből. Úgyhogy nekem ezért nem számoltak fel 37 centet. Benne van a havi előfizetésben.

![A Claude Code használati képernyője, amelyen látszik a 0,38 dolláros összköltség és az 52 másodperc API-idő az emoji javítására.](/images/projects/build-your-personal-homepage/setting-up-the-project/claude-code-usage.webp)

De szeretném, ha már az elején tisztában lennél vele, ahogy elkezdünk erről beszélni: az, hogy ezt kitalálta és megoldotta, 37 centbe került. Ha akartam volna, egyszerűen átjöhettem volna a fórumra, és saját kezűleg szerkeszthettem volna a témát. Kiválaszthattam volna az emojit, beírhattam volna, hogy Indonesia, majd rákattinthattam volna a zászlóra. Az nem került volna 37 centbe. Ha belegondolsz, hogy minden egyes dolgot, amit fejlesztőként csinálok, akárhány órát is kódolok naponta, valószínűleg megfontoltan kell döntenünk arról, hogy mire használjuk ezt a szupererős intelligenciát, és mit tudunk inkább kézzel megcsinálni.

Ez különösen igaz azokra, akik nem fizetnek Claude Max előfizetést, és nincs sok pénzük. Meg fogom mutatni, hogyan csinálhatod mindezt ingyen. De az ingyenes csomagokban korlátozott a felhasználási keret. Elég nagy korlát. Minden benne van, amire szükséged lehet. De szeretném, ha úgy állnál hozzá, hogy nem pazarolod el ezt a keretet olyan dolgokra, amiket kézzel is meg tudsz csinálni. Sokkal jobb, ha magad vizsgálod ki, rájössz, mi történik, közben tanulsz is egy kicsit, aztán kijavítod a dolgot. Így tanulsz a legjobban. Ha mindenre azonnal ráengeded ezt, bajban leszünk.

Hadd mutassak még egy dolgot. Ez megmutatja a havi felhasználásod. Ez az én elmúlt hónapom. Mint mondtam, Claude Max csomagom van, így csak egy fix 200 dollárt fizetek havonta. De ha nem lenne Claude Max előfizetésem, hanem közvetlenül fizetnék ezért, akkor ebben a hónapban 35 000 dollárba került volna. Hárommilliárd tokent használtam ebben a hónapban. Mindjárt beszélünk arról, mik a tokenek. De nagyon gyorsan össze tud jönni egy nagyobb számla.

![Terminálban megjelenő táblázat a napi token-felhasználásról modellenként lebontva: több milliárd token felhasználva a Fable, Opus, Sonnet és Haiku modelleken keresztül.](/images/projects/build-your-personal-homepage/setting-up-the-project/monthly-token-usage.webp)

### Mi a helyzet az Ollamával és más helyi modellekkel?

Ezek működnek. Ha van elég erős számítógéped, amin tudsz helyi modelleket futtatni, például egy jó MacBookod vagy egy jó Windows géped jó GPU-val, akkor a számítógépeden is futtathatsz modelleket, ahelyett hogy adatokat küldenél a Claude-nak, és a Claude visszaküldene adatokat. Viszont ez sokkal, sokkal lassabb lesz. Az, amit az előbb néztünk, és 52 másodpercig tartott, itt 5 percig, vagy fél óráig fog tartani. Még egy csúcskategóriás gépen is tízszer, hússzor, harmincszor lassabb, mint a Claude-ot vagy valami hasonlót használni.

### Nem olcsóbb néha felvenni egy junior fejlesztőt, mint fizetni egy LLM-ért?

Mivel Claude Max előfizetésem van, ami havi 200 dollár, a teljes költségem ennek a használatáért havi 200 dollár. Egy junior fejlesztő ennek a tízszeresébe kerül. De ráadásul én általában egy időben hat vagy hét Claude-ot futtatok. Úgyhogy ha ez a Claude olyan jó, mint egy junior fejlesztő, akkor hat vagy hét ilyen junior fejlesztőm fut egyszerre, különböző lapokon, és mind mást csinál. Egyszerűen nincs már olyan gazdasági helyzet, amiben van értelme kézzel megíratni valakivel ezt a kódot.

De ahol te profitálhatsz, ahol te, mint junior, értékessé válhatsz, az az, hogy ha te, mint junior, hat vagy hét Claude-ot futtatsz egyszerre, és egyszerűbb, alapvetőbb feladatokat adsz nekik, akkor óriási értéket teremtesz egy cég számára. Az én teljesítőképességem fejlesztőként nagyjából annyi, hogy ötöt vagy hatot futtatok egyszerre, és még így is rengeteg időm megy el gondolkodással és olvasással. Mindenki itt fog kikötni, ha tisztességesen csinálja, és gondolkodik azon, ami történik. Úgyhogy ha ma be akarsz lépni a tech világába, azzal fogsz értéket teremteni, ha megtanulod irányítani ezeket a Claude-okat, a többi modellt, az LLM-eket, az ágenseket, és megtanulod, hogyan promptold, hogyan hatalmazd fel őket, és hogyan nézd át a munkájukat értelmes, hatékony módon.

## Új nyelv elindítása

Szóval ez a kiindulópontunk. Most már tudsz egy kicsit arról, hogyan működnek ezek a dolgok. Beindítok egy másikat is, amíg beszélgetünk. Az egyik dolog, amit megépítettem, egy nyelvindító parancs a Jiki különböző nyelvekre való fordításához. A brazil portugál már el van indítva a fórumon, de szeretném elindítani az európai portugált is. Csak rákattintok, hogy fusson, aztán megnézzük.

Ennek az a dolga, hogy információkat, egy útmutatót, egy fogalomtárat és egyéb dolgokat hozzon létre, hogy lefordíthassuk a weboldalt portugálra. Láthatod a törököt a fórumon. Ez az a fogalomtár, amit kiadott, az összes kifejezéssel, amit törökre fordítunk.

Ez az ágens most elindult, és rengeteg munkát fog végezni, hogy ezt jól csinálja. Más ágenseket is be fog indítani. Van egy fő ágensünk, aki mindezért felelős. Elküld más ágenseket, hogy kutassák ki a portugálhoz illő kifejezéseket. El fogja küldeni őket, hogy nézzék meg a Mozilla dokumentációját és a Microsoft dokumentációját, hogy megtalálják, milyen kifejezéseket használnak. Valószínűleg megnéz Duolingót és más weboldalakat is. Aztán vissza fog jelenteni nekem egy csomó információval arról, amit talált, és feltesz majd néhány kérdést.

Amíg ezt csinálja, szeretném egy kicsit megnézni a parancsot, amit az előbb futtattam, a Bootstrap Language-et. Ez az, amit a Claude csinál. Ezeket az utasításokat követi a Claude. Van egy kis rész felül, ami csak információ a Claude számára arról, hogyan kell ezt futtatni. Minden más pedig olyan információ, amit te vagy én is el tudunk olvasni, és ami elmagyarázza, mi történik.

Azt mondjuk a Claude-nak, hogy indítson el egy új nyelvet. Azt mondjuk, hogy kutassa ki, hogyan írják a nyelvet, egyezzünk meg olyan döntésekben, amiket csak én hozhatok meg, nézze meg ezeket az útmutatókat, és a magyart használja alapul, pusztán azért, mert az volt az első, amin dolgoztunk. Aron, aki itt frontend fejlesztő, magyar. Aztán van egy csomó fázis, amin végigmegy. Néhány ellenőrzés, amit elvégez. Láthatod: először is azt mondjuk, ellenőrizd, hogy ez a nyelv létezik-e már. Ha igen, állj le és jelentsd. És látod, az első dolog, amit csinál: „Először is megnézem, hogy a nyelv létezik-e.” Átmegy rajta, nem létezik, továbblép.

Aztán van néhány fájl, amit elolvas. Elolvassa ezt a szabályfájlt, ezt a hangnemfájlt, néhány más információt, és mindezt gyakorlatilag betölti a memóriájába. Mindjárt beszélünk arról, hogy ez pontosan mit jelent. Úgyhogy most ott ül az összes ilyen információ, az összes nagy dokumentum, amit én írtam a szabályokkal, a helyes hangnemmel és hasonlókkal.

Aztán elindul kutatni. Különböző szabályaim vannak, amiket adtam neki. Kerüld az LLM-ek által létrehozott szennyeződést. Nem akarom, hogy egy csomó olyan tartalmat olvasson, amit más LLM-ek már megírtak. Azt akarom, hogy csak 2022 előtti dolgokat nézzen, és ellenőrizze a tartalom dátumát, mielőtt felhasználja. Több forrás alapján ellenőriz. Azt mondom neki, legyen gyanakvó, legyen nyugodt a bizonytalansággal kapcsolatban, és keressen különböző dolgokat. Milyen metaforákat használnak az emberek? Milyen a formalitás és a nyelvi regiszter szintje? Aztán mindezt összerakja valamilyen struktúrába, megvitatja velem, és megáll. El fogja magyarázni, mit talált, feltesz néhány kérdést, javasol néhány kulcskifejezést. És miután én elfogadtam ezeket, miután megvitattuk, elmegy és megír egy fogalomtárat és egy útmutatót, összerakja őket, és létrehozza a fórumbejegyzést. Képes bemenni a Jiki fórumára és létrehozni azt a bejegyzést, majd létrehozza a fogalomtár bejegyzést is. Ez két külön bejegyzés.

Szóval ez az a parancs, amit megírtam, és amit aztán követhet. És látjuk a háttérben, ahogy dolgozik. Na, tessék: most jelenti vissza a kutatási eredményeit. A tanulókat így kell megszólítani: használjuk a tegező „tu”-t, ami a meleg, hétköznapi megszólítás, és ne a másik, formális hangnemet. Aztán döntéseket kér tőlem. Rendben van ez? Ugyanazokat a konvenciókat használja, mint Brazília? Ad néhány kifejezést, amit választott. És ezen a ponton átnézhetem, és azt mondhatom, oké, minden döntéssel elégedett vagyok, elfogadom az alapértelmezéseidet. Erre ő tovább fog menni és folytatja.

![Claude visszajelenti az európai portugálra vonatkozó kutatási összefoglalóját, forrásokkal és azzal a döntéssel, hogy a tegező „tu”-t használja.](/images/projects/build-your-personal-homepage/setting-up-the-project/portuguese-research-findings.webp)

### A parancsok és a készségek ugyanazt jelentik?

Igen, ugyanazok. Minden egyes LLM cégnek más neve van mindezekre.

## Ágensek és modellek

Szeretnék egy pillanatra megállni, és elgondolkodni azon, ami itt történt, mert ez kulcsfontosságú ahhoz, hogy megértsd a különbséget aközött, amikor megnyitod a Claude alkalmazást vagy a ChatGPT-t, és beszélgetsz vele, és aközött, amikor ilyen agentikus programozást használsz.

Amikor egy felhasználói felületen beszélgetsz a Claude-dal, felteszel egy kérdést, és gyakorlatilag egyetlen ügynökkel beszélgetsz, aki talán elmegy, leellenőriz valamit, aztán visszajön és folytatja az írást. Ez nagyon olyan, mint egy beszélgetés közted és egy személy, egy ügynök között. Amikor ebben az agentikus programozási modellben dolgozol, a háttérben az történik, hogy rengeteg ügynököt indítunk el, akik különböző dolgokat csinálnak. Lesznek ügynökök, akik kutatnak, akik terveznek, akik építenek. És saját ügynököket is készíthetünk. Olyan ügynököket, amik bizonyos módon tesztelnek, olyan ügynököket, amik azt ellenőrzik, hogy a dolgok megfelelnek-e bizonyos szabványoknak. És gyakran az az ügynök, akivel beszélünk, az irányítja az összes többi ügynököt.

Ezek az ügynökök különböző modelleket használhatnak. Szóval itt az ideje, hogy a modellekről beszéljünk. Biztosan sokat hallottad már ezt a kifejezést. Valószínűleg van egy jó elképzelésed arról, mik a modellek, de gyorsan elmagyarázom.

Különböző cégeknek, mint például az OpenAI vagy az Anthropic, különböző modelljeik vannak, és a modellek az LLM-ek működésének alapvető mechanizmusai. Olyasmi, amit bizonyos mennyiségű adaton tanítottak be, hogy egy bizonyos sebességgel működjön. A csúcsmodellek, ahogy nevezik őket, a legjobb modellek. Az Anthropic esetében ez jelenleg a Fable, vagy a Mythos. Ezek lassabbak, drágábbak, de nagyon erősek. A másik véglet a Haiku, ami egy sokkal gyorsabb modell. Körülbelül ötvenszer olcsóbb futtatni, sokkal gyorsabb, de nem gondolkodik olyan jól. Aztán ott van a Sonnet és az Opus. Tehát ez a négy modell van, és az összes szolgáltatónak megvannak a maga különböző modelljei. Néhányuk, a nagyon csúcskategóriásak, szuper intelligensek. Néhányuk sokkal kevésbé intelligens, de sokkal gyorsabb.

Egy alapvető feladatnál, mondjuk annál, amit az előbb néztünk, hogy miért hibás ez a zászló, nem lesz különbség a Haiku és a Fable teljesítménye között. De ha a Fable-t használod hozzá, ötvenszer több pénzt költesz rá. Úgyhogy az egyik dolog, amire mindig figyelnünk kell, az az, hogy melyik modell a megfelelő a feladatra. Ezáltal a dolgok nagyon gyorsak maradnak, a megfelelő minőségi szinten tartjuk őket, és a költségeinket is alacsonyan tartjuk, ami szintén fontos.

Amikor futtatsz egy ügynököt, ami aztán több más ügynököt is elindít, ők folyamatosan hoznak ilyen döntéseket. Ha olyan ügynököket indítanak, amik egyszerű dolgokat csinálnak, akkor alacsony kategóriájú modelleket használnak. Ha olyan ügynököket indítanak, amik nagyon bonyolult dolgokat csinálnak, akkor a Fable-t indítják.

## Erőfeszítés

Van még az erőfeszítés fogalma is. Az erőfeszítés azt jelenti, hogy egy modell mennyi fáradságot hajlandó beletenni. Tehát mit jelent az erőfeszítés? Ezek a modellek úgy működnek, hogy önmagukkal beszélnek. Van egy hosszú, folyamatos beszélgetésük. Ezt láthattad, ha használtad a Claude-ot vagy a ChatGPT-t, ahol van egy „gondolkodás mutatása” opció, és láthatod, ahogy a modell önmagával beszélget. Az történik, hogy következtetnek, azáltal hogy kiírják, mit gondolnak, mi történhet, és erre építenek tovább.

Amikor az erőfeszítésről beszélünk a Claude világában, és más eszközöknél is, akkor azt mondjuk: mennyi időt tölts azzal, hogy magaddal beszélgess, mielőtt visszajössz egy válasszal. Alacsony erőfeszítés azt jelenti, ne igazán beszélgess magaddal, csak add vissza az első dolgot, ami eszedbe jut. Magas erőfeszítés azt jelenti, sokat beszélgess magaddal. És ami a magas erőfeszítésben jó, hogy a Claude gyakorlatilag kimondja az első dolgot, ami az eszébe jut (ez egy rossz hasonlat, de az első dolog, amit kitalál), de aztán erről újra következtet, hogy megnézze, értelmes-e vagy sem. Aztán hozzáad egy harmadik réteget, majd az egészről újra következtet, hogy megnézze, értelmes-e vagy sem. Aztán hozzáad egy negyedik réteget. Folyamatosan következtet arról, amit mond, amíg el nem jut egy olyan pontra, amivel elégedett, vagy amiről meggyőződött. Alacsony erőfeszítés esetén viszont csak egyből visszaadja a választ. És ez lehet, hogy rossz, lehet, hogy nem. A gondolkodását semmi sem ellenőrizte.

Tehát van ez a két tengelyünk. Ott van a modell minősége: Fable, Opus, Sonnet, Haiku. És ott van az erőfeszítés mértéke, amit a modell hajlandó beletenni: alacsony, közepes, magas, extra magas. És lehet tovább is menni. A szolgáltatók gyakran többet kérnek, minél tovább mész.

A Claude Code-ban a modellt a `/model` beírásával tudjuk megváltoztatni, és választhatunk az Opus, a Fable, a Sonnet vagy a Haiku között. És választhatunk erőfeszítést: low, medium, high vagy max, néhány csillogó max dologgal, és ultracode, ahol gyönyörű animációk mennek, amibe az emberek rengeteg munkát tettek.

Én általában az Opust használom közepes erőfeszítéssel alapértelmezett modellként a legtöbb dologhoz. A legtöbb dolognál, amit csinálok, azt szeretném, hogy valami olyasmi, mint az Opus, át tudja gondolni a dolgot, és úgy látom, hogy a közepes erőfeszítés a megfelelő egyensúly. De erre nagyon figyelek, és amikor feladatokat kezdek, végiggondolom, melyik modellt akarom. Ez egyszerű, vagy nehéz? Mennyi erőfeszítést kell ebbe az egész folyamatba beletenni?

### Hogyan tarthatjuk nyilván, hogy melyik modell a legjobb egy feladatra?

Ezt idővel fogod megtanulni. Egy egyszerű hüvelykujjszabály: kérdezd meg magadtól, hogy mennyire nehéz ez neked. Nagyon könnyű? Olyan, mint kicserélni egy zászlót egy fórumbejegyzésben? Az nagyon könnyű. A Haiku meg tudja csinálni alacsony erőfeszítéssel. Olyat kérsz tőle, ami észbontóan bonyolultnak tűnik számodra? Akkor nyúlj egy jobb modellhez vagy nagyobb erőfeszítéshez.

A Fable csodálatosan alkalmas hosszan futó feladatokra. Hogy egy példát mondjak: tegnap nyitva volt egy munkamenetem, ahol fogtam az összes videónkat (valamikor beszélni fogok róla, hogyan készítettem a videókat), és kinyertem belőlük az összes angol szöveget. Bármilyen angol szöveget, ami a képernyőn van, kivettem a videókból, és rátettem egy rétegként, hogy aztán egyszerűen kicserélhessem egy másik nyelvre, és újraexportálhassam a videókat egy másik nyelvvel a képernyőn.

A Fable-lel csináltattam ezt. Kiadtam neki egy feladatot. Elértem, hogy minden videóhoz indítson egy Fable-ügynököt, így 32 Fable futott egyszerre. Mindegyikük végigment a videó minden egyes részén, szöveget keresve. Képernyőképeket készítettek, majd frissítették a képeket, eltávolítva a szöveget a képekről. Aztán kitalálták, milyen betűtípussal volt megírva a szöveg, mekkora volt a betűméret, a betűvastagság, a betűköz, a sorköz, a karakterpárok távolsága, meg minden ilyesmit a változó betűtípusoknál. Aztán kiírták ezt a szöveget a képernyőre a megfelelő helyre, és ismétlődően képernyőképeket készítettek, és összehasonlították őket, amíg a két képernyőkép pixelpontosan azonos nem lett. Volt egy Fable-em, ami kitervelte az egészet, kiképezte, megnézte, írt némi dokumentációt, és volt egy koordináló Sonnet-em, ami elindított további Fable-öket, hogy elvégezzék ezeket a munkákat. Ez körülbelül három óráig tartott. Kb. 400 dollárba került. Ez is benne van a Max előfizetésemben, de egyébként kb. 400 dollárba került volna. És gyakorlatilag az összes videót olyan állapotba hoztam, hogy készen állnak a továbblépésre.

Egy ilyen helyzetben tudtam, hogy ez elég bonyolult feladat. Korábban megpróbáltam az Opusszal is, de az Opus nem tudta megcsinálni. Túl bonyolult volt az Opusnak, így tudtam, hogy a Fable-re van szükség.

### A csúcsmodellek olyanok, mint a csúcskategóriás okostelefonok?

Igen, pontosan. Okosabbak, jobbak, de drágábbak is, és általában lassabbak. És ne feledd, a mai csúcsmodell olyan, mint a jövő év olcsó modellje. Ez már most is így van. A Haiku a tavalyi csúcsmodellnek felel meg. Úgyhogy a Haiku már most elég jó ahhoz, hogy rengeteg kódolást elvégezzen, pedig ez az olcsó modell a másik végletről. Csak akkor van szükséged a drága modellre, ha valóban olyat csinálsz, ami az előző modellen, például az Opuszon, lehetetlen volt. A csúcsmodellhez csak nagyon speciális helyzetekben érdemes nyúlni.

### Egy szakértőnek nem frusztráló, hogy fizet a kódolásért ahelyett, hogy maga csinálná?

Én havi 200 dollárt fizetek. Bár ez egy jelentős összeg, de alacsony ahhoz a plusz termelékenységhez képest, amit teremt. Azt hiszem, mostanra ott tartok, hogy legalább féllel produktívabb vagyok. A teljesítményem másfélszerese a korábbinak. Nem tudom, mennyi lenne a fizetésem a piacon, mert sosem volt állásom, de ha ezt a mércét vesszük, akkor szerintem egy csomó pénzt spórolok meg. Úgyhogy a 200 dollár olcsó. Ha havi 2000 dollárt kellene fizetnem ezért, valószínűleg nem érné meg.

Nagyon frusztráló az idő nagy részében? Igen. De rájöttem, hogy ez egyszerűen egy absztrakciós szinttel feljebb visz. Korábban rengeteg olyan kódolás volt, amit nekem kellett megcsinálni, és ami nekem rettentő unalmas volt. Lehet, hogy egy juniornak vagy egy mediornak nagyon érdekes lett volna, de nekem szuper unalmas volt. Most ezt nem kell megcsinálnom, és nem kell egy juniort vagy egy medior menedzselnem hozzá. Ezt nagyon könnyen el tudom végezni anélkül, hogy más embereket kellene irányítanom, ami azt jelenti, hogy más módokon is szabad vagyok produktív lenni. Úgyhogy a nettó haszon nekem megéri.

De szerintem sok fejlesztő számára ez sokkal kevésbé szórakoztató, sokkal kevésbé élvezetes, mint korábban volt. Ugyanakkor ez a világ valósága. Nincs választásunk. Talán néhány embernek megvan az a luxusa az állásában, hogy nem csinálja ezt. De ha előretekersz 10 évet, nem hiszem, hogy sok embernek lesz ilyen luxusa. Úgyhogy ha szeretnéd bebiztosítani magad a jövőre, vagy előrébb akarsz jutni az iparágban, szerintem a titok az, hogy jó legyél ebben.

## Engedélyek és automatikus mód

Visszatérve a fordítási feladathoz, ez most befejeződött. Van néhány fájlunk, amik commitolva lettek. Ha visszamegyünk a fórumra, megnézzük, lett-e új bejegyzés. Hát, ez érdekes. A nyilvános fórumra való bejegyzés le lett tiltva, mert automatikus módban hagytam.

Ez úgy működik, hogy megpróbál dolgokat csinálni, és egy másik LLM figyeli, hogy mit csinál, és ellenőrzi, hogy ezek a dolgok olyanok-e, amiket kifejezetten jóváhagytam. Amint adatokat tesz közzé más weboldalakra, vagy bármi hasonlót csinál, ahhoz kifejezetten az én engedélyemet kéri. És mivel automatikus módban hagytam, csak zakatolt tovább, így nem kérdezte meg, hogy rendben van-e. Úgyhogy letiltotta. Megkérdezi: „folytassam, és hozzam létre azt a fórumbejegyzést?”, én igent mondok, és erre most ténylegesen meg is csinálja. Ez egyike azoknak a dolgoknak, amik az utóbbi két-három hónapban történtek. Most már gyakorlatilag van egy felügyelő LLM-ünk, ami engedi, hogy több dolog automatikusan történjen, de igyekszik blokkolni a kockázatos vagy veszélyes dolgokat.

Úgyhogy ha most frissítem, tessék. Itt van a fogalomtár. Ezek azok a kifejezések, amiket megtalált és elolvasott. Ez minden, amit összerakott. És most lett egy bejegyzésünk.

![A kész európai portugál fogalomtár bejegyzés a Jiki fórumán, kifejezésenkénti fordításokkal és jegyzetekkel.](/images/projects/build-your-personal-homepage/setting-up-the-project/portuguese-glossary.webp) Ha beszélsz portugálul, az európai változatban, idejöhetsz, és elkezdheted elmondani nekem, hogy mi minden rossz benne, aztán elkezdhetjük javítani a fogalomtárat és dolgozni rajta. Azok számára, akik más nyelveket beszélnek, vannak fogalomtáraink más változatokban is: olaszul, törökül és így tovább. Most már tudod, hogyan készültek. Csinálhatsz ilyet te is.

## Claude Code, Codex és OpenCode

Ez volt az átfogó áttekintés arról, hogyan működik mindez. Most azt szeretném megmutatni, hogyan tudod ezt magadnak beállítani.

Rengeteg különböző ágens és eszköz van, amit használhatsz. Tisztázzuk hát a szóhasználatunkat. A Claude Code, amit az előbb láttál a képernyőn, egy agentikus programozási eszköz, vagy talán agentikus programozási platform. A számítógépeden fut. Általában a terminálban fut, ahogy én is beállítottam. Futtathatjuk egy kódszerkesztőben is, amit mindjárt megnézünk. És ez a kapu közted és a modellek között. Mutattam, hogy válthatok Opus, Sonnet, Haiku között, és válthatok az erőfeszítési szintek között is.

Mindez a saját gépeden történik. Te a saját gépeden beszélsz. Az adatokat elküldi az Anthropicnak, valamelyik modelljüknek. Amit visszaküldenek, az nem csupán egy szöveg, ami megjelenik a képernyőn. Hanem egy csomó utasítást küldenek vissza, amit a Claude Code értelmezni tud, hogy csináljon dolgokat. Azt mondják: menj és futtasd ezt a scriptet az illető számítógépén. Menj és nézz bele ebbe a könyvtárba az illető számítógépén. Menj és érd el ezt a weboldalt, és csinálj dolgokat. Mindezek az utasítások a Claude-tól jönnek vissza.

Tehát mi nem beszélgetünk az Opusszal, a Sonnettel vagy a Haikuval. Mi beírunk némi szöveget. Ez a szöveg becsomagolódik egy csomó minden mással együtt. Becsomagolódik a kódtárunkban lévő kóddal, általunk vagy mások által írt kóddal. Becsomagolódik a teljes beszélgetési előzménnyel, a célokkal, amiket el akarunk érni, a preferenciáinkkal, hogy hogyan szeretünk dolgozni. Mindez egy csomagba kerül, és mindezt elküldik az Anthropicnak. Az ő modelljeik mindezt elolvassák, és utasításokat és némi szöveget hoznak vissza. Az egész feldolgozásra kerül, aztán lezajlik ez a ciklus, ez az ágensciklus, aminek során csinál valamit, visszamegy a Claude-hoz, a Claude visszajön és azt mondja: rendben, most csináld ezt. Mindez tőlünk távol történik. És a végén azt mondja: oké, készen vagyunk. A fórumbejegyzést nem tudtuk elküldeni emiatt. Szeretnéd folytatni? Ez a hatalmas ciklus a háttérben megy végbe.

Tehát két döntésünk van. Az egyik, hogy melyik modelleket akarjuk használni. Az Anthropic, az OpenAI vagy más modelleket a háttérben? A második döntés pedig, hogy melyik eszközzel akarunk kommunikálni. Ha a Claude Code-ot használom, akkor mindig az Anthropic valamelyik modelljével lépek kapcsolatba. Ha a Codexet használom, ami az OpenAI verziója, akkor mindig az OpenAI valamelyik modelljével, valamelyik GPT-modellel lépek kapcsolatba.

Én azt ajánlom, hogy valami mást használj, ezt pedig OpenCode-nak hívják. Az OpenCode egy nyílt forráskódú változata, ha úgy tetszik, a Claude Code-nak, a Codexnek. Ez az a kábelköteg, az az eszköz, ami a számítógépeden ül, ami az egész ciklust végzi, ami mindent irányít. De ez bármelyik modellel tud beszélni. Beszélhet az Anthropickal, az Opusszal vagy a Sonnettel. Beszélhet a GPT-5-tel és más hasonlókkal. De beszélhet egy csomó ingyenes modellel is. Maga az OpenCode ingyenes, és vannak ingyenes modellek is, amiket használhatsz.

Az OpenCode-ot úgy érjük el, hogy miután telepítettük, beírjuk a terminálba, hogy `opencode`. És választhatunk a rengeteg modell közül. Választhatjuk a Geminit, ami a Google-é. Választhatjuk az Opust, amiről az előbb beszéltünk, vagy a Fable-t. Választhatjuk a Grokot, ha szeretnéd támogatni Elon Muskot. A GPT-ket. A DeepSeeket, azt a modellt, ami híresen Kínából jött. A Qwent, ami nagyon jó kódoláshoz. És ezek a felül lévő opciók mind ingyenesek. Úgyhogy ha nincs sok pénzed, vagy ha csak ki akarod próbálni, vagy ha a munkád nem fizet előfizetést, az OpenCode-ot ingyen letöltheted, és választhatsz egyet ezek közül az ingyenes modellek közül.

Van egy útmutató, amit közzéteszek, és elmagyarázza, hogyan kell telepíteni az OpenCode-ot, hogyan lehet ingyenesen beállítani, és mely modelleket használhatod. Én jelenleg a DeepSeek V4 Flash-t (ingyenes) ajánlom, de ezeket alig próbáltam ki, úgyhogy te is kipróbálhatod és megnézheted, melyik válik be.

Egy fenntartás: ezek az ingyenes modellek nem csúcsmodellek. Bár a Big Pickle egy titkos modell, úgyhogy lehet, hogy csúcsmodell, nem tudjuk. De a többi nem csúcsmodell. Nem a legjobb, csúcskategóriás modellek. Inkább olyanok, mint a Haiku vagy a Sonnet, alacsonyabb szintű modellek. De ahhoz képest, ahol most tartasz, szerintem ez nagyon jó dolog. Mert azok a lépések, amiket meg akarsz tenni, apró, kis babalépések, és nem akarod, hogy egy szuperintelligencia csináljon meg helyetted mindent. Olyasvalakivel akarsz dolgozni és beszélgetni, akivel lépésről lépésre haladhatsz, megkérdezheted, hogyan működnek a dolgok, és közben tanulhatsz.

## Tokenek és kontextus

Hadd mutassam meg az OpenCode-ot a fordítói repóban. Ez semmit sem tud a repómról. De beírhatom, hogy „hány nyelvünk van eddig?”, és ez elmegy. Így néz ki az OpenCode. Van egy beszélgetős rész balra. Van egy beviteli mező balra lent. Amikor fut, van egy rész jobbra. A Ctrl+P-vel különböző parancsokat és egyéb kipróbálható dolgokat érhetünk el. Láthatod, hogy ez nagyon gyors. Gondolkodott néhány milliszekundumig, olvasott valamit, rájött, és visszaadta, hogy 14 nyelv van. Ha kijelölsz valamit, a vágólapra másolja, ami praktikus.

![Az OpenCode a terminálban a „Hány nyelvünk van eddig?” kérdésre válaszol, a jobb oldali kontextuspanelen 10 054 felhasznált token látható.](/images/projects/build-your-personal-homepage/setting-up-the-project/opencode-ui.webp)

Láthatod, hogy ez ingyenes, úgyhogy semmit sem költöttünk. De szeretném, ha egy kicsit odafigyelnél a jobb oldalon lévő számokra. Nem fogom részletesen elmagyarázni, hogyan működnek az LLM-ek, mert az egy olyan nyúlüreg, amibe nem éri meg bemászni. De az LLM-ek alapegysége a token. A tokent olyasminek képzelheted, mint egy szótag. A „How” valószínűleg egy token. A „language” valószínűleg három token: lang-u-age, valami ilyesmi. A „DeepSeek” valószínűleg két token. A „V4” valószínűleg két token.

Valahányszor begépelsz valamit, fogja a beírt szövegedet, és fogja mindazt, amire szüksége van a válasz kitalálásához, és mindezt elküldi a modellnek. A modell elolvassa, visszaküldi, esetleg feltesz egy tisztázó kérdést, és egy kicsit oda-vissza megy. Ehhez tokeneket használ. Azt kérdeztük: „hány nyelvünk van eddig?”. Ez talán 11 token, a szóközökkel együtt talán 15 token. Mire befejezte az olvasást, beszerezte mindazt, amire szüksége volt, elküldte, megtett néhány ugrást, 10 000 tokent használt el. Tehát ez gyakorlatilag egy 3000 szavas esszét küldött el egy modellnek, aztán visszaadott egy keveset.

Ha egy nagyobb kérdést teszünk fel, például „mi az új nyelv hozzáadásának folyamata?”, akkor elmegy, és több fájlt olvas, és láthatod, ahogy a tokenek száma növekszik az olvasás során. Ez további 6000 tokent adott hozzá a kérdés megválaszolásához, és most a kontextusunk 10%-át felhasználta. Ennek a modellnek a kontextusa, vagyis a tokenek maximális száma, amit egy beszélgetésben használhat, körülbelül 170 000 token.

Amikor ezzel dolgozol, erre egy kicsit oda kell figyelned. Minél több tokent használsz, az egész beszélgetés annál lassabb lesz, mert minden alkalommal az összes kontextus továbbítódik a modellnek. Ha még egy valamit kérdezek, az összes információt újra elküldik a modellnek. Az összes korábbi beszélgetést, az összes korábbi választ. Minden a beszélgetés minden lépésénél elküldésre kerül.

Az ingyenes modellek másik hátránya, hogy általában kisebb beszélgetési terjedelmet engednek. Az Opusnál ez 1 millió token beszélgetésenként. Itt ez inkább 150 000 vagy 170 000 lesz. Úgyhogy folyamatosan új beszélgetéseket kell kezdened. Ha beírod, hogy `/new`, új beszélgetést kapsz. Ez lenullázza a tokeneket, de a modelled onnantól semmit sem tud arról, ami az előbb történt. Szóval érdemes felvenni azt a szokást, hogy kis, rövid beszélgetéseket folytatsz különböző dolgokról.

### Aron és Nicole is így dolgozik a Jikin?

Igen. Aron szinte teljes egészében így dolgozik bármilyen frontend munkánál. Nicole ugyanezt csinálja a videószerkesztéssel. Az összes videónk kódban íródik. Nem videoszerkesztőben készítünk videókat, hanem kódban, és ő a Claude-dal dolgozva építi fel kódban az összes videót is.

### Az ingyenes modellek felhőalapúak?

Igen, az ingyenes modellek mind felhőalapúak. A te gépeiden nagyon-nagyon lassúak lennének.

### Ajánlanád a Mistralt?

Az Anthropicon kívül nem igazán tudok semmit a modellekről. Én személy szerint csak a Claude-dal dolgozom a mindennapokban. Sosem használtam, úgyhogy nem tudom. Én személy szerint csak a Claude-ot használnám, de valószínűleg csak előfizetéssel, ahol nem tokenenként fizetek.

## Az első weboldalad megépítése

Az első félidőben egy kicsit mélyre ástunk abban, hogy mik az LLM-ek, mi az agentikus programozás, és milyen a modern ciklus, amit mi, fejlesztők, használunk. Remélem, hogy az elkövetkező hónapokban, egy évben, ezzel kényelmesen fogsz tudni dolgozni. Annyira kényelmesen, hogy bármit megépíthess a nap alatt. De mielőtt továbbmennénk, szeretném hangsúlyozni azt a gondolatot, hogy a fontos az, hogy te megértsd, mi zajlik a motorháztető alatt.

Tudom, hogy elég sok információt adtam az első félidőben. Úgyhogy a második félidőben a saját honlapod megépítését nézzük meg. Azt gondoltam, hogy ma még más részekre is rátérünk, de szerintem ezeket hagyjuk a következő alkalomra. A következő alkalommal azt nézzük meg, hogyan telepítsük ki mindezt, és azt is, hogyan tolhatjuk fel a GitHubra. Van egy exkluzív ajánlatom is mindenkinek, aki a Jikit használja: kapsz egy ingyenes .tech domaint, és hamarosan ingyenes .online vagy .space domaint is kaphatsz. Így létrehozhatsz magadnak egy weboldalt ezzel a domainnel. Erről a következő alkalommal fogok többet beszélni. De ma folytatjuk az első weboldalad megépítését, és egy kicsit elgondolkodunk azon, mi minden jár ezzel.

## VS Code

Beszéltünk egy kicsit arról, hogy az agentikus programozás egy terminálban zajlik, és csak beírod az utasításaidat a Claude-nak, vagy amelyik modellt, amelyik eszközt használsz. A régi iskola szerint mindezt egy kódszerkesztőben, egy szövegszerkesztőben csináltuk. A történelem során sok szövegszerkesztő volt, de amit ma a legtöbben használunk, az a VS Code. Ha még sosem használtál szövegszerkesztőt, kódszerkesztőt, azt javaslom, telepítsd a VS Code-ot. Az útmutatókban, amiket ehhez az adáshoz adok közre, lesz egy útmutató a VS Code telepítéséhez és használatához.

Amikor az előbb láttad, hogy fájlokat nézegetek, az a VS Code volt. Ez csak egy keret, egy vászonféle, ahol szöveges fájlokat szerkeszthetsz, és van egy kis polc az oldalán, ami a fájljaidat listázza.

Akkor most építsünk egy honlapot. Először is létrehozok egy könyvtárat. Fájl, Mappa megnyitása, és létrehozok egy könyvtárat. Csak az asztalomra teszem: „my new homepage”. Szeretnélek arra bátorítani, hogy a VS Code legyen a fő munkaterületed. Úgyhogy hozz létre egy könyvtárat. Ha most nézed velem, megteheted. Ha nincs telepítve a VS Code, megállíthatod a videót, elolvashatod a VS Code telepítéséről szóló útmutatót, aztán gyere vissza.

Megnyithatjuk ezt a könyvtárat, és látjuk, hogy megkérdezi, megbízunk-e a szerzőkben. Mivel mi vagyunk a szerzők, megbízhatunk magunkban. Láthatod, hogy van egy kis helyünk, és itt fognak megjelenni a fájlok az oldalsávon. Van egy terminál alul, és ebbe a terminálba meg is nyithatjuk az OpenCode-ot. Tehát használhatjuk az OpenCode-ot lent, a fájlokat pedig fent nézegethetjük. Mivel nagyban szeretném látni a képernyőmet, most egy pillanatra különválasztom őket, és az OpenCode az egyik oldalon, a fájlok pedig a másik oldalon lesznek, hogy lássuk, mi történik.

Menjünk be az új könyvtárba, amit létrehoztunk, és nyissuk meg ott az OpenCode-ot. Valaki azt javasolta, próbáljunk ki egy másik modellt, a Big Pickle-t. Én még nem használtam a Big Pickle-t. Próbáljuk ki, és meglátjuk, mi lesz. Nem csinálunk semmi bonyolultat.

## Mi az a weboldal

Szeretnék itt egy kicsit arról beszélni, hogy mi is egy weboldal, és hogyan működik. A következő hosszabb-rövidebb időben rengeteg JavaScriptet, CSS-t, bonyolult dolgot fogunk csinálni. Ma csak a legalapvetőbb dolgokat csináljuk. Ha tudsz bármit a weboldalakról, ez valószínűleg nagyon alapnak fog tűnni. Ha nem tudsz semmit, remélhetőleg ez jó alapozó lesz a következőkhöz.

Beszéljünk egy kicsit arról, hogy mi is egy egyszerű, hétköznapi weboldal. Ehhez használhatjuk az én jelenlegi személyes weboldalamat. Elég egyszerű. Csak némi szöveg egy oldalon. Bármelyik weboldalra elmehetsz, jobb gombbal kattinthatsz, és kiválaszthatod a Oldal forrásának megtekintése lehetőséget, és valami ilyesmit fogsz látni, ami egy rakás valami. Ez a HTML.

![Jeremy személyes weboldalának HTML forrása, a doctype-pal, a head taggel, a meta tagekkel és a címmel.](/images/projects/build-your-personal-homepage/setting-up-the-project/ihid-page-source.webp)

A HTML arról híres, hogy kisebb-jel az elején és nagyobb-jel a végén különféle dolgoknál. Ez egy fejléc tag. Aztán van némi CSS-ünk. A CSS a stílussal foglalkozik. Erre mindjárt rátérünk. Aztán itt van az oldal teljes tartalma. Ez a fejléc. Láthatod, itt a fejléc lilával. Van benne egy kép. Az `img` a képet (image) jelenti, egy linkkel a képhez. Van benne némi szöveg, egy életrajz rólam, aztán még több szöveg, bekezdésekre tördelve. A `p` a bekezdést (paragraph) jelenti. Még egy kis információ, néhány címsor. Ez egy második szintű címsor, ez egy első szintű címsor. Ez itt lent pedig JavaScript, ami kissé ismerősnek tűnhet, ha már csináltad a Programozási alapok tananyagot.

Amikor tavaly tartottuk a bootcampet és a webfejlesztési alapozót, rengeteg időt töltöttünk ennek a HTML-nek a mélyreható tanulmányozásával, és a CSS alapos tanulmányozásával. Biztossá tettük, hogy megértsd az összes különböző taget és hogy hogyan működnek. Szintén megértettük a CSS-t, és hogy hogyan tudjuk azt használni a dolgok stílusozására.

Ez egy példa arra, hogy szerintem a dolgok megfordultak. Azt gondolom, hogy most az a teendő, hogy egyszerűen csináljunk valamit, aztán nézzük meg, amit csináltunk, és értsük meg, hogyan néz ki. Tehát ahelyett, hogy azt ajánlanám, amit korábban, sőt, amit korábban muszáj lett volna, hogy elkezdd az egészet begépelni, most azt javaslom, hogy egyszerűen kérjük meg az LLM-ünket, hogy készítsen nekünk egy nagyon, nagyon alap struktúrát, amit használhatunk.

## index.html

A másik tudnivaló, hogy van egy nagyon régi konvenció, miszerint egy `index.html` nevű fájl a legelső oldal egy weboldalon. Ha elmész a ihid.info/index.html címre, gyakorlatilag ezt látod, a kezdőoldalt. A szabály az, hogy ha nem írsz semmit a domain után, akkor megnézi, van-e index.html nevű fájl, és ha van, egyszerűen megmutatja a tartalmát. Ez az index.html egy nagyon különleges fájl. Nem csinál semmi varázslatosat, csak egy szabvány. De rengeteg weboldal hagyományosan így működik.

Úgyhogy ha nyitva van az OpenCode, beírhatod:

> Hozz létre egy index.html-t, amin a legminimalisabb vázszerkezet van egy oldalhoz, egy Jeremy Walker nevű fejléccel és egy egysoros életrajzzal.

Itt van egy fordulópont. Ha akarnánk, mondhatnánk neki, hogy „menj és készíts nekem egy egész weboldalt”, és megtenné. De két dolog történne. Az egyik, hogy nem olyan weboldal lenne, amilyet mi szeretnénk. Ahogy haladunk előre, el fogunk gondolkodni azon, hogy milyenek ezek a weboldalak, és valójában meg foglak kérni, hogy menj el és gondolj ki egy weboldalt. Erről mindjárt beszélünk. De ami még fontosabb, annyi mindent adna, amiből te nem tanulnál. Viszont ha ilyen apró lépésekkel haladsz, ebből fogod megtanulni, hogyan működnek a dolgok.

Tehát ezt elküldjük, és ezt írta ki. Most már megnézhetjük a VS Code-ban és megnyithatjuk. Nekem ez a munkafolyamatom. Itt van az egész weboldalam, talán több ezer fájl, és ráveszem az ügynökömet, hogy dolgozzon a fájlokon. És ha ellenőriznem kell valamit, megnézem, mit csinál, szerkeszteni akarok valamit, egyszerűen megnyitom itt, és ránézek.

Aztán a másik dolog, amit tehetünk most, hogy megvan ez a fájl, hogy megnyitjuk a Chrome-ban. Ha jobb gombbal kattintasz a fájlra, és a Megnyitás Chrome-mal lehetőséget választod, most láthatod, hogy van egy oldal, amit épp most készítettél. Szóval gratulálok. Készítettél magadnak egy honlapot. Nem egy különösen izgalmas vagy jó honlap, de egy honlap.

![A minimalista honlap a Chrome-ban megnyitva. Egy Jeremy Walker feliratú címsor és egy egysoros életrajz, stílus nélkül.](/images/projects/build-your-personal-homepage/setting-up-the-project/first-barebones-homepage.webp)

## Értsük meg, mit készítettünk

Szeretném, ha szánnánk egy percet – és ez az a gondolkodásmód, amit mindig szeretnék, ha követnél –, hogy egy percet rászánjunk, és megnézzük, mi történik itt. Most, hogy ezt megcsináltad, azt szeretném, ha ezt mondanád:

> Magyarázd el, mit csinálnak a részei.

Használhatod ezt a ciklust nem csak arra, hogy dolgokat csináltass, hanem a megértésre, a tudás felépítésére is. Nem szabadna túl bonyolult kérdésnek lennie számára, hiszen a) most írta, és b) nagyon egyszerű. És elmagyarázza. Tessék.

Az első sor, a doctype tag azt mondja a böngészőnek, hogy ez egy HTML5 dokumentum. Szóval mi is történik itt? Mi ez a HTML? Hát, ez a böngésző a Chrome (más böngészők is kaphatók). Tudja, hogyan kell egy HTML fájlt elolvasni, és hogyan kell úgy képernyőre tenni, hogy te láthasd. A HTML egy specifikáció. A hipertext jelölőnyelv rövidítése. Így néz ki, egy csomó taggel és információval, és a Chrome, vagy bármelyik más böngésző, el tudja olvasni ezeket a tageket, és a képernyőre tenni.

A fenti részt most hagyd figyelmen kívül. Csak nézd a body részt. Egy címsort tesz ki, és egy bekezdésszöveget. Ez a `h1` az első szintű címsort (level one heading) jelenti. És láthatod, hogy mivel ez egy első szintű címsor, a Chrome tudja, hogy egy kicsit nagyobbra és egy kicsit félkövérebbre kell formáznia. Ez a `p` viszont egy bekezdés. A Chrome tudja, hogy ezt egy kicsit kisebbre kell formázni.

Ha akarnánk, tehetnénk bele más tageket is. Ez egy rendezetlen lista, `ul`, és benne listaelemek, `li` lennének. Egy dolog, ami történt, mióta elkezdtem a Claude-ot használni, hogy már nem tudok rendesen gépelni. Tehát összerakhatunk különböző tageket, és ebből lesz néhány felsoroláspont.

Tehát ez egy weboldal anatómiája, a csontjai. Minden egyes weboldal ugyanilyen. Ha elmegyünk a jiki.io-ra, és megnézzük az oldal forrását, láthatod, hogy pontosan ugyanaz. Rengeteg ilyen tag. Láthatjuk, hogy ez ugyanaz. Csak egy rendezetlen listát, egy listaelemet, egy hivatkozást használtunk némi szöveggel és mellette egy ikonnal. Ez a HTML. Bármilyen weboldalt is készítesz, mostantól a történelem végéig, mindig HTML-t állítasz elő egy webböngésző számára.

Olvassuk végig, amit kedvesen összerakott. Tehát mi jön még? Itt van a doctype, ami azt mondja, ez egy HTML dokumentum. Aztán azt mondjuk: oké, ez a HTML dokumentum kezdete, és a dokumentum nyelve angol.

Ezután két részünk van. Ott a head, és ott a body.

A head első dolga, hogy milyen karaktereket használunk, és ezt a karakterkészletet UTF-8-nak hívják. Itt minden egyes karakter. Azt mondjuk, hogy bármilyen karaktert használhatunk, ami latin, római karakter, mint ezek, vagy használhatunk emojikat is. Ha megragadunk egy emojit, közvetlenül beletehetjük ebbe a dokumentumba, frissítünk, és máris van egy emoji az oldalon. Ezt jelenti ez. Azt mondja, ez mindaz a karakter, amit általában használsz. Ez a szabványos karakterkészletünk.

Van egy viewport is. Ezzel most nem kell foglalkoznunk.

És van egy cím (title). A cím Jeremy Walker. Ez a cím jelenik meg a fül tetején. Az egyik dolog, amire sokat fogsz gondolni kódolás közben, hogy milyen címeket szeretnél ott látni, hogy amikor az embereknek több fül van nyitva, azt kapják, amit oda szeretnének. Megváltoztathatjuk a favicont is. Láthatod, ezt még nem tettük meg, úgyhogy nincs ott ikon.

Ez a head szekció minden, ami nem jelenik meg a képernyőn. Minden, amit a keresőmotorok és más hasonlók megnézhetnek, a headben él. A body pedig minden, ami az alatta lévő négyzet alakú területen van. És ez szó szerint egy címsor, egy bekezdés és egy lista.

Tehát ezt magyarázza el nekünk. Az `html` tag a gyökérelem. A head a metaadatok. A metaadatok olyan adatokat jelentenek, amik az oldalról szólnak, nem olyanok, amiket látsz. A charset az a karakterkódolás, ami miatt az emojik és más nyelvi karakterek megjelennek. A viewporttal ne foglalkozzunk. És a body a többi dolog, amit néztünk.

Azoknak, akik évek óta írnak HTML-t, sajnálom, hogy ez ennyire alap, de nektek is a nulláról kellett egyszer megtanulnotok.

## Valódi tartalom hozzáadása

Most már használhatod az ügynöködet arra, hogy HTML-t adjon hozzá. Vegyünk egy kis további szöveget. Ha van LinkedIn profilod, érdemes lehet onnan kimásolnod némi szöveget. Valójában csináljuk is ezt. Menjünk el az én LinkedIn-emre, és ragadjunk meg onnan némi információt. És ezt odaadhatjuk az LLM-ünknek. Azt mondhatjuk:

> Itt van némi információ a LinkedIn profilomból. Strukturáld értelmes módon az oldalon a fejléc alatt.

Odaadjuk neki ezt a szöveget, és ő elmegy és strukturálja. Ha két évet visszalépünk, akkor kézzel kellene beírnod a tageket, mindezt leírnod. Ehelyett most megvan az a képességünk, hogy egyszerűen adunk neki némi szöveget, és rábírjuk, hogy értelmes struktúrát rakjon köré. Itt most nem arra kérjük, hogy stílusozza, vagy hogy egy bizonyos módon nézzen ki. Csak arra kérjük, hogy tegyen köré egy struktúrát, egy HTML-t. Lássuk, mennyire jó a Big Pickle ebben.

Miután túl leszek ezen az első alkalmon, a dolgok többségénél a Claude-ot fogom használni, pusztán azért, mert nagyon jól ismerem, és gyors is. De ha te magad követed nyomon, akkor azt javaslom, hogy csináld ezt. Ha van LinkedIn-ed, ha van önéletrajzod, akkor csak másold ki azt a szöveget, tedd be az OpenCode-ba, és kérd meg, hogy építse fel ezt a dolgot.

Gondolkodott egy kicsit. Most készíti elő a szerkesztést. És hozzáadta a kódot. Tessék. Most van egy szép „Tapasztalat” második szintű címsorunk, és itt vannak a további információk. Ha átmegyünk a Chrome-ba és frissítünk, most láthatunk egy minimalista, szépen strukturált kódot.

![A honlap a Chrome-ban, most már egy Tapasztalat szekcióval, amely strukturált bejegyzéseket tartalmaz minden egyes szerepkörhöz.](/images/projects/build-your-personal-homepage/setting-up-the-project/homepage-with-experience.webp)

## A házi feladatod

A következő, amin el kell gondolkodnunk, hogy milyen legyen a személyes honlapunk. Ezt a kérdést szeretném, ha alaposan átgondolnád. Nagyon sokat foglak biztatni ezen a kurzuson, hogy fogj egy tollat és egy jegyzettömböt, ülj le egy csendes helyre, a lehető legtávolabb a képernyőtől, és egyszerűen csak gondolkodj.

Egy honlapot fogunk építeni magunknak. Ennek a honlapnak tartalmaznia kell néhány dolgot. Tartalmaznia kell egy áttekintést rólunk és az érdeklődési körünkről. Tartalmaznia kell egy oldalt, ami az önéletrajzunk, a CV-nk. Lesz egy oldal a portfóliónkról, az összes projektről, amit készítünk, és onnan fog hivatkozni más oldalakra, amik ezekről a projektekről szólnak. Tehát egy nagy, többoldalas weboldalt fogunk felépíteni az idő múlásával. Ennek a nagy részét a következő alkalommal csináljuk. Ma csak ezt az egy áttekintő oldalt csináljuk. De szeretném, ha tollal és papírral gondolkodnál, és lerajzolnád, milyenek szeretnéd, hogy a különböző oldalak legyenek.

És gondolj ki egyfajta stílust is. Nézz meg mások oldalait. Keress másokat az Exercism közösségében. Ha megnézem Erik Schierboom oldalát, aki korábban nálunk dolgozott, neki egy nagyon egyszerű főoldala van, és egy névjegyoldala, ami egész csinos, egy szép kis elemmel, ami alul jelenik meg. Van némi információ a szoftverről, helyek, ahol előadott, és néhány hivatkozás. Ez eléggé inspirálhat. Vagy ha megnézzük SleeplessByte oldalát. Talán emlékszel DJ-re a bootcampekről, vagy a mentorok közül. Ez DJ oldala. Úgyhogy keress olyan embereket, akik érdekelnek, és inspirálódj abból, amit ők csináltak. Gondold át vizuálisan, milyen stílus tetszik. Beszélni fogunk a képek készítéséről és arról, hogyan használhatod a technológiát képek készítésére.

Fedezd fel mások ötleteit. Én mindig is a nagyon minimalista hangulat rajongója vagyok. És ennél a projektnél én magam is elmegyek a következő napokban, és elgondolkodom azon, hogy az új főoldalam milyen legyen, mert ezt a honlapot magamnak készítem. Végiggondolom, hogyan tagolódjon. Kell egy szekció a fotózáshoz. Kell egy szekció, ahol a podcastjaimat, videóimat és a dolgaimat, amiket készítettem, helyezhetem el. Kell egy kis életrajz, és kell egy önéletrajz, egy CV. Úgyhogy elmegyek, és átgondolom ezeket a dolgokat.

A heti házi feladatod az, hogy menj el és gondold át ezt, tervezd meg, majd kezdd el felépíteni ezeket az oldalakat. Létrehozhatsz több oldalt. Létrehozhatunk egy másik oldalt, nevezzük az önéletrajzomnak, és kimásolhatjuk-beilleszthetjük a tartalmunkat, kitörölhetjük a felesleges részeket, és átváltoztathatjuk a címet „Jeremy önéletrajza” címre. Most már megvan a főoldalunk, de elmehetünk a resume.html-re is, és az lesz egy másik oldal.

Tehát a héten:

- Gondold végig, milyen oldalakat szeretnél, és milyen tartalmat akarsz ezekre az oldalakra tenni.
- Telepítsd a VS Code-ot.
- Telepítsd az OpenCode-ot, és állíts be egy modellt.
- Az OpenCode-dal dolgozva rakj össze néhány ilyen különböző oldalt.

Most még ne foglalkozz a stílusozással. Nem szeretném, hogy ebbe most belemenj. Játszhatsz, ha akarsz, mindig bátorítom az embereket a kíváncsiságra, de szeretném megtanítani, hogy szerintem mi a legjobb módja ennek a modern világban. Semmiképp se kezdj el JavaScript keretrendszereket vagy bármi mást használni. Maradj a puszta HTML-nél, és aztán minden alkalommal egy réteggel feljebb lépünk, amíg egyre erősebb és egyre összetettebb nem lesz. Így fogod megérteni, hogyan történnek a dolgok.

Ha érdekel, kutass még egy kicsit a HTML-ről. Találd ki, mik a különböző tagek, és mit jelentenek. Ma már a kutatás is olyan egyszerű lehet, hogy megkérdezed:

> Mondd el a 20 leggyakoribb taget.

És aztán:

> Mondd el, hogy mire valók.

Én így kutatok dolgok után.

A következő alkalmat néhány nap múlva tartjuk. Addigra remélem, hogy telepített OpenCode-dal, telepített VS Code-dal és egy sor oldallal fogsz jönni. Legközelebb elkezdjük ezeket az oldalakat összekötni, navigációt adunk hozzá, stílust adunk hozzá, és azt is el fogjuk érni, hogy kikerüljön a GitHubra, sőt, talán még egy egyedi domaint is szerzel, hogy saját személyes weboldalad legyen egy domainen, ingyen. Ezen a héten érdemes lehet regisztrálnod a GitHubra is, a github.com címen. Közzéteszek útmutatókat a VS Code-hoz, az OpenCode-hoz és a GitHubhoz, és ezeket az útmutatókat követheted.

Ez a vége ennek az első alkalomnak. Köszönöm, hogy megnézted. Remélem, érdekes volt. Remélem, élvezted. Ha bármilyen kérdésed van bármivel kapcsolatban, ami elhangzott, kérlek, ugorj fel a fórumra. Ott leszek, és várom, hogy válaszolhassak a kérdésekre és felfedezhessük a kérdéseket. Nekem sincs feltétlenül mindenre válaszom. Én is szeretek tanulni. Szóval kérdezz bármit, ami érdekel. És várom, hogy a következő alkalommal találkozzunk.
