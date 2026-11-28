---
title: "Dicționare"
description: "O pagină de caiet cu spirală în care fiecare intrare are o cheie în stânga și valoarea ei în dreapta, oferindu-ți date etichetate în loc de o listă."
en_md5: b8a26ad63301df1d00ce08e1e429cf05
---

Matricea este prima noastră opțiune atunci când avem o listă de orice fel: o listă de mentori, o listă de scoruri, o listă de ingrediente. Orice listă, vrei să folosești o matrice.

Dar mai există o structură de date (engl. _data structure_) la fel de des întâlnită, pentru situațiile în care vrei ceva ceva mai complex decât o listă.

Imaginează-ți că vrem să stocăm câteva informații despre mine: numele meu, vârsta mea, locul unde m-am născut. Ai putea folosi o matrice, dar nu prea se înțelege ce se întâmplă când faci asta.

Anglia este locul unde m-am născut sau locul unde locuiesc? 42 este vârsta mea sau altceva?

Și dacă vreau să folosesc asta, trebuie să țin minte că prima poziție este pentru nume, a doua pentru vârstă, a treia pentru locul nașterii. E cam încurcat, și e încurcat pentru că asta nu este de fapt o listă de lucruri. E mai complex decât atât. Și aici intră în scenă dicționarele (engl. _dictionaries_). Un dicționar este un tip nou de structură de date. Este al cincilea tip. Ai stringuri, numere, Boolean, matrice, iar acum și dicționare.

Și vreau să te gândești la un dicționar ca la o foaie dintr-un caiet cu spirală.

În partea stângă ai titlurile, cuvintele `"name"`, `"age"`, `"birthplace"`, și pe acestea le numim chei (engl. _keys_).

Iar în partea dreaptă, lângă fiecare titlu, ai datele propriu-zise, `"Jeremy"`, `42`, `"England"`, și pe acestea le numim valori (engl. _values_).

La fel ca matricele, un dicționar este un singur lucru. Este o pagină dintr-un caiet. Și la fel ca matricele, Jiki îl poate pune într-o variabilă, într-o cutie, sau ca intrare pentru o funcție, ori îl poate scoate din toboganul de ieșire. Deci iată cum arată un dicționar în cod. Folosim acolade pentru a marca începutul și sfârșitul, iar înăuntru ai perechi: o cheie în stânga, două puncte, apoi valoarea în dreapta. Și avem o virgulă între fiecare pereche. Jiki vede asta, își scoate caietul cu spirală, scrie `name`, `"Jeremy"`, `age`, `42` și așa mai departe pentru fiecare pereche.

Iar când termină, rupe foaia din caiet și o pune într-o cutie cu eticheta `person` (persoană).

Sunt câteva reguli de știut. Cheile sunt întotdeauna stringuri. Trebuie să aibă ghilimele în jurul lor, iar fiecare cheie trebuie să fie unică. Nu poți avea două chei numite `name` în același dicționar.

Valorile pot fi la fel, dacă vrei, dar cheile trebuie să fie diferite.

Iar valorile pot fi orice. Pot fi stringuri, numere, Boolean, matrice sau chiar alte dicționare.

Poți avea și un dicționar gol, la fel cum am avut o matrice goală, și putem porni de la el și să-l completăm mai târziu.

Deci ai un dicționar, dar cum scoți ceva din el?

Folosim aceeași sintaxă cu paranteze pătrate ca la matrice și stringuri, dar în loc de un număr de poziție punem o cheie. Deci, dacă vrem să scoatem numele cuiva dintr-un dicționar, scriem:

```javascript
person["name"] // "Jeremy"
```

Iar asta îi spune lui Jiki să se uite în dicționarul `person`, să găsească cheia `"name"` și să scoată valoarea ei. Jiki merge la cutia `person`, scoate pagina din caiet, se uită prin toate cheile până o găsește pe `"name"`, apoi citește valoarea, `"Jeremy"`, și o pune într-o cutie nouă numită `name`.

Parantezele pătrate înseamnă mereu același lucru. Întinzi mâna în ceva și scoți ceva afară. Cu matricele și stringurile, folosești un număr ca să spui din ce poziție vrei să scoți ceva. Cu dicționarele, folosești un string drept cheie.

Este aceeași idee, doar sintaxa e puțin diferită.
