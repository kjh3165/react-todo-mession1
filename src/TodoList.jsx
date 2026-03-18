import { getItem } from './storage'
import TodoItem from './TodoItem'

function TodoList({ removeTodo, toggleTodo }) {
    const todos = getItem('todos', [])

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    )
}

export default TodoList
