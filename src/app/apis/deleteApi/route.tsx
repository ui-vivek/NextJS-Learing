import { db } from "@/lib/db";
import { UsersList } from "@/lib/models/users";
// import { Users } from "@/utils/users";
import { NextResponse } from "next/server";
export async function DELETE(request: any) {
    let req = await request.json();
    console.log(req)
    if(typeof(req.userId) != "number"){
        return NextResponse.json("Id must be a number")
    }

    let id = req.userId;
    try {

        await db()
        let user = await UsersList.findOne({userId:id})
        if(!user){
            return NextResponse.json({msg:"User Not found!"},{status:400})
        }
        await UsersList.deleteOne({userId:id});
        return NextResponse.json({msg:"User deleted successfully!"});
    } catch (error) {
        console.log(error)
    }
    // let user = Users.find((user:any)=>  user.userId == id)
    // if(!user){
    //     return NextResponse.json("User Not Fond.!")
    // }
    // let updatedUsersList = Users.filter((el:any) => el.userId !== id);
    // return NextResponse.json(updatedUsersList); 
}