---
title: "Acronimo"
description: "Trasforma una frase in un acronimo, ignorando la punteggiatura."
en_md5: e8b8820be81476a13cb6a66781f95cc9
---

Hai già risolto semplici acronimi di tre lettere, come trasformare `Portable Network Graphics` in `PNG`.

Tuttavia, in questo esercizio facciamo un passo in più: ci occupiamo di tutti gli acronimi, non solo di quelli di tre lettere. Ed è molto più difficile...

Il tuo compito è scrivere una funzione chiamata `acronym(phrase)` che prende una frase e restituisce il suo acronimo.

## Le regole

Una nuova parola inizia dopo uno **spazio** o un **trattino** (`-`). Tutti gli altri caratteri (virgole, apostrofi, trattini bassi, punti esclamativi, ecc.) **non** sono separatori e non fanno mai parte dell'acronimo. Contano solo le lettere.

| Frase                     | Acronimo |
| ------------------------- | -------- |
| As Soon As Possible       | ASAP     |
| Liquid-crystal display    | LCD      |
| Thank George It's Friday! | TGIF     |

## Attenzione

Non ti abbiamo dato nessuno dei metodi JavaScript più avanzati che vedrai più avanti nel corso (niente per trasformare magicamente una lettera in maiuscolo o per dirti se un carattere è una lettera in primo luogo). Dovrai costruire da solo tutte queste funzioni ausiliarie prima di poter mettere insieme il tutto.

Questo esercizio è più complicato di quanto sembri. Buon divertimento!
