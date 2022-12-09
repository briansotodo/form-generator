export interface FormConfig {
  title?: string;
  items: Array<FormItem>;
  actions?: Array<FormAction>;
}

interface FormItem {
  label: string;
  type: FormItemType;
  options?: Array<{ label: string }>;
}

export enum FormItemType {
  Number = "number",
  String = "string",
  MultiLine = "multi-line",
  Boolean = "boolean",
  Date = "date",
  Enum = "enum",
}

interface FormAction {
  text: string;
  type?: FormActionType;
}

export type FormActionType = "primary" | "secondary";

export interface InputProps {
  label: string;
  id: string;
  options?: Array<{ label: string }>;
}
