import React, { useState } from "react";

import Config from "./components/Config/Config";
import Result from "./components/Result/Result";

import styles from "./App.module.css";
import Tabs from "./components/Tabs/Tabs";
import Button from "./components/Button/Button";
import validateConfig from "./utils/validateConfig";
import { FormConfig } from "./index.types";
import EXAMPLE_FORM from "./utils/example-form";

const EXAMPLE_FORM_JSON = JSON.parse(EXAMPLE_FORM);

enum TabType {
  Config = "config",
  Result = "result",
}

function App() {
  const [activeTab, setActiveTab] = useState(TabType.Result);
  const [text, setText] = useState(EXAMPLE_FORM);
  const [formConfig, setFormConfig] = useState<FormConfig>(EXAMPLE_FORM_JSON);
  const [errorMessage, setErrorMessage] = useState("");

  const handleTextChange = (text: string): void => {
    setText(text);
  };

  const handleApplyClick = (): void => {
    let formConfig;

    try {
      const json = JSON.parse(text);
      formConfig = validateConfig(json);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Unknown error.");
      }

      console.error(err);
      return;
    }

    setErrorMessage("");

    setFormConfig(formConfig);
    setActiveTab(TabType.Result);
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.root}>
      <Tabs<TabType>
        activeTab={activeTab}
        onActiveTabChange={handleTabChange}
        tabs={[
          { id: TabType.Config, title: "Config" },
          { id: TabType.Result, title: "Result" },
        ]}
      />

      {activeTab === TabType.Config && (
        <>
          <Config
            className={styles.tabContent}
            value={text}
            onChange={handleTextChange}
            errorMessage={errorMessage}
          />

          <Button
            className={styles.applyButton}
            onClick={handleApplyClick}
            disabled={text.length < 1}
          >
            Apply
          </Button>
        </>
      )}

      {activeTab === TabType.Result && (
        <Result className={styles.tabContent} formConfig={formConfig} />
      )}
    </div>
  );
}

export default App;
