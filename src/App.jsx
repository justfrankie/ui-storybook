import React, { useState } from 'react'
import './App.css'
import MainWindow from './components/MainWindow.jsx'
import SideNavigation from './components/SideNavigation.jsx'
import TopNavigationBar from './components/TopNavigationBar.jsx'
import Buttons from './components/ui-components/Buttons.jsx'
import Home from './components/ui-components/Home.jsx'

const styles = {
  mainContainer: {
    width: '100%',
    height: '100vh',
  },
  topNavContainer: {
    width: '100%',
  },
  bottomContainer: {
    display: 'flex',
  },
  sideNav: {
    backgroundColor: 'rgb(165 195 239 / 14%)',
    width: '20%',
    height: '100vh',
  },
  navItemsContainer: {},
  navItems: {
    listStyle: 'none',
    borderTop: '1px solid gray',
    borderBottom: '1px solid gray',
    padding: '3px 5px',
    color: '#4e4e4e',
  },
  mainWindow: {
    width: '70%',
    margin: '0 auto',
  },
}

const navItems = [
  { id: 'home', name: 'Home', Component: () => <Home /> },
  { id: 'button', name: 'Button', Component: () => <Buttons /> },
  { id: 'menu', name: 'Menu', Component: () => null },
  { id: 'searchbar', name: 'Search Bar', Component: () => null },
  { id: 'navigation', name: 'Navigation', Component: () => null },
]

const App = () => {
  const [currentComponent, setCurrentComponent] = useState(navItems[0])

  return (
    <div style={styles.mainContainer}>
      <div style={styles.topNavContainer}>
        <TopNavigationBar />
      </div>
      <div style={styles.bottomContainer}>
        <nav style={styles.sideNav}>
          <SideNavigation
            navItems={navItems}
            component={currentComponent}
            setCurrentComponent={setCurrentComponent}
          />
        </nav>
        <div style={styles.mainWindow}>
          <MainWindow component={currentComponent} />
        </div>
      </div>
    </div>
  )
}

export default App
