import mongoose from "mongoose";

const userProfile=new mongoose.Schema({
    username: String ,
    password: String,
    profile:String
    

})


export const User=mongoose.models.users || mongoose.model("users",userProfile);