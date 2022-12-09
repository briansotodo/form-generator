import React from "react";

import { InputProps } from "../../../index.types";

import styles from "../Inputs.module.css";

function BooleanInput({ id, label }: InputProps) {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input className={styles.input} type="checkbox" id={id} />
    </>
  );
}

export default BooleanInput;
