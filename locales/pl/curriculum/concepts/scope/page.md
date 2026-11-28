---
title: "Zakres"
description: "Zrozumienie, jak nawiasy klamrowe tworzą własny zestaw półek, przez co zmienne żyją tylko tak długo, jak blok, w którym powstały."
en_md5: 4d5fc2d1d304725660102e9aaceea4c3
---

Wyobraź sobie kod, który przy każdym uruchomieniu rysuje okrąg w innym miejscu, a chcemy narysować 10 okręgów w różnych miejscach. Moglibyśmy połączyć to z pętlą. Ale ci z Was, którzy uważnie śledzą, być może zauważyli coś dziwnego.

```javascript
repeat(10) {
  let left = Math.randomInt(0, 100)
  let top = Math.randomInt(0, 100)
  circle(left, top, 5, "blue")
}
```

Na początku była mowa o zasadzie, że pudełka na półkach Jikiego muszą mieć unikalne nazwy, a słowo kluczowe `let` tworzy nowe pudełko za każdym razem, gdy go użyjesz.

Ale ponieważ `let` znajduje się w pętli, Jiki tworzy nowe pudełko za każdym razem, gdy pętla się wykonuje.

Więc czy kod jest błędny, czy dzieje się tu jeszcze coś dziwnego?

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/thinking-jiki.webp"
  alt="Jiki z zakłopotaniem zastanawia się, czy kod jest błędny"
  width="384"
  height="400"
/>

A jednak okazuje się, że kod jest w porządku. To w pełni poprawny JavaScript i działa dzięki koncepcji zwanej zakresem (ang. _scope_, czyli scoping). Zakres z początku pewnie wydaje się całkiem prosty, ale gwarantuję Ci, że będzie sprawiał Ci ból do końca kariery. Nawet najbardziej doświadczeni programiści trafiają na problemy z zakresem, a JavaScript jest jednym z najtrudniejszych języków pod tym względem. Mówię Ci to, żeby nie było Ci przykro, kiedy sam natkniesz się na problemy z zakresem. Ale jednocześnie naprawdę zwróć na to uwagę, bo to ważne.

Kiedy widzisz w kodzie nawias klamrowy, tworzy on coś, co nazywa się nowym zakresem. Co to znaczy? Możesz sobie wyobrazić, że Jiki za każdym razem, gdy widzi nawias klamrowy, tworzy w swoim warsztacie nowy, mały zestaw półek. A wszelkie pudełka, które tworzy podczas pracy, wykonując kod wewnątrz tych nawiasów klamrowych, te pudełka, te nowe pudełka trafiają na nowy, mały zestaw półek, a nie na ten główny.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves.webp"
  alt="Główny zestaw półek Jikiego obok nowego, mniejszego zestawu półek utworzonego przez nawias klamrowy"
  width="500"
  height="205"
/>

A kiedy Jiki dociera do odpowiadającego mu zamykającego nawiasu klamrowego, wyrzuca wszystkie pudełka, które stoją na tym dodatkowym zestawie półek.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves-loop-end.webp"
  alt="Jiki wrzuca pudełka z dodatkowego zestawu półek do kosza, gdy dociera do zamykającego nawiasu klamrowego"
  width="500"
  height="237"
/>

Tak więc przy każdej pętli tego typu możemy tworzyć pudełka, które żyją tylko tyle, ile trwa jedno wykonanie pętli. Pudełka `left` (lewo) i `top` (góra), które tu widzisz, istnieją tylko do momentu, w którym trafiamy na zamykający nawias klamrowy, a potem zostają wyrzucone. A Jiki trafia na ten zamykający nawias klamrowy za każdym razem, gdy pętla się wykonuje. W tym programie to 10 razy. Czyli 10 razy tworzy pudełko o nazwie `left` i 10 razy je wyrzuca.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/left-top-boxes-color.webp"
  alt="Dwa pudełka z etykietami left i top, które istnieją tylko przez jedną iterację pętli"
  width="500"
  height="187"
/>

Kiedy więc tworzysz zmienną, musisz zdecydować, jak długo ma istnieć. Jeśli chcesz, żeby żyła długo, musi znaleźć się poza jakimikolwiek nawiasami klamrowymi. Jeśli ma przetrwać tylko jedną iterację, jedno wykonanie pętli, możesz umieścić ją wewnątrz nawiasów klamrowych. Widzisz, jak to wszystko może się trochę pogmatwać? Dobrą zasadą na start, która to upraszcza, jest trzymanie wszystkich zmiennych na początku kodu, poza nawiasami klamrowymi, i aktualizowanie ich wyłącznie w środku nawiasów. Na przykład powyższy kod moglibyśmy napisać z jednym pudełkiem `left` i jednym `top`, ustawionymi na starcie na zero i aktualizowanymi za każdym razem wewnątrz pętli. To też jest w pełni poprawne. Żadna z tych wersji nie jest zła. Istnieją dobre praktyki, ale poznamy je później. Na razie eksperymentuj, baw się dobrze, sprawdź, co jest dla Ciebie najwygodniejsze, i staraj się nie przejmować tym za bardzo.
