import React from "react";

import Board from "../parts/Board";
import Window from "../parts/Window";
import InputContainer from "../parts/InputContainer";

function EmployeeCusTransfer(props) {
  let lines = [
    { label: "Transfer To *", type: "text" },
    { label: "Amount", type: "number" },
    { label: "Remarks", type: "text" },
  ];

  return (
    <div>
      <Board
        title=""
        subTitle="Money Transfer"
        tabs={props.tabs}
        activeTab="Money Transfer"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <Window title="Transfer" height="573px">
          <InputContainer
            lines={lines}
            button="Transfer Money"
            type="short"
            height="60px"
            onSumbit={(enteredDetails) =>
              props.onSumbitTransferData(enteredDetails)
            }
          />
        </Window>
      </Board>
    </div>
  );
}

export default EmployeeCusTransfer;
