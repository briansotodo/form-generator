import React from "react";
import classNames from "classnames";

import { InputProps } from "../../../index.types";

import inputsStyles from "../Inputs.module.css";

import styles from "./MultiLineInput.module.css";

function MultiLineInput({ id, label }: InputProps) {
  return (
    <>
      <label className={inputsStyles.label} htmlFor={id}>
        {label}
      </label>
      <textarea
        className={classNames(styles.textarea, inputsStyles.label)}
        id={id}
      ></textarea>
    </>
  );
}

export default MultiLineInput;
