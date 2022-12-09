import React from "react";

import { InputProps } from "../Inputs.types";
import styles from "../Inputs.module.css";

function NumberInput({ label }: InputProps) {
  return (
    <>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} type="number" />
    </>
  );
}

export default NumberInput;
