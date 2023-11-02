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

  // function for fetch detail & display dashboard
  function identifyCustomer(credentials) {
    // should handle
    fetch(`http://localhost:8002/customer/getcustomer/${credentials.enteredEmail}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(passingData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const customerDetails = [
          "SCR " + data.responseObject.balance,
          data.responseObject.firstName,
          data.responseObject.lastName,
          data.responseObject.accountNumber,
          data.responseObject.accountType,
          data.responseObject.branch_id,
          data.responseObject.nic,
          data.responseObject.address,
          data.responseObject.email,
          data.responseObject.phoneNumber,
          data.responseObject.dob,
        ];

        props.onSubmitCredentials(customerDetails);
        // handle the response data here
      })
      .catch((error) => {
        console.log(error);
        // handle the error here
        // props.onSumbitWrongAccount(toAcc);
      });
  }

  // function for === HANDLE SUBMIT ===
  function submitHandler(event) {
    event.preventDefault();

    const credentials = {
      enteredEmail: email,
      enteredPassword: password,
    };

    setEmail("");
    setPassword("");
    setLabelEmail("email");
    setLabelPassword("password");

    fetch(`http://localhost:8002/customer/login/${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(passingData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (
          data.responseMessage === "credential found" &&
          data.responseObject === password
        ) {
          identifyCustomer(credentials);
        } else {
          const message =
            "Entered Email Address and Password not valid! Please Enter Correct Username and Password.";
          props.errorTrigger(message);
        }
        // handle the response data here
      })
      .catch((error) => {
        console.log(error);
        // handle the error here
        // props.onSumbitWrongAccount(toAcc);
      });
  }

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
