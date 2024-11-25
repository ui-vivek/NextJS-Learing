import { NextResponse } from "next/server"
import getUsersLists from "../../../../../services/getUsersList";

 export async function GET(req:any,cont:any){
    let id = cont.params.id;
    const data = await getUsersLists();
    const user = data.find((user:any) => user.id == id);
    return NextResponse.json(user ? user : {msg:"User Not found"})
}