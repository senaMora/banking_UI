import { React, useState } from "react";

import Board from "./parts/Board";
import Window from "./parts/Window";
import styles from "./parts/Table.module.css"
// import InputContainer from "./parts/InputContainer";

function EmployeeTransactionReport(props) {
  return (
    <div>
      <Board
        title="Total Transaction Report"
        subTitle={props.details[0] + " < " + props.details[2] + " >"}
        tabs={props.tabs}
        activeTab="Total Transaction Report"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <Window title="Total Transaction Report" height="700px">
          {/* should complete================ */}
          <table className={styles['custom-table']}>
            <thead>
              <tr>
                <th>Account No</th>
                <th>Transaction Type</th>
                <th>Amount</th>
                <th>Time Spam</th>
              </tr>
            </thead>
            <tbody>
              {props.dataRows.slice(0, 15).map((dataRow, index) => (
                <tr>
                  {dataRow === null
                    ? "null"
                    : dataRow.map((data, index) => <td>{data}</td>)}
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
