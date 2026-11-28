---
title: "Funkcije koje vraćaju vrijednost"
description: "Uhvati vrijednost koja iskoči iz izlaznog otvora funkcije i iskoristi je u kôdu."
en_md5: 830f19fb6aaf184c1f32ade792b60a12
---

Do sada smo gledali funkcije koje nešto rade u svijetu. Tako funkcija `circle` (nacrtaj krug) crta krug. Funkcija `move` (premjesti lik) pomiče tvoj lik. Ali neke funkcije rade drugačije. Umjesto da rade nešto izvana, daju ti nešto natrag što možeš iskoristiti u kôdu. Kad funkcija Jikiju vrati nešto što on može iskoristiti u kôdu, kažemo da ta funkcija nešto vraća (_returning_ na engleskom). Vraća nešto natrag Jikiju. Možeš te strojeve zamisliti kao da imaju izlazni otvor. Već imamo proreze u koje umećemo stvari, ali možemo imati i jedan izlazni prorez, odnosno otvor iz kojeg nešto može iskočiti. Kad Jiki pritisne gumb na stroju, stroj zavrči i na kraju nešto iskoči iz tog otvora. To može biti broj. Može biti string. To je nešto što Jiki može uhvatiti i iskoristiti.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/machine-with-return-chute.webp"
  alt="Stroj s izlaznim otvorom sa strane, spreman poslati vrijednost natrag Jikiju"
  width="500"
  height="317"
/>

Većina funkcija, vjerojatno njih 95 %, vraća nešto. Možda ti izračunaju nešto i vrate vrijednost, ili spoje nekoliko stringova i vrate dobiveni string. Ili ti možda vrate trenutno vrijeme svaki put kad pokreneš taj stroj. Pogledajmo ovaj posljednji primjer. Recimo da imamo funkciju koja se zove `getCurrentTime` (dohvati trenutno vrijeme). Svaki put kad Jiki pokrene stroj, iz izlaznog otvora isklizne papirić na kojem piše vrijeme, možda 14:35.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/paper-out-of-chute.webp"
  alt="Stroj getCurrentTime s papirićem na kojem piše 14:35 koji isklizne iz izlaznog otvora"
  width="500"
  height="312"
/>

A tu povratnu vrijednost možemo pomoću `let` spremiti u kutiju:

```javascript
let time = getCurrentTime()
```

Jiki će pokrenuti stroj, uzeti trenutno vrijeme iz otvora i spremiti ga u kutiju koja se zove `time`.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/jiki-boxing-time.webp"
  alt="Jiki stavlja papirić s 14:35 iz izlaznog otvora u kutiju s naljepnicom time"
  width="372"
  height="400"
/>

Važno je shvatiti da papirić koji Jiki stavi u kutiju ostaje takav kakav je u tom trenutku bio. Čak i ako se stvarno vrijeme promijeni dok program radi, u kutiji je i dalje taj papirić na kojem piše 14:35. Kad nešto jednom dođe u kutiju, to je tamo fiksna stvar. Ne mijenja se čarolijom. Ako kasnije opet želimo staviti trenutno vrijeme u kutiju, moramo ponovno upotrijebiti funkciju `getCurrentTime` da ga dobijemo.

Većina funkcija koje nešto vraćaju ima i ulaze. Na primjer, možemo imati funkciju `join` (spoji) koja kao ulaze uzima dva stringa i vraća ih spojene s razmakom između. Pa ako stroj `join` upotrijebimo s `"Hello"` i `"World"` kao ulazima, iz otvora će izaći jedan string na kojem piše `"Hello World"`.

```javascript
join("Hello", "World"); // "Hello World"
```
