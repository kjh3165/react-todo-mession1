import { useEffect, useState } from 'react'
import { getItem, setItem } from './storage'

function useTodos() {
    const [todos, setTodos] = useState(() => {
        const storedTodos = getItem('todos', [])
        return storedTodos
    })
    const [lastId, setLastId] = useState(() => {
        const storedLastId = getItem('lastId', 1)
        return storedLastId
    })

    useEffect(() => {
        setItem('todos', todos)
        setItem('lastId', lastId)
    }, [todos, lastId])

    const addTodo = (text) => {
        setTodos([...todos, { id: lastId, text: text, checked: false }])
        setLastId(lastId + 1)
    }

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id != id))
    }

    const toggleTodo = (id) => {
        setTodos(todos.map((todo) => (todo.id != id ? todo : { ...todo, checked: !todo.checked })))
    }

    return {
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
    }
}

export default useTodos
