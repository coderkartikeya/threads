import mongoose from 'mongoose'
import { connectd } from "@/app/lib/db";
import { Post } from "../../lib/model/post";
import { User } from "../../lib/model/user";
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

export async function POST(res){
    try{

        const result = await res.json();
        mongoose.connect(connectd);
        const rt=await User.find({username:result.username});
        let post=new Post({
            text:result.text,
            username:result.username,
            profile:rt.profile,
            unique:rt.key
        })
        const t=await post.save();
        

        // for(let i=0;i<result.data.length;i++){
        //     let post=new Post({
        //         text: result.data[i].text ,
        //         username: result.data[i].username,
        //         image:result.data[i].ima_ge,
        //         date:result.data[i].data,
        //         profile:result.data[i].av,
        //         unique:result.data[i].key,
                
        //     })
        //     const rs=await post.save();

        // }
        // let post =new Post({
        //     text:"dflsdjdlf",
        //     username:"kartikeya",
        //     image:"",
        //     date:"",
        //     profile:"",
        //     unique:"",
        //     like:0,
        //     comment:0
        // })
        // const rs=await post.save();
        // const r=await Post.find();
        return NextResponse.json({
            status:200,
            result:result
        })
        // return NextResponse.json({status:200,r:res})

    }catch(error){
        console.error(error);
    }
}

export const dynamic = "force-static";