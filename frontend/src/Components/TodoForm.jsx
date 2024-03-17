import React, { useState } from 'react';
import "./TodoForm.css";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { AddtodoServer, updateTodo,updateServer } from '../actions';
const TodoForm = ({ todoId, setTodoId }) => {
  const navigate = useNavigate()
  const isRegistered = useSelector((state) => state.allReducer.isregistred)
  const todoList = useSelector((state)=>state.allReducer.todoList)
  console.log("Addlist",todoList)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (isRegistered) {
      if (inputData.title && inputData.task && inputData.dueDate !== "") {
        if (todoId === null) {
          dispatch(AddtodoServer(inputData))
   
        } else {
          dispatch(updateServer(todoId,inputData))
        }
        clear()
        navigate("/products")
      }
    }
    else {
      alert("Can't Create Task... Please Login !")
    }
    // console.log(inputData)   we have to send this inputData to server 
  }

  const clear = () => {
    setTodoId(null)
    setinputdata(null)
  }

  const [inputData, setinputdata] = useState({
    title: "",
    task: "",
    dueDate: ""
  })

  const dispatch = useDispatch()
  
  return (
    <div className='todoform-container'>
      <form className='todo-form'>
        <h3 className='heading'>{todoId ? "Update Form" : "Todo Form"}</h3>
        <input type="text" placeholder='Title' className='todo-input' name='title' value={inputData.title} onChange={(e) => { setinputdata({ ...inputData, title: e.target.value }) }} />
        <textarea type="message" placeholder='Task' className='todo-input' name='task' value={inputData.task} onChange={(e) => { setinputdata({ ...inputData, task: e.target.value }) }} />
        <input type="date" placeholder='Due Date' className='todo-input' name='dueDate' value={inputData.dueDate} onChange={(e) => { setinputdata({ ...inputData, dueDate: e.target.value }) }} />
        <button className='todo-button' onClick={handleSubmit}>{todoId ? "Update Todo" : "Add Todo"}</button>
      </form>
    </div>
  )
}

export default TodoForm
