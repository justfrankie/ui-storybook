import React from "react";
import inputListStyles from "./InputList.module.css";

export default function InputList({ allTasks, handleDelete }) {
  return (
    <ul className={inputListStyles.listItemWrapper}>
      {allTasks.map(({ title, description, id }) => (
        <li key={id} className={inputListStyles.itemContainer}>
          <div className={inputListStyles.content}>
            <p className={inputListStyles.itemTitle}>{title}</p>
            {!description ? null : (
              <p className={inputListStyles.itemDescription}>{description}</p>
            )}
          </div>
          <button
            className={`${inputListStyles.button} ${
              description && inputListStyles.buttonHover
            }`}
            onClick={() => handleDelete(id)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
