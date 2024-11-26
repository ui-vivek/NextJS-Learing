import { Users } from "@/utils/users";
import { NextResponse } from "next/server";
export async function DELETE(request: any) {
    let req = await request.json();
    console.log(req)
    if(typeof(req.userId) != "number"){
        return NextResponse.json("Id must be a number")
    }

    let id = req.userId;
    let user = Users.find((user:any)=>  user.userId == id)
    if(!user){
        return NextResponse.json("User Not Fond.!")
    }
    let updatedUsersList = Users.filter((el:any) => el.userId !== id);
    return NextResponse.json(updatedUsersList); 
}