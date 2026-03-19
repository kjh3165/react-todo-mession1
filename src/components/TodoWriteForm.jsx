function TodoWriteForm({ addTodo }) {
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        if (form.todo.value == '') {
            alert('할일을 입력해주세요')
            return
        }
        addTodo(form.todo.value)
        form.todo.value = ''
    }

    return (
        <form className="flex justify-center gap-x-4" onSubmit={handleSubmit}>
            <input
                type="text"
                id="todo"
                className="border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-indigo-600"
                placeholder=" 할 일을 입력하세요 "
            />
            <button
                type="submit"
                className=" p-2.5 bg-indigo-600 text-white border-0 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-indigo-700"
            >
                추가
            </button>
        </form>
    )
}

export default TodoWriteForm
