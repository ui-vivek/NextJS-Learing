import { NextResponse } from "next/server";

export async function PUT(req:any) {
    let payload = await req.json();
    console.log(payload)
    return NextResponse.json(("updated"))
}

