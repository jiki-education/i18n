---
title: "Aktualizowanie zmiennych"
description: "Zmienianie tego, co jest w środku zmiennej w trakcie działania programu, żeby śledzić pozycje, liczniki, wyniki i inne zmieniające się wartości."
en_md5: f9b2fbb6bfd82a620b093e88951ff841
---

Do tej pory, kiedy tworzyliśmy zmienne, wkładaliśmy wartości do pudełek, a potem je z nich wyjmowaliśmy. To bardzo się przydawało: dzięki temu kod był czytelniejszy, a do tego mieliśmy mniej liczenia w głowie. Ale prawdziwa siła zmiennych bierze się z możliwości zmieniania tego, co jest w pudełku, czyli tego, co jest w zmiennej, w trakcie działania programu. Nawet jeśli więc uruchamiamy ten sam fragment kodu wiele razy, jego działanie może się zmieniać w zależności od tego, co jest w pudełkach.

Załóżmy, że chcemy posadzić kwiat w ogrodzie. Mamy pod ręką funkcję `plant` (sadzić), która przyjmuje jedne dane wejściowe: pozycję, na której ma stanąć kwiat. Jeśli więc chcemy posadzić kwiat 10 od brzegu, piszemy tak:

```javascript
plant(10)
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/flowers-same-spot.webp"
  alt="Kwiat posadzony w ogrodzie obok notatnika Jikiego"
  width="406"
  height="400"
/>

A co, jeśli chcemy posadzić osiem kwiatów? Moglibyśmy napisać `plant(10)`, `plant(20)`, `plant(30)` itd., ale to dość żmudne.

A przecież poznaliśmy już coś, co pozwala zastąpić taki żmudny kod. Użyj pętli! Użyj bloku repeat! Ustawmy więc zmienną position na 10, a potem niech blok repeat osiem razy wywoła funkcję `plant`.

```javascript
let position = 10
repeat(8) {
  plant(position)
}
```

Jak myślisz, co się stanie?

Posadzi osiem kwiatów, ale za każdym razem w tym samym miejscu, a przecież nie o to nam chodzi. Zatrzymajmy się więc na chwilę i pomyślmy, co Jiki tutaj robi. Tworzy pudełko z etykietą position. Wkłada do niego 10. Potem osiem razy uruchamia maszynę `plant`. Za każdym razem wyjmuje wartość z pudełka position. To zawsze 10, więc za każdym razem wkłada tę samą dziesiątkę.

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-loop-walkthrough.webp"
  alt="Jiki zdejmuje pudełko position z półki i wkłada jego wartość, czyli 10, do maszyny plant"
  width="400"
  height="400"
/>

Potrzebujemy więc sposobu, żeby za każdym razem przesunąć się trochę dalej. Po posadzeniu kwiatu chcemy powiedzieć Jikiemu, żeby przesunął pozycję o 10, gotową na kolejny kwiat.

Zapomnijmy więc na chwilę o kodzie i zastanówmy się, jak to wygląda logicznie. Jeśli powiem Ci: „Posadź pierwszy kwiat na 10, potem następny na 20, a kolejny na 30”, to skąd Twój mózg wie, że następny powinien być posadzony na 40, a jeszcze następny na 50?

Twój mózg cały czas śledzi aktualną liczbę, dodaje do niej 10, a potem aktualizuje tę liczbę u siebie w głowie.

W kodzie możemy zrobić dokładnie to samo. Żeby to zrobić, mówimy: „Zaktualizuj (ang. _update_) pudełko position tak, aby zawierało obecną wartość plus 10.”

Kiedy Jiki to zobaczy, wyjmie z pudełka position obecną liczbę, doda do niej 10, wykona to dodawanie, a potem włoży wynik z powrotem do pudełka, żeby był gotowy na następny raz.

```javascript
position = position + 10
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-updating-box.webp"
  alt="Jiki wyjmuje z pudełka position 10, dodaje 10, otrzymuje 20 i wkłada 20 z powrotem do pudełka"
  width="427"
  height="400"
/>

Jeśli więc dodamy to do naszego programu, tak że mówimy: „Ustaw początkową wartość position na 10”, potem osiem razy posadź kwiat na tej pozycji, a następnie zmień position na o 10 większą niż wcześniej, nasz kod działa i dostajemy osiem kwiatów rozstawionych w odstępach.

Zauważ, że przy aktualizowaniu zmiennej nie ma `let` (utwórz zmienną). To bardzo ważne. Kiedy Jiki widzi `let`, tworzy nowe pudełko. Tutaj jednak nie chcemy tworzyć nowego pudełka. Chcemy zmienić to, co jest w pudełku, które już mamy.

Zauważ też, że pudełko tworzymy tylko raz, przed pętlą. Warto to zapamiętać. Utwórz pudełko raz, na początku, a potem aktualizuj je przy każdym przebiegu pętli.

Możemy aktualizować to, co jest w pudełkach, i wykorzystać tę możliwość do śledzenia czegoś, co zmienia się w czasie. Ten schemat będzie Ci stale towarzyszyć: śledzenie pozycji, liczenie, ile razy coś się wydarzyło, zapisywanie punktów. Zawsze kiedy musisz zapamiętać coś, co zmienia się w trakcie działania programu, robisz to właśnie tak.
