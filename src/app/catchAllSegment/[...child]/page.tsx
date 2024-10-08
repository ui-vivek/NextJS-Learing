"use client"
import React from 'react'

export default function Child({params}:any) {
    console.log(params)
  return (
    <div>
      <h1>This is the CatchAllSegment Page.</h1>
      <h3>This is Day {params.child[0]}  Tasks.</h3>
    </div>
  )
}
