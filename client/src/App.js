import { useEffect, useState } from 'react'
import './App.css';
import Header from './components/header'
import Loading from './components/loading'
import Newtodo from './components/newtodo'
import Todolist from './components/todolist'

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(function() {
    const getData = async () => {
      const result = await fetch('https://todo-list-ben.onrender.com/todos')
      const data = await result.json()
      setTodos(data)
    }
    getData()
  }, [])
  return ( 
    <>
    <Header />
    {todos.length === 0 ? (
      <Loading />
    ) : (
      <>
      <Newtodo />
      <Todolist />
      </>
    )}
  </>
  );
}

export default App;
