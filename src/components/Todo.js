import "./Todo.css";
import Button from "./Button";

function Todo({name,id,deleteTodo }) {
  console.log('render Todo');

  
  return (
    // 'Todo'
    <>
      <div className="todo-box">
        <h4 style={{ fontSize: "0.94rem", padding: "0.4em 0.5em" }}>{name}</h4>
        <div className="btns">
          <Button>up</Button>
          <Button>down</Button>
          <Button smackClick={id} deleteTodo={deleteTodo}>X</Button>
        </div>
      </div>
    </>
  );
}

export default Todo;
