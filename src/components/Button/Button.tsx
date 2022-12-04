import React, { ReactNode } from "react";
import classNames from "classnames";

import styles from "./Button.module.css";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  type?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
}

function Button(props: ButtonProps) {
  const { onClick, children, type = "primary", className, disabled } = props;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(className, styles.button, styles[type])}
    >
      {children}
    </button>
  );
}

export default Button;
