---
title: "Kuandika Vitendakazi Vyako Mwenyewe"
description: "Kutumia keyword ya function kuunda mashine zako mwenyewe ambazo Jiki anaweza kuweka kwenye rafu zake na kuzitumia tena."
en_md5: 93286a30a373b5604b60b3c109ad00a3
---

Hadi sasa, umekuwa ukitumia vitendakazi vilivyoundwa kwa ajili yako, vitendakazi kama `circle`, `rectangle`, `moveRight`, `shoot`. Vyote hivyo ni vitendakazi vilivyoundwa na kuwekwa kwenye rafu za Jiki.

Lakini sasa umefika wakati wa wewe kuanza kuunda vitendakazi vyako mwenyewe.

Ili kukuonyesha jinsi ya kufanya hivi, tutaangalia kuunda kitendakazi kipya kwa ajili ya labirenti kiitwacho `walk5` (tembea hatua tano).

Kitendakazi hiki daima kitasogeza mhusika hatua tano mbele. Kwa kweli, hiki si kitendakazi chenye manufaa zaidi duniani, lakini ni rahisi na kizuri kwa ajili yetu kuanzia navyo.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/walk-grid.webp"
  alt="Mhusika kwenye gridi ya labirenti, tayari kutembea hatua tano mbele"
  width="500"
  height="314"
/>

Kwa hiyo, kama ningekuomba uandike msimbo wa kusogeza mhusika mbele hatua tano, ungeweza kuandika `move` (sogea) mara tano, au ungeweza kutumia kitanzi cha `repeat`. Katika mfano huu, ili tu kuweka mambo rahisi, tutatumia njia ya kuandika `move` mara tano mfululizo.

```javascript
move()
move()
move()
move()
move()
```

Kwa hiyo, ndiyo tunayotaka kuwa ndani ya kitendakazi chetu.

Sasa, ongeza mstari chini ya hapo unaomwambia Jiki kutumia kitendakazi hiki. Umeona hili mara nyingi.

Na kisha kazi yetu itakuwa kufunga mistari hii mitano ya kwanza yote ndani ya kitendakazi ili Jiki anapotumia `walk5`, iwe ni mistari hiyo mitano ya kwanza ya msimbo inayoendeshwa.

Ili kugeuza mistari hii mitano kuwa kitendakazi, yaani `move` hizi tano kuwa kitendakazi, tunahitaji kutumia keyword mpya, ambayo ni keyword ya `function`.

Tunapotumia keyword ya `function`, tunapaswa kufanya mambo mawili. Kwanza, kutaja jina la kitendakazi. Katika kesi hii, ni `walk5`. Na pili, kutumia mabano yaliyopinda kufunga msimbo unaosema, "Hivi ndivyo unapaswa kufanya ndani ya kitendakazi." Kwa hiyo tunaweza kuongeza hiyo kwenye msimbo wetu, na sasa tunamwambia Jiki aunde kitendakazi kiitwacho `walk5`, na kisha `walk5` inapotumika, aandae kuendesha mistari hii mitano ya msimbo.

```javascript
function walk5() {
  move()
  move()
  move()
  move()
  move()
}
```

Jiki anapoona keyword hiyo ya `function`, ataenda kuunda kitendakazi kipya, kuweka maagizo hayo kwenye ubao ndani yake, na kisha kuweka lebo kwenye mashine kwa ajili ya `walk5`. Kisha ataweka kitendakazi hicho kwenye rafu pamoja na vingine vyote vilivyopo.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/jiki-machine-whiteboard.webp"
  alt="Jiki amesimama kando ya mashine mpya iliyo na ubao ndani yake kwa ajili ya kuandika maagizo ya kitendakazi"
  width="500"
  height="396"
/>

Sasa, hakuna lolote la pekee kuhusu kitendakazi hiki ulichounda ukilinganisha na vile vilivyojengwa ndani (_built-in_ kwa Kiingereza). Vyote viko kando ya kimoja na kingine kwenye rafu zake.

Na unapotumia kitendakazi, unapoandika `walk5()`, Jiki ataenda tu kuchukua mashine kutoka kwenye rafu na kuitumia sawa sawa na alivyokuwa akifanya na kitendakazi kingine chochote. Unaweza kufikiria kwamba kila mashine ina Jiki mdogo anayeishi ndani yake. Jiki mdogo huvaa kofia ya kuvutia kila wakati. Na Jiki huyo mdogo anafanya kazi kwa njia sawa sawa na Jiki wa kawaida aliye nje, akifuata maagizo kwa njia ile ile.

Jambo moja muhimu la kuelewa hapa ni kwamba Jiki anapounda kitendakazi, haendeshi msimbo huo kwa kweli. Anaandika tu msimbo huo ili autumie baadaye.

Mhusika aliye kwenye labirenti hasogei wakati huu unapoandika keyword ya `function`.

Jiki ameunda mashine na kuiweka kwenye rafu. Hadi unapomwambia kutumia mashine kwa kuandika `walk5()`, ndipo hilo linatokea kwa kweli.
