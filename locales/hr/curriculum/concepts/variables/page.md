---
title: "Stvaranje i korištenje varijabli"
description: "Kutije na Jikijevim policama u kojima se čuva vrijednost s naljepnicom, da bi se kasnije mogla izvaditi u kôdu."
en_md5: dd0834017a8d42c22cca25966c1fdd91
---

Varijable (_variables_ na engleskom) su ono što nam omogućuje pohranu informacija. Dok programiramo, često moramo pohraniti neki broj ili neki string da bismo ga kasnije upotrijebili, a varijable su način na koji to radimo. Zato se malo odmaknimo u Jikijevu skladištu i vidjet ćeš da on ima još jedan niz polica. Prvi niz polica, onaj na kojem su funkcije, već nam je poznat: oni mali strojevi kao što su `move` i `rectangle`. Ali na ovom drugom nizu polica, umjesto strojeva, vidiš mnoštvo kutija, i te kutije zovemo varijablama. Jikiju možeš reći da u te kutije pohrani bilo što, a kasnije ga možeš zamoliti da to opet izvadi. Svaka kutija ima naziv, baš kao što ga imaju i funkcije, a u svakoj je kutiji samo jedna stvar. Za sada ili broj ili string. Ali složenije stvari u njima pogledat ćemo kasnije u tečaju.

<img
  class="concept-image"
  src="/static/images/concept-assets/variables/two-shelves.webp"
  alt="Dva niza polica u Jikijevu skladištu: jedan s naljepnicom funkcije na kojem su strojevi, drugi s naljepnicom varijable na kojem su kutije"
  width="500"
  height="173"
/>

Pa kako Jikiju kažemo da napravi kutiju i stavi nešto u nju? Za to koristimo ključnu riječ `let` (neka). Ključna riječ `let` kaže Jikiju da treba napraviti novu kutiju. Možeš zamisliti kako raspakira kartonsku kutiju i sastavi je. Zatim pogleda što dolazi nakon riječi `let`: to je naljepnica koju stavi na kutiju, u ovom slučaju `name` (naziv). Zato vadi olovku i na naljepnicu napiše `name`. Onda pogleda što dolazi nakon znaka jednakosti (_equal sign_ na engleskom). U ovom slučaju to je moje ime, `"Jeremy"`, i budući da je `"Jeremy"` string, uzme papirić i na njega napiše `"Jeremy"`. To je samo string, baš kao boje s kojima smo dosad radili, i onda taj papirić stavi u kutiju.

```javascript
let name = "Jeremy"
```

<img
  class="concept-image"
  src="/static/images/concept-assets/variables/jeremy-paper.webp"
  alt="Jiki drži papirić na kojem je napisan string Jeremy i sprema ga staviti u kutiju"
  width="373"
  height="400"
/>

Dakle, rekli smo mu da napravi kutiju, stavi na nju naljepnicu i stavi nešto u nju, a on sad odnese kutiju i stavi je na policu. A u bilo kojem drugom trenutku u programu Jiki može uzeti tu kutiju s police i pogledati što je u njoj. Počni graditi taj mentalni model. Programiram već sto godina, a i dalje, kad pišem kôd, zamišljam da nešto stavljam u kutiju i da ću to kasnije izvaditi. Kad vidiš tu ključnu riječ `let`, doista pomisli: „Dobro, to znači da pravim novu kutiju."

Nekoliko riječi o nazivima varijabli, o naljepnicama na tim kutijama. O njima imamo nekoliko pravila. Prvo, nazivi varijabli ne smiju sadržavati razmake. Ako za naljepnicu kutije želiš upotrijebiti više riječi, te riječi spojimo jednu uz drugu i prvo slovo svake riječi pretvorimo u veliko slovo. To zovemo _camel case_ (devina grba). Zamisli grbe deve kako podižu prvo slovo svake nove riječi i pretvaraju ga u veliko slovo. Pa ako želiš naljepnicu koja znači moje ime, umjesto dviju riječi s razmakom napišemo to kao jednu riječ s velikim N: `myName`.

Također, svaki naziv varijable mora biti jedinstven. Ne možemo imati dvije kutije s istom naljepnicom, a ni varijable ne mogu imati isti naziv kao funkcije. Ako to zaboraviš, Jiki će se zbuniti i prikazat će ti poruku o pogrešci.

<img
  class="concept-image"
  src="/static/images/concept-assets/variables/duplicate-names-confused.webp"
  alt="Jiki zbunjeno gleda dvije kutije koje obje imaju naljepnicu name"
  width="485"
  height="400"
/>

Pogledajmo sada gdje bismo htjeli upotrijebiti varijablu. Recimo da crtamo sunce na nebu. Znamo da možemo upotrijebiti funkciju `circle` (krug) i dati joj četiri ulaza. Njezin `left` (lijevo), `top` (gore), `radius` (polumjer) i `color` (boja). No kad crtamo mnogo toga i svi ti brojevi budu razbacani po kôdu, teško ih je pratiti i čitati. Zato umjesto toga možemo stvoriti po jednu varijablu za `left`, `top`, `radius` i `color`, a zatim se kasnije pozivati na te varijable. Cilj nam je, dakle, moći upotrijebiti funkciju `circle` i navesti lijepe, čitljive nazive kutija, a kad Jiki vidi te nazive, znat će da kutije treba uzeti s polica i upotrijebiti ono što je u njima.

Stvorimo za to nekoliko varijabli. Počinjemo s lijevom pozicijom sunca. Ključnom riječi `let` kažemo Jikiju da stvori novu kutiju koja se zove `leftPosition` (lijeva pozicija). Primijeti camel case, veliko P. I kažemo Jikiju koji broj ide u kutiju. On to stavi na policu, a zatim isto napravi za `topPosition` (gornja pozicija), `radius` i `color`.

```javascript
let leftPosition = 10
let topPosition = 20
let radius = 5
let color = "yellow"

circle(leftPosition, topPosition, radius, color)
```

<img
  class="concept-image"
  src="/static/images/concept-assets/variables/name-on-shelf.webp"
  alt="Kutije s naljepnicama na policama s varijablama, u svakoj je po jedna vrijednost koju će Jiki kasnije uzeti"
  width="500"
  height="378"
/>

U bilo kojem trenutku u kôdu možemo se pozvati na te varijable, a Jiki će izvaditi vrijednosti (_values_ na engleskom) i staviti ih u stroj. Još je jedna sjajna stvar kod varijabli to što, kad god želimo nacrtati nešto na istoj poziciji kao sunce, možemo ponovno upotrijebiti iste varijable `leftPosition` i `topPosition`. Uzmimo drugi primjer. Zamisli da gradiš zid koji ima 30 cigli i da želiš da sve cigle budu iste širine i iste visine. Mnogo je bolje na početku kôda stvoriti varijable za širinu i visinu i onda se na njih pozivati kroz ostatak kôda. Jer ako poslije poželiš promijeniti širinu ili visinu, dovoljno je promijeniti je na jednom mjestu i sve ostalo će se ažurirati.
