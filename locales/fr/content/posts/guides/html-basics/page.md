---
title: "Les bases du HTML"
excerpt: "Ce qu'est vraiment une page web, comment elle est construite, et les balises que tu utiliseras pour structurer tout ce que tu créeras sur le web."
tags: ["front-end-basics"]
seo:
  description: "Un guide du HTML pour débutants. Découvre ce qu'est le HTML, comment une page web est structurée avec un head et un body, et les balises les plus importantes à connaître."
  keywords: ["html", "bases du html", "apprendre le html", "balises html", "structure d'une page web", "débutants"]
en_md5: a3a8af4d009d64ef8339dc7e2661ef82
---

## Introduction

Dans ce guide, je veux te parler un peu de ce qu'est vraiment une page web et de la façon dont elle fonctionne. On va s'en tenir aux choses les plus basiques. Si tu connais déjà un peu le HTML, tout ceci va sans doute te sembler très élémentaire. Sinon, ce sera une bonne base pour tout ce qui vient ensuite.

## Ce qu'est vraiment une page web

Une page web, c'est juste un fichier texte. Quand tu visites un site web, ton navigateur reçoit un fichier HTML, qu'il lit et dessine pour créer la page que tu vois.

Tu peux le vérifier par toi-même dès maintenant. Va sur n'importe quel site web, fais un clic droit n'importe où sur la page, puis choisis **Afficher le code source de la page** (_View Page Source_ en anglais). Voilà le HTML. Sur un gros site, ça paraîtra impressionnant, un vrai fouillis, mais tout est construit à partir de la même poignée de briques de base que l'on va découvrir ci-dessous.

HTML signifie **HyperText Markup Language**, c'est-à-dire langage de balisage hypertexte. « Balisage » veut simplement dire qu'on prend du texte et qu'on le balise avec des informations supplémentaires indiquant ce qu'est chaque morceau. Le navigateur, que ce soit Chrome ou un autre, lit ces marques et s'en sert pour décider comment tout disposer à l'écran.

## Les balises

Le HTML est célèbre pour ses **balises**, qui commencent par un `<` et se terminent par un `>`. Entre ces chevrons se trouve le nom de ce que la balise décrit. Vient ensuite du contenu, puis une balise fermante, identique à la balise ouvrante, mais avec une barre oblique.

Voyons un exemple :

```html
<p>Hello there.</p>
```

Le `p` vient de _paragraph_, le paragraphe. En écrivant cela, on dit au navigateur qu'on veut qu'il affiche un paragraphe à l'écran, et que le texte de ce paragraphe est « Hello there. »

Les balises peuvent aussi porter des informations supplémentaires appelées **attributs**, qui se placent dans la balise ouvrante. Un lien en est un bon exemple :

```html
<a href="https://jiki.io">Visit Jiki</a>
```

Pour créer un lien, on utilise la balise `a` (qui vient de _anchor_, l'ancre, pour [des raisons historiques un peu étranges](https://thehistoryoftheweb.com/brief-history-hypertext/)). Un lien porte normalement un attribut `href`, qui indique où mène le lien, et le texte entre les balises est la partie sur laquelle tu cliques.

Quelques balises n'entourent aucun contenu, donc elles n'ont pas de balise fermante. L'image en est l'exemple classique :

```html
<img src="photo.jpg" alt="A photo of me on a mountain" />
```

Le `img` vient de _image_. L'attribut `src` pointe vers le fichier de l'image, et l'attribut `alt` décrit l'image pour les personnes qui utilisent un lecteur d'écran. C'est aussi ce qui s'affiche si l'image ne se charge pas.

## L'anatomie d'une page

Chaque page web a le même squelette, les mêmes os. Voici la page **valide** la plus minimale que tu puisses créer (on peut créer des pages invalides avec moins de HTML, et le navigateur les affichera quand même, mais commençons comme on veut continuer, en développeurs responsables !) :

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

Lisons-la de haut en bas.

La ligne `<!doctype html>` dit au navigateur qu'il s'agit d'un document HTML moderne. C'est un petit passage obligé. Écris-la une fois en haut du fichier, puis n'y pense plus.

La balise `html` est l'élément racine qui englobe tout le document. L'attribut `lang="en"` indique aux navigateurs et aux moteurs de recherche que la page est écrite en anglais.

À l'intérieur, on trouve deux parties : le **head** et le **body**.

### Le head

Le head, c'est tout ce qui n'apparaît **pas** à l'écran. Ce sont des métadonnées, c'est-à-dire des données sur la page plutôt que des choses que tu vois. Dans notre exemple, il en contient deux :

- `<meta charset="UTF-8" />` indique quel jeu de caractères la page utilise. UTF-8 est le jeu de caractères standard, et il couvre à peu près tout : les lettres latines, les caractères accentués, les autres alphabets, même les emojis. Si tu colles un emoji dans ton HTML, c'est cette ligne qui fait qu'il s'affiche correctement. Inclus-la toujours.
- `<title>` définit le texte qui apparaît en haut de l'onglet du navigateur. C'est aussi ce que les moteurs de recherche utilisent comme titre pour ta page. Une des choses auxquelles tu réfléchiras souvent en codant, c'est ce que tu veux voir là-haut quand quelqu'un a vingt onglets ouverts.

Tu verras souvent une ligne de plus dans le head, qu'il vaut la peine de savoir reconnaître :

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Elle dit aux téléphones d'afficher la page à une taille raisonnable plutôt que complètement dézoomée. On n'a pas besoin d'en savoir plus pour l'instant. Inclus-la et passe à la suite.

### Le body

Le body, c'est tout ce que tu vois réellement, tout ce qui se trouve dans le grand espace sous les onglets et la barre d'adresse. Chaque titre, chaque paragraphe, chaque image et chaque lien vit dans le body. Le reste de ce guide porte sur les balises qui vont à l'intérieur.

## index.html

Avant d'arriver aux balises, il reste une chose à savoir. Une convention très ancienne veut qu'un fichier appelé `index.html` soit la première page d'un site web. Si tu vas sur un domaine sans rien ajouter après, le site web regarde s'il existe un fichier appelé `index.html`, et s'il existe, il t'en montre simplement le contenu. Le fichier n'a rien de magique en soi. C'est juste une norme que presque tous les sites web suivent, donc ta page d'accueil doit vivre dans un fichier qui porte ce nom.

## Les balises que tu utiliseras en premier

On peut construire une page vraiment utile avec moins de dix balises. Voyons-les, à peu près dans l'ordre où tu en auras besoin.

### Les titres

Les titres existent en six niveaux, de `h1` à `h6` :

```html
<h1>Jeremy Walker</h1>
<h2>About me</h2>
<h3>My photography</h3>
```

Le `h1` est le titre principal de la page, et il ne devrait normalement y en avoir qu'un seul. Utilise `h2` pour les titres de section, `h3` pour les sous-sections à l'intérieur, et ainsi de suite. Comme un `h1` est un titre de niveau un, le navigateur sait qu'il doit l'afficher un peu plus grand et un peu plus gras.

Choisis tes niveaux de titre selon le sens, pas selon la taille. Ils donnent à ta page un plan, un peu comme les chapitres et les sections d'un livre.

### Les paragraphes

La balise `p` marque un paragraphe de texte, et presque tous les mots d'une page vivent dans un paragraphe :

```html
<p>I have been building things on the web for thirty years.</p>
<p>These days I spend most of my time working on Jiki.</p>
```

Chaque paragraphe a sa propre balise, et le navigateur ajoute automatiquement de l'espace entre eux.

### Les listes

Il existe deux sortes de listes. Une **liste non ordonnée** (`ul`) te donne des puces, et une **liste ordonnée** (`ol`) te donne des numéros. Dans les deux cas, chaque entrée est un **élément de liste** (`li`) :

```html
<ul>
  <li>Photography</li>
  <li>Podcasting</li>
  <li>Teaching people to code</li>
</ul>
```

Remplace le `ul` par un `ol` et les puces deviennent 1, 2, 3.

### Les liens

Les liens sont ce qui fait du web une toile. La balise `a` transforme n'importe quoi en quelque chose de cliquable :

```html
<p>You can find my code on <a href="https://github.com/ihid">GitHub</a>.</p>
```

Les liens peuvent pointer vers d'autres sites web, ou vers d'autres pages de ton propre site. Si tu as un fichier `resume.html` à côté de ton `index.html`, tu peux créer un lien vers lui avec `<a href="resume.html">My resume</a>`.

### Les images

La balise `img` place une image sur la page :

```html
<img src="images/me.jpg" alt="Jeremy standing on a hill in the Lake District" />
```

Le `src` peut être un fichier de ton propre site ou une adresse web complète. Remplis toujours le texte `alt` avec une vraie description de l'image.

### La mise en valeur

Deux petites balises te permettent de mettre en valeur des mots dans ton texte. `strong` marque quelque chose d'important, et les navigateurs l'affichent en gras. `em` marque une emphase, et les navigateurs l'affichent en italique :

```html
<p>The struggle is where the <strong>learning</strong> happens, so <em>write your own solutions</em>.</p>
```

## Donner de la structure à ta page

Les balises qu'on a vues jusqu'ici décrivent des morceaux de contenu individuels. Il existe une deuxième famille de balises qui décrivent les régions d'une page. On les appelle souvent des **balises sémantiques**, parce qu'elles donnent du sens à chaque zone au lieu de changer l'apparence de quoi que ce soit :

- `header` englobe la zone du haut de la page, généralement le nom de ton site et ton logo.
- `nav` englobe ta navigation, l'ensemble des liens vers les autres pages de ton site.
- `main` englobe le contenu principal de la page. Il ne devrait y en avoir qu'un seul.
- `section` regroupe un morceau de contenu distinct, généralement avec son propre titre.
- `article` englobe un élément autonome, comme un billet de blog ou un article de presse.
- `footer` englobe la zone du bas, généralement le copyright et les liens de contact.

Une page d'accueil personnelle qui les utilise pourrait ressembler à ceci :

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

Aucune de ces balises ne change beaucoup l'apparence de ta page à elle seule. Alors pourquoi s'embêter ? Parce qu'une structure qui a du sens aide tout ce qui lit ta page sans être un humain devant un écran. Les lecteurs d'écran utilisent ces balises pour permettre aux personnes aveugles d'aller directement à la navigation ou au contenu principal. Les moteurs de recherche s'en servent pour comprendre de quoi parle ta page. Et quand tu voudras mettre en forme ta page plus tard, l'avoir bien organisée rendra tout beaucoup plus facile.

Si un morceau de la page ne correspond à aucun de ces sens, il existe deux conteneurs génériques : `div` pour un bloc de contenu et `span` pour quelques mots dans un texte. Ils ne veulent rien dire du tout, et c'est exactement pour ça qu'il faut d'abord chercher parmi les balises qui ont du sens.

## D'autres balises à savoir reconnaître

Tu n'as pas besoin de les mémoriser, mais tu les croiseras en regardant les pages des autres, donc il vaut la peine de savoir qu'elles existent :

- `blockquote` pour une citation venue d'ailleurs.
- `code` pour un extrait de code dans un texte, et `pre` pour un bloc de texte préformaté.
- `table`, avec `tr` pour chaque ligne et `td` pour chaque cellule, pour des données vraiment tabulaires.
- `form`, `input`, `label` et `button` pour recueillir des informations auprès des visiteurs.
- `video` et `audio` pour intégrer des médias.
- `br` pour un saut de ligne dans un texte. Utilise-la rarement. Si tu veux un nouveau paragraphe, utilise une nouvelle balise `p`.

Il existe plus d'une centaine de balises en tout, mais celles de ce guide couvrent la grande majorité de ce que tu verras et écriras. Quand tu en rencontres une que tu ne reconnais pas, cherche-la sur [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), la référence qu'utilisent les professionnels.

## Où aller ensuite

La meilleure façon de faire tenir tout ça, c'est de construire quelque chose. Crée un fichier `index.html`, donne-lui le squelette de ce guide, et structure une page sur toi avec des titres, des paragraphes, des listes et des liens. Puis ouvre-la dans ton navigateur et regarde ce que tu as créé.

Une fois à l'aise, prends l'habitude d'afficher le code source des sites web que tu visites. Tu commenceras à reconnaître les balises partout, et tu verras que même les sites les plus sophistiqués sont construits exactement avec les pièces que tu viens de découvrir.

Ta page va avoir l'air très simple pour l'instant, et ce n'est pas grave. Le HTML donne sa structure à une page. La rendre belle, c'est le travail du CSS, et c'est justement là qu'on va ensuite.
