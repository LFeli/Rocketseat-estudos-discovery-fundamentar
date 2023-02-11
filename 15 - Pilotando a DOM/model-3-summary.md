## Manipulando estilos e classes

#### Style

Adicionar css via JS, sua sintaxe e a seguinte:
```js
element.style.propiedade = 'valor'
```

#### ClassList
Utilizamos uma lista de métodos que contém classes, dentre esses os mais utilizados são o ```.add('')```, ```.remove('')``` e o ```.toggle('')```. Porém quais são suas diferenças? Simples o **add** irá adicionar uma classe, o **remove** irá remover a classe e o **toggle** irá verificar se a classe existir, caso exista ele vai remover se não adicionar. Sintaxe abaixo:
```js
element.classList.add('classe')
element.classList.remove('classe')
element.classList.toggle('classe')
```