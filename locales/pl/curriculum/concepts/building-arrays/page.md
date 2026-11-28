---
title: "Budowanie tablic"
description: "Zaczynamy od pustej tablicy i dodajemy elementy pojedynczo za pomocą `push`, przechodząc w pętli przez dane."
en_md5: c3358ca032f965cf058bb72df37ffbd4
---

Do tej pory pracowaliśmy z tablicami, których wartość jest ustalana na początku i już się nie zmienia. A co, jeśli chcesz dodawać coś do tablicy z czasem? Do tego tablice mają metodę o nazwie `push` (wepchnąć).

Metoda `push` ma jedno wejście: to, co chcesz doczepić na koniec tablicy. W tym przypadku chcemy więc wepchnąć słowo `"Isaac"` na koniec tablicy, która zawiera już `"DJ"` i `"Bethany"`.

Aby to zrobić, Jiki wyjmuje tablicę z pudełka, doczepia `"Isaac"` na końcu łańcucha, a potem wkłada całość z powrotem do pudełka. Zwróć uwagę, że w przeciwieństwie do stringów, gdzie Jiki za każdym razem tworzył nowy string, tutaj naprawdę zmienia samą tablicę.

Jeden wzorzec, który w programowaniu zobaczysz bardzo często, polega na rozpoczęciu od pustej tablicy i budowaniu jej krok po kroku. Wyobraź sobie, że mamy dużą listę imion i chcemy ją przejść. Za każdym razem, gdy trafimy na mentora, dodajemy go do naszej tablicy.

Z tego wzorca, czyli łączenia pętli z dodawaniem, skorzystasz jeszcze wiele razy.
