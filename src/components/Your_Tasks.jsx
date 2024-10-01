import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import React from 'react'

const Your_Tasks = () => {
    const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos")) 
      setTodos(todos)
    }
  }, [])
  

  const saveToLS = ()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(item => item.id === id)
    setTodo(t[0].todo);
    let newTodos = todos.filter(item => {
      return item.id !==id;
    })
    setTodos(newTodos)
    saveToLS()
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !==id;
    })
    setTodos(newTodos)
    saveToLS()
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveToLS()
  }
  const handleAdd = () => {
    setTodos([...todos, {id: uuidv4(), todo, isCompleted:false}])
    setTodo("")
    saveToLS()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
    saveToLS()
  }
  return (
    <div className="container my-5 mx-auto rounded-xl p-3 bg-slate-200 min-h-screen w-1/2">
      <h1 className="font-bold text-2xl mb-4 ">iTask - A task manager</h1>
        <div className="add todo">
          <h2 className="text-lg font-bold">Add a todo</h2>
          <div className="todos flex flex-col">
          <input onChange={handleChange} value={todo} type="text" placeholder="Write here" className="w-full my-4 p-1 rounded-full" />
          <button onClick = {handleAdd} disabled = {todo.length <1} className="bg-slate-500 text-white hover:bg-slate-700 rounded-lg p-4 py-1 mb-4 cursor-pointer text-sm font-bold">Save</button>
          </div>
        </div>
        <input onChange={toggleFinished} type="checkbox" checked={showFinished}/> Show Finished
          <h2 className="text-lg font-bold mb-4">My Todos</h2>
          <div className="todos">
            {todos.length === 0 && <div>No Todos to display</div>}
            {todos.map(item=>{
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between w-1/2 my-2">
              <div className="flex gap-4">
              <input onChange={handleCheckbox} name={item.id} type="checkbox" checked={item.isCompleted} />
              <div className={item.isCompleted?"line-through":""} >{item.todo}</div>
              </div>
              <div className="buttons flex h-full">
                <button onClick = {(e) => handleEdit(e, item.id)} className="bg-slate-500 text-white hover:bg-slate-700 rounded-lg p-4 py-2 mx-3 cursor-pointer text-sm font-bold"><FaEdit /></button>
                <button onClick = {(e)=> handleDelete(e, item.id)} className="bg-slate-500 text-white hover:bg-slate-700 rounded-lg p-4 py-2 mx-3 cursor-pointer text-sm font-bold"><MdDelete /></button>
              </div>
            </div>
            })}
          </div>
      </div>
  )
}

export default Your_Tasks
