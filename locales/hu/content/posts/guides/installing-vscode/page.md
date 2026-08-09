---
title: "A VS Code telepítése"
excerpt: "Lépésről lépésre útmutató a Visual Studio Code telepítéséhez Windows, macOS és Linux alatt."
tags: ["editors", "installation"]
seo:
  description: "Kezdőbarát útmutató a Visual Studio Code (VS Code) telepítéséhez Windows, macOS és Linux rendszeren, egyértelmű, lépésről lépésre instrukciókkal mindhárom rendszerhez."
  keywords: ["VS Code telepítése", "Visual Studio Code", "VS Code letöltése", "Windows", "macOS", "Linux", "kódszerkesztő"]
en_md5: 188bcdb3716903b03032489e4454aaf9
---

## Bevezetés

A Visual Studio Code (röviden VS Code) egy ingyenes kódszerkesztő, amelyet a Microsoft fejleszt, és Windows, macOS és Linux rendszeren fut. Ezt a szerkesztőt ajánljuk, amíg tanulsz programozni. Ha nem vagy biztos benne, hogy mi az a kódszerkesztő, vagy miért van rá szükséged, kezdd az útmutatónkkal arról, [hogyan használj kódszerkesztőt](/guides/using-a-code-editor).

Ez az útmutató végigvezet a VS Code telepítésének lépésein mindegyik operációs rendszeren. Keresd meg a saját rendszeredet alább, és kövesd a lépéseket. Csak egyszer kell megtenned.

## Windows

1. Nyisd meg a [code.visualstudio.com](https://code.visualstudio.com) oldalt a böngésződben.
2. Kattints a **Download for Windows** gombra. Ezzel letöltöd a hivatalos telepítőt (egy `.exe` fájlt).
3. Ha a letöltés befejeződött, nyisd meg a fájlt a telepítő futtatásához.
4. Fogadd el a licencszerződést, majd kattints sorban a **Tovább** (Next) gombra, hogy elfogadd az alapértelmezett beállításokat. Javasoljuk, hogy hagyd bepipálva azt a négyzetet, amelyik hozzáadja a VS Code-ot a jobbkattintás menühöz – később jól jöhet.
5. Kattints a **Telepítés** (Install), majd a **Befejezés** (Finish) gombra. A VS Code meg fog nyílni, amint készen van.

## macOS

1. Nyisd meg a [code.visualstudio.com](https://code.visualstudio.com) oldalt a böngésződben.
2. Kattints a **Download for macOS** gombra. Ezzel letöltesz egy `.zip` fájlt, ami az alkalmazást tartalmazza.
3. Nyisd meg a **Letöltések** (Downloads) mappádat, és kattints duplán a letöltött fájlra a kicsomagoláshoz. Egy **Visual Studio Code** nevű appot kapsz.
4. Húzd a **Visual Studio Code** appot az **Alkalmazások** (Applications) mappába.
5. Nyisd meg az **Alkalmazások** mappát, és kattints duplán a **Visual Studio Code**-ra az elindításához. Ha a macOS megkérdezi, hogy biztosan meg akarod-e nyitni, kattints a **Megnyitás** gombra.

## Linux

A VS Code Linuxra történő telepítésének legmegbízhatóbb módja, ha letöltöd a hivatalos csomagot a Microsoft-tól a saját disztribúciódhoz.

1. Nyisd meg a [code.visualstudio.com](https://code.visualstudio.com) oldalt a böngésződben.
2. Kattints a **Download for Linux** gombra, és válaszd ki a disztribúciódnak megfelelő csomagot:
   - Debianra és Ubuntu-alapú rendszerekre a **.deb** csomagot.
   - Fedorára, Red Hat-re és openSUSE-alapú rendszerekre a **.rpm** csomagot.
3. Nyisd meg a letöltött csomagot a rendszered szoftvertelepítőjével és kattints a **Telepítés** (Install) gombra, vagy telepítsd a terminálból:
   - Debian vagy Ubuntu esetén: futtasd a `sudo apt install ./<file>.deb` parancsot abban a mappában, ahová letöltötted.
   - Fedora vagy Red Hat esetén: futtasd a `sudo dnf install ./<file>.rpm` parancsot abban a mappában, ahová letöltötted.
4. Miután települt, nyisd meg a VS Code-ot az alkalmazásmenüből, vagy futtasd a `code` parancsot a terminálban.

## A VS Code megnyitása

Bárhogyan is telepítetted, mostantól a VS Code-ot bármikor megnyithatod, amikor kódot szeretnél írni. Windowson és macOS-en a többi alkalmazásod között jelenik meg, Linuxon pedig az alkalmazásmenüdben lesz elérhető.

Ennyi az egész. Most már van egy rendes kódszerkesztőd, és készen állsz arra, hogy elkezdj kódot írni.
