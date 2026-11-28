---
title: "Funkce, které něco vrací"
description: "Jak chytit hodnotu, která vypadne z výdejního otvoru funkce, a použít ji ve svém kódu."
en_md5: 830f19fb6aaf184c1f32ade792b60a12
---

Zatím jsme se dívali na funkce, které dělají něco ve světě. Takže funkce `circle` (kruh) kreslí kruh. Funkce `move` (posuň se) posouvá postavičku. Jenže některé funkce fungují jinak. Místo aby dělaly něco navenek, dají ti něco zpátky, co můžeš použít ve svém kódu. Když funkce něco vrátí Jikimu, aby to mohl použít v kódu, říkáme, že tato funkce něco vrací (anglicky _returning_). Vrací něco zpátky Jikimu. Můžeš si tyto stroje představit tak, že mají výdejní otvor. Vstupní štěrbiny už známe, do těch věci vkládáme, ale stroj může mít navíc jeden výdejní otvor, kterým zase něco vypadne ven. Když Jiki zmáčkne tlačítko na stroji, stroj se rozbručí a na konci z toho otvoru něco vypadne. Může to být číslo. Může to být řetězec. Je to něco, co Jiki může chytit a použít.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/machine-with-return-chute.webp"
  alt="Stroj s výdejním otvorem na boku, připravený vrátit hodnotu ven Jikimu"
  width="500"
  height="317"
/>

Většina funkcí, možná 95 %, něco vrací. Možná za tebe spočítají nějaký příklad a hodnotu vrátí, nebo spojí několik řetězců dohromady a dají ti výsledný řetězec. Nebo ti při každém spuštění stroje vrátí aktuální čas. Podívejme se na ten poslední případ. Řekněme, že máme funkci `getCurrentTime` (získej aktuální čas). Pokaždé, když Jiki stroj spustí, vyjede z výdejního otvoru papírek s napsaným časem, třeba 14:35.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/paper-out-of-chute.webp"
  alt="Stroj getCurrentTime, ze kterého vyjíždí výdejním otvorem papírek s časem 14:35"
  width="500"
  height="312"
/>

A takhle vrácenou hodnotu pak můžeme pomocí `let` uložit do krabice:

```javascript
let time = getCurrentTime()
```

Jiki stroj spustí, vytáhne z otvoru aktuální čas a uloží ho do krabice s názvem `time`.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/jiki-boxing-time.webp"
  alt="Jiki vkládá papírek s časem 14:35 z výdejního otvoru do krabice s označením time"
  width="372"
  height="400"
/>

Teď je důležité si uvědomit, že papírek, který Jiki do krabice uloží, zůstane takový, jaký byl v tu chvíli. I když se skutečný čas během běhu programu změní, v krabici pořád zůstává ten papírek s napsaným 14:35. Jakmile je něco v krabici, zůstane to tam takové, jaké to je. Samo od sebe se to nezmění. Jestli chceme někdy později uložit do krabice zase aktuální čas, musíme znovu použít funkci `getCurrentTime`, abychom ho získali.

Většina funkcí, které něco vrací, má taky vstupy. Třeba můžeme mít funkci `join` (spoj), která bere dva řetězce jako vstupy a vrátí je spojené mezerou. Když tedy stroj `join` spustíme se vstupy `"Hello"` a `"World"`, vyjede z výdejního otvoru jediný řetězec s nápisem `"Hello World"`.

```javascript
join("Hello", "World"); // "Hello World"
```
