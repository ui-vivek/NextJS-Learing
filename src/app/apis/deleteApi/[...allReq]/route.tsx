import { NextResponse } from "next/server"

export async function DELETE(request:any,params:any) {
    let req = await request.json();
    console.log(req)
    console.log(params)
    return NextResponse.json("API Called Successfully.")
}