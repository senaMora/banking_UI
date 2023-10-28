import React, { useState, useRef } from "react";
import logo from "../images/logo.png";
import styles from "./LoginPage.module.css";
import bcrypt from "bcryptjs";

function LoginPage(props) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [labelUsername, setLabelUsername] = useState("username");
  const [labelPassword, setLabelPassword] = useState("password");

  function usernameClickHandler(event) {
    setLabelUsername("");
  }

  function passwordClickHandler(event) {
    setLabelPassword("");
  }

  function submitHandler(event) {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const hashedPassword = bcrypt.hashSync(password, 10); // hash the password using bcrypt

    fetch("https://example.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: hashedPassword, // send the hashed password to the backend
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // handle the response from the backend
        props.onSubmitCredentials(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // clear the input fields and labels
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
    setLabelUsername("username");
    setLabelPassword("password");
  }

  return (
    <div className={styles.loginFrame}>
      <div className={styles.pane} />
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className={styles.usernameInput}
          placeholder={labelUsername}
          onChange={usernameClickHandler}
          ref={emailInputRef}
        />
        <input
          type="password"
          className={styles.passwordInput}
          placeholder={labelPassword}
          onChange={passwordClickHandler}
          ref={passwordInputRef}
        />

        <button className={styles.loginButton} type="submit">
          Login
        </button>
      </form>

      {/* input boxes */}
      <div className={styles.username}>{labelUsername}</div>
      <div className={styles.password}>{labelPassword}</div>

      <img className={styles.logo} alt="logo" src={logo} />

      <div className={styles.coreBankingSystemContainer}>
        <p className={styles.coreBanking}>Core Banking</p>
        <p className={styles.coreBanking}>System</p>
      </div>
    </div>
  );
}

export default LoginPage;