import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import TopNavigationBar from "../../../layout/TopNavigationBar";
// import "./TaskManager.css"; // Import a CSS file for styling

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  useEffect(() => {
    const readTasksFromFile = async () => {
      try {
        if (typeof window === "undefined") {
          const fs = require("fs");
          const data = await fs.promises.readFile("./tasks.json");
          const parsedTasks = JSON.parse(data);
          setTasks(parsedTasks);
        }
      } catch (error) {
        console.error("Error reading tasks from file:", error);
      }
    };

    readTasksFromFile();
  }, []);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, { ...task, done: false }]);
  };

  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const markDone = (taskId) => {
    // Logic to mark task as done
  };

  return (
    <div>
      <TopNavigationBar />
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onRemove={removeTask} onDone={markDone} />
    </div>
  );
};

export default TaskManager;
