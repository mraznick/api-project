import Astronaut from "../models/astronaut.js";


// function to get all astronauts
export const getAstronauts = async (req, res) => {
  try {
    const astronauts = await Astronaut.find();
    res.json(astronauts)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

// function to get individual astronaut by ID
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

// function to create new astronaut
export const createAstronaut = async (req, res) => {
  try {
    const astronaut = new Astronaut(req.body);
    await astronaut.save();
    res.status(201).json(astronaut);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// function to find and update individual astronaut data
export const updateAstronaut = async (req, res) => {
  const { id } = req.params;
  const character = await CharacterData.findByIdAndUpdate(id, req.body);
  res.status(200).json(character)
};

export const deleteAstronaut = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Astronaut.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Astronaut removed");
    }
    throw new Error("Astronaut does not exist");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};