import React from "react";
import classNames from "classnames";

import { InputProps } from "../Inputs.types";
import inputsStyles from "../Inputs.module.css";

import styles from "./MultiLineInput.module.css";

function MultiLineInput({ label }: InputProps) {
  return (
    <>
      <label className={inputsStyles.label}>{label}</label>
      <textarea
        className={classNames(styles.textarea, inputsStyles.label)}
      ></textarea>
    </>
  );
}

export default MultiLineInput;
