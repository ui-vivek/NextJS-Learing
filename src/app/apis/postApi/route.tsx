import { NextResponse } from "next/server";
import {Users}  from '../../../utils/users'
export async function POST(req: any) {
    let payload = await req.json();
    let isUser = await Users.find((user: any) => {
        return user.Email == payload.Email;
    })
    if (isUser) {
        return NextResponse.json("User Already Registered",{status:400})
    }
    await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            Name: payload.Name,
            Email: payload.Email,
            userId: Users.length + 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then(async (json) => Users.push(json));
    return NextResponse.json(Users,{status:201})
}