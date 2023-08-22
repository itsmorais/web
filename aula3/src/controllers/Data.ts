import { Request, Response } from "express";

class Data {
    public async dia(_: Request, res: Response): Promise<Response> {
        const r = new Date().getDate() <= 9 ? "0" + (new Date().getDate()) :
            "" + (new Date().getDate());
        return res.json({ r });
    }
    public async mes(_: Request, res: Response): Promise<Response> {
        const r = new Date().getMonth() <= 9 ?
            "0" + (new Date().getMonth() + 1) : "" + (new Date().getMonth());
        return res.json({ r });
    }
    public async ano(_: Request, res: Response): Promise<Response> {
        const r = "" + new Date().getFullYear();
        return res.json({ r });


    }
}
export default new Data();

