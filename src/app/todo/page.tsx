import React from 'react'
import AddTodo from '../components/addTodo/page'
import TodoList from '../components/todoLists/page'
import Link from 'next/link'

const Todo = () => {
    return (
        <div style={{ position: 'absolute', top: '50px' }} >
            <AddTodo />
            <hr />
            <div style={{ top: '50px' }}>
                <TodoList />
            </div>

            <Link href={'/deletedtodos'}>Deleted List</Link>
        </div>
    )
}

export default Todo
