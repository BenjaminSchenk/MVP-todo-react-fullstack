const Todo = ({todo}) => {
    const handleClick = () => {
        
    }
 return (
    <div className="containers" onClick={handleClick}>
    <p>{todo.item}</p>
    </div>
 )
}

export default Todo