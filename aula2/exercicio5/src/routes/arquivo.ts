import { Router } from "express";
import Arquivo from "../controllers/Arquivo";
const routes = Router();

routes.get("/arquivo",Arquivo.read);
routes.post("/arquivo",Arquivo.write);
routes.put("/arquivo",Arquivo.append);

export default routes;