import React from "react";
import classNames from "classnames";

import { FormConfig, FormItemType } from "../../App";

import styles from "./Result.module.css";
import TextInput from "../Inputs/TextInput";

import NumberInput from "../Inputs/NumberInput";
import MultiLineInput from "../Inputs/MultiLineInput";
import BooleanInput from "../Inputs/BooleanInput";
import EnumInput from "../Inputs/DateInput";
import { InputType } from "../Inputs/Inputs.types";
import DateInput from "../Inputs/DateInput";

interface ResultProps {
  formConfig: FormConfig | undefined;
  className?: string;
}

function Result({ formConfig, className }: ResultProps) {
  const COMPONENT_REGISTRY: Record<FormItemType, InputType> = {
    [FormItemType.Number]: TextInput,
    [FormItemType.String]: NumberInput,
    [FormItemType.MultiLine]: MultiLineInput,
    [FormItemType.Boolean]: BooleanInput,
    [FormItemType.Date]: DateInput,
    [FormItemType.Enum]: EnumInput,
  };

  const renderForm = () => {
    if (formConfig === undefined) {
      return <h2>Nothing to see here</h2>;
    }

    return (
      <>
        {[
          formConfig.title ? (
            <h2 key="form-title">{formConfig.title}</h2>
          ) : null,
          formConfig.items.map((item, i) => {
            const InputX = COMPONENT_REGISTRY[item.type];
            const key = `${item.type}:${i}`;
            return <InputX key={key} label={item.label} />;
          }),
          <div key="form-actions">
            {formConfig.actions.map((action) => (
              <button key={action.text}>{action.text}</button>
            ))}
          </div>,
        ]}
      </>
    );
  };

  return (
    <section className={classNames(styles.root, className)}>
      <form className={styles.form} title={formConfig?.title}>
        {renderForm()}
      </form>
    </section>
  );
}

export default Result;
