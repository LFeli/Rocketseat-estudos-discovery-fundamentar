### Conceitos do HTTP

Ele foi construído para ser lido de uma maneira simples e legível por qualquer pessoa, e ele é feito por cliente e servidor.

**Stateless:**  
Ele não guarda estado.

- Não guarda informações
- Não existe relação entre conexões
- Sessões
    - Cookies
    - Local storages
    - Session storages

**Extensivel:**   
Através de cabeçalhos, podemos fazer diversas trocas de informações entre o cliente-servidor, conforme a necessidade.

- Headers
- Body


### Cliente
O cliente e o `User Agente`, na maior parte das vezes o próprio browser porém nesse estudo e o cURL.

- Ele é a entidade que da inicio na comunicação

Aonde o cliente irá fazer `pedidos` ao servidor. Esses pedidos são feitos através de ações:
- GET 
- POST
- PUT
- DELETE 

### Servidor
Se apresenta como um maquina em algum lugar do mundo que esta preparada para ouvir e processar os dados. Ele e o responsável por dar a `resposta`.


### Proxies
São um represente, eles ficam entre o cliente e o servidor, ajudando no transporte de dados e tem possíveis funções.

Alguns exemplos seriam: 
- Cache
- Filtro (Tipo um antivirus ou controle parental)
- Load Balancing (Distribuição de cargas)
- Autenticação
- Autorização 

Entre outras funções.