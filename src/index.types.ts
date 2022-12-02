export enum FormItemType {
  Number = "number",
  String = "string",
  MultiLine = "multi-line",
  Boolean = "boolean",
  Date = "date",
  Enum = "enum",
}

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
