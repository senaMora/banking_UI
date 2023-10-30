import React, { useState, useEffect } from "react";

import styles from "./BankingSystem.module.css";
import LoginPage from "./components/LoginPage";

import EmployeeLoginPage from "./components/employee/EmployeeLoginPage";
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

import ManagerLoginPage from "./components/manager/ManagerLoginPage";
import ManagerDashboard from "./components/manager/ManagerDashboard";
import ManagerLateLoanReport from "./components/manager/ManagerLateLoanReport";
import ManagerLoanList from "./components/manager/ManagerLoanList";

import CustomerLoginPage from "./components/customer/CustomerLoginPage";
import CustomerDashboard from "./components/customer/CustomerDashboard";
import CustomerLoanRequest from "./components/customer/CustomerLoanRequest";
import CustomerTransfer from "./components/customer/CustomerTransfer";

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

let details = [
  "Nimal",
  "Perera",
  "2005364",
  "123",
  "123456789V",
  "No 1, Galle Road, Colombo 03",
  "samplemail@gmail.com",
  "0712345678",
  "1990-01-01",
];

const preCusDetails = [
  "Siripala",
  "Perera",
  "859634",
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
  // ================== CONTROLL VIEWS & ERRORS STATES (HANDLE INITIAL VIEWS)=========================
  const [error, setError] = useState();
  const [cusEmDetails, setCusEmDetails] = useState(null);
  const [cusDetails, setCusDetails] = useState(null);
  const [role, setRole] = useState();

  const [view, setView] = useState(
    <LoginPage submitLogin={submitLoginHandler} />
  );

  // ================== CONSTANT COMPONENTS =========================
  const loginErrorComponent = (
    <ErrorMessage
      message="Entered Username and Password not valid!
      Please Enter Correct Username and Password."
      clickHandler={() => setError()}
    />
  );

  // ================== LOGIN DEVIDER =========================
  function submitLoginHandler(userType) {
    if (userType === "customer") {
      setRole("customer");
      setView(
        <CustomerLoginPage
          onSubmitCredentials={submitCustomerCredentialsHandler}
        />
      );
    } else if (userType === "employee") {
      setRole("employee");
      setView(
        <EmployeeLoginPage
          onSubmitCredentials={submitEmployeeCredentialsHandler}
        />
      );
    } else if (userType === "manager") {
      setRole("manager");
      setView(
        <ManagerLoginPage
          onSubmitCredentials={submitManagerCredentialsHandler}
        />
      );
    }
  }

  useEffect(() => {
    if (cusDetails !== null) {
      setView(
        <CustomerDashboard
          details={cusDetails} // change to cusEmDetails.......................
          tabs={customerTabs}
          updateTab={customerTabClickHandler}
        />
      );
    }
  }, [cusDetails]);

  // ================== INITIAL CREDENTIAL HANDLERS =========================
  function submitCustomerCredentialsHandler(credentials) {
    console.log(credentials);
    if (
      credentials.enteredEmail === "a" // &&
      // credentials.enteredPassword === ""
    ) {
      setCusDetails(preCusDetails);
    } else {
      setError(loginErrorComponent);
    }
  }

  function submitEmployeeCredentialsHandler(credentials) {
    console.log(credentials);
    if (
      credentials.enteredEmail === "b" // &&
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
      setError(loginErrorComponent);
    }
  }

  function submitManagerCredentialsHandler(credentials) {
    console.log(credentials);
    if (
      credentials.enteredEmail === "c" // &&
      // credentials.enteredPassword === ""
    ) {
      setView(
        <ManagerDashboard
          details={details}
          tabs={managerTabs}
          updateTab={managerTabClickHandler}
        />
      );
    } else {
      setError(loginErrorComponent);
    }
  }

  // ================== CUSTOMER DASHBOARD TAB HANDLERS =========================
  function customerTabClickHandler(clickedTab) {
    console.log(clickedTab);
    console.log("<customer tab handler>");

    if (clickedTab === "Dashboard") {
      setView(
        <CustomerDashboard
          details={cusDetails}
          tabs={customerTabs}
          updateTab={customerTabClickHandler}
        />
      );
    } else if (clickedTab === "Loan Request") {
      setView(
        <CustomerLoanRequest
          details={cusDetails}
          tabs={customerTabs}
          updateTab={customerTabClickHandler}
          onSumbitLoanData={loanSubmitHandler}
        />
      );
    } else if (clickedTab === "Money Transfer") {
      setView(
        <CustomerTransfer
          details={cusDetails}
          updateTab={customerTabClickHandler}
          tabs={customerTabs}
          onSumbitTransferData={transferSubmitHandler}
          onSumbitWrongAccount={selectAccountWrongHandler}
        />
      );
    } else if (clickedTab === "Log Out") {
      setCusDetails(null);
      setView(
        <CustomerLoginPage
          onSubmitCredentials={submitCustomerCredentialsHandler}
        />
      );
    }
  }

  // ================== EMPLOYEE DASHBOARD TAB HANDLERS =========================
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
          details={details}
          updateTab={employeeTabClickHandler}
          tabs={employeeTabs}
          onSumbitSelectAccount={selectAccountSubmitHandler}
          onSumbitWrongAccount={selectAccountWrongHandler}
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
      setView(
        <EmployeeLoginPage
          onSubmitCredentials={submitEmployeeCredentialsHandler}
        />
      );
    }
  }

  // ================== MANAGER DASHBOARD TAB HANDLERS =========================
  function managerTabClickHandler(clickedTab) {
    console.log(clickedTab);
    console.log("<manager tab handler>");

    if (clickedTab === "Dashboard") {
      setView(
        <ManagerDashboard
          details={details}
          tabs={managerTabs}
          updateTab={managerTabClickHandler}
        />
      );
    } else if (clickedTab === "Select Account") {
      setView(
        <EmployeeSelectAccount
          details={details}
          updateTab={managerTabClickHandler}
          tabs={managerTabs}
          onSumbitSelectAccount={selectAccountSubmitHandler}
          onSumbitWrongAccount={selectAccountWrongHandler}
        />
      );
    } else if (clickedTab === "Create Account") {
      setView(
        <EmployeeCreateAccount
          details={details}
          tabs={managerTabs}
          updateTab={managerTabClickHandler}
          onSumbitIndividualData={individualDataSumbitHandler}
          onSumbitOrganizationData={organizationDataSumbitoHandler}
        />
      );
    } else if (clickedTab === "Total Transaction Report") {
      setView(
        <EmployeeTransactionReport
          details={details}
          tabs={managerTabs}
          dataRows={transactionReportData}
          updateTab={managerTabClickHandler}
        />
      );
    } else if (clickedTab === "Late Loan Installment Report") {
      setView(
        <ManagerLateLoanReport
          details={details}
          tabs={managerTabs}
          dataRows={transactionReportData}
          updateTab={managerTabClickHandler}
        />
      );
    } else if (clickedTab === "Loan Request List") {
      setView(
        <ManagerLoanList
          details={details}
          tabs={managerTabs}
          dataRows={transactionReportData}
          updateTab={managerTabClickHandler}
        />
      );
    } else if (clickedTab === "Log Out") {
      setView(
        <ManagerLoginPage
          onSubmitCredentials={submitManagerCredentialsHandler}
        />
      );
    }
  }

  useEffect(() => {
    if (cusEmDetails !== null) {
      setView(
        <EmployeeCusDashboard
          details={cusEmDetails}
          updateTab={emplyeeCusTabClickHandler}
          tabs={employeeCusTabs}
        />
      );
    }
  }, [cusEmDetails]);

  // Handle the Select Account Submit
  function selectAccountSubmitHandler(enteredDetails) {
    setCusEmDetails(enteredDetails);
  }

  // ================== EMPLOYEE-(CUSTOMER) DASHBOARD TAB HANDLERS =========================
  function emplyeeCusTabClickHandler(clickedTab) {
    if (clickedTab === "Dashboard") {
      setView(
        <EmployeeCusDashboard
          details={cusEmDetails}
          updateTab={emplyeeCusTabClickHandler}
          tabs={employeeCusTabs}
        />
      );
    } else if (clickedTab === "Cash Deposit") {
      console.log("cash deposit");
      setView(
        <EmployeeCusDeposit
          details={cusEmDetails}
          updateTab={emplyeeCusTabClickHandler}
          tabs={employeeCusTabs}
          onSumbitDepositData={depositSubmitHandler}
        />
      );
    } else if (clickedTab === "Cash Withdrawal") {
      setView(
        <EmployeeCusWithdrawal
          details={cusEmDetails}
          updateTab={emplyeeCusTabClickHandler}
          tabs={employeeCusTabs}
          onSumbitWithdrawData={withdrawSubmitHandler}
        />
      );
    } else if (clickedTab === "Money Transfer") {
      setView(
        <EmployeeCusTransfer
          details={cusEmDetails}
          updateTab={emplyeeCusTabClickHandler}
          tabs={employeeCusTabs}
          onSumbitTransferData={transferSubmitHandler}
          onSumbitWrongAccount={selectAccountWrongHandler}
        />
      );
    } else if (clickedTab === "Loan Request") {
      setView(
        <EmployeeCusLoan
          details={cusEmDetails}
          updateTab={emplyeeCusTabClickHandler}
          tabs={employeeCusTabs}
          onSumbitLoanData={loanSubmitHandler}
        />
      );
    } else if (clickedTab === "Log Out") {
      if (role === "employee") {
        setView(
          <EmployeeDashboard
            details={details}
            tabs={employeeTabs}
            updateTab={employeeTabClickHandler}
          />
        );
      } else {
        setView(
          <EmployeeDashboard
            details={details}
            tabs={managerTabs}
            updateTab={managerTabClickHandler}
          />
        );
      }
    }
  }

  // --------- S  U  C  C  E  S  S      H  A  N  D  L  E  R  S ---------

  // ================== EMPLOYEE SUCCESS HANDLERS =========================
  // handle deposit sumbits (employee-customer)
  function depositSubmitHandler(depositData) {
    cusEmDetails[0] =
      parseFloat(cusEmDetails[0].split(" ")[1]) + parseFloat(depositData[0]);
    cusEmDetails[0] = "SCR " + cusEmDetails[0];
    setCusEmDetails(cusEmDetails);

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

  // handle withdraw sumbits (employee-customer)
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

  // handle transfer sumbits (employee-customer)
  function transferSubmitHandler(transferData) {
    if (role === "customer") {
      cusDetails[0] =
        parseFloat(cusDetails[0].split(" ")[1]) - parseFloat(transferData[1]);
      cusDetails[0] = "Rs " + cusDetails[0];
      setCusDetails(cusDetails);

      setView(
        <EmployeeSuccess
          title=""
          subTitle="Money Transfer"
          tabs={customerTabs}
          windowTitle="Transfer"
          message="Money Transfered Successfully"
          updateTab={customerTabClickHandler}
        />
      );
    } else {
      cusEmDetails[0] =
        parseFloat(cusEmDetails[0].split(" ")[1]) - parseFloat(transferData[1]);
      cusEmDetails[0] = "SCR " + cusEmDetails[0];
      setCusEmDetails(cusEmDetails);

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
  }

  // handle loan application sumbits (employee-customer)
  function loanSubmitHandler(loanData) {
    // console.log(loanData);
    if (role === "customer"){
      setView(
        <EmployeeSuccess
          title=""
          subTitle="Loan Request"
          tabs={customerTabs}
          windowTitle="Loan Application"
          message="Requested Successfully"
          updateTab={customerTabClickHandler}
        />
      );
    } else {
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
  }

  const accountCreateSuccessComponent = (
    <EmployeeSuccess
      title=""
      subTitle="Cteate Account"
      tabs={employeeTabs}
      windowTitle="Cteate Account"
      message="Created Successfully"
      updateTab={employeeTabClickHandler}
    />
  );

  // handle individual account creation sumbits
  function individualDataSumbitHandler(individualDetails) {
    console.log(individualDetails);
    setView(accountCreateSuccessComponent);
  }

  // handle organization account creation sumbits
  function organizationDataSumbitoHandler(organizationDetails) {
    console.log(organizationDetails);
    setView(accountCreateSuccessComponent);
  }

  // --------- E  R  R  O  R      H  A  N  D  L  E  R  S ---------
  // MAIN ERROR MESSAGE VIEWER==========
  function viewError(message) {
    setError(
      <ErrorMessage message={message} clickHandler={() => setError()} />
    );
  }
  // ===================================

  function selectAccountWrongHandler(accNo) {
    viewError(
      accNo + " is not a valid account number. Please enter correct Account No"
    );
  }

  // /\/\/\/\/\/\/\/\/\/\/|| Return ||\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
  return (
    <div className={styles.mainBackground}>
      {view}
      {error}
    </div>
  );
}

export default BankingSystem;
