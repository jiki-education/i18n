---
title: "Essensvorbereitung"
description: "Finde heraus, welche Zutaten du für dein Rezept kaufen musst."
en_md5: 2326187734cf4b307264fef2b0dea2fd
---

Du bist jemand, der gerne jeden Tag mal eben zum Laden geht, um die Zutaten fürs Abendessen zu besorgen. Es ist eine schöne Ausrede, um dir die Beine zu vertreten und ein bisschen mit dem Ladenbesitzer zu plaudern.

Jeden Tag suchst du dir ein Rezept aus, schaust nach, was im Kühlschrank ist, und notierst, was du kaufen musst.

Jetzt hast du beschlossen, dir das Leben ein bisschen leichter zu machen, indem du ein Programm schreibst, das die Arbeit für dich erledigt! Es vergleicht, was auf deiner Liste steht, mit dem, was im Kühlschrank ist, und gibt die Differenz aus.

Deine Aufgabe ist es, eine Funktion namens `shoppingList(fridgeContents, recipeItems)` (die Einkaufsliste) zu schreiben. Sie bekommt zwei Eingabewerte: den Inhalt deines Kühlschranks als Array von Strings und die Zutaten aus dem Rezept, ebenfalls als Array von Strings. Sie soll die Dinge zurückgeben, die du kaufen musst, als Array von Strings.

Zum Beispiel:

```javascript
let fridgeContents = ["tomatoes", "leaves", "milk"]
let recipeItems = ["beef", "tomatoes", "peppers"]

shoppingList(fridgeContents, recipeItems)
// ["beef", "peppers"]
```

### Die push-Methode

Um die Übung zu lösen, musst du dein Array mit der Methode `.push(element)` aufbauen. Du darfst in deinem Code nur ein neues Array anlegen. Schau dir das vorherige Video noch einmal an, wenn du nicht sicher bist, was zu tun ist.

Vielleicht möchtest du auch die Methode `includes` verwenden (unten findest du eine kurze Erinnerung).

Viel Spaß!
