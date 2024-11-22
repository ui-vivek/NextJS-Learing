"use client"

import { useEffect, useState } from "react"

export default function Apis() {
    const [product,setProduct] = useState([]);

    useEffect(()=>{
       const fetchData = async () => {
           const response = await fetch("https://dummyjson.com/products");
           const data = await response.json();
           console.log(data.products)
           setProduct(data.products);
       };
       fetchData();
    },[])
  return (
    <div>
        <h1>Product Lists:</h1>
        {product.map((item:any,index:number)=>{
            return (<>
                <p key={index}><span>{item.title}</span>, Price = <span >{item.price}</span></p>
            </>)
        })}
    </div>
  )
}
