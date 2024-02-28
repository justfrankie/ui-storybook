import React from "react";
import styles from "./Home.module.css";
import StyledPanel from "./StyledPanel";

const Home = () => {
  const featuredItems = [
    "Responsive Components",
    "Customizable Styles",
    "Previewable Components",
  ];
  return (
    <div className={styles.homeContainer}>
      <div className={styles.welcomeSection}>
        <h1 className={`${styles.heading} rubik-bold`}>
          Welcome to UI Storybook
        </h1>
        <p className={styles.description}>
          Explore the features and components that are periodically added!
        </p>
      </div>

      {/* Feature Section */}
      <section className={styles.featureSection}>
        <h2 className={`${styles.featureTitle} rubik-header`}>Key Features</h2>
        <ul className={styles.featureList}>
          {featuredItems.map((item, index) => (
            <div className={styles.featureItemContainer}>
              <StyledPanel theme="primary" key={index}>
                <li className={styles.featureItem}>{item}</li>
              </StyledPanel>
            </div>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
