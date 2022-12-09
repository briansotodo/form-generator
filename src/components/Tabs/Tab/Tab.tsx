import React, { ReactNode } from "react";
import classNames from "classnames";

import styles from "./Tab.module.css";

interface TabProps<T> {
  active: boolean;
  id: T;
  onClick: (id: T) => void;
  children: ReactNode;
}

function Tab<T>({ active, id, onClick, children }: TabProps<T>) {
  const handleClick = (): void => {
    onClick(id);
  };

  return (
    <button
      onClick={handleClick}
      className={classNames(styles.tab, active && styles.activeTab)}
      disabled={active}
    >
      {children}
    </button>
  );
}

export default Tab;
