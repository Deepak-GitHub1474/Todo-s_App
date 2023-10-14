import { useState } from "react";

function Todo({
  todoId,
  todoText,
  todoStatus,
  isFinished,
  deleteTodo,
  finishedTodo,
}) {
  const [isEditing, setISEdit] = useState(false);
  const [todo, setTodo] = useState(todoText);

  return (
    <div className="todo-container">
      {isEditing ? (
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="edit-input-box"
        />
      ) : (
        <h3 className="todo-title">Title: {todo} </h3>
      )}
      <div className="status-container">
        <p className="todo-status">Status: {todoStatus}</p>
        <input
          type="checkbox"
          checked={isFinished}
          onChange={() => finishedTodo(!isFinished)}
          className="custom-checkbox"
        />
      </div>

      <div className="btn-container">
        <button
          onClick={() => {
            setISEdit(!isEditing);
          }}
          className="update-btn"
        >
          {isEditing ? " Save" : " Edit"}
        </button>

        <button onClick={deleteTodo} className="remove-btn"> Delete</button>
      </div>
    </div>
  );
}
export default Todo;
