### Events

#### Event Module

É um mecanismo para disparada de eventos, ouvir eventos , fazer alguma ação quando ouvir um evento.

#### Event Emitter
E uma função no estilo classe, que para acessarmos devemos passar a seguinte sintaxe:
```js
const {Event Emitter} = require('events');

const ev =  new EventEmitter();
```

obs: no caso ele é um CORE

#### Mas como emetimos os eventos ?

Para emetirmos um evento basta passarmos a variavel que criamos junto com `.emit('nome do evento')`.

```js
const ev =  new EventEmitter();

ev.emit('evento');
```

Entretanto so estamos emetindo e não há ninguém para ouvir, para isso precisamos colocar um `.on` para que possa receber e essa função tem dois paramêtros.
```
.on('O que ele vai ouvir', Uma função)
```

#### Ouvinod um evento uma única vez

Para fazer um evento uma única vez, ao invés de utilizar o `.on` que sempre vai ficar ouvindo, nos utilizamos o `.once`. Sua sintaxe e a mesma ideia do on.
```
.once('O que ele vai ouvir', Uma função)
```
