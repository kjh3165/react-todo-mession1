function TodoItem({ todo, removeTodo, toggleTodo }) {
    return (
        <li style={{ textDecorationLine: todo.checked ? 'line-through' : 'none' }}>
            <input className="check-box" type="checkbox" onChange={() => toggleTodo(todo.id)} checked={todo.checked} />
            {todo.id} : {todo.text}
            <button className="delete-btn" onClick={() => removeTodo(todo.id)}>
                X
            </button>
        </li>
    )
}

export default TodoItem
