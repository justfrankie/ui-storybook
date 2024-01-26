import React from "react";
import Button from "../../Button";

const TaskList = ({ tasks, onRemove, onDone }) => {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <Button
              onClick={() => onDone(task.id)}
              text="Done"
              theme="primary"
            />
            <Button
              onClick={() => onRemove(task.id)}
              text="Remove"
              theme="secondary"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
