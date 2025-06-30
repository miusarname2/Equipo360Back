import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { loginRoute } from "./app/Login/application/login.routes.js";

dotenv.config({ path: "./" });

// Create an Express application
const app: Express = express();

// Setup port
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));

// Import routes
app.use("/api/login", loginRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Ts  server⚡️!");
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});