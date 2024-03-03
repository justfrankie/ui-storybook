import React, { useState } from "react";
import searchBarStyles from "./SearchBar.module.css";

const SearchBar = ({
  setSearchQuery,
  setCurrentComponent,
  searchQuery = "",
  componentsList,
}) => {
  const [searchResultsOpen, setSearchResultsOpen] = useState(false);
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClick = (newData) => {
    setSearchResultsOpen(false);
    setSearchQuery("");
    setCurrentComponent((prevComponent) => ({ ...prevComponent, ...newData }));
  };

  return (
    <div className={searchBarStyles.searchBarContainer}>
      <input
        type="text"
        name="search"
        value={searchQuery}
        placeholder="Search"
        className={`${searchBarStyles.searchResultsInput} ${
          searchResultsOpen && searchBarStyles.searchBarResultsActive
        }`}
        onChange={(e) => handleChange(e)}
      />
      {searchQuery.length > 0 && (
        <div className={searchBarStyles.searchResults}>
          <ul className={searchBarStyles.searchResultsContainer}>
            {componentsList
              .filter((item) => {
                const itemMatchFound = item.name
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase());
                if (!searchResultsOpen && itemMatchFound)
                  setSearchResultsOpen(true);
                return itemMatchFound;
              })
              .map((item, index) => (
                <li
                  className={searchBarStyles.searchResultItem}
                  key={index}
                  onClick={() => handleClick(item)}
                >
                  {item.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
