"use client"
import React from 'react'

/**
 * Renders a page displaying tasks for a specific day based on the URL parameters.
 * @param props - The properties object.
 * @param props.params - The parameters object containing URL segments.
 * @param props.params.child - An array of URL segments, where the first element represents the day.
 * @returns A React component displaying the day and tasks information.
 */
export default function Child({params}:any) {
    console.log(params)
  return (
    <div>
      <h1>This is the CatchAllSegment Page.</h1>
      <h3>This is Day {params.child[0]}  Tasks.</h3>
      <h3>This is Day {params.child[1]}  Tasks.</h3>
    </div>
  )
}
