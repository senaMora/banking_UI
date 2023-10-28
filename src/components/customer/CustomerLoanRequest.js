import React from "react";

import Board from "./parts/Board";
import Window from "../employee/parts/Window";
import InputContainer from "../employee/parts/InputContainer";

function CustomerLoanRequest(props) {
  let lines = [
    { label: "First Name :", type: "text" },
    { label: "Last Name :", type: "text" },
    { label: "Saving Account No :", type: "text" },
    { label: "Branch ID :", type: "text" },
    { label: "Loan Type :", type: "select", options: ["Business", "Personal"] },
    { label: "NIC No :", type: "text" },
    { label: "Address :", type: "text" },
    { label: "Amount :", type: "number" },
    { label: "Setlement Period :", type: "date" },
    { label: "Email :", type: "text" },
    { label: "Telephone No :", type: "text" },
    { label: "Date of Birth :", type: "date" },
  ];

  return (
    <div>
      <Board
        title="Loan Request"
        subTitle={props.details[0]}
        tabs={props.tabs}
        activeTab="Loan Request"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <Window title="Loan Application" height="690px">
          <InputContainer
            lines={lines}
            button="Request"
            type="long"
            height="60px"
            onSumbit={(enteredDetails) =>
              props.onSumbitLoanData(enteredDetails)
            }
          />
        </Window>
      </Board>
    </div>
  );
}

export default CustomerLoanRequest;
