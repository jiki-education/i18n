---
title: "Matrice"
description: "Un lanț ordonat de elemente (stringuri, numere, valori Boolean sau orice altceva), ținute împreună ca o singură valoare pe care Jiki o poate purta cu el."
en_md5: d26ccb9e04fbc77129f3199d63a95017
---

Ai folosit numere, stringuri și valori Boolean, vorba aceea pretențioasă pentru adevărat și fals, iar pe toate acestea le numim tipuri de date (engl. _data types_). Acum adăugăm primul nostru tip de date compus (engl. _compound data type_).

Adică un tip de date care poate conține mai multe lucruri, nu doar unul singur, iar acest tip de date se numește matrice (engl. _array_).

Când auzi cuvântul matrice, vreau să te gândești la un lanț fizic care ține multe lucruri împreună.

Lucrurile pe care le ține pot fi orice: stringuri, numere, valori Boolean, chiar și alte matrice, chiar și lucruri despre care nu ai învățat încă, dar hai să nu ne facem griji pentru asta deocamdată.

Totul în acest lanț este în ordine, în ordinea în care sunt legate împreună.

Deci o matrice conține multe lucruri, dar este un singur element solid, un singur lucru solid, o singură matrice cu multe elemente înăuntru.

Jiki poate lua acea matrice, acel lanț, și o poate pune într-o cutie, exact așa cum poate pune un string într-o cutie sau un număr într-o cutie.

O poate pune într-o fantă de intrare a unei mașini. O poate scoate din toboganul de ieșire. Această matrice este un singur lucru, iar Jiki lucrează cu ea exact în același fel în care lucrează cu stringuri, cu numere, cu tot ce ai văzut până acum.

Acum, în cod, o matrice arată și ea puțin ca un lanț. Are câte o paranteză pătrată la fiecare capăt și apoi o mulțime de elemente legate împreună, separate prin virgule.

De exemplu, dacă am vrea să creăm o matrice cu numele câtorva dintre mentorii noștri, am putea construi o cutie numită `mentors` (mentori) și am pune acel lanț înăuntru.

Am scrie `let mentors =`, exact ca la orice altă cutie, apoi o paranteză pătrată de deschidere, o mulțime de elemente, numele lor separate prin virgule, și apoi o paranteză pătrată de închidere. Când Jiki vede asta, se duce și ia patru foi de hârtie, una pentru fiecare nume, apoi ia un lanț nou și le leagă pe toate la un loc, iar la final pune lanțul în cutia `mentors`.

Poți pune orice într-o matrice: stringuri, numere, valori Boolean, chiar și un amestec de lucruri.

Toate acestea sunt exemple diferite de matrice complet valide.

Poți crea și o matrice goală. Este doar un lanț fără niciun element. Este tot un lucru real. Are tot ambele capete. Este tot un lanț. Doar că nu are nimic înăuntru. Dar poți pune și această matrice goală într-o cutie, o poți scoate și o poți folosi mai târziu.

Deci poți crea o matrice folosind sintaxa cu paranteze pătrate, dar cum le folosim de fapt? Cum verificăm ce este înăuntru și cum scoatem lucruri afară? Exact la fel cum am făcut când am vrut să scoatem litere dintr-un string. Putem folosi sintaxa cu paranteze pătrate, cu numere înăuntru.

Hai să ne întoarcem la lista noastră de mentori. Dacă vrem să-l scoatem pe primul, scriem `mentors[0]`. Ține minte că în JavaScript numărăm de la zero.

Și putem parcurge o matrice exact în același fel în care am parcurs stringuri mai devreme, folosind `for-of`.

Matricele funcționează exact la fel. Singura diferență este că de data asta, în loc să scoatem o literă, scoatem orice element era în matrice. În acest exemplu, numele mentorului.

Așa că prima dată când mulțumim cuiva, îi mulțumim lui `"DJ"`. A doua oară, îi mulțumim lui `"Becky"`, etc.

Putem folosi și proprietatea `length` pe matrice, exact cum am învățat la stringuri. Dacă avem o matrice cu patru stringuri în cutia `mentors` și scriem `mentors.length`, va returna patru.

Și putem folosi `includes` exact la fel pe matrice. Putem spune `mentors.includes("DJ")` și va returna `true`. Dar dacă spunem `mentors.includes("Frank")`, va returna `false`.

Totul funcționează exact la fel ca la stringuri. Doar că lucrăm cu elementele unei matrice, nu cu literele unui string.
