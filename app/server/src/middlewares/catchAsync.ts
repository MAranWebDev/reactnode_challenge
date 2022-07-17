import type { Request, Response, NextFunction, RequestHandler } from "express";

type FuncType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

const catchAsync = (func: FuncType) =>
  ((req, res, next) => func(req, res, next).catch(next)) as RequestHandler;

export { catchAsync };
