import { Router } from "express";
import Matematica from "../controllers/Matematica";
import { authorization,authAdmin } from "../middlewares";

const routes = Router();

routes.get("/sum",Matematica.somar);
routes.get("/dif",authorization,authAdmin,Matematica.subtrair);

export default routes;