## Iniciando a prática

Para que possa rodar o arquivo JS pelo Node e preciso se atentar a um pequeno detalhe, quando passarmos o comando `node seuArquivo`, e necessário que passe todo caminho.  
ex: 
```js
node node/console.js
```

Não e necessário passar a extensão do arquivo, pois o node ja entende que o que estamos pasando e um arquivo JS.

### O que são e como utilizar módulos ?

`require()`  
E uma maneira de chamar módulos que são nativos ou instalados / criado.

#### Como se cria um módulo pra utilizar no Node?

Para exportamos um módulo basta utilizarmos a sintaxe:
`module.exports = 'conteúdo do seu módulo'`  
Após isso basta utilizar a sintaxe do require passando o caminho.
```js
const myModule = require('./export.js');
````

### Pegando informações de processos
`process` e um objeto que está falando de processos que estão rodando dentro no Node.  

### Passando flags como argumento
Flags são uma maneira de passarmos algo para os processos utilizando `--Algo` e após a flag o contéudo.