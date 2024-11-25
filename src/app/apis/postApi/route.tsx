import { NextResponse } from "next/server";

export async function POST(request:any){
    console.log(request);

    return NextResponse.json({"Created":true})
} 