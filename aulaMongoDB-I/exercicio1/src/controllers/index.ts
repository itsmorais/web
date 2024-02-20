import { Request, Response } from "express";

class MikeTeste {

    public async greetings(_: Request, res: Response): Promise<Response> {
        const name = "Michael Morais";
        const age = 26
        return res.json({ programmerName: name, ProgrammerAge: age });
    }

    public async login(req: Request, res: Response): Promise<Response> {
        const { user, email } = req.body;
        const message = `Welcome to our server ${user}`

        if (email === "moraisdpm@outlook.com") {
            return res.json(message)

        }
        return res.json({ user })
    }
}

export default new MikeTeste()