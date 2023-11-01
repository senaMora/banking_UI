import React from "react";

import Board from "./parts/Board";
import Window from "./parts/Window";
import InputContainer from "./parts/InputContainer";

let lines = [
  { label: "Name of Applicant :", type: "text" },
  { label: "Saving Account No :", type: "text" },
  { label: "Branch ID :", type: "text" },
  { label: "Loan Type :", type: "select", options: ["Business", "Personal"] },
  { label: "Address :", type: "text" },
  { label: "Amount :", type: "number" },
  { label: "Setlement Period :", type: "number" },
  { label: "Email :", type: "text" },
  { label: "Telephone No :", type: "text" },
  { label: "Fixed Deposit ID :", type: "text" },
];

function CustomerLoanRequest(props) {

  function submitLoanHandler(enteredDetails) {

    const passingData = {
      customerId: 1,
      branchId: enteredDetails[2],
      savingsAccountId: enteredDetails[1], // there is a issue
      fixedDepositId: enteredDetails[9],
      loanType: "online",
      settlementPeriod: enteredDetails[6],
      amount: enteredDetails[5],
    };

    fetch(`http://localhost:8002/loan/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passingData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // handle the response data here
      })
      .catch((error) => {
        console.log(error);
        // handle the error here
        // props.onSumbitWrongAccount(accountNo);
      });

 
    props.onSumbitLoanData(enteredDetails);
  }


  return (
    <div>
      <Board
        title="Online Loan Request"
        subTitle={props.details[0] + " < " + props.details[2] + " >"}
        tabs={props.tabs}
        activeTab="Loan Request"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <Window title="Loan Application" height="700px">
          <InputContainer
            lines={lines}
            button="Request"
            type="long"
            height="60px"
            onSumbit={submitLoanHandler}
          />
        </Window>
      </Board>
    </div>
  );
}

export default CustomerLoanRequest;
