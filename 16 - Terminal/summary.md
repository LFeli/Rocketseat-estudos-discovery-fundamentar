### Terminal

#### pwd
Mostra o caminho completo para o diretório atual.
```
pwd
```

#### cd (Change directory)
Para navegarmos para um diretório, utilizamos o comando `cd` e passamos o nome do diretório que queremos acessar.
```
cd Pasta
```

E possivel verificar o diretório atual utilizando o cd, basta por um `.`
```
cd .
```

Para voltar um ou mais diretórios, utilizamos dois pontos `../`
```
cd ../
```

Caso queira voltar para aonde estava basta utlizar `-`
```
cd -
```


#### ls (lista arquivos e pastas)
Se passarmos ls sem nenhum argumento, ele irá mostrar todos os arquivos e argumentos.

Caso queira mais informações nos passamos o ls com o `-l`, ele vai dizer como permissões, dono, grupo, além do tamanho e dia e hora.
```
ls -l
```

Caso queremos ver TUDO, utilizamos o `-a`, ele mostra inclusive os ocultos
```
ls -a
```

Caso tivermos um diretório e queremos ver todos os arquivos dentro dele, mas sem acessa-lo nos utilizamos o `-R`
```
ls -R
```

Caso precisamos ordernar os arquvios por tamamho também e possível, basta utilizar o `-S`
```
ls -S
```

#### file
Para podermos utilizar precisamos passar o `file` mas um arquivo de paramentro e seu formato, e ele irá retornar várias informações úteis, ex: uma imagem vai falar o seu formato, resolução, tipo de espectro de cor e etc.
```
file imagem.png
```

#### stat
Mesma ideia do file, entretanto ele vai retornar informações como permissões, tamanho do arquivo, data de criação, que e o dono, grupo e etc.

#### mkdir
Comando utilizado para criar diretórios.
```
mkdir meuPrimeiroDiretorio
```

E possivél criar um diretório dentro do outro, para isto precisamos passar o `-p` e os dois diretórios.
```
mkdir -p dir1/dir2

// Se quiser criar mais de um e possivel, basta dar espaço

mkdir -p dir1/source  dir1/assets dir1/base
```

#### touch
Podemos alterar registros de data e hora de arquivos e pastas, além de criar um ou mais arquivos.

```
//Alterar hora
touch nomeDoDiretorio
```

```
Vai criar um arquivo
touch file.txt
```

#### cp (Copiar)
Copiar arquivos e pastas, este comando possui dois argumento que são, qual arquivos queremos copiar e seu local de destino. (SEMPRE O ULTIMO ARGUMENTO E O LOCAL DE DESTINO)
```
cp file1.txt arquivos
```

Para copiarmos diretorios, e necessario passar o `-r`, caso contrário ele irá passar um erro.
```
// irá copiar o dir1 e dir2 para o dir3
cp -r dir1 dir2 dir3
```

#### mv (Mover ou copiar)
Mover ele tem dois argumentos que sempre o ultimo argumento e o local de origem.
```
mv file.txt dir1
```

Podemos utilizar ele também pra renomear arquivos basta escrever o arquivo com sua extensão e em seguida seu novo nome.
```
mv file.txt arquivo.txt
```

#### rm (Remover para sempre)
OBS: se você utilizar esse comando ele irá remover para sempre, e não envia-lo para a lixeira.
Ele permite utilizar multiplos argumentos, basta dar espaço
```
rm file.txt
```

Para remover um diretório e necessário passar o `-r`, aqui pode ocorrer a situação de ele perguntar se queremos remover mesmo.
```
rm -r direotiro
```
Entretanto e possivel remover a força, basta passar o `-f`
```
rm -f diretorio
```

#### Wildcards (Coringas)
Caso você utilize o `*` ele irá 1 ou mais caracters, caso queira apenas um unico caracter após

```
rm dir/si*

// remover todos os arquivos do diretorio que começam com `si`
```

#### Find
Encontrar arquivos ou diretórios, sua sintaxe e um pouco grande.
```
find <path> arg [expression]
```
Mas ficou um pouco confuso ne, pois bem o `path` e o diretório então podemos passar o nome ou um ponto caso você já esteja nele. O `arg` e um argumento dizendo se quer arquivos ou diretórios ai passamos o `type f` para arquivos ou `type d` para diretório e o `[expression]` e como, por exemplo pelo nome `-name "*.mp4"`.


