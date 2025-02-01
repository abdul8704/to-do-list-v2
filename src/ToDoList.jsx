import React, { useState } from "react";
import "boxicons";
import "./ToDoList.css";

function ToDoList() {
  const [tasks, setTasks] = useState(["do this", "do that"]);
  const [newTask, setNewTask] = useState("");
  const [checkedTasks, setCheckedTasks] = useState(
    new Array(tasks.length).fill(false)
  );

  function handleAddTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setCheckedTasks((c) => [...c, false]);
    }
    setNewTask("");
  }
  function handleEditTask(e) {
    setNewTask(e.target.value);
  }
  function handleRemoveTask(index) {
    setTasks(tasks.filter((_, i) => i != index));
    setCheckedTasks(checkedTasks.filter((_, i) => i !== index));
  }
  function handleTaskStatus(index) {
    setCheckedTasks((prevChecked) => {
      const newChecked = [...prevChecked];
      newChecked[index] = !newChecked[index]; // Toggle the checked status
      return newChecked;
    });
  }

  return (
    <div className="to-do-list-main">
      <h2 className="tasks-Title">To-do List</h2>
      <br />
      <div className="task-input-container">
        <input
          type="text"
          placeholder="Add a new Task"
          value={newTask}
          onChange={handleEditTask}
          className="task-input"
        />
        <button className="addTask" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      <ul className="tasks-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-member">
            {" "}
            <box-icon
              onClick={() => handleTaskStatus(index)}
              name={checkedTasks[index] ? "checkbox-checked" : "checkbox"}
              className="checkbox-icon"
            ></box-icon>
            <span
              className={
                checkedTasks[index] ? "task-text checked" : "task-text"
              }
            >
              {task}
            </span>
            <button
              className="delete-task"
              onClick={() => handleRemoveTask(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
