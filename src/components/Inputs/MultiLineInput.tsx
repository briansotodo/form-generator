import React from "react";

import { InputProps } from "./Inputs.types";

function MultiLineInput({ label }: InputProps) {
  return (
    <label>
      <span>{label}</span>
      <textarea></textarea>
    </label>
  );
}

export default MultiLineInput;
