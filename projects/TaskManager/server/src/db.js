import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/test-merndb");
    console.log(">>> DB is connected");
  } catch (error) {
    console.error(error);
  }
};
