import React from "react";

import Styles2 from "./EmployeeTransactionReport.css";


import Board from "./parts/Board";
import Window from "./parts/Window";
// import InputContainer from "./parts/InputContainer";

const labels = ["Report ID  ", "Branch ID  ", "Date Range "];
const dummyData = ["12345", "Branch123", "01/01/2023 - 12/31/2023"];

function EmployeeTransactionReport(props) {
  return (
    <div>
      <Board
        title="Total Transaction Report"
        subTitle=""
        tabs={props.tabs}
        activeTab="Total Transaction Report"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <Window title="Total Transaction Report" height="573px">
          {/* should complete================ */}
          <table className="custom-table">
            <thead>
              <tr>
                <th>Account Type</th>
                <th>Paid Out</th>
                <th>Deposited</th>
                <th>Transactions</th>
              </tr>
            </thead>
            <tbody>
              {props.dataRows.map((dataRow, index) => (
                <tr>
                  {dataRow.map((data, index) => (
                    <td>{data}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <div className="nameContainer">
              {labels.map((label, index) => (
                <p className={Styles2.label} key={index}>
                  {label} :
                </p>
              ))}
            </div>

            <div className="detailContainer">
              {dummyData.map((detail, index) => (
                <p className={Styles2.label} key={index}>
                  {detail}
                </p>
              ))}
            </div>
          </div>
          <button className="blackButton2">Print</button>
        </Window>
      </Board>
    </div>
  );
}

export default EmployeeTransactionReport;
