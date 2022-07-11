import Astronaut from "../models/astronaut.js";

export const getAstronauts = async (req, res) => {
  try {
    const astronauts = await Astronaut.find();
    res.json(astronauts)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};