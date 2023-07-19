import { useEffect, useState } from 'react'

const Newtodo = () => {
    const [newItem, setNewitem] = useState('')
    const recordResponse = (e) => {
        setNewitem(e.target.value)
    }

    const submitRespomse = (e) => {
        
    }

    return (
        <>
        <form>
        <input id="new"value="" required onChange={(e) => recordResponse(e)}></input>
        <input id="sub" type="submit" value="submit" onSubmit={(e) => { submitRespomse(e)}}></input>
        </form>
        </>
    )
}

export default Newtodo