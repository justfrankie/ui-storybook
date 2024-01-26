import React, { useState } from "react";
import Button from "../../Button";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      onAdd({ title, id: Date.now() });
      setTitle("");
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button text="Add Task" theme="primary" />
      </form>
    </div>
  );
};

export default TaskForm;
