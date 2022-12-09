import React from "react";
import { InputProps } from "../../../index.types";

import styles from "../Inputs.module.css";

function TextInput({ label, id }: InputProps) {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input className={styles.input} type="text" id={id} />
    </>
  );
}

export default TextInput;
