import { Router } from "express";
import { postsController } from "../controllers/postsController";

const postsRouter = Router();
const postsCont = postsController();

postsRouter.route("/").get(postsCont.index);

export { postsRouter };
