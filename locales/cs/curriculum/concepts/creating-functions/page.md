---
title: "Jak si napsat vlastní funkce"
description: "S klíčovým slovem function si postavíš vlastní stroje, které Jiki uloží na polici a znovu použije."
en_md5: 93286a30a373b5604b60b3c109ad00a3
---

Doteď používáš funkce, které pro tebe někdo postavil, třeba `circle`, `rectangle`, `moveRight` nebo `shoot`. Všechny jsou to funkce, které někdo vytvořil a postavil na Jikiho polici.

Ale teď je čas začít si tvořit vlastní funkce.

Jak na to, si ukážeme na nové funkci pro bludiště. Bude se jmenovat `walk5` (ujdi 5 kroků).

Ta vždycky posune postavičku o pět kroků dopředu. Uznávám, že to není zrovna nejužitečnější funkce na světě, ale na začátek je pěkně jednoduchá.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/walk-grid.webp"
  alt="Postavička na mřížce bludiště, připravená ujít pět kroků dopředu"
  width="500"
  height="314"
/>

Kdybych po tobě tedy chtěl kód, který posune postavičku o pět kroků dopředu, máš dvě možnosti: napsat pětkrát `move` (posuň se), nebo použít cyklus. V tomhle příkladu si to kvůli jednoduchosti ukážeme tak, že `move` napíšeme pětkrát za sebou.

```javascript
move()
move()
move()
move()
move()
```

Přesně tohle chceme mít uvnitř naší funkce.

Teď pod to přidej řádek, který Jikimu řekne, aby tuhle funkci použil. Tohle už znáš mockrát.

A pak je naším úkolem zabalit všech těchhle prvních pět řádků do funkce, aby se při použití `walk5` spustily právě tyhle první řádky kódu.

Abychom z těchhle pěti řádků udělali funkci, z těch pěti pohybů funkci, potřebujeme nové klíčové slovo, a tím je `function`.

Když použijeme klíčové slovo `function`, musíme udělat dvě věci. Za prvé určit název funkce, v tomhle případě `walk5`. A za druhé pomocí složených závorek obalit kód, který říká: „Tohle máš uvnitř funkce dělat.“ To všechno můžeme přidat do kódu, a tím Jikimu říkáme: vytvoř funkci s názvem `walk5`, a až se `walk5` použije, spusť těchhle pět řádků kódu.

```javascript
function walk5() {
  move()
  move()
  move()
  move()
  move()
}
```

Když Jiki uvidí klíčové slovo `function`, postaví novou funkci, dá tyhle pokyny na tabuli dovnitř stroje a na stroj přidá štítek s názvem `walk5`. A pak ten stroj postaví na polici vedle všech ostatních, které tam už jsou.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/jiki-machine-whiteboard.webp"
  alt="Jiki stojí vedle nového stroje, uvnitř kterého je tabule na zapisování pokynů funkce"
  width="500"
  height="396"
/>

Na týhle tvojí funkci ale není nic zvláštního oproti těm vestavěným (anglicky _built-in_). Všechny prostě stojí vedle sebe na jeho polici.

A když funkci použiješ, když napíšeš `walk5()`, Jiki prostě sundá stroj z police a použije ho úplně stejně, jako to dělal s jakoukoli jinou funkcí. Můžeš si představit, že v každém stroji bydlí malý Jiki. Ten malý Jiki má vždycky nasazený tenhle parádní klobouk. A pracuje úplně stejně jako normální Jiki venku, stejně tak poslouchá pokyny.

Jedna důležitá věc: když Jiki funkci vytváří, kód vůbec nespouští. Jen si ho zapíše, aby ho mohl použít později.

Když napíšeš klíčové slovo `function`, postavička v bludišti se zatím vůbec nepohne.

Jiki stroj postavil a dal ho na polici. K ničemu dalšímu nedojde, dokud mu nenapíšeš `walk5()`, tedy dokud mu neřekneš, aby stroj použil.
