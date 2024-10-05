import Link from "next/link";
import React from "react";
import './style.css'

export default function RootLayout({ children }: any) {
  return(
    <>
    <ul className="navBar">
        <li > <Link href='/home'>Home</Link></li>
        <li><Link href='/home/dashoard'>Dashoard</Link></li>
        <li><Link href='/home/menu'>Manu</Link></li>
        <li><Link href='/home/about'>About</Link></li>
    </ul>
    <div>{children}</div>
    </>
  );
}
