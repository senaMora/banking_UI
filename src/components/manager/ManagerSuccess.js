import React from "react";
import successPic from "../../images/success.png";
import styles from "../employee/parts/Window.module.css";

import Board from "../employee/parts/Board";
import Window from "../employee/parts/Window";

function ManagerSuccess(props) {
  return (
    <div>
      <Board
        title={props.title}
        subTitle={props.subTitle}
        tabs={props.tabs}
        activeTab={props.subTitle}
        updateTab={(clickedTab) => props.updateTab(clickedTab)}
      >
        <div className={`${styles.zoomIn} ${styles.Window}`}>
          <Window title={props.windowTitle} height="573px" div>
            <div style={{ height: 50 }} />
            <img
              style={{ width: 200, alignSelf: "center" }}
              src={successPic}
              alt="success pic"
            />
            <p style={{ fontSize: 30, color: "gray", textAlign: "center" }}>
              {props.message}
            </p>
          </Window>
        </div>
      </Board>
    </div>
  );
}

export default ManagerSuccess;
