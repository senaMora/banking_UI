import React from "react";
import Tab from "./Tab.js";

import logo from "../../../images/logo.png";
import styles from "./Board.module.css";

function Board(props) {
  return (
    <div className={styles.board}>
      <img className={styles.logo} alt="logo" src={logo} />
      
      <div className={styles.title}>{props.title}</div>
      <div className={styles.subTitle}>{props.subTitle}</div>

      <div className={styles.pane} />
      <div className={styles.paneBox}>
        {props.tabs.map((tab, index) => (
          <Tab 
            key={index}
            name={tab}
            updateTab={(clickedTab) => props.updateTab(clickedTab)}
            updateStyle={
              props.activeTab === tab
                ? "rgb(255, 255, 255)"
                : "#8FC3DF"
            }
          />
        ))}
      </div>
      {props.children}
    </div>
  );
}

export default Board;
