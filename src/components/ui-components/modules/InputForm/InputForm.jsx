import React, { useState } from "react";
import InputBar from "./sub-components/InputBar";
import InputList from "./sub-components/InputList";

 const InputForm = () => {
  const [newTask, setNewTask] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const [allTasks, setAllTasks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  };
  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter(
      (task) => task.id !== taskIdToRemove
    ));
  };
  const handleReset = (event) => {
    event.preventDefault();
    setAllTasks([]);
    setNewTask({});
  };


  return (
    <div style={{width: '500px'}}>
      <InputBar
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      />
      <InputList allTasks={allTasks} handleReset={handleReset} handleDelete={handleDelete}/>
    </div>
  );
}

export default InputForm