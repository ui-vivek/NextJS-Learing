import { NextResponse } from "next/server"
// import getUsersLists from "../../../../../services/getUsersList";
import { db } from "@/lib/db";
import { UsersList } from "@/lib/models/users";

 export async function GET(req:any,cont:any){
    let id = cont.params.id;
    // const data = await getUsersLists();
    // const user = data.find((user:any) => user.id == id);
    // return NextResponse.json(user ? user : {msg:"User Not found"})
    try {
        await db()
        let user = await UsersList.find({userId:id});
        if(!user.length){
            return NextResponse.json("User Not Found!",{status:400})
        }
        return NextResponse.json(user,{status:200})
    } catch (error) {
        console.log("Error",error)
    }
}