import express, { type ErrorRequestHandler } from "express";
import { expressError } from "./utils/expressError";
import { mainRouter } from "./routes/mainRouter";
import { postsRouter } from "./routes/postsRouter";

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", mainRouter);
app.use("/posts", postsRouter);

app.all("*", (req, res, next) => next(expressError("Page Not Found", 404)));

app.use(((err, req, res, next) => {
  if (!err.message) err.message = "Something Went Wrong";
  const { statusCode = 500 } = err;
  const response = { err: { message: err.message, statusCode, ...err } };
  res.status(statusCode).json(response);
}) as ErrorRequestHandler);

app.listen(PORT, () => console.log(`Listening: ${PORT}`));
