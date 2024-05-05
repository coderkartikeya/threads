import mongoose from 'mongoose'
import { connectd } from "../../lib/db";
import { Post } from "../../lib/model/post";
import { NextRequest, NextResponse } from "next/server";

export async function  GET(){
    try{

        mongoose.connect(connectd);
        

    

    
    return NextResponse.json({
        status:200,
        result:"jai ho"
    })

}catch(error){
    mongoose.connect(connectd);
    console.error(error);
}
}

export async function  POST(res){
    try{

        mongoose.connect(connectd);
        const r=await res.json();

        const rt=await Post.find({username:r.username});      

    

    
    return NextResponse.json({
        status:200,
        result:rt
    })

}catch(error){
    mongoose.connect(connectd);
    console.error(error);
}
}

export const dynamic = "force-static";