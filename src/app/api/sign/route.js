import mongoose from 'mongoose'
import { connectd } from "@/app/lib/db";
import { User } from "@/app/lib/model/user";
import { NextRequest, NextResponse } from "next/server";
import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

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

export async function POST(req) {
    try {
        await mongoose.connect(connectd);

        const resp = await req.json();
        

        if (!resp.username || !resp.password) {
            return NextResponse.json({
                message: "Please enter fields"
              }, {
                status: 400,
              });
        }
        const username=resp.username;
        const password=resp.password;
        

        const userExist = await User.findOne({ username:username });
        if (userExist) {
            return NextResponse.json({
                message: "already"
              }, {
                status: 409,
              });
        }
        const saltRounds = 10; // Number of salt rounds for hashing
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = new User({
            username:username,
            password:hashedPassword,
            profile: faker.image.urlLoremFlickr({ category: 'nature' })
        });

        const result = await user.save();

        return NextResponse.json({
            message: "created"
          }, {
            status: 200,
          });
        // return NextResponse.json(
        //     {
        //         status:200
        //     }

        // )
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            status: 500,
            result: "Internal server error."
        });
    }
}



export const dynamic = "force-static";