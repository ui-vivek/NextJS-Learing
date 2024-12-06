import React from 'react'
import AddTodo from '../components/addTodo/page'
import TodoList from '../components/todoLists/page'

const Todo = () => {
    return (
        <div style={{ position: 'absolute', top: '50px' }} >
            <AddTodo />
            <hr />
            <div style={{ top: '50px' }}>
                <TodoList />
            </div>
        </div>
    )
}

export default Todo
