---
title: "Miért nincs megvalósítva ez a funkció?"
excerpt: "Tudd meg, hogy a Jikiben miért hiányoznak bizonyos nyelvi funkciók, és ez hogyan segíti a hatékony tanulást."
tags: ["exercises"]
seo:
  description: "Annak megértése, hogy a Jiki miért zár ki bizonyos JavaScript- és Python-funkciókat a kezdők tanulásának megkönnyítése érdekében"
  keywords: ["jiki", "javascript", "python", "kizárt funkciók", "láblövők", "tanulás"]
en_md5: 54efd50d3331fa1e315aed1728a6f859
---

Próbáltad futtatni a kódodat, és azt az üzenetet kaptad, hogy valami nem érhető el a nyelv ezen verziójában? Olvass tovább, hogy megértsd, mi történik!

Ha azt az üzenetet kaptad, hogy „Ez a funkció még nem érhető el számodra”, az más helyzet – ehelyett olvasd el a **[Mikor oldódik fel ez a funkció?](/articles/when-will-this-feature-unlock)** cikket.

## Bevezetés

Olyan kulcsszót vagy fogalmat használtál, amit a nyelvünk ezen verziója nem támogat. Ne aggódj – ez nem hiba!

A Jikiben használt JavaScript- és Python-verziókat **mi magunk terveztük kifejezetten** a tanulásod segítésére. Néhány funkciót gondosan eltávolítottunk, hogy megóvjunk attól, hogy véletlenül olyan összetett vagy zavaros részekkel találkozz, amelyekre még nem állsz készen.

## Miért zárunk ki funkciókat?

A programozási nyelveket **szakemberek** számára tervezték. Olyan haladó funkciókat tartalmaznak, amelyek a tapasztalt fejlesztők munkáját gyorsítják, valamint történelmi terheket – olyan funkciókat, amelyeket valószínűleg már évekkel ezelőtt el kellett volna távolítani, de a régi rendszerek működése miatt még megmaradtak.

Tanulás közben ezek a funkciók zavart keltenek. Azáltal, hogy eltávolítjuk őket, a Jiki lehetővé teszi, hogy arra összpontosíts, ami igazán számít: **megtanulj programozóként gondolkodni**.

### Láblövők

Néhány funkciót **„láblövőknek”** hívunk – olyan dolgok, amelyekkel véletlenül lábon lőheted magad. Ezek a következők:

- **Valóban problémásak**, és még a tapasztalt fejlesztők is jobb, ha elkerülik őket
- **Zavaró szélsőséges esetek**, amelyek elvonják a figyelmet az alapvető fogalmakról
- **Történelmi teher**, ami kizárólag a visszafelé kompatibilitás miatt létezik

Ezeket véglegesen kizártuk a Jikiből, mert egyszerűen nem érik meg a zavart, amit okoznak.

### Haladó funkciók

Más funkciókat azért zárunk ki, mert **túl haladónak számítanak** a tanulmányaid jelenlegi szintjén. Ezek nem rossz funkciók – egyszerűen csak nem segítenek, amikor az alapokat tanulod.

Ahogy haladsz előre a Jikiben, ezek közül néhány fel fog oldódni. De egyelőre koncentrálj az alapok elsajátítására.

## A részletek

Nem kell elolvasnod ezt a részt, hacsak nem érdekel, mi zajlik a színfalak mögött, és milyen döntéseket hoztunk.

### JavaScript

| Funkció | Kizárás oka |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `var` | A `var` zavaros hatókör-szabályokkal rendelkezik, amelyek még a tapasztalt fejlesztőknél is hibát okoznak. Használj helyette `let`-et vagy `const`-ot. |
| `with` | Elavult és zavaros. Olyan kódot eredményez, ami nehezen átlátható. |
| `debugger` | Fejlesztőeszköz, a tanuláshoz nincs rá szükség. |
| `void` | Ritkán hasznos, és kezdők számára zavaros lehet. |
| `yield` | Haladó generátorfunkció. A generátorokról a későbbiekben fogsz tanulni. |
| `delete` | Zavarosan viselkedhet tömbökkel és objektumokkal. |
| `import` / `export` | Modulrendszer-funkciók. A Jiki a modulokat másképp kezeli, hogy a dolgok egyszerűek maradjanak. |
| Bitenkénti operátorok (`&`, `\|`, `^`, `~`, `<<`, `>>`, `>>>`) | Nagyon ritkán van szükség rájuk, és zavaróak lehetnek tanulás közben. Ezek az alacsony szintű bitműveletek eszközei. |

### Python

| Funkció | Kizárás oka |
| ---------- | --------------------------------------------------------------------------------------------------------------------- |
| `global` | A globális változók függvényen belüli módosítása zavaros kódhoz vezet. Inkább paraméterként add át az értékeket! |
| `nonlocal` | Haladó hatókör-kezelési funkció egymásba ágyazott függvényekhez. Az alapok tanulásakor nincs rá szükség. |
| `assert` | Hibakereső eszköz, amely éles környezetben kikapcsolható. Tanuld meg inkább a megfelelő hibakezelést! |

## Mi a teendő, ha szükségem van egy funkcióra?

A Jiki minden feladata úgy lett megtervezve, hogy az addig tanított funkciókkal megoldható legyen. Ha korlátozásba ütközöl, általában van egy jobb módja a probléma megoldásának a rendelkezésre álló funkciókkal. Ez a tanulás része – kitalálni, hogyan dolgozz korlátok között.

Ha valóban úgy gondolod, hogy egy funkciónak elérhetőnek kellene lennie a te szinted, szólj nekünk! A visszajelzések alapján folyamatosan finomítjuk, hogy mi kerüljön bele.
