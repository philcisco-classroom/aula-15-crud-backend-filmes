import { FilmeController } from "../controller/filme.controller";
import { Router } from "express";

const router = Router();
const filmeController = new FilmeController();

router.post('/',filmeController.create);

export {router as filmeRoutes};