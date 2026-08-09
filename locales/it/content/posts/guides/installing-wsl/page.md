---
title: "Installare il Sottosistema Windows per Linux (WSL)"
excerpt: "Istruzioni passo passo per installare il Sottosistema Windows per Linux, che ti fornisce un ambiente di sviluppo vero e proprio su Windows."
tags: ["installation"]
seo:
  description: "Una guida adatta ai principianti per installare WSL (Sottosistema Windows per Linux) su Windows 10 e 11, con istruzioni chiare passo passo e correzioni per i problemi comuni."
  keywords:
    [
      "wsl",
      "installare wsl",
      "sottosistema windows per linux",
      "ubuntu su windows",
      "ambiente di sviluppo windows",
      "impara a programmare"
    ]
en_md5: 7286edef00bc5cd57f37c00fb20ba83a
---

## Introduzione

WSL (**Sottosistema Windows per Linux**) è una funzionalità di Windows, realizzata da Microsoft, che esegue un vero sistema Linux all'interno del tuo computer Windows. Ti serve perché la maggior parte degli strumenti di programmazione sono pensati prima (e funzionano meglio) su Linux e macOS, e WSL è il modo in cui gli sviluppatori su Windows possono accedere a tutto questo. È il metodo che Microsoft stessa consiglia per fare sviluppo su Windows. Installarlo richiede circa quindici minuti, la maggior parte dei quali di attesa, e devi farlo una volta sola.

## Prima di iniziare

Ti serve:

- **Windows 10 (versione 2004 o successiva) o Windows 11.** Qualsiasi computer Windows degli ultimi anni va bene.
- **Accesso come amministratore** al computer. Se è un computer di famiglia, potresti aver bisogno che chi lo ha configurato inserisca la propria password.

## Installare WSL

1. Clicca sul pulsante **"Start"** e digita "powershell". Vedrai apparire **"Windows PowerShell"**.
2. Non aprirlo subito. Piuttosto, fai clic destro su di esso e scegli **"Esegui come amministratore"**. Windows ti chiederà se consentire all'app di apportare modifiche: clicca **"Sì"**.
3. Nella finestra blu che appare, digita il seguente comando e premi Invio:
   ```
   wsl --install
   ```
4. Windows scaricherà e imposterà tutto, compreso un sistema Linux chiamato **Ubuntu** (la versione più diffusa di Linux). Potrebbero volerci alcuni minuti.
5. Quando ti viene chiesto, riavvia il computer.

<!-- SCREENSHOT: PowerShell running wsl --install -->

## Configurare Ubuntu

Dopo il riavvio, si aprirà automaticamente una finestra del terminale per completare la configurazione di Ubuntu. (Se non si apre, clicca su **"Start"**, digita "ubuntu" e aprilo.)

Ti chiederà di creare un **nome utente** e una **password** per il tuo sistema Linux:

1. Digita un nome utente (in minuscolo, senza spazi) e premi Invio.
2. Digita una password e premi Invio, poi digitala di nuovo per confermarla.

Qui c'è una cosa che prende tutti alla sprovvista: **quando digiti la password, sullo schermo non appare nulla**. Nessun punto, nessun asterisco, niente. È una caratteristica di sicurezza di Linux, non un difetto. La digitazione viene registrata, quindi digita semplicemente la password e premi Invio.

Non dimenticare questa password. Ti servirà ogni tanto quando installerai altri programmi.

<!-- SCREENSHOT: Ubuntu first run asking for a username -->

## Verificare che funzioni

Chiudi tutto, poi clicca su **"Start"**, digita "ubuntu" e aprilo. Dovresti vedere una finestra con un prompt che termina con `$`, in attesa che tu scriva qualcosa. Congratulazioni: quello è un vero terminale Linux, e ora hai lo stesso ambiente di sviluppo dei professionisti.

Prova a digitare `ls` e a premere Invio. Elenca i file nella cartella corrente (per ora non ce ne saranno molti).

## Usare WSL da VS Code

Se hai [VS Code installato](/guides/installing-vscode), può connettersi a WSL in modo che il tuo editor e il tuo terminale Linux lavorino insieme:

1. Apri VS Code.
2. Apri il pannello Estensioni (l'icona con quattro quadrati sulla sinistra, oppure premi Ctrl+Shift+X), cerca **WSL** e installa l'estensione realizzata da Microsoft.
3. Premi Ctrl+Shift+P, digita "WSL" e scegli **"WSL: Connect to WSL"**. VS Code si riavvierà, connesso a Ubuntu.

D'ora in poi, qualsiasi terminale apri all'interno di VS Code (menu Terminale, poi Nuovo terminale) sarà un terminale Linux. Questa è la configurazione che ti consigliamo per il resto delle nostre guide.

## Se qualcosa va storto

Il problema più comune è un errore che menziona la **virtualizzazione** (o "VT-x", "AMD-V" o "piattaforma macchina virtuale"). WSL si basa su una funzionalità hardware che su alcuni computer è disattivata. Attivarla significa modificare un'impostazione nel BIOS del computer, che varia a seconda del produttore. Cerca il nome del modello del tuo portatile più "abilita virtualizzazione" per le istruzioni, oppure chiedi nel <a href="https://forum.jiki.io" target="_blank" rel="noopener noreferrer">nostro forum</a> e ti aiuteremo.

Per qualsiasi altra cosa, la <a href="https://learn.microsoft.com/en-us/windows/wsl/install" target="_blank" rel="noopener noreferrer">guida ufficiale all'installazione di WSL</a> di Microsoft ha una sezione di risoluzione dei problemi, e comunque il forum è sempre a disposizione.
