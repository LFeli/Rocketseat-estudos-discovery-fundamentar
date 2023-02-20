## NPM (Node Package Menager)

Para criar um arquivo basta digitar o comando `init npm` e responder os comandos, ou digitar `npm -y` que será yes para tudo

### O que e um arquivo package.json ?

E um arquivo em formato de json é um `Javascripy Object Notation`. Composto entre chaves e as propriedades js em aspas duplas e dois pontos e o valor.

### Como instalar módulos de terceiros (dependências)

Para instalarmos qualquer módulo precisamos utilizar a seguinte sintaxe:
```
npm install nomeDoModulo
```

Assim ele irá buscar no repositório do npm e instalar o módulo desejado.

#### Install Shortcut

Outra maneira de instalar que e mais uma shortcurt seria:
```
 npm i nomeDoModulo
```

#### Dependência de desenvolvimento e default

Um ponto importante e que ao passar pacotes há dois tipos de dependências, as que são obrigatorias e que serám baixadas junto com o módulo já as dependências de desenvolvimento, que como o nome já diz serão necessárias para o desenvolvimento porém ao baixar não serão incluidas.

#### Intalar vários módulos

E possivel também instalar várias dependências de uma só vez, basta ir dando espaço entre o nome dos pacotes:
```json
npm i modulo1 modulo2 modulo3
```

#### NPM Update

Caso você mexa no package de maneira manual, e necessário um comando para que ele atualize o pacote, chamado de:
```
npm update
```

### O que é o diretório node_modules ?  

O node modules e um diretório qur fica nossos módulos e suas dependências de cada módulo. Um ponto `**importante e que não enviamos essa pasta ao repositório**` por isso e necessário criar um arquivo git denominado `.gitignore`

Para fazer o git ignorar algum arquivo utilizando o gitignore basta digitar o nome do arquivo / pasta e barra: `node__modules/`. E ai quando baixar algum projeto que use dependências de terceiros basta rodar o comando `npm install` que ele vai instalar todas as dependências necessarias. Claro que se estiver no package json.

```
node__modules/
```

### O que é o package-lock json?

E um arquivos que não mexemos, pois ele e quem faz o mapeamento das dependências do projeto.

### Criando scripts para rodar com o NPM

Para criarmos scripts nos iremos utilizar a package.json na própria sessão `scripts`, ai o nome do comando podemos colocar qualquer um, porém temos um comando especial chamado `start` que não precisa seguir a sintaxe padrão.

Sintaxe padrão:
```
npm run nomeDoScript
```

Sintaxe utilizando o start:
```
npm start
```

### Instalando dependência global
Caso queira instalar algum pacote de maneira global e necessário utilizar a seguinte sintaxe:
```
npm i nomeDoModulo -g
```

O carinha que irá transforma para em uma dependência global e o `-g` e para visualizar todos os pacotes instalados globalmente basta utilizar o comando abaixo:
```
npm root -g
```
Assim ele irá mostrar o trajeto para o Node__Modules.

E para removermos esse pacote e bem simples:
```
npm uninstall nomeDoModulo -g
```

### Gerenciador de versões de pacotes

Inicialmente vamos entender cada item dos version.
```
3.1.1
```

Major = Versão do projeto, pode ate quebrar o pacote  
Minor = Alterações que não irão quebrar o pacote  
Patch = Resolvendo algum bug  

Se ele vier com `*` ele vai mudar todas as versões.  
Sempre que tiver o sinal `^` antês da versão do pacote siginifica que o NPM irá atualizar apenas o `Minor` e o `Patch`.  
Caso tiver `~` ele sempra vai atualizar apenas o `Patch`.  
Caso tenha nenhuma ele vai mantar a versão fixa.  


E para escolher uma versão mais antiga? E simples basta utilizar o `@` e passa a versão
```
npm i nomeDoModulo@1.0.0
```

Para trocar as versões entre os módulos.  

O `outdated` irá mostrar algumas informações como a versão atual, desejada e mais recente de um determinado pacote.
```
npm outdated
```

Caso queira atualizar, ele irá pegar a versão desejada ou `wanted`
```
npm upgrade
```

Caso você abra a package locked, ele terá uma dependência na versão que você selecionou porém a mapeada e a versão `wanted`. Mas e ai como que faço para voltar para a versão mais atual? Muito simples:
```
npm install nomeDoModulo@latest
```

### Removendo pacotes
Basta rodar o comando `unistall`.
```
npm uninstall nomeDoModulo
```