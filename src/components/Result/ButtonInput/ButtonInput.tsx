import React, { ReactNode } from "react";
import classNames from "classnames";

import styles from "./ButtonInput.module.css";
import { FormActionType } from "../../../index.types";

interface ButtonInputProps {
  children: ReactNode;
  className?: string;
  variant?: FormActionType;
}

function ButtonInput(props: ButtonInputProps) {
  const { children, className, variant = "primary" } = props;

  return (
    <button className={classNames(styles.button, styles[variant], className)}>
      {children}
    </button>
  );
}

export default ButtonInput;
