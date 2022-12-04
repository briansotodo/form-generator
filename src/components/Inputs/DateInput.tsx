import React from "react";

import { InputProps } from "./Inputs.types";

function DateInput({ label }: InputProps) {
  return (
    <label>
      <span>{label}</span>
      <input type="radio" />
    </label>
  );
}

export default DateInput;
