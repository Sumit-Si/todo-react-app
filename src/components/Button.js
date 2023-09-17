import './Button.css';

function Button({children,smackClick,deleteTodo}) {

    function handleClick() {
        // console.log(smackClick);
        deleteTodo(smackClick);
    }
    return (
        <button onClick={handleClick} className='btn'>{children}</button>
    )
}

export default Button;