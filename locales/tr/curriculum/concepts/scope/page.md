---
title: "Kapsam"
description: "Süslü parantezlerin kendi raf takımlarını nasıl oluşturduğunu ve değişkenlerin yalnızca ait oldukları blok yaşadığı sürece yaşadığını anlamak."
en_md5: 4d5fc2d1d304725660102e9aaceea4c3
---

Her çalıştırıldığında daireyi farklı bir yere çizen bir kod düşünün; biz de farklı yerlere 10 daire çizmek istiyoruz. Bunu bir döngüyle birleştirebiliriz. Ama dikkatle bakanlarınız burada tuhaf bir şey fark etmiş olabilir.

```javascript
repeat(10) {
  let left = Math.randomInt(0, 100)
  let top = Math.randomInt(0, 100)
  circle(left, top, 5, "blue")
}
```

Başta, Jiki'nin raflarındaki kutuların benzersiz adları olması gerektiğine dair bir kural olduğunu söylemiştim.

Ve `let` anahtar kelimesi, onu her kullandığınızda yeni bir kutu oluşturur.

Ama `let` bir döngünün içinde olduğu için Jiki döngü her çalıştığında yeni bir kutu oluşturacak.

Peki kod mu yanlış, yoksa burada başka tuhaf bir şey mi oluyor?

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/thinking-jiki.webp"
  alt="Kod yanlış mı diye merak eden, şaşkına dönmüş Jiki"
  width="384"
  height="400"
/>

Meğerse kodda sorun yokmuş. Bu tamamen geçerli bir JavaScript ve kapsam (İngilizce: _scope_) ya da kapsam belirleme dediğimiz bir kavram sayesinde çalışıyor.

Kapsam, ilk başta size oldukça kolay gelebilir, ama sizi temin ederim ki kariyerinizin geri kalanında başınızı ağrıtacak. En kıdemli geliştiriciler bile kapsamla ilgili sorunlarla karşılaşır ve JavaScript bu konuda en karmaşık dillerden biri. Bunu size, kapsamla ilgili bir sorun yaşadığınızda kendinizi kötü hissetmeyin diye söylüyorum. Ama aynı zamanda bu kısma gerçekten dikkat edin, çünkü önemli.

Kodda bir süslü parantez gördüğünüzde, o parantez yeni bir kapsam denen şeyi oluşturur. Bu ne anlama geliyor? Şöyle düşünebilirsiniz: Jiki her süslü parantez gördüğünde atölyesinde yeni, küçük bir raf takımı oluşturur. Ve çalışırken, yani o süslü parantezlerin içindeki kodu çalıştırırken oluşturduğu kutular, o yeni kutular ana raflara değil, bu yeni küçük raf takımına gider.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves.webp"
  alt="Jiki'nin ana raf takımı ve bir süslü parantezin oluşturduğu yeni, daha küçük raf takımı"
  width="500"
  height="205"
/>

Jiki karşılık gelen kapanış süslü parantezine geldiğinde ise bu ikincil raf takımındaki bütün kutuları çöpe atar.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves-loop-end.webp"
  alt="Kapanış süslü parantezine geldiğinde ikincil raf takımındaki kutuları çöp kutusuna atan Jiki"
  width="500"
  height="237"
/>

Yani böyle bir döngümüz olduğunda, yalnızca döngünün her bir turu kadar yaşayan kutular oluşturabiliriz. Burada gördüğünüz `left` (sol) ve `top` (üst) kutuları yalnızca kapanış süslü parantezine gelene kadar yaşar, sonra çöpe atılır. Jiki de döngü her çalıştığında o kapanış süslü parantezine gelir. Yani bu programda 10 kez. Yani 10 kez `left` adında bir kutu oluşturur ve onu tekrar çöpe atar.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/left-top-boxes-color.webp"
  alt="Döngünün yalnızca bir turu boyunca yaşayan, left ve top etiketli iki kutu"
  width="500"
  height="187"
/>

Yani bir değişken oluştururken onun ne kadar süre ortalıkta kalmasını istediğinize karar vermeniz gerekir. Uzun süre yaşamasını istiyorsanız süslü parantezlerin dışında olması gerekir. Yalnızca bir yineleme (İngilizce: _iteration_), yani döngünün bir turu boyunca yaşamasını istiyorsanız onu süslü parantezlerin içine koyabilirsiniz. Bunun nasıl biraz kafa karıştırıcı olabileceğini görüyor musunuz? İşte yeni başlarken bunu basit tutmanın güzel bir kuralı şudur: bütün değişkenlerinizi kodunuzun en üstünde, süslü parantezlerin dışında tutun ve onları yalnızca parantezlerin içinde güncelleyin. Örneğin yukarıdaki kodu, başlangıçta sıfıra ayarlanmış tek bir `left` ve `top` kutusuyla yazıp her turda döngünün içinde güncelleyebiliriz. Bu da tamamen geçerli. İkisi de doğru ya da yanlış değil. En iyi uygulamalar var ama onları daha sonra öğreneceğiz. Şimdilik deneyin, eğlenin, size en rahat geleni görün ve bunun için fazla endişelenmemeye çalışın.
