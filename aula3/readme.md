# Autenticação de rota

## Middleware
**Os middlewares são funções intermediárias adicionadas no processamento da rota.**

A função middleware precisa receber como parâmetro os objetos Request, Response e NextFunction. A chamada da função next(), no corpo da middleware, faz a execução continuar para a próxima função.
```ts
const objetivo = (req: Request, res: Response) => {
    res.status(200).send({ "Situacao": "Logado" });
}

const intermediaria1 = (req: Request, res: Response, next: NextFunction) => {
    console.log("Intermediaria");
    next();
}

const intermediaria2 = (req: Request, res: Response, next: NextFunction) => {
    console.log("Intermediaria 2");
    next();
}

app.get("/middleware",intermediaria1,intermediaria2,objetivo);
```
![image](https://github.com/itsmorais/web-II/assets/53665466/174c9901-4363-4e0b-b850-1c2031ce5cf0)

Os middlewares são usados para realizar tarefas como autenticação, validação de entrada, manipulação de cabeçalhos, registro de logs etc. No exemplo a seguir a função objetivo só será executada se o usuário fornecer a senha 123 como parâmetro.
```ts
const objetivo = (req: Request, res: Response) => {
    res.status(200).send({ "Situacao": "Logado" });
}

const intermediaria1 = (req: Request, res: Response, next: NextFunction) => {
    console.log("Intermediaria");
    next();
}

const intermediaria2 = (req: Request, res: Response, next: NextFunction) => {
    console.log("Intermediaria 2");
    next();
}


const validarSenha = (req: Request, res: Response, next: NextFunction) => {
    const { senha } = req.body;

    if (senha && senha == '123') {
        return next();
    }
    return res.status(401).send({ error: "Não autorizado" });
}
```
![image](https://github.com/itsmorais/web-II/assets/53665466/f8fc91ae-7d44-45d0-8fc5-e4c90b5e88b0)
![image](https://github.com/itsmorais/web-II/assets/53665466/cf51fa0e-5864-47e2-9bdb-df9cebf10d6a)

## Objeto locals
O objeto locals é uma propriedade do objeto Request. O papel do locals é permitir o compartilhamento de dados entre os middlewares e as funções subsequentes no processamento da rota, sem que esses dados sejam expostos diretamente para fora do escopo da requisição, ou seja, é um mecanismo seguro e eficiente para passar informações temporárias dentro
do contexto de uma única requisição.
```ts
const validacaoLocals = (req: Request, res: Response, next: NextFunction) => {
    const { senha } = req.body;

    if (senha && senha == '123') {
        res.locals = { status: "logado" }
        return next()
    }
    return res.status(401).send({ error: "Não autorizado" });
}

const objetivoLocals = (req: Request, res: Response) => {
    const { status } = res.locals;
    res.send({ situacao: status });
}

app.get("/locals", validacaoLocals, objetivoLocals);
```
![image](https://github.com/itsmorais/web-II/assets/53665466/997f4a7a-e047-438b-aa17-bbe80fa27ad5)

## Middleware global
Uma rota definida usando o método use, do Express, e sem caminho, será compatível com qualquer rota.
```ts
app.use(validarSenha); // Toda rota passa a usar esse middleware;
```

## JSON Web Token
Na autenticação de rotas HTTP, um token é uma representação compacta de informações que é usado para autenticar e autorizar solicitações. Tokens são frequentemente usados como mecanismo de segurança para verificar a identidade de um usuário ou sistema que faz uma requisição a um servidor. Eles ajudam a evitar a necessidade de enviar credenciais (como
nome de usuário e senha) a cada requisição, o que pode ser inseguro.

Existem diferentes tipos de tokens, sendo o JWT (JSON Web Token) um dos mais comuns na autenticação de serviços web.
Um JWT é um formato de token que consiste em três partes:
- Header 
- Payload(carga)
- Assignature(assinatura)
  
_Cada parte é codificada em Base64 e separada por pontos_

Um fluxo típico de autenticação com token envolve os seguintes passos:
1. O usuário envia suas credenciais (como nome de usuário e senha) ao servidor.
2. O servidor verifica as credenciais e, se estiverem corretas, cria um token JWT contendo as informações relevantes, como a identificação do usuário e as permissões.
3. token é enviado de volta ao cliente como resultado da autenticação bem-sucedida.
4. O cliente armazena o token (geralmente em um cookie ou armazenamento local) e o envia como parte do cabeçalho de autorização em todas as futuras requisições;
5. O servidor recebe o token, verifica sua validade, decodifica o payload para obter as informações do usuário e, se necessário, verifica se o usuário tem as permissões adequadas para acessar a rota solicitada.

- Bearer Token:
  - é um token de segurança com a propriedade de que qualquer parte em posse
do token (um "portador", em inglês bearer) tem a certeza que a outra parte reconhecerá o token. O uso de um token de portador não exige que o portador comprove a posse do material da chave criptográfica (prova de posse, em inglês proof-of-possession).

código do arquivo src/autenticacao.ts
```ts
import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import * as dotenv from 'dotenv'
dotenv.config();

export const generateToken = async (entrada: any) =>
    jwt.sign(entrada, process.env.JWT_SECRET as string);

export const authorization = async (req: Request, res: Response, next: NextFunction) => {

    const authorization: any = req.headers.authorization;

    try {

        const [, token] = authorization.split(" ");

        const decoded = <any>jwt.verify(token, process.env.JWT_SECRET as string);

        if (!decoded) {
            res.status(401).json({ error: "Não autorizado!" });
        }
        else {
            res.locals = decoded;
        }
    }
    catch (error) {
        return res.status(401).send({ error: "Não autorizado!" });
    }
    return next();
}

```
código do arquivo index.ts
```ts
import express from "express";
import dotenv from 'dotenv';
import { authorization, generateToken } from "./autenticacao";
import { Request, Response, NextFunction } from "express";
dotenv.config();

const app = express();
app.use(express.json())
const PORT = process.env.PORT;


// JWT
const login = async (req: Request, res: Response) => {
    const { mail } = req.body;
    if (mail && mail !== "") {
        const token = await generateToken({ mail });
        return res.json({ token });
    }
    return res.status(401).send({ error: "Não autorizado!" });
};

app.get("/logar", login);

const processa = async (req: Request, res: Response) => {
    const { mail } = res.locals;
    res.send({ mail });
}

app.get("/validar", authorization, processa);
app.listen((PORT), () => console.log(`Serven running at PORT:${PORT}`));
```

arquivo .env
```
JWT_SECRET = @tokenJWT
```

Fazendo login e recebendo token
![image](https://github.com/itsmorais/web-II/assets/53665466/2841338a-4a2c-462d-881a-f8c0bf86218f)

Validando
![image](https://github.com/itsmorais/web-II/assets/53665466/67dd519a-0901-4e79-af32-9733ab3f4dfd)

Validando de forma errada
![image](https://github.com/itsmorais/web-II/assets/53665466/cc0e12f2-b88d-45a3-b199-dae73422113b)
