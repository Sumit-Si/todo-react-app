import Todo from "./Todo";
import './TodoList.css';
import Button from "./Button";

function TodoList({data,editTodos,dispatch}) { 
     
    return ( 
        // 'Todo list'
        <div className="todo-container">
        {
            data.map(todoData =><Todo
                key={todoData.id}
                name={todoData.name}
                id={todoData.id}
                editTodos={editTodos}
                dispatch={dispatch}
                >
                </Todo>
            )
        }
        </div>
    )
}

export default TodoList;