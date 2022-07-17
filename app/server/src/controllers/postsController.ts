import type { Request, Response } from "express";

const postsController = () => {
  return {
    index: (req: Request, res: Response) => {
      res.json({ message: "Hello Posts" });
    },
  };
};

export { postsController };
