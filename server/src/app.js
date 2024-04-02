import express from 'express';
import cookieParser from 'cookie-parser';

import {morganMiddleware} from './config/index.js';

const app = express();

// global middlewares
app.use(express.json({limit: '16kb'}));
app.use(cookieParser());
app.use(morganMiddleware);

// api routes
import {healthCheckRouter} from './api/common/routes/index.js';
import {errorHandler} from './api/common/middlewares/index.js';

// healthcheck   
app.use('/api/healthcheck', healthCheckRouter);

// error handling middleware
app.use(errorHandler);

export default app;
