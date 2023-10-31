// EmployeeSelectAccount.js

import React from "react";
import Board from "./parts/Board";
import Window from "./parts/Window";
import InputContainer from "./parts/InputContainer";

function EmployeeSelectAccount(props) {
  let lines = [
    { label: "Account No", type: "text" },
  ];

  function onSumbitAccountNo(accountNo) {
    fetch(`http://localhost:8002/account/get/${accountNo}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let customerDetails;
        if (data.responseObject.customerType === 'individual') {
          customerDetails = [
            "SCR " + data.responseObject.balance,
            data.responseObject.firstName,
            data.responseObject.lastName,
            data.responseObject.accountNumber,
            data.responseObject.branch_id,
            data.responseObject.nic,
            data.responseObject.address,
            data.responseObject.email,
            data.responseObject.phoneNumber,
            data.responseObject.dob,
            data.responseObject.customerType,
          ];
        } else if (data.responseObject.customerType === 'organization') {
          customerDetails = [
            "SCR " + data.responseObject.balance,
            data.responseObject.orgName,
            data.responseObject.orgRegNumber,
            data.responseObject.accountNumber,
            data.responseObject.branch_id,
            null,
            data.responseObject.address,
            data.responseObject.email,
            data.responseObject.phoneNumber,
            null,
            data.responseObject.customerType,
          ];
        }
        props.onSumbitSelectAccount(customerDetails);
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = accountNo + " is not a valid Account Number! Please check it again."
        props.onSumbitWrongAccount(errorMessage);
      });
  }

  return (
    <div>
      <Board
        title={props.tabs.length === 5 ? "Employee Select Account" : "Manager Select Account"}
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
