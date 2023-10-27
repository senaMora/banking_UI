import React, { useState } from "react";
import { VariableSizeList as List } from "react-window";

import Styles from "../employee/parts/BlackButton.module.css";

import Board from "../employee/parts/Board";
import Window from "../employee/parts/Window";
import BlackButton from "../employee/parts/BlackButton";
import InputContainer from "../employee/parts/InputContainer";

let individualLines = [
  // ... (individualLines data)
];

let organizationLines = [
  // ... (organizationLines data)
];

const myList = ["1", "2"];

const getItemSize = (index) => {
  return 50;
};

function ManagerLoanRequest(props) {
  const [selectedBody, setSelectedBody] = useState(null);

  let individualWindow = (
    <Window title="Create Account for Individuals" height="650px">
      <InputContainer
        lines={individualLines}
        button="Request"
        type="long"
        height="60px"
        onSubmit={(enteredDetails) =>
          props.onSubmitIndividualData(enteredDetails)
        }
      />
    </Window>
  );

  let organizationWindow = (
    <Window title="Create Account for Organizations" height="600px">
      <InputContainer
        lines={organizationLines}
        button="Request"
        type="long"
        height="60px"
        onSubmit={(enteredDetails) =>
          props.onSubmitOrganizationData(enteredDetails)
        }
      />
    </Window>
  );

  function clickHandler(index) {
    if (index === "1") {
      setSelectedBody(individualWindow);
    } else if (index === "2") {
      setSelectedBody(organizationWindow);
    }
  }

  const Row = ({ index, style }) => (
    <button style={style} onClick={() => clickHandler(myList[index])}>
      {myList[index]}
    </button>
  );

  return (
    <div>
      <Board
        title="Loan Request List"
        subTitle=""
        tabs={props.tabs}
        activeTab="Loan Request List"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <Window title="Loan Request List" height="600px">
          <List
            height={450}
            itemCount={myList.length}
            itemSize={getItemSize}
            width={650}
          >
            {Row}
          </List>
        </Window>
        {selectedBody}
      </Board>
    </div>
  );
}

export default ManagerLoanRequest;
