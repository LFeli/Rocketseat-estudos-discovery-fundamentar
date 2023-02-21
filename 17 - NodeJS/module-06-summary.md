### Timers

Uma maneira de trabalhar com tempo dentro do NodeJS.

#### setTimeOut

Irá rodar uma função depois de X milisegundos. A sintaxe dessa função e bem simples:
```
setTimeOut(função, tempo);
``` 

A `função` ela e considerada uma **callback**, pois depois de determinado tempo ela vai ser chamada novamente.

#### clearTimeOut

Vai cancelar um TimeOut, sua sintaxe e a seguinte:
```
clearTimeOut(timer);
```

#### setInterval

Irá rodar uma função indefinidamente, após x milisegundos

Sintaxe:
```
setInterval(função, timeOut);
```

Caso não saiba como parar um arquivo, basta apertar `CTRL + C`.

#### clearInterval

Serve para cancelar um setInterval que foi registrado, sintaxe:
```
clearInterval(timer);
```