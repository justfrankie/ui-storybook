import React from "react";
import inputListStyles from "./InputList.module.css";

export default function InputList({ allTasks, handleDelete }) {
  return (
    <ul className={inputListStyles.ul}>
      {allTasks.map(({ title, description, id }) => (
        <li key={id} className={inputListStyles.li}>
          <div className={inputListStyles.content}>
            <h2 className={inputListStyles.h2}>{title}</h2>
            {!description ? null : (
              <p className={inputListStyles.p}>{description}</p>
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
