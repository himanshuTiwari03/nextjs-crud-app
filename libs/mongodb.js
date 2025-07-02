import mongoose from "mongoose";
export async function connectToDB() {
    try {
    mongoose.connect("process.env.MONGODB_URI");
    console.log('Connected to MongoDB');
    } catch (err) {
    console.error('Database connection failed:', err);
    throw err;
    }
    }
    
   export default connectToDB;
  