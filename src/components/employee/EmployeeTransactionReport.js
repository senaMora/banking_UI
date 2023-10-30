import React from "react";

import Board from "../employee/parts/Board";
import Window from "../employee/parts/Window";
// import InputContainer from "./parts/InputContainer";

function EmployeeTransactionReport(props) {
  return (
    <div>
      <Board
        title="Total Transaction Report"
        subTitle={props.details[0] + " < "+ props.details[2] +" >"}
        tabs={props.tabs}
        activeTab="Total Transaction Report"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <Window title="Total Transaction Report" height="573px">
          {/* should complete================ */}
          <table>
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
        </Window>
      </Board>
    </div>
  );
}

export default EmployeeTransactionReport;
