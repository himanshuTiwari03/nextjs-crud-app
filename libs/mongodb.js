import mongoose from "mongoose";

let isConnected = false; // Track the connection status

export async function connectToDB() {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://himanshutiwari:fBL6QrMSNG7qXDvl@cluster0.uxqcoxo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      dbName: "crudDB", // ✅ add your actual DB name here
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    throw err;
  }
}

export default connectToDB;

  