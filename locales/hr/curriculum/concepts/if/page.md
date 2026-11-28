---
title: "Razumijevanje naredbi `if`"
description: "Kako ključnom riječi `if` izvršiti blok naredbi samo kad je neki uvjet točan, kao izbacivač koji pušta ljude unutra."
en_md5: 81c99eea67b02e082ca6c9d7988a3914
---

Postoji ključna riječ koja nam pomaže reći Jikiju da nešto radi samo u određenim situacijama. Možda pišeš kôd koji čuva ulaz u bar, možda si izbacivač, i Jiki bi trebao otvoriti vrata samo ako je netko primjereno odjeven. Ili možda pišeš kôd u kojem si ti zadužen za mahanje kariranom zastavom na kraju utrke, ali Jiki mora znati da to smije učiniti samo u posljednjem krugu. U takvim situacijama koristimo ključnu riječ `if`.

<img
  class="concept-image"
  src="/static/images/concept-assets/if/bar-door-scenario.webp"
  alt="Jiki kao izbacivač koji odlučuje hoće li pustiti ljude u noćni klub"
  width="292"
  height="400"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/if/waving-flag.webp"
  alt="Jiki spreman mahati kariranom zastavom na kraju utrke"
  width="266"
  height="400"
/>

Ključnu riječ `if` koristimo vrlo slično kao `repeat`. Neke informacije stavljamo u obične zagrade. U ovom slučaju ta informacija je uvjet (_condition_ na engleskom) koji provjeravamo. A zatim u vitičaste zagrade stavljamo blok naredbi koji izvršavamo samo ako je taj uvjet točan.

```javascript
if (condition) {
}
```

Pa kako ti uvjeti izgledaju? Obično su to neke vrste usporedbe (_comparison_ na engleskom). Usporedimo dva broja ili dva stringa i provjerimo je li rezultat točan ili netočan.

Zato o njima razmišljaj kao o iskazima (_statement_ na engleskom) koje možeš izgovoriti naglas. Tri je manje od pet. To je točno. Sedam je manje od dva. To je netočno.

Te usporedbe zapisujemo simbolima. Vjerojatno ih već poznaješ iz matematike. Imamo manje od, veće od, manje ili jednako, veće ili jednako, a imamo i provjeru jesu li dvije stvari iste, jesu li jednake. Ta je malo drugačija od onoga na što si vjerojatno navikao, jer za provjeru jesu li dvije stvari iste ili različite koristimo tri znaka jednakosti u nizu.

<img
  class="concept-image"
  src="/static/images/concept-assets/if/comparisons-symbols.webp"
  alt="Tablica relacijskih operatora: manje od, veće od, manje ili jednako, veće ili jednako, jednako i nije jednako, s primjerima"
  width="449"
  height="400"
/>

To nam pomaže da se ne zbunimo kad postavljamo ili ažuriramo varijable, gdje jedan znak jednakosti znači stavi ovo u kutiju. Samo zapamti: za usporedbu tri znaka jednakosti.

Možeš uspoređivati i stringove. Dakle, `"hello"` je jednako `"hello"`. To je točno. Ta dva stringa su ista. Ali pazi, jer Jiki uspoređuje svaki pojedini znak (_character_ na engleskom) u oba stringa, na oba papirića. Dakle, `"Hello"` s velikim H nije jednako `"hello"` s malim h. To su različiti stringovi. Njihova usporedba bila bi netočna, jer su veliko H i malo h različiti znakovi.

I, usput, točno i netočno zovu se Boolean (_logička vrijednost_), a to je još jedna riječ koja zvuči tehnički. Ali stvarno je jednostavna. To je samo formalni način da se kaže da je nešto ili točno ili netočno. Ako negdje naiđeš na riječ Boolean, ona jednostavno znači točno ili netočno. Pogledajmo to na djelu. Zamisli da gradimo tog robotskog izbacivača za klub i kažemo da izbacivač smije otvoriti vrata samo ako osoba ima 21 godinu ili više. Imamo funkciju `askAge` (pitaj za dob) kojom možemo doznati koliko osoba ima godina, a rezultat ćemo spremiti u varijablu `age` (dob). Zatim možemo reći: ako je taj `age` veći od 20, otvorit ćemo vrata. Ako `askAge` vrati `30`, otvaramo ih, a ako vrati `12`, ne otvaramo.

```javascript
let age = askAge()
if (age >= 21) {
  openDoor()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/if/bouncer-open-close.webp"
  alt="Jiki otvara vrata nekome tko je dovoljno star, a odbija pustiti nekoga tko je premlad"
  width="410"
  height="400"
/>
