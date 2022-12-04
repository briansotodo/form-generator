import React from "react";

import { InputProps } from "./Inputs.types";

function BooleanInput({ label }: InputProps) {
  return (
    <label>
      <span>{label}</span>
      <input type="checkbox" />
    </label>
  );
}

export default BooleanInput;
