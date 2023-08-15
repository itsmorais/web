import { Request, Response } from "express";
import fs from 'fs-extra';

class Arquivo {
    static filename: string = "./nomes.txt";

    public async write(req: Request, res: Response) {
        const { nome } = req.body;

        if (nome && nome !== "") {
            fs.writeFile(Arquivo.filename, nome)
                .then(() => res.json({ message: `${nome} salvo com sucesso!` }))
                .catch((error: any) => res.status(400).json({ message: "Problemas ao escrever" }))
        }
        else {
            res.status(400).json({ message: "Nome não fornecido!" })
        }
    }

    public async read(req: Request, res: Response) {
        fs.readFile(Arquivo.filename)
            .then((data) => res.send({ nomes: data.toString().split("\n") }))
            .catch((error: any) => res.status(400).json({ message: error.message }));
    }

    public async append(req: Request, res: Response) {
        const { nome } = req.body;

        if (nome && nome !== "") {
            fs.appendFile(Arquivo.filename, "\n" + nome)
                .then(() => res.json({ message: `${nome} Adicionado com sucesso!` }))
        }
    }


}

export default new Arquivo();
