import React from "react";

import Board from "../employee/parts/Board";
import Window from "../employee/parts/Window";
// import InputContainer from "./parts/InputContainer";

function ManagerLateLoanReport(props) {
  return (
    <div>
      <Board
        title="Late Loan Installment Report"
        subTitle={props.details[0] + " < "+ props.details[2] +" >"}
        tabs={props.tabs}
        activeTab="Late Loan Installment Report"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <Window title="Late Loan Installment Report" height="573px">
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

export default ManagerLateLoanReport;
