"use client"

import Link from "next/link";

const Item =()=>{
   
    return(
        <div>
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