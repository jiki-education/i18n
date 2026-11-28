---
title: "Aktualizace slovníků"
description: "Použití `dict[key] = value` k aktualizaci existujících položek nebo k přidání nových, plus metoda `has` pro kontrolu klíčů."
en_md5: 5dfff7e37d863711be783b2fbe0873a4
---

Už umíš slovník vytvořit a dostat z něj hodnoty. Ale co se stane, když se data změní? Jednou zestárnu. Nebude mi `42`, ale `43`.

Jak slovník aktualizujeme? Použijeme při tom velmi podobný postup jako při hledání. Víš, že hodnotu vytáhneme pomocí hranatých závorek. Stejně tak můžeme hranaté závorky následované rovnítkem použít k aktualizaci slovníku. Jiki dojde ke krabici s označením person, vytáhne stránku kroužkového bloku, najde klíč `"age"`, vygumuje `42`, které tam bylo, a na jeho místo napíše `43`. Pak se stránka vrátí zpátky do krabice. Tím se mění sám slovník.

```javascript
person["age"] = 43
```

Jiki nevytváří nový slovník, mění kroužkový blok, který v krabici už byl.

A co když chceš přidat informaci, která tam dřív nebyla? Uděláš to úplně stejně.

Když zadáš klíč, který neexistuje, Jiki prostě přidá na konec nový klíč s tou hodnotou.

Takže v tomhle případě otevře blok, podívá se po `"country"`, zjistí, že tam není, a přidá na konec nový řádek: vlevo `"country"`, vpravo `"England"`.

```javascript
person["country"] = "England"
```

Je to tedy úplně stejná syntaxe jako při změně hodnoty. Jiki zvládne obojí sám. Když klíč existuje, aktualizuje ho. Když neexistuje, přidá ho. Nemusíš dělat nic zvláštního.

A stejně jako můžeš začít s prázdným polem a přidávat do něj další prvky, můžeš začít s prázdným slovníkem a přidávat klíče jeden po druhém. To je taky velmi častý postup. Uvidíš ho pořád.

Slovníky se často používají k počítání. Klíče můžeš nastavit jako věci, které chceš počítat, a hodnoty jako jejich počty. Představ si, že pozoruješ ptáky a chceš si zaznamenávat, kolik kterého ptáka vidíš. Když nějakého ptáka uvidíš poprvé, nastavíš jeho počet na jedna, a pokaždé další, když ho uvidíš, vezmeš jeho současnou hodnotu a zvýšíš ji o jedna. Aby tenhle postup fungoval, potřebujeme způsob, jak zjistit, jestli slovník ten klíč už má. Když ho má, přičteme jedničku, když ne, začneme na jedničce.

A k tomu mají slovníky jednu metodu: `has` (má).

Zadáš klíč, který tě zajímá, Jiki zkontroluje, jestli ho slovník má, a podle toho vrátí pravdu nebo nepravdu.

```javascript
person.has("age") // true
```

Když to dáme dohromady, vypadá počítací postup takhle:

```javascript
if (counts.has(letter)) {
  counts[letter] = counts[letter] + 1
} else {
  counts[letter] = 1
}
```
