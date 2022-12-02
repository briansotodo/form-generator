import { FormItemOption } from "../../App";

export type InputType = (props: InputProps) => JSX.Element;

export interface InputProps {
  label: string;
  options?: Array<FormItemOption>;
}
