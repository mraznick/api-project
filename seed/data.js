import db from "../db/connection.js";
import Astronaut from "../models/astronaut.js";
import Agency from "../models/agency.js";
import astronauts from "./astronauts.json" assert {type: "json" };
import agencies from "./agiencies.json" assert { type: "json" };

const insertData = async () => {

  await db.dropDatabase();

  await Astronaut.insertMany(astronauts);
  await Agency.insertMany(agencies);

  db.close();

}

insertData();