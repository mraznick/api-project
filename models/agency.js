//may be unnecessary to have this? but it'll be it's own object; ask in class

import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Agency = new Schema({
  agencyName: String,
  spacecraft: String,
  spacecraftImage: String
})

export default mongoose.model("agencies", Agency);
