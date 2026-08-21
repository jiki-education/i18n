---
title: "Instalar o Subsistema Windows para Linux (WSL)"
excerpt: "Instruções passo a passo para instalar o Subsistema Windows para Linux, que te dá um ambiente de desenvolvimento adequado no Windows."
tags: ["installation"]
seo:
  description: "Um guia para principiantes sobre como instalar o WSL (Subsistema Windows para Linux) no Windows 10 e 11, com instruções claras, passo a passo, e soluções para problemas comuns."
  keywords:
    [
      "wsl",
      "instalar wsl",
      "subsistema windows para linux",
      "ubuntu no windows",
      "ambiente de desenvolvimento windows",
      "aprender a programar"
    ]
en_md5: 7286edef00bc5cd57f37c00fb20ba83a
---

## Introdução

O WSL (o **Subsistema Windows para Linux**) é uma funcionalidade do Windows, criada pela Microsoft, que executa um verdadeiro sistema Linux dentro do teu computador com Windows. Precisas dele porque a maior parte das ferramentas de programação é criada primeiro (e funciona melhor) em Linux e macOS, e o WSL é a forma como os programadores que usam Windows têm acesso a tudo isso. É a forma que a própria Microsoft recomenda para programar no Windows. Instalá-lo demora cerca de quinze minutos, a maior parte dos quais é só espera, e só tens de o fazer uma vez.

## Antes de começares

Precisas de:

- **Windows 10 (versão 2004 ou posterior) ou Windows 11.** Qualquer computador com Windows dos últimos anos serve.
- **Acesso de administrador** ao computador. Se for um computador de família, podes precisar de quem o configurou para escrever a palavra-passe.

## Instalar o WSL

1. Clica no botão **Iniciar** e escreve "powershell". Vais ver aparecer o **Windows PowerShell**.
2. Não o abras diretamente. Em vez disso, clica nele com o botão direito do rato e escolhe **Executar como administrador**. O Windows vai perguntar se queres permitir que a aplicação faça alterações: clica em **Sim**.
3. Na janela azul que aparece, escreve o seguinte e prime Enter:
   ```
   wsl --install
   ```
4. O Windows vai transferir e configurar tudo, incluindo um sistema Linux chamado **Ubuntu** (a versão mais popular do Linux). Isto pode demorar alguns minutos.
5. Quando te for pedido, **reinicia o computador**.

<!-- SCREENSHOT: PowerShell running wsl --install -->

## Configurar o Ubuntu

Após o reinício, abre-se automaticamente uma janela de terminal para terminares de configurar o Ubuntu. (Se não abrir, clica em Iniciar, escreve "ubuntu" e abre a aplicação.)

Vai pedir-te que cries um **nome de utilizador** e uma **palavra-passe** para o teu sistema Linux:

1. Escreve um nome de utilizador (em minúsculas, sem espaços) e prime Enter.
2. Escreve uma palavra-passe e prime Enter; escreve-a novamente para confirmar.

Há uma coisa que engana toda a gente aqui: **quando escreves a palavra-passe, não aparece nada no ecrã**. Nem pontos, nem asteriscos, nada. É uma funcionalidade de segurança do Linux, não um defeito. O que estás a escrever está a ser registado; por isso, escreve a palavra-passe e prime Enter.

Não te esqueças desta palavra-passe. Vais precisar dela de vez em quando, quando instalares coisas.

<!-- SCREENSHOT: Ubuntu first run asking for a username -->

## Verificar se funciona

Fecha tudo e, em seguida, clica em **Iniciar**, escreve "ubuntu" e abre a aplicação. Deves ver uma janela com um prompt que termina em `$`, à tua espera para escreveres. Parabéns: isto é um verdadeiro terminal Linux e passas a ter o mesmo ambiente de programação que os profissionais.

Experimenta escrever `ls` e prime Enter. Vai listar os ficheiros na pasta atual (ainda não devem ser muitos).

## Usar o WSL a partir do VS Code

Se tiveres o [VS Code instalado](/guides/installing-vscode), ele pode ligar-se ao WSL para o teu editor e o teu terminal Linux funcionarem em conjunto:

1. Abre o VS Code.
2. Abre o painel **Extensions** (o ícone com quatro quadrados no lado esquerdo, ou Ctrl+Shift+X), procura por **WSL** e instala a extensão criada pela Microsoft.
3. Prime Ctrl+Shift+P, escreve "WSL" e escolhe **WSL: Connect to WSL**. O VS Code reabre, ligado ao Ubuntu.

A partir de agora, qualquer terminal que abras no VS Code (menu Terminal e, a seguir, New Terminal) é um terminal Linux. Esta é a configuração que recomendamos para os restantes guias.

## Se algo correr mal

O problema mais comum é um erro que menciona a **virtualização** (ou "VT-x", "AMD-V" ou "plataforma de máquina virtual"). O WSL depende de uma funcionalidade de hardware que está desligada em alguns computadores. Ligá-la significa alterar uma definição na BIOS do computador, que varia consoante o fabricante. Procura o nome do modelo do teu portátil juntamente com "enable virtualisation" para obteres instruções, ou pergunta no <a href="https://forum.jiki.io" target="_blank" rel="noopener noreferrer">nosso fórum</a> e nós ajudamos.

Para qualquer outro problema, o <a href="https://learn.microsoft.com/en-us/windows/wsl/install" target="_blank" rel="noopener noreferrer">guia oficial de instalação do WSL</a> da Microsoft tem uma secção de resolução de problemas e, mais uma vez, o fórum está sempre disponível.
