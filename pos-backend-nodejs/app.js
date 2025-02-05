import express from 'express';
import dotenv from 'dotenv';

import connectDB from './config/database.js';

dotenv.config(); // load env variables

const app = express();

const PORT = process.env.PORT;
connectDB();

app.get('/', (req, res) => {
  res.json('Hello from POS server!');
});

app.listen(PORT, () => {
  console.log(`POS server is listening on port: ${PORT}`);
});
