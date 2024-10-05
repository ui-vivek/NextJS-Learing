"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

const Home =()=>{
    const router = useRouter()
    const navigat=(route:any)=>{ // this is the function to use for navugation.
        router.push(route)
    }
    return(
        <div>
            <h1>Home</h1>
            <p>This is Home Page</p>
            <button onClick={()=>navigat('/signin')}>Sign-In</button>
            <button onClick={()=>navigat('/signup')}>Sign-Up</button>
            <button onClick={()=>router.push('/signup')}>Sign-Up</button> //we can use like this
            <Link href='/signin'>Sign In</Link>
            <Link href='/signup'>Sign Up</Link>
        </div>
    )
}
export default Home;