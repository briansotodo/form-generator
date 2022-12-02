import React from "react";
import classNames from "classnames";

import { FormConfig, FormItemType } from "../../App";

import styles from "./Result.module.css";

interface ResultProps {
  formConfig: FormConfig | undefined;
  className?: string;
}

function Result({ formConfig, className }: ResultProps) {
  const COMPONENT_REGISTRY = {
    [FormItemType.Number]: (
      <label>
        <input type="number" value="42" />
      </label>
    ),
    [FormItemType.String]: (
      <label>
        <input type="text" value="test" />
      </label>
    ),
    [FormItemType.MultiLine]: (
      <label>
        <textarea></textarea>
      </label>
    ),
    [FormItemType.Boolean]: (
      <label>
        <input type="checkbox" />
      </label>
    ),
    [FormItemType.Date]: (
      <label>
        <input type="date" />
      </label>
    ),
    [FormItemType.Enum]: (
      <label>
        <input type="radio" />
      </label>
    ),
  };
  const renderForm = () => {
    if (formConfig === undefined) {
      return <h2>Nothing to see here</h2>;
    }

    return (
      <>
        {[
          formConfig.title ? <h2>{formConfig.title}</h2> : null,
          formConfig.items.map((item) => COMPONENT_REGISTRY[item.type]),
          <div>
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
