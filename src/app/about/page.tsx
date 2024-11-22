"use client"
export default function About() {
  console.log(process.env.NODE_ENV)
  return (
    <div>
      <h1>About</h1>
      <p>This is about page of my Next Js Application.</p>
    </div>
  )
}
