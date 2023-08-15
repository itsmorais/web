import { Request, Response } from "express";
class Calendario {
    public async dayOfMonth(req: Request, res: Response): Promise<Response> {
        const dia = (new Date()).getDate();
        return res.json({ dia });
    }

    public async date(req: Request, res: Response): Promise<Response> {
        let { option } = req.body;
        let r = "Parâmetro inválido";

        if (option === 'day') {
            r = (new Date().getDate() + "");
        }
        else if (option === 'month') {
            r = ((new Date()).getMonth() + 1) + "";
        }
        else if (option === 'year') {
            r = (new Date()).getFullYear() + "";
        }
        return res.json({ r });
    }
}

export default new Calendario();