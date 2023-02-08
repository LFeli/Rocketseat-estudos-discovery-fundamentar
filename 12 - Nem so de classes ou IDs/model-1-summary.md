## Modulo 1

### Seletores

Conecta um elemento HTML com o CSS

#### Tipos

- Element Selector
    - Todos elementos do HTML
    - Para acessa basta digitar o nome da tag, ex:  ```span```
- ID Selector
    - Um elemento que tenha o atributo ```id```
    - Cada ID deve ser único
    - Para acessar e preciso adicionar uma Hashtag antes do nome do ID, ex: ```#content```
- Class Selector
    - Elementos que tenha o atributo **class**
    - Podemos ter uma ou mais classes se repetindo
    - Para acessar basta por um ponto antes do nome da classe, ex: ```.tittle```
- Attribute Selector
    - Um elemento que tenha algum atributo específico
    - Acessado por uma par de chaves, ex: ```[tittle]```
- Pseudo-class Selector
    - Elementos que tenham um estado específico.
    - normalmente acessado por dois pontos.

#### Multiplos elementos

Para aplicarmos a mesma estilização em varios elementos, nos usamos virgula e o nome do elemento, ex: ```h1, h2, h3```

---

### Combinators

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar estilização.

#### Descedant combinator
- Identificado por um espaço entre os seletores
- Busca um elemento dentro do outro
```css
body article h2 {
}
```

#### Child combinator
- Identificado pelo sinal de `>` entre dois seletores
- Seleciona somente o elemento  que é filho direto do pai
- Elementos depois do filho direto serão desconsiderado

```css
body > ul > li {
}
```

#### Adjacent sibiling combinator
- Indentificado pelo sinla de `+` entre dois seletores
- Seleciona apenas o elemento do lado direito que e irmão direto na hierarquia

```css
h1 + p{
}
```

#### General sibiling combinator
- Indentificado pelo sinal de `~` entre dois seletores
- Seleciona todos os elementos irmãos

```css
h1 ~ p{   
}
```