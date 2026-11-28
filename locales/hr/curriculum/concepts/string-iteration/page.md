---
title: "Prolaženje kroz stringove s `for ... of`"
description: "Kako pomoću petlje `for of` proći kroz svako slovo u stringu i sa svakim od njih nešto napraviti."
en_md5: 09f399cc3f52b89380d3ed23fc6be513
---

Pojedino slovo stringa možeš dohvatiti pomoću uglatih zagrada. Sada ćemo pogledati kako petljom proći kroz string i izvući svako slovo jedno po jedno.

A za to nam treba nova vrsta petlje. Do sada smo koristili repeat-petlju, a sada ćemo upotrijebiti nešto što se zove petlja `for of` (petlja koja redom prolazi kroz svaki element zbirke). To su dvije nove ključne riječi, `for` i `of`.

Ključna riječ `for` pojavljivat će se na dosta mjesta kako budemo napredovali. Može stajati sama, a može i u paru s `in` ili `of`. Za sada ćemo se usredotočiti na ovu posljednju, `of`.

Pogledajmo sada malo kôda.

Počet ćemo tako da stvorimo varijablu `name` (ime) koja sadrži string `"Jeremy"` (ime Jeremy). Ovdje nema ničega novog.

Zatim imamo redak s petljom, a u njemu se događa puno toga, pa prođimo kroz njega polako.

```javascript
let name = "Jeremy"
for (let letter of name) {
  // ...
}
```

Prvo, tu je ključna riječ `for`. Ona Jikiju govori da želimo nešto ponavljati. Zato pogleda naprijed, vidi `of` i zna da želimo petlju „for of".

To znači da umjesto repeat-petlje, u kojoj kažemo „prođimo 10 puta", ovdje kažemo „prođimo kroz sva slova u stringu". To je značenje izraza „for of".

Zatim imamo ovaj dio s `let letter` (deklaracija varijable `letter`). To je potpuno isto kao i `let name` iznad. Samo stvaramo varijablu koja se zove `letter`.

Razlika je u tome što ovdje ne kažemo izričito što ide u nju, nego govorimo Jikiju da u nju stavi svako slovo iz stringa, jedno po jedno.

Dakle Jiki vidi `for`, provjeri ima li `of` i onda kreće. Pogleda prvo slovo u stringu, u ovom slučaju `"J"`, i stavi ga u novu kutiju koja se zove `letter`. Usput, mogli bismo je nazvati bilo kako. Ne mora biti `letter`. Ovdje smo jednostavno odlučili da će se zvati `letter`.

Zatim izvrši kôd unutar vitičastih zagrada, a tu vrijedi sve što vrijedi i bilo gdje drugdje u kôdu. Jedina je razlika u tome što će se ovaj blok naredbi izvršiti jednom za svako slovo u stringu i imat će tu varijablu na raspolaganju.

Svaki put kada Jiki stigne do zatvarajuće vitičaste zagrade, baci kutiju `letter` i stvori novu, s idućim slovom u njoj. Tako prvi put baci `"J"` i u kutiju umjesto njega stavi `"e"`. Zatim isto napravi za `"r"`, pa za `"e"`, pa za `"m"`, pa za `"y"`. Šest slova, šest prolazaka kroz petlju. Treba malo vremena da se navikneš na sintaksu, ali to baš i nije težak pojam.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-iteration/jiki-letter-box-loop.webp"
  alt="Jiki baca staru kutiju sa slovom i ubacuje iduće slovo u novu kutiju s naljepnicom letter, i to ponavlja za svako slovo u stringu"
  width="500"
  height="168"
/>
