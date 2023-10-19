import React from "react";

import Board from "./parts/Board";
import Window from "./parts/Window";
import InputContainer from "./parts/InputContainer";

function EmployeeDashboard(props) {

  let lines = [
    { label: "Account No", type: "text" },
    { label: "User ID", type: "text" },
    { label: "Branch ID", type: "text" },
  ];

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
          button="Log in"
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

export default EmployeeDashboard;
