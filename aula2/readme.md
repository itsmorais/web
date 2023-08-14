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

### Com a configuração feita vamos para a Definição de rotas
Uma rota define um caminho específico no servidor para o qual as solicitações dos clientes são direcionadas e como essas
solicitações são tratadas. O navegador ou app de celular são exemplos de clientes.
A definição de uma rota é formada pela combinação da URL com o método HTTP:
Os métodos mais comuns são:
- GET :usado para solicitar dados do servidor
- POST :usado para enviar dados ao servidor para serem processados.
- PUT :usado para atualizar um recurso existente no servidor
- DELETE: usado para excluir um recurso no servidor.

Criando rota de teste
```ts
import express from "express";
import dotenv from "dotenv";
dotenv.config();
// será usado 3000 se a variável de ambiente não tiver sido definida
const PORT = process.env.PORT || 3000;
// cria o servidor e coloca na variável app
const app = express();
// para aceitar parâmetros no formato JSON
app.use(express.json());
// inicializa o servidor na porta especificada
app.listen(PORT, () => {
console.log(`Rodando na porta ${PORT}`);
});
// define a rota para a raiz GET /
app.get("/", (req, res) => res.send("Método HTTP GET"))
// define a rota para GET /teste
app.get("/teste", (req, res) => res.send("Método HTTP GET"));
// define a rota para POST /teste
app.post("/teste", (req, res) => res.send("Método HTTP POST"));
// define a rota para PUT /teste
app.put("/teste", (req, res) => res.send("Método HTTP PUT"));
// define a rota para DELETE /teste
app.delete("/teste", (req, res) => res.send("Método HTTP DELETE"));
```
Podemos enviar dados de duas formas:
- Pelos parâmetros da URL:
  
    - http://localhost:3000/soma/2/10
      
```ts
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

// para aceitar parâmetros no formato JSON
app.use(express.json());

// Via parâmetros da URL
app.get("/soma/:x/:y", (req, res) => {
    const { x, y } = req.params;

    const numero1 = parseInt(x);
    const numero2 = parseInt(y);

    res.send("Soma dos números:" + (numero1 + numero2));
})//http://localhost:3000/soma/2/10

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`)
})


```
- Pelo corpo da requisição:
    - Body da requisição enviado via ThunderClient
  ![image](https://github.com/itsmorais/web-II/assets/53665466/231c0cc9-5c0a-487e-aa74-5e28615325f8)

  
```ts
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

// para aceitar parâmetros no formato JSON
app.use(express.json());

// Via body formato JSON
app.get("/soma", (req, res) => {
    const { x, y } = req.body;

    res.send("Soma dos números:" + (x + y));
})//http://localhost:3000/soma

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`)
})


```

- O método all é usado para mapear rotas uriundas de qualquer método HTTP(GET, POST, etc..)
```ts
app.all("/tudo",(req,res)=>{
    let {x,y} = req.body;

    res.send(`ALL ${x} e ${y}`);
});
```
Requisição usando método GET:
![image](https://github.com/itsmorais/web-II/assets/53665466/6adb8eb9-34eb-4657-9e32-432491fd60a2)

Requisição usando método POST:
![image](https://github.com/itsmorais/web-II/assets/53665466/2972ce87-ce89-447c-b45a-69a4b3741ca8)


- O método use é usado para receber qualquer rota não mapeada.
```ts
app.use((req, res) => {
    res.send("URL DESCONHECIDA")
});
```

### Rotas para arquivo estático
Um arquivo estático é aquele arquivo que será enviado para o cliente da forma como ele se encontra, isto é, ele não será executado no servidor.
- HTML, CSS, PDF, TXT e imagens são alguns exemplos de formatos de arquivos estáticos.
- Para testar, crie a pasta public na raiz do projeto e insira dois arquivos.txt dentro dela.
```ts
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

// para aceitar parâmetros no formato JSON
app.use(express.json());

// rota para um arquivo específico
app.use("/manha",express.static("public/dia.txt"));

// rota para a pasta public
app.use("/arquivo",express.static("public"));

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`)
})


```
Requisição para o arquivo dia.txt

http://localhost:3000/manha

Requisição para o arquivo noite.txt
http://localhost:3000/arquivo/noite.txt

### Hierarquia de rotas
É uma abordagem que permite organizar e estruturar as rotas de forma eficiente e modular.

No express a hierarquia de rotas é criada usando o conceito de roteadores(ROUTER)

Vamos criar os arquivos Matematica.ts e Texto.ts que recebem os objetos Request e Response criados pelo servidor web e retornam promises.

- Controllers/Matematica.ts
```ts
import { Request, Response } from "express";

class Matematica {
    public async somar(req: Request, res: Response): Promise<Response> {
        let { x, y } = req.body;
        const r = parseFloat(x) + parseFloat(y);

        if (isNaN(r)) {
            return res.json({ error: "Parâmetros incorretos" });
        }
        return res.json({ r });
    }
}

export default new Matematica();
```
- Controllers/Texto.ts
```ts
import { Request, Response } from "express";

class Texto {
    public async concatenar(req: Request, res: Response): Promise<Response> {
        let { x, y } = req.body;

        if (x === undefined || y == undefined) {
            return res.status(400).send("Parâmetros incorretos");

        }
        const r = x + y;
        return res.json({ r });
    }

    public async inverter(req: Request, res: Response): Promise<Response> {
        let { entrada } = req.body;

        if (entrada == undefined) {
            return res.status(400).send("Parâmetro incorreto");
        }
        const r = entrada.split("").reverse().join('');
        return res.json({ r });
    }
}

export default new Texto();
```
- routes/matematica.ts
```ts
import { Router } from "express";
import Matematica from "../controllers/Matematica";

const routes = Router();

routes.get("/", Matematica.somar);
routes.post("/", Matematica.subtrair);

export default routes;
```
- routes/texto.ts
```ts
import { Router } from "express";
import Texto from "../controllers/Texto";

const routes = Router();

routes.get("/", Texto.concatenar);
routes.post("/", Texto.inverter);

export default routes;
```
- routes/index.ts
```ts
import { Router, Request, Response } from "express";
import matematica from './matematica';
import texto from './texto';

const routes = Router();

routes.use("/matematica", matematica);
routes.use("/texto", texto);

routes.use((req:Request,res:Response)=> res.json({error:"Requisição desconhecida!"}))

export default routes;
```

- src/index.ts
```ts
import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

// para aceitar parâmetros no formato JSON
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`)
})
```
![image](https://github.com/itsmorais/web-II/assets/53665466/60ebad23-55f6-4f9f-8f0c-714a7a0c064e)

### Testando as rotas criadas
- Requisição tipo GET -> http://localhost:3000/matematica Função soma
![image](https://github.com/itsmorais/web-II/assets/53665466/8bddb799-6692-4e03-87e7-14088fe9305f)
- Requisição tiṕo POST -> http://localhost:3000/matematica Função subtrair
![image](https://github.com/itsmorais/web-II/assets/53665466/2453a976-e7a9-4e88-840f-be1c2595eb04)
- Requisição tipo GET -> http://localhost:3000/texto Função concatena
![image](https://github.com/itsmorais/web-II/assets/53665466/a7f1a12d-a050-4655-9229-2a3bffe3f884)
- Requisição tipo POST -> http://localhost:3000/texto Função inverte
![image](https://github.com/itsmorais/web-II/assets/53665466/8e9daf8b-a7ea-4bb1-93df-476ed1bd93c5)


