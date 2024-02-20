
import { Router } from "express";
import MikeTeste from '../controllers/index'
const routes = Router();

routes.get("/", MikeTeste.greetings);
routes.post("/", MikeTeste.login);

export default routes