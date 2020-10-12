import express, { Request, Response } from "express";

export const rootRouter = express.Router();

rootRouter.get("/", async (req: Request, res: Response) => {
    res.status(200).json({success: true});
});

rootRouter.get("/liveness", async (req: Request, res: Response) => {
    res.status(200).json({isAlive: true});
});