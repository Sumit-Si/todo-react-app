import "./Button.css"; 

function Button({ children, id,editTodos, dispatch }) {
  const childProps = children.props.children;
  // console.log(editTodos);
  // console.log(children.props.children);
  function handleClick() {
    // console.log(smackClick);
    if (childProps === "edit_note") {
      editTodos(id);
    } else if (childProps === "delete") {
      // deleteTodo(id);
      dispatch({type:'DELETE',payload:id})
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
