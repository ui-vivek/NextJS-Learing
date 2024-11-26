import { NextResponse } from "next/server";
// import { Users } from '../../../utils/users'
import { UsersList } from "@/lib/models/users";
import { db } from "@/lib/db";
export async function POST(req: any) {
    const payload = await req.json();
    await db();
    try {
        const isUser = await UsersList.findOne({ Email: payload.Email });
        if (isUser) {
            return NextResponse.json("User Already Registered", { status: 400 });
        }
        const newUser = await UsersList.create({ Name: payload.Name, Email: payload.Email, userId: await UsersList.countDocuments() + 1 });
        return NextResponse.json(newUser, { status: 201 });
    } catch (err) {
        console.error(err);
    }
        // let usersCount = await UsersList.find().then(users => users.length).catch(err => console.error(err));
    // console.log(usersCount)
    // await UsersList.create({
    //     Name: payload.Name,
    //     Email: payload.Email,
    //     userId: Users.length + 1,
    // })
    // await fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         Name: payload.Name,
    //         Email: payload.Email,
    //         userId: Users.length + 1,
    //     }),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     },
    // })
    //     .then((response) => response.json())
    //     .then(async (json) => Users.push(json));
}