import { Router } from "express";
import { catchAsync } from "../middlewares/catchAsync";
import { postsController } from "../controllers/postsController";

const postsRouter = Router();
const posts = postsController();

postsRouter.route("/").get(posts.test);

postsRouter
  .route("/posts")
  .get(catchAsync(posts.index))
  .post(catchAsync(posts.create));

postsRouter.route("/posts/:id").delete(catchAsync(posts.delete));

export { postsRouter };
