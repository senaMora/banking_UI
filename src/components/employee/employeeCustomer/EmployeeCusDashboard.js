import React from "react";

import Board from "../parts/Board";
import DashboardList from "../parts/DashboardList";

function EmployeeCusDashboard(props) {
  let customerLabels = [
    "-- INDIVIDUAL--",
    "Balance :",
    "First Name :",
    "Last Name :",    
    "Account No :",
    "Account Type :",
    "Branch ID:",
    "NIC No :",
    "Address :",
    "Email :",
    "Telephone No :",
    "Date of Birth :",
  ];

  let organizationLabels = [
    "-- ORGANIZATION --",
    "Balance :",
    "Organization Name :",
    "Register Number :",    
    "Account No :",
    "Account Type :",
    "Branch ID:",
    "Address :",
    "Email :",
    "Telephone No :",
  ];

  return (
    <div>
      <Board
        title="Customer Dashboard"
        subTitle={props.details[2] + " < " + props.details[4] + " >"}
        tabs={props.tabs}
        activeTab="Dashboard"
        color="#dbf4d8"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <DashboardList
          labels={
            props.details.length === 12 ? customerLabels : organizationLabels
          }
          details={props.details}
        />
      </Board>
    </div>
  );
}

export default EmployeeCusDashboard;
