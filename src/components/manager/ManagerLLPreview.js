import React from "react";

import Board from "../employee/parts/Board";
import Window from "../employee/parts/Window";
import Table from "../employee/parts/Table";

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
        <Table/>
      </Window>
      </Board>
    </div>
  );
}

export default ManagerLLPreview;