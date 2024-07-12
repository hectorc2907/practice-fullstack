import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/test-merndb");
  } catch (error) {
    console.error(error);
  }
};
