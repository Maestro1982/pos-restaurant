import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config(); // load env variables

import config from './config/config.js';
import connectDB from './config/database.js';

import globalErrorHandler from './middleware/globalErrorHandler.js';

import userRoute from './routes/userRoute.js';
import orderRoute from './routes/orderRoute.js';
import tableRoute from './routes/tableRoute.js';

const app = express();

const PORT = config.port;
connectDB();

// Middlewares
app.use(
  cors({
    credentials: true, // You need this when you work with cookies
    origin: ['http://localhost:5173'], // frontend
  })
);
app.use(express.json()); // Parse incoming request into json format
app.use(cookieParser());

// Root Endpoint
app.get('/', (req, res) => {
  res.json('Hello from POS server!');
});

// Other Endpoints
app.use('/api/user', userRoute);
app.use('/api/order', orderRoute);
app.use('/api/tables', tableRoute);

// Global Error Handler
app.use(globalErrorHandler);

// Server
app.listen(PORT, () => {
  console.log(`POS server is listening on port: ${PORT}`);
});
