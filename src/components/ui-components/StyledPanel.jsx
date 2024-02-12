import React from "react";
import styled from "styled-components";

const StyledPanelContainer = styled.div`
  padding: 15px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.theme === "primary" ? "#f2f7fd" : "#1a2b34"};
  color: ${(props) => (props.theme === "primary" ? "#1a2b34" : "white")};
`;

const StyledPanel = ({ children, theme = "primary" }) => (
  <StyledPanelContainer theme={theme}>{children}</StyledPanelContainer>
);

export default StyledPanel;
