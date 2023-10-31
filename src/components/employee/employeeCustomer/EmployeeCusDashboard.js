import React from "react";

import Board from "../parts/Board";
import DashboardList from "../parts/DashboardList";

function EmployeeCusDashboard(props) {
  let labels = [
    "Balance",
    "First Name",
    "Last Name",
    "Organization Name",
    "Account No",
    "Branch ID",
    "NIC No",
    "Address",
    "Email",
    "Telephone No",
    "Date of Birth",
    "Account Type",
  ];

  // if (props.details[11] === "individual") {
  //   labels = [
  //     "Balance",
  //     "First Name",
  //     "Last Name",
  //     "Organization Name",
  //     "Account No",
  //     "Branch ID",
  //     "NIC No",
  //     "Address",
  //     "Email",
  //     "Telephone No",
  //     "Date of Birth",
  //     "Account Type",
  //   ];
  // } else if (props.details[11] === "organization") {
  //   labels = [
  //     "Balance",
  //     "test First Name",
  //     "test Last Name",
  //     "Organization Name",
  //     "Account No",
  //     "Branch ID",
  //     "test nic no",
  //     "Address",
  //     "Email",
  //     "Telephone No",
  //     "test date of birth",
  //     "Account Type",
  //   ];
  // }


  return (
    <div>
      <Board
        title="Customer Dashboard"
        subTitle={props.details[1] + " < "+ props.details[4] +" >"}
        tabs={props.tabs}
        activeTab="Dashboard"
        color="#dbf4d8"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <DashboardList
         labels={labels} details={props.details} />
      </Board>
    </div>
  );
}

export default EmployeeCusDashboard;
