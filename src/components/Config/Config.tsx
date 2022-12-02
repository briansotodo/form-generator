import React, { ChangeEventHandler } from "react";
import classNames from "classnames";

import styles from "./Config.module.css";

interface ConfigProps {
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
  className?: string;
}

function Config({ value, onChange, errorMessage, className }: ConfigProps) {
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    onChange(e.target.value);
  };

  return (
    <section className={classNames(styles.root, className)}>
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      <textarea
        value={value}
        onChange={handleChange}
        className={styles.textarea}
      />
    </section>
  );
}

export default Config;
