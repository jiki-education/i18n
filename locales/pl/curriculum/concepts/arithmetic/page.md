---
title: "Arytmetyka"
description: "Łączenie zmiennych za pomocą matematyki, dzięki czemu wartości mogą być od siebie zależne poprzez dodawanie, odejmowanie, mnożenie i dzielenie."
en_md5: 7ce54754a3ca29896609a01a51b12377
---

Do tej pory, tworząc zmienne, używaliśmy po prostu prostych wartości: liczby takiej jak `50` lub ciągu znaków takiego jak `"yellow"`. Zmienne zyskują jednak na sile, gdy możemy łączyć je ze sobą. Na przykład wtedy, gdy chcemy określić, że lewa krawędź prostokąta powinna znajdować się w konkretnej odległości od krawędzi płótna.

W programowaniu możemy korzystać ze zwykłej, podstawowej matematyki – dodawania, odejmowania, mnożenia i dzielenia – i wykorzystywać w tych działaniach zmienne, które już wcześniej utworzyliśmy.

Zacznijmy od założenia, że chcemy narysować prostokąt na naszym płótnie. Chcemy, aby zaczynał się 10 jednostek od lewej i prawej krawędzi oraz 20 od górnej i dolnej. Znajdzie się więc na środku płótna i będzie nieco szerszy niż wyższy.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/rectangle-on-canvas.webp"
  alt="Niebieski prostokąt wyśrodkowany na płótnie, oddalony o 10 od lewej i prawej strony oraz o 20 od góry i dołu"
  width="399"
  height="400"
/>

Kiedy rysujemy prostokąt, musimy znać jego `left` (odległość od lewej), `top` (odległość od góry), `width` (szerokość) i `height` (wysokość), a także jego kolor. Możemy więc zacząć od ich wypisania.

Teraz musimy obliczyć, jakie dokładnie powinny być wartości `left`, `top`, `width` oraz `height`. Ustawmy je. Wartość `left` to 10. Wartość `top` to 20. Z kolei `width` to rozmiar płótna, czyli 100, minus 10 po lewej i 10 po prawej stronie, co daje 80. Natomiast `height` to wysokość płótna, która również wynosi 100, minus 20 na górze i 20 na dole, czyli 60.

```javascript
let left = 10
let top = 20
let width = 80
let height = 60

rectangle(left, top, width, height, "blue")
```

Możemy więc ustawić te zmienne. `left` na 10, `top` na 20, `width` na 80, `height` na 60. Ale co się stanie, jeśli zechcemy przesunąć prostokąt nieco do środka i trochę go zmniejszyć? Co, jeśli zechcemy oddalić go o 20 od lewej i prawej strony oraz o 30 od góry i dołu? Musielibyśmy policzyć wszystko od nowa. Wartość `width` wynosiłaby wtedy 100 minus 20 minus 20, a `height` 100 minus 30 minus 30. To zdecydowanie więcej pracy i liczenia, niż ktokolwiek by chciał. Zamiast tego możemy zlecić to zadanie komputerowi.

Możemy ustawić `width` jako 100 minus `left` minus `left`, a `height` jako 100 minus `top` minus `top`, ponieważ odległość od góry i od dołu jest taka sama. Możemy też zapisać to jako 100 minus `left` razy dwa, lub 100 minus `top` razy dwa.

```javascript
let width = 100 - left * 2
let height = 100 - top * 2
```

Teraz, jeśli zmienimy `left` lub `top`, wartości `width` i `height` również ulegną zmianie. Elementy zaczynają więc być od siebie zależne. A co z płótnem? Obecnie jego rozmiar to 100. Ale co, jeśli zmieni się on na 200 szerokości i wysokości? W takiej sytuacji powinniśmy utworzyć zmienną o nazwie `canvasSize` (rozmiar płótna) i ustawić jej wartość na 100. Wtedy nasze `width` to `canvasSize` minus `left` razy dwa, a `height` to `canvasSize` minus `top` razy dwa.

```javascript
let canvasSize = 100
let left = 20
let top = 30
let width = canvasSize - left * 2 // 60
let height = canvasSize - top * 2 // 40

rectangle(left, top, width, height, "blue")
```

Zastanówmy się, co robi Jiki, kiedy piszemy, że `height` równa się `canvasSize` minus `top` razy dwa. Zaczyna od zdjęcia z półki pudełka `top`. Znajduje w nim wartość 30, wyciąga swój kieszonkowy kalkulator, mnoży 30 przez dwa i zapamiętuje wynik 60.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-1.webp"
  alt="Jiki zdejmuje z półki pudełko top i oblicza, że 30 razy dwa to 60"
  width="377"
  height="400"
/>

Następnie zdejmuje z półki pudełko `canvasSize`, znajduje w nim 100 i oblicza, że 100 minus 60 to 40. Teraz już wie, że tak naprawdę chcemy przypisać zmiennej `height` wartość 40. Wykonuje więc instrukcję `let`: bierze nowe pudełko, pisze na nim `height`, a następnie wkłada do niego 40. Kiedy później będzie musiał użyć `height`, po prostu ponownie wyciągnie z niego to 40.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-3.webp"
  alt="Jiki bierze nowe pudełko, pisze na nim height i wkłada do niego 40"
  width="462"
  height="400"
/>

Kiedy już wszystko w ćwiczeniu będzie działać, spróbuj pozmieniać wartości zmiennych i zobacz, co się stanie. Obserwuj, jak elementy rosną i maleją. Nie spiesz się, zastanów się nad relacjami między nimi.
