import HttpException from '../error/http-exception';
import { Request, Response, NextFunction } from 'express';

export const errorHandler = (error: HttpException, request: Request, response: Response, next: NextFunction): void => {
    const status = error.statusCode || 500;
    const message = {};

    error.message || "It's not you. It's us. We are having some problems.";

    response.status(status).send(message);
    next();
};
