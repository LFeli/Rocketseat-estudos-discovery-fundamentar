## Criando e adicionando elementos no html

Para criarmos um elemento via JS e bem simples, basta utilizar a seguinte sintaxe:
```js
document.createElement('elemento')
```

Ja para adicionarmos ao nosso HTML precisamos pegar um ponto, por exemplo o body e depois utilizaremos a seguinte sintaxe:
```js
determinadoPonto.append(elemento)
```

O **append** irá adicionar no final do documento, diferente do **prepend** que vai adicioanr no início do documento.


#### insertBefore
Um método para adicionarmos elementos antes de um determinado local, para esse método são necessarios dois parâmetros. O elemento que irá ser adicionado e o segundo parâmetro e o nó de refêrencia.
```js
determinadoPonto.insertBefore(elementoAdd, elementBefore)
```