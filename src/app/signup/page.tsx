"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

const Register = () => {
  const router = useRouter();
  return (
    <div>
      <h1>This is Sign-Up Page.</h1>
      <Link href= "/signin">Sign In</Link>
      <br />
      <button onClick={()=>{router.push('/home')}}>Go To Home Page</button>
    </div>
  )
}

export default Register
