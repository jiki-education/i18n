---
title: "Jak používat `repeat` bez počtu"
description: "Necháme závorky cyklu `repeat` prázdné, aby Jiki šel dál, dokud mu něco jiného neřekne, aby se zastavil."
en_md5: f1f98b46bedb1b5abc72aa1b856ee8ae
---

Dosud u cyklu `repeat` vždycky určuješ číslo, které říká, kolikrát se má opakovat. Opakuj pětkrát, desetkrát, čtyřicetkrát. Někdy k tomu použiješ i proměnnou. Ale vždycky Jikimu přesně řekneš, kolikrát se má cyklus zopakovat. Jenže někdy předem nevíme, kolikrát to bude. Vzpomeň si na bludiště. Úplně na začátku kurzu šlo bludiště vyřešit tak, že vypíšeš konkrétní tahy. Bludiště vidíš, spočítáš kroky a napíšeš správný počet tahů.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-known-path.webp"
  alt="Bludiště, ve kterém postavička vidí cestu, spočítá kroky a vypíše přesně správné tahy"
  width="418"
  height="400"
/>

```javascript
move()
move()
turnLeft()
move()
move()
```

Ale co když ti řeknu: „Napiš mi kód, který vyřeší jakékoli bludiště, které ti dám?“ Takové bludiště může potřebovat 10 kroků, nebo 50, nebo 200. Předem to vůbec nevíš.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-example.webp"
  alt="Několik různých bludišť nejrůznějších tvarů a velikostí a Jiki, který přemýšlí, jak vyřešit každé z nich"
  width="402"
  height="400"
/>

Takže potřebuješ způsob, jak Jikimu prostě říct, aby šel dál. Ať pořád kontroluje, kudy může jít, pořád se rozhoduje a pořád jde dopředu, znovu a znovu, dokud nebude hotovo.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill.webp"
  alt="Jiki běží na běžícím pásu a jen tak pořád dokola pokračuje"
  width="428"
  height="400"
/>

A způsob, jak to udělat, je opravdu jednoduchý. Prostě nedávej klíčovému slovu `repeat` žádné číslo. Nech ty závorky prázdné. Když to uděláš, Jiki půjde dál, dokud mu něco jiného neřekne, aby se zastavil. Později se podíváme na to, co tím něčím jiným může být. Ale zatím půjde dál, dokud cvičení neskončí, nebo dokud se nerozhodne, že už běží neskutečně dlouho, že si chce dát pauzu a že už toho má dost.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill-exhausted.webp"
  alt="Jiki vyčerpaně visí přes běžící pás, protože už běžel neskutečně dlouho, a chce to vzdát a dát si pauzu"
  width="500"
  height="378"
/>
