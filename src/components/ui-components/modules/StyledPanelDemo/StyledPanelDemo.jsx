import React from "react";
import StyledPanel from "../../StyledPanel";

const StyledPanelDemo = () => {
  return (
    <div>
      <div style={{ margin: "20px 0" }}>Primary Color:</div>
      <ul style={{ display: "flex", width: "500px", margin: "10px auto" }}>
        {[1, 2, 3].map((item, index) => (
          <li style={{ margin: "0 auto" }}>
            <StyledPanel>Panel {index + 1}</StyledPanel>
          </li>
        ))}
      </ul>
      <div style={{ margin: "20px 0" }}>Secondary Color:</div>
      <ul style={{ display: "flex", width: "500px", margin: "10px auto" }}>
        {[1, 2, 3].map((item, index) => (
          <li style={{ margin: "0 auto" }}>
            <StyledPanel theme="secondary">Panel {index + 1}</StyledPanel>
          </li>
        ))}
      </ul>
      <div style={{ margin: "30px auto 0px auto", width: "300px" }}>
        <StyledPanel>
          <div style={{ margin: "20px auto" }}>
            <h1>Lorem Ipsum?</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </StyledPanel>
      </div>
    </div>
  );
};

export default StyledPanelDemo;
