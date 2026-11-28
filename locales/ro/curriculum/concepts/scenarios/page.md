---
title: "Scenarii"
description: "Condiții de pornire diferite față de care un exercițiu rulează aceeași bucată de cod, așa că trebuie să o faci să funcționeze pentru toate."
en_md5: d5c4ee54eed8083e13f18bb7d256b86d
---

Fiecare exercițiu vine cu scenarii diferite, situații diferite pe care codul tău trebuie să le gestioneze.

Le vei vedea ca niște butoane mici chiar deasupra ieșirii fiecărui exercițiu. Fiecare buton corespunde unui scenariu diferit. Treaba ta este să scrii cod care funcționează pentru toate, nu doar pentru primul. Hai să o spun încă o dată. Îți scrii codul o singură dată, dar același cod rulează pentru fiecare scenariu. Diferența este că fiecare scenariu poate fi pregătit puțin altfel, sau funcțiile care ți se dau pot returna lucruri puțin diferite, în funcție de scenariul în care te afli.

<img
  class="concept-image"
  src="/static/images/concept-assets/scenarios/scenario-buttons.webp"
  alt="Șirul de butoane de scenariu chiar deasupra ieșirii unui exercițiu, încercuite ca să fie evidențiate"
  width="500"
  height="318"
/>

Hai să luăm exemplul unui joc de golf. S-ar putea să trebuiască să variezi cât de departe se rostogolește mingea în funcție de valoarea returnată (engl. _return value_) a unei funcții numite `getShotLength` (lungimea loviturii), care îți spune cât de departe a lovit jucătorul de golf mingea. Imaginează-ți că jucătorul a trebuit să gliseze cu degetul pe telefon ca să spună cât de departe a lovit-o.

<img
  class="concept-image"
  src="/static/images/concept-assets/scenarios/golf-game.webp"
  alt="O scenă dintr-un joc de golf, cu un jucător, o minge și un steag în gaura din dreapta"
  width="412"
  height="400"
/>

Rezultatul care ajunge la tine trece prin această funcție. Așa că într-un scenariu poți folosi funcția `getShotLength`, iar ea va returna `23`, o glisare mică. În altul, returnează `70`, o glisare lungă. În altul, returnează `45`. Codul tău trebuie să rostogolească mingea la distanța potrivită pentru fiecare scenariu, cu un singur program, un singur set de cod. Va trebui să folosești funcția `getShotLength` ca să vezi cât de departe a mers lovitura și apoi să rostogolești mingea până în acel punct.

```javascript
let distance = getShotLength()
```

Scenariile se asigură că codul tău chiar funcționează cum trebuie. E destul de ușor să scrii cod care merge într-o situație anume. E mult mai greu, și mult mai valoros, să scrii cod care merge în multe situații diferite. Când rezolvi exerciții, începe cu primul scenariu. Fă-l să meargă. Apoi treci la scenariul următor și fă-l să meargă și pe acela. Pe măsură ce codul tău se strică la un alt scenariu, gândește-te ce este diferit și cum trebuie să se adapteze codul.
