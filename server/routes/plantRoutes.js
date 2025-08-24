import express from "express";
import { addPlant,getAllPlants,getPlant } from "../controllers/plantController.js";
import { authenticate,authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/",getPlant);
router.get("/",getAllPlants)
router.post("/",authenticate,authorize("admin"),addPlant);

export default router;