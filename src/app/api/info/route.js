import mongoose from 'mongoose'
import { connectd } from "@/app/lib/db";
import { User } from "@/app/lib/model/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { useGlobalContext } from '@/app/context/user';

export async function  GET(){
    try{

        const  user = await User.findOne({username:username});


    
    return NextResponse.json({
        status:200,
        result:user
    })

}catch(error){
    mongoose.connect(connectd);
    console.error(error);
}
}

export async function POST(req){
    try{

        const{username}=await req.json();
        mongoose.connect(connectd);

        
        const  user = await User.findOne({username:username});
        return NextResponse.json({
            status:200,
            body:user
        })

    }catch(error){
        console.error(error);
    }
}

export const dynamic = "force-static";