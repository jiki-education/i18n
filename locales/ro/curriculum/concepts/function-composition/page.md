---
title: "Folosirea mai multor funcții împreună"
description: "Împărțirea unei probleme în funcții mici, cu o singură responsabilitate, care se apelează între ele, astfel încât fiecare parte să rămână simplă și reutilizabilă."
en_md5: 7df3110b30c0f279d7f04d3b4e331a99
---

Până acum, când ai scris funcții, fiecare s-a descurcat de una singură și a conținut toată logica de care avea nevoie ca să funcționeze.

Acum hai să vedem cum să împărțim funcțiile, astfel încât să avem funcții mai mici care lucrează împreună, în loc de funcții mari în care se întâmplă o mulțime de lucruri.

Ca regulă generală în programare, vrei ca fiecare funcție să facă minimul posibil. Asta înseamnă ca o funcție să aibă o responsabilitate unică (engl. _single responsibility_). Fiecare funcție ar trebui să facă un singur lucru și să folosească alte funcții pentru diferitele sub-părți ale acestuia.

Hai să vedem un exemplu.

Imaginează-ți că avem o funcție al cărei rol este să returneze un string care descrie un nume.

O variantă simplă ar arăta așa. Avem o buclă de numărare, ceva ce ai mai scris deja, și apoi un șablon de string care pune rezultatul cap la cap.

```javascript
function describeName(name) {
  let length = 0
  for (const letter in name) {
    length += 1
  }
  return `This name is ${length} letters long`
}
```

Funcționează bine, dar face două lucruri. Face un lucru destul de generic, numărătoarea, și altul foarte specific, construiește acest string într-un anumit format.

Ar fi mult mai frumos să împărțim asta în două funcții: una responsabilă cu numărarea și una responsabilă cu descrierea unui nume în acest format anume.

```javascript
// Numără doar literele
function countLetters(str) {
  let count = 0
  for (const letter in str) {
    count += 1
  }
  return count
}

// Formatează frumos textul
function describeName(name) {
  const count = countLetters(name)
  return `The name has ${count} letters`
}
```

Și apoi putem refolosi acea funcție generică de numărare în formatarea acestui string, dar și în orice alt loc unde avem nevoie. Ori de câte ori trebuie să numărăm literele dintr-un string, funcția e complet separată de orice ține de afișare.

Poți citi ambele funcții separat și înțelegi imediat ce face fiecare.

Pe măsură ce funcțiile tale devin mai complexe și ai tot mai multe, această tehnică face diferența între cod curat și ușor de citit și haos total.

Mai e un lucru pe care merită să-l amintesc din nou: nimic din ce creezi în interiorul unei funcții nu poate fi accesat de alte funcții decât dacă îl returnezi în mod deliberat.

Deci dacă încerci să faci referire la variabila `count` (contor) din interiorul funcției `describeName` (descrie numele), nu poți, pentru că ea aparține celeilalte funcții.

<img
  class="concept-image"
  src="/static/images/concept-assets/function-composition/jiki-thinking.webp"
  alt="Jiki gândindu-se, cu un bec aprins deasupra capului, la felul în care variabilele rămân private la fiecare funcție"
  width="361"
  height="353"
/>

În JavaScript, putem crea variabile sus, deasupra tuturor, care sunt partajate între funcții, dar îți recomand insistent să nu faci asta decât dacă există un motiv foarte bun.

Cu cât păstrezi fiecare funcție independentă, iar cuvântul tehnic pentru asta este pură (engl. _pure_), adică funcții pure, cu atât codul tău va fi mai curat și vei crea și vei avea mai puține bug-uri.
