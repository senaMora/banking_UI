import React from "react";

import Board from "./parts/Board";
import DashboardList from "./parts/DashboardList";

function EmployeeDashboard(props) {
  let labels = [
    "First Name",
    "Last Name",
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
        title="Customer Dashboard"
        subTitle={props.details[0]}
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
