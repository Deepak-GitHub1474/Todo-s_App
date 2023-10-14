import Todo from "../Todo/Todo";
import { useDispatch, useSelector } from "react-redux";

function TodoList() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)

  // function finishedTodo(id, newTodo) {
  //   dispatch({ type: "edit_todo", payload: { id, newTodo } });
  // }

  function deleteTodo(id) {
    dispatch({ type: "delete_todo", payload: { id } });
  }

  function finishedTodo(id, isFinished) {
    const todoStatus = isFinished ? "Completed" : "Pending";
    dispatch({ type: "finish_todo", payload: { id, state: isFinished, todoStatus } });
  }

  return (
    <div className="todos-container">
      {
        todos &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todoId={todo.id}
            todoText={todo.todoText}
            todoStatus={todo.todoStatus}
            isFinished={todo.isFinished}
            deleteTodo={() => deleteTodo(todo.id)}
            finishedTodo={(isFinished) => finishedTodo(todo.id, isFinished)}
          />
        ))
      }
    </div>
  );
}

export default TodoList;