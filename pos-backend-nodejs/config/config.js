import dotenv from 'dotenv';

dotenv.config(); // load env variables

const config = Object.freeze({
  port: process.env.PORT || 3000,
  databaseURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/pos-db',
  nodeEnv: process.env.NODE_ENV || 'development',
  accessTokenSecret: process.env.JWT_SECRET,
});

export default config;
