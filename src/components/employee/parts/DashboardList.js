import React from "react";

import styles from "./DashboardList.module.css";

function DashboardList(props) {
  return (
    <div>
      <div className={styles.nameContainer}>
        {props.labels.map((label, index) => (
          <p className={styles.label} key={index}>
            {label}
          </p>
        ))}
      </div>

      <div className={styles.detailContainer}>
        {props.details.map((detail, index) => (
          <p className={styles.label} key={index} >{detail}</p>
        ))}

      </div>
    </div>
  );
}

export default DashboardList;
