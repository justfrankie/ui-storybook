import React from 'react'
import packageJson from '../../package.json'
const topListNav = ['Home', 'Docs', 'GitHub']

const TopNavigationBar = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <div style={styles.logoContainer}>
          {/* Icon Placeholder */}
          <span style={styles.iconPlaceholder}>📚</span>
          {/* Hero Title */}
          <span style={styles.heroTitle}>UI Storybook</span>
        </div>
        {/* Version Number */}
        <span style={styles.versionNumber}>v{packageJson.version}</span>
      </div>

      <div style={styles.rightSection}>
        {/* Search Bar */}
        <input type="text" placeholder="Search" style={styles.searchBar} />
        {/* GitHub Nav List Items */}
        <ul style={styles.githubNav}>
          {topListNav.map((item, index) => (
            <li key={index} style={styles.githubNavItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#1a2b34',
    color: '#fff',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px',
  },
  iconPlaceholder: {
    fontSize: '24px',
    marginRight: '8px',
  },
  heroTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  versionNumber: {
    fontSize: '14px',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
  },
  searchBar: {
    padding: '8px',
    marginRight: '10px',
    borderRadius: '4px',
    border: 'none',
  },
  githubNav: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
  },
  githubNavItem: {
    margin: '0 8px',
    cursor: 'pointer',
  },
}

export default TopNavigationBar
