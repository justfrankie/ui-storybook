import React from 'react'

const MainWindow = ({ component }) => {
  const { id, name, Component } = component

  return (
    <div style={styles.container}>
      {id !== 'home' && <h1>{name}</h1>}
      <Component />
    </div>
  )
}

const styles = {
  container: {
    padding: '5px',
    margin: '10px',
  },
}

export default MainWindow
