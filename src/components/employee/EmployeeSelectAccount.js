import React from "react";

import Board from "./parts/Board";
import Window from "./parts/Window";
import InputContainer from "./parts/InputContainer";

function EmployeeSelectAccount(props) {
  let lines = [
    { label: "Account No", type: "text" },
    // { label: "User ID", type: "text" },
    // { label: "Branch ID", type: "text" },
  ];

  function onSumbitAccountNo(accountNo) {
    fetch(`http://localhost:8002/account/get/${accountNo}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(passingData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // handle the response data here
        let customerDetails = [];
        if (data.responseObject.customerType === "individual") {
          customerDetails = [
            ". ",
            "SCR " + data.responseObject.balance,
            data.responseObject.firstName,
            data.responseObject.lastName,
            data.responseObject.accountNumber,
            data.responseObject.accountType,
            data.responseObject.branch_id,
            data.responseObject.nic,
            data.responseObject.address,
            data.responseObject.email,
            data.responseObject.phoneNumber,
            data.responseObject.dob,
          ];
        } else {
          customerDetails = [
            ". ",
            "SCR " + data.responseObject.balance,
            data.responseObject.orgName,
            data.responseObject.orgRegNumber,            
            data.responseObject.accountNumber,
            data.responseObject.accountType,
            data.responseObject.branch_id,
            data.responseObject.address,
            data.responseObject.email,
            data.responseObject.phoneNumber,
          ];
        }

        props.onSumbitSelectAccount(customerDetails);
      })
      .catch((error) => {
        console.log(error);
        // handle the error here
        props.onSumbitWrongAccount(accountNo);
      });
    console.log("<end of fetch in EmployeeSelectAccount>");
  }

  return (
    <div>
      <Board
        title={
          props.tabs.length === 5
            ? "Employee Select Account"
            : "Manager Select Account"
        }
        subTitle={props.details[0] + " < " + props.details[2] + " >"}
        tabs={props.tabs}
        activeTab="Select Account"
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <Window title="Select Account" height="573px">
          <InputContainer
            lines={lines}
            button="Access"
            type="short"
            onSumbit={onSumbitAccountNo}
          />
        </Window>
      </Board>
    </div>
  );
}

export default EmployeeSelectAccount;
