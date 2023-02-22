### NodeJS + EJS

Para criar um arquivo EJS há duas maneiras, fazendo inicialmente no HTML e depois renomear o arquivo para `.EJS`, e instalar o pacote do EJS comando abaixo:
```
npm install ejs
```

E após renomear o arquivo para ejs ele deixára de funcionar na web, e para podermos acessa-lo iremos precisar de um servidor, que utilizaremos o `express`, e basta instlar o pacote, comando abaixo:
```
npm install express
```

Após ter instalado, iremos criar um arquivo js chamado `server` e inserir alguns codigos.
```js
const express = require('express'); // fazer o require do express
const app = express();

app.set("view engine", "ejs"); // a ferramenta para renderizar o HTML e o EJS

app.get("/", function(req, res){ // criando as rotas
    res.render("index")
})

app.get("/sobre", function(req, res){
    res.render("about")
})

app.listen(/*Numero da sua porta aqui*/);
console.log("rodando"); // logzinho so saber que está rodando
```

Para fazer o express rodar certinho e necessário que respeite algumas regras, como os arquivos `.EJS` fiquem numa pasta `views` no escopo principal do seu repositório, não faça igual esse :(  
O ser pode ficar em qualquer lugar, e ai basta rodar o seguinte comando:
```
node //Trilha pro arquivo server

ex:
node server.js
```

#### Seprando contéudos
Uma forma interessante de trabalhar com o express e seprar cada item do contéudo em um módulo, e reutiliza-lo em páginas que esse módulo se reprete.

Após separarmos os contéudos, vamos no arquivo que queremos utilizar e para que funcione precisamos de uma `tag` especial que funciona apenas no EJS, que seria `<%- include('//Nome do arquivo'); %>` Ai basta ir inserindo o que deseja na página.

**Uma dica:**
Alterações em arquivos EJS nos não precisamos parar o nosso servidor, entretanto arquivos JS e necessário que "reinicie" o seu servidor local.

Ai caso queira parar o servidor, basta apenas digitar `CTRL + C`.

#### Trocando as páginas
Trocar as páginas e relativamente simples, pois temos duas opções  
    1. Fazer botões que acabam trocando a rota
    2. Mudar manualmente, inserindo o nome que você colocou no arquivo do js

