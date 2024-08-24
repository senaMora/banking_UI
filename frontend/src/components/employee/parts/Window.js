import React from "react";

import styles from "./Window.module.css";

function Window(props) {

  return (
    <div className={styles.window} style={{ height: props.height }}>
      <div className={styles.windowHead}>{props.title}</div>
      <div className={styles.windowBody} style={{ height: props.height}}>{props.children}</div>
    </div>
  );
}

export default Window;
