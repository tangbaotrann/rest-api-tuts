import { Express, Request, Response } from "express";

function routes(app: Express) {
  app.get("/test", (req: Request, res: Response) => {
    res.send("Testing router...");
  });
}

export default routes;
