---
title: "Şablon dizeleri"
description: "Değerleri `+` ile parça parça birleştirmek yerine, ters tırnaklar ve `${...}` yer tutucularıyla doğrudan karakter dizisinin içine yerleştirmek."
en_md5: 7fd0e09ac3b32db5f159f8e772872104
---

Karakter dizilerini başka karakter dizilerinin içine eklemek için şablon dizeleri (İngilizce: _template literals_) denen şeyi kullanabiliriz.

Yani karakter dizilerini birbirine eklemek yerine, içinde başka karakter dizilerine yer açılmış bir karakter dizimiz ya da şablonumuz olabilir.

Bunun için tırnak işaretleri yerine ters tırnak (İngilizce: _backtick_) kullanırız.

Ters tırnaklar, adından da anlaşılacağı gibi geriye yatık tik işaretleridir; ama bunları daha önce hiç kullanmamış olabilirsiniz, o yüzden klavyenizde doğru tuşu bulmanız gerekir.

Onları, içinde başka karakter dizileri barındırabilen bir şablon oluşturmak için kullanırız. Sonra da şablonun içine bir karakter dizisi yerleştirmek için dolar işareti ve süslü parantezlerden oluşan bir başka tuhaf sözdizimi kullanırız. Örneğin, az önce birleştirmeyle gördüğümüz `"hello " + name` işleminin aynısını yapmak için şöyle yazabiliriz:

```javascript
`hello ${name}` // "hello Jeremy" veya "hello Jiki"
```

<img
  class="concept-image"
  src="/static/images/concept-assets/string-templates/jiki-name-box.webp"
  alt="Jiki, üzerinde name yazan bir kutuyu tutuyor; bu, şablona yerleştirilen değer"
  width="207"
  height="400"
/>

Bu da tam olarak karakter dizilerini birbirine eklemekle aynı şeyi yapar.

Ama birden çok karakter dizisini tek bir yerde bir araya getirmeniz gerektiğinde, bu yöntem çok daha verimli olabilir.

Bu sözdizimine tam olarak alışmanız biraz zaman alacak, ama aslında o kadar da karmaşık bir yanı yok.
