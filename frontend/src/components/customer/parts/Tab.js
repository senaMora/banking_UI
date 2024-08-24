import React from "react";
import styles from "./Tab.module.css";


function Tab(props) {
  // function clickHandler() {
  //   props.updateTab(props.name);
  // }

  return (
    <button
      className={styles.tab}
      style={{ backgroundColor: props.updateStyle }}
      onClick={() => props.updateTab(props.name)}
    >
      {props.name}
    </button>
  );
}

export default Tab;
