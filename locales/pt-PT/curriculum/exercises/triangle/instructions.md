---
title: "Triângulo"
description: "Classifica um triângulo como equilátero, isósceles ou escaleno."
en_md5: 15574e7bfbdfaffbd935bf6bba258e63
---

A tua tarefa é criar uma função que verifique se um triângulo é equilátero, isósceles, escaleno ou inválido.

### Triângulos

- Um triângulo _equilátero_ tem os três lados com o mesmo comprimento.
- Um triângulo _isósceles_ tem dois lados com o mesmo comprimento.
- Um triângulo _escaleno_ tem todos os lados com comprimentos diferentes.

Para um triângulo ser válido:

- Todos os lados têm de ser maiores do que 0
- Se somares dois lados quaisquer, a soma tem de ser maior do que o terceiro lado.

### A função

A função tem de se chamar `determineTriangleType` (determina o tipo de triângulo). Tem de receber três parâmetros de entrada, que serão números correspondentes aos três lados do triângulo. Tem de devolver um dos valores `"invalid"`, `"equilateral"`, `"isosceles"` ou `"scalene"`.
