import chalk from "chalk";
import mongoose from "mongoose";
const db_URI = 'mongodb://localhost:27017/NextJS';

export async function db() {
  try {
    await mongoose.connect(db_URI);
    console.log(chalk.inverse.blueBright("Database connected successfully"));
  } catch (error) {
    console.error(chalk.inverse.redBright("Database connection error:", error));
  }
}