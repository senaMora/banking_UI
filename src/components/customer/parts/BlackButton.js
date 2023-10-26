import React from "react";
import styles from "./BlackButton.module.css";

function BlackButton(props) {
  return (
    <button className={styles.blackButton} onClick={props.clickHandler}>
      {props.text}
    </button>
  );
}

export default BlackButton;
