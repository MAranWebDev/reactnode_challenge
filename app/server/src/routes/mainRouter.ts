import { Router } from "express";
import { mainController } from "../controllers/mainController";

const mainRouter = Router();
const mainCont = mainController();

mainRouter.route("/").get(mainCont.index);

export { mainRouter };
