---
title: "Noções básicas de HTML"
excerpt: "O que é realmente uma página web, como é construída e as etiquetas que vais usar para estruturar tudo o que criares na web."
tags: ["front-end-basics"]
seo:
  description: "Um guia de HTML para principiantes. Aprende o que é o HTML, como se estrutura uma página web com um cabeçalho e um corpo, e as etiquetas mais importantes a conhecer."
  keywords: ["html", "noções básicas de html", "aprender html", "etiquetas html", "estrutura de páginas web", "principiantes"]
en_md5: a3a8af4d009d64ef8339dc7e2661ef82
---

## Introdução

Neste guia, quero falar um pouco sobre o que é realmente uma página web e como funciona. Vamos cingir-nos às coisas mais básicas. Se já sabes algum HTML, isto provavelmente vai parecer-te mesmo básico. Se não souberes, deve ser uma boa introdução para tudo o que vem a seguir.

## O que é realmente uma página web

Uma página web é apenas um ficheiro de texto. Quando visitas um site, o teu navegador recebe um ficheiro HTML, lê-o e desenha-o para criar a página que vês.

Podes confirmar isto agora mesmo. Vai a qualquer site, clica com o botão direito do rato em qualquer parte da página e escolhe **Ver código-fonte da página** (_View Page Source_ em inglês). É isso que é o HTML. Num site grande, vai parecer avassalador, uma carga enorme de coisas, mas é tudo feito a partir do mesmo punhado de blocos de construção que vamos ver a seguir.

HTML é a sigla de **HyperText Markup Language**. «Markup» significa apenas que pegamos em texto e marcamo-lo com informação extra sobre o que é cada parte. O navegador, seja o Chrome ou outro, lê essas marcações e usa-as para decidir como colocar tudo no ecrã.

## Etiquetas

O HTML é famoso pelas **etiquetas**, que têm um `<` no início e um `>` no fim. Entre esses sinais de menor e maior temos aquilo a que a etiqueta se refere. Depois temos algum conteúdo e, em seguida, uma etiqueta de fecho, que é igual à de abertura, mas com uma barra `/`.

Vamos ver um exemplo:

```html
<p>Hello there.</p>
```

O `p` vem de «paragraph», a palavra inglesa para parágrafo. Ao escrever isto, estamos a dizer ao navegador que queremos que desenhe um parágrafo no ecrã e que o texto desse parágrafo é «Hello there.»

As etiquetas também podem transportar informações extra, chamadas **atributos**, que ficam dentro da etiqueta de abertura. Uma ligação é um bom exemplo:

```html
<a href="https://jiki.io">Visit Jiki</a>
```

Para criar uma ligação, usamos a etiqueta `a` (que vem de «anchor», âncora em inglês, por [razões históricas ligeiramente estranhas](https://thehistoryoftheweb.com/brief-history-hypertext/)). Uma ligação tem normalmente um atributo `href`, que indica para onde a ligação aponta, e o texto entre as etiquetas é aquilo em que clicas.

Algumas etiquetas não envolvem conteúdo nenhum, por isso não têm etiqueta de fecho. Uma imagem é o exemplo clássico:

```html
<img src="photo.jpg" alt="A photo of me on a mountain" />
```

O `img` vem de «image», imagem em inglês. O atributo `src` aponta para o ficheiro da imagem, e o atributo `alt` descreve a imagem para pessoas que usam leitores de ecrã. É também o que aparece se a imagem não carregar.

## A anatomia de uma página

Todas as páginas web têm o mesmo esqueleto, os mesmos ossos. Aqui está a página **válida** mais simples que podes criar (podes criar páginas inválidas com menos HTML, que o navegador desenha na mesma, mas vamos começar como queremos continuar, comportando-nos como programadores responsáveis!):

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

A linha `<!doctype html>` diz ao navegador que este é um documento HTML moderno. É uma linha obrigatória. Escreve-a uma vez no topo e não penses mais nisso.

A etiqueta `html` é o elemento raiz que envolve todo o documento. O atributo `lang="en"` diz aos navegadores e aos motores de busca que a página está escrita em inglês.

Dentro dela, temos duas partes: o **cabeçalho** e o **corpo**.

### O cabeçalho

O cabeçalho é tudo o que **não** aparece no ecrã. Trata-se de metadados, e metadados são apenas dados sobre a página, não aquilo que vês. No nosso exemplo, há duas coisas lá dentro:

- `<meta charset="UTF-8" />` indica o conjunto de carateres que a página usa. O UTF-8 é o conjunto de carateres padrão e cobre praticamente tudo: letras latinas, carateres acentuados, outros alfabetos e até emojis. Se colares um emoji no teu HTML, é esta linha que faz com que seja apresentado corretamente. Inclui-a sempre.
- `<title>` define o texto que aparece no topo do separador do navegador. Também é o que os motores de busca usam como título da tua página. Vais dar por ti a pensar muitas vezes, enquanto programas, no que queres que apareça ali quando alguém tem vinte separadores abertos.

É comum veres mais uma linha no cabeçalho, que vale a pena reconhecer:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Isto diz aos telemóveis para apresentarem a página num tamanho adequado, em vez de a mostrarem toda encolhida. Para já, não precisamos de nos preocupar mais com isto. Inclui-a e segue em frente.

### O corpo

O corpo é tudo o que realmente vês, tudo no grande espaço retangular por baixo dos separadores e da barra de endereço. Todos os títulos, parágrafos, imagens e ligações vivem dentro do corpo. O resto deste guia é sobre as etiquetas que lá colocas.

## index.html

Antes de passarmos às etiquetas, há mais uma coisa que vale a pena saber. Existe uma convenção muito antiga de que um ficheiro chamado `index.html` é a primeira página de um site. Se entrares num domínio sem acrescentar nada a seguir, o site verifica se existe um ficheiro chamado `index.html` e, se existir, mostra-te o seu conteúdo. Não há nada de mágico no ficheiro em si. É apenas uma norma que quase todos os sites seguem, por isso a tua página inicial deve estar num ficheiro com esse nome.

## As etiquetas que vais usar primeiro

Consegues criar uma página realmente útil com menos de dez etiquetas. Vamos vê-las, mais ou menos pela ordem em que as vais usar.

### Títulos

Os títulos têm seis níveis, de `h1` até `h6`:

```html
<h1>Jeremy Walker</h1>
<h2>About me</h2>
<h3>My photography</h3>
```

O `h1` é o título principal da página e, normalmente, só deve existir um. Usa `h2` para títulos de secção, `h3` para subsecções dentro dessas e assim por diante. Como um `h1` é um título de nível um, o navegador sabe que o deve tornar um pouco maior e a negrito.

Escolhe os níveis dos títulos pelo significado, não pelo tamanho. Eles dão à tua página uma estrutura, um pouco como os capítulos e as secções de um livro.

### Parágrafos

A etiqueta `p` marca um parágrafo de texto, e quase todas as palavras de qualquer página vivem dentro de uma:

```html
<p>I have been building things on the web for thirty years.</p>
<p>These days I spend most of my time working on Jiki.</p>
```

Cada parágrafo tem a sua própria etiqueta, e o navegador adiciona espaço entre eles automaticamente.

### Listas

Há dois tipos de lista. Uma **lista não ordenada** (`ul`) dá-te marcadores, e uma **lista ordenada** (`ol`) dá-te números. Dentro de qualquer uma, cada entrada é um **item de lista** (`li`):

```html
<ul>
  <li>Photography</li>
  <li>Podcasting</li>
  <li>Teaching people to code</li>
</ul>
```

Troca o `ul` por um `ol` e os marcadores passam a 1, 2, 3.

### Ligações

As ligações são o que fazem da web uma teia. A etiqueta `a` transforma qualquer coisa em algo clicável:

```html
<p>You can find my code on <a href="https://github.com/ihid">GitHub</a>.</p>
```

As ligações podem apontar para outros sites ou para outras páginas do teu próprio site. Se tiveres um `resume.html` ao lado do teu `index.html`, podes ligar-lhe com `<a href="resume.html">My resume</a>`.

### Imagens

A etiqueta `img` coloca uma imagem na página:

```html
<img src="images/me.jpg" alt="Jeremy standing on a hill in the Lake District" />
```

O `src` pode ser um ficheiro do teu site ou um endereço web completo. Preenche sempre o texto `alt` com uma descrição verdadeira da imagem.

### Ênfase

Duas pequenas etiquetas permitem-te dar ênfase a palavras dentro do teu texto. `strong` marca algo como importante, e os navegadores mostram-no a negrito. `em` marca destaque, e os navegadores mostram-no em itálico:

```html
<p>The struggle is where the <strong>learning</strong> happens, so <em>write your own solutions</em>.</p>
```

## Dar estrutura à tua página

As etiquetas que vimos até agora descrevem partes individuais do conteúdo. Há uma segunda família de etiquetas que descrevem as regiões de uma página. Costumam chamar-se **etiquetas semânticas**, porque dão significado a cada área em vez de mudarem a aparência de algo:

- `header` envolve a área superior da página, normalmente o nome do teu site e o logótipo.
- `nav` envolve a tua navegação, o conjunto de ligações para as outras páginas do teu site.
- `main` envolve o conteúdo principal da página. Só deve existir um.
- `section` agrupa um bloco distinto de conteúdo, normalmente com o seu próprio título.
- `article` envolve uma peça autónoma, como um artigo de blogue ou uma notícia.
- `footer` envolve a área inferior, normalmente os direitos de autor e as ligações de contacto.

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

Nenhuma destas etiquetas, por si só, muda muito a aparência da tua página. Então, para quê dar-se ao trabalho? Porque uma estrutura com significado ajuda tudo o que lê a tua página sem ser uma pessoa a olhar para um ecrã. Os leitores de ecrã usam estas etiquetas para permitir que utilizadores cegos saltem diretamente para a navegação ou para o conteúdo principal. Os motores de busca usam-nas para compreender o assunto da tua página. E quando mais tarde quiseres dar estilo à tua página, tê-la bem organizada torna tudo muito mais fácil.

Se um pedaço da página não encaixar em nenhum desses significados, há dois contentores genéricos: `div` para um bloco de conteúdo e `span` para algumas palavras dentro de um texto. Não significam absolutamente nada, e é exatamente por isso que deves usar primeiro as etiquetas com significado.

## Mais etiquetas a reconhecer

Não precisas de as decorar, mas vais encontrá-las quando olhares para as páginas de outras pessoas, por isso vale a pena saber que existem:

- `blockquote` para uma citação de outro sítio.
- `code` para um fragmento de código dentro do texto, e `pre` para um bloco de texto pré-formatado.
- `table`, com `tr` para cada linha e `td` para cada célula, para dados realmente tabulares.
- `form`, `input`, `label` e `button` para recolher dados introduzidos pelos visitantes.
- `video` e `audio` para incorporar multimédia.
- `br` para uma quebra de linha dentro do texto. Usa-a raramente. Se quiseres um novo parágrafo, usa uma nova etiqueta `p`.

No total, há mais de cem etiquetas, mas as que estão neste guia cobrem a grande maioria do que vais ver e escrever. Quando encontrares uma que não reconheças, procura-a no [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), que é a referência usada pelos profissionais.

## Para onde ir a seguir

A melhor forma de consolidar tudo isto é construíres algo. Cria um `index.html`, dá-lhe o esqueleto deste guia e estrutura uma página sobre ti com títulos, parágrafos, listas e ligações. Depois abre-a no teu navegador e dá uma vista de olhos ao que fizeste.

Quando te sentires confortável, ganha o hábito de ver o código-fonte dos sites que visitas. Vais começar a reconhecer as etiquetas em todo o lado e vais ver que até os sites mais sofisticados são construídos exatamente com as mesmas peças que acabaste de aprender.

A tua página vai ter um aspeto muito simples para já, e não há problema nenhum. O HTML dá estrutura a uma página. Torná-la bonita é tarefa do CSS, e é para lá que vamos a seguir.
