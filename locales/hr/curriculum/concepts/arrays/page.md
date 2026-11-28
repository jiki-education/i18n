---
title: "Polja"
description: "Uređeni lanac elemenata (stringova, brojeva, Boolean vrijednosti ili bilo čega drugog) spojenih u jednu vrijednost koju Jiki može prenositi."
en_md5: d26ccb9e04fbc77129f3199d63a95017
---

Do sada u kôdu koristiš brojeve, stringove i Boolean vrijednosti, otmjeni naziv za točno i netočno, a sve te različite stvari nazivamo tipovima podataka (_data types_ na engleskom). Sada dodajemo svoj prvi složeni tip podataka (_compound data type_ na engleskom).

To je tip podataka koji može sadržavati više stvari, a ne samo jednu, i taj se tip zove polje (_array_ na engleskom).

Kad čuješ riječ polje, pomisli na fizički lanac koji drži mnogo stvari zajedno.

Stvari koje drži mogu biti bilo što: stringovi, brojevi, Boolean vrijednosti, čak i druga polja, čak i stvari o kojima još nije bilo riječi, ali ne brini zbog toga za sada.

Sve u tom lancu ima svoj redoslijed, upravo onaj kojim su dijelovi spojeni u lanac.

Dakle, polje sadrži mnogo stvari, ali je i samo jedan čvrsti element, jedna čvrsta stvar, jedno polje s mnogo elemenata unutra.

Jiki može uzeti to polje, taj lanac, i staviti ga u kutiju, baš kao što može staviti string u kutiju ili broj u kutiju.

Može ga staviti u prorez stroja. Može ga izvući iz izlaznog otvora. To polje je jedna stvar, i Jiki s njim radi na točno isti način na koji radi sa stringovima, brojevima i svim ostalim što smo do sada vidjeli.

U kôdu i polje pomalo sliči na lanac. Na svakom kraju ima uglatu zagradu, a između njih mnogo stavki povezanih u lanac, odvojenih zarezima.

Pa na primjer, ako želimo napraviti polje s imenima nekih naših mentora, možemo sastaviti kutiju koja se zove `mentors` i staviti taj lanac u nju.

Napišemo `let mentors =`, točno isto kao i kod svake druge kutije, zatim otvorimo uglatu zagradu, redom elemente, imena odvojena zarezima, i na kraju zatvorimo uglatu zagradu. Kad Jiki to vidi, ode po četiri papirića, po jedan za svako ime, zatim uzme novi lanac i sve ih naniza na njega, a onda taj lanac stavi u kutiju `mentors`.

U polje možeš staviti bilo što: stringove, brojeve, Boolean vrijednosti, čak i mješavinu svega toga.

Sve su to različiti primjeri potpuno valjanih polja.

Možeš napraviti i prazno polje. To je samo lanac bez elemenata. I dalje je stvarna stvar. I dalje ima oba kraja. I dalje je lanac. Samo što nema nijedne stavke unutra. Ali to prazno polje i dalje možeš staviti u kutiju, izvaditi ga i upotrijebiti kasnije.

Dakle, polje možeš napraviti pomoću uglatih zagrada, ali kako ih zapravo koristimo? Kako provjeriti što je unutra i kako nešto izvaditi? Pa na točno isti način na koji smo vadili slova iz stringa. Možemo upotrijebiti uglate zagrade s brojem unutra.

Vratimo se našem popisu mentora. Ako želimo izvući prvi element, napišemo `mentors[0]`. Sjeti se da u JavaScriptu brojimo od nule.

Kroz polje možemo prolaziti i na točno isti način na koji smo prije prolazili kroz stringove, pomoću `for-of`.

Polja rade na točno isti način. Jedina je razlika što ovaj put ne vadimo slovo, nego ono što je bila stavka u polju. U ovom primjeru, ime mentora.

Pa tako prvi put kad nekome zahvalimo, zahvalimo `"DJ"`. Drugi put zahvalimo `"Becky"`, itd.

Na poljima možemo koristiti i svojstvo `length`, baš kao što smo ga upoznali kod stringova. Ako u kutiji `mentors` imamo polje s četiri stringa i napišemo `mentors.length`, vratit će četiri.

Na isti način na poljima možemo koristiti i `includes`. Možemo reći `mentors.includes("DJ")` i vratit će `true`. Ali ako kažemo `mentors.includes("Frank")`, vratit će `false`.

Sve radi točno isto kao kod stringova. Samo što ovaj put radimo s elementima polja, a ne sa slovima stringa.
