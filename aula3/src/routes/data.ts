import { Router } from "express";
import Data from "../controllers/Data";
import { authorization,authAdmin } from "../middlewares";

const routes = Router();

routes.get("/day",authorization,Data.dia);
routes.get("/month",authorization,Data.mes);
routes.get("/year",authorization,authAdmin,Data.ano);

export default routes;