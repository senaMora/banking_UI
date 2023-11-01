import React from "react";

import Board from "../parts/Board";
import Window from "../parts/Window";
import InputContainer from "../parts/InputContainer";

function EmployeeCusWithdrawal(props) {
  let lines = [
    { label: "Amounts", type: "number" },
    { label: "Remarks", type: "text" },
  ];

  return (
    <div>
      <Board
        title="Cash Withdrawal"
        subTitle={props.details[2] + " < "+ props.details[4] +" >"}
        tabs={props.tabs}
        activeTab="Cash Withdrawal"
        color="#dbf4d8"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <Window title="Withdrawal" height="573px">
          <InputContainer
            lines={lines}
            button="Withdraw Money"
            type="short"
            height="60px"
            onSumbit={(enteredDetails) =>
              props.onSumbitWithdrawData(enteredDetails)
            }
          />
        </Window>
      </Board>
    </div>
  );
}

export default EmployeeCusWithdrawal;
