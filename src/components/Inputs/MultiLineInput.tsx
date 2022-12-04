import React from "react";

import { InputProps } from "./Inputs.types";
import styles from "./Inputs.module.css";

function MultiLineInput({ label }: InputProps) {
  return (
    <label className={styles.label}>
      <span>{label}</span>
      <textarea></textarea>
    </label>
  );
}

export default MultiLineInput;
