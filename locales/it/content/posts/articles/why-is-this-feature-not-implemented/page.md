---
title: "Perché questa funzionalità non è implementata?"
excerpt: "Scopri perché alcune funzionalità del linguaggio sono escluse da Jiki e come questo ti aiuti a imparare in modo più efficace."
tags: ["exercises"]
seo:
  description: "Capire perché Jiki esclude alcune funzionalità di JavaScript e Python per aiutare i principianti a imparare"
  keywords: ["jiki", "javascript", "python", "funzionalità escluse", "arma a doppio taglio", "apprendimento"]
en_md5: 54efd50d3331fa1e315aed1728a6f859
---

Hai provato a eseguire il tuo codice e hai ricevuto un messaggio che dice che qualcosa non è disponibile in questa versione del linguaggio? Continua a leggere per capire cosa succede!

Se invece hai ricevuto un messaggio che dice «Questa funzionalità non è ancora disponibile per te», è una situazione diversa: leggi **[Quando si sbloccherà questa funzionalità?](/articles/when-will-this-feature-unlock)**.

## Introduzione

Hai usato una parola chiave o un concetto che la nostra versione del linguaggio non supporta. Non preoccuparti: non è un bug!

Le versioni di JavaScript e Python che usi in Jiki sono state **progettate appositamente da noi** per aiutarti a imparare. Abbiamo rimosso con attenzione alcune funzionalità per evitare che tu ti imbatta accidentalmente in parti complesse o confuse del linguaggio prima di essere pronto ad affrontarle.

## Perché escludere alcune funzionalità?

I linguaggi di programmazione sono progettati per **professionisti**. Contengono funzionalità avanzate che aiutano gli sviluppatori esperti a lavorare più velocemente, oltre a un bagaglio storico — funzionalità che probabilmente avrebbero dovuto essere rimosse anni fa ma rimangono per mantenere in funzione i vecchi sistemi.

Quando stai imparando, queste funzionalità creano confusione. Rimuovendole, Jiki ti permette di concentrarti su ciò che conta: **imparare a pensare come un programmatore**.

### Armi a doppio taglio

Alcune funzionalità le chiamiamo **«armi a doppio taglio»** — cose con cui puoi spararti accidentalmente nei piedi. Ecco quali sono:

- **Problematiche sul serio** e da evitare anche per i professionisti
- **Casi limite che creano confusione** e distraggono dai concetti fondamentali
- **Bagaglio storico** che esiste solo per mantenere la retrocompatibilità

Queste sono escluse in modo permanente da Jiki perché non vale la confusione che causano.

### Funzionalità avanzate

Altre funzionalità sono escluse perché sono **troppo avanzate** per il punto in cui ti trovi nel tuo percorso di apprendimento. Non sono funzionalità cattive: semplicemente non sono utili quando stai imparando i fondamenti.

Man mano che avanzi in Jiki, alcune di queste funzionalità si sbloccheranno. Ma per ora, concentrati sul padroneggiare le basi.

## I dettagli

Non hai bisogno di leggere questa sezione a meno che tu non sia interessato a cosa succede sotto il cofano e alle decisioni che abbiamo preso.

### JavaScript

| Funzionalità                                               | Perché è esclusa                                                                                                   |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `var`                                                      | Usa `let` o `const` invece. `var` ha regole di scope che creano confusione e causano bug anche per sviluppatori esperti. |
| `with`                                                     | Deprecato e confusionario. Crea codice ambiguo difficile da comprendere.                                            |
| `debugger`                                                 | Strumento di sviluppo, non necessario per l'apprendimento.                                                          |
| `void`                                                     | Raramente utile e confusionario per i principianti.                                                                 |
| `yield`                                                    | Funzionalità avanzata per i generatori. Imparerai a conoscere i generatori più avanti nel tuo percorso.             |
| `delete`                                                   | Può causare comportamenti confusionari con gli array e gli oggetti.                                                 |
| `import` / `export`                                        | Funzionalità del sistema di moduli. Jiki gestisce i moduli in modo diverso per mantenere le cose semplici.          |
| Operatori bit a bit (`&`, `\|`, `^`, `~`, `<<`, `>>`, `>>>`) | Molto raramente necessari e fonte di confusione quando stai imparando. Servono per la manipolazione di bit a basso livello. |

### Python

| Funzionalità | Perché è esclusa                                                                                                     |
| ------------ | -------------------------------------------------------------------------------------------------------------------- |
| `global`     | Modificare variabili globali dall'interno delle funzioni porta a codice confuso. Invece, impara a passare i valori come parametri. |
| `nonlocal`   | Funzionalità avanzata di scope per funzioni annidate. Non necessaria quando si imparano i fondamenti.                |
| `assert`     | Strumento di debug che può essere disabilitato in produzione. Impara invece a gestire gli errori in modo appropriato. |

## E se ho bisogno di una funzionalità?

Ogni esercizio in Jiki è stato progettato per essere risolto con le funzionalità che ti sono state insegnate fino a quel punto. Se ti imbatti in una limitazione, di solito c'è un modo migliore per risolvere il tuo problema usando le funzionalità disponibili. Fa parte dell'imparare: capire come lavorare entro dei vincoli.

Se pensi davvero che una funzionalità dovrebbe essere disponibile al tuo livello, faccelo sapere! Stiamo sempre perfezionando cosa includere in base al feedback.
