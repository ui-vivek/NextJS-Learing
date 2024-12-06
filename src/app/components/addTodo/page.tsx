"use client"
import { addTodo } from '@/app/redux/listSlice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const AddTodoList = () => {
    const [taskName, setTaskName] = useState('');
    const dispatch = useDispatch();
    const todoDispatch = (e: any) => {
        e.preventDefault();
        dispatch(addTodo({ taskName }))
    }
    return (
        <div>
            <form>
                <input type="text" placeholder='add list item' onChange={(e) => setTaskName(e.target.value)} />
                <button onClick={() => todoDispatch(event)}>Add</button>
                <button>Delete</button>
                <button>Complated</button>
            </form>

        </div>
    )
}

export default AddTodoList
