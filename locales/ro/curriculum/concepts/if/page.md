---
title: "Înțelegerea condițiilor `if`"
description: "Folosirea cuvântului-cheie `if` ca să rulezi un bloc de cod doar când o condiție este adevărată, ca un portar care lasă oamenii să intre."
en_md5: 81c99eea67b02e082ca6c9d7988a3914
---

Există un cuvânt-cheie care ne ajută să-i spunem lui Jiki să facă anumite lucruri doar în anumite situații. Poate scrii un cod care păzește intrarea într-un bar, poate ești portar, și Jiki ar trebui să deschidă ușa doar dacă cineva este îmbrăcat corespunzător. Sau poate scrii un cod în care tu ești cel care flutură steagul în carouri la finalul unei curse, dar Jiki trebuie să știe că trebuie să facă asta doar în ultimul tur. În astfel de situații, o să folosim cuvântul-cheie `if`.

<img
  class="concept-image"
  src="/static/images/concept-assets/if/bar-door-scenario.webp"
  alt="Jiki ca portar, hotărând dacă să lase oamenii să intre în clubul de noapte"
  width="292"
  height="400"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/if/waving-flag.webp"
  alt="Jiki pregătit să fluture steagul în carouri la finalul unei curse"
  width="266"
  height="400"
/>

Folosim cuvântul-cheie `if` într-un mod foarte asemănător cu `repeat`. Punem niște informații între paranteze rotunde. În acest caz, acea informație este condiția (engl. _condition_) pe care o verificăm. Apoi punem un bloc de cod între acolade, pe care îl rulăm doar dacă acea condiție este adevărată.

```javascript
if (condition) {
}
```

Și cum arată aceste condiții? Ei bine, de obicei sunt un fel de comparație (engl. _comparison_). Comparăm două numere sau două stringuri și verificăm dacă rezultatul este adevărat sau fals.

Deci gândește-te la ele ca la niște afirmații (engl. _statements_) pe care le-ai putea spune cu voce tare. Trei este mai mic decât cinci. Asta e adevărat. Șapte este mai mic decât doi. Asta e fals.

Folosim simboluri ca să scriem aceste comparații. Probabil le știi deja de la matematică. Avem mai mic decât, mai mare decât, mai mic sau egal cu, mai mare sau egal cu, și avem și o verificare care vede dacă două lucruri sunt la fel, dacă sunt egale. Iar aceasta este puțin diferită de ce ești obișnuit, pentru că folosim trei semne egale la rând ca să vedem dacă două lucruri sunt la fel sau diferite.

<img
  class="concept-image"
  src="/static/images/concept-assets/if/comparisons-symbols.webp"
  alt="Un tabel cu operatorii de comparație: mai mic decât, mai mare decât, mai mic sau egal, mai mare sau egal, egal și diferit, cu exemple"
  width="449"
  height="400"
/>

Și asta ne ajută să nu ne încurcăm atunci când setăm sau actualizăm variabile, unde folosim un singur semn egal ca să spunem pune asta în cutie. Doar ține minte: trei semne egale pentru comparație.

Poți compara și stringuri. Deci `"hello"` este egal cu `"hello"`. Asta e adevărat. Cele două stringuri sunt la fel. Dar ai grijă aici, pentru că Jiki compară fiecare caracter (engl. _character_) din ambele stringuri, pe ambele foi de hârtie. Așa că `"Hello"` cu H mare nu este egal cu `"hello"` cu h mic. Sunt stringuri diferite. Deci o comparație între ele ar da fals, pentru că H-ul mare și h-ul mic sunt caractere diferite.

Apropo, adevărat și fals se numesc _Booleans_ (valori logice), și acesta este încă un cuvânt care sună tehnic. Dar este foarte simplu. Este doar o modalitate formală de a spune că ceva este fie adevărat, fie fals. Deci dacă dai peste cuvântul Booleans, înseamnă doar adevărat sau fals. Hai să vedem asta în acțiune. Imaginează-ți că construim acel robot portar pentru un club și o să spunem că portarul trebuie să deschidă ușa doar dacă persoana are 21 de ani sau mai mult. Deci avem o funcție `askAge` (întreabă vârsta), pe care o putem folosi ca să aflăm vârsta cuiva, și o să salvăm rezultatul ei într-o variabilă numită `age` (vârstă). Și apoi putem spune: dacă `age` este mai mare decât 20, deschidem ușa. Deci dacă `askAge` returnează `30`, o deschidem, iar dacă returnează `12`, nu.

```javascript
let age = askAge()
if (age >= 21) {
  openDoor()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/if/bouncer-open-close.webp"
  alt="Jiki deschizând ușa pentru cineva suficient de mare și refuzând intrarea cuiva prea tânăr"
  width="410"
  height="400"
/>
