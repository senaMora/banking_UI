// EmployeeCusDashboard.js

import React from "react";
import Board from "../parts/Board";
import DashboardList from "../parts/DashboardList";

function EmployeeCusDashboard(props) {
  let labels;
  if (props.details[props.details.length - 1] === 'individual') {
    labels = [
      "Balance",
      "First Name",
      "Last Name",
      "Account No",
      "Branch ID",
      "NIC No",
      "Address",
      "Email",
      "Telephone No",
      "Date of Birth",
      "Customer Type",
    ];
  } else if (props.details[props.details.length - 1] === 'organization') {
    labels = [
      "Balance",
      "Organization Name",
      "Registration Number",
      "Account No",
      "Branch ID",
      "Address",
      "Email",
      "Telephone No",
      "Customer Type",
    ];
  }

  return (
    <div>
      <Board
        title="Customer Dashboard"
        subTitle={props.details[1] + " < "+ props.details[3] +" >"}
        tabs={props.tabs}
        activeTab="Dashboard"
        color="#dbf4d8"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <DashboardList labels={labels} details={props.details} />
      </Board>
    </div>
  );
}

export default EmployeeCusDashboard;
