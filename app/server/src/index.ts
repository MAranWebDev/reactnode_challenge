import express, { type ErrorRequestHandler } from "express";
import { expressError } from "./utils/expressError";
import { postsRouter } from "./routes/postsRouter";

const PORT = 5000;
const HTTP = { NOTFOUND: 404, INTERNAL: 500 };
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use("/", postsRouter);

app.all("*", (req, res, next) =>
  next(expressError("Page Not Found", HTTP.NOTFOUND))
);

app.use(((err, req, res, next) => {
  if (!err.message) err.message = "Something Went Wrong";
  const { statusCode = HTTP.INTERNAL } = err;
  const response = { err: { message: err.message, statusCode, ...err } };
  res.status(statusCode).json(response);
}) as ErrorRequestHandler);

app.listen(PORT, () => console.log(`Listening: ${PORT}`));
