import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import EXAMPLE_FORM from "./utils/example-form";
import App from "./App";
import { FormConfig, FormItemType } from "./index.types";

// Make props of FormConfig required so we can test them all:
// `title`, `actions` and `items`
const EXAMPLE_FORM_REQUIRED = JSON.parse(EXAMPLE_FORM) as Required<FormConfig>;

test("tabs are rendered", () => {
  render(<App />);

  const tabConfig = screen.getByText(/Config/i);
  const tabResult = screen.getByText(/Result/i);

  expect(tabConfig).toBeInTheDocument();
  expect(tabResult).toBeInTheDocument();
});

test("title is rendered", () => {
  render(<App />);

  const title = screen.getByText(EXAMPLE_FORM_REQUIRED.title);
  expect(title).toBeInTheDocument();
});

test("actions are rendered", () => {
  render(<App />);

  EXAMPLE_FORM_REQUIRED.actions.forEach((action) => {
    const actionElement = screen.getByText(action.text);
    expect(actionElement).toBeInTheDocument();
  });
});

test("items of type enum are rendered", () => {
  render(<App />);

  // In case of form items of type enum, we have to test every option
  EXAMPLE_FORM_REQUIRED.items
    .filter((item) => item.type === FormItemType.Enum)
    .forEach((item) => {
      // Since we filtered for Enum type above, we now I cannot be undefined
      item.options!.forEach((itemOption) => {
        const itemOptionElement = screen.getByLabelText(itemOption.label);
        expect(itemOptionElement).toBeInTheDocument();
      });
    });
});

test("items of type other than enum are redenred", () => {
  render(<App />);

  EXAMPLE_FORM_REQUIRED.items
    .filter((item) => item.type !== FormItemType.Enum)
    .forEach((item) => {
      const itemElement = screen.getByLabelText(item.label);
      expect(itemElement).toBeInTheDocument();
    });
});

test("tab switching", () => {
  render(<App />);

  const tabResult = screen.getByText(/Result/i);
  const tabConfig = screen.getByText(/Config/i);

  // Result tab is active by default. Config tab is not.
  expect(tabResult).toBeDisabled();
  expect(tabConfig).not.toBeDisabled();

  // Switch to the Config tab
  userEvent.click(tabConfig);
  expect(tabResult).not.toBeDisabled();
  expect(tabConfig).toBeDisabled();

  // Switch back to the Result tab
  userEvent.click(tabResult);
  expect(tabResult).toBeDisabled();
  expect(tabConfig).not.toBeDisabled();
});
