import express from "express";
import dotenv from 'dotenv';
import { authorization,generateToken } from "./autenticacao";
import { Request, Response, NextFunction } from "express";
dotenv.config();

const app = express();
app.use(express.json())
const PORT = process.env.PORT;

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

app.get("/", intermediaria1, intermediaria2, validarSenha, objetivo);
// OBJETO LOCALS

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

// MIDDLEWARE GLOBAL
//app.use(validarSenha); // Toda rota passa a usar esse middleware;

app.get("/ola",objetivo);
app.get("/teste",objetivo)

// JWT
const login = async(req:Request,res:Response)=>{
    const {mail} = req.body;
    if(mail && mail !== ""){
        const token = await generateToken({mail});
        return res.json({token});
    }
    return res.status(401).send({error:"Não autorizado!"});
};

app.get("/logar",login);

const processa = async(req:Request,res:Response)=>{
    const {mail} = res.locals;
    res.send({mail});
}

app.get("/validar",authorization,processa);
app.listen((PORT), () => console.log(`Serven running at PORT:${PORT}`));