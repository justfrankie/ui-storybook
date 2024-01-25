import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { get } from "./mockBackend/fetch";
import LoadingSpinner from "../../LoadingSpinner";

const AdBanner = ({ adClient, adSlot, adFormat, isResponsive }) => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className={styles.mockAdBanner}>
      <h2>Mock Ad Banner</h2>
      <p>Ad Client: {adClient}</p>
      <p>Ad Slot: {adSlot}</p>
      <p>Ad Format: {adFormat}</p>
      <p>Is Responsive: {isResponsive.toString()}</p>
    </div>
  );
};
export default function MediaDashboard() {
  const [newsFeed, setNewsFeed] = useState(null);
  useEffect(() => {
    get("/news-feed").then((newsFeedResponse) =>
      setNewsFeed(newsFeedResponse.data)
    );
  }, []);

  const [menu, setMenu] = useState(null);
  useEffect(() => {
    get("/menu").then((menuResponse) => setMenu(menuResponse.data));
  }, []);

  const [friends, setFriends] = useState(null);
  useEffect(() => {
    get("/friends").then((friendsResponse) => setFriends(friendsResponse.data));
  }, []);

  if (!menu || !friends || !newsFeed) {
    return <LoadingSpinner text="Loading..." />;
  }

  return (
    <div className={styles.networkContainer}>
      <h1>My Network</h1>
      <nav>
        {menu.map((menuItem) => (
          <button key={menuItem} className={styles.menuButton}>
            {menuItem}
          </button>
        ))}
      </nav>
      <div className={styles.content}>
        <section>
          {newsFeed.map(({ id, title, message, imgSrc }) => (
            <article key={id} className={styles.newsArticle}>
              <h3>{title}</h3>
              <p>{message}</p>
              <img src={imgSrc} alt="" />
            </article>
          ))}
        </section>
        <div>
          <aside>
            <ul>
              {friends
                .sort((a, b) => (a.isOnline && !b.isOnline ? -1 : 0))
                .map(({ id, name, isOnline }) => (
                  <li
                    key={id}
                    className={`${styles.friendListItem} ${
                      isOnline ? styles.online : styles.offline
                    }`}
                  >
                    {name}
                  </li>
                ))}
            </ul>
            <AdBanner
              adClient="ca-pub-XXXXXXXXXXXXXXXX"
              adSlot="1234567890"
              adFormat="auto"
              isResponsive={true}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
