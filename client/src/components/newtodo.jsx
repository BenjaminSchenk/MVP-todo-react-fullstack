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
        const response = await fetch('https://todo-list-ben.onrender.com/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
            
        }); if (!response.ok) {
            // Handle non-2xx responses (e.g., server error)
            console.error('Server returned an error:', response.statusText);
            return;
        }

        // The request was successful, you can log or process the response if needed
        console.log('Response:', await response.json());
    }  catch (err) {
            console.error(err);
        } setNewitem('')
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