## Navegando pelos elementos

#### parentElement e parentNode
Irá exebir o elemento pai, sintaxe abaixo:
```js
element.parentElement

element.parentNode
```

#### Elementos filhos 

##### childNodes
Retorna um nó com todos os elementos filhos em formato de nodeList, **OBS: o childNodes conta espaços vazios como "text"**, sintaxe abaixo:
```js
element.childNodes
```

##### children
Parecido com o childNodes no sentido de nó porém seu retorno e um HTMLCollection e ja descarta espaços vazios, sintaxe abaixo:
```js
element.children
```

##### firstChild
Irá pegar o primeiro elemento filho que encontrar seja ele espaço vazio ou não, sintaxe abaixo:
```js
element.firstChild
```

##### firstElementChild
Mesma ideia do **firstChild** porém neste ele desconsidera espaços vazios e realmente busca o primeiro elemento que achar, sitaxe abaixo:
```js
element.firstElementChild
```  

##### lastChild
Mesma ideia do **firstChild** porém com uma diferença que agora e o ultimo filho, sintaxe abaixo:
```js
elemnt.lastChild
```

##### lastElementChild
Mesma ideia do **firstElementChild** porém com uma diferença que agora e o ultimo filho, sintaxe abaixo: 
```js
elemnt.lastElementChild
```

#### Elementos irmãos

##### nextSibling
Irá buscar o proximo elemento irmão, levando em contá os espaços vazios ou não, sintaxe abaixo:
```js
element.nextSibling
```

##### nextElementSibling
Mesma ideia do **nextSibiling** porém vai desconsiderar os espaços vazios, sintaxe abaixo:
```js
element.nextElementSibiling
```

##### previousSibling
Mesma ideia do **nextSibling** porém agora pegando com a ordem invertida, sintaxe abaixo:
```js
element.previousSibling
```

##### previousElementSibling
Mesma ideia do **nextElementSibling** porém agora pegando com a ordem invertida, sintaxe abaixo:
```js
element.previousElementSibling
```