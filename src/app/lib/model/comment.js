import mongoose from "mongoose";

const comment=new mongoose.Schema({
    text: String ,
    username: String,
    key:String,
    unique:String

})


export const Comment=mongoose.models.comments || mongoose.model("comments",comment);