"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

export default function page() {
    const router = useRouter()
  return (
    <div>
        <h1>Menu Page</h1>
        <h4> This is Nested Routing Page.</h4>
        <button onClick={()=>{router.push('/home')}}>Back</button>
    </div>
  )
}
