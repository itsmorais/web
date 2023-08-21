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
