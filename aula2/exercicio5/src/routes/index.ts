import { Router } from "express";
import calendario from "./calendario";
import arquivo from "./arquivo";
const router = Router();

router.use(calendario);
router.use(arquivo);

export default router;