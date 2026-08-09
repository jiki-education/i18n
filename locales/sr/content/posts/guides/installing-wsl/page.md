---
title: "Instaliranje Windows podsistema za Linux (WSL)"
excerpt: "Korak po korak uputstvo za instaliranje Windows podsistema za Linux, koji ti pruža pravo razvojno okruženje na Windows-u."
tags: ["installation"]
seo:
  description: "Vodič za početnike za instaliranje WSL-a (Windows podsistem za Linux) na Windows 10 i 11, sa jasnim korak-po-korak uputstvom i rešenjima za česte probleme."
  keywords:
    [
      "wsl",
      "install wsl",
      "windows subsystem for linux",
      "ubuntu on windows",
      "windows development environment",
      "learn to code"
    ]
en_md5: 7286edef00bc5cd57f37c00fb20ba83a
---

## Uvod

WSL (**Windows podsistem za Linux**) je funkcija Windows-a, koju je napravio Microsoft, koja pokreće pravi Linux sistem unutar tvog Windows računara. Potreban ti je jer je većina programerskih alata prvo napravljena (i najbolje radi) na Linux-u i macOS-u, a WSL je način na koji programeri na Windows-u dobijaju pristup svemu tome. To je način koji i sam Microsoft preporučuje za razvoj na Windows-u. Instalacija traje oko petnaest minuta, od čega je veći deo čekanje, i potrebno je da je uradiš samo jednom.

## Pre nego što počneš

Potrebno ti je:

- **Windows 10 (verzija 2004 ili novija) ili Windows 11.** Bilo koji Windows računar iz poslednjih nekoliko godina je u redu.
- **Administratorski pristup** računaru. Ako je ovo porodični računar, možda će ti trebati osoba koja ga je podesila da ukuca svoju lozinku.

## Instaliranje WSL-a

1. Klikni na **Start** dugme i otkucaj „powershell“. Pojaviće se **Windows PowerShell**.
2. Nemoj da ga samo otvoriš. Umesto toga, klikni desnim tasterom na njega i izaberi **Pokreni kao administrator**. Windows će te pitati da li želiš da dozvoliš izmene: klikni **Da**.
3. U plavom prozoru koji se pojavi, otkucaj sledeće i pritisni Enter:
   ```
   wsl --install
   ```
4. Windows će preuzeti i podesiti sve što je potrebno, uključujući Linux sistem pod nazivom **Ubuntu** (najpopularniju verziju Linux-a). Ovo može potrajati nekoliko minuta.
5. Kada to zatraži, **restartuj računar**.

<!-- SCREENSHOT: PowerShell running wsl --install -->

## Podešavanje Ubuntu-a

Nakon restartovanja, automatski će se otvoriti terminal da završi podešavanje Ubuntu-a. (Ako se ne otvori, klikni na Start, otkucaj „ubuntu“ i otvori ga.)

Tražiće ti da kreiraš **korisničko ime** i **lozinku** za svoj Linux sistem:

1. Otkucaj korisničko ime (malim slovima, bez razmaka) i pritisni Enter.
2. Otkucaj lozinku i pritisni Enter, zatim je ponovo otkucaj da potvrdiš.

Jedna stvar ovde zbunjuje svakoga: **kada kucaš lozinku, ništa se ne prikazuje na ekranu**. Ni tačke, ni zvezdice, ništa. To je sigurnosna funkcija Linux-a, a ne greška. Tvoje kucanje se registruje, tako da samo ukucaj lozinku i pritisni Enter.

Ne zaboravi ovu lozinku. Ponekad će ti zatrebati kada instaliraš stvari.

<!-- SCREENSHOT: Ubuntu first run asking for a username -->

## Provera da li radi

Zatvori sve, zatim klikni na **Start**, otkucaj „ubuntu“ i otvori ga. Trebalo bi da vidiš prozor sa prompt-om koji se završava sa `$`, koji čeka da kucaš. Čestitamo: ovo je pravi Linux terminal i sada imaš isto razvojno okruženje kao i profesionalci.

Probaj da otkucaš `ls` i pritisneš Enter. To će izlistati fajlove u tvojoj trenutnoj fascikli (još uvek ih neće biti mnogo).

## Korišćenje WSL-a iz VS Code-a

Ako imaš [instaliran VS Code](/guides/installing-vscode), on može da se poveže sa WSL-om tako da tvoj editor i tvoj Linux terminal rade zajedno:

1. Otvori VS Code.
2. Otvori panel Proširenja (ikona sa četiri kvadrata sa leve strane, ili Ctrl+Shift+X), potraži **WSL** i instaliraj Microsoft-ovo proširenje.
3. Pritisni Ctrl+Shift+P, otkucaj „WSL“ i izaberi **WSL: Connect to WSL**. VS Code će se ponovo otvoriti, povezan sa Ubuntu-om.

Od sada, bilo koji terminal koji otvoriš unutar VS Code-a (meni Terminal, pa Novi terminal) je Linux terminal. Ovo je podešavanje koje preporučujemo za ostatak naših vodiča.

## Ako nešto krene naopako

Najčešći problem je greška koja pominje **virtualizaciju** (ili „VT-x“, „AMD-V“, ili „platforma virtuelne mašine“). WSL se oslanja na hardversku funkciju koja je isključena na nekim računarima. Uključivanje podrazumeva promenu podešavanja u BIOS-u računara, što se razlikuje od proizvođača. Potraži naziv modela tvog laptopa i „enable virtualisation“ za uputstvo, ili pitaj na <a href="https://forum.jiki.io" target="_blank" rel="noopener noreferrer">našem forumu</a> i pomoći ćemo ti.

Za sve ostalo, Microsoft-ov <a href="https://learn.microsoft.com/en-us/windows/wsl/install" target="_blank" rel="noopener noreferrer">zvanični vodič za instalaciju WSL-a</a> ima sekciju za rešavanje problema, a forum je, ponovo, uvek tu.
