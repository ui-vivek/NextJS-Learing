import { db } from "@/lib/db";
import { UsersList } from "@/lib/models/users";
import { NextResponse } from "next/server";

export async function GET(request: any, params: any) {
    await db()
    let users = await UsersList.find();
    console.log(users)
    return NextResponse.json("connect to mongodb data base api is called")

}