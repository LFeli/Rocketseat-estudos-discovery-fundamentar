### Messages
As messages elas estão presentes tanto no request quanto no response.

Há dois tipos de HTTP Messages que são bem comuns de se encontrar 

O `HTTP / 1.1`
- Legível
- Texto

E o `HTTP / 2`
- Uma estrutura binária
- Otimizações
- Mesma maneira que a versão 1.1


### Request
O request line ele é composto por 
- `methods`
- `Protocol lines`
- `URI`

Para as infos do request basta apenas utilizar esse comando:
```bash
curl -v URI
```

### Response
Para acessar no cURL os headers de response se usa o seguinte comando:
```bash
curl -I URI
``` 

Caso queira pedir tanto os headers como o corpo o comando e parecido:
```bash
curl -i URI
```