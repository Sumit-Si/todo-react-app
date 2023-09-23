import "./Todo.css";
import Button from "./Button";

function Todo({ name, id, deleteTodo, editTodos }) {
  console.log("render Todo");

  return (
    // 'Todo'
    <>
      <div className="todo-box">
        <h4 style={{ fontSize: "0.94rem", padding: "0.4em 0.5em" }}>{name}</h4>
        <div className="btns">
          <Button>
            <span className="material-symbols-outlined">arrow_upward</span>
          </Button>
          <Button>
            <span className="material-symbols-outlined">arrow_downward</span>
          </Button>
          <Button id={id} editTodos={editTodos}>
            <span className="material-symbols-outlined">edit_note</span>
          </Button>
          <Button id={id} deleteTodo={deleteTodo}>
            <span className="material-symbols-outlined">delete</span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Todo;
