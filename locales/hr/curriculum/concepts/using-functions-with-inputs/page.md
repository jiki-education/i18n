---
title: "Ulazi u funkciju"
description: "Stavljanje vrijednosti u proreze za ulaz funkcije mijenja ono što funkcija radi pri svakom pokretanju."
en_md5: 0bd82377f2407de5fe030511752d5503
---

Jedna od moćnijih stvari kod strojeva, kod funkcija, jest to što mnogi od njih dopuštaju da u njih staviš neku informaciju, a ona mijenja ono što rade kad ih pokreneš.

Do sada smo vidjeli strojeve koji pomalo nalikuju kutijama, poput onog `move` (pomakni se).

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/move-machine.webp"
  alt="Stroj move, obična kutija bez proreza za ulaz"
  width="322"
  height="400"
/>

Ali neki strojevi imaju proreze, poput ovog stroja `walk` (hodi). Stroj `walk` je baš kao stroj `move`. Pomiče lik (_character_ na engleskom) naprijed, osim što Jiki može pomoću proreza odrediti koliko koraka lik treba preći naprijed. Umjesto da tri puta zaredom koristiš funkciju `move`, `move`, `move`, sada možeš jednostavno upotrijebiti funkciju `walk` i reći Jikiju da u stroj stavi broj tri.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/walk-machine-slot.webp"
  alt="Stroj walk, s prorezom za ulaz na vrhu za broj koraka"
  width="481"
  height="400"
/>

Da bismo to napravili u kôdu, i dalje pišemo naziv funkcije, u ovom slučaju `walk`, i i dalje otvaramo zagradu. Ali prije nego što je zatvorimo, napišemo što želimo staviti na ulaz (_input_ na engleskom). U ovom slučaju želimo da na ulazu bude broj tri, odnosno da `walk` prošeće tri koraka naprijed:

```javascript
walk(3)
```

Kad Jiki to vidi, uzet će broj tri. O tom broju možeš razmišljati kao o malom novčiću. Jiki će ga staviti u prorez stroja, a zatim okrenuti ručicu da ga uključi.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/jiki-coin-into-slot.webp"
  alt="Jiki ubacuje broj 3 poput novčića u prorez stroja walk, a zatim okreće ručicu"
  width="421"
  height="400"
/>

Za funkcije koje crtaju pravokutnike i krugove trebaš Jikiju reći da ubaci više različitih brojeva: koliko od lijevog ruba, koliko od gornjeg ruba, kolika je širina pravokutnika, kolika visina.

U Jikijevu svijetu to su jednostavno različiti prorezi, po jedan za svaki od tih brojeva.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/two-machines-inputs.webp"
  alt="Stroj za pravokutnike s prorezima za left, top, width i height te stroj za krugove s prorezima za cx, cy i radius"
  width="396"
  height="400"
/>

U kôdu jednostavno napišemo svaki broj i između njih stavimo zarez. Naziv funkcije, zagrada, broj za svaki ulaz, sve odvojeno zarezima, i na kraju zatvorimo zagrade:

```javascript
rectangle(10, 20, 30, 40)
```

Ako pokušaš upotrijebiti funkciju s pogrešnim brojem ulaza, dobit ćeš pogrešku. Na primjer, ako pokušaš staviti jedan ulaz u stroj koji nema prorez, Jiki će ti reći da to ne možeš. A ako pokušaš upotrijebiti stroj koji ima prorez za ulaz, ali ne kažeš Jikiju što da stavi u njega, i on će se zaustaviti i požaliti se. Isprobaj ako se osjećaš malo buntovno pa vidi što se dogodi. Radit ćeš mnogo takvih pogrešaka kako stvari budu postajale složenije. Pokušaj se zbog toga ne uzrujavati. Svi učimo iz pogrešaka. To je doslovno najbrži način da naš mozak nešto stvarno usvoji. I takve pogreške rade svi. Svi počinjemo od nule, zato se ne uzrujavaj.

Još jedna stvar koju vrijedi spomenuti: ponekad ćeš u vježbama vidjeti retke koji počinju s dvije kose crte, `//`. Zovu se komentari. To su privatne bilješke samo za tebe koje će Jiki potpuno ignorirati. Ako Jiki vidi redak koji počinje tim dvjema kosim crtama, jednostavno će ga preskočiti i prijeći na sljedeći redak. Pomoću tih komentara možeš pisati vlastite bilješke. Stvarno su korisni kao podsjetnik na to kako stvari funkcioniraju. Često su komentari već napisani za tebe, pa ti na početku vježbe mogu sugerirati gdje treba napisati kôd ili kako nešto riješiti. Ali slobodno dodaj i svoje komentare.

Na dnu uputa za vježbu vidjet ćeš informacije o funkcijama koje možeš koristiti i to točno koji su ulazi koje trebaš staviti.
