import React from "react";

import { InputProps } from "./Inputs.types";
import styles from "./Inputs.module.css";

function TextInput({ label }: InputProps) {
  return (
    <label className={styles.label}>
      <span>{label}</span>
      <input type="text" />
    </label>
  );
}

export default TextInput;
