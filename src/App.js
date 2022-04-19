import React, { useState } from "react";
import Tasks from "./components/Tasks.js";

const App = () => {
  let [tasks, setTask] = useState([
  {
    id: 1,
    text: "Learn React",
    isCompleted: false
  },
  {
    id: 2,
    text: "Learn React Hooks",
    isCompleted: false
  },
  {
    id: 3,
    text: "Learn Redux",
    isCompleted: false
  }
]);

  return(
    <div className="container">
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default App;