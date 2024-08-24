import React from "react";

import Board from "../parts/Board";
import Window from "../parts/Window";
import InputContainer from "../parts/InputContainer";

let lines = [
  { label: "Amounts", type: "number" },
  { label: "Remarks", type: "text" },
];

function EmployeeCusDeposit(props) {
  
  function submitDepositHandler(enteredDetails) {
    const accNum = props.details[3];
    const amount = enteredDetails[0];

    fetch(`http://localhost:8002/account/deposit/?accnum=${accNum}&amount=${amount}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(passingData),
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

    props.onSumbitDepositData(enteredDetails);
  }

  return (
    <div>
      <Board
        title="Cash Deposit"
        subTitle={props.details[1] + " < " + props.details[3] + " >"}
        tabs={props.tabs}
        activeTab="Cash Deposit"
        color="#dbf4d8"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <Window title="Deposit" height="573px">
          <InputContainer
            lines={lines}
            button="Deposit Money"
            type="short"
            height="60px"
            onSumbit={submitDepositHandler}
          />
        </Window>
      </Board>
    </div>
  );
}

export default EmployeeCusDeposit;
