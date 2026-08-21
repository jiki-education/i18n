---
title: "Noções básicas de HTML"
excerpt: "O que é realmente uma página web, como ela é construída e as etiquetas que você vai usar para estruturar tudo o que criar na web."
tags: ["front-end-basics"]
seo:
  description: "Um guia de HTML para iniciantes. Aprenda o que é o HTML, como se estrutura uma página web com um cabeçalho e um corpo, e as etiquetas mais importantes para conhecer."
  keywords: ["html", "noções básicas de html", "aprender html", "etiquetas html", "estrutura de páginas web", "iniciantes"]
en_md5: a3a8af4d009d64ef8339dc7e2661ef82
---

## Introdução

Neste guia, quero falar um pouco sobre o que é realmente uma página web e como ela funciona. Vamos nos ater às coisas mais básicas. Se você já sabe um pouco de HTML, isso provavelmente vai te parecer bem básico. Se não souber, deve ser uma boa introdução para tudo o que vem a seguir.

## O que é realmente uma página web

Uma página web é apenas um arquivo de texto. Quando você visita um site, o seu navegador recebe um arquivo HTML, lê o arquivo e o desenha para criar a página que você vê.

Você pode conferir isso agora mesmo. Vá a qualquer site, clique com o botão direito do mouse em qualquer parte da página e escolha **Ver código-fonte da página** (_View Page Source_ em inglês). É isso que é o HTML. Num site grande, vai parecer avassalador, um monte enorme de coisas, mas tudo é feito a partir do mesmo punhado de blocos de construção que vamos ver a seguir.

HTML é a sigla de **HyperText Markup Language**. “Markup” significa apenas que pegamos um texto e o marcamos com informação extra sobre o que é cada parte. O navegador, seja o Chrome ou outro, lê essas marcações e as usa para decidir como colocar tudo na tela.

## Etiquetas

O HTML é famoso pelas **etiquetas**, que têm um `<` no início e um `>` no fim. Entre esses sinais de maior e menor temos aquilo a que a etiqueta se refere. Depois temos algum conteúdo e, em seguida, uma etiqueta de fechamento, que é igual à de abertura, mas com uma barra `/`.

Vamos ver um exemplo:

```html
<p>Hello there.</p>
```

O `p` vem de “paragraph”, a palavra inglesa para parágrafo. Ao escrever isso, estamos dizendo ao navegador que queremos que ele desenhe um parágrafo na tela e que o texto desse parágrafo é “Hello there.”

As etiquetas também podem carregar informações extra, chamadas **atributos**, que ficam dentro da etiqueta de abertura. Um link é um bom exemplo:

```html
<a href="https://jiki.io">Visit Jiki</a>
```

Para criar um link, usamos a etiqueta `a` (que vem de “anchor”, âncora em inglês, por [razões históricas meio estranhas](https://thehistoryoftheweb.com/brief-history-hypertext/)). Um link normalmente tem um atributo `href`, que indica para onde o link aponta, e o texto entre as etiquetas é aquilo em que você clica.

Algumas etiquetas não envolvem conteúdo nenhum, então não têm etiqueta de fechamento. Uma imagem é o exemplo clássico:

```html
<img src="photo.jpg" alt="A photo of me on a mountain" />
```

O `img` vem de “image”, imagem em inglês. O atributo `src` aponta para o arquivo da imagem, e o atributo `alt` descreve a imagem para pessoas que usam leitores de tela. É também o que aparece se a imagem não carregar.

## A anatomia de uma página

Todas as páginas web têm o mesmo esqueleto, os mesmos ossos. Aqui está a página **válida** mais simples que você pode criar (você pode criar páginas inválidas com menos HTML, que o navegador desenha do mesmo jeito, mas vamos começar do jeito que queremos continuar, nos comportando como desenvolvedores responsáveis!):

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Jeremy Walker</title>
  </head>
  <body>
    <h1>Jeremy Walker</h1>
    <p>I build things on the web.</p>
  </body>
</html>
```

Vamos lê-la do início.

A linha `<!doctype html>` diz ao navegador que este é um documento HTML moderno. É uma linha obrigatória. Escreva-a uma vez no topo e não pense mais nisso.

A etiqueta `html` é o elemento raiz que envolve todo o documento. O atributo `lang="en"` diz aos navegadores e aos motores de busca que a página está escrita em inglês.

Dentro dela, temos duas partes: o **cabeçalho** e o **corpo**.

### O cabeçalho

O cabeçalho é tudo o que **não** aparece na tela. Trata-se de metadados, e metadados são apenas dados sobre a página, não aquilo que você vê. No nosso exemplo, há duas coisas lá dentro:

- `<meta charset="UTF-8" />` indica o conjunto de caracteres que a página usa. O UTF-8 é o conjunto de caracteres padrão e cobre praticamente tudo: letras latinas, caracteres acentuados, outros alfabetos e até emojis. Se você colar um emoji no seu HTML, é esta linha que faz com que ele seja exibido corretamente. Inclua-a sempre.
- `<title>` define o texto que aparece no topo da aba do navegador. Também é o que os motores de busca usam como título da sua página. Você vai se pegar pensando muitas vezes, enquanto programa, no que quer que apareça ali quando alguém tem vinte abas abertas.

É comum você ver mais uma linha no cabeçalho, que vale a pena reconhecer:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Isso diz aos celulares para exibirem a página num tamanho adequado, em vez de mostrarem ela toda encolhida. Por enquanto, não precisamos nos preocupar mais com isso. Inclua-a e siga em frente.

### O corpo

O corpo é tudo o que você realmente vê, tudo no grande espaço retangular embaixo das abas e da barra de endereço. Todos os títulos, parágrafos, imagens e links vivem dentro do corpo. O resto deste guia é sobre as etiquetas que você coloca lá.

## index.html

Antes de passarmos às etiquetas, há mais uma coisa que vale a pena saber. Existe uma convenção muito antiga de que um arquivo chamado `index.html` é a primeira página de um site. Se você entrar num domínio sem acrescentar nada depois, o site verifica se existe um arquivo chamado `index.html` e, se existir, te mostra o conteúdo dele. Não há nada de mágico no arquivo em si. É apenas uma norma que quase todos os sites seguem, então a sua página inicial deve estar num arquivo com esse nome.

## As etiquetas que você vai usar primeiro

Você consegue criar uma página realmente útil com menos de dez etiquetas. Vamos vê-las, mais ou menos na ordem em que você vai usá-las.

### Títulos

Os títulos têm seis níveis, de `h1` até `h6`:

```html
<h1>Jeremy Walker</h1>
<h2>About me</h2>
<h3>My photography</h3>
```

O `h1` é o título principal da página e, normalmente, só deve existir um. Use `h2` para títulos de seção, `h3` para subseções dentro dessas e assim por diante. Como um `h1` é um título de nível um, o navegador sabe que deve deixá-lo um pouco maior e em negrito.

Escolha os níveis dos títulos pelo significado, não pelo tamanho. Eles dão à sua página uma estrutura, um pouco como os capítulos e as seções de um livro.

### Parágrafos

A etiqueta `p` marca um parágrafo de texto, e quase todas as palavras de qualquer página vivem dentro de uma:

```html
<p>I have been building things on the web for thirty years.</p>
<p>These days I spend most of my time working on Jiki.</p>
```

Cada parágrafo tem a sua própria etiqueta, e o navegador adiciona espaço entre eles automaticamente.

### Listas

Há dois tipos de lista. Uma **lista não ordenada** (`ul`) te dá marcadores, e uma **lista ordenada** (`ol`) te dá números. Dentro de qualquer uma, cada entrada é um **item de lista** (`li`):

```html
<ul>
  <li>Photography</li>
  <li>Podcasting</li>
  <li>Teaching people to code</li>
</ul>
```

Troque o `ul` por um `ol` e os marcadores passam a 1, 2, 3.

### Links

Os links são o que fazem da web uma teia. A etiqueta `a` transforma qualquer coisa em algo clicável:

```html
<p>You can find my code on <a href="https://github.com/ihid">GitHub</a>.</p>
```

Os links podem apontar para outros sites ou para outras páginas do seu próprio site. Se você tiver um `resume.html` ao lado do seu `index.html`, pode criar um link para ele com `<a href="resume.html">My resume</a>`.

### Imagens

A etiqueta `img` coloca uma imagem na página:

```html
<img src="images/me.jpg" alt="Jeremy standing on a hill in the Lake District" />
```

O `src` pode ser um arquivo do seu site ou um endereço web completo. Preencha sempre o texto `alt` com uma descrição verdadeira da imagem.

### Ênfase

Duas pequenas etiquetas permitem que você dê ênfase a palavras dentro do seu texto. `strong` marca algo como importante, e os navegadores mostram isso em negrito. `em` marca destaque, e os navegadores mostram isso em itálico:

```html
<p>The struggle is where the <strong>learning</strong> happens, so <em>write your own solutions</em>.</p>
```

## Dar estrutura à sua página

As etiquetas que vimos até agora descrevem partes individuais do conteúdo. Há uma segunda família de etiquetas que descrevem as regiões de uma página. Costumam se chamar **etiquetas semânticas**, porque dão significado a cada área em vez de mudarem a aparência de algo:

- `header` envolve a área superior da página, normalmente o nome do seu site e o logotipo.
- `nav` envolve a sua navegação, o conjunto de links para as outras páginas do seu site.
- `main` envolve o conteúdo principal da página. Só deve existir um.
- `section` agrupa um bloco distinto de conteúdo, normalmente com o seu próprio título.
- `article` envolve uma peça autônoma, como um post de blog ou uma notícia.
- `footer` envolve a área inferior, normalmente os direitos autorais e os links de contato.

Uma página inicial pessoal que use estas etiquetas pode ficar com uma forma parecida com esta:

```html
<body>
  <header>
    <h1>Jeremy Walker</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="resume.html">Resume</a>
      <a href="portfolio.html">Portfolio</a>
    </nav>
  </header>
  <main>
    <section>
      <h2>About me</h2>
      <p>...</p>
    </section>
    <section>
      <h2>My projects</h2>
      <p>...</p>
    </section>
  </main>
  <footer>
    <p>Get in touch at jeremy@example.com.</p>
  </footer>
</body>
```

Nenhuma destas etiquetas, por si só, muda muito a aparência da sua página. Então, para que ter esse trabalho? Porque uma estrutura com significado ajuda tudo o que lê a sua página sem ser uma pessoa olhando para uma tela. Os leitores de tela usam estas etiquetas para permitir que usuários cegos pulem diretamente para a navegação ou para o conteúdo principal. Os motores de busca as usam para entender o assunto da sua página. E quando mais tarde você quiser dar estilo à sua página, tê-la bem organizada torna tudo muito mais fácil.

Se um pedaço da página não encaixar em nenhum desses significados, há dois contêineres genéricos: `div` para um bloco de conteúdo e `span` para algumas palavras dentro de um texto. Eles não significam absolutamente nada, e é exatamente por isso que você deve usar primeiro as etiquetas com significado.

## Mais etiquetas para reconhecer

Você não precisa decorá-las, mas vai encontrá-las quando olhar para as páginas de outras pessoas, então vale a pena saber que existem:

- `blockquote` para uma citação de outro lugar.
- `code` para um fragmento de código dentro do texto, e `pre` para um bloco de texto pré-formatado.
- `table`, com `tr` para cada linha e `td` para cada célula, para dados realmente tabulares.
- `form`, `input`, `label` e `button` para coletar dados inseridos pelos visitantes.
- `video` e `audio` para incorporar multimídia.
- `br` para uma quebra de linha dentro do texto. Use-a raramente. Se você quiser um novo parágrafo, use uma nova etiqueta `p`.

No total, há mais de cem etiquetas, mas as que estão neste guia cobrem a grande maioria do que você vai ver e escrever. Quando você encontrar uma que não reconheça, busque-a no [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), que é a referência usada pelos profissionais.

## Para onde ir a seguir

A melhor forma de consolidar tudo isso é você construir algo. Crie um `index.html`, dê a ele o esqueleto deste guia e estruture uma página sobre você com títulos, parágrafos, listas e links. Depois abra-a no seu navegador e dê uma olhada no que você fez.

Quando você se sentir confortável, ganhe o hábito de ver o código-fonte dos sites que você visita. Você vai começar a reconhecer as etiquetas em todo lugar e vai ver que até os sites mais sofisticados são construídos exatamente com as mesmas peças que você acabou de aprender.

A sua página vai ter um aspecto muito simples por enquanto, e não há problema nenhum. O HTML dá estrutura a uma página. Torná-la bonita é tarefa do CSS, e é para lá que vamos a seguir.
