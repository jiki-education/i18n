---
title: "Funkcje, które zwracają wartości"
description: "Jak złapać wartość, która wypada z kanału zwrotnego funkcji, i wykorzystać ją w swoim kodzie."
en_md5: 830f19fb6aaf184c1f32ade792b60a12
---

Do tej pory przyglądaliśmy się funkcjom, które robią coś w świecie. Funkcja `circle` (koło) rysuje koło. Funkcja `move` (przesuwać) przesuwa Twojego ludzika. Ale niektóre funkcje działają inaczej. Zamiast robić coś na zewnątrz, dają Ci coś, czego możesz użyć w swoim kodzie. Kiedy funkcja daje Jikiemu coś z powrotem do wykorzystania w kodzie, mówimy, że ta funkcja coś zwraca (ang. _returning_). Zwraca coś do Jikiego. Te maszyny możesz sobie wyobrazić tak, że mają kanał zwrotny. Mamy już nasze otwory wejściowe, do których coś wkładamy, ale możemy też mieć jeden otwór wyjściowy, czyli kanał, z którego coś może z powrotem wypaść. Kiedy Jiki naciska przycisk na maszynie, maszyna furkocze i na koniec z tego kanału coś wypada. Może to być liczba. Może to być string. To coś, co Jiki może złapać i wykorzystać.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/machine-with-return-chute.webp"
  alt="Maszyna z kanałem zwrotnym z boku, gotowa wysłać wartość z powrotem do Jikiego"
  width="500"
  height="317"
/>

Większość funkcji, pewnie ze 95%, coś zwraca. Mogą wykonać za Ciebie jakieś obliczenia i zwrócić wynik albo skleić kilka stringów i oddać powstały w ten sposób string. A może za każdym razem, gdy uruchamiasz tę maszynę, zwracają Ci aktualny czas. Zobaczmy ten ostatni przykład. Załóżmy, że mamy funkcję `getCurrentTime` (pobrać aktualny czas). Za każdym razem, gdy Jiki uruchamia maszynę, z kanału zwrotnego wysuwa się kartka papieru z zapisanym czasem, na przykład 14:35.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/paper-out-of-chute.webp"
  alt="Maszyna getCurrentTime z kartką z napisem 14:35, która wysuwa się z kanału zwrotnego"
  width="500"
  height="312"
/>

A potem możemy włożyć tę zwróconą wartość do pudełka za pomocą `let`:

```javascript
let time = getCurrentTime()
```

Jiki uruchomi maszynę, wyjmie aktualny czas z kanału i zapisze go w pudełku o nazwie `time`.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/jiki-boxing-time.webp"
  alt="Jiki wkłada kartkę z 14:35 wyjętą z kanału do pudełka z napisem time"
  width="372"
  height="400"
/>

Ważne, żeby zrozumieć, że kartka, którą Jiki wkłada do pudełka, jest ustalona na ten moment. Nawet jeśli rzeczywisty czas zmieni się, gdy Twój program działa, w pudełku nadal leży ta kartka z napisem 14:35. Gdy coś już trafi do pudełka, jest tam ustalone. Nie zmienia się magicznie. Jeśli w przyszłości zechcemy znowu włożyć aktualny czas do pudełka, musimy ponownie użyć funkcji `getCurrentTime`, żeby go pobrać.

Większość funkcji, które coś zwracają, ma też dane wejściowe. Na przykład możemy mieć funkcję `join` (połączyć), która przyjmuje dwa stringi jako dane wejściowe i zwraca je połączone ze sobą spacją. Jeśli więc użyjemy maszyny `join` z danymi wejściowymi `"Hello"` i `"World"`, z kanału wyjdzie jeden string z napisem `"Hello World"`.

```javascript
join("Hello", "World"); // "Hello World"
```
