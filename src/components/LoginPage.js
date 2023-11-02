import React, { useState } from "react";
import logo from "../images/logo.png";

// import { FunctionComponent } from "react";
import styles from "./LoginPage.module.css";

import BlackButton from "./employee/parts/BlackButton";

function LoginPage(props) {
  // function for Handle submit
  function customerClickHandler(event) {
    // event.preventDefault();
    props.submitLogin("customer");
  }
  function employeeClickHandler(event) {
    // event.preventDefault();
    props.submitLogin("employee");
  }
  function managernClickHandler(event) {
    // event.preventDefault();
    props.submitLogin("manager");
  }

  return (
    <div className={styles.loginFrame}>
      <div className={styles.loginHead}>Login Page</div>

      <div className={styles.pane}>
        <div className={styles.buttonBox}>
          <BlackButton text="Customer" clickHandler={customerClickHandler} />
          <BlackButton text="Employee" clickHandler={employeeClickHandler} />
          <BlackButton text="Manager" clickHandler={managernClickHandler} />
        </div>
      </div>

      {/* input boxes */}

      <img className={styles.logo} alt="logo" src={logo} />

      <div className={styles.coreBankingSystemContainer}>
        <p className={styles.coreBanking}>Welcome to</p>
        <p className={styles.coreBanking}>Gringotts</p>
      </div>
    </div>
  );
}
export default LoginPage;