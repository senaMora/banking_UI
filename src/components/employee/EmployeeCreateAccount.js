import React, { useState } from "react";
import Styles from "./parts/BlackButton.module.css";

import Board from "./parts/Board";
import Window from "./parts/Window";
import BlackButton from "./parts/BlackButton";
import InputContainer from "./parts/InputContainer";

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
      "checking",
      "saving-children",
      "saving-teen",
      "saving-adult",
      "saving-senior",
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
      "checking",
      "saving-children",
      "saving-teen",
      "saving-adult",
      "saving-senior",
      "Fixed-6months",
      "Fixed-1year",
      "Fixed-3year",
    ],
  },
];

function EmployeeCreateAccount(props) {
  function individualSubmitHandler(enteredDetails) {
    console.log(enteredDetails);
    const [accountType, subType] = enteredDetails[9].split("-");

    const createAccountData = {
      customerId: 1,
      branchId: enteredDetails[2],
      balance: enteredDetails[5],
      accType: accountType,
      savingAccType: subType,
    };

    fetch("http://localhost:8002/account/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createAccountData),
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
    console.log("<end of fetch>");
    props.onSumbitIndividualData(enteredDetails);
  }

  let optionWindow = (
    <Window title="Create Account" height="450px">
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
        onSumbit={individualSubmitHandler}
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
        title={props.tabs.length === 6 ? "Employee Create Account" : "Manager Create Account"}
        subTitle={props.details[0] + " < " + props.details[2] + " >"}
        tabs={props.tabs}
        activeTab="Create Account"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        {selectedBody}
      </Board>
    </div>
  );
}

export default EmployeeCreateAccount;
