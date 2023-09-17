import Todo from "./Todo";
import './TodoList.css';
import Button from "./Button";

function TodoList({data,deleteTodo}) { 
     
    return (
        // 'Todo list'
        <div className="todo-container">
        {
            data.map(todoData =><Todo
                key={todoData.id}
                name={todoData.name}
                id={todoData.id}
                deleteId={deleteTodo}
                >
                </Todo>
            )
        }
        </div>
    )
}

export default TodoList;