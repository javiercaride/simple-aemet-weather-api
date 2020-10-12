import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

import { rootRouter } from "./routes/root/root-router";
import { errorHandler } from "./middleware/error-middleware";
import { notFoundHandler } from "./middleware/notfound-middleware";

/**
 * Application variables
 */
dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}
 
const PORT: number = parseInt(process.env.PORT as string, 10);
 
const app = express();

/**
 * Application configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/", rootRouter);

/*
 * Enable own error and not found middleware
 */
app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Application start
 */
const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});