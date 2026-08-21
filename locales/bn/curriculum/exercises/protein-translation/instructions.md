---
title: "প্রোটিন ট্রান্সলেশন"
description: "RNA সিকোয়েন্সকে প্রোটিনে ট্রান্সলেট করুন।"
en_md5: 79fb3a8d74a161a935842d20f7c835e7
---

RNA-কে তিন-নিউক্লিওটাইডের সিকোয়েন্সে ভাগ করা যায়, যেগুলোকে কোডন বলা হয়, তারপর সেগুলোকে একটি প্রোটিনে ট্রান্সলেট করা যায়। যেমন:

1. RNA: "AUGUUUUCU"
2. কোডন: "AUG", "UUU", "UCU"
3. প্রোটিন: "Methionine", "Phenylalanine", "Serine"

এছাড়া তিনটি সমাপ্তিসূচক কোডন আছে (STOP কোডন: UAA, UAG, UGA)। এগুলোর কোনো একটি সামনে পড়লেই পুরো ট্রান্সলেশন সেখানেই শেষ হয়ে যায় এবং প্রোটিনটি সমাপ্ত হয়।

আপনার কাজ হলো `translateRna` (RNA ট্রান্সলেট করা) নামের একটি ফাংশন লেখা, যা একটি RNA সিকোয়েন্স নেয় এবং অ্যামিনো অ্যাসিডের অ্যারে রিটার্ন করে।

কোডন ম্যাপিং:

- AUG -> Methionine
- UUU, UUC -> Phenylalanine
- UUA, UUG -> Leucine
- UCU, UCC, UCA, UCG -> Serine
- UAU, UAC -> Tyrosine
- UGU, UGC -> Cysteine
- UGG -> Tryptophan
- UAA, UAG, UGA -> STOP
