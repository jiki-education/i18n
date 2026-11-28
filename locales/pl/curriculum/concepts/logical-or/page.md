---
title: „Operator `||` (lub)”
description: „Łączenie dwóch warunków za pomocą `||` w taki sposób, żeby cały warunek był prawdziwy, gdy prawdziwa jest co najmniej jedna z jego części.”
en_md5: e7bc3f103a37719cdf3a77920d09e24e
---

Możemy też użyć `or` i znowu, niestety, w JavaScripcie nie ma porządnego słowa kluczowego or. Zamiast tego musimy użyć dwóch kresek (ang. _bars_) postawionych obok siebie, żeby wyrazić „lub”. Wygląda to dziwnie, ale wcale takie nie jest. Przyzwyczaisz się.

Możemy więc powiedzieć, że jeśli ktoś ma ponad 20 lat lub ma na sobie strój disco, to może wejść. Będziemy więc mieli wesołą imprezę, na której będą dzieciaki w strojach disco i kiepsko ubrani dorośli, co brzmi rozsądnie.

```javascript
if (age > 20 || outfit === "disco") {
  openDoor()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-or/party-door.webp"
  alt="Jiki wita przy drzwiach na imprezę mieszankę dzieciaków w strojach disco i swobodnie ubranych dorosłych"
  width="327"
  height="400"
/>

Jest jedna rzecz, która myli ludzi przy and i przy or: każda strona każdego z tych operatorów musi być kompletnym porównaniem. Więc nawet jeśli porównujesz tę samą zmienną po obu stronach, musisz ją powtórzyć. Nie da się napisać „jeśli wiek jest mniejszy niż 13 lub większy niż 20”. Trzeba napisać „jeśli wiek jest mniejszy niż 13 lub wiek jest większy niż 20”. Obie strony muszą być kompletnymi porównaniami.

```javascript
if (age < 13 || age > 20)
```

Pomyśl o tym, kiedy oba warunki mają znaczenie, a kiedy wystarczy, że prawdziwy jest tylko jeden z nich.
