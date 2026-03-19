import TodoList from './components/TodoList'
import TodoWriteForm from './components/TodoWriteForm'
import useTodos from './useTodos'

function App() {
    const { todos, addTodo, removeTodo, toggleTodo } = useTodos()

    return (
        <div className="flex items-start justify-center bg-gray-100 text-gray-800 min-h-screen">
            <div className="justify-center min-w-[500px] my-[60px] py-[20px] rounded-[12px] shadow-[0_10px_25px_rgba(0,0,0,0.05)] bg-white ">
                <h1 className="text-4xl font-bold text-center pb-[20px]">Todo App</h1>
                <TodoWriteForm addTodo={addTodo} />
                <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
            </div>
        </div>
    )
}

export default App
