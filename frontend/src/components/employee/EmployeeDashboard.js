import React from "react";

import Board from "./parts/Board";
import DashboardList from "./parts/DashboardList";

function EmployeeDashboard(props) {
  let labels = [
    "First Name",
    "Last Name",
    "Account No",
    "Branch ID",
    "NIC No",
    "Address",
    "Email",
    "Telephone No",
    "Date of Birth",
  ];

  return (
    <div>
      <Board
        title="Employee Dashboard"
        subTitle={props.details[0] + " < "+ props.details[2] +" >"}
        tabs={props.tabs}
        activeTab="Dashboard"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <DashboardList labels={labels} details={props.details} />
      </Board>
    </div>
  );
}

export default EmployeeDashboard;
