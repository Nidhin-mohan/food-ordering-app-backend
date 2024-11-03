import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(() => console.log("connected to db"))
.catch(e => console.log("db connection failed", e));

const app = express();

app.use(cors());
app.use(express.json());

app.get("/test", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});

// Error handling middleware (optional)
app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).send({ error: "Something went wrong!" });
});

app.listen(7000, () => {
  console.log("server started on localhost:7000");
});
