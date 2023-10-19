import React, { useState } from "react";
import styles from "./InputContainer.module.css";

function InputContainer(props) {
  const [enteredDetails, setEnteredDetails] = useState([]);

  function inputChangeHandler(event, index) {
    let data = event.target.value;
    enteredDetails[index] = data;

    setEnteredDetails(enteredDetails);
    // console.log(enteredDetails);
  }

  let content = null;
  if (props.type === "short") {
    content = props.lines.map((line, index) => (
      <div className={styles.parentBox} key={index}>
        <label className={styles.labelShort}>{line.label}</label>
        <input
          className={styles.inputShort}
          type={line.type}
          style={{
            height: props.height,
            backgroundColor: line.type === "number" ? "#737272" : null,
          }}
          onChange={(event) => inputChangeHandler(event, index)}
        />
      </div>
    ));
  } else if (props.type === "long") {
    content = (
      <div>
        <div className={styles.nameContainer}>
          {props.lines.map((line, index) => (
            <label className={styles.labelLong} key={index}>
              {line.label}
            </label>
          ))}
        </div>

        <div className={styles.inputContainer}>
          {props.lines.map((line, index) =>
            line.type === "select" ? (
              <select
                key={index}
                className={styles.inputLong}
                styles={{ height: props.height }}
                onChange={(event) => inputChangeHandler(event, index)}
              >
                {line.options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                key={index}
                className={styles.inputLong}
                type={line.type}
                style={{
                  backgroundColor: line.type === "number" ? "#737272" : null,
                }}
                onChange={(event) => inputChangeHandler(event, index)}
              />
            )
          )}
        </div>
      </div>
    );
  }
  return (
    <div className={styles.buttonParent}>
      {content}
      <button
        className={props.type === "long" ? styles.buttonLong : styles.buttonShort}
        style={{ height: props.type === "long" ? props.height : null }}
        onClick={() => props.onSumbit(enteredDetails)}
      >
        {props.button}
      </button>
    </div>
  );
}

export default InputContainer;
