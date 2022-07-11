import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Astronaut = new Schema({
  name: String,
  nationality: String,
  agency: {
    agencyName: String,
    spacecraft: String,
    spacecraftImage: String
  },
  image: String,
  bio: String
})

export default mongoose.model("astronauts", Astronaut);
