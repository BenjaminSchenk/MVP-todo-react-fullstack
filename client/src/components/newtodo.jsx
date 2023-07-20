import { useState } from 'react'

const Newtodo = () => {
    const [newItem, setNewitem] = useState('')
    const recordResponse = (e) => {
        e.preventDefault()
        setNewitem(e.target.value)
    }

    const submitRespomse = async (e) => {
        const obj = {
            item: newItem,
        }
        e.preventDefault()
        try {
         await fetch('https://todo-list-ben.onrender.com/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
           
        });
    }  catch (err) {
            console.error(err);
        } setNewitem('')
        window.location.reload();
    }

    return (
        <>
        <form onSubmit={(e) => { submitRespomse(e) }}>
        <input id="new"value={newItem} required onChange={(e) => recordResponse(e)}></input>
        <input id="sub" type="submit" value="New"></input>
        </form>
        </>
    )
}

export default Newtodo