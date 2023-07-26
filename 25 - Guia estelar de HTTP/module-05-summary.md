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