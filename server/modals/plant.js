import mongoose from "mongoose";

const plantSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true,
            },
        price:{
            type:Number,
            required:true,
            min:0,
        },
        categories:{
            type:[String],
            required:true,
            validate:{
                validator:(val)=>Array.isArray(val) && val.length>0,
                message:"At least one category is required",
            }
        },
        available:{
            type:Boolean,
            default:true,
        },
        sunlight:{
            type:Boolean,
            default:false,
        },
        wateringFrequency:{
           
                type:Number,
                default:0,
        },
        description:{
            type:String,
            trim:true,
            maxlength:500,
        }
        },{timestamps:true}
)

const Plant = mongoose.model("Plant",plantSchema);
export default Plant;