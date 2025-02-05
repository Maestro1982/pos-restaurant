import express from 'express';
import dotenv from 'dotenv';

dotenv.config(); // load env variables

import config from './config/config.js';
import connectDB from './config/database.js';
import globalErrorHandler from './middleware/globalErrorHandler.js';

const app = express();

const PORT = config.port;
connectDB();

// Root Endpoint
app.get('/', (req, res) => {
  res.json('Hello from POS server!');
});

// Global Error Handler
app.use(globalErrorHandler);

// Server
app.listen(PORT, () => {
  console.log(`POS server is listening on port: ${PORT}`);
});
