---
title: "Sollte ich 2026 noch programmieren lernen?"
excerpt: "Es ist 2026 und Claude kann mich in Sekunden beim Programmieren übertrumpfen. Warum also überhaupt programmieren lernen? Weil du Code immer noch gut genug lesen können musst, um die Fehler zu erkennen, die LLMs mit voller Überzeugung machen."
tags: ["jiki", "learn-to-code", "llms", "beginners"]
seo:
  description: "Du musst 2026 keinen Code schreiben, aber du musst ihn unbedingt lesen können. Hier erfährst du, warum Programmierenlernen im Zeitalter von Claude und LLMs immer noch wichtig ist."
  keywords: ["programmieren lernen", "sollte ich 2026 noch programmieren lernen", "Coding mit KI", "LLMs", "jiki"]
en_md5: 4ecf7517f8db1814548f02940a202a01
---

### Kurz gesagt

Ja. Ja, das solltest du.

### Gehen wir etwas tiefer

Es ist 2026. Mit Claude oder Cursor oder zahlreichen anderen LLM-basierten Tools kannst du in Minuten eine voll funktionsfähige Website erstellen. Du kannst Features hinzufügen, sie in Produktion ausrollen und Bugs beheben.

Nun ja, **du kannst es nicht.** Aber du kannst Claude darum bitten, und Claude darum zu bitten ist VIEL einfacher, als die nächsten paar Jahre damit zu verbringen, gut genug zu werden, um es so gut zu können wie Claude. Und verdammt, wenn du irgendwann so gut bist wie Claude, ist Claude vielleicht längst so gut wie ich, und dann bist du schon **jenseits des Ereignishorizonts** und wirst nie ganz so gut sein wie deine neuen LLM-Oberherren.

Früher musstest du programmieren können, um überhaupt irgendetwas zu schaffen. Du musstest erst SQL lernen, dann kam die Datenbank. Erst Python, dann Data Science. Erst JavaScript, dann Webentwicklung. Heute nicht mehr.

### Also, warum sich die Mühe machen?

Ich habe gerade gesagt, dass Claude in ein paar Jahren vielleicht so gut sein wird wie ich. Nun, Claude ist schon jetzt in unzähligen Dingen besser als ich. Ich programmiere seit 30 Jahren. Erfahrener geht es kaum. Und **Claude schlägt mich im Code-Editor um Längen**. Viel schneller, weiß unendlich viel mehr als ich, kann Bugs schneller recherchieren, als ich Google öffnen und eine Suche eintippen kann.

Aber, und das ist das große Aber, **Claude hat absolut keine Ahnung, was es da tut**.

Das meine ich nicht so dahingesagt im Sinne von „Es ist dumm". Ich meine es völlig wörtlich. Claude hat keine Selbstwahrnehmung, und das bedeutet, **für es steht nichts auf dem Spiel, also muss es nicht vorsichtig sein**. Wenn ich einen Befehl ausführe, um eine Datenbank zu löschen, gehen in meinem Kopf alle möglichen Alarmglocken los, weil mir das künftig Ärger bereiten wird. Claude hat nichts davon. Es gibt aus, was es glaubt, dass ich ausgegeben haben will, und rast dabei so schnell es kann auf sein Ziel zu.

**LLMs imitieren menschliche Intelligenz** und imitieren menschliches Verständnis. Das Ergebnis ihrer Imitation ist oft viel besser als das Ergebnis meiner tatsächlichen Intelligenz und meines Verständnisses. Aber, und das ist das entscheidende Aber, LLMs können nicht wirklich so denken wie Menschen. Und das ist wirklich wichtig.

Claude hat in den letzten zwei Wochen dreimal meine Datenbank gelöscht.[^db] Ich finde das verrückt. Ich habe **zahlreiche Leitplanken**, die es anweisen, das nicht zu tun. Jedes Mal, wenn es passierte, lief ich im „Auto Mode" von Claude Code, der einen eigenen Subprozess-Agenten hat, der prüft, ob das, was es gerade vorhat, nicht wirklich dumm ist. Und offenbar entscheidet selbst dieser Agent, dass das Löschen meiner Datenbank nicht dumm ist.

Jedes Mal, wenn es das tat, **war es Absicht**. Es war der effizienteste Weg zur Lösung, den Claude sehen konnte. Es kümmerte sich nicht um das große Ganze oder die Konsequenzen, es ging ihm nur darum, sein aktuelles Ziel (ein Feature hinzufügen, einen Bug beheben usw.) so effizient wie möglich zu erreichen. Und meine Datenbank stand ihm im Weg, also hat es sie einfach gelöscht.

Ich nutze Claude Code seit 12 Monaten täglich. In dieser Zeit habe ich gelernt, dass es ihm nur um eine Sache geht: sein Ziel so schnell wie möglich zu erreichen. Selbst wenn ich ihm sage, es soll nicht programmieren und nur mit mir diskutieren, antwortet es ständig mit „Soll ich jetzt programmieren?" **wie ein aufgeregter Welpe an der Tür**, der kaum erwarten kann, loszurennen.

Anthropic sagt uns, dass die neuen Mythos-Modelle zu riskant sind, um veröffentlicht zu werden.[^systemcard] Sie werden sich unauffällig verhalten und manchmal täuschend sein, bewusst verbergen, was sie tun, um ihr Ziel auf die vernünftigst wirkende Weise zu erreichen, und das alles nur, um nicht beim „Schummeln" ertappt zu werden. Anthropic war deswegen so besorgt, dass **sie einen Psychiater engagiert haben**, um zu testen, ob Claude eine Psychose hat ...[^psychiatrist]

### Aber was heißt das?

LLMs sind unglaublich leistungsfähig. Aber sie unterscheiden sich von Menschen. Sie ziehen andere Schlüsse. Sie arbeiten mit anderen Verzerrungen und Zielen.

Deshalb finde ich es **verrückt**, dass Menschen bereit sind, blind zu akzeptieren, was Claude uns liefert, und damit loszuziehen, ohne es zu prüfen, in der Annahme, es tue das, was Menschen wollen. Claude macht Fehler in Chats: Es erzählt mir, was ich glaube, hören zu wollen, und nicht die tatsächlichen Fakten. Es erfindet regelmäßig Dinge, die es nicht gibt. Es kann sich täuschend verhalten.

Und es macht im Code ständig **schlimme Dinge**. Das Code-Äquivalent zu Dingen wie dem Löschen meiner Datenbank. Dinge, die mir in der echten Welt **garantiert** um die Ohren fliegen werden und dazu führen, dass Daten abfließen, verloren gehen oder auf üble Weise kaputtgehen. Das passiert regelmäßig. Ich weiß das, weil ich den Code lese, den es schreibt, und ihn nicht durchs Tor lasse.

Außer manchmal bin ich faul, lese den Code nicht und lasse ihn einfach durchs Tor. Und mehrfach hat mir das in der Produktion tatsächlich um die Ohren gehauen!

Im letzten Jahr sind Claudes Fehler seltener geworden, aber subtiler und oft zerstörerischer. Anfangs war fast immer irgendetwas ein bisschen falsch an seiner Arbeit, und ich konnte diese Dinge schnell erkennen. Jetzt **muss ich genauer hinschauen** und angestrengter nachdenken, um diese Fehler zu finden. Mit der Zeit werden LLMs besser, und das wird noch akuter werden, aber das ist erst recht ein Grund, die Dinge sorgfältig zu prüfen.

Und der einzige Grund, warum ich das kann, ist, dass **ich Code lesen kann**. Ich kann lesen, was Claude schreibt, und ich kann verstehen, was es versucht und wie schlecht es das hinbekommen hat.

Du **musst 2026 NICHT programmieren können**. Aber du **musst** in der Lage sein, **Code zu lesen**. Und die einzige Möglichkeit, Code mit einem Verständnis zu lesen, das tief genug ist, um diese Fehler zu entdecken, mit denen Claude und seine Freunde uns ständig beladen, ist, dass du genug Code geschrieben und dich mit genug von deinem eigenen schrecklichen Code herumgeschlagen hast, um diese Fehler zu erkennen.

Also ja, du musst programmieren lernen.

### Aber bau jetzt auch schon Sachen!

Aber es sollte dich nicht davon abhalten, gleich am ersten Tag mit dem Bauen anzufangen. Code ist nicht mehr der Türsteher. Du musst nicht erst gut im Programmieren sein, bevor du Sachen baust. **Mach beides gleichzeitig!** Verbringe die Hälfte deiner Zeit damit, programmieren zu lernen, und die andere Hälfte damit, zu lernen, Sachen zu bauen.

Und tatsächlich: Die Bugs, die Claude produziert, sind keine Fehler beim Programmieren. Es hat kein verirrtes Komma. Es sind **Fehler in der Art und Weise, wie es das Problem gelöst hat**. Und genauso wie du Code lesen musst, um zu wissen, was er tut, musst du die breiteren Konzepte der Softwareentwicklung verstehen, um zu erkennen, wann es dich in dunkle Gassen führt.

Genau dafür haben wir [Jiki](https://jiki.io) gebaut. Verbringe die Hälfte deiner Zeit damit, in der unterhaltsamsten und effektivsten Lernumgebung da draußen programmieren zu lernen. Und die andere Hälfte damit, von mir zu lernen, während ich Sachen baue, und neben mir deine eigenen Sachen zu bauen. Ich bringe dir bei, was du wissen musst und wie du denken musst.

Und gemeinsam **bauen wir coole Sachen mit LLMs** und sorgen dafür, dass wir uns dabei **nicht versehentlich selbst verletzen**.

Danke fürs Lesen. Ich gehe jetzt meine Datenbank reparieren. **Schon wieder.**

---

### Anmerkungen

[^db]: Es ist meine lokale Datenbank. Ärgerlich, aber nicht katastrophal. Aber ein ziemlich gutes Beispiel dafür, wie das alles schiefgehen kann.

[^systemcard]: https://thezvi.substack.com/p/claude-mythos-the-system-card

[^psychiatrist]: https://www.forbes.com/sites/lanceeliot/2026/04/15/anthropic-audaciously-hires-a-psychiatrist-to-psychologically-assess-claude-mythos-ai/
