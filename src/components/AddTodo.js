import { useContext } from "react";
import TodoDispatchContext from "../Context/TodoContext";
import './AddTodo.css';

function AddTodo({todos}) {

    const dispatch = useContext(TodoDispatchContext);

    function handleChange(e) {
        // console.log(dispatch);
        // dispatch
        console.log(e.target.name,e.target.value);

    } 

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        // 'Add Todo'
        <div className="form-cont">
            <form>
                <input type="text" class="todo-input" name="todo-name" placeholder="Add Todo" onChange={handleChange} />
                <input type="submit" className="todo-input input-btn" value={'submit'} onSubmit={handleSubmit}/>
            </form>
        </div>
    )
}

export default AddTodo;