---
title: "Pisanie własnych funkcji"
description: "Jak używać słowa kluczowego function do budowania własnych maszyn, które Jiki może postawić na półkach i używać wielokrotnie."
en_md5: 93286a30a373b5604b60b3c109ad00a3
---

Do tej pory korzystasz z funkcji, które powstały z myślą o Tobie: `circle`, `rectangle`, `moveRight`, `shoot`. Wszystkie one zostały kiedyś zrobione i postawione na półkach Jikiego.

Ale teraz czas zacząć tworzyć własne funkcje.

Żeby pokazać Ci, jak to działa, przyjrzymy się budowaniu nowej funkcji do labiryntu o nazwie `walk5` (przejdź pięć kroków).

Ta funkcja zawsze przesunie ludzika o pięć kroków do przodu. Fakt, nie jest to najbardziej przydatna funkcja na świecie, ale za to prosta, więc dobrze się od niej zaczyna.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/walk-grid.webp"
  alt="Ludzik na siatce labiryntu, gotowy, by przejść pięć kroków do przodu"
  width="500"
  height="314"
/>

Gdybym więc poprosił Cię o napisanie kodu, który przesuwa ludzika o pięć kroków do przodu, można to zrobić na dwa sposoby: napisać `move` pięć razy albo użyć pętli `repeat`. W tym przykładzie, żeby nie komplikować sprawy, użyjemy tego pierwszego podejścia, czyli `move` pięć razy pod rząd.

```javascript
move()
move()
move()
move()
move()
```

I to właśnie chcemy mieć w środku naszej funkcji.

Teraz dodaj pod tym linię, która mówi Jikiemu, żeby użył tej funkcji. Widzisz to już któryś raz z kolei.

A potem naszym zadaniem będzie zamknięcie tych pierwszych pięciu linii w funkcję, tak żeby kiedy Jiki użyje `walk5`, uruchomiły się właśnie te pierwsze pięć linii kodu.

Żeby zamienić te pięć linii, te pięć ruchów, w funkcję, potrzebujemy nowego słowa kluczowego: `function`.

Kiedy używamy słowa kluczowego `function`, robimy dwie rzeczy. Po pierwsze, podajemy nazwę funkcji, w tym wypadku `walk5`. Po drugie, nawiasami klamrowymi obejmujemy kod, który mówi, co ma się dziać w środku funkcji. Dodajemy więc to do naszego kodu i mówimy Jikiemu: stwórz funkcję o nazwie `walk5`, a kiedy `walk5` zostanie użyta, uruchom te pięć linii kodu.

```javascript
function walk5() {
  move()
  move()
  move()
  move()
  move()
}
```

Kiedy Jiki widzi słowo kluczowe `function`, buduje nową funkcję, zapisuje te instrukcje w notatniku w jej środku, a potem przykleja na maszynie etykietę z napisem `walk5`. Następnie stawia tę funkcję na półkach obok wszystkich pozostałych, które tam są.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/jiki-machine-whiteboard.webp"
  alt="Jiki stojący obok nowej maszyny z notatnikiem w środku, w którym zapisuje się instrukcje funkcji"
  width="500"
  height="396"
/>

Ta funkcja, którą właśnie powstała, nie ma w sobie nic wyjątkowego w porównaniu z funkcjami wbudowanymi (ang. _built-in_). Wszystkie stoją obok siebie na jego półkach.

A kiedy używasz funkcji, kiedy piszesz `walk5()`, Jiki po prostu zdejmuje maszynę z półki i używa jej dokładnie tak samo, jak robił to z każdą inną funkcją. Możesz sobie wyobrazić, że w każdej maszynie mieszka mini Jiki. Mini Jiki zawsze nosi tę fajną czapkę. I ten mini Jiki działa dokładnie tak samo jak zwykły Jiki na zewnątrz: tak samo wykonuje instrukcje.

Jedna ważna rzecz do zrozumienia: kiedy Jiki tworzy funkcję, wcale nie uruchamia kodu. Zapisuje go tylko po to, żeby użyć go później.

Ludzik w labiryncie się nie rusza, kiedy piszesz słowo kluczowe `function`.

Jiki zbudował maszynę i postawił ją na półce. Dopiero gdy każesz mu użyć maszyny, pisząc `walk5()`, ludzik naprawdę rusza z miejsca.
