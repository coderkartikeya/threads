import mongoose from 'mongoose'
import { connectd } from "@/app/lib/db";
import { User } from "@/app/lib/model/user";
import { NextRequest, NextResponse } from "next/server";

export async function  GET(){
    try{

    
    return NextResponse.json({
        status:200,
        result:"true"
    })

}catch(error){
    console.error(error);
}
}

export async function POST(){
    try{
        return NextResponse.json({
            status:200,
            result:"true"
        })

    }catch(error){
        console.error(error);
    }
}

export const dynamic = "force-static";