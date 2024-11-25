import { NextResponse } from "next/server";
import getUsersLists from "../../../../services/getUsersList";

export async function GET(request:any){
    const users  = await getUsersLists();
    // return new Response("Hello, This is the API test using NEXT.JS")
    return NextResponse.json(users)
}