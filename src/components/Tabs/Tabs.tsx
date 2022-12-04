import React, { Key } from "react";

import Tab from "./Tab/Tab";

interface TabsProps<T> {
  activeTab: T;
  onActiveTabChange: (tab: T) => void;
  tabs: Array<{ id: T; title: string }>;
}

function Tabs<T extends Key>(props: TabsProps<T>) {
  const { activeTab, onActiveTabChange, tabs } = props;

  const handleTabClick = (tab: T): void => {
    onActiveTabChange(tab);
  };

  return (
    <section>
      {tabs.map((tab) => (
        <Tab<T>
          key={tab.id}
          id={tab.id}
          onClick={handleTabClick}
          active={tab.id === activeTab}
        >
          {tab.title}
        </Tab>
      ))}
    </section>
  );
}

export default Tabs;
