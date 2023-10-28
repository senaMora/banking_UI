import React, { useState } from "react";
import { VariableSizeList as List } from "react-window";

import Styles2 from "./ManagerLoanRequest.css";
import Styles from "./BlackButton.css";

import Board from "../employee/parts/Board";
import Window from "../employee/parts/Window";
import BlackButton from "../employee/parts/BlackButton";
import InputContainer from "../employee/parts/InputContainer";
import DashboardList from "../employee/parts/DashboardList";

let individualLines = [
  // ... (individualLines data)
];

let organizationLines = [
  // ... (organizationLines data)
];

const labels = [
  "First Name",
  "Last Name",
  "Saving AccountNo",
  "Branch Id",
  "Loan Type: ",
  "NIC No: ",
  "Address: ",
  "Amount: ",
  "Settlement Period: ",
  "Email: ",
  "TelephoneNo: ",
  "Date Of Birth: ",
];
const dummyData1 = [
  "John",
  "Doe",
  "123456789",
  "Branch123",
  "Personal Loan",
  "123-45-6789",
  "123 Main St",
  "5000",
  "12 months",
  "john@example.com",
  "555-555-5555",
  "01/15/1980",
];

const dummyData2 = [
  "Alice",
  "Smith",
  "987654321",
  "Branch456",
  "Home Loan",
  "987-65-4321",
  "456 Elm St",
  "10000",
  "24 months",
  "alice@example.com",
  "555-123-4567",
  "05/20/1995",
];

const myList = [1, 2];

const loanDetails = [dummyData1, dummyData2];

const getItemSize = (index) => {
  return 50;
};

function ManagerLoanRequest(props) {
  const [selectedBody, setSelectedBody] = useState(null);

  function loanDetailsHandler(index) {
    let newWindow = (
      <Window title="Loan Details" height="600px">
        <div>
          <div className="nameContainer2">
            {labels.map((label, index) => (
              <p className={Styles2.label} key={index}>
                {label} :
              </p>
            ))}
          </div>

          <div className="detailContainer2">
            {loanDetails[index].map((detail, index) => (
              <p className={Styles2.label} key={index}>
                {detail}
              </p>
            ))}
          </div>
        </div>

        <button className="blackButton3" onClick={loanDetailsHandler}>
          Reject
        </button>
        <button className="blackButton4" onClick={loanDetailsHandler}>
          Approve
        </button>
      </Window>
    );
    setSelectedBody(newWindow);
  }

  const Row = ({ index, style }) => (
    <button style={style} onClick={() => loanDetailsHandler(index)}>
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
