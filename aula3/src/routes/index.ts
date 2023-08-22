import { Router, Request, Response } from "express";
import matematica from './matematica';
import login from "../controllers/Login";
import data from './data'; 

const routes = Router();

routes.post("/login", login);
routes.use("/data", data);
routes.use("/matematica", matematica);

routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));

export default routes;