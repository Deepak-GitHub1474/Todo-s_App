import "./App.css"
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <AddTodo />
        <TodoList />
      </Provider>
    </div>
  );
}
export default App;
