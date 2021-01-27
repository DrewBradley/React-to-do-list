import React from "react"

function ToDoItem() {
  return(
    <div className="to-do-item">
      <input type="checkbox" id="wake-up" name="wake-up" />
      <label for="wake-up">Wake Up!</label>
    </div>
  )
}

export default ToDoItem