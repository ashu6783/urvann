import { configDotenv } from "dotenv";
configDotenv();
import Plant from "../modals/plant.js";
import plantsData from "../utils/seed.js";
import connectDB from "./db.js";


const seedPlants = async () => {
  try {
    await connectDB();
    await Plant.deleteMany();
    await Plant.insertMany(plantsData);
    console.log("Plants seeded fine");
    process.exit();
  } catch (error) {
    console.error("Error seeding plants:", error.message);
    process.exit(1);
  }
};

seedPlants();
