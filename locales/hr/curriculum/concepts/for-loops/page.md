---
title: "Razumijevanje `for` petlji"
description: "Petlja s tri dijela (inicijalizacijom, uvjetom i uvećavanjem) koja ti daje punu kontrolu nad ponavljanjem."
en_md5: 0ad4155ded18c2df27d29e5355bd0532
---

Možda se sjećaš da petlja `repeat` zapravo ne postoji u JavaScriptu. To je samo dodatak koji ti malo olakšava život dok krećemo.

Pa što koristimo umjesto toga? Običnu `for` petlju, a ona izgleda ovako.

```javascript
for (let i = 0; i < 5; i++) {
  // ...
}
```

Vidiš zašto je to prvog dana moglo djelovati pomalo zastrašujuće.

Ali sada imaš sve znanje potrebno za ovo. Razložimo to na dijelove.

For-petlja ima tri dijela: inicijalizaciju (_initializer_ na engleskom), uvjet i uvećavanje (_increment_ na engleskom).

Inicijalizacija, ovaj dio `let i = 0`, izvrši se na početku cijele petlje. Izvrši se samo jednom, a ovdje stvara kutiju po imenu `i` (slovo za praćenje vrijednosti) postavljenu na nulu. `i` je samo slovo, a tradicionalno se u tu svrhu koriste `i` ili `x`.

Sljedeći dio provjerava se prije svakog ponavljanja petlje.

Ako je uvjet točan, petlju izvršavamo još jednom.

Ako nije, ne izvršavamo je.

I na kraju je uvećavanje, `i++`.

`i++` znači isto što i `i = i + 1`. To je samo pokrata, način da se `i` uveća za jedan svaki put.

Dakle, u ovom primjeru postavit ćemo `i` na nulu. Provjeravamo je li `i` manji od dva, i jest, pa izvršavamo petlju.

I onda na kraju uvećamo `i` za jedan, pa `i` postaje jedan. Nula plus jedan je jedan.

I onda idemo ponovno. Provjeravamo je li jedan manji od dva.

Je, pa izvršavamo petlju. I onda na kraju ponovno uvećamo `i`. Sada je dva, jedan plus jedan jednako je dva.

```javascript
i = 0
i < 2 // točno - izvrši petlju
...   // napravi ponavljanje
i = i + 1 // 1

i < 2 // točno - izvrši petlju
...   // napravi ponavljanje
i = i + 1 // 2

i < 2 // netočno - izađi iz petlje
```

I onda idemo treći put. Ovaj put provjeravamo je li dva manje od dva, i nije, pa ne izvršavamo petlju, i time je petlja gotova. Jednostavno nastavljamo s kôdom ispod. Dakle, petlja se izvršila dvaput, a to je korisno znati. Ako uvijek krenemo od nule i uvjet je `i < n`, broj `n` označava koliko će se puta petlja izvršiti.

Dakle, to je isto što i `repeat 2`.

Nije teško, ali je mnogo zamršenije od običnog `repeat 2`. Prednost for-petlje je u tome što u ta tri dijela možeš napraviti bilo što. Možeš krenuti od nekog drugog broja, uvećavati za više od jedan, brojati unatrag ili upotrijebiti uvjet koji ovisi o nečemu drugom, a ne o jednostavnom brojaču. Upravo ta fleksibilnost čini for-petlje okosnicom JavaScripta.
