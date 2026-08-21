---
title: "Triângulo"
description: "Classifique um triângulo como equilátero, isósceles ou escaleno."
en_md5: 15574e7bfbdfaffbd935bf6bba258e63
---

Sua tarefa é criar uma função que verifique se um triângulo é equilátero, isósceles, escaleno ou inválido.

### Triângulos

- Um triângulo _equilátero_ tem os três lados com o mesmo comprimento.
- Um triângulo _isósceles_ tem dois lados com o mesmo comprimento.
- Um triângulo _escaleno_ tem todos os lados com comprimentos diferentes.

Para um triângulo ser válido:

- Todos os lados têm que ser maiores do que 0
- Se você somar dois lados quaisquer, a soma tem que ser maior do que o terceiro lado.

### A função

A função tem que se chamar `determineTriangleType` (determina o tipo de triângulo). Tem que receber três entradas, que serão números correspondentes aos três lados do triângulo. Tem que retornar um dos valores `"invalid"`, `"equilateral"`, `"isosceles"` ou `"scalene"`.
