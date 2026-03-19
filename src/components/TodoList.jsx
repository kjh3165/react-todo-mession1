import TodoItem from './TodoItem'

function TodoList({ todos, removeTodo, toggleTodo }) {
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    )
}

export default TodoList
