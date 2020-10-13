import express, { Request, Response } from 'express';

export const rootRouter = express.Router();

rootRouter.get('/', async (req: Request, res: Response) => {
    res.status(200).send({ success: true });
});

rootRouter.get('/liveness', async (req: Request, res: Response) => {
    res.status(200).send({ success: true });
});
