---
title: "Actualizarea dicționarelor"
description: "Folosirea `dict[key] = value` pentru a actualiza intrări existente sau a adăuga altele noi, plus metoda `has` pentru verificarea cheilor."
en_md5: 5dfff7e37d863711be783b2fbe0873a4
---

Știi cum să creezi un dicționar și cum să scoți valori din el. Dar ce se întâmplă dacă datele se schimbă? La un moment dat, o să fac un an mai mult. N-o să mai fiu `42`, o să fiu `43`.

Cum actualizăm dicționarul? Păi, folosim o metodă foarte asemănătoare cu cea prin care căutăm ceva. Știi că găsim o valoare folosind paranteze pătrate, ca să o scoatem afară. Ei bine, putem folosi paranteze pătrate urmate de un semn egal ca să actualizăm dicționarul. Jiki merge la cutia `person`, scoate pagina de caiet, caută cheia `"age"`, șterge `42` care era acolo și scrie `43` în locul lui, iar apoi pagina se întoarce în cutie. Aici se schimbă dicționarul însuși.

```javascript
person["age"] = 43
```

Jiki nu face un dicționar nou, ci modifică caietul care era deja în cutie.

Și dacă vrei să adaugi o informație care nu era acolo înainte? Păi, poți face exact același lucru.

Dacă specifici o cheie care nu există, Jiki pur și simplu adaugă o cheie nouă la sfârșit, cu valoarea respectivă.

Așa că, în cazul acesta, deschide caietul, caută `"country"`, vede că nu e acolo și adaugă o linie nouă la sfârșit: `"country"` în stânga, `"England"` în dreapta.

```javascript
person["country"] = "England"
```

Deci exact aceeași sintaxă ca la schimbarea unei valori. Jiki se ocupă de amândouă automat. Dacă cheia există, o actualizează. Dacă nu există, o adaugă. Nu trebuie să faci nimic special.

Și, la fel cum poți porni de la o matrice goală și poți împinge lucruri în ea, poți porni de la un dicționar gol și poți adăuga chei una câte una. Din nou, este un tipar foarte frecvent. O să-l vezi tot timpul.

Una dintre utilizările obișnuite ale dicționarelor este să ții numărătoarea unor lucruri. Poți pune ca chei lucrurile pe care vrei să le numeri, iar ca valori numărul lor. Imaginează-ți că te uiți la păsări și vrei să ții evidența câte păsări din fiecare fel ai văzut. De fiecare dată când vezi o pasăre, îi pui numărul la unu, iar apoi, de fiecare dată când o mai vezi, iei valoarea curentă și o mărești cu unu. Ca să funcționeze acest tipar, avem nevoie de o modalitate de a verifica dacă dicționarul are deja cheia respectivă, caz în care adăugăm unu la valoarea ei, iar dacă nu are cheia, trebuie să pornim de la unu.

Iar pentru asta avem o metodă pe dicționare: metoda `has` (are).

Specifici o cheie care te interesează, iar Jiki verifică dacă dicționarul are sau nu acea cheie și apoi returnează adevărat sau fals, după caz.

```javascript
person.has("age") // true
```

Punând totul cap la cap, tiparul de numărare arată așa:

```javascript
if (counts.has(letter)) {
  counts[letter] = counts[letter] + 1
} else {
  counts[letter] = 1
}
```
