---
title: "Používání funkcí"
description: "Jak Jikimu říct, aby spustil jeden ze svých malých strojků: napíšeš jeho název a za něj dvě závorky."
en_md5: fc671310093a081113a8f301b6ff53fe
---

Když píšeš kód, vlastně tím sděluješ, co chceš, aby se stalo, v jazyce, kterému počítač rozumí. Existuje spousta různých programovacích jazyků a taky spousta různých interpretů, kteří vezmou, co napíšeš, a převedou to na jedničky a nuly, kterým počítač rozumí. V tomto kurzu je tvým interpretem Jiki. Celý kurz se jmenuje po Jikim. Tohle je Jiki. Jiki bude tvůj kamarád na téhle cestě za programováním. Jeho úkolem je interpretovat kód, který napíšeš, a převést ho na jedničky a nuly, se kterými počítač opravdu dokáže pracovat.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions/jiki-introduction.webp"
  alt="Jiki, přátelský interpret, který tě provede tímto kurzem"
  width="421"
  height="400"
/>

Celé programování je vlastně o tom, že dáváš interpretovi, v tomto případě Jikimu, správné pokyny. A pokynů, které můžeš Jikimu dát, je spousta a on spoustě z nich rozumí. Umí věci spojovat, umí něco udělat mnohokrát, umí říct: „Když se stane tohle, musím udělat tohle.“ Umí si věci zapamatovat a později je znovu použít. Umí ti dát chybu, když něco není v pořádku. Všechny tyhle věci v tomto kurzu projdeme. Ale to podstatné je, že všechno, co budeš dělat, je psaní pokynů na tabuli, ke které Jiki přijde a bude je následovat.

Když jsem se před 34 lety učil programovat, tohle byl mentální model, který jsem si postavil, a mám ho dodnes. Rozumím tomu, jak počítače fungují až do úrovně jedniček a nul, ale upřímně na to nikdy nemyslím. V hlavě mám malého mužíčka, který žije v počítači, a říkám mu, co má dělat. Tak pojď na to se mnou. Je to silný mentální model, který si můžeš postavit, a když začneš o věcech přemýšlet takhle vizuálně, přes to, co dělá ten človíček v počítači, bude se ti to při učení programovat hodně hodit.

Začněme tedy jedním ze základních pojmů programování, kterému se říká funkce (anglicky _function_). Funkce jsou jako malé stroje, kterým můžeš říct, aby je Jiki použil. A když se podíváme do Jikiho skladu, kde tráví čas, uvidíš, že tam má polici se třemi různými stroji: `move` (popojdi o krok vpřed), `turnLeft` (otoč se doleva) a `turnRight` (otoč se doprava).

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions/warehouse-three-machines.webp"
  alt="Police v Jikiho skladu, na které stojí tři stroje se štítky move, turnLeft a turnRight"
  width="500"
  height="371"
/>

Když napíšeš `move` a za tím ty dvě závorky, říkáš Jikimu, aby šel, sundal stroj `move` z police, zatočil klikou, nastartoval ho a použil.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions/jiki-using-move-1.webp"
  alt="Jiki odváží stroj move z police, aby ho použil"
  width="439"
  height="400"
/>

Když napíšeš `turnLeft` a za tím závorky, říkáš Jikimu, aby sundal stroj `turnLeft` z police a použil ho. A tenhle vzorec budeš používat pořád dokola. Kdykoli chceš nějaký stroj použít, napíšeš jeho název a za něj ty dvě závorky, a tím Jikimu říkáš, aby ten stroj přinesl a použil ho:

```javascript
move()
turnLeft()
```

Jak ten stroj vlastně funguje, co se děje uvnitř, tím se zatím nemusíme zabývat. Podíváme se na to později mnohem podrobněji. Vlastně nebude dlouho trvat a budeš umět vyrábět i svoje vlastní stroje. Ale zatím si s tím nelámej hlavu. U každého cvičení se dozvíš, které stroje jsou na Jikiho polici. Pro každé cvičení to budou jiné stroje a s jejich pomocí cvičení vyřešíš.
