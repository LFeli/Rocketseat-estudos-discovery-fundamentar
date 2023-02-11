## Selecionando elementos

#### getElementById
Método que irá percorrer o DOM e procurar um **ID** específico, sua sintaxe e bem simples:
```js
document.getElementById('nomeDoSeuID');
```

#### getElementByClass
Ideia muito parecida com a do ID porém ele pega todos os elementos que encontrar com a mesma classe e irá colocar em um **HTMLCollection**, sintaxe abaixo:
```js
document.getElementsByClassName('suaClasseAqui');
```

#### getElementByTagName
Mesma ideia do por classe porém agora está procurando pelas tag e também irá gerar um **HTMLCollection**, sintaxe abaixo:
```js
document.getElementsByTagName('suaTagAqui')
```

#### querySelector
O querySelector irá fazer uma busca no DOM e irá pegar o primeiro seletitem que ele achar, porém sua forma de busca e via seletores, igual quando se escreve no CSS, sintaxe abaixo:
```js
document.querySelector('seuSeletorAqui')
```

#### querySelectorAll
Mesma ideia do querySelector porém ele irá pegar todos os itens que achar e montar uma lista de nós(**NodeList**), principal vantagem de um NodeList por exemplo e poder utilizar um ForEach e mostrar todos os elementos da lista, diferente do HTMLCollection que não e possivel.
```js
document.querySelectorAll('seuSeletorAqui')
```


#### Qual deles usar ?
Tudo irá depender do que você precisa em uma determinada situação, pois cada método retorna um tipo de dado.
```
getElementById          (Element)
getElementByClass       (HTMLCollection)
getElementByTagName     (HTMLCollection)
querySelector           (Element)
querySelectorAll        (NodeList)
```
Normalmente são mais utilizados os **querysSelectors** e depois o **getElementById** para algo mais específico, mas novamente tudo irá depender da situação.