## Módulo 2

### Propriedades dos Flex Container

#### Direção dos itens 
- Flex e uma dimensão (Horizontal e Vertical)
- Podemos mudar a direção com `flex-direction`
- Valores: (row | row-reverse | column | column-reverse)

#### Multiplas linhas

`Flex-wrap`
- Podemos usar multi linhas
- Cada nova linha e um flex container

#### Direção e mutli linha em uma única propriedade

`flex-flow`
- shorthand
- flex-direction || flex-wrap

Sintaxe:
```css
flex-flow: column wrap;
```

#### Alinhamento dos itens do eixo principal
`justify-content`
- Alinhamento dos elementos dentro do container
- Distribuição dos elementos
- Valores: (flex-start, flex-end, center, space-around, space-between, space-evenly)

#### Alinhamento dos itens do eixo cruzado
`align-items`
- Valores: (stretch | flex-start | flex-end | center)

#### Espaço entre os elementos
`gap`
- Valore: (px, pt, %, em, rem)