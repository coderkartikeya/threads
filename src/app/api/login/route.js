// import { NextResponse } from "next/server";
import mongoose from 'mongoose'
import { connectd } from "@/app/lib/db";
import { User } from "@/app/lib/model/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { useGlobalContext } from '@/app/context/user';



async function comparePasswords(plainPassword, hashedPassword) {
    try {
        return await bcrypt.compare(plainPassword, hashedPassword);
    } catch (error) {
        console.error("Error comparing passwords:", error);
        return false;
    }
}

export async function GET(){
    
    try{
        
    await mongoose.connect(connectd);
    // const {username,password}=await pos.json();
    // const user=await User.findOne({username:username});
    // if (!user ) {
    //     // If user does not exist, return an appropriate response
    //    return NextResponse.json({status:404,result:"user not found"});
    // }
    

    return NextResponse.json( {
        status: 200,
        body: "success"
    });
}catch(error){
    console.error("Error in GET request:", error);
        return {
            status: 500,
            body: { message: "Internal Server Error" }
        };

}
   
}
export async function POST(req){
    
    try{
    await mongoose.connect(connectd);

    const { username, password } = await req.json();

    

    const user=await User.findOne({username:username});
    

    const hashedPassword = user.password;

        // Compare the entered password with the hashed password
        const passwordMatch = await bcrypt.compare(password, hashedPassword);

    

    

    if (!user || !(passwordMatch)) {
        return {
            status: 401, // Unauthorized
            body: { message: "Invalid username or password" }
        };
    }

    if(!username || !password){
        return NextResponse.json({
            status:409,
            result:"invalid input"
        })
    }

    

    

    return NextResponse.json({status:200,r:"done"});
}catch(error){
    console.error("Error in POST request:", error);
        return {
            status: 500,
            body: { message: "Internal Server Error" }
        };


}
}
export const dynamic = "force-static";
