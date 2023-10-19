import React from "react";

import Board from "../parts/Board";
import Window from "../parts/Window";
import InputContainer from "../parts/InputContainer";

function EmployeeCusDeposit(props) {
  let lines = [
    { label: "Amounts", type: "number" },
    { label: "Remarks", type: "text" },
  ];

  return (
    <div>
      <Board
        title=""
        subTitle="Cash Deposit"
        tabs={props.tabs}
        activeTab="Cash Deposit"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <Window title="Deposit" height="573px">
          <InputContainer
            lines={lines}
            button="Deposit Money"
            type="short"
            height="60px"
            onSumbit={(enteredDetails) =>
              props.onSumbitDepositData(enteredDetails)
            }
          />
        </Window>
      </Board>
    </div>
  );
}

export default EmployeeCusDeposit;
