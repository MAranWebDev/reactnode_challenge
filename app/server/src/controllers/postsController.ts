import type { Request, Response } from "express";
import { expressError } from "../utils/expressError";
import { postsQueries } from "../utils/queries/postsQueries";

const HTTP = { OK: 200, CREATED: 201, NOTFOUND: 404 };
const queries = postsQueries();

const postsController = () => {
  return {
    test: (req: Request, res: Response) => res.json({ message: "Hello API" }),

    index: async (req: Request, res: Response) => {
      const data = await queries.getRecords();
      res.json(data);
    },

    create: async (req: Request, res: Response) => {
      const { name, description } = req.body;
      const result = await queries.addRecord({ name, description });
      const response = {
        message: "Record Created",
        statusCode: HTTP.CREATED,
        ...result[0],
      };
      res.json(response);
    },

    delete: async (req: Request, res: Response) => {
      const id = Number(req.params.id);
      const result = await queries.deleteRecord(id);
      if (result.length === 0)
        throw expressError("Record Not Found", HTTP.NOTFOUND);
      const response = {
        message: "Record Deleted",
        statusCode: HTTP.OK,
        ...result[0],
      };
      res.json(response);
    },
  };
};

export { postsController };
