import React from "react";

import Board from "../employee/parts/Board";
import Window from "../employee/parts/Window";

function ManagerLLPreview(props) {
  return (
    <div>
      <Board
        title="Late Loan Installment Report"
        subTitle=""
        tabs={props.tabs}
        activeTab="Late Loan Installment Report"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <Window title="Late Loan Installment Report" height="573px">
            {/* should complete================ */}
            <table>
                <thead>
                    <tr>
                        <th>Account No</th>
                        <th>Due Date</th>
                        <th>Installment Date</th>
                        <th>Amount</th>
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

export default ManagerLLPreview;