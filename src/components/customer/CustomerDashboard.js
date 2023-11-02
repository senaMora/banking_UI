import React from "react";

import Board from "./parts/Board";
import DashboardList from "./parts/DashboardList";

function CustomerDashboard(props) {
  let labels = [
    "Balance",
    "First Name",
    "Last Name",
    "Account No",
    "Account Type",
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
        title="Welcome!"
        subTitle={props.details[1] + " < "+ props.details[3] +" >"}
        tabs={props.tabs}
        activeTab="Dashboard"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <DashboardList labels={labels} details={props.details} />
      </Board>
    </div>
  );
}

export default CustomerDashboard;
