"use client"

import Link from "next/link";
import { useEffect, useState } from "react"
// import getUsersLists from '../../../services/getUsersList'

export default function Page() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const basePath = process.env.NODE_ENV == "development" ? '/dev' : '/app';
            // const data = await getUsersLists();
            let data:any = await fetch(basePath+'/apis/getApi');
            data = await data.json();
            console.log(data)
            setUsers(data);
        }
        fetchData();
    }, [])
    return (
        <div>
            <h1>Users List:</h1>
            {users.length ? users.map((user: any) => (
                <div key={user._id}>
                    <Link href={`/users/${user.Email}`}>{user.Name}</Link>
                    <br />
                </div>)) : null}
        </div>
    )
}
