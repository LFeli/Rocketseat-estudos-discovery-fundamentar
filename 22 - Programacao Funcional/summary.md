### O que e a programação funcional?
E um paradigma assim como o paradigma orientado a objeto. Uma definição pode se usar que é "uma maneira de resolver problemas"

- Ele está envolvidos em funções (abstração de um problema complexo em pequenas funções)
- So modificam dados que estão no escopo da função
- Pequenas e bem especificas 

**Características principais:**
- Um `dado` (Ou mais) `entra em uma função` e `um novo dado sai` dessa função
- Não altera o dado
- Não guarda estado

**Linguagens funcionais:**
- JS (multiparadigma)
- PHP (multiparadigma)
- Elixir
- Haskell

Entre outras...

**Pontos positivos:**
- Fácil manutenção
- Fácil para testes
    - Funções isoladas e consistentes
- Códigos mais confiáveis

### Programação Imperativa vs Declarativa

**Imperativa:** 
- O código e `pensando e gerado em sequência`
- O código é pensando como um passo a passo, como uma `receita de bolo`
- Uma coisa depende da outra
- O estado de um dado e `alterado constantemente` causando mutação nas variáveis
- `Orientação a objetos` é um tipo de paradigma imperativo

**Declarativa:**
- O código gerado e para `fazer algo`, não importa `como`
- `O que fazer ` e não **como fazer** 
- Não há necessidade de um `passo a passo` no código
- `Programação funcional` e um tipo de paradigma declarativo


### Imutabilidade
- Uma variável não pode variar
- Se você precisa mudar uma variável, você não muda, você `cria uma nova`

### Stateless
- Não guarda `estado`
- A função so conhece os dados entregues a ela
- A resposta não pode variar

### Funções
**Funções independentes:**
- Devera retornar ao menos `1 argumento`
- Deverá `retornar` algo
- Nada que acontecer lá dentro afeta o mundo externo
    - Dados imutáveis
    - Não guarda estado (Stateless)
- Não faremos o uso de loops (for, while), mas se houver a necessidade de tal, usaremos recursão (a função chama ela mesma)

**Funções puras:**
- Não deverá `depender de nenhum dado externo` a não ser o que foi passado como argumento
- Não deverá sofrer `nenhuma interferência` de mundo externo a ela
- Se o argumento é o mesmo. `O retorno não poderá ser diferente` quando a função for chamada novamente 
- Não terá `nenhum efeito colateral` no seu código
    - Não irá modificar nenhum dado
    - Não irá guardar nenhum estado


**First class function:**
- Podem estar em qualquer lugar, inclusive como parâmetro de outras funções
- A função poderá ser entendida como variável 

**Higher Order function**
- Funções que `recebem funções` como argumentos
- Funções que poderão `retornar outras funções`

**Composição de funções:**
- Um `encadeamento` de funções
- Uma função que retorna um dado e vai para outra função, que retorna um dado que vai pra outra função....

