import { configDotenv } from "dotenv";
configDotenv();
import jwt from "jsonwebtoken";
import User from "../modals/user.js";


const generateToken = (user)=>{
    return jwt.sign(
        {id:user._id,role:user.role},
        JWT_SECRET,
        {expiresIn:"1d"}
    );
};

export const register = async (req,res) =>{
    try {
        const {username,email,password,role,secretCode} = req.body;

        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(400).json({message:"User already exists"});

        let assignedRole = "user";

        if(role === "admin" && secretCode === process.env.ADMIN_SECRET){
            assignedRole='admin';
        }

        const user = new User({username,email,password,role:assignedRole});
        await user.save();

         res.status(201).json({message:"User registered successfully", role:assignedRole});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export const login = async( req,res) =>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message:"User not found"});

        const isMatch = await user.comparePassword(password);
        if(!isMatch) return res.status(400).json({message:"Invalid credentials"});

        const token = generateToken(user);

        res.status(200).json({
            message:"Login successfull",
            token,
            user:{
            id:user._id,
            username:user.username,
            email:user.email,
            role:user.role,
            },
        });
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export const logout = async(req,res)=>{
    try {
        res.clearCookie("token",{
            httpOnly:true,
            secure:process.env.NODE_ENV==="production",
        })
        res.status(200).json({message:"logged out successfully"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}