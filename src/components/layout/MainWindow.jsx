import React, { useState } from "react";
import styles from "./MainWindow.module.css";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMobile } from "../../contexts/mobileProvider";
import Button from "../ui-components/Button";

SyntaxHighlighter.registerLanguage("jsx", jsx);

const MainWindow = ({ currentComponent }) => {
  const { id, name, Component, rawJsx } = currentComponent;
  const isMobile = useMobile();
  const [sourceCodeOpen, setSourceCodeOpen] = useState(isMobile ? false : true);

  const handleSourceCodeOpen = () => {
    setSourceCodeOpen(!sourceCodeOpen);
  };

  return (
    <div className={styles.container}>
      {id !== "home" && <h1 className={styles.componentHeaderText}>{name}</h1>}
      <div className={styles.componentWrapper}>
        <div className={styles.componentContainer}>
          <Component />
        </div>
        <div
          className={`${styles.sourceCodeWrapper} ${
            id === "home" && styles.hidden
          }
          `}
        >
          {id !== "home" && (
            <Button
              onClick={handleSourceCodeOpen}
              theme="secondary"
              style={{ fontSize: "0.8rem" }}
            >
              {sourceCodeOpen ? "Hide" : "Show"}
              {" Code "}
              <FontAwesomeIcon icon={faCode} />
            </Button>
          )}
          {rawJsx && sourceCodeOpen && (
            <div className={styles.sourceCodeContainer}>
              <div className={styles.sourceCode}>
                <SyntaxHighlighter
                  language="jsx"
                  style={oneLight}
                  customStyle={{
                    backgroundColor: "inherit",
                    fontSize: 13,
                    overflowX: "auto",
                    WebkitOverflowScrolling: "touch",
                  }}
                  wrapLongLines={true}
                  showLineNumbers={true}
                >
                  {rawJsx}
                </SyntaxHighlighter>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainWindow;
