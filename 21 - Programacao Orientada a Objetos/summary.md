### Quando se usar a POO?
- Linguagens
- Quando quiser aplicações Padrões de Projetos
- Quando quiser organizar seu código
- Para melhorar seu entendimento do código, pensando em Objetos
- Quando precisar fazer reuso de código
- Para separar a complexidade de código, abstrair e expor de maneiras mais simples
- Para classificar as rotinas de trechos de código

### Conceitos da POO

**Objetos:**  

Todo objeto possui:
- Propriedades e funcionalidades
- Estados e comportamentos
- Atributos e métodos

**Objetos Abstratos vs Mundo real:**
Trazemos as representações de algo do mundo real para Objetos
- Pessoa
- Aluno
- Produto
- Carinho de compra

Porém alguns objetos na programação não são fáceis de identificar pois são abstratos, como por exemplo:
- Autenticação
- Autorização

// Nem todo Obj do mundo real fará parte do seu sistema

**Classes:** 

As classes são como moldes para os objetos. Os objetos são criados a partir de uma classe e muitos deles podem ser feitos da mesma classe.

exemplo: Máquina de biscoito  
- Instâncias


**Encapsulamento:**
- Colocar numa capsula
- Agrupamento de funções e variáveis
- Esconder detalhes de implementação
- Camada de segurança para atributos e métodos


**Herança:**
- Pais e filhos
- Objetos podem herdar, ou estender, características básicas
- Uma cópia de atributos e métodos de outras classes


**Polimorfismo:**
Quando um objeto estende de outro (`herança`) talvez haja a necessidade de reescrever uma ou mais característica (`atributos e métodos`) nesse novo objeto.

Recriaremos então um método (ou mais) da classe herdada

Polimorfismo significa `muitas formas`


**Abstração:**
Template ou Identidade de uma classe que será construída no futuro

- Atributos e métodos podem ser criados na classe de Abstração (Superclasse) MASS
- A implementação dos métodos e atributos, só poderá ser feita na classe que irá herdar essa Abstração