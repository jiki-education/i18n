---
title: "Operator `!` (negacja)"
description: "Używanie `!` do odwracania wartości logicznej: prawda zmienia się w fałsz, a fałsz w prawdę; przydaje się do przełączania stanu i odwracania warunków."
en_md5: 5d752c7a85e6e17d914c73c83429de80
---

Do tej pory, porównując rzeczy, żeby sprawdzić, czy są równe, używaliśmy trzech znaków równości. Czasem jednak chcemy sprawdzić, czy coś nie jest równe, i do tego używamy wykrzyknika, po którym następują dwa znaki równości. I ogólnie w programowaniu wykrzyknik, albo bang, jak to podobno nazywają nasi amerykańscy przyjaciele, oznacza „nie”. Wyobraź sobie więc, że pracujesz w sklepie i kierownictwo postanowiło, że żadne dyskotekowe stroje nie wchodzą w grę.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/shop-bouncer.webp"
  alt="Ochroniarz w drzwiach sklepu sprawdzający stroje osób stojących w kolejce"
  width="451"
  height="400"
/>

Możemy powiedzieć: jeśli strój to nie „disco”, otwórz drzwi. Instrukcja warunkowa działa dokładnie tak samo.

```javascript
if (outfit !== "disco") {
  openDoor()
}
```

Różnica polega tylko na tym, że warunek zwraca prawdę, jeśli rzeczy są różne, a fałsz, jeśli są takie same. Moglibyśmy więc zapisać to samo tak: jeśli strój to „disco”, nie rób nic. W przeciwnym razie otwórz drzwi. Ale ogólnie łatwiej i czyściej jest użyć operatora `not`, żeby naprawdę wiedzieć i mówić to, co się ma na myśli.

Jeszcze jedna rzecz z tym związana. Czasem masz zmienną, która jest prawdą, i chcesz zmienić ją na fałsz, albo masz coś, co jest fałszem, i chcesz zmienić to na prawdę. Można tego użyć do śledzenia jakiegoś stanu. Wyobraź sobie, że coś odbija się od lewej do prawej, a my mamy zmienną o nazwie `movingRight` (poruszanie się w prawo), która jest prawdą, kiedy trzeba ruszyć w prawo. Kiedy jednak chcesz ją przełączyć (ang. _toggle_) na fałsz, gdy dojdziesz do prawej krawędzi.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/pong-court.webp"
  alt="Kort w stylu Ponga z paletkami i piłką odbijającą się z boku na bok, ilustrujący przełączanie zmiennej movingRight"
  width="500"
  height="352"
/>

Moglibyśmy zrobić to w ten sposób: jeśli `movingRight` równa się prawdzie, to `movingRight` równa się fałszowi. W przeciwnym razie `movingRight` równa się prawdzie. To jeden ze sposobów przełączenia zmiennej. Jiki patrzy więc na `movingRight`, sprawdza, czy to prawda, czy fałsz, a potem ustala przeciwieństwo i wkłada tę wartość z powrotem do pudełka.

```javascript
if (movingRight === true) {
  movingRight = false
} else {
  movingRight = true
}
```

Jest jednak na to zgrabniejszy sposób: użyć tego samego wykrzyknika, czyli bangu:

```javascript
movingRight = !movingRight
```

I to odwraca wartość na przeciwną. `!movingRight` oznacza przeciwieństwo tego, co było wcześniej.

Jeśli więc `movingRight` było prawdą, teraz jest fałszem. Jeśli było fałszem, teraz jest prawdą. Jiki bierze to, co aktualnie jest w pudełku, a ten wykrzyknik każe mu znaleźć przeciwieństwo. Przeciwieństwem prawdy jest fałsz. Przeciwieństwem fałszu jest prawda, i wtedy Jiki wkłada ją z powrotem do pudełka. To dokładnie to samo, co ta dłuższa instrukcja warunkowa if/else, tylko zapisuje się ją znacznie zgrabniej i zwięźlej.
