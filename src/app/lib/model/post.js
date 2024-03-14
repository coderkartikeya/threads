import mongoose from "mongoose";

const post=new mongoose.Schema({
    text: String ,
    username: String,
    image:String,
    date:String,
    profile:String  

})


export const Post=mongoose.models.posts || mongoose.model("posts",post);