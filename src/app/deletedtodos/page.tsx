"use client"
import {  useSelector } from 'react-redux'
const Page = () => {
    const deletedList :any= useSelector((data:any)=> data.listData.deletedList);
    console.log(deletedList)
  return (
    <ul>
     {deletedList.map((item:any)=>(
        <li key={item.id}>
            <s>{item.taskName}</s>
        </li>
     ))}
    </ul>
  )
}

export default Page
