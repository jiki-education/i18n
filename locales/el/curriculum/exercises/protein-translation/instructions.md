---
title: "Μετάφραση πρωτεΐνης"
description: "Μετάφρασε αλληλουχίες RNA σε πρωτεΐνες."
en_md5: 79fb3a8d74a161a935842d20f7c835e7
---

Το RNA μπορεί να χωριστεί σε αλληλουχίες τριών νουκλεοτιδίων που ονομάζονται κωδικόνια, και στη συνέχεια να μεταφραστεί σε πρωτεΐνη. Για παράδειγμα:

1. RNA: "AUGUUUUCU"
2. Κωδικόνια: "AUG", "UUU", "UCU"
3. Πρωτεΐνη: "Methionine", "Phenylalanine", "Serine"

Υπάρχουν επίσης τρία κωδικόνια τερματισμού (κωδικόνια STOP: UAA, UAG, UGA). Αν συναντήσεις κάποιο από αυτά, όλη η μετάφραση σταματά και η πρωτεΐνη τερματίζεται.

Η δουλειά σου είναι να γράψεις μια συνάρτηση `translateRna` (μετέφρασε RNA) που δέχεται μια αλληλουχία RNA και επιστρέφει τη λίστα των αμινοξέων.

Αντιστοιχίες κωδικονίων:

- AUG -> Methionine
- UUU, UUC -> Phenylalanine
- UUA, UUG -> Leucine
- UCU, UCC, UCA, UCG -> Serine
- UAU, UAC -> Tyrosine
- UGU, UGC -> Cysteine
- UGG -> Tryptophan
- UAA, UAG, UGA -> STOP
