---
title: "`for` döngülerini anlamak"
description: "Üç parçadan (başlatıcı, koşul ve artırıcı) oluşan ve yineleme üzerinde size tam kontrol veren bir döngü."
en_md5: 0ad4155ded18c2df27d29e5355bd0532
---

`repeat` döngüsünün JavaScript'te aslında var olmadığını hatırlıyor olabilirsiniz. O sadece, daha işin başındayken hayatınızı birazcık kolaylaştırmak için eklenmiş bir şey.

Peki onun yerine ne kullanıyoruz? Normal bir `for` döngüsü kullanıyoruz ve o şöyle görünür:

```javascript
for (let i = 0; i < 5; i++) {
  // ...
}
```

İlk günde bunun sizin için neden biraz göz korkutucu geldiğini şimdi anlıyorsunuzdur.

Ama artık bununla rahatça başa çıkmanız için gereken tüm bilgiye sahipsiniz. Hadi parçalara ayıralım.

Bir `for` döngüsünün üç bileşeni vardır: başlatıcı (İngilizce: _initializer_), koşul ve artırıcı (İngilizce: _increment_).

Başlatıcı, yani şu `let i = 0` kısmı, döngünün en başında çalışır. Sadece bir kez çalışır ve burada sıfıra ayarlanmış `i` (döngü sayacı) adında bir kutu oluşturur. `i` sadece döngü boyunca bir değeri takip etmek için kullanılan bir harf; geleneksel olarak bunun için `i` ya da `x` kullanılır.

Sıradaki parça, yani koşul, her döngü yinelemesinden önce çalışır.

Koşul doğruysa döngüyü yeniden çalıştırırız.

Değilse çalıştırmayız.

Ve son olarak artırıcı gelir: `i++`.

`i++` tam olarak `i = i + 1` ile aynı anlama gelir. Sadece bir kısayoldur, `i` değerini her seferinde bir artırmanın bir yolu.

Yani bu örnekte `i` değerini sıfıra ayarlıyoruz. `i` değerinin ikiden küçük olup olmadığını kontrol ediyoruz. Küçük, o yüzden döngüyü çalıştırıyoruz.

Sonra en sonda `i` değerini bir artırıyoruz, böylece `i` bir oluyor. Sıfır artı bir, bir eder.

Sonra yeniden başa dönüyoruz. Birin ikiden küçük olup olmadığını kontrol ediyoruz.

Küçük, o yüzden döngüyü çalıştırıyoruz. Sonra en sonda `i` değerini yine artırıyoruz. Şimdi iki oldu: bir artı bir, iki eder.

```javascript
i = 0
i < 2 // true: döngüyü çalıştır
...   // Yinelemeyi yap
i = i + 1 // 1

i < 2 // true: döngüyü çalıştır
...   // Yinelemeyi yap
i = i + 1 // 2

i < 2 // false: döngüden çık
```

Sonra üçüncü kez başa dönüyoruz. Bu kez ikinin ikiden küçük olup olmadığını kontrol ediyoruz; değil, o yüzden döngüyü çalıştırmıyoruz ve aslında döngüyle işimiz bitiyor. Sadece alttaki koda geçiyoruz. Yani döngüyü iki kez çalıştırdık ve bunu bilmek işe yarar. Sıfırdan başladığımız ve `i < n` gibi bir koşulumuz olduğu sürece, `n` sayısı döngünün kaç kez çalışacağını verir.

Yani bu, `repeat 2` demekle aynı şey.

Zor değil, ama `repeat 2` yazmaktan çok daha dolambaçlı. Bir `for` döngüsünün avantajı, o üç bölümde istediğinizi yapabilmeniz. Farklı bir sayıdan başlayabilir, birden fazla artırabilir, geriye doğru sayabilir ya da basit bir sayaca değil başka bir şeye bağlı bir koşul kullanabilirsiniz. `for` döngülerini JavaScript'in belkemiği yapan şey işte bu esneklik.
