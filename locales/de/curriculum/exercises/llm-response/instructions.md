---
title: "LLM-Antwort"
description: "Verarbeite die Antwort eines KI-Chatbots und formatiere sie."
en_md5: 85c1827a73310a9d2285972cc0b1cb33
---

Erstelle eine Funktion namens `askLlm` (das LLM fragen), die einen Eingabewert entgegennimmt: die Frage, die du stellen willst.

Nutze die Funktion `fetch` (abrufen), um die API unter "https://myllm.com/api/v2/qanda" aufzurufen. Sie nimmt zwei Parameter entgegen: (url, parameters). Der zweite Parameter sollte ein Wörterbuch mit einem Schlüssel-Wert-Paar für "question" sein.

Schau dir die Daten an, die du zurückbekommst, und wandle sie dann in das folgende Format um:

"The answer to 'Who won the 1966 Football Men's World Cup?' is 'England' (100% certainty in 0.5s)."

Zum Schluss gib diesen String zurück.

Ein paar Hinweise:

- Du bekommst mehrere mögliche Antworten. Wähle die aus, bei der das LLM die höchste Sicherheit hat.
- 0.78 als Dezimalzahl ist dasselbe wie 78% als Prozentangabe.
- 123ms ist dasselbe wie 0.123s (eine Sekunde hat 1000 Millisekunden).
