function TodoReducer(state = [], action) {
    if (action.type === "add_todo") {
        let idCount = state.length + 1
        const newTodo = {
            id: idCount,
            todoText: action.payload.todoText,
            todoStatus: "Pending",
            isFinished: false,
        };
        return ([...state, newTodo]);
    } else if (action.type === "edit_todo") {
        const newTodoList = state.map(todo => {
            if (todo.id === action.payload.id) {
                todo.text = action.payload.newTodo
            }
            return todo
        })
        return newTodoList
    } else if (action.type === "finish_todo") {
        const newTodoList = state.map(todo => {
            if (todo.id === action.payload.id) {
                todo.isFinished = action.payload.state
                todo.todoStatus = action.payload.todoStatus
            }
            return todo
        })
        return newTodoList
    } else if (action.type === "delete_todo") {
        const newTodoList = state.filter(todo => todo.id !== action.payload.id)
        return newTodoList
    }
    return state
}
export default TodoReducer