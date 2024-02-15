import { Request, Response } from "express";
import { User } from "../models"

class UserController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { mail, password } = req.body

        try {
            const document = new User({ mail, password });

            const resp = await document.save();

            return res.json(resp);


        } catch (error: any) {
            return res.json({ message: error.message })
        }


    }

    public async list(_: Request, res: Response): Promise<Response> {
        try {
            const objects = await User.find().sort({ mail: "asc" });
            return res.json(objects)
        } catch (error: any) {
            return res.json({ message: error.message })
        }
    }
}


export default new UserController();