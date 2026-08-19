---
title: "ডোরাকাটা কাপড়"
description: "প্রতিটি ডোরার রং সঠিকভাবে বেছে নিয়ে ডোরাকাটা একটি প্যাটার্ন বুনুন।"
en_md5: ba93b39f1883d50139d243a16e3c204f
---

আপনি ডোরাকাটা কাপড়ের একটি রোল তৈরির অ্যালগরিদম ডিজাইন করছেন, যেটি দেখতে হবে এই রকম:

<svg viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label="Twenty vertical stripes: purple at each end, with green, blue and yellow stripes in between" style="width: 200px; height: 200px; display: block; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;padding:4px;margin-top:-8px">
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

প্যাটার্নটি `"yellow"`, `"blue"`, `"yellow"`, `"green"`-এর একটি পুনরাবৃত্ত ধারা। প্রথম ও শেষ ডোরার রং `"purple"` হবে।

আপনি যে ক্যানভাসে ডিজাইন করছেন সেটি `100` চওড়া ও `100` উঁচু। আপনাকে `20`টি ডোরা আঁকতে হবে, প্রতিটি `5` চওড়া।

### অনুশীলনীর নিয়ম

শুধু ২০টি রেক্টাঙ্গেল স্টেটমেন্ট লিখে এই অনুশীলনীটি সমাধান করা যাবে না। আপনার কোড যেন যেকোনো মাপের কাপড়ের জন্য কাজ করে, সেভাবে লিখতে হবে। আসলে, আপনার কোডে `rectangle(...)` (আয়তক্ষেত্র) ফাংশনটি মাত্র একবারই ব্যবহার করতে পারবেন!

এর বদলে, আপনাকে লুপ ব্যবহার করতে হবে, আর আগের ভিডিও পাঠে আমরা যে ভাগশেষ (ইংরেজিতে _remainder_) অপারেটর দেখেছিলাম, সেটিও কাজে লাগাতে হবে। স্টেটমেন্টগুলোর ক্রম নিয়ে ভালোভাবে ভাবুন, এই অনুশীলনীতে সফল হওয়ার চাবিকাঠি সেটাই।

সময় নিয়ে করুন। শুভকামনা!
