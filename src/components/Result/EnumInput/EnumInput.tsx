import React from "react";
import classNames from "classnames";

import { InputProps } from "../../../index.types";

import inputsStyles from "../Inputs.module.css";

import styles from "./EnumInput.module.css";

function EnumInput({ id, label, options }: InputProps) {
  return (
    <>
      <div className={inputsStyles.label}>{label}</div>
      <div className={classNames(styles.options, inputsStyles.input)}>
        {options?.map((option, i) => {
          const radioId = `${id}__${option.label}`;
          return (
            <label
              key={option.label + i}
              className={styles.option}
              htmlFor={radioId}
            >
              <input type="radio" name={label} id={radioId} />
              <span className={styles.optionLabel}>{option.label}</span>
            </label>
          );
        })}
      </div>
    </>
  );
}

export default EnumInput;
