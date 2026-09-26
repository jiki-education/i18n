---
title: "قماش مخطط"
description: "انسج نمطًا مخططًا باختيار لون كل شريط بشكل صحيح."
en_md5: ba93b39f1883d50139d243a16e3c204f
---

أنت تصمم خوارزمية لإنشاء لفة من القماش المخطط، ينبغي أن تبدو هكذا:

<svg viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label="عشرون شريطًا عموديًا: البنفسجي عند كل طرف، وبينهما أشرطة خضراء وزرقاء وصفراء" style="width: 200px; height: 200px; display: block; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;padding:4px;margin-top:-8px">
  <rect x="0" y="0" width="5" height="100" fill="#A020F0" />
  <rect x="5" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="10" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="15" y="0" width="5" height="100" fill="#008000" />
  <rect x="20" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="25" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="30" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="35" y="0" width="5" height="100" fill="#008000" />
  <rect x="40" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="45" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="50" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="55" y="0" width="5" height="100" fill="#008000" />
  <rect x="60" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="65" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="70" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="75" y="0" width="5" height="100" fill="#008000" />
  <rect x="80" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="85" y="0" width="5" height="100" fill="#56AEFF" />
  <rect x="90" y="0" width="5" height="100" fill="#ffed06" />
  <rect x="95" y="0" width="5" height="100" fill="#A020F0" />
</svg>

النمط عبارة عن تسلسل متكرر من `"yellow"` و`"blue"` و`"yellow"` و`"green"`. الشريطان الأول والأخير باللون `"purple"`.

السبورة التي تصمم عليها عرضها `100` وارتفاعها `100`. وعليك أن ترسم `20` شريطًا، عرض كل منها `5`.

### قواعد التمرين

لا يمكنك حل هذا التمرين بمجرد كتابة 20 عبارة لرسم مستطيل. يجب أن يعمل الكود مع أي حجم من القماش. بل يمكنك استخدام دالة `rectangle(...)` (ترسم مستطيلًا) مرة واحدة فقط في الكود!

بدلًا من ذلك، عليك أن تستخدم حلقة، وأن تستخدم عامل (‏_operator_ بالإنجليزية) الباقي (‏_remainder_ بالإنجليزية) الذي رأيناه في درس الفيديو الأخير. فكّر جيدًا في ترتيب العبارات، فهذا هو مفتاح النجاح في هذا التمرين.

خُذ وقتك واستمتع!
