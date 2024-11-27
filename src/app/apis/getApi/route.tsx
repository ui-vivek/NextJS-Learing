import { NextResponse } from "next/server";
// import getUsersLists from "../../../../services/getUsersList";
import { db } from "@/lib/db";
import { UsersList } from "@/lib/models/users";

export async function GET(){
    try {
        await db();
        let usersList = await UsersList.find();
        if(usersList.length){
            return NextResponse.json(usersList,{status:200})
        }
    } catch (error) {
        console.log("error",error)
    }
    // const users  = await getUsersLists();
    // return new Response("Hello, This is the API test using NEXT.JS")
    // return NextResponse.json(users)
    return NextResponse.json("API IS CALLED")
}