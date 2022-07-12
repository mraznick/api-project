import mongoose from "mongoose";
import chalk from "chalk";

const connectionString = process.env.DB_URL ||
'mongodb://127.0.0.1:27017/astronaut-api'

const MONGODB_URI = connectionString 

//allow updates to only return updated documents
mongoose.set("returnOriginal", false)

mongoose.connect(MONGODB_URI).catch((error) => {
  console.log(`Connection Error: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected"));
});

mongoose.connection.on("error", () => {
  console.error(chalk.red(`Connection Error: ${err}`));
});

//everything above here can be copied & pasted for future APIs, 
//just change the name of the database on line 4

export default mongoose.connection;
