import React, { useState } from "react";

import Styles2 from "./ManagerLoanRequest.css"; // Update the import extension to .css
import Styles from "./BlackButton.css"; // Update the import extension to .css

import Board from "../employee/parts/Board";
import Window from "../employee/parts/Window";
import InputContainer from "../employee/parts/InputContainer";

const labels = [
  "Report ID  ",
  "Branch Id",
  "Total Transactions",
  "Total Amount",
  "Start Date",
  "End Date",
];

const dummyData = [
  "12345",
  "Branch123",
  "500",
  "$50,000",
  "01/01/2023",
  "12/31/2023",
];

function ManagerLateLoanInstallmentReport(props) {
  const [selectedBody, setSelectedBody] = useState(null);
  const lines = [
    { label: "Branch", type: "text" },
    { label: "Start Date", type: "date" },
    { label: "End Date", type: "date" },
  ];

  function lateLoanInstallmentReportHandler(index) {
    let newWindow = (
      <Window title="Late Loan Installment Report" height="600px">
        <div>
          <div className="nameContainer2">
            {labels.map((label, index) => (
              <p className={Styles2.label} key={index}>
                {label} :
              </p>
            ))}
          </div>

          <div className="detailContainer2">
            {dummyData.map((detail, index) => (
              <p className={Styles2.label} key={index}>
                {detail}
              </p>
            ))}
          </div>
        </div>
      </Window>
    );
    setSelectedBody(newWindow);
  }

  return (
    <div>
      <Board
        title="Late Loan Installment Report"
        subTitle=""
        tabs={props.tabs}
        activeTab="Late Loan Installment Report"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <Window title="Select Account" height="573px">
          <InputContainer
            lines={lines}
            button="View Report"
            type="short"
            onSubmit={(enteredDetails) =>
              props.onSumbitSelectAccount(enteredDetails)
            } // Use the correct prop name
          />
        </Window>
      </Board>
    </div>
  );
}

export default ManagerLateLoanInstallmentReport;
