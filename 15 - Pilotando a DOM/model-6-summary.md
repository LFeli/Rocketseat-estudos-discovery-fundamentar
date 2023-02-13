## Módulo 6

### Eventos

#### Adicionando elementos via HTML

Para adicionarmos um evento a algum elemento, nos precisamos e claro do elemento em si e há duas maneiras de usar. A primeira no próprio HTML utilizando `on` e selecionar o evento que quer, como `onClick`, `onDrag`, `onPointerDown` etc.

#### Eventos de teclado

Para eventos de teclados e recomendados que use um input pois aceita a utilização do teclado, sobre os eventos precisamos que tenha coletado o input via JS e escolher o tipo de evento de teclado.

Abaixo um exemplo:  
```js
input.okeypress = function(){}
```

#### Adicionando eventos via JS

Para adicionar via JS precisamos antes capturar nosso elemento, após isso iremos adicionar `.AddEventListener` para que ele possa ouvir, porém essa tag e uma função e requer a passagem de dois argumentos.

```js
    h1.addEventListener('Evento', 'Função')
```

Há uma segunda maneira de adicionar elementos via JS, porém ela tem um pequena problema que caso precise passar a mesma tag várias vezes com argumentos diferentes e que irá semprer sobrescrever a anterior.

```js
h1.onClick = function(){
    'Seu código'
}
```

#### Argumento Event
O event pode exebir várias propriedades so evento disparado, como teclas, posição de cursor, quem e o alvo que está disparando o evento e muito mais, e uma sintaxe e simples:
```js
elemento.evento = function(event){
    console.log(event)
}
```