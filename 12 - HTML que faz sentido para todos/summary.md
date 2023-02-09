### Web semântica

O que é?
- Adicionar siginifcado à uma linguagem
- No caso do HTML, dar siginificado ao conteúdo

> Ao utilizar uma marcação semantica consistente, para indentificar elementos da página nos ajudamos os ```user agents``` também conhecidos como ```navegadores``` a indentificar corretamente os elementos e representa-los.

### HTML 5 Semântico

#### Seções comuns
- header (```cabeçalho```)
- nav (```navegação```)
- main (```conteúdo principal```)
- aside (```barra lateral ```)
- footer (```rodapé```)


##### Header
- Onde utilizar ?
    - Quando no início da página, é visto como global
    - pode ser usados em outros elementos semântico, como article, section
```html
    <section>
        <header>
            Logo 
        </header>
    </section>
```
- Pode se ter multiplos headers
    - Não pode por um header detro de outro header, ou um header em um footer
- Não possui atributos específicos 


##### Nav
Elemento que representa uma sessão da nossa página que aponta para outras páginas ou sessões  

- Pode haver multiplas navs
- Leitores de telas podem utilizar o nav para tomadas de decissões

##### Main
Contéudo unico da página, normalmente colocado logo depois da TAG ```body```.

- Não possui atributos específicos, apenas globais

##### Article
O article constroi blocos de contéudos relacionados

- Não possui atributos específicos, apenas globais  


```html
<body>

    <main>
        <h1>Receitas</h1> // principal
        <p>Essa é uma página de receitas</p>

        <article> // relacionado
            <h2>Receita de torta de maçã</h2>
            <p>Essa é uma receita de torta de maçã</p>
        </article>

        <article>
            <h2>Receita de torta de limão</h2>
            <p>Essa é uma receita de torta de maçã</p>
        </article>
    </main>
</body>
```

##### Aside
- Conteúdos levementes relacionados ao conteúdo principal
    - explicações
    - glossários
    - links extras 
    - biografia do autor
    - informações de perfil
- Atributos apenas globais

##### Footer
- Geralmente fica no final do site
    - Normalmente contém informações do autor, copyright, sitemap, voltar ao topo, etc...
- Atributos Globais

##### Section
- Utilizado para colocar sessões na nossa página, e normalmente após a tag section vem um titulo e depois o conteúdo.

```html
<section>
    <h2> Modo de preparo</h2>
    <p>Modo de preparo</p>
</section>  
```

##### Elementos genéricos não semântico
Usos genéricos

- Div
    - Usado quando não conseguir achar um elemento de bloco semântico
- Span
    - Usado quando não conseguir achar um elemento de texto semântico

- Em ambas sistuações nos iremos utilizar atributos globais como, id e class para entregar maior significado.


