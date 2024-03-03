import React from "react";
import GridLayoutWrapper from "../../GridLayoutWrapper";

const gridItems = ["item 1", "item 2", "item3", "item4", "item5", "item6"];

function GridWrapper() {
  return (
    <GridLayoutWrapper>
      {gridItems.map((gridItems, index) => (
        <li
          key={index}
          style={{
            listStyle: "none",
            border: "1px solid #d0d6dd",
            borderRadius: "3px",
            background: "#f2f7fd",
            padding: "30px",
            margin: "0 10px",
          }}
        >
          {gridItems}
        </li>
      ))}
    </GridLayoutWrapper>
  );
}

export default GridWrapper;
