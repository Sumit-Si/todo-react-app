import "./Button.css";

function Button({ children, id, deleteTodo, editTodos }) {
  const childProps = children.props.children;
  // console.log(children.props.children);
  function handleClick() {
    // console.log(smackClick);
    if (childProps === "edit_note") {
      editTodos(id);
    } else if (childProps === "delete") {
      deleteTodo(id);
    } 
    // else if(childProps === "arrow_upward") {

    // } else if(childProps === "arrow_downward") {

    // }
  }
  return (
    <button onClick={handleClick} className="btn">
      {children}
    </button>
  );
}

export default Button;
