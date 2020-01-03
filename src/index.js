import React from "react";
import { useInputChange } from "./useInputChange";

import styles from "./style.scss";

export default props => {
  const [input, handleInputChange] = useInputChange();

  const handleSubmit = event => {
    console.log("Form submitted...");
    event.preventDefault();
  };

  return (
    <div className={styles.root}>
      <h1>What is your favourite animal?</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.radio}>
          <label for="cat">Cat</label>
          <input
            type="radio"
            name="cat"
            id="cat"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.radio}>
          <label for="dog">Dog</label>
          <input
            type="radio"
            name="dog"
            id="dog"
            onChange={handleInputChange}
          />
        </div>
        {/* <input type="submit" /> */}
      </form>
      {/* <h2>A test question!!</h2>
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
      </button> */}
    </div>
  );
};
