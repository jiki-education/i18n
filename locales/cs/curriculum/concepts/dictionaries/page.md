---
title: "Slovníky"
description: "Stránka kroužkového bloku, kde má každý záznam vlevo klíč a vpravo svou hodnotu. Místo seznamu tak dostaneš data s popisky."
en_md5: b8a26ad63301df1d00ce08e1e429cf05
---

Pole je naše první volba, kdykoli máme seznam čehokoli. Seznam mentorů, seznam skóre, seznam surovin, jakýkoli seznam. Vždycky chceš použít pole.

Ale existuje ještě jedna datová struktura (anglicky _data structure_), která se taky hodně používá, když chceš něco trochu složitějšího než seznam.

Představ si, že o mně chceme uložit nějaké informace: moje jméno, můj věk, místo, kde jsem se narodil. Můžeš na to použít pole, ale není z toho moc jasné, co je co.

Je Anglie místo, kde jsem se narodil, nebo kde žiju? Je 42 můj věk, nebo něco jiného?

A když to pak chci použít, musím si pamatovat, že první pozice je pro jméno, druhá pro věk a třetí pro místo narození. Je to trochu nepřehledné, a nepřehledné je to proto, že tohle vlastně není seznam věcí. Je to složitější. A právě tady přicházejí na řadu slovníky (anglicky _dictionaries_). Slovník je nový typ datové struktury. Je to už tvůj pátý. Máš řetězce, čísla, Boolean, pole a teď slovníky.

A teď si slovník představ jako stránku z kroužkového bloku.

Na levé straně máš nadpisy, slova `"name"`, `"age"` a `"birthplace"`, a těm říkáme klíče (anglicky _keys_).

A na pravé straně, vedle každého nadpisu, máš samotná data, `"Jeremy"`, `42`, `"England"`, a těm říkáme hodnoty (anglicky _values_).

Stejně jako pole je i slovník jedna věc. Je to jedna stránka z kroužkového bloku. A stejně jako pole ho Jiki může dát do proměnné, do krabice nebo ho použít jako vstup pro funkci, případně ho může dostat z výdejního otvoru. Tady je, jak slovník vypadá v kódu. Složené závorky označují začátek a konec a uvnitř máš dvojice: klíč vlevo, dvojtečku a vpravo hodnotu. Mezi jednotlivými dvojicemi je čárka. Jiki to uvidí, vytáhne si kroužkový blok, zapíše `name`, `"Jeremy"`, `age`, `42` a tak dál pro každou dvojici.

A když je hotový, stránku odtrhne a dá ji do krabice se štítkem `person` (osoba).

Je dobré znát pár pravidel. Klíče jsou vždycky řetězce. Musí být v uvozovkách a každý klíč musí být jedinečný. Ve stejném slovníku nemůžeš mít dva klíče s názvem `name`.

Hodnoty stejné být můžou, ale klíče musí být různé.

A hodnoty můžou být cokoli. Řetězce, čísla, Boolean, pole, nebo dokonce jiné slovníky.

Můžeš mít i prázdný slovník, stejně jako jsme měli prázdné pole, a můžeš s ním začít a postupně ho rozšiřovat.

Takže slovník máš, ale jak z něj zase něco dostaneš?

Používáme stejnou syntaxi s hranatými závorkami jako u polí a řetězců, ale místo čísla pozice dovnitř dáme klíč. Takže když chceme ze slovníku dostat něčí jméno, napíšeme:

```javascript
person["name"] // "Jeremy"
```

Tím Jikimu říkáš, aby se podíval do slovníku `person`, našel klíč `"name"` a vytáhl jeho hodnotu. Jiki jde ke krabici `person`, vytáhne z ní stránku z bloku, projede všechny klíče, dokud nenajde `"name"`, přečte hodnotu `"Jeremy"` a dá ji do nové krabice s názvem `name`.

Hranaté závorky znamenají pořád to samé. Saháš do něčeho a něco z toho vytahuješ. U polí a řetězců číslem říkáš, z které pozice chceš co dostat. U slovníků používáš jako klíč řetězec.

Je to stejná myšlenka, jen s trochu jinou syntaxí.
