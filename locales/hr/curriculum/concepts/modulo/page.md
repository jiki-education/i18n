---
title: "Korištenje operatora `%` za ostatak pri dijeljenju"
description: "Korištenje operatora `%` za dobivanje onoga što ostane nakon dijeljenja, često se koristi za provjeru je li broj paran ili neparan."
en_md5: 4955abecb626b8eff02ee7484e2065dd
---

Do sada smo za računanje koristili zbrajanje, oduzimanje, množenje i dijeljenje. Sada ćemo uvesti još jedan: operator ostatka (_remainder_ na engleskom).

Operator ostatka ti, logično, daje ostatak kad podijeliš dva broja, a pišemo ga znakom postotka. Pa ako napišemo:

```javascript
10 % 4 // 2
```

kažemo, odnosno pitamo: „Koliko ostane kad 10 podijelimo s 4?" A odgovor je dva. Zamisli da imaš 10 bombona ili oraščića i želiš ih jednako podijeliti na četiri osobe. Svaka osoba dobije dva, a na kraju ostanu dva. I taj dio koji ostane, to je ostatak. To ti daje znak postotka.

<img
  class="concept-image"
  src="/static/images/concept-assets/modulo/sharing-candies.webp"
  alt="Red od deset bombona koji se jednako dijeli na četiri osobe, a dva ostanu kao ostatak"
  width="500"
  height="22"
/>

Jedan od razloga zašto ovo dosta redovito koristimo u kôdu je taj što možemo saznati dijeli li se nešto bez ostatka, a najčešći obrazac koji ćeš u vezi s tim vidjeti je provjera je li broj paran ili neparan. Parni brojevi se, kao što znaš, svi dijele s dva bez ostatka. Neparnima pri dijeljenju s dva uvijek ostane jedan.

Ako uzmeš četiri, šest ili osam i podijeliš ih s dva, ne ostane ništa, dok pet, sedam i devet pri dijeljenju s dva na kraju uvijek imaju jedan viška. Zato pisanjem `if something % 2 === 0` pitamo: „Je li to nešto paran broj?" To može biti korisno za mnoštvo stvari. Zamisli da stvaraš pruge različitih boja ili da red ljudi dijeliš na pola, šaljući svaku osobu jednim od dva puta dok ti dolazi u susret.

Jedna napomena: možda ćeš čuti da ljudi taj pojam ostatka zovu modulo operator. Modulo i ostatak u osnovi su isti. Postoje neke male razlike koje vjerojatno nikad nećeš trebati znati, pa ćemo ga za sada smatrati operatorom ostatka, jer je tako jednostavnije.
