"use client"
import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {
  const listData:any = useSelector((data:any)=> data.list)
  console.log(listData)
  return (
    <div>
      <h1>TO-DO List</h1>
      {listData.map((listItem:any) => (
        <div key={listItem.id}>{listItem.taskName}</div>
      ))}
    </div>
  )
}

export default TodoList
