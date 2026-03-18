import TodoList from './TodoList'
import TodoWriteForm from './TodoWriteForm'
import useTodos from './useTodos'

function App() {
    const { addTodo, removeTodo, toggleTodo } = useTodos()

    return (
        <>
            <TodoWriteForm addTodo={addTodo} />
            <TodoList removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </>
    )
}

export default App
