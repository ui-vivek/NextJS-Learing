import chalk from "chalk";
import mongoose from "mongoose";
const db_URI:any = process.env.NODE_ENV == "development" ? 'mongodb://localhost:27017/NextJS' : process.env.DB_URI;
export async function db() {
  try {
    await mongoose.connect(db_URI);
    console.log(chalk.inverse.blueBright("Database connected successfully"));
  } catch (error) {
    console.error(chalk.inverse.redBright("Database connection error:", error));
  }
}