import React from "react";
import inputBarStyles from "./InputBar.module.css";

export default function InputBar({
  newTask,
  handleChange,
  handleSubmit,
  handleReset,
}) {
  return (
    <form
      className={inputBarStyles.form}
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <input
        className={inputBarStyles.input}
        name="title"
        placeholder="New task"
        value={newTask.title || ""}
        onChange={handleChange}
      />
      <textarea
        className={inputBarStyles.textarea}
        name="description"
        placeholder="Details..."
        value={newTask.description || ""}
        onChange={handleChange}
      />
      <span className={inputBarStyles.buttonContainer}>
        <button className={inputBarStyles.button} type="submit">
          Add Task
        </button>
        <button className={inputBarStyles.resetButton} type="reset">
          Clear All
        </button>
      </span>
    </form>
  );
}
