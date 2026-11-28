---
title: "Używanie wielu funkcji razem"
description: "Dzielenie problemu na małe funkcje o pojedynczej odpowiedzialności, które wywołują się nawzajem, dzięki czemu każdy element pozostaje prosty i wielokrotnego użytku."
en_md5: 7df3110b30c0f279d7f04d3b4e331a99
---

Do tej pory, kiedy piszesz funkcje, każda z nich mniej więcej stoi na własnych nogach i zawiera całą logikę, której potrzebuje do działania.

Teraz zobaczmy, jak rozbijać funkcje na mniejsze, które współpracują ze sobą, zamiast tworzyć wielkie funkcje, w których dużo się dzieje.

Ogólna zasada w programowaniu mówi, żeby każda funkcja robiła jak najmniej. Mówimy wtedy, że funkcja ma pojedynczą odpowiedzialność (ang. _single responsibility_). Każda funkcja powinna robić tylko jedną rzecz, a jej pozostałe części składowe powinny być obsługiwane przez inne funkcje.

Zobaczmy więc przykład.

Wyobraź sobie, że mamy funkcję, której zadaniem jest zwracać string opisujący imię.

Prosta wersja wyglądałaby tak. Mamy pętlę zliczającą, którą już znasz, a potem szablon, który składa wynik w całość.

```javascript
function describeName(name) {
  let length = 0
  for (const letter in name) {
    length += 1
  }
  return `This name is ${length} letters long`
}
```

To działa dobrze, ale funkcja robi dwie rzeczy naraz. Jedna jest dość ogólna: liczenie. Druga bardzo konkretna: budowanie stringa w określonym formacie.

Znacznie ładniej byłoby rozbić to na dwie funkcje: jedną odpowiedzialną za liczenie, a drugą za opisywanie imienia w tym konkretnym formacie.

```javascript
// Tylko liczy litery
function countLetters(str) {
  let count = 0
  for (const letter in str) {
    count += 1
  }
  return count
}

// Tylko ładnie formatuje tekst
function describeName(name) {
  const count = countLetters(name)
  return `The name has ${count} letters`
}
```

Dzięki temu możemy użyć tej ogólnej funkcji liczącej ponownie: zarówno przy formatowaniu tekstu, jak i w każdym innym miejscu, gdzie będzie potrzebna. Za każdym razem, gdy trzeba policzyć litery w stringu, funkcja jest całkowicie oderwana od wszystkiego, co związane z wypisywaniem.

Obie funkcje można czytać osobno i od razu rozumieć, co każda z nich robi.

Im bardziej rozbudowane są Twoje funkcje i im więcej ich masz, tym większa różnica: ta technika decyduje o tym, czy kod będzie schludny i czytelny, czy zapanuje w nim totalny chaos i bałagan.

Jeszcze jedna rzecz warta przypomnienia: nic, co utworzysz wewnątrz funkcji, nie jest dostępne dla innych funkcji, chyba że celowo je zwrócisz.

Jeśli więc spróbujesz odwołać się do zmiennej `count` (licznik) z wnętrza funkcji `describeName` (opisz imię), nie uda Ci się, bo należy ona do tej drugiej funkcji.

<img
  class="concept-image"
  src="/static/images/concept-assets/function-composition/jiki-thinking.webp"
  alt="Jiki myśli o tym, jak zmienne pozostają prywatne dla każdej funkcji, a nad jego głową świeci żarówka"
  width="361"
  height="353"
/>

W języku JavaScript można tworzyć zmienne na samej górze, ponad wszystkim, współdzielone między funkcjami, ale naprawdę odradzam to robić, chyba że istnieje ku temu naprawdę dobry powód.

Im bardziej każda funkcja pozostaje niezależna, a fachowe określenie na taką funkcję to funkcja czysta (ang. _pure_), tym czystszy będzie Twój kod i tym mniej błędów się w nim pojawi.
