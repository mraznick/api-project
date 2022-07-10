import mongoose from "mongoose";
import chalk from "chalk";

const MONGODB_URI = "mongodb://127.0.0.1:27017/astronaut-api"

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
