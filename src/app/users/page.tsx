"use client"

import Link from "next/link";
import { useEffect, useState } from "react"
// import getUsersLists from '../../../services/getUsersList'

export default function Page() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            // const data = await getUsersLists();
            let data:any = await fetch('http://localhost:3000/dev/apis/getApi');
            data = await data.json();
            setUsers(data);
        }
        fetchData();
    }, [])
    return (
        <div>
            <h1>Users List:</h1>
            {users.length ? users.map((user: any) => (
                <div key={user.id}>
                    <Link href={`/users/${user.id}`}>{user.name}</Link>
                    <br />
                </div>)) : null}
        </div>
    )
}
