import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import TopNavigationBar from "../../../layout/TopNavigationBar";
// import "./TaskManager.css"; // Import a CSS file for styling

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Setup project environment",
      description: "Install necessary software and dependencies",
      dueDate: "2022-03-15",
      priority: "High",
      done: false,
    },
    {
      id: 2,
      title: "Design homepage layout",
      description: "Create wireframes and design elements for the homepage",
      dueDate: "2022-03-18",
      priority: "Medium",
      done: false,
    },
    {
      id: 3,
      title: "Implement user authentication",
      description: "Set up user login and registration functionality",
      dueDate: "2022-03-20",
      priority: "Low",
      done: false,
    },
    {
      id: 4,
      title: "Create API endpoints",
      description: "Build backend API endpoints for data retrieval",
      dueDate: "2022-03-22",
      priority: "High",
      done: false,
    },
    {
      id: 5,
      title: "Integrate external libraries",
      description: "Incorporate external libraries for enhanced functionality",
      dueDate: "2022-03-25",
      priority: "Medium",
      done: false,
    },
    {
      id: 6,
      title: "Write unit tests",
      description: "Develop unit tests for critical components",
      dueDate: "2022-03-28",
      priority: "Low",
      done: false,
    },
    {
      id: 7,
      title: "Optimize database queries",
      description:
        "Improve efficiency of database queries for better performance",
      dueDate: "2022-04-02",
      priority: "High",
      done: false,
    },
    {
      id: 8,
      title: "Implement responsive design",
      description: "Ensure the application is accessible on various devices",
      dueDate: "2022-04-05",
      priority: "Medium",
      done: false,
    },
    {
      id: 9,
      title: "Bug fixing and testing",
      description: "Identify and fix bugs, conduct thorough testing",
      dueDate: "2022-04-08",
      priority: "Low",
      done: false,
    },
    {
      id: 10,
      title: "Prepare for project deployment",
      description: "Finalize deployment plan and necessary configurations",
      dueDate: "2022-04-12",
      priority: "High",
      done: false,
    },
  ]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, { ...task, done: false }]);
  };

  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const markDone = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, done: true } : task
      )
    );
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
