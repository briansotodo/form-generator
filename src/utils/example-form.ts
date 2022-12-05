import { FormConfig, FormItemType } from "../App";

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
