import express, { Request, Response } from "express";

import  HttpException from "../../error/http-exception"

export const rootRouter = express.Router();

rootRouter.get("/", async (req: Request, res: Response) => {
    res.status(200).send({success: true});
});

rootRouter.get("/liveness", async (req: Request, res: Response) => {
    res.status(200).send({success: true});
});