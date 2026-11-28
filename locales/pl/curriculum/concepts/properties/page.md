---
title: "Właściwości"
description: "Statyczne fakty o wartości, odczytywane notacją kropkową i bez nawiasów, na przykład `.length`, żeby sprawdzić, ile liter ma string."
en_md5: 0634cd72388bef118e9dd22131a3c1cd
---

Do tej pory, myśląc o stringach i liczbach, traktowaliśmy je jako całkiem statyczne rzeczy.

I choć rzeczywiście są statyczne, mają też w sobie mnóstwo możliwości, z których Jiki potrafi korzystać.

Przyjrzymy się dwóm rodzajom takich możliwości: właściwościom i metodom.

Właściwości to fakty o rzeczach, o które możemy poprosić Jikiego. Na przykład stringi mają właściwość o nazwie `length` (długość), dzięki której Jiki może nam powiedzieć, jak długi jest string.

Zamiast więc przechodzić pętlą po wszystkich literach, żeby sprawdzić, jak duży jest string, możemy po prostu zapytać Jikiego.

A żeby to zrobić, używamy nowej składni: kropki.

Na przykład, jeśli mamy string `"Jeremy"` i chcemy poznać jego długość, możemy napisać:

```javascript
"Jeremy".length // 6
```

Kiedy Jiki tworzy string, liczy litery i po prostu zapisuje gdzieś w rogu liczbę mówiącą, ile ich jest.

<img
  class="concept-image"
  src="/static/images/concept-assets/properties/jiki-counting-letters.webp"
  alt="Jiki liczy litery w stringu Jeremy i zapisuje w rogu liczbę"
  width="359"
  height="400"
/>

A potem, kiedy używamy właściwości `length`, Jiki po prostu sprawdza, jaka to była liczba. Więc w naszym przykładzie `"Jeremy".length`, kiedy Jiki tworzy string `"Jeremy"`, liczy litery, zapisuje w rogu liczbę sześć, a potem, kiedy piszemy `"Jeremy".length`, idzie i to sprawdza. Właściwości możesz więc traktować jak fakty o danej rzeczy.
