---
title: "Pole"
description: "Uspořádaný řetěz prvků (řetězců, čísel, Booleanů nebo čehokoli jiného) spojených do jedné hodnoty, kterou Jiki může předávat dál."
en_md5: d26ccb9e04fbc77129f3199d63a95017
---

Zatím pracuješ s čísly, řetězci a Booleany, což je jen vznešenější název pro pravdu a nepravdu. Tomuhle říkáme datové typy (anglicky _data types_). Teď přidáme první složený datový typ (anglicky _compound data type_).

Je to datový typ, který v sobě může držet víc věcí, ne jen jednu, a jmenuje se pole (anglicky _array_).

Když uslyšíš slovo pole, představ si opravdový řetěz, na kterém visí pohromadě spousta věcí.

Viset na něm může cokoli: řetězce, čísla, Booleany, dokonce i jiná pole, dokonce i věci, které jsme se ještě neučili. Ale tím se teď netrapme.

Všechno na tom řetězu jde popořadě, přesně v tom pořadí, v jakém je to na řetěz navěšené.

Takže pole obsahuje spoustu věcí, ale pořád je to jeden pevný prvek (anglicky _element_), jedna pevná věc, jedno pole s hromadou prvků uvnitř.

Jiki může tohle pole, tenhle řetěz, vzít a dát ho do krabice, stejně jako umí dát do krabice řetězec nebo číslo.

Může ho vhodit do vstupní štěrbiny stroje. Může ho vytáhnout z výdejního otvoru. To pole je jedna věc a Jiki s ním pracuje přesně stejně jako s řetězci, čísly a vším ostatním, co jsme zatím viděli.

V kódu vypadá pole taky trochu jako řetěz. Na každém konci má hranatou závorku a mezi nimi spoustu položek navěšených na řetěz, oddělených čárkami.

Tak třeba kdybychom chtěli vytvořit pole se jmény některých našich mentorů, dali bychom dohromady krabici s názvem `mentors` a ten řetěz bychom do ní vložili.

Napsali bychom `let mentors =`, úplně stejně jako u jakékoli jiné krabice, a pak by přišla otevírací hranatá závorka, spousta prvků, jejich jména oddělená čárkami, a nakonec zavírací hranatá závorka. Když to Jiki uvidí, dojde si pro čtyři papírky, jeden pro každé jméno, vezme nový řetěz, navlékne je na něj a ten řetěz pak dá do krabice `mentors`.

Do pole můžeš dát cokoli: řetězce, čísla, Booleany, klidně i mix všeho možného.

Tohle všechno jsou různé příklady naprosto platných polí.

Prázdné pole taky vytvořit můžeš. Je to prostě řetěz, na kterém nic není. Pořád je to opravdová věc. Pořád má oba své konce. Pořád je to řetěz. Jen na něm nejsou žádné položky. Ale i takové prázdné pole můžeš dát do krabice, zase ho vytáhnout a použít později.

Takže pole vytvoříš pomocí hranatých závorek. Ale jak je vlastně používáme? Jak zjistíme, co je uvnitř, a jak dostaneme věci ven? Úplně stejně, jako když jsme chtěli dostat písmena z řetězce. Použijeme hranaté závorky s číslem uvnitř.

Vraťme se k našemu poli mentorů. Když chceme dostat ven první z nich, napíšeme `mentors[0]`. Pamatuj, že v JavaScriptu počítáme od nuly.

A pole můžeme procházet úplně stejně, jako jsme dřív procházeli řetězce, pomocí `for-of`.

Pole fungují přesně stejně. Jediný rozdíl je, že tentokrát nedostaneme písmeno, ale to, co je na tom místě v poli. V našem příkladu jméno mentora.

Takže když poprvé někomu děkujeme, děkujeme `"DJ"`. Podruhé děkujeme `"Becky"`, a tak dál.

Vlastnost `length` můžeme použít i na polích, stejně jako jsme se ji naučili u řetězců. Když máme v krabici `mentors` pole se čtyřmi řetězci a napíšeme `mentors.length`, vrátí to čtyři.

A úplně stejně můžeme na polích použít i `includes`. Když napíšeme `mentors.includes("DJ")`, vrátí to `true`. Ale když napíšeme `mentors.includes("Frank")`, vrátí to `false`.

Všechno funguje přesně stejně jako u řetězců. Jen tentokrát pracujeme s prvky pole, ne s písmeny řetězce.
