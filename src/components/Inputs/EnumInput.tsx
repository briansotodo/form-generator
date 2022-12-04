import React from "react";

import { InputProps } from "./Inputs.types";
import styles from "./Inputs.module.css";

function BooleanInput({ label }: InputProps) {
  return (
    <label className={styles.label}>
      <span>{label}</span>
      <input type="checkbox" />
    </label>
  );
}

export default BooleanInput;
