import mongoose from 'mongoose'
import { connectd } from "@/app/lib/db";
import { Post } from "@/app/lib/model/post"
import { NextRequest, NextResponse } from "next/server";

export async function  GET(){
    try{

        const res=await Post.find();

    
    return NextResponse.json({
        status:200,
        result:res
    })

}catch(error){
    mongoose.connect(connectd);
    console.error(error);
}
}

export async function POST(){
    try{

        // const result = await req.json();
        mongoose.connect(connectd);

        // for(let i=0;i<result.length;i++){
        //     let post=new Post({
        //         text: result[i].text ,
        //         username: result[i].username,
        //         image:result[i].ima_ge,
        //         date:result[i].data,
        //         profile:result[i].av
        //     })
        //     const rs=await post.save();

        // }
        // let post =new Post({
        //     text:"dflsdjdlf",
        //     username:"kartikeya",
        //     image:"",
        //     date:"",
        //     profile:""
        // })
        // const rs=await post.save();
        const res=await Post.find();
        return NextResponse.json({
            status:200,
            result:res
        })

    }catch(error){
        console.error(error);
    }
}

export const dynamic = "force-static";