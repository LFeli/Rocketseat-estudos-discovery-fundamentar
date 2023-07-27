## Methods

- Define um conjunto de métodos HTTP
- Indica a ação que o cliente deseja operar
- Podem ser chamados de Verbos HTTP
- Cada um possui sua semântica
- Características

Nas característica há dois tipos sendo elas a `Seguro` e a `Idempotente`.

**Seguro:**
- Não altera o estado do servidor
- Somente leitura
- Cliente não solicita alterações
- Não há carga extra para o servidor
- O servidor é responsável em manter o método seguro
- Quais são
    - GET 
    - HEAD
    - OPTIONS

**Idempotente:**
- Ao executar o métodos, a resposta deverá ser sempre a mesma
- Quais são
    - Todos os seguros são idempotentes
    - PUT
    - DELETE
- Status code  poderá ser diferente
- O servidor tem a responsabilidade de retornar dados da mesma maneira
- Essa especificação não é garantia de que todos os servidores irão aplicar o conceito corretamente 
  

Tabela de quando uma operação e performada por varias vezes e tem o mesmo resultado sempre.  
<br>

| HTTP METHODS | IDEMPOTENCE | SAFETY |
| ------------ | ------------| -------|
| GET          | YES         | YES    |
| HEAD         | YES         | YES    |
| PUT          | YES         | NO     |
| DELETE       | YES         | NO     |
| POST         | NO          | NO     |
| PATCH        | NO          | NO     |


### Options
Esse método informa sobre a disponibilidade da requisição. Caso queira testar no cURL basta rodar esse comando.
```bash
curl -X OPTIONS URI -i
```

Sobre suas características ele possui alguns itens bem interessantes:
- Ele é `SEGURO`
- Ele é `IDEMPOTENTE`
- `Não retorna nada de conteúdo do body`, tanto no **request** quanto na **response**
- Não usamos em formulários
- Ele não é `Cacheable`


### GET
O método GET ele serve para `pegar um conteúdo` e `somente recebe dados`. Sobre suas características.

- Seguro: Sim
- Idempotente: Sim
- No body ele não pode enviar no request, porém pode receber no response
- Cacheable: Sim
- Uso em formulários HTML: Sim

### HEAD
Esse método e semelhante ao GET porém recebemos apenas o cabeçalho. Sobre suas características:

- Seguro: Sim
- Idempotente: Sim
- No body ele não pode enviar tanto no request quanto no response
- Cacheable: Sim
- Uso em formulários HTML: Não

Para usarmos no cURL usamos o seguinte comando:
```bash
curl -I OPTIONS URI
```

### POST
O método post significa publicar / cadastrar um Recurso, sobre suas características.

- Seguro: Não
- Idempotente: Não
- No body haverá tanto no request quanto no response
- Cacheable: Pode ser, depende da config do header
- Uso em formulários HTML: Sim

Para usar no cURL e da seguinte maneira:
```bash
curl -d '*body*' -H "*header config*" -X POST URI
```

### PUT
Ele serve para criar ou atualizar um recurso, a diferença dele pro post e que o put e idempotente e há dois status code quando se usa o PUT

**Criação:**  
- Status code 201

**Atualização:**
- Status code 204
- Status code 200

**características**
- Seguro: Não
- Idempotente: Sim
- Body haverá apenas no request
- Cacheable: Não
- Uso em formulários HTML: Não

Para usar como atualizar no cURL e da seguinte maneira:
```bash
curl -d '*body*' -H "*header config*" -X PUT URI
```

### PATCH
Esse método serve para fazer uma modificação parcial de um rescurso. E sua diferença do PUT? o put ele muda o recurso inteiro e o PATCH parcialmente.

**características**
- Seguro: Não
- Idempotente: Não
- Body haverá tanto no request quanto no response
- Cacheable: Não
- Uso em formulários HTML: Não

Para fazer uso no cURL e da seguinte forma:
```bash
// verifica se o servidor recebe o comando PATCH
curl -X OPTIONS URI i


// comando em si
curl -d '*body*' -H "*header config*" -X PATCH URI
```

### Delete
Como o nome já sugere ele remove um recurso, esse em especifico tem alguns status codes diferentes:

**Status Code:**
- 202: Accepted
- 204: No content
- 200: Ok

**características**
- Seguro: Não
- Idempotente: Sim
- Body Pode ser que tenha no request quanto no response
- Cacheable: Não
- Uso em formulários HTML: Não

  
Comando para rodar no cURL:
```bash
curl -X DELETE URI
```