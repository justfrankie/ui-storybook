const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    input: {
      marginBottom: '10px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '100%',
      boxSizing: 'border-box',
    },
    textarea: {
      display: 'block',
      margin: '10px 0',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '100%',
      boxSizing: 'border-box',
      height: '100px',
      resize: 'vertical', /* Allow vertical resizing */
    },
    buttonContainer: {
        display: 'flex'
    }
    ,
    button: {
        margin: '0 2px',
      padding: '10px 20px',
      backgroundColor: '#4caf50',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    resetButton: {
        margin: '0 2px',
        padding: '10px 20px',
        backgroundColor: 'rgb(255 86 110)',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      },
  };
  
  export default function InputBar({ newTask, handleChange, handleSubmit, handleReset }) {
    return (
      <form style={styles.form} onSubmit={handleSubmit} onReset={handleReset}>
        <input
          style={styles.input}
          name="title"
          placeholder="New task"
          value={newTask.title || ""}
          onChange={handleChange}
        />
            <textarea
              style={styles.textarea}
              name="description"
              placeholder="Details..."
              value={newTask.description || ""}
              onChange={handleChange}
            />
            <span style={styles.buttonContainer}>
            <button style={styles.button} type="submit">Add Task</button>
            <button style={styles.resetButton} type="reset">Clear All</button>
            </span>
            
      </form>
    );
  }
  