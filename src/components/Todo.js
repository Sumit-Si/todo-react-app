import "./Todo.css";
import Button from "./Button";

function Todo({ name }) {
  return (
    // 'Todo'
    <>
      <div className="todo-box">
        <h4 style={{ fontSize: "1.2rem", padding: "0.46em 0.5em" }}>{name}</h4>
        <div className="btns">
          <Button>up</Button>
          <Button>down</Button>
          <Button>X</Button>
        </div>
      </div>
    </>
  );
}

export default Todo;
