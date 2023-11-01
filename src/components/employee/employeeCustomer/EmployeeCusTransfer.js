import React from "react";

import Board from "../parts/Board";
import Window from "../parts/Window";
import InputContainer from "../parts/InputContainer";

let lines = [
  { label: "Transfer To *", type: "text" },
  { label: "Amount", type: "number" },
  { label: "Remarks", type: "text" },
];

function EmployeeCusTransfer(props) {

  function submitTransferHandler(enteredDetails) {
    const fromAcc = props.details[3];
    const toAcc = enteredDetails[0];
    const amount = enteredDetails[1];

    fetch(
      `http://localhost:8002/account/transfer/?toAcc=${toAcc}&fromAcc=${fromAcc}&amount=${amount}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(passingData),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // handle the response data here
      })
      .catch((error) => {
        console.log(error);
        // handle the error here
        props.onSumbitWrongAccount(toAcc);
      });

    props.onSumbitTransferData(enteredDetails);
  }

  return (
    <div>
      <Board
        title="Money Transfer"
        subTitle={props.details[2] + " < " + props.details[4] + " >"}
        tabs={props.tabs}
        activeTab="Money Transfer"
        color="#dbf4d8"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <Window title="Transfer" height="600px">
          <InputContainer
            lines={lines}
            button="Transfer Money"
            type="short"
            height="60px"
            onSumbit={submitTransferHandler}
          />
        </Window>
      </Board>
    </div>
  );
}

export default EmployeeCusTransfer;
