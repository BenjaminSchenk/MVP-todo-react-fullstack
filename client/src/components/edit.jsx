import { useState } from 'react' 

const Edit = ({todo}) => {
    const [input, setInput] = useState('')
    const setItem = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }

    const updatedItem = async (e) => {
        e.preventDefault()
        const obj = {
            item: input,
        }
        try {
             await fetch(`https://todo-list-ben.onrender.com/todos/${todo.id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(obj),
            });
        } catch (error) {
            console.error(error);
          } window.location.reload();
}
    return (
        <div id="update">
            <form onSubmit={updatedItem}>
                <input type="text" value={input} onChange={(e) => setItem(e)}/>
                <input type="submit" value="Update"/>
            </form>
        </div>
    )
}

export default Edit