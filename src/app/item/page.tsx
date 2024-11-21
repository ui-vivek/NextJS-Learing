"use client"

import Link from "next/link";
import Script from "next/script";

const Item =()=>{

    return(
        <div>
            {/*
            * Loads an external JavaScript file and logs a message upon successful loading.
            * @param {string} src - The path to the JavaScript file to be loaded.
            * @param {() => void} onLoad - A callback function that executes when the script is successfully loaded.
            * @returns {JSX.Element} A Script component that loads the specified JavaScript file.
            */}
            <Script 
            src="/testFunction.js"
            onLoad={() => {
                console.log("script loaded successfully")
            }}
            />
            <h1>This is Items Page</h1>
            <ul>
                <li><Link href='/item/apple'>Apple</Link></li>
                <li><Link href='/item/samsung'>Samsung</Link></li>
                <li><Link href='/item/vivo'>Vivo</Link></li>
                <li><Link href='/item/oneplus'>OnePlus</Link></li>
                <li><Link href='/item/nothing'>Nothing</Link></li>
            </ul>
        </div>
    )
}
export default Item;