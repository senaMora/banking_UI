import React from "react";

import Board from "./parts/Board";
import Window from "./parts/Window";
import InputContainer from "./parts/InputContainer";

function CustomerTransfer(props) {
  let lines = [
    { label: "Transfer to", type: "text" },
    { label: "Amount", type: "number" },
    { label: "Remark", type: "text" },
  ];

  return (
    <div>
      <Board
        title="Money Transfer"
        subTitle={props.details[0]}
        tabs={props.tabs}
        activeTab="Money Transfer"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <Window title="Loan Application" height="600px">
          <InputContainer
            lines={lines}
            button="Transfer Money"
            type="short"
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

export default CustomerTransfer;
