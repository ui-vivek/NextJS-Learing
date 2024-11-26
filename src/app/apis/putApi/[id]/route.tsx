import { Users } from "@/utils/users";
import { NextResponse } from "next/server";

export async function PUT(params: any, id: any) {
    params = await params.json();
    if(!params.Email || !params.Name){
        return NextResponse.json({Msg:"All fields are required.!"},{status:400})
    }
    let userId = id.params.id;
    let user = Users.find((user: any) => user.userId == userId)
    if(!user){
        return NextResponse.json("User Not Found",{status:404})
    }
    user.Email = params.Email;
    user.Name = params.Name;
    return NextResponse.json({ Msg:"User Updated Successfully",AllUsers: Users },{status:202})
}