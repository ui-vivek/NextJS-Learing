import { db } from "@/lib/db";
import { UsersList } from "@/lib/models/users";
import { Users } from "@/utils/users";
import { NextResponse } from "next/server";

export async function PUT(params: any, id: any) {
    params = await params.json();
    if(!params.Email || !params.Name){
        return NextResponse.json({Msg:"All fields are required.!"},{status:400})
    }
    let userId = id.params.id;
    console.log(userId)
    try {
        await db()
        let user =  await UsersList.findOne({userId:userId})
        console.log(user)
        if(!user){
            return NextResponse.json("User Not Found",{status:404})
        }
        user.Name = params.Name;
        user.Email = params.Email;
        await user.save();
        return NextResponse.json({ Msg:"User Updated Successfully",AllUsers: "" },{status:202})
    } catch (error) {
        console.log("Error",error)
    }
    // let user = Users.find((user: any) => user.userId == userId)
    // if(!user){
    //     return NextResponse.json("User Not Found",{status:404})
    // }
    // user.Email = params.Email;
    // user.Name = params.Name;
    // return NextResponse.json({ Msg:"User Updated Successfully",AllUsers: Users },{status:202})
}