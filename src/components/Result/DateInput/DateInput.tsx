import React from "react";

import { InputProps } from "../../../index.types";

import styles from "../Inputs.module.css";

function DateInput({ id, label }: InputProps) {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input className={styles.input} type="date" id={id} />
    </>
  );
}

export default DateInput;
