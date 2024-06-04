import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

import log from "../utils/logger";

const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
        // headers: req.headers,
        // cookies: req.cookies,
      });
    } catch (err: any) {
      log.info(err);
      return res.status(400).send(err);
    }
  };

export default validate;
