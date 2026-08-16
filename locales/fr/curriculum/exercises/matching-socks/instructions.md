---
title: "Chaussettes assorties"
description: "Trouve les paires de chaussettes réparties dans deux paniers de linge."
en_md5: 83ac75dda52f42ed411bb64a715c6bf2
---

Peu de choses dans la vie sont plus agaçantes qu'une chaussette orpheline dont on ne retrouve pas la partenaire. Alors un beau jour, tu décides enfin de mettre de l'ordre dans ces chaussettes !

Tu sors tous les vêtements propres de tes tiroirs et tu les mets dans un panier. Puis tu pars fouiller sous chaque meuble et derrière chaque coussin pour dénicher les vêtements qui traînent, et tu les mets dans un second panier, celui du linge sale.

Te voilà avec deux paniers, et tu veux les passer en revue pour déterminer si chaque chaussette a sa paire ou non.

Écris une fonction appelée `matchingSocks` (chaussettes assorties). Elle prend deux entrées, le panier propre et le panier sale, toutes deux sous forme de tableaux de _strings_. Renvoie un tableau de toutes les paires de chaussettes.

Par exemple :

- Si le panier propre contient : `["left blue sock", "green sweater"]`
- Et que le panier sale contient : `["blue shorts", "right blue sock", "left green sock"]`
- Tu dois renvoyer `["blue socks"]`

Les descriptions suivent ces règles :

- Elles sont toujours en minuscules.
- Elles se composent toujours d'un ou plusieurs mots séparés par des espaces.
- Pour les objets qui vont par paire, elles commencent toujours par `"left "` ou `"right "`
