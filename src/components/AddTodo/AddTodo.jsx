import { useState } from "react";
import { useDispatch } from "react-redux";

function AddTodo() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch()

  function addTodo(todoText) {
    dispatch({type: "add_todo", payload: {todoText}});
  }

  return (
    <div className="form-container">
      <input
        type="text"
        name="todoText"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        className="input-box"
      />
      <button
        onClick={() => {
          addTodo(todoText)
          setTodoText("");
        }}
        className="add-btn"
      > Add</button>
    </div>
  );
}
export default AddTodo;
