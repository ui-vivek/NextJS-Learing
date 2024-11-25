import { NextResponse } from "next/server";

export async function GET(request:any,cont:any){
    console.log(request)
    console.log("===============",cont)
    // return new Response("Hello, This is the API test using NEXT.JS")
    return NextResponse.json({name:"Singh",age:50,gender:"male"},{status:200})
}