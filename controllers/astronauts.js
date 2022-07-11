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

export const getAstronaut = async (req, res) => {
  try {
    const { id } = req.params;
    const astronaut = await Astronaut.findById(id);
    if (astronaut) {
      return res.json(astronaut);
    }
    res.status(404).json({ message: "Astronaut does not exist" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};