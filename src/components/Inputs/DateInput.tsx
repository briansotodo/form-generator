import React from "react";

import { InputProps } from "./Inputs.types";
import styles from "./Inputs.module.css";

function DateInput({ label }: InputProps) {
  return (
    <label className={styles.label}>
      <span>{label}</span>
      <input type="radio" />
    </label>
  );
}

export default DateInput;
