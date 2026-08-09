---
title: "A Windows Subsystem for Linux (WSL) telepítése"
excerpt: "Lépésről lépésre útmutató a Windows Subsystem for Linux telepítéséhez, amellyel megfelelő fejlesztői környezetet kapsz Windows alatt."
tags: ["installation"]
seo:
  description: "Kezdőbarát útmutató a WSL (Windows Subsystem for Linux) telepítéséhez Windows 10 és 11 rendszeren, lépésről lépésre haladó útmutatásokkal és a gyakori hibák megoldásával."
  keywords:
    [
      "wsl",
      "wsl telepítés",
      "windows subsystem for linux",
      "ubuntu windows alatt",
      "windows fejlesztői környezet",
      "tanulj meg programozni"
    ]
en_md5: 7286edef00bc5cd57f37c00fb20ba83a
---

## Bevezetés

A WSL (Windows Subsystem for Linux) a Windows egyik, Microsoft által készített funkciója, amely egy valódi Linux rendszert futtat a Windows gépeden. Erre azért van szükséged, mert a legtöbb programozási eszköz először Linuxra és macOS-re készül (és azokon működik a legjobban), a WSL pedig lehetővé teszi a Windows-felhasználók számára, hogy mindezt elérjék. Így fejleszthetsz Windows alatt a Microsoft saját ajánlása szerint. A telepítés körülbelül tizenöt percet vesz igénybe, nagyrészt várakozással telik, és csak egyszer kell elvégezned.

## Mielőtt nekilátsz

Szükséged lesz:

- **Windows 10 (2004-es vagy újabb verzió) vagy Windows 11.** Bármely, az utóbbi néhány évből származó Windows gép megfelel.
- **Rendszergazdai hozzáférés** a számítógéphez. Ha családi gépről van szó, előfordulhat, hogy meg kell kérned azt, aki beállította, hogy írja be a jelszavát.

## A WSL telepítése

1. Kattints a **Start** gombra, és írd be, hogy „powershell”. Megjelenik a **Windows PowerShell**.
2. Ne csak nyisd meg egyszerűen. Ehelyett kattints rá jobb egérgombbal, és válaszd a **Futtatás rendszergazdaként** lehetőséget. A Windows megkérdezi, hogy engedélyezed-e a módosításokat – kattints az **Igen** gombra.
3. A megjelenő kék ablakban írd be a következőt, majd nyomd meg az Entert:
   ```
   wsl --install
   ```
4. A Windows letölt és beállít mindent, beleértve egy **Ubuntu** nevű Linux rendszert is (ez a Linux legnépszerűbb változata). Ez néhány percig eltarthat.
5. Amikor kéri, **indítsd újra a számítógépet**.

<!-- SCREENSHOT: PowerShell running wsl --install -->

## Az Ubuntu beállítása

Az újraindítás után automatikusan megnyílik egy terminálablak, hogy befejezd az Ubuntu beállítását. (Ha mégsem, kattints a Start gombra, írd be, hogy „ubuntu”, és nyisd meg.)

A rendszer arra kér majd, hogy hozz létre egy **felhasználónevet** és egy **jelszót** a Linux rendszeredhez:

1. Írj be egy felhasználónevet (kisbetűvel, szóköz nélkül), és nyomd meg az Entert.
2. Írd be a jelszót, nyomj Entert, majd ismételd meg a megerősítéshez.

Van itt valami, ami szinte mindenkit megtéveszt: **amikor beírod a jelszót, semmi sem jelenik meg a képernyőn**. Nincsenek pontok, csillagok, semmi. Ez egy Linux biztonsági funkció, nem hiba. A billentyűleütéseket rögzíti a rendszer, tehát egyszerűen gépeld be a jelszót, és nyomj Entert.

Ne felejtsd el ezt a jelszót. Időnként szükséged lesz rá, amikor programokat telepítesz.

<!-- SCREENSHOT: Ubuntu first run asking for a username -->

## Működik-e?

Zárj be mindent, majd kattints a **Start** gombra, írd be, hogy „ubuntu”, és nyisd meg. Egy ablakot kell látnod, amelynek parancssora `$` jellel végződik, és a beírt parancsra vár. Gratulálunk: ez egy igazi Linux terminál, és most már ugyanazzal a fejlesztői környezettel rendelkezel, mint a profik.

Próbáld ki: írd be az `ls` parancsot, és nyomd meg az Entert. Kilistázza az aktuális mappa fájljait (egyelőre nem lesz sok).

## A WSL használata a VS Code-ból

Ha már [telepítetted a VS Code-ot](/guides/installing-vscode), az képes csatlakozni a WSL-hez, így a szerkesztő és a Linux terminál együtt tud működni:

1. Nyisd meg a VS Code-ot.
2. Nyisd meg a Bővítmények panelt (a bal oldali négy négyzet ikon, vagy Ctrl+Shift+X), keress rá a **WSL**-re, és telepítsd a Microsoft által készített bővítményt.
3. Nyomd meg a Ctrl+Shift+P billentyűkombinációt, írd be, hogy „WSL”, és válaszd ki a **WSL: Connect to WSL** lehetőséget. A VS Code újraindul, és csatlakozik az Ubuntuhoz.

Mostantól kezdve minden terminál, amit a VS Code-on belül nyitsz meg (Terminal menü, majd New Terminal), egy Linux terminál. Ezt a beállítást javasoljuk a további útmutatóinkhoz.

## Ha valami nem működik

A leggyakoribb hiba a **virtualizációval** (vagy a „VT-x”, „AMD-V”, „virtual machine platform” kifejezésekkel) kapcsolatos hibaüzenet. A WSL egy hardveres funkcióra épül, ami egyes számítógépeken ki van kapcsolva. A bekapcsolásához módosítanod kell egy beállítást a számítógép BIOS-ában, ami gyártónként eltér. Keress rá a laptopod típusnevére és az „enable virtualisation” kifejezésre, hogy megtaláld a lépéseket, vagy kérdezz a <a href="https://forum.jiki.io" target="_blank" rel="noopener noreferrer">fórumunkon</a>, és segítünk.

Minden más esetben a Microsoft hivatalos <a href="https://learn.microsoft.com/en-us/windows/wsl/install" target="_blank" rel="noopener noreferrer">WSL telepítési útmutatójában</a> van hibaelhárítási rész, és persze a fórum is mindig ott van.
