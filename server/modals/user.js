import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            trim:true,
            unique:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
        },
        password:{
            type:String,
            required:true,
            minlength:6,
        },
        role:{
            type:String,
            required:true,
            minlength:2,
        },
    },
    {timestamps:true}
)

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User= mongoose.model("User",userSchema);
export default User;