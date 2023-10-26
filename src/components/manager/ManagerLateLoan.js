import React from "react";

import Board from "../employee/parts/Board";
import Window from "../employee/parts/Window";
import InputContainer from "../employee/parts/InputContainer";

function ManagerLateLoan(props) {

  let lines = [
    { label: "Start Date", type: "date" },
    { label: "End Date", type: "date" },
    { label: "Branch", type: "text" },
  ];

  return (
    <div>
      <Board
        title="Late Loan Installment Report"
        subTitle=""
        tabs={props.tabs}
        activeTab="Late Loan Installment Report"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <Window title="Late Loan Installment Report" height="573px">
        <InputContainer
          lines={lines}
          button="Preview"
          type="short"
          onSumbit={(enteredDetails) =>
            props.onSumbitSelectAccount(enteredDetails)
          }
        />
      </Window>
      </Board>
    </div>
  );
}

export default ManagerLateLoan;
