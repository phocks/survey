import React from "react";
import { useInputChange } from './useInputChange'

import styles from "./style.scss";

export default props => {
  const [input, handleInputChange] = useInputChange();

  const handleSubmit = (event) => {
    console.log("Form submitted...")
    event.preventDefault();
  }

  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit}>
       <div>
        <label>Username:</label>
        <input type="radio" name="username" onChange={handleInputChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="radio" name="password" onChange={handleInputChange} />
      </div>
      <input type="submit" />
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
