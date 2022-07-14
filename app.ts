import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import studentRouter from "./routes/studentRoutes";
import classRouter from "./routes/classRoutes";

dotenv.config({ path: "./config.env" });
const app: Express = express();
const DB: string | undefined = process.env.DATABASE?.replace(
  "<PASSWORD>",
  process.env.PASSWORD as string
);
mongoose
  .connect(DB as string)
  .then((data) => {
    console.log("Successfully connected to database");
  })
  .catch((err) => console.log("Error connected to database: ", err));
app.use(express.json());
app.use("/api/students", studentRouter);
app.use("/api/classes", classRouter);
app.listen(process.env.PORT || 5000, () => {
  console.log(`App running on port ${process.env.PORT}`);
});
