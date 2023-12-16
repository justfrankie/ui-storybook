import React from "react";
const styles = {
  ul: {
    listStyle: 'none',
    padding: '0',
    textAlign: 'center',
  },
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    border: '1px solid #1a2b34',
    borderRadius: '5px',
    margin: '8px 0',
    padding: '10px',
  },
  content: {
    flex: '1',
  },
  h2: {
    backgroundColor: '#f2f8fd',
    margin: '0',
    padding: '4px',
  },
  p: {
    margin: '8px',
  },
  button: {
    background: 'transparent',
    border: '0',
    padding: '10px',
    fontWeight: 'bolder',
    cursor: 'pointer',
    borderRadius: '5px',
    marginLeft: '10px',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    '&:hover': {
      boxShadow: '0 0 1px black',
    },
  },
};

export default function InputList({ allTasks, handleDelete }) {
  return (
    <ul style={styles.ul}>
      {allTasks.map(({ title, description, id }) => (
        <li key={id} style={styles.li}>
          <div style={styles.content}>
            <h2 style={styles.h2}>{title}</h2>
            {!description ? null : <p style={styles.p}>{description}</p>}
          </div>
          <button
            style={{ ...styles.button, ...(description && styles.buttonHover) }}
            onClick={() => handleDelete(id)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
