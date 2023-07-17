import React, { useState } from "react"
import "./TodoList.css"

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }])
      setNewTodo("")
    }
  }

  const handleDeleteTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const handleToggleTodo = index => {
    const newTodos = [...todos]
    newTodos[index].checked = !newTodos[index].checked
    setTodos(newTodos)
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="todo-input-container">
        <input
          className="todo-input"
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <button className="add-button" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <div className="todo-text">
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleToggleTodo(index)}
              />
              <span className={todo.checked ? "completed" : ""}>
                {todo.text}
              </span>
            </div>
            <button
              className="todo-button"
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
