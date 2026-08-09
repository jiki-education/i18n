---
title: Az agentikus kódolás legfontosabb fogalmai
excerpt: Modellek, tokenek, kontextusablakok és egyéb ötletek, amelyeket meg kell értened, hogy jól használhasd az AI kódoló ágenseket.
tags: ["agentic-coding"]
seo:
  description: Az agentikus kódolás alapfogalmai kezdőknek magyarázva: mik az AI-modellek és a tokenek, hogyan működnek a kontextusablakok, és miért hibáznak néha az ágensek.
  keywords: ["agentikus kódolási fogalmak", "LLM", "tokenek", "kontextusablak", "AI-modellek", "promptok", "hallucinációk"]
en_md5: d963e01d7934f4003d436029d1808fc8
---

## Bevezetés

Ezen a ponton feltételezzük, hogy már telepítetted az OpenCode-ot vagy egy hasonló eszközt. Ha nem, először kövesd az [agentikus kódolási platform telepítéséről szóló útmutatónkat](/guides/installing-an-agentic-coding-platform).

Használhatsz egy agentikus kódolási eszközt anélkül, hogy értenéd, hogyan működik, ahogyan vezethetsz autót anélkül, hogy tudnád, mit csinál a kuplung. De egy kis megértés sokat segít. Megmagyarázza, hogy az eszköz néha miért tűnik ragyogónak, máskor miért zavarba ejtőnek, miért kerülnek bizonyos dolgok pénzbe, és hogyan érhetsz el sokkal jobb eredményeket. Ezek azok a fogalmak, amelyeket érdemes ismerni.

## Modellek

A modell (vagy LLM, azaz „nagy nyelvi modell”) a tényleges mesterséges intelligencia. Az olyan eszközök, mint az OpenCode és a Claude Code, maguk nem intelligensek. Ők a fogat: összegyűjtik a kérésedet és a kódodat, elküldik egy modellnek, és aszerint cselekszenek, ami visszaérkezik. A modell az „agy”.

Rengeteg modell létezik, különböző cégek készítik, és három olyan szempontból különböznek, ami számodra is fontos:

- **Képesség.** A nagyobb, újabb modellek jobban értenek meg bonyolult problémákat és pontosabb kódot írnak. A legjobbak (amelyeket gyakran „frontier” modelleknek neveznek) érezhetően okosabbak a többinél.
- **Sebesség.** A kisebb modellek gyorsabban válaszolnak. Egyszerű kérdéseknél a gyors modell gyakran kellemesebb élmény.
- **Költség.** A legjobb modellek futtatása akár ötvenszer többe is kerülhet, mint a teljesen elfogadhatóaké. Ezért használnak az ingyenes szintek kisebb vagy promóciós modelleket.

Nincs állandó „legjobb modell”. A ranglista néhány havonta átrendeződik, és ez az egyik oka annak, hogy olyan eszközt ajánlunk, amely lehetővé teszi a szabad modellváltást (az OpenCode-ban írd be: `/models`).

## Tokenek

A modellek nem betűket vagy szavakat olvasnak. Tokeneket olvasnak: kisebb szövegdarabokat, átlagosan körülbelül háromnegyed szót darabonként. Az „Understanding” egy token. A „Misunderstanding” talán három. Minden, amit egy modellnek küldesz, tokenekre lesz darabolva, és minden, amit ír, tokenenként érkezik vissza. Ezért látod, hogy a válaszok szófolyamként jelennek meg, és nem egyszerre.

A tokenek egy nagy ok miatt fontosak: ezek azok, amikért fizetsz. A modellek árazása millió tokenenként van megadva, mind arra, amit a modell olvas („bemenet”), mind arra, amit ír („kimenet”). Amikor egy ágens elolvassa a kódod öt fájlját, az több tízezer bemeneti token is lehet. Ezért vannak korlátai az ingyenes szinteknek, és ezért kerül többe egy nagy projekten dolgozó ágens, mint egy gyors kérdésre válaszoló.

## A kontextusablak

A modellnek nincs memóriája. Minden egyes alkalommal, amikor üzenetet küldesz, az eszköz elküldi az egész eddigi beszélgetést, plusz az összes fájlt, amit az ágens olvasott, újra és újra. A modell kontextusablakja az a maximális mennyiség, amit egy menetben el lehet küldeni neki: a munkamemóriája, tokenben mérve.

Ebből két gyakorlati dolog következik:

- **A hosszú munkamenetek romlanak.** Ahogy a beszélgetés növekszik, a kontextus megtelik régi kitérőkkel és elavult fájltartalmakkal. A modellek érezhetően rosszabbul figyelnek, amikor a kontextusuk tele van. Amikor egy ágens egy hosszú munkamenet végén buta hibákat kezd el elkövetni, az sokszor nem azért van, mert hülye, hanem mert fuldoklik.
- **Az újrakezdés ingyen van.** Ha egy új munkamenetet indítasz egy tiszta, jól megfogalmazott kéréssel, az gyakran jobb, mint tovább küzdeni egy zsúfoltban. Ne ragaszkodj érzelmesen a beszélgetési előzményeidhez.

## Promptok

A promptod mindaz, amit a modellnek írsz. Az agentikus kódolásban a legnagyobb hatású készség a jó promptok írása. A különbség a „javítsd meg a kódomat” és a „ebben a mappában a tesztek ezzel a hibaüzenettel elhasalnak, és én azt vártam, hogy a függvény 5-öt adjon vissza, nem 3-at” között az, hogy az ágens találgat vagy tudja, mit kell tennie.

Egy jó prompt három dolgot mond el: mit szeretnél elérni, mi történik valójában, és mit próbáltál már meg. Pontosan azt, amit egy segítséget kérő kollégától is elvárnál.

## Az agentikus hurok

Ami az ágenst megkülönbözteti a chatbottól, az a hurok. Amikor egy ágensnek feladatot adsz, nem csak válaszol. Dolgozik:

1. Eldönti, mit kell tudnia, és eszközöket használ (fájlokat olvas, keres, parancsokat futtat), hogy kiderítse.
2. Végrehajt egy változtatást.
3. Ellenőrzi a saját munkáját, általában a kódod vagy a tesztjeid futtatásával.
4. Ha valami elromlott, visszamegy az 1. lépéshez az új információval.

Ezt a hurkot megfigyelni valóban tanulságos: jól mutatja, hogyan dolgoznak valójában a tapasztalt programozók. Vizsgálj meg, változtass egy dolgon, ellenőrizz, ismételd. A te feladatod a hurok alatt a felügyelet. Az eszköz engedélyt fog kérni, mielőtt bármi jelentőset tenne, és neked el kell olvasnod, mit javasol, ahelyett, hogy gépiesen mindent jóváhagynál.

## Hallucinációk, avagy: a modell néha magabiztosan téved

A modellek nem úgy tudnak dolgokat, ahogy te. A legvalószínűbbnek tűnő választ generálják, és néha a legvalószínűbbnek tűnő válasz egyszerűen hibás: egy nem létező függvény, egy soha nem valós beállítás, egy magyarázat, ami légmentesnek hangzik, de valójában téves. Ezt nevezzük hallucinációnak, és sosem tűnik el teljesen, még a legjobb modelleknél sem.

A védekezés ugyanaz, amit a profik is használnak: soha ne bízz, mindig ellenőrizz. Futtasd le a kódot. Olvasd el a változtatást, mielőtt elfogadod. Ha egy magyarázat fontos, kérd meg a modellt, hogy mutassa meg a kódsort, amelyen alapul. Az ágensek sokkal kevésbé hajlamosak erre, mint a chatbotok, pontosan azért, mert a hurkjuk része a dolgok futtatása és a valós eredmények látása, de az ellenőrzés szokását már az első naptól kezdve ki kell alakítanod.

## Adatvédelem

Még egy dolog, amit érdemes tudni, különösen az ingyenes szintek esetében: az ingyenes modellek általában azért ingyenesek, mert a mögöttük álló cégek összegyűjtik a beszélgetéseket, hogy fejlesszék a modelljeiket. Tanulási gyakorlatokhoz ez teljesen rendben van. De kezelj mindent, amit egy ingyenes modellnek küldesz, úgy, mintha nyilvános lenne: ne küldj jelszavakat, személyes adatokat, később a karriered során pedig privát céges kódot se anélkül, hogy ellenőriznéd a szabályokat.

## Ezek az alapok

A modellek az „agyak”, a tokenek a fizetőeszköz, a kontextus a memória, a promptok a kormánykerék, a hurok pedig az, ami ágenssé teszi. Minden mást úgy fogsz megtanulni, ha beleveted magad, és pontosan ezt javasoljuk. Ha még nem állítottál be egy eszközt, a [telepítési útmutatónk](/guides/installing-an-agentic-coding-platform) tíz perc alatt elvezet odáig. Ezután nézd meg a Tanulj fejleszteni során az első [Frontend Basics](/build/frontend-basics/setting-up-the-project) leckét, hogy lásd mindezt működés közben.
