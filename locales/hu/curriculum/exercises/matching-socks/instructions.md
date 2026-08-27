---
title: "Zoknipárosítás"
description: "Találd meg az összetartozó zoknipárokat két ruháskosárban."
en_md5: c58a4ca0800c19322e7e9a98b4634aad
---

Kevés idegesítőbb dolog van az életben, mint a páratlan zokni, aminek nem találod a párját. Ezért egy nap végre úgy döntesz, hogy szétválogatod a zoknijaidat!

Kiszeded az összes tiszta ruhát a fiókjaidból, és egy kosárba rakod őket. Aztán átkutatsz minden bútor alatt és minden párna mögött, hátha találsz még ruhadarabokat, és ezeket egy másik kosárba rakod, a koszos darabok közé.

Most már két kosarad van, és szeretnéd átnézni őket, hogy kiderítsd, minden zokninak van-e párja.

Írj egy `matchingSocks` (zoknipárosítás) nevű függvényt. Két bemenetet kap: a tiszta kosarat és a koszos kosarat, mindkettőt stringekből álló tömbként. Add vissza az összes zoknipárt egy tömbben.

Például:

- Ha a tiszta kosár ezt tartalmazza: `["left blue sock", "green sweater"]`
- A koszos kosár pedig ezt: `["blue shorts", "right blue sock", "left green sock"]`
- Ezt kell visszaadnod: `["blue socks"]`

A leírásokra ezek a szabályok vonatkoznak:

- Mindig kisbetűsek.
- Mindig egy vagy több szóból állnak, a szavakat szóköz választja el.
- A párba állítható dolgok mindig `"left "` vagy `"right "` előtaggal kezdődnek.

### Metódusok

Ebben a feladatban sok string- és tömbmetódus áll rendelkezésedre, hogy kicsit könnyebb legyen a dolgod. Nézd meg az alábbi leírásokat, hogy lásd, mi minden van az eszköztáradban ehhez a kihíváshoz.

### Bónusz

Sokféleképpen meg lehet oldani. Van azonban egy elég elegáns, 29 soros megoldás, ezért ezt tűztük ki célul. Ennél kevesebb sorral is megoldhatod, de a kód ilyenkor általában kevésbé olvasható, ezért szerintünk a 29 körüli megoldás a legjobb.

Jó szórakozást!
