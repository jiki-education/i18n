---
title: "Vytváření a používání proměnných"
description: "Krabice na Jikiho policích, které ukládají hodnotu se štítkem, aby se dala později v kódu zase vytáhnout."
en_md5: dd0834017a8d42c22cca25966c1fdd91
---

Proměnné (anglicky _variables_) nám umožňují ukládat si informace. Když programujeme, často potřebujeme nějaké číslo nebo řetězec uložit, abychom je později použili, a právě k tomu slouží proměnné. Tak se pojďme na Jikiho sklad podívat z trochu větší dálky. Uvidíš, že tam má ještě jednu řadu polic. První řadu už dobře známe, jsou na ní funkce, tyhle malé strojky jako `move` a `rectangle`. Na té druhé ale nejsou stroje, nýbrž spousta krabic, a právě těm krabicím říkáme proměnné. Jikimu můžeš říct, aby do takové krabice uložil cokoli, a později ho zase poprosit, aby to vytáhl. Každá krabice má jméno, stejně jako ho mají funkce, a každá obsahuje jen jednu věc. Zatím vždycky buď číslo, nebo řetězec. Ale ukládání složitějších věcí do krabic si ukážeme dál v kurzu.

<img
  class="concept-image"
  src="/static/images/concept-assets/variables/two-shelves.webp"
  alt="Dvě řady polic v Jikiho skladu: jedna s označením funkce, na ní stroje, druhá s označením proměnné, na ní krabice"
  width="500"
  height="173"
/>

Jak tedy Jikimu řekneme, aby vyrobil krabici a něco do ní dal? Použijeme klíčové slovo `let` (vytvoř novou krabici). Klíčové slovo `let` Jikimu říká, že má vyrobit novou krabici. Představ si, že rozbalí kartonovou krabici z obalu, složí ji dohromady, a pak se podívá na to, co následuje za slovem `let`. To je štítek, který dá na krabici, v tomhle případě `name` (jméno). Vytáhne tedy pero a na štítek napíše `name`. Pak se podívá na to, co následuje za `=` (rovnítko). V tomhle případě je to moje jméno, `"Jeremy"`. A protože `"Jeremy"` je řetězec, vezme papírek a napíše na něj `"Jeremy"`. Je to jen obyčejný řetězec, přesně jako barvy, se kterými už pracuješ, a pak ten papírek vloží do krabice.

```javascript
let name = "Jeremy"
```

<img
  class="concept-image"
  src="/static/images/concept-assets/variables/jeremy-paper.webp"
  alt="Jiki drží papírek s napsaným řetězcem Jeremy a chystá se ho vložit do krabice"
  width="373"
  height="400"
/>

Takže jsme Jikimu řekli, aby vyrobil krabici, dal na ni štítek a něco do ní vložil, a on teď tu krabici odnese a postaví na polici. A kdykoli jindy během programu může Jiki dojít k polici, sundat tu krabici a podívat se, co je uvnitř. Začni si tenhle mentální model budovat. Programuju už věčnost a pořád si při psaní kódu představuju, že něco vkládám do krabice a že si to později zase vytáhnu. Když uvidíš klíčové slovo `let`, opravdu si řekni: „Dobře, to znamená, že vyrábím novou krabici.“

Ještě pár slov ke jménům proměnných, tedy ke štítkům na těchhle krabicích. Máme pro ně několik pravidel. Za prvé, jména proměnných nesmí obsahovat mezery. Když chceš na štítek krabice napsat víc slov, natlačíme je k sobě a první písmeno každého slova změníme na velké. Tomuhle zápisu se říká _camel case_ (velbloudí notace). Představ si velbloudí hrbolety, které vždycky vystrčí první písmeno každého dalšího slova nahoru, aby z něj bylo velké písmeno. Takže když chceš štítek, který znamená moje jméno, nenapíšeme dvě slova s mezerou, ale jedno slovo s velkým N: `myName`.

Navíc každé jméno proměnné musí být jedinečné. Nemůžeš mít dvě krabice se stejným štítkem a proměnné taky nesmí mít stejné jméno jako funkce. Když na to zapomeneš, Jiki se zamotá a napíše ti chybovou zprávu.

<img
  class="concept-image"
  src="/static/images/concept-assets/variables/duplicate-names-confused.webp"
  alt="Jiki zmateně kouká na dvě krabice, obě mají štítek name"
  width="485"
  height="400"
/>

Podívejme se tedy, kde se nám proměnná může hodit. Řekněme, že kreslíme slunce na obloze. Víme, že na to můžeme použít funkci `circle` (nakresli kruh) a předat jí čtyři vstupy. Konkrétně `left` (levá souřadnice), `top` (horní souřadnice), `radius` (poloměr) a `color` (barva). Ale když kreslíme spoustu věcí a všechna ta čísla máme rozesetá po celém kódu, je opravdu těžké se v nich vyznat a něco z toho přečíst. Tak si radši vytvoříme proměnné pro left, top, `radius` a `color` a později se na ně budeme odkazovat. Naším cílem je, abychom mohli použít funkci `circle` a zadat jí hezká a čitelná jména krabic. Až Jiki ta jména uvidí, bude vědět, že má krabice sundat z police a použít to, co je v nich.

Tak si pro ně proměnné vytvořme. Začneme levou pozicí slunce. Klíčovým slovem `let` řekneme Jikimu, aby vytvořil novou krabici jménem `leftPosition` (levá pozice). Všimni si toho velkého P uprostřed, to je camel case. A taky Jikimu řekneme, jaké číslo má do krabice dát. Ten krabici postaví na polici a pak udělá totéž pro `topPosition` (horní pozice), `radius` a `color`.

```javascript
let leftPosition = 10
let topPosition = 20
let radius = 5
let color = "yellow"

circle(leftPosition, topPosition, radius, color)
```

<img
  class="concept-image"
  src="/static/images/concept-assets/variables/name-on-shelf.webp"
  alt="Popsané krabice na polici proměnných, v každé je jedna hodnota, kterou si Jiki později vyzvedne"
  width="500"
  height="378"
/>

Kdykoli v kódu se na tyhle proměnné můžeme znovu odkázat a Jiki z nich vytáhne hodnoty (anglicky _values_) a vloží je do stroje. Další skvělá věc na proměnných je, že kdykoli chceme nakreslit něco na stejné pozici jako slunce, můžeme znovu použít ty samé proměnné `leftPosition` a `topPosition`. Vezměme si jiný příklad. Představ si, že stavíš zeď z 30 cihel a chceš, aby všechny cihly měly stejnou šířku a stejnou výšku. Je mnohem lepší vytvořit si na začátku kódu proměnné pro šířku a výšku a pak se na ně odkazovat ve zbytku kódu. Protože když budeš chtít šířku nebo výšku změnit, změníš ji na jednom místě a všechno ostatní se přizpůsobí.
