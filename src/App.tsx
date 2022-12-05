import React, { useState } from "react";

import Config from "./components/Config/Config";
import Result from "./components/Result/Result";

import styles from "./App.module.css";
import Tabs from "./components/Tabs/Tabs";
import Button from "./components/Button/Button";
import validateConfig from "./utils/validateConfig";
import EXAMPLE_FORM from "./utils/example-form";

export enum FormItemType {
  Number = "number",
  String = "string",
  MultiLine = "multi-line",
  Boolean = "boolean",
  Date = "date",
  Enum = "enum",
}

export type FormItemOption = { label: string };

export interface FormItem {
  label: string;
  type: FormItemType;
  options?: Array<{ label: string }>;
}

export type FormActionType = "primary" | "secondary";

export interface FormAction {
  text: string;
  type?: FormActionType;
}

export interface FormConfig {
  title?: string;
  items?: Array<FormItem>;
  actions?: Array<FormAction>;
}

enum SupportedTab {
  Config = "config",
  Result = "result",
}

function App() {
  const [activeTab, setActiveTab] = useState(SupportedTab.Result);
  const [text, setText] = useState(JSON.stringify(EXAMPLE_FORM));
  const [formConfig, setFormConfig] = useState<FormConfig>(EXAMPLE_FORM);
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
    setActiveTab(SupportedTab.Result);
  };

  ///- Tabs

  const handleTabChange = (tab: SupportedTab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.root}>
      <Tabs<SupportedTab>
        activeTab={activeTab}
        onActiveTabChange={handleTabChange}
        tabs={[
          { id: SupportedTab.Config, title: "Config" },
          { id: SupportedTab.Result, title: "Result" },
        ]}
      />

      {activeTab === SupportedTab.Config && (
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

      {activeTab === SupportedTab.Result && (
        <Result className={styles.tabContent} formConfig={formConfig} />
      )}
    </div>
  );
}

export default App;
