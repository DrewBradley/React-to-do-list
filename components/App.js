import React from "react"

function App() {
  return(
    <div>
      <input type="checkbox" id="wake-up" name="wake-up" />
      <label for="wake-up">Wake Up!</label>
      <input type="checkbox" id="get-dressed" name="get-dressed" />
      <label for="get-dressed">Get Dressed!</label>
      <input type="checkbox" id="make-coffee" name="make-coffee" />
      <label for="make-coffee">Make Coffee!</label>
    </div>
  )
}

export default App