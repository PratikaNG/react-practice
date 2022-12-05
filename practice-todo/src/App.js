import React, { useState, useEffect } from "react";
import NewTask from "./newtask";

const App = () => {
  const [newTask, setNewTask] = useState("");

  const [allTasks, setAllTasks] = useState([]);
  useEffect(() => {}, []);
  const handleOnChange = (e) => {
    console.log(e.target.value);
    setNewTask(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    setAllTasks((prev) => [...prev, newTask]);
  };

  return (
    <div>
      <NewTask handleChange={handleOnChange} task={newTask} add={addTask} />
      <div>
        {allTasks.length > 0 && (
          <ul>
            {allTasks.map((ele) => (
              <li>{ele}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default App;
