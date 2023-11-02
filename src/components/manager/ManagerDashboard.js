import React, { useState } from "react";
import Board from "../employee/parts/Board";
import DashboardList from "../employee/parts/DashboardList";


function ManagerDashboard(props) {
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
        title="Manager Dashboard"
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

export default ManagerDashboard;
