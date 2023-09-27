import "./Todo.css";
import Button from "./Button";

function Todo({ name, id,editTodos, dispatch }) {
  console.log("render Todo"); 

  return (
    // 'Todo'
    <>
      <div className="todo-box">
        <h5 style={{ fontSize: "0.84rem", padding: "0 0.5em" }}>{name}</h5>
        <div className="btns">
          <Button>
            <span className="material-symbols-outlined">arrow_upward</span>
          </Button>
          <Button>
            <span className="material-symbols-outlined">arrow_downward</span>
          </Button>
          <Button id={id} editTodos={editTodos} dispatch={dispatch}>
            <span className="material-symbols-outlined">edit_note</span>
          </Button>
          <Button id={id}  dispatch={dispatch}>
            <span className="material-symbols-outlined">delete</span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Todo;
