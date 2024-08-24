import React, { useState } from "react";
import logo from "../../images/logo.png";

// import { FunctionComponent } from "react";
import styles from "./CustomerLoginPage.module.css";

function CustomerLoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [labelEmail, setLabelEmail] = useState("email");
  const [labelPassword, setLabelPassword] = useState("password");

  function emailClickHandler(event) {
    setEmail(event.target.value);
    setLabelEmail("");
    console.log(email);
  }
  function passwordClickHandler(event) {
    setPassword(event.target.value);
    setLabelPassword("");
  }
  // function for Handle submit 
  function submitHandler(event) {
    event.preventDefault();

    const credentials = {
      enteredEmail: email,
      enteredPassword: password,
    };
    props.onSubmitCredentials(credentials);
    setEmail("");
    setPassword("");
    setLabelEmail("email");
    setLabelPassword("password");
  };

  return (
    <div className={styles.loginFrame}>
      <div className={styles.pane} />
      <div className={styles.loginHead}>Customer Login</div>
      <form>
        <input
          type="text"
          value={email}
          className={styles.emailInput}
          onChange={emailClickHandler}
        />
        <input
          type="password"
          value={password}
          className={styles.passwordInput}
          onChange={passwordClickHandler}
        />

        <button className={styles.loginButton} onClick={submitHandler}>
          Login
        </button>
      </form>

      {/* input boxes */}
      <div className={styles.email}>{labelEmail}</div>
      <div className={styles.password}>{labelPassword}</div>

      <img className={styles.logo} alt="logo" src={logo} />

      <div className={styles.coreBankingSystemContainer}>
        <p className={styles.coreBanking}>Core Banking</p>
        <p className={styles.coreBanking}>System</p>
      </div>
    </div>
  );
}
export default CustomerLoginPage;
