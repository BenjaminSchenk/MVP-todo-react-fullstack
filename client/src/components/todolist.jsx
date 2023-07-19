import Todo from "./todoitem"

const Todolist = ({todos}) => {
    return (
        <>
        <div id="container">
            {todos.map((todo, index) => 
                <Todo 
                todo={todo}
                key={index}
                />
            )}
        </div>
        </>
    )
}
export default Todolist