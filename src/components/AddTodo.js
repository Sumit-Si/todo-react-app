import { useContext, useEffect, useState } from "react";
import TodoDispatchContext from "../Context/TodoContext";
import './AddTodo.css';

const initialTodos = {name:''};

function AddTodo({dispatch,editTableTodo}) { 
    // console.log(addTodos);
    console.log('render AddTodo');

    const [todo,setTodos] = useState(initialTodos);
    // console.log(todo); 

    // const dispatch = useContext(TodoDispatchContext);

    function handleChange(e) {
        e.stopPropagation();
        setTodos({...todo,
            [e.target.name] : e.target.value});
    } 

    function handleSubmit(e) {
        e.preventDefault();
        if(editTableTodo) {
            dispatch({type:'UPDATE',payload:todo});
            // updateTodo(todo);
        } else {
            dispatch({type:'ADD',payload:todo});
            // addTodos(todo);             // this will take the todo data to App Component where it is defined.
        }
        setTodos(initialTodos);     // this will clear the input after submited form.
    }

    useEffect(() => {
        // console.log('useEffect');
        if(editTableTodo) {
            setTodos(editTableTodo);        // now it works for edit todos.
        }
    },[editTableTodo]);

    return (
        // 'Add Todo'
        <div className="form-cont">
            <form>
                <input type="text" className="todo-input" name="name" placeholder="Add Todo" onChange={handleChange} value={todo.name} />
                <input type="submit" className="todo-input input-btn" value={editTableTodo ? 'edit' : 'submit'} onClick={handleSubmit}/>
            </form>
        </div>
    )
}

export default AddTodo;