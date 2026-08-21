---
title: "Instalar o Subsistema Windows para Linux (WSL)"
excerpt: "Instruções passo a passo para instalar o Subsistema Windows para Linux, que te dá um ambiente de desenvolvimento adequado no Windows."
tags: ["installation"]
seo:
  description: "Um guia para iniciantes sobre como instalar o WSL (Subsistema Windows para Linux) no Windows 10 e 11, com instruções claras, passo a passo, e soluções para problemas comuns."
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

O WSL (o **Subsistema Windows para Linux**) é um recurso do Windows, criado pela Microsoft, que executa um verdadeiro sistema Linux dentro do seu computador com Windows. Você precisa dele porque a maior parte das ferramentas de programação é criada primeiro (e funciona melhor) em Linux e macOS, e o WSL é a forma como os desenvolvedores que usam Windows têm acesso a tudo isso. É a forma que a própria Microsoft recomenda para programar no Windows. Instalá-lo demora cerca de quinze minutos, a maior parte dos quais é só espera, e você só precisa fazer isso uma vez.

## Antes de começar

Você precisa de:

- **Windows 10 (versão 2004 ou posterior) ou Windows 11.** Qualquer computador com Windows dos últimos anos serve.
- **Acesso de administrador** ao computador. Se for um computador de família, você pode precisar de quem o configurou para digitar a senha.

## Instalar o WSL

1. Clique no botão **Iniciar** e digite "powershell". Você vai ver aparecer o **Windows PowerShell**.
2. Não o abra diretamente. Em vez disso, clique nele com o botão direito do mouse e escolha **Executar como administrador**. O Windows vai perguntar se você quer permitir que o aplicativo faça alterações: clique em **Sim**.
3. Na janela azul que aparece, digite o seguinte e pressione Enter:
   ```
   wsl --install
   ```
4. O Windows vai baixar e configurar tudo, incluindo um sistema Linux chamado **Ubuntu** (a versão mais popular do Linux). Isso pode demorar alguns minutos.
5. Quando for pedido, **reinicie o computador**.

<!-- SCREENSHOT: PowerShell running wsl --install -->

## Configurar o Ubuntu

Após o reinício, se abre automaticamente uma janela de terminal para você terminar de configurar o Ubuntu. (Se não abrir, clique em Iniciar, digite "ubuntu" e abra o aplicativo.)

Ele vai te pedir que você crie um **nome de usuário** e uma **senha** para o seu sistema Linux:

1. Digite um nome de usuário (em minúsculas, sem espaços) e pressione Enter.
2. Digite uma senha e pressione Enter; digite-a novamente para confirmar.

Há uma coisa que engana todo mundo aqui: **quando você digita a senha, não aparece nada na tela**. Nem pontos, nem asteriscos, nada. É um recurso de segurança do Linux, não um defeito. O que você está digitando está sendo registrado; então, digite a senha e pressione Enter.

Não se esqueça desta senha. Você vai precisar dela de vez em quando, quando instalar coisas.

<!-- SCREENSHOT: Ubuntu first run asking for a username -->

## Verificar se funciona

Feche tudo e, em seguida, clique em **Iniciar**, digite "ubuntu" e abra o aplicativo. Você deve ver uma janela com um prompt que termina em `$`, esperando você digitar. Parabéns: isso é um verdadeiro terminal Linux e você passa a ter o mesmo ambiente de programação que os profissionais.

Experimente digitar `ls` e pressione Enter. Vai listar os arquivos na pasta atual (ainda não devem ser muitos).

## Usar o WSL a partir do VS Code

Se você tiver o [VS Code instalado](/guides/installing-vscode), ele pode se conectar ao WSL para o seu editor e o seu terminal Linux funcionarem em conjunto:

1. Abra o VS Code.
2. Abra o painel **Extensions** (o ícone com quatro quadrados no lado esquerdo, ou Ctrl+Shift+X), busque por **WSL** e instale a extensão criada pela Microsoft.
3. Pressione Ctrl+Shift+P, digite "WSL" e escolha **WSL: Connect to WSL**. O VS Code reabre, conectado ao Ubuntu.

A partir de agora, qualquer terminal que você abrir no VS Code (menu Terminal e, a seguir, New Terminal) é um terminal Linux. Esta é a configuração que recomendamos para os demais guias.

## Se algo der errado

O problema mais comum é um erro que menciona a **virtualização** (ou "VT-x", "AMD-V" ou "plataforma de máquina virtual"). O WSL depende de um recurso de hardware que está desligado em alguns computadores. Ligá-lo significa alterar uma configuração na BIOS do computador, que varia conforme o fabricante. Busque o nome do modelo do seu notebook junto com "enable virtualisation" para obter instruções, ou pergunte no <a href="https://forum.jiki.io" target="_blank" rel="noopener noreferrer">nosso fórum</a> e nós ajudamos.

Para qualquer outro problema, o <a href="https://learn.microsoft.com/en-us/windows/wsl/install" target="_blank" rel="noopener noreferrer">guia oficial de instalação do WSL</a> da Microsoft tem uma seção de resolução de problemas e, mais uma vez, o fórum está sempre disponível.
