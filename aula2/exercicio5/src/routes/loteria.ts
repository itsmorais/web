import { Router } from "express";
import Loteria from "../controllers/Loteria";
const routes = Router();

routes.get("/loteria/mega", Loteria.mega);
routes.get("/loteria/quina", Loteria.quina);

export default routes;