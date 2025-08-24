import Plant from "../modals/plant.js";


export const addPlant = async (req, res) => {
  try {
    const { name, price, categories, available, sunlight, wateringFrequency, description } = req.body;
    if (!name?.trim() || !price || !categories || categories.length === 0 || available === undefined || sunlight === undefined || wateringFrequency === undefined || !description?.trim()) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingPlant = await Plant.findOne({ name: { $regex: `^${name}$`, $options: "i" } });
    if (existingPlant) return res.status(400).json({ message: "Plant with this name already exists in the stock." });

    const plant = new Plant({ name, price, categories, available, sunlight, wateringFrequency, description });
    const savedPlant = await plant.save();

    res.status(201).json(savedPlant);
  } catch (error) {
    res.status(500).json({ message: "Failed to add plant." });
  }
};



export const getPlant = async (req, res) => {
  try {
    const { name, category } = req.query;
    let query = {};

    if (name) query.name = { $regex: name, $options: "i" };
    if (category) query.categories = { $regex: category, $options: "i" };

    const plants = await Plant.find(query);
    res.status(200).json(plants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllPlants = async (req, res) => {
  try {
    const plants = await Plant.find({}).sort({ name: 1 });
    res.status(200).json(plants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPlantById = async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    if (!plant) return res.status(404).json({ message: "Plant not found" });
    res.status(200).json(plant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePlant = async (req, res) => {
  try {
    const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedPlant) return res.status(404).json({ message: "Plant not found" });
    res.status(200).json(updatedPlant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
