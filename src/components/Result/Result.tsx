import React from "react";
import classNames from "classnames";

import { FormConfig, FormItemType } from "../../App";

import Button from "../Button/Button";

import NumberInput from "./NumberInput/NumberInput";
import TextInput from "./NumberInput/NumberInput";
import MultiLineInput from "./MultiLineInput/MultiLineInput";
import BooleanInput from "./BooleanInput/BooleanInput";
import DateInput from "./DateInput/DateInput";
import EnumInput from "./EnumInput/EnumInput";
import { InputType } from "./Inputs.types";
import styles from "./Result.module.css";

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
      return (
        <div>
          <h3 className={styles.noResultTitle}>No form to display</h3>
          <p className={styles.noResultMessage}>
            To display a form you have to <i>enter its configuration</i> in the
            config tab, and then <i>click the apply button</i>.
          </p>
        </div>
      );
    }

    return (
      <div
        key="form-input-elements"
        className={styles.formInputElementsContainer}
      >
        {[
          formConfig.title ? (
            <header key="form-title" className={styles.formTitle}>
              <h2>{formConfig.title}</h2>
            </header>
          ) : null,
          formConfig.items?.map((item, i) => {
            const InputEl = COMPONENT_REGISTRY[item.type];
            const key = `${item.type}:${i}`;
            return <InputEl key={key} label={item.label} />;
          }),
          <div key="form-actions" className={styles.formActions}>
            {formConfig.actions?.map((action) => (
              <Button className={styles.formActionButton} key={action.text}>
                {action.text}
              </Button>
            ))}
          </div>,
        ]}
      </div>
    );
  };

  return (
    <section className={classNames(styles.root, className)}>
      <div>{renderForm()}</div>
    </section>
  );
}

export default Result;
