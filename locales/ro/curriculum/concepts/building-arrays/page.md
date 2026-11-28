---
title: "Construirea matricelor"
description: "Să pornești de la o matrice goală și să folosești `push` ca să adaugi elemente pe rând, pe măsură ce parcurgi datele."
en_md5: c3358ca032f965cf058bb72df37ffbd4
---

Până acum ai lucrat cu matrice la care valoarea se stabilește la început și rămâne fixă. Dar dacă vrei să adaugi lucruri într-o matrice pe parcurs? Ei bine, pentru asta matricele au o metodă numită `push` (împinge).

`push` are o singură intrare: lucrul pe care vrei să-l atașezi la capătul matricei. Așa că aici vrem să împingem cuvântul `"Isaac"` la capătul unei matrice care conține deja `"DJ"` și `"Bethany"`.

Așa că, pentru asta, Jiki scoate matricea din cutie, atașează `"Isaac"` la capătul lanțului și apoi pune totul înapoi în cutie. Observă că, spre deosebire de stringuri, unde Jiki crea de fiecare dată un string nou, aici el chiar modifică matricea.

Un tipar pe care îl vei vedea des în programare este să pornești de la o matrice goală și să o construiești treptat. Imaginează-ți că avem o listă mare de nume și vrem să o parcurgem. De fiecare dată când găsim unul care e mentor, îl adăugăm la matricea noastră.

Tiparul acesta de bucle și adăugări este ceva ce vei folosi des.
