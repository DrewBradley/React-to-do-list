import React from "react"

function ToDoItem(props) {
  return(
    <div className="to-do-item">
      <input 
        type="checkbox" 
        id="todo-item" 
        checked={props.item.completed}
        onChange={() => props.handleClick(props.item.id)}
      />
      <label for="todo-item">{props.item.item}</label>
    </div>
  )
}

export default ToDoItem