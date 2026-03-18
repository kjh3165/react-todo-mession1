import { useState } from 'react'
import { getItem, setItem } from './storage'

function useTodos() {
    const [todos, setTodos] = useState([])
    const [lastId, setLastId] = useState(1)

    const addTodo = (text) => {
        const todos = getItem('todos', [])
        const lastId = getItem('lastId', 1)
        setTodos([...todos, { id: lastId, text: text, checked: false }])
        setLastId(lastId + 1)
        setItem('todos', [...todos, { id: lastId, text: text, checked: false }])
        setItem('lastId', lastId + 1)
    }

    const removeTodo = (id) => {
        const todos = getItem('todos', [])
        setTodos(todos.filter((todo) => todo.id != id))
        setItem(
            'todos',
            todos.filter((todo) => todo.id != id),
        )
    }

    const toggleTodo = (id) => {
        const todos = getItem('todos', [])
        setTodos(todos.map((todo) => (todo.id != id ? todo : { ...todo, checked: !todo.checked })))
        setItem(
            'todos',
            todos.map((todo) => (todo.id != id ? todo : { ...todo, checked: !todo.checked })),
        )
    }

    return {
        addTodo,
        removeTodo,
        toggleTodo,
    }
}

export default useTodos
