---
title: "Korištenje funkcija"
description: "Kako Jikiju reći da pokrene jedan od svojih malih strojeva: napiši njegovo ime i iza njega dvije zagrade."
en_md5: fc671310093a081113a8f301b6ff53fe
---

Kad pišeš kôd, zapravo objašnjavaš što želiš da se dogodi, i to jezikom koji računalo razumije. Programskih jezika ima jako puno, a ima i puno različitih tumača koji uzimaju ono što napišeš i pretvaraju to u jedinice i nule koje računalo razumije. Na ovom tečaju tvoj je tumač Jiki. Cijeli tečaj nosi ime po Jikiju. Ovo je Jiki. Jiki će ti biti prijatelj na ovom putu kroz programiranje. Njegov je posao tumačiti kôd koji pišeš i pretvarati ga u jedinice i nule po kojima računalo doista može postupati.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions/jiki-introduction.webp"
  alt="Jiki, prijateljski tumač koji će te voditi kroz ovaj tečaj"
  width="421"
  height="400"
/>

Cijela je poanta programiranja u tome da tumaču, u ovom slučaju Jikiju, daš prave upute. Uputa koje mu možeš dati ima jako puno i sve ih razumije. Može spajati stvari, može nešto ponoviti mnogo puta, može reći: „Ako se ovo dogodi, onda moram učiniti ovo." Može zapamtiti stvari i kasnije ih ponovno upotrijebiti. Može ti javiti pogrešku ako nešto nije u redu. Sve ćemo to proći na ovom tečaju. Ali ključno je razumjeti ovo: sve što ćeš raditi svodi se na pisanje uputa na ploču, koje Jiki onda dolazi pročitati i slijediti.

Kad sam prije 34 godine učio programirati, izgradio sam upravo takav mentalni model i imam ga i danas. Razumijem kako računala rade sve do razine jedinica i nula, ali iskreno, nikad ne razmišljam o tome. U mojoj glavi u računalu živi mali čovjek i ja mu govorim što treba raditi. Zato prihvati tu sliku i pođi sa mnom. To je moćan mentalni model i ako počneš ovako slikovito razmišljati o tome što taj čovjek u računalu radi, jako će ti dobro služiti dok učiš programirati.

Krenimo od jednog od temeljnih pojmova u programiranju, a to su funkcije (_functions_ na engleskom). Funkcije su poput malih strojeva koje možeš reći Jikiju da upotrijebi. Zavirimo li u Jikijevo skladište, gdje se on inače zadržava, vidjet ćeš da ondje ima policu s tri različita stroja: `move` (pomakni se), `turnLeft` (skreni lijevo) i `turnRight` (skreni desno).

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions/warehouse-three-machines.webp"
  alt="Polica u Jikijevu skladištu s tri stroja s natpisima move, turnLeft i turnRight"
  width="500"
  height="371"
/>

Kad napišeš `move` i onda one dvije zagrade, time Jikiju govoriš da ode po stroj `move` na polici, okrene ručicu, pokrene ga i upotrijebi.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions/jiki-using-move-1.webp"
  alt="Jiki odvozi stroj move s police kako bi ga upotrijebio"
  width="439"
  height="400"
/>

Kad napišeš `turnLeft` pa zagrade, govoriš Jikiju da uzme stroj `turnLeft` s police i upotrijebi ga. I to je obrazac koji ćeš koristiti iznova i iznova. Kad god želiš upotrijebiti neki stroj, napišeš njegovo ime i zatim te zagrade, a to Jikiju govori da ode po taj stroj i upotrijebi ga:

```javascript
move()
turnLeft()
```

O tome kako taj stroj zapravo radi i što se u njemu događa za sada ne moramo brinuti. Time ćemo se puno detaljnije baviti kasnije. Štoviše, uskoro ćeš moći raditi i vlastite strojeve. Ali za sada ne brini o tome. Za svaku vježbu bit će navedeno koji se strojevi nalaze na Jikijevoj polici. Razlikuju se od vježbe do vježbe, a upravo pomoću njih ćeš ih i rješavati.
