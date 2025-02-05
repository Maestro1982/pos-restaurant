import mongoose from 'mongoose';
import config from './config.js';

const connectDB = async () => {
  try {
    // Ensure the URI exists before trying to connect
    if (!config.databaseURI) {
      throw new Error('MongoDB URI is not defined!');
    }

    // Use the correct reference to databaseURI
    const conn = await mongoose.connect(config.databaseURI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

export default connectDB;
