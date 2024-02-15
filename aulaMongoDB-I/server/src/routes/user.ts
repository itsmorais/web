import { Router } from "express";
import controller from "../controllers/UserController";


const routes = Router();

routes.post('/', controller.create);
routes.get('/', controller.list);

export default routes;