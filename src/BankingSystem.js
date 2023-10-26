import React, { useState } from "react";

import styles from "./BankingSystem.module.css";
import LoginPage from "./components/LoginPage";

import EmployeeDashboard from "./components/employee/EmployeeDashboard.js";
import EmployeeSelectAccount from "./components/employee/EmployeeSelectAccount.js";
import EmployeeCreateAccount from "./components/employee/EmployeeCreateAccount";
import EmployeeTransactionReport from "./components/employee/EmployeeTransactionReport";

import EmployeeCusDashboard from "./components/employee/employeeCustomer/EmployeeCusDashboard";
import EmployeeCusDeposit from "./components/employee/employeeCustomer/EmployeeCusDeposit";
import EmployeeCusTransfer from "./components/employee/employeeCustomer/EmployeeCusTransfer";
import EmployeeCusWithdrawal from "./components/employee/employeeCustomer/EmployeeCusWithdrawal";
import EmployeeCusLoan from "./components/employee/employeeCustomer/EmployeeCusLoan";
import ErrorMessage from "./components/employee/parts/ErrorMessage";
import EmployeeSuccess from "./components/employee/EmployeeSuccess";
import ManagerDashboard from "./components/manager/ManagerDashboard";
import CustomerDashboard from "./components/customer/CustomerDashboard";
import CustomerLoanRequest from "./components/customer/CustomerLoanRequest";


let employeeCusTabs = [
  "Dashboard",
  "Cash Deposit",
  "Cash Withdrawal",
  "Money Transfer",
  "Loan Request",
  "Log Out",
];
let employeeTabs = [
  "Dashboard",
  "Select Account",
  "Create Account",
  "Total Transaction Report",
  "Log Out",
];
let managerTabs = [
  "Dashboard",
  "Select Account",
  "Create Account",
  "Total Transaction Report",
  "Late Loan Installment Report",
  "Loan Request List",
  "Log Out",
];
let customerTabs = ["Dashboard", "Loan Request", "Money Transfer", "Log Out"];

const details = [
  "Nimal",
  "Perera",
  "123",
  "123456789V",
  "No 1, Galle Road, Colombo 03",
  "samplemail@gmail.com",
  "0712345678",
  "1990-01-01",
];

let transactionReportData = [
  ["Savings ", "Rs. 10000", "Rs. 10000", "100"],
  ["checking ", "Rs. 10000", "Rs. 10000", "100"],
  ["with ", "Rs. 10000", "Rs. 10000", "100"],
];

function BankingSystem() {
  // control state of =====VIEW====
  // const [view, setView] = useState(
  //   <LoginPage onSubmitCredentials={submitCredentialsHandler} />
  // );
  const [view, setView] = useState(
    <CustomerLoanRequest
      details={details}
      tabs={customerTabs}
      updateTab={employeeTabClickHandler}
      onSumbitLoanData={loanSubmitHandler}
    />
  );

  // const [view, setView] = useState(
  //   <CustomerDashboard
  //     details={details}
  //     tabs={customerTabs}
  //     updateTab={employeeTabClickHandler}
  //   />
  // );

  // const [view, setView] = useState(
  //   <ManagerDashboard
  //     details={details}
  //     tabs={managerTabs}
  //     updateTab={employeeTabClickHandler}
  //   />
  // );

  // const [view, setView] = useState(
  //   <LoginPage onSubmitCredentials={submitCredentialsHandler} />
  // );

  // Handle the Initial Login
  function submitCredentialsHandler(credentials) {
    console.log(credentials);
    if (
      credentials.enteredUsername === "a" // &&
      // credentials.enteredPassword === ""
    ) {
      setView(
        <EmployeeDashboard
          details={details}
          tabs={employeeTabs}
          updateTab={employeeTabClickHandler}
        />
      );
    } else {
      setView(
        // show Error message for initial Login
        <div>
          <LoginPage onSubmitCredentials={submitCredentialsHandler} />
          <ErrorMessage
            message="Entered Username and Password not valid!
            Please Enter Correct Username and Password."
            clickHandler={() =>
              setView(
                <LoginPage onSubmitCredentials={submitCredentialsHandler} />
              )
            }
          />
        </div>
      );
    }
  }

  // Hande the Employees Dashboard Tabs
  function employeeTabClickHandler(clickedTab) {
    console.log(clickedTab);
    console.log("<3>");

    if (clickedTab === "Dashboard") {
      setView(
        <EmployeeDashboard
          details={details}
          tabs={employeeTabs}
          updateTab={employeeTabClickHandler}
        />
      );
    } else if (clickedTab === "Select Account") {
      setView(
        <EmployeeSelectAccount
          updateTab={employeeTabClickHandler}
          tabs={employeeTabs}
          onSumbitSelectAccount={selectAccountSubmitHandler}
        />
      );
    } else if (clickedTab === "Create Account") {
      setView(
        <EmployeeCreateAccount
          details={details}
          tabs={employeeTabs}
          updateTab={employeeTabClickHandler}
          onSumbitIndividualData={individualDataSumbitHandler}
          onSumbitOrganizationData={organizationDataSumbitoHandler}
        />
      );
    } else if (clickedTab === "Total Transaction Report") {
      setView(
        <EmployeeTransactionReport
          details={details}
          tabs={employeeTabs}
          dataRows={transactionReportData}
          updateTab={employeeTabClickHandler}
        />
      );
    } else if (clickedTab === "Log Out") {
      setView(<LoginPage onSubmitCredentials={submitCredentialsHandler} />);
    }
  }

  // Handle the Select Account Submit
  function selectAccountSubmitHandler(enteredDetails) {
    console.log(enteredDetails);
    setView(
      <EmployeeCusDashboard
        updateTab={emplyeeCusTabClickHandler}
        tabs={employeeCusTabs}
      />
    );
  }

  // Handle the Employee-Customer Dashboard Tabs
  function emplyeeCusTabClickHandler(clickedTab) {
    if (clickedTab === "Dashboard") {
      setView(
        <EmployeeCusDashboard
          updateTab={emplyeeCusTabClickHandler}
          tabs={employeeCusTabs}
        />
      );
    } else if (clickedTab === "Cash Deposit") {
      setView(
        <EmployeeCusDeposit
          updateTab={emplyeeCusTabClickHandler}
          tabs={employeeCusTabs}
          onSumbitDepositData={depositSubmitHandler}
        />
      );
    } else if (clickedTab === "Cash Withdrawal") {
      setView(
        <EmployeeCusWithdrawal
          updateTab={emplyeeCusTabClickHandler}
          tabs={employeeCusTabs}
          onSumbitWithdrawData={withdrawSubmitHandler}
        />
      );
    } else if (clickedTab === "Money Transfer") {
      setView(
        <EmployeeCusTransfer
          updateTab={emplyeeCusTabClickHandler}
          tabs={employeeCusTabs}
          onSumbitTransferData={transferSubmitHandler}
        />
      );
    } else if (clickedTab === "Loan Request") {
      setView(
        <EmployeeCusLoan
          updateTab={emplyeeCusTabClickHandler}
          tabs={employeeCusTabs}
          onSumbitLoanData={loanSubmitHandler}
        />
      );
    } else if (clickedTab === "Log Out") {
      setView(
        <EmployeeDashboard
          details={details}
          tabs={employeeTabs}
          updateTab={employeeTabClickHandler}
        />
      );
    }
  }

  // handle deposit sumbits
  function depositSubmitHandler(depositData) {
    setView(
      <EmployeeSuccess
        title=""
        subTitle="Cash Deposit"
        tabs={employeeCusTabs}
        windowTitle="Deposit"
        message="Money Deposited Successfully"
        updateTab={emplyeeCusTabClickHandler}
      />
    );
  }

  // handle withdraw sumbits
  function withdrawSubmitHandler(withdrawData) {
    setView(
      <EmployeeSuccess
        title=""
        subTitle="Cash Withdrawal"
        tabs={employeeCusTabs}
        windowTitle="Withdrawal"
        message="Money Withdrew Successfully"
        updateTab={emplyeeCusTabClickHandler}
      />
    );
  }

  // handle transfer sumbits
  function transferSubmitHandler(transferData) {
    setView(
      <EmployeeSuccess
        title=""
        subTitle="Money Transfer"
        tabs={employeeCusTabs}
        windowTitle="Transfer"
        message="Money Transfered Successfully"
        updateTab={emplyeeCusTabClickHandler}
      />
    );
  }

  // handle loan application sumbits
  function loanSubmitHandler(loanData) {
    // console.log(loanData);
    setView(
      <EmployeeSuccess
        title=""
        subTitle="Loan Request"
        tabs={employeeCusTabs}
        windowTitle="Loan Application"
        message="Requested Successfully"
        updateTab={emplyeeCusTabClickHandler}
      />
    );
  }

  // handle individual account sumbits
  function individualDataSumbitHandler(individualDetails) {
    console.log(individualDetails);
    setView(
      <EmployeeSuccess
        title=""
        subTitle="Cteate Account"
        tabs={employeeTabs}
        windowTitle="Cteate Account"
        message="Created Successfully"
        updateTab={employeeTabClickHandler}
      />
    );
  }

  // handle organization account creation sumbits
  function organizationDataSumbitoHandler(organizationDetails) {
    console.log(organizationDetails);
    setView(
      <EmployeeSuccess
        title=""
        subTitle="Cteate Account"
        tabs={employeeTabs}
        windowTitle="Create Account"
        message="Created Successfully"
        updateTab={employeeTabClickHandler}
      />
    );
  }

  return <div className={styles.mainBackground}>{view}</div>;
}

export default BankingSystem;
