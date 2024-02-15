import { Request, Response, Router } from 'express';
import user from './user';


const routes = Router();

routes.use('/usuario', user);

routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }))


export default routes;