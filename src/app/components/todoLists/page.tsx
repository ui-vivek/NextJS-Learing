"use client"
import { deleteTodo, makeCompleted } from '@/app/redux/listSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TodoList = () => {
  const listData: any = useSelector((data: any) => data.listData.list)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>TO-DO List</h1>
      {listData.map((listItem: any) => (
        <div key={listItem.id}>
          <input type="checkbox" name="isCompleted" checked={listItem.isCompleted} />
          <span>{listItem.taskName}</span>
          <button onClick={() => dispatch(deleteTodo(listItem.id))}>Delete</button>
          <button onClick={() => dispatch(makeCompleted(listItem.id))}>Done</button>
        </div>
      ))}
    </div>
  )
}

export default TodoList
