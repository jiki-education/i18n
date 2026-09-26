---
title: "إضافة الإرجاع إلى الدوال"
description: "استخدام الكلمة المفتاحية `return` لمنح دوالك مجرى إخراج يُرجع القيمة إلى من استدعاها."
en_md5: 51d31f709a7051c29b499a31ad68555e
---

أنت الآن تعرف كيف تنشئ دوال لها معاملات، ودوال بدون معاملات. بقي شيء أخير واحد لتتعلمه، وبعده ستصبح خبيرًا في إنشاء الدوال، وهذا الشيء هو كيف تمنح دوالك مجرى إخراج.

لقد استخدمت من قبل الكثير من الدوال التي تُرجع قيمًا. `isAlienAbove` (هل يوجد كائن فضائي في الأعلى) تُرجع لك صحيحًا أو خطأ. و`Math.randomInt(1, 10)` (حيث إن `Math` تعني الرياضيات و`randomInt` تعني عددًا صحيحًا عشوائيًا) تُرجع لك عددًا عشوائيًا.

عندما يستخدم Jiki هذه الدوال، يقفز شيء ما خارجًا من مجرى الإخراج، ويمكنه بعدها أن يستخدمه.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/output-chute.webp"
  alt="Jiki يلتقط قيمة تقفز خارجًا من مجرى إخراج الآلة"
  width="500"
  height="312"
/>

وللقيام بذلك، نحتاج إلى كلمة مفتاحية جديدة أخرى، وهي الكلمة المفتاحية `return`.

الكلمة المفتاحية `return` تخبر Jiki المصغّر أن يدفع شيئًا خارجًا من مجرى الإخراج.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/return-keyword-push.webp"
  alt="Jiki المصغّر داخل الآلة يدفع القيمة 42 خارجًا عبر مجرى الإخراج"
  width="500"
  height="335"
/>

لننشئ دالة، ولنسمّها `meaningOfLife` (معنى الحياة)، ومهمة هذه الدالة هي دائمًا أن تُرجع العدد `42` فقط. لا تأخذ أي معاملات. نكتبها هكذا:

```javascript
function meaningOfLife() {
  return 42
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/meaning-of-life-42.webp"
  alt="آلة meaningOfLife ترسل العدد 42 خارجًا من مجرى إخراجها"
  width="500"
  height="323"
/>

والآن، حينما نستخدم `meaningOfLife()` في أي مكان في الكود، نحصل على العدد `42` لنستخدمه مثل أي قيمة أخرى. يمكننا وضعه في صندوق باستخدام `let`، ويمكننا تمريره كوسيط إلى دالة أخرى، ويمكننا مقارنته داخل جملة شرطية.

يمكن للدوال التي تُرجع قيمًا أن تأخذ معاملات أيضًا. قد تكتب دالة `ageBracket(age)` (فئة العمر) تُرجع `"Sorry, too young"` عندما تكون قيمة `age` أقل من 18، و`"Welcome"` فيما عدا ذلك. ومن يستدعيها يحصل على السلسلة النصية التي أرجعتْها الدالة.

```javascript
function ageBracket(age) {
  if (age >= 18) {
    return "Welcome"
  }
  return "Sorry, too young"
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/age-input.webp"
  alt="قيمة عمر تُسقَط في فتحة إدخال الآلة لتقرر ما الذي ستُرجعه"
  width="487"
  height="400"
/>

هكذا تعمل البرمجة في جوهرها. ننشئ الكثير من لبنات البناء الصغيرة هذه، ثم نركّبها معًا لنكوّن برامج.
