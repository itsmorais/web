# Backend

## Objetivo:
- Estrutura de uma aplicação do lado servidor;
- Node e Express;
- Criar servidor Node com Express;
- Definição de rotas;
- Rotas para arquivo estático;
- Hierarquia de rotas.

### Estrutura de uma aplicação do lado servidor:
Navegadores se comunicam com o servidor web usando o protocolo HTTP. Node com Express são exemplos de servidores web para rodar aplicações do lado back-end.

A Figura abaixo representa uma requisição HTTP, ela possui os objetos Request e Response. O objeto Request inclui a URL (Uniform Resource Locator), o método que define a ação da requisição (GET, POST, PUT e DELETE), informações adicionais da URL, assim como os parâmetros e o corpo da requisição.
![image](https://github.com/itsmorais/web-II/assets/53665466/0afd9738-e703-4c18-b35d-025c503af274)

Exemplo de parâmetros via URL:
http://localhost:3000/?nome=Ana&idade=21
onde nome e idade são parâmetros.

O objeto Response possui a mensagem de resposta com o código de status (200 OK, 401 Unauthorized, 404 Not Found etc.) e o corpo da resposta em caso de sucesso.

- Respostas de requisição HTTP
    - 100 a 199 (respostas de informação): indica que a requisição foi recebida e o servidor continua processando-a;
    - 200 a 299 (respostas de sucesso): indica que a requisição foi recebida, entendida e aceita com sucesso:
    - 200 OK: a requisição foi bem-sucedida;
    - 201 Created: a requisição foi bem-sucedida e resultou na criação de um novo recurso;
    - 204 No Content: a requisição foi bem-sucedida, mas não há conteúdo para ser retornado (por exemplo, em
    uma requisição DELETE).
    - 300 a 399 (redirecionamentos): indica que a requisição precisa de ações adicionais para ser concluída:
    - 301 Moved Permanently: a URI do recurso solicitado foi alterada permanentemente e a nova URI é fornecida
    na resposta;
    - 302 Found / 303 See Other: a URI do recurso solicitado foi temporariamente alterada. O cliente deve
    redirecionar para a URI fornecida na resposta;
    - 304 Not Modified: indica que o recurso solicitado não foi modificado desde a última requisição.
    - 400 a 499 (erros do cliente): indica que houve um erro por parte do cliente na requisição:
    - 400 Bad Request: a requisição foi malformada ou incompreensível para o servidor;
    - 401 Unauthorized: o cliente não foi autorizado a acessar o recurso;
    - 403 Forbidden: o cliente não tem permissão para acessar o recurso;
    - 404 Not Found: o recurso solicitado não foi encontrado no servidor;
    - 409 Conflict: o servidor não pode completar a requisição devido a um conflito no estado atual do recurso.
    - 500 a 599 (erros do servidor): indica que houve um erro no servidor ao processar a requisição:
    - 500 Internal Server Error: o servidor encontrou uma situação inesperada que o impediu de atender à
    requisição;
    - 502 Bad Gateway: o servidor atuando como um gateway ou proxy recebeu uma resposta inválida do servidor
    upstream;
    - 503 Service Unavailable: o servidor não está pronto para lidar com a requisição. Geralmente, isso ocorre
    quando o servidor está em manutenção ou sobrecarregado.
    - 502 Bad Gateway: o servidor atuando como um gateway ou proxy recebeu uma resposta inválida do servidor
  upstream;
    - 503 Service Unavailable: o servidor não está pronto para lidar com a requisição. Geralmente, isso ocorre
quando o servidor está em manutenção ou sobrecarregado.

### Node e Express
Node (ou formalmente Node.js) é um ambiente em tempo de execução (runtime) open-source (código aberto) e
multiplataforma que permite a execução de código JS no lado servidor. Node destina-se a ser usado fora do contexto de um navegador, ou seja, executando diretamente no computador ou servidor

O Express é um framework popular e amplamente usado para criar aplicativos web e APIs (Application Programming
Interface - Interface de Programação de Aplicação) usando o Node.
Com express podemos:
- Usar roteamento
- Tratamento de requisições HTTP
- Manipular middlewares
- Fornecer respostas em formato JSON,text,HTML,etc...

