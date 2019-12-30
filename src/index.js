import React from "react";
import styles from "./style.scss";

export default props => {
  return (
    <div className={styles.root}>
      <p>A test question!!</p>
      <button
        onClick={() => {
          props.onComplete({ data: 1 });
        }}
      >
        Choice 1
      </button>
      <button
        onClick={() => {
          props.onComplete({ data: 2 });
        }}
      >
        Choice 2
      </button>
    </div>
  );
};
