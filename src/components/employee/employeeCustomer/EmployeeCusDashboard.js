import React from "react";

import Board from "../parts/Board";
import DashboardList from "../parts/DashboardList";

function EmployeeCusDashboard(props) {
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

  let details = [
    "John",
    "Doe",
    "001",
    "123456789V",
    "No 1, Galle Road, Colombo 03",
    "123@gmail.com",
    "0712345678",
    "1990-01-01",
  ];

  return (
    <div>
      <Board
        title="Employee Dashboard"
        subTitle={"< "+ details[0] +" >"}
        tabs={props.tabs}
        activeTab="Dashboard"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <DashboardList labels={labels} details={details} />
      </Board>
    </div>
  );
}

export default EmployeeCusDashboard;
