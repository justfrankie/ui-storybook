import React from "react";
import inputBarStyles from "./InputBar.module.css";
import Button from "../../../Button";

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
        <Button text="Add Task" theme="primary" />
        <Button text="Clear All" theme="secondary" />
      </span>
    </form>
  );
}
