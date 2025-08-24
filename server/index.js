import { configDotenv } from "dotenv";
configDotenv();
import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
import plantRoutes from "./routes/plantRoutes.js";

connectDB();
const app= express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/plants",plantRoutes);

app.get("/",(req,res)=>{
    res.send("API is running");
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));