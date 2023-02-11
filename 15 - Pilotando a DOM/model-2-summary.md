## Manipulando conteúdo

#### textContent
Esse método serve para alterarmos ou virifircamos um conteúdo de texto, sua sintaxe e a seguinte:
```js
element.textContent = "Seu texto bem aqui"
```

#### InnerText
Trocar o texto interno do seu elemento HTML. sintaxe:
```js
element.innerText = "Seu texto bem aqui"
```

#### InnerHTML
Trocar o conteúdo HTML interno e podendo colocar mais itens HTML, sintaxe:
```js
element.innerHTML = "Seu HTML aqui"
```

#### Value
Podemos tanto retornar um valor de um value, quanto atribuir um valor para o value, sua sintaxe e a seguinte:
```js
element.value = "Atribuir um valor"

console.log(element.value) //Retornando um valor
```

#### Manipulando atributos
Na pratica utilizamos dois métodos, e possível trabalhar com qualquer tipo de atributo.
```js
.setAttribute('tipoDoAtributo', 'nomeDoAtributo') // Setar atributo

.removeAttribute('atributoAqui') // Remover atributo
```