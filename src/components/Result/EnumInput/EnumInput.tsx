import React from "react";
import classNames from "classnames";

import { InputProps } from "../Inputs.types";
import inputsStyles from "../Inputs.module.css";

import styles from "./EnumInput.module.css";

function EnumInput({ label, options }: InputProps) {
  return (
    <>
      <div className={inputsStyles.label}>{label}</div>
      <div className={classNames(styles.options, inputsStyles.input)}>
        {options?.map((option, i) => (
          <label key={option.label + i} className={styles.option}>
            <input type="radio" name={label} />
            <span className={styles.optionLabel}>{option.label}</span>
          </label>
        ))}
      </div>
    </>
  );
}

export default EnumInput;
