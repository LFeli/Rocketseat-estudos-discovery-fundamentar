### O que é HTTP?

HTTP é: HyperText Transfer Protocol

em uma visão geral:
- Permite troca de informações e dados na internet
- Uma troca de mensagem
- HTML, CSS, Scripts, Imagens, Vídeos
- Uma chamada para cada um desses recursos

Como funciona essa troca de mensagens do browser para o server?
- Request: Um pedido que por exemplo o browser faz para o server
- Response: Resposta do pedido 

### O qué compõe uma message?
**Request:**  
Um request ele e composto por `methods`, `headers` e um `body`.

Sobre os methods ele faz uma serie de coisas sendo:
- Definição do tipo do pedido
- Qual ação eu quero fazer no servidor

Por exemplo:  
- `GET` - Pega um recurso
- `POST` - Cria um recurso 

**Response:**   
A resposta ele nos responde três itens principais nessa troca de mensagem. `Status code`, `Headers` e `Body`.

Status code e a resposta do servidor em relação ao estado do pedido, exemplo:
- 200 (O pedido deu tudo certo)
- 301 (Pedido de redirecionamento)
- 404 (Famoso erro 404, recurso não encontrado)
- 500 (Erro interno de servidor)


**Ter em ambos porém e `opcional`:**  
Dois itens que tanto o request quando a response podem ter são o `headers` e o `body`.

O `headers` são campos informativos e são feitos de propriedade : valor ou name/key : value

Já o body serve como um tipo de conteúdo 

### cURL
Uma ferramenta que já vem instaladas em sistemas UNIX (Mac ou linux da vida), que vai permite usar diversos protocolos.

Caso tente usar no Windows, pode usar o terminal do git bash, ele já vem com o cURL instalado, caso queire acessar o manual do cURL basta apenas digitar:
```bash
    man curl
```

Alguns comandos uteis do curl:
```bash

// para pegar a response
curl url

// Para pegar os headers de resposta
curl -i url

// Ver todos os headers
curl -v url
```