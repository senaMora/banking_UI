import React, { useState } from "react";
import logo from "../images/logo.png";

// import { FunctionComponent } from "react";
import styles from "./LoginPage.module.css";

function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [labelUsername, setLabelUsername] = useState("username");
  const [labelPassword, setLabelPassword] = useState("password");

  function usernameClickHandler(event) {
    setUsername(event.target.value);
    setLabelUsername("");
    console.log(username);
  }
  function passwordClickHandler(event) {
    setPassword(event.target.value);
    setLabelPassword("");
  }
  // function for Handle submit 
  function submitHandler(event) {
    event.preventDefault();

    const credentials = {
      enteredUsername: username,
      enteredPassword: password,
    };
    props.onSubmitCredentials(credentials);
    setUsername("");
    setPassword("");
    setLabelUsername("username");
    setLabelPassword("password");
  };

  return (
    <div className={styles.loginFrame}>
      <div className={styles.pane} />
      <form>
        <input
          type="text"
          value={username}
          className={styles.usernameInput}
          onChange={usernameClickHandler}
        />
        <input
          type="text"
          value={password}
          className={styles.passwordInput}
          onChange={passwordClickHandler}
        />

        <button className={styles.loginButton} onClick={submitHandler}>
          Loginnn
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
