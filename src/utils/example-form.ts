import { FormConfig, FormItemType } from "../index.types";

/**
 * A valid form which incldues all the options we support.
 * This is meant to be used a valid test for the unit tests and
 * as default form, so the user doesn't have to start with an config tab.
 */
const EXAMPLE_FORM: FormConfig = {
  title: "Example Form",
  actions: [
    { text: "Cancel", type: "secondary" },
    { text: "Save", type: "primary" },
  ],
  items: [
    { label: "Count", type: FormItemType.Number },
    { label: "Editable", type: FormItemType.Boolean },
    { label: "Caption", type: FormItemType.String },
    { label: "Description", type: FormItemType.MultiLine },
    { label: "Date", type: FormItemType.Date },
    {
      label: "Color",
      type: FormItemType.Enum,
      options: [{ label: "Red" }, { label: "Green" }, { label: "Blue" }],
    },
  ],
};

export default EXAMPLE_FORM;
