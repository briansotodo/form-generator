import React from "react";

import { InputProps } from "./Inputs.types";

function TextInput({ label }: InputProps) {
  return (
    <label>
      <span>{label}</span>
      <input type="text" />
    </label>
  );
}

export default TextInput;
