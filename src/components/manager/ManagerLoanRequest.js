import React, { useState } from "react";
import Styles from "../employee/parts/BlackButton.module.css";

import Board from "../employee/parts/Board";
import Window from "../employee/parts/Window";
import BlackButton from "../employee/parts/BlackButton";
import InputContainer from "../employee/parts/InputContainer";

let individualLines = [
  { label: "First Name :", type: "text" },
  { label: "Last Name :", type: "text" },
  { label: "Branch ID :", type: "text" },
  { label: "NIC No :", type: "text" },
  { label: "Address :", type: "text" },
  { label: "Initial Amount :", type: "number" },
  { label: "Email :", type: "text" },
  { label: "Telephone No :", type: "text" },
  { label: "Date of Birth :", type: "date" },
  {
    label: "Account Type :",
    type: "select",
    options: [
      "Current",
      "Saving-children",
      "Saving-Teen",
      "Saving-Adult(18+)",
      "Saving-Senior(60+)",
      "Fixed-6months",
      "Fixed-1year",
      "Fixed-3year",
    ],
  },
];

let organizationLines = [
  { label: "Organization Name :", type: "text" },
  { label: "Organization ID :", type: "text" },
  { label: "Branch ID :", type: "text" },
  { label: "Address :", type: "text" },
  { label: "Initial Amount :", type: "number" },
  { label: "Email :", type: "text" },
  { label: "Telephone No :", type: "text" },
  { label: "Name of Contact Person :", type: "text" },
  {
    label: "Account Type :",
    type: "select",
    options: [
      "Current",
      "Saving-children",
      "Saving-Teen",
      "Saving-Adult(18+)",
      "Saving-Senior(60+)",
      "Fixed-6months",
      "Fixed-1year",
      "Fixed-3year",
    ],
  },
];

function ManagerLoanRequest(props) {
  let optionWindow = (
    <Window title="Loan Request List" height="600px">
      <div>
        <div className={Styles.text}>Are you</div>
        <BlackButton text="Individual" clickHandler={individualClickHandler} />
        <div className={`${Styles.text} ${Styles.or}`}>or</div>
        <BlackButton
          text="Organization"
          clickHandler={organizationlickHandler}
        />
      </div>
    </Window>
  );

  const [selectedBody, setSelectedBody] = useState(optionWindow);

  let individualWindow = (
    <Window title="Create Account for Individuals" height="650px">
      <InputContainer
        lines={individualLines}
        button="Request"
        type="long"
        height="60px"
        onSumbit={(enteredDetails) =>
          props.onSumbitIndividualData(enteredDetails)
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
        onSumbit={(enteredDetails) =>
          props.onSumbitOrganizationData(enteredDetails)
        }
      />
    </Window>
  );

  function individualClickHandler() {
    console.log("individual clicked");
    setSelectedBody(individualWindow);
  }

  function organizationlickHandler() {
    setSelectedBody(organizationWindow);
    console.log("organization clicked");
  }

  return (
    <div>
      <Board
        title="Loan Request List"
        subTitle=""
        tabs={props.tabs}
        activeTab="Loan Request List"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        {selectedBody}
      </Board>
    </div>
  );
}

export default ManagerLoanRequest;
