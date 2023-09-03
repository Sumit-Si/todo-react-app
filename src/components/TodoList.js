import Todo from "./Todo";
import data from "../todo-data/data";
import './TodoList.css';
import Button from "./Button";

function TodoList() {
     
    return (
        // 'Todo list'
        <div className="todo-container">
        {
            data.map(todoData =><Todo
                name={todoData.name}
                >
                </Todo>
            )
        }
        </div>
    )
}

export default TodoList;