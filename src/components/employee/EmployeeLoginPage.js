import React, { useState } from "react";
import logo from "../../images/logo.png";

// import { FunctionComponent } from "react";
import styles from "./EmployeeLoginPage.module.css";

function EmployeeLoginPage(props) {
  const [nic, setNic] = useState("");
  const [password, setPassword] = useState("");

  const [labelNic, setLabelNic] = useState("nic");
  const [labelPassword, setLabelPassword] = useState("password");

  function emailClickHandler(event) {
    setNic(event.target.value);
    setLabelNic("");
    console.log(nic);
  }
  function passwordClickHandler(event) {
    setPassword(event.target.value);
    setLabelPassword("");
  }

  // function for fetch detail & display dashboard
  function identifyEmployee(credentials) {
    // should handle
    // fetch(
    //   `http://localhost:8002/customer/getcustomer/${credentials.enteredEmail}`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     // body: JSON.stringify(passingData),
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);

    //     const customerDetails = [
    //       "SCR " + data.responseObject.balance,
    //       data.responseObject.firstName,
    //       data.responseObject.lastName,
    //       data.responseObject.accountNumber,
    //       data.responseObject.accountType,
    //       data.responseObject.branch_id,
    //       data.responseObject.nic,
    //       data.responseObject.address,
    //       data.responseObject.email,
    //       data.responseObject.phoneNumber,
    //       data.responseObject.dob,
    //     ];

    //     props.onSubmitCredentials(customerDetails);
    //     // handle the response data here
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     // handle the error here
    //     // props.onSumbitWrongAccount(toAcc);
    //   });
    // props.onSubmitCredentials(credentials);
  }

  // function for === HANDLE SUBMIT ===
  function submitHandler(event) {
    event.preventDefault();

    const credentials = {
      enteredNic: nic,
      enteredPassword: password,
    };
    props.onSubmitCredentials(credentials);
    setNic("");
    setPassword("");
    setLabelNic("nic");
    setLabelPassword("password");

    // fetch(`http://localhost:8002/employee/login/${nic}`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   // body: JSON.stringify(passingData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);

    //     if (
    //       data.responseMessage === "credential found" &&
    //       data.responseObject === password
    //     ) {
    //       identifyEmployee(credentials);
    //     } else {
    //       const message =
    //         "Entered NIC number and Password not valid! Please Enter Correct Username and Password.";
    //       props.errorTrigger(message);
    //     }
    //     // handle the response data here
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     // handle the error here
    //     // props.onSumbitWrongAccount(toAcc);
    //   });

    props.onSubmitCredentials(credentials);
  }

  return (
    <div className={styles.loginFrame}>
      <div className={styles.pane} />
      <div className={styles.loginHead}>Employee Login</div>
      <form>
        <input
          type="text"
          value={nic}
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
      <div className={styles.email}>{labelNic}</div>
      <div className={styles.password}>{labelPassword}</div>

      <img className={styles.logo} alt="logo" src={logo} />

      <div className={styles.coreBankingSystemContainer}>
        <p className={styles.coreBanking}>Core Banking</p>
        <p className={styles.coreBanking}>System</p>
      </div>
    </div>
  );
}
export default EmployeeLoginPage;
