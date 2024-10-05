"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import './style.css'

export default function RootLayout({ children }: any) {
  const path = usePathname();
  return(
    <>
    <ul className="navBar">
        <li > <Link href='/home'>Home</Link></li>
        <li><Link href='/home/dashoard'>Dashoard</Link></li>
        {path =='/home' ? <li><Link href='/home/menu'>Menu</Link></li> : null}
        <li><Link href='/home/about'>About</Link></li>
    </ul>
    <div>{children}</div>
    </>
  );
}
