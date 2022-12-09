import React from "react";

import { InputProps } from "../Inputs.types";
import styles from "../Inputs.module.css";

function DateInput({ label }: InputProps) {
  return (
    <>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} type="date" />
    </>
  );
}

export default DateInput;
