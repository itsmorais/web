import { Router } from "express";
import Calendario from "../controllers/Calendario";
const router = Router();

router.get("/calendario",Calendario.dayOfMonth);
router.post("/calendario",Calendario.date);

export default router;