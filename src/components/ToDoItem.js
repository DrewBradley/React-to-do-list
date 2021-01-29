import React from "react"

function ToDoItem(props) {
  const doneSteez = {textDecorationLine: 'line-through'}

  return(
    <div className="to-do-item">
      <input 
        type="checkbox" 
        id="todo-item" 
        checked={props.item.completed}
        onChange={() => props.handleClick(props.item.id)}
      />
      <label style={props.item.completed ? doneSteez : null} htmlFor="todo-item">{props.item.item}</label>
    </div>
  )
}

export default ToDoItem