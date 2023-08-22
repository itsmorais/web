import { Request, Response } from "express";
import { generateToken } from "../middlewares/index";
import users from "./mock";

async function login(req: Request, res: Response): Promise<Response> {
    const { mail } = req.body;
    let loggedUser;

    // Verifica se o email existe
    for (let i = 0; i < users.length; i++) {
        if (users[i].mail == mail) {
            loggedUser = users[i]
        }
    }

    if (loggedUser) {
        const token = await generateToken(loggedUser);
        return res.json({ token });

    }
    return res.json({ error: "Usuário não localizado" });
}


export default login;
;
