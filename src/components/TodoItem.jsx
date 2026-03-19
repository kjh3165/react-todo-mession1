function TodoItem({ todo, removeTodo, toggleTodo }) {
    return (
        <li className="text-center">
            <input
                className=" mr-[10px] scale-150"
                type="checkbox"
                onChange={() => toggleTodo(todo.id)}
                checked={todo.checked}
            />
            <div className={`inline-block text-center ${todo.checked ? 'line-through' : 'none'}`}>
                {todo.id} : {todo.text}
            </div>
            <button
                className="ml-[10px] px-1 bg-white border border-black text-red-500 text-sm cursor-pointer hover:underline"
                onClick={() => removeTodo(todo.id)}
            >
                X
            </button>
        </li>
    )
}

export default TodoItem
