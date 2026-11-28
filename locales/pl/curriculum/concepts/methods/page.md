---
title: "Metody"
description: 'Funkcje, które należą do wartości i wywołuje się je notacją kropkową, jak `"Jeremy".includes("e")` czy `"Jeremy".toUpperCase()`.'
en_md5: 37c097a81459cd2ff4ae684559bd4311
---

Do tej pory stringi i liczby kojarzyły nam się z czymś dość statycznym.

I chociaż rzeczywiście takie są, mają też w sobie mnóstwo funkcjonalności, z których Jiki może korzystać.

A z czasem poznamy te funkcjonalności, te zdolności, które potrafią bardzo ułatwić Ci życie.

Przyjrzymy się dwóm rodzajom takich zdolności: właściwościom (ang. _properties_) i metodom.

Metody to funkcje, które należą do stringa.

Zamiast pisać funkcję, do której przekazujemy string jako dane wejściowe, możemy użyć metody bezpośrednio na stringu.

Na przykład pamiętasz może funkcję, która sprawdza, czy w stringu znajduje się konkretna litera? Otóż stringi mają metodę `includes` (czyli „zawiera”), która robi dokładnie to samo, i można jej użyć tą samą notacją kropkową, co przy właściwościach.

Różnica w stosunku do właściwości polega na tym, że metody zapisujemy jak funkcje: z nawiasami i danymi wejściowymi.

Możemy więc napisać:

```javascript
"Jeremy".includes("e") // true
```

I dostaniemy z powrotem `true`, bo w `"Jeremy"` jest `"e"`.

<img
  class="concept-image"
  src="/static/images/concept-assets/methods/jiki-writing-jeremy.webp"
  alt="Jiki zapisuje string Jeremy na kartce papieru"
  width="359"
  height="400"
/>

Metody różnią się od właściwości tym, że nie są statycznymi faktami. To po prostu funkcje. Możesz myśleć o nich jak o funkcjach, które mają wbudowane pudełko z tym stringiem w środku.

Jak dokładnie działają, na razie nie ma większego znaczenia. Ich tworzeniem zajmiesz się dopiero za jakiś czas. Wystarczy wiedzieć, że metodę wywołuje się kropką, a potem zwykłą składnią funkcji.

W przypadku stringów warto wiedzieć jeszcze jedno: metody nie zmieniają niczego w samym stringu. Na przykład istnieje metoda `toUpperCase` (czyli „na wielkie litery”), która zwraca string zapisany wielkimi literami. Nie zmienia to jednak oryginalnego stringa. Ten wciąż zawiera `"Jeremy"` zapisane tylko z wielkim J na początku. Jiki tworzy za to nowy string, w całości wielkimi literami.

```javascript
const name = "Jeremy"
const bigName = name.toUpperCase()

log(bigName) // "JEREMY"
log(name) // "Jeremy"
```
