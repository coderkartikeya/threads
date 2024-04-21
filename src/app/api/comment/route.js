import mongoose from 'mongoose'
import { connectd } from '../../lib/db';
import { Comment } from '../../lib/model/comment';
import { NextRequest, NextResponse } from "next/server";

export async function  GET(){
    try{
        await mongoose.connect(connectd);
        
    return NextResponse.json({
        status:200,
        result:"hello"
    })

}catch(error){
    
    console.error(error);
    return {
        status: 500,
        body: { message: "Internal Server Error" }
    };
}
}
export async function POST(res){
    try{

        const result =await res.json();
        // console.log(result);
        mongoose.connect(connectd);
        const post=await Comment.find({key:result.key});
        // console.log(post);
        

        
        
        return NextResponse.json({
            status:200,
            body:post
        })

    }catch(error){
        console.error(error);
    }
    
}

export async function PUT(res){
    try{

        const result =await res.json();
        // console.log(result);
        console.log(result.unique)
        mongoose.connect(connectd);
        let post =new Comment({
            username:result.username,
            text:result.text,
            key:result.key,
            unique:result.unique
        })
        const rs=await post.save();


        
        
        return NextResponse.json({
            status:200,
            body:"successful"
        })

    }catch(error){
        console.error(error);
    }
    
}

export const dynamic = "force-static";