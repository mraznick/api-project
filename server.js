import db from "./db/connection.js";
import routes from "./routes/index.js";

import express from "express";
import cors from "cors";
import logger from "morgan";
import chalk from "chalk";

const app = express();
const PORT = 4000;

app.use(express.json())
app.use(cors())
app.use(logger("dev"))

// not sure if this needs adjusting, look for it in the recording
app.use("/api", routes)

db.on("connected", () => {
  console.clear();
  console.log(chalk.blue("MongoDB Connection Active"))
  app.listen(PORT, () => {
    console.log(`Express running in dev on: http://localhost:${PORT}`);
  })
})