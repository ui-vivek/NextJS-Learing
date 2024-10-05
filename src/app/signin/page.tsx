"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

export const Login = () => {
  const router = useRouter()
  return (<>
    <div>This is Sign-In Page.</div>
    <Link href="/signup">Sign Up</Link>
    <button onClick={()=>router.push('/home')}>Go To Home Page</button>
    </>
  )
}
export default Login;