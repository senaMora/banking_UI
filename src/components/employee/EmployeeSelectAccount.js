import React from "react";

import Board from "./parts/Board";
import Window from "./parts/Window";
import InputContainer from "./parts/InputContainer";

function EmployeeDashboard(props) {
  let lines = [
    { label: "Account No", type: "text" },
    // { label: "User ID", type: "text" },
    // { label: "Branch ID", type: "text" },
  ];

  function onSumbitAccountNo(accountNo) {
    const passingData = {
      accountNo,
    };

    fetch("http://localhost:8002/account/create", {
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
      });
    console.log("<end of fetch in EmployeeSelectAccount>");

    props.onSumbitSelectAccount(/*accountNo*/);
  }

  return (
    <div>
      <Board
        title="Select Account"
        subTitle=""
        tabs={props.tabs}
        activeTab="Select Account"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <Window title="Select Account" height="573px">
          <InputContainer
            lines={lines}
            button="Access"
            type="short"
            onSumbit={onSumbitAccountNo}
          />
        </Window>
      </Board>
    </div>
  );
}

export default EmployeeDashboard;
