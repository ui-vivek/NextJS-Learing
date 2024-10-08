"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
export default function CatchALlSegment() {
  const route = useRouter();
  return (
    <div>
      <button onClick={()=>{route.push('/catchAllSegment/1')}}>Day 1</button>
      <button onClick={()=>{route.push('/catchAllSegment/2')}}>Day 2</button>
    </div>
  )
}
