import type { Request, Response } from "express";

const mainController = () => {
  return {
    index: (req: Request, res: Response) => {
      res.json({ message: "Hello API!" });
    },
  };
};

export { mainController };
