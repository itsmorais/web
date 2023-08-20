import { Router } from "express";
import calendario from "./calendario";
import arquivo from "./arquivo";
import loteria from './loteria';
const router = Router();

router.use(calendario);
router.use(arquivo);
router.use(loteria);

export default router;