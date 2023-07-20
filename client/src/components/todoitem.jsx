import Edit from './edit'
import { useState } from 'react';

const Todo = ({todo}) => {
    const [editMode, setEditMode] = useState(false);
    const dele = async (e, id) => {
        e.preventDefault()
        try {
             await fetch(`https://todo-list-ben.onrender.com/todos/${id}`, {
                method: 'DELETE',
            });
        window.location.reload();
    } catch (error) {
        console.error(error);
    }
}
const toggleEdit = () => {
    setEditMode(!editMode);
}
 return (
    <div className="containers" >
    {editMode ? <Edit todo={todo} /> : 
    <>
    <p className='items'>{todo.item}</p>
    <button className='ed' onClick={toggleEdit}>Edit</button>
    <button className='de' onClick={(e) => dele(e, todo.id)}>delete</button>
    </>
    }
    </div>
 )
}

export default Todo