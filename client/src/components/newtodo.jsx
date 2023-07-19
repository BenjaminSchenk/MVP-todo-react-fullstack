import { useEffect, useState } from 'react'

const Newtodo = () => {
    const [newItem, setNewitem] = useState('')
    const recordResponse = (e) => {
        e.preventDefault()
        setNewitem(e.target.value)
    }

    const submitRespomse = (e) => {
        const obj = {
            item: newItem,
        }
        e.preventDefault()
        fetch('https://todo-list-ben.onrender.com/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }); setNewitem('')

    }

    return (
        <>
        <form>
        <input id="new"value={newItem} required onChange={(e) => recordResponse(e)}></input>
        <input id="sub" type="submit" value="submit" onSubmit={(e) => { submitRespomse(e) }}></input>
        </form>
        </>
    )
}

export default Newtodo