"use client"
import { useDispatch, useSelector } from 'react-redux'
const Page = () => {
    const deletedList :any= useSelector((data:any)=> data.deletedList);
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
