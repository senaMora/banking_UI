import React from "react";
import styles from "./ErrorMessage.module.css";

function ErrorMessage(props) {
  return (
    <div className={styles.errorBackdrop}>
      <div className={styles.errorMessage}>
        <br />
        {props.message}

        <button className={styles.errorButton} onClick={props.clickHandler}>
          OK
        </button>
      </div>
    </div>
  );
}

export default ErrorMessage;
