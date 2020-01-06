import React from "react";
import { useInputChange } from "./useInputChange";

import styles from "./style.scss";

export default props => {
  const [input, handleInputChange] = useInputChange();

  const handleSubmit = event => {
    console.log("Form submitted...");
    // event.preventDefault();
  };

  return (
    <div className={styles.root}>
      <h1>What is your favourite animal?</h1>
      <form onSubmit={handleSubmit}>
        <input type="radio" name="animal" id="cat" />
        <label htmlFor="cat" className={styles.btn}>Cat</label>
        <input type="radio" name="animal" id="dog" />
        <label htmlFor="dog" className={styles.btn}>Dog</label>
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
