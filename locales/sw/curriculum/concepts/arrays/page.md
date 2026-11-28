---
title: "Orodha"
description: "Mnyororo uliopangwa wa vipengele (string, namba, Boolean, au kitu kingine chochote) unaoshikiliwa pamoja kama thamani moja ambayo Jiki anaweza kuipitisha."
en_md5: d26ccb9e04fbc77129f3199d63a95017
---

Umekuwa ukitumia namba na string na Boolean, neno la kifahari kwa kweli na sikweli, na hizi tunaziita aina za data (_data types_ kwa Kiingereza). Sasa tunaongeza aina yetu ya kwanza ya data mchanganyiko (_compound data type_ kwa Kiingereza).

Yaani aina ya data inayoweza kuwa na vitu vingi, siyo kitu kimoja tu, na aina hii ya data inaitwa orodha (_array_ kwa Kiingereza).

Unaposikia neno orodha, nataka ufikirie mnyororo halisi unaoshikilia vitu vingi pamoja.

Vitu vilivyo kwenye mnyororo huo vinaweza kuwa chochote: string, namba, Boolean, hata orodha nyingine, hata vitu ambavyo bado hujavijifunza. Lakini kwa sasa tusijisumbue na hilo.

Kila kitu katika mnyororo huu kiko kwa mpangilio, mpangilio ambao vitu hivyo vimeunganishwa pamoja.

Kwa hiyo orodha ina vitu vingi, lakini ni kipengele (_element_ kwa Kiingereza) kimoja kizima, kitu kimoja kizima, orodha moja iliyo na vipengele vingi ndani yake.

Jiki anaweza kuchukua orodha hiyo, mnyororo huo, na kuuweka kwenye sanduku, kama vile anavyoweza kuweka string kwenye sanduku au namba kwenye sanduku.

Anaweza kuiweka kwenye tundu la ingizo la mashine. Anaweza kuitoa kwenye mteremko wa matokeo. Orodha hii ni kitu kimoja, na Jiki anafanya kazi nayo kwa njia ile ile anafanya kazi na string, namba, na kila kitu kingine ulichokiona hadi sasa.

Sasa, kwenye msimbo, orodha inaonekana kwa kiasi fulani kama mnyororo pia. Ina mabano ya mraba kila upande, na kisha vitu vingi vilivyounganishwa pamoja, vikitenganishwa kwa koma.

Kwa mfano, kama tunataka kuunda orodha yenye majina ya baadhi ya washauri wetu, tunaweza kuandaa sanduku linaloitwa `mentors` (washauri) na kuweka mnyororo huo ndani yake.

Tungeandika `let mentors =`, sawa kabisa na tunavyofanya na sanduku jingine lolote, kisha tunapata mabano ya mraba ya kufungua, vipengele vingi, majina yao yakitenganishwa kwa koma, na mwisho mabano ya mraba ya kufunga. Jiki anapoona hivi, anaenda kuchukua karatasi nne, moja kwa kila jina, kisha anachukua mnyororo mpya na kuunganisha zote pamoja, na kisha anaweka mnyororo huo kwenye sanduku la `mentors`.

Unaweza kuweka kitu chochote kwenye orodha: string, namba, Boolean, hata mchanganyiko wa vitu.

Hizi zote ni mifano tofauti ya orodha halali kabisa.

Unaweza pia kuunda orodha tupu. Ni mnyororo tu usio na vipengele. Bado ni kitu halisi. Bado una ncha zake zote mbili. Bado ni mnyororo. Ni kwamba tu hauna vitu ndani yake. Lakini bado unaweza kuweka orodha hii tupu kwenye sanduku na kuitoa na kuitumia baadaye.

Kwa hiyo unaweza kuunda orodha kwa mtindo wa mabano ya mraba, lakini tunazitumiaje kwa kweli? Tunaangaliaje kilicho ndani yao na kutoa vitu? Ni kwa njia ile ile tuliyotumia tulipotaka kutoa herufi kutoka kwenye string. Tunaweza kutumia mabano ya mraba tukiweka namba ndani.

Hebu turudi kwenye orodha yetu ya washauri. Tukitaka kumtoa wa kwanza, tunaandika `mentors[0]`. Kumbuka kwamba tunaanza kuhesabu kutoka sifuri katika JavaScript.

Na tunaweza pia kufanya marudio kwenye orodha kwa njia ile ile tuliyofanya marudio kwenye string hapo awali, kwa kutumia `for-of`.

Orodha zinafanya kazi kwa njia ile ile. Tofauti pekee ni kwamba wakati huu, badala ya kutoa herufi, tunatoa kile kile kilichokuwa kipengele kwenye orodha. Katika mfano huu, jina la mshauri.

Kwa hiyo mara ya kwanza tunapomshukuru mtu, tunamshukuru `"DJ"`. Mara ya pili, tunamshukuru `"Becky"`, na kadhalika.

Tunaweza pia kutumia sifa `length` kwenye orodha, kama tulivyojifunza kuhusu string. Kama tuna orodha yenye string nne kwenye sanduku la `mentors` na tunaandika `mentors.length`, itarejesha nne.

Na tunaweza kutumia `includes` vivyo hivyo kwenye orodha pia. Tunaweza kusema `mentors.includes("DJ")`, nayo itarejesha `true`. Lakini tukisema `mentors.includes("Frank")`, itarejesha `false`.

Kila kitu kinafanya kazi sawa kabisa na kwenye string. Ni kwamba tu tunafanya kazi na vipengele vya orodha, siyo herufi za string.
